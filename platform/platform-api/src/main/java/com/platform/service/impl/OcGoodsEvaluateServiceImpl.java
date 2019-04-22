package com.platform.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

import com.platform.dao.OcGoodsEvaluateDao;
import com.platform.entity.OcGoodsEvaluateEntity;
import com.platform.service.OcGoodsEvaluateService;

/**
 * 商品评价表Service实现类
 *
 * @author wd
 * @email 952172674@qq.com
 * @date 2019-04-17 11:18:23
 */
@Service("ocGoodsEvaluateService")
public class OcGoodsEvaluateServiceImpl implements OcGoodsEvaluateService {
    @Autowired
    private OcGoodsEvaluateDao ocGoodsEvaluateDao;

    @Override
    public OcGoodsEvaluateEntity queryObject(Integer id) {
        return ocGoodsEvaluateDao.queryObject(id);
    }

    @Override
    public List<OcGoodsEvaluateEntity> queryList(Map<String, Object> map) {
        return ocGoodsEvaluateDao.queryList(map);
    }

    @Override
    public int queryTotal(Map<String, Object> map) {
        return ocGoodsEvaluateDao.queryTotal(map);
    }

    @Override
    public int save(OcGoodsEvaluateEntity ocGoodsEvaluate) {
        return ocGoodsEvaluateDao.save(ocGoodsEvaluate);
    }

    @Override
    public int update(OcGoodsEvaluateEntity ocGoodsEvaluate) {
        return ocGoodsEvaluateDao.update(ocGoodsEvaluate);
    }

    @Override
    public int delete(Integer id) {
        return ocGoodsEvaluateDao.delete(id);
    }

    @Override
    public int deleteBatch(Integer[] ids) {
        return ocGoodsEvaluateDao.deleteBatch(ids);
    }
}
