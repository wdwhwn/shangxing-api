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

import com.platform.entity.OcGoodsBrandEntity;
import com.platform.service.OcGoodsBrandService;
import com.platform.utils.PageUtils;
import com.platform.utils.Query;
import com.platform.utils.R;

/**
 * 品牌表Controller
 *
 * @author wd
 * @email 952172674@qq.com
 * @date 2019-04-20 15:51:20
 */
@RestController
@RequestMapping("ocgoodsbrand")
public class OcGoodsBrandController {
    @Autowired
    private OcGoodsBrandService ocGoodsBrandService;

    /**
     * 查看列表
     */
    @RequestMapping("/list")
    @RequiresPermissions("ocgoodsbrand:list")
    public R list(@RequestParam Map<String, Object> params) {
        //查询列表数据
        Query query = new Query(params);

        List<OcGoodsBrandEntity> ocGoodsBrandList = ocGoodsBrandService.queryList(query);
        int total = ocGoodsBrandService.queryTotal(query);

        PageUtils pageUtil = new PageUtils(ocGoodsBrandList, total, query.getLimit(), query.getPage());

        return R.ok().put("page", pageUtil);
    }

    /**
     * 查看信息
     */
    @RequestMapping("/info/{brandId}")
    @RequiresPermissions("ocgoodsbrand:info")
    public R info(@PathVariable("brandId") Long brandId) {
        OcGoodsBrandEntity ocGoodsBrand = ocGoodsBrandService.queryObject(brandId);

        return R.ok().put("ocGoodsBrand", ocGoodsBrand);
    }

    /**
     * 保存
     */
    @RequestMapping("/save")
    @RequiresPermissions("ocgoodsbrand:save")
    public R save(@RequestBody OcGoodsBrandEntity ocGoodsBrand) {
        ocGoodsBrandService.save(ocGoodsBrand);

        return R.ok();
    }

    /**
     * 修改
     */
    @RequestMapping("/update")
    @RequiresPermissions("ocgoodsbrand:update")
    public R update(@RequestBody OcGoodsBrandEntity ocGoodsBrand) {
        ocGoodsBrandService.update(ocGoodsBrand);

        return R.ok();
    }

    /**
     * 删除
     */
    @RequestMapping("/delete")
    @RequiresPermissions("ocgoodsbrand:delete")
    public R delete(@RequestBody Long[] brandIds) {
        ocGoodsBrandService.deleteBatch(brandIds);

        return R.ok();
    }

    /**
     * 查看所有列表
     */
    @RequestMapping("/queryAll")
    public R queryAll(@RequestParam Map<String, Object> params) {

        List<OcGoodsBrandEntity> list = ocGoodsBrandService.queryList(params);

        return R.ok().put("list", list);
    }
}
