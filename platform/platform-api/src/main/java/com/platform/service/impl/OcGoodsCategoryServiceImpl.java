package com.platform.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

import com.platform.dao.OcGoodsCategoryDao;
import com.platform.entity.OcGoodsCategoryEntity;
import com.platform.service.OcGoodsCategoryService;

/**
 * 商品分类表Service实现类
 *
 * @author wd
 * @email 952172674@qq.com
 * @date 2019-04-16 17:30:23
 */
@Service("ocGoodsCategoryService")
public class OcGoodsCategoryServiceImpl implements OcGoodsCategoryService {
    @Autowired
    private OcGoodsCategoryDao ocGoodsCategoryDao;

    @Override
    public OcGoodsCategoryEntity queryObject(Integer id) {
        return ocGoodsCategoryDao.queryObject(id);
    }

    @Override
    public List<OcGoodsCategoryEntity> queryList(Map<String, Object> map) {
        return ocGoodsCategoryDao.queryList(map);
    }

    @Override
    public int queryTotal(Map<String, Object> map) {
        return ocGoodsCategoryDao.queryTotal(map);
    }

    @Override
    public int save(OcGoodsCategoryEntity ocGoodsCategory) {
        return ocGoodsCategoryDao.save(ocGoodsCategory);
    }

    @Override
    public int update(OcGoodsCategoryEntity ocGoodsCategory) {
        return ocGoodsCategoryDao.update(ocGoodsCategory);
    }

    @Override
    public int delete(Integer id) {
        return ocGoodsCategoryDao.delete(id);
    }

    @Override
    public int deleteBatch(Integer[] ids) {
        return ocGoodsCategoryDao.deleteBatch(ids);
    }

    @Override
    public List<OcGoodsCategoryEntity> selectAll() {
        List<OcGoodsCategoryEntity> ocGoodsCategoryEntityList=ocGoodsCategoryDao.selectAll();
        return ocGoodsCategoryEntityList;
    }
}
