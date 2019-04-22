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

import com.platform.entity.OcGoodsAttributeEntity;
import com.platform.service.OcGoodsAttributeService;
import com.platform.utils.PageUtils;
import com.platform.utils.Query;
import com.platform.utils.R;

/**
 * 商品属性表Controller
 *
 * @author wd
 * @email 952172674@qq.com
 * @date 2019-04-18 11:00:59
 *
 */

@RestController
@RequestMapping("/index.php/app/index")
public class OcGoodsAttributeController {
    @Autowired
    private OcGoodsAttributeService ocGoodsAttributeService;

// 查看列表
    public R list(Map<String, Object> params) {
        //查询列表数据
        Query query = new Query(params);

        List<OcGoodsAttributeEntity> ocGoodsAttributeList = ocGoodsAttributeService.queryList(query);
        int total = ocGoodsAttributeService.queryTotal(query);

        PageUtils pageUtil = new PageUtils(ocGoodsAttributeList, total, query.getLimit(), query.getPage());

        return R.ok().put("page", pageUtil);
    }

/**
 *  查看信息
 */




    public R info( Integer attrId) {
        OcGoodsAttributeEntity ocGoodsAttribute = ocGoodsAttributeService.queryObject(attrId);

        return R.ok().put("ocGoodsAttribute", ocGoodsAttribute);
    }

//保存



    public R save(OcGoodsAttributeEntity ocGoodsAttribute) {
        ocGoodsAttributeService.save(ocGoodsAttribute);

        return R.ok();
    }

//修改



    public R update(@RequestBody OcGoodsAttributeEntity ocGoodsAttribute) {
        ocGoodsAttributeService.update(ocGoodsAttribute);

        return R.ok();
    }

// 删除



    public R delete( Integer[] attrIds) {
        ocGoodsAttributeService.deleteBatch(attrIds);

        return R.ok();
    }
//查看所有列表



    public R queryAll( Map<String, Object> params) {

        List<OcGoodsAttributeEntity> list = ocGoodsAttributeService.queryList(params);

        return R.ok().put("list", list);
    }
}
