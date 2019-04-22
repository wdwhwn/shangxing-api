package com.platform.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

import com.platform.dao.OcGoodsBrandDao;
import com.platform.entity.OcGoodsBrandEntity;
import com.platform.service.OcGoodsBrandService;

/**
 * 品牌表Service实现类
 *
 * @author wd
 * @email 952172674@qq.com
 * @date 2019-04-20 15:51:20
 */
@Service("ocGoodsBrandService")
public class OcGoodsBrandServiceImpl implements OcGoodsBrandService {
    @Autowired
    private OcGoodsBrandDao ocGoodsBrandDao;

    @Override
    public OcGoodsBrandEntity queryObject(Long brandId) {
        return ocGoodsBrandDao.queryObject(brandId);
    }

    @Override
    public List<OcGoodsBrandEntity> queryList(Map<String, Object> map) {
        return ocGoodsBrandDao.queryList(map);
    }

    @Override
    public int queryTotal(Map<String, Object> map) {
        return ocGoodsBrandDao.queryTotal(map);
    }

    @Override
    public int save(OcGoodsBrandEntity ocGoodsBrand) {
        return ocGoodsBrandDao.save(ocGoodsBrand);
    }

    @Override
    public int update(OcGoodsBrandEntity ocGoodsBrand) {
        return ocGoodsBrandDao.update(ocGoodsBrand);
    }

    @Override
    public int delete(Long brandId) {
        return ocGoodsBrandDao.delete(brandId);
    }

    @Override
    public int deleteBatch(Long[] brandIds) {
        return ocGoodsBrandDao.deleteBatch(brandIds);
    }
}
