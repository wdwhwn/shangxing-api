package com.platform.service.impl;

import com.platform.entity.TokenEntity;
import com.platform.service.TokenService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Map;
import com.platform.dao.OcShopDao;
import com.platform.entity.OcShopEntity;
import com.platform.service.OcShopService;

/**
 * 店铺数据表Service实现类
 *
 * @author wd
 * @email 952172674@qq.com
 * @date 2019-04-12 11:35:44
 */
@Service("ocShopService")
public class OcShopServiceImpl implements OcShopService {
    @Autowired
    private OcShopDao ocShopDao;
    @Autowired
    private TokenService tokenService;
    @Override
    public OcShopEntity queryObject(String token) {
        TokenEntity tokenEntity = tokenService.queryByToken(token);
        Integer mid = Math.toIntExact(tokenEntity.getUserId());

        return ocShopDao.queryObjectByMid(mid);
    }

    @Override
    public List<OcShopEntity> queryList(Map<String, Object> map) {
        return ocShopDao.queryList(map);
    }

    @Override
    public int queryTotal(Map<String, Object> map) {
        return ocShopDao.queryTotal(map);
    }

    @Override
    public int save(OcShopEntity ocShop) {
        return ocShopDao.save(ocShop);
    }

    @Override
    public int update(OcShopEntity ocShop) {
        return ocShopDao.update(ocShop);
    }

    @Override
    public int delete(Integer shopId) {
        return ocShopDao.delete(shopId);
    }

    @Override
    public int deleteBatch(Integer[] shopIds) {
        return ocShopDao.deleteBatch(shopIds);
    }

    @Override
    public void update(String token, OcShopEntity ocShopEntity) {
        TokenEntity tokenEntity = tokenService.queryByToken(token);
        Integer mid= Math.toIntExact(tokenEntity.getUserId());
        OcShopEntity ocShopEntity1 = ocShopDao.queryObjectByMid(mid);
        ocShopEntity1.setShopLogo(ocShopEntity.getShopLogo());
        ocShopDao.update(ocShopEntity1);
    }


}
