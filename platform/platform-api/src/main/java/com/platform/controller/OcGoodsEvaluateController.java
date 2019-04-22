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

import com.platform.entity.OcGoodsEvaluateEntity;
import com.platform.service.OcGoodsEvaluateService;
import com.platform.utils.PageUtils;
import com.platform.utils.Query;
import com.platform.utils.R;

/**
 * 商品评价表Controller
 *
 * @author wd
 * @email 952172674@qq.com
 * @date 2019-04-17 11:18:23*/


@RestController
@RequestMapping("/index.php/app/index")
public class OcGoodsEvaluateController {
    @Autowired
    private OcGoodsEvaluateService ocGoodsEvaluateService;

//查看列表

    public R list( Map<String, Object> params) {
        //查询列表数据
        Query query = new Query(params);

        List<OcGoodsEvaluateEntity> ocGoodsEvaluateList = ocGoodsEvaluateService.queryList(query);
        int total = ocGoodsEvaluateService.queryTotal(query);

        PageUtils pageUtil = new PageUtils(ocGoodsEvaluateList, total, query.getLimit(), query.getPage());

        return R.ok().put("page", pageUtil);
    }

//商品评价


    @RequestMapping("/goodsevaluateList")
    public R info( Integer goodsId) {
        OcGoodsEvaluateEntity ocGoodsEvaluate = ocGoodsEvaluateService.queryObject(goodsId);

        return R.ok().put("ocGoodsEvaluate", ocGoodsEvaluate);
    }
// 保存
    public R save( OcGoodsEvaluateEntity ocGoodsEvaluate) {
        ocGoodsEvaluateService.save(ocGoodsEvaluate);

        return R.ok();
    }

//修改

    public R update( OcGoodsEvaluateEntity ocGoodsEvaluate) {
        ocGoodsEvaluateService.update(ocGoodsEvaluate);

        return R.ok();
    }

// 删除

    public R delete( Integer[] ids) {
        ocGoodsEvaluateService.deleteBatch(ids);

        return R.ok();
    }
//查看所有列表
    @RequestMapping("/queryAll")
    public R queryAll( Map<String, Object> params) {

        List<OcGoodsEvaluateEntity> list = ocGoodsEvaluateService.queryList(params);

        return R.ok().put("list", list);
    }
}
