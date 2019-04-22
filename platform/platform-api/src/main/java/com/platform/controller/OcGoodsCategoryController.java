package com.platform.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.platform.entity.OcMemberAddressEntity;
import com.platform.entity.TokenEntity;
import com.platform.util.ApiBaseAction;
import com.platform.util.ApiPageUtils;
import org.apache.shiro.authz.annotation.RequiresPermissions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.platform.entity.OcGoodsCategoryEntity;
import com.platform.service.OcGoodsCategoryService;
import com.platform.utils.PageUtils;
import com.platform.utils.Query;
import com.platform.utils.R;

/**
 * 商品分类表Controller
 *
 * @author wd
 * @email 952172674@qq.com
 * @date 2019-04-16 17:30:23*/


@RestController
@RequestMapping("/index.php/app/index")
public class OcGoodsCategoryController extends ApiBaseAction {
    @Autowired
    private OcGoodsCategoryService ocGoodsCategoryService;

// 商品分类
    @RequestMapping("/goodsCategoryList")
    public Object list( Map<String, Object> params) {
        List<OcGoodsCategoryEntity> ocGoodsCategoryEntityList=ocGoodsCategoryService.selectAll();
       return  toResponsSuccess(ocGoodsCategoryEntityList);
    }

// 查看信息
    public R info( Integer id) {
        OcGoodsCategoryEntity ocGoodsCategory = ocGoodsCategoryService.queryObject(id);
        return R.ok().put("ocGoodsCategory", ocGoodsCategory);
    }

// 保存
    public R save( OcGoodsCategoryEntity ocGoodsCategory) {
        ocGoodsCategoryService.save(ocGoodsCategory);

        return R.ok();
    }

//     修改
    public R update(OcGoodsCategoryEntity ocGoodsCategory) {
        ocGoodsCategoryService.update(ocGoodsCategory);

        return R.ok();
    }

// 删除
    public R delete( Integer[] ids) {
        ocGoodsCategoryService.deleteBatch(ids);

        return R.ok();
    }

//查看所有列表
    public R queryAll(Map<String, Object> params) {

        List<OcGoodsCategoryEntity> list = ocGoodsCategoryService.queryList(params);

        return R.ok().put("list", list);
    }
}
