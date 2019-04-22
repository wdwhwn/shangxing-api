package com.platform.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.platform.entity.OcMemberFavoritesEntity;
import com.platform.entity.TokenEntity;
import com.platform.service.TokenService;
import com.platform.util.ApiBaseAction;
import org.apache.shiro.authz.annotation.RequiresPermissions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.platform.entity.OcGoodsEntity;
import com.platform.service.OcGoodsService;
import com.platform.utils.PageUtils;
import com.platform.utils.Query;
import com.platform.utils.R;

/**
 * 商品表Controller
 * @author wd
 * @email 952172674@qq.com
 * @date 2019-04-12 11:21:54*/


@RestController
@RequestMapping("/index.php/app/index")
public class OcGoodsController extends ApiBaseAction {
    @Autowired
    private OcGoodsService ocGoodsService;
    @Autowired
    private TokenService tokenService;
// 会员店铺 商品列表
    @RequestMapping("/shopGoodsList")
    public Object shopGoodsList(@RequestParam(value = "page", defaultValue = "1") Integer page,
                  @RequestParam(value = "size", defaultValue = "10") Integer size,String token) {
        //查询列表数据
        TokenEntity tokenEntity = tokenService.queryByToken(token);
        //查询列表数据
        Map params = new HashMap();
        params.put("page", page);
        params.put("limit", size);
        params.put("mid",tokenEntity.getUserId());
        Query query = new Query(params);
        List<OcGoodsEntity> ocGoodsEntities = ocGoodsService.queryList(query);
        int total = ocGoodsService.queryTotal(query);
        PageUtils pageUtil = new PageUtils(ocGoodsEntities, total, query.getLimit(), query.getPage());
        return toResponsSuccess(pageUtil);
    }

// 商品模块 商品列表


    @RequestMapping("/goodsList")
    public Object list(@RequestParam(value = "page", defaultValue = "1") Integer page,
                       @RequestParam(value = "size", defaultValue = "10") Integer size,String token,OcGoodsEntity ocGoods) {
        //查询列表数据
        TokenEntity tokenEntity = tokenService.queryByToken(token);
        //查询列表数据
        Map params = new HashMap();
        params.put("page", page);
        params.put("limit", size);
        params.put("mid",tokenEntity.getUserId());
        params.put("keywords",ocGoods.getKeywords());
        params.put("isHot",ocGoods.getIsHot());
        params.put("isRecommend",ocGoods.getIsRecommend());
        params.put("isNew",ocGoods.getIsNew());
        params.put("supplierId",ocGoods.getSupplierId());
        params.put("provinceId",ocGoods.getProvinceId());
        params.put("cityId",ocGoods.getCityId());
        params.put("districtId",ocGoods.getDistrictId());
        params.put("festivalId",ocGoods.getFestivalId());
        params.put("sidx", "id");
        params.put("order", "asc");

        Query query = new Query(params);
        List<OcGoodsEntity> ocGoodsEntities = ocGoodsService.queryGoodsList(query);
        int total = ocGoodsService.queryGoodsTotal(query);
        PageUtils pageUtil = new PageUtils(ocGoodsEntities, total, query.getLimit(), query.getPage());

        return toResponsSuccess(pageUtil);
    }
//商品模块-商品详情


    @RequestMapping("/goodsDetail")
    public R info(Integer goodsId) {
        OcGoodsEntity ocGoods = ocGoodsService.queryObject(goodsId);
        return R.ok().put("ocGoods", ocGoods);
    }

// 保存


    public R save(@RequestBody OcGoodsEntity ocGoods) {
        ocGoodsService.save(ocGoods);

        return R.ok();
    }
//修改


    public R update(@RequestBody OcGoodsEntity ocGoods) {
        ocGoodsService.update(ocGoods);

        return R.ok();
    }

// 删除


    public R delete(@RequestBody Integer[] goodsIds) {
        ocGoodsService.deleteBatch(goodsIds);

        return R.ok();
    }

// 查看所有列表


    public R queryAll(@RequestParam Map<String, Object> params) {

        List<OcGoodsEntity> list = ocGoodsService.queryList(params);

        return R.ok().put("list", list);
    }
}
