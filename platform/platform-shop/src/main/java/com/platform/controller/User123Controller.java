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

import com.platform.entity.User123Entity;
import com.platform.service.User123Service;
import com.platform.utils.PageUtils;
import com.platform.utils.Query;
import com.platform.utils.R;

/**
 * Controller
 *
 * @author wd
 * @email 952172674@qq.com
 * @date 2019-04-22 10:09:12
 */
@RestController
@RequestMapping("user123")
public class User123Controller {
    @Autowired
    private User123Service user123Service;

    /**
     * 查看列表
     */
    @RequestMapping("/list")
    @RequiresPermissions("user123:list")
    public R list(@RequestParam Map<String, Object> params) {
        //查询列表数据
        Query query = new Query(params);

        List<User123Entity> user123List = user123Service.queryList(query);
        int total = user123Service.queryTotal(query);

        PageUtils pageUtil = new PageUtils(user123List, total, query.getLimit(), query.getPage());

        return R.ok().put("page", pageUtil);
    }

    /**
     * 查看信息
     */
    @RequestMapping("/info/{id}")
    @RequiresPermissions("user123:info")
    public R info(@PathVariable("id") Integer id) {
        User123Entity user123 = user123Service.queryObject(id);

        return R.ok().put("user123", user123);
    }

    /**
     * 保存
     */
    @RequestMapping("/save")
    @RequiresPermissions("user123:save")
    public R save(@RequestBody User123Entity user123) {
        user123Service.save(user123);

        return R.ok();
    }

    /**
     * 修改
     */
    @RequestMapping("/update")
    @RequiresPermissions("user123:update")
    public R update(@RequestBody User123Entity user123) {
        user123Service.update(user123);

        return R.ok();
    }

    /**
     * 删除
     */
    @RequestMapping("/delete")
    @RequiresPermissions("user123:delete")
    public R delete(@RequestBody Integer[] ids) {
        user123Service.deleteBatch(ids);

        return R.ok();
    }

    /**
     * 查看所有列表
     */
    @RequestMapping("/queryAll")
    public R queryAll(@RequestParam Map<String, Object> params) {

        List<User123Entity> list = user123Service.queryList(params);

        return R.ok().put("list", list);
    }
}
