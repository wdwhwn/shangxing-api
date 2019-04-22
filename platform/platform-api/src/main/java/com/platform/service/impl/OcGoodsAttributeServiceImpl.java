package com.platform.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

import com.platform.dao.OcGoodsAttributeDao;
import com.platform.entity.OcGoodsAttributeEntity;
import com.platform.service.OcGoodsAttributeService;

/**
 * 商品属性表Service实现类
 *
 * @author wd
 * @email 952172674@qq.com
 * @date 2019-04-18 11:00:59
 */
@Service("ocGoodsAttributeService")
public class OcGoodsAttributeServiceImpl implements OcGoodsAttributeService {
    @Autowired
    private OcGoodsAttributeDao ocGoodsAttributeDao;

    @Override
    public OcGoodsAttributeEntity queryObject(Integer attrId) {
        return ocGoodsAttributeDao.queryObject(attrId);
    }

    @Override
    public List<OcGoodsAttributeEntity> queryList(Map<String, Object> map) {
        return ocGoodsAttributeDao.queryList(map);
    }

    @Override
    public int queryTotal(Map<String, Object> map) {
        return ocGoodsAttributeDao.queryTotal(map);
    }

    @Override
    public int save(OcGoodsAttributeEntity ocGoodsAttribute) {
        return ocGoodsAttributeDao.save(ocGoodsAttribute);
    }

    @Override
    public int update(OcGoodsAttributeEntity ocGoodsAttribute) {
        return ocGoodsAttributeDao.update(ocGoodsAttribute);
    }

    @Override
    public int delete(Integer attrId) {
        return ocGoodsAttributeDao.delete(attrId);
    }

    @Override
    public int deleteBatch(Integer[] attrIds) {
        return ocGoodsAttributeDao.deleteBatch(attrIds);
    }
}
