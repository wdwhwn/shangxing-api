package com.platform.controller;

import java.util.List;
import java.util.Map;

import org.apache.shiro.authz.annotation.RequiresPermissions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.platform.entity.OcShopEntity;
import com.platform.service.OcShopService;
import com.platform.utils.PageUtils;
import com.platform.utils.Query;
import com.platform.utils.R;

/**
 * 店铺数据表Controller
 *
 * @author wd
 * @email 952172674@qq.com
 * @date 2019-04-12 11:35:44*/


@RestController
@RequestMapping("index.php/app/index")
public class OcShopController {
    @Autowired
    private OcShopService ocShopService;

//*
//     * 店铺详情


    @RequestMapping("/shopDetail")
    public R info(String token) {
        OcShopEntity ocShop = ocShopService.queryObject(token);
        return R.ok().put("ocShop", ocShop);
    }

//更新店招


    @RequestMapping("/shopLogoUpdate")
    public R update(String token,OcShopEntity ocShopEntity) {
        ocShopService.update(token,ocShopEntity);
        return R.ok();
    }
//查看列表
    public R list(@RequestParam Map<String, Object> params) {
        //查询列表数据
        Query query = new Query(params);

        List<OcShopEntity> ocShopList = ocShopService.queryList(query);
        int total = ocShopService.queryTotal(query);

        PageUtils pageUtil = new PageUtils(ocShopList, total, query.getLimit(), query.getPage());

        return R.ok().put("page", pageUtil);
    }
//    保存

    public R save(@RequestBody OcShopEntity ocShop) {
        ocShopService.save(ocShop);

        return R.ok();
    }



// 删除



    public R delete(@RequestBody Integer[] shopIds) {
        ocShopService.deleteBatch(shopIds);

        return R.ok();
    }

// 查看所有列表



    public R queryAll(@RequestParam Map<String, Object> params) {

        List<OcShopEntity> list = ocShopService.queryList(params);

        return R.ok().put("list", list);
    }
}
