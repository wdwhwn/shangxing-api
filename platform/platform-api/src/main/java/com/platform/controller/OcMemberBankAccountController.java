package com.platform.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

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

import com.platform.entity.OcMemberBankAccountEntity;
import com.platform.service.OcMemberBankAccountService;
import com.platform.utils.PageUtils;
import com.platform.utils.Query;
import com.platform.utils.R;

/**
 * 会员提现账号Controller
 *
 * @author wd
 * @email 952172674@qq.com
 * @date 2019-04-16 16:09:41*/


@RestController
@RequestMapping("index.php/app/index")
public class OcMemberBankAccountController extends ApiBaseAction {
    @Autowired
    private OcMemberBankAccountService ocMemberBankAccountService;
    @Autowired
    private TokenService tokenService;
//  提现账号
    @RequestMapping("accountList")
    public R list(String token,@RequestParam(value = "page", defaultValue = "1") Integer page,
                  @RequestParam(value = "size", defaultValue = "10") Integer size) {
        TokenEntity tokenEntity = tokenService.queryByToken(token);
        Integer mid = Math.toIntExact(tokenEntity.getUserId());
        //查询列表数据
        Map params = new HashMap();
//        params.put("fields", "id, name, floor_price, app_list_pic_url");
        params.put("page", page);
        params.put("limit", size);
        params.put("mid", "mid");
//        params.put("order", "asc");
        Query query = new Query(params);
        List<OcMemberBankAccountEntity> ocMemberBankAccountList = ocMemberBankAccountService.queryList(query);
        int total = ocMemberBankAccountService.queryTotal(query);
        PageUtils pageUtil = new PageUtils(ocMemberBankAccountList, total, query.getLimit(), query.getPage());

        return R.ok().put("page", pageUtil);
    }
//账号添加
    @RequestMapping("accountAdd")
    public R save(OcMemberBankAccountEntity ocMemberBankAccount) {
        ocMemberBankAccountService.save(ocMemberBankAccount);
        return R.ok();
    }
// 账号详情
    @RequestMapping("accountDetail")
    public Object info(Integer id) {
        OcMemberBankAccountEntity ocMemberBankAccount = ocMemberBankAccountService.queryObject(id);
        return toResponsSuccess(ocMemberBankAccount);
    }

//账号更新
    @RequestMapping("accountUpdate")
    public R update(OcMemberBankAccountEntity ocMemberBankAccount) {
        ocMemberBankAccountService.update(ocMemberBankAccount);
        return R.ok();
    }

//删除
    @RequestMapping("accountDelete")
    public R delete(Integer[] ids) {
        ocMemberBankAccountService.deleteBatch(ids);
        return R.ok();
    }
//设为默认
    @RequestMapping("accountDefault")
    public Object updateToDefault(String token,Integer id) {
        ocMemberBankAccountService.updateToDefault(token,id);
        return R.ok();
    }
//查看所有列表

    public R queryAll(Map<String, Object> params) {

        List<OcMemberBankAccountEntity> list = ocMemberBankAccountService.queryList(params);

        return R.ok().put("list", list);
    }
}
