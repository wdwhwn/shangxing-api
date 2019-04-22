package com.platform.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.platform.annotation.LoginUser;
import com.platform.entity.*;
import com.platform.service.TokenService;
import com.platform.util.ApiBaseAction;
import com.platform.util.ApiPageUtils;
import io.swagger.annotations.ApiOperation;
import org.apache.shiro.authz.annotation.RequiresPermissions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.platform.service.OcMemberAddressService;
import com.platform.utils.PageUtils;
import com.platform.utils.Query;
import com.platform.utils.R;
/*
*
 * 收货地址表Controller
 *
 * @author wd
 * @email 952172674@qq.com
 * @date 2019-04-11 11:40:58*/


@RestController
@RequestMapping("/index.php/app/index/")
public class OcMemberAddressController extends ApiBaseAction {
    @Autowired
    private OcMemberAddressService ocMemberAddressService;
    @Autowired
    private TokenService tokenService;

//用户地址
    @RequestMapping("addressList")
    public Object list(@LoginUser OcMemberEntity ocMemberEntity,@RequestParam(value = "page", defaultValue = "1") Integer page,
                       @RequestParam(value = "size", defaultValue = "10") Integer size,String token) {
        TokenEntity tokenEntity = tokenService.queryByToken(token);
        //查询列表数据
        Map params = new HashMap();
        params.put("page", page);
        params.put("limit", size);
        params.put("mid",tokenEntity.getUserId());
        params.put("sidx","id");
        params.put("order", "asc");
        Query query = new Query(params);
        List<OcMemberAddressEntity> ocMemberAddressList = ocMemberAddressService.queryList(query);

        int total = ocMemberAddressService.queryTotal(query);
            /*List<BrandVo> brandEntityList = brandService.queryList(query);
        int total = brandService.queryTotal(query);*/

        ApiPageUtils pageUtil = new ApiPageUtils(ocMemberAddressList, total, query.getLimit(), query.getPage());
        return toResponsSuccess(pageUtil);
    }


//地址详情


    @RequestMapping("/addressDetail")
    public Object info(Integer id) {
        OcMemberAddressEntity ocMemberAddress = ocMemberAddressService.queryObject(id);
        return toResponsSuccess(ocMemberAddress);
    }
//地址添加


    @RequestMapping("/addressAdd")
    public R save( OcMemberAddressEntity pageparm) {
        ocMemberAddressService.save(pageparm);
        return R.ok();
    }
//修改地址
    @RequestMapping("/addressUpdate")
    public R update(OcMemberAddressEntity pageparm) {
        ocMemberAddressService.update(pageparm);

        return R.ok();
    }

//删除地址
    @RequestMapping("/addressDelete")
    public R delete(Integer[] id) {
        ocMemberAddressService.updateBatch(id);
        return R.ok();
    }

// 地址默认
    @RequestMapping("/addressDefault")
    public R addressDefault(Integer id,String token) {
        TokenEntity tokenEntity = tokenService.queryByToken(token);
        Integer mid = Math.toIntExact(tokenEntity.getUserId());
        ocMemberAddressService.updateDefault(id,mid);
        return R.ok();
    }
// 查看列表

    public R list(@RequestParam Map<String, Object> params) {
        //查询列表数据
        Query query = new Query(params);
        List<OcMemberAddressEntity> ocMemberAddressList = ocMemberAddressService.queryList(query);
        int total = ocMemberAddressService.queryTotal(query);
        PageUtils pageUtil = new PageUtils(ocMemberAddressList, total, query.getLimit(), query.getPage());
        return R.ok().put("page", pageUtil);
    }
//查看所有列表
    public R queryAll( Map<String, Object> params) {

        List<OcMemberAddressEntity> list = ocMemberAddressService.queryList(params);

        return R.ok().put("list", list);
    }
}
