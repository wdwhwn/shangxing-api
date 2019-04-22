package com.platform.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

import com.platform.dao.User123Dao;
import com.platform.entity.User123Entity;
import com.platform.service.User123Service;

/**
 * Service实现类
 *
 * @author wd
 * @email 952172674@qq.com
 * @date 2019-04-22 10:09:12
 */
@Service("user123Service")
public class User123ServiceImpl implements User123Service {
    @Autowired
    private User123Dao user123Dao;

    @Override
    public User123Entity queryObject(Integer id) {
        return user123Dao.queryObject(id);
    }

    @Override
    public List<User123Entity> queryList(Map<String, Object> map) {
        return user123Dao.queryList(map);
    }

    @Override
    public int queryTotal(Map<String, Object> map) {
        return user123Dao.queryTotal(map);
    }

    @Override
    public int save(User123Entity user123) {
        return user123Dao.save(user123);
    }

    @Override
    public int update(User123Entity user123) {
        return user123Dao.update(user123);
    }

    @Override
    public int delete(Integer id) {
        return user123Dao.delete(id);
    }

    @Override
    public int deleteBatch(Integer[] ids) {
        return user123Dao.deleteBatch(ids);
    }
}
