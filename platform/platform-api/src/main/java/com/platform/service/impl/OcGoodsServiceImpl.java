package com.platform.service.impl;

import com.platform.dao.OcShopDao;
import com.platform.entity.OcShopEntity;
import com.platform.service.OcMemberService;
import com.platform.service.OcShopService;
import com.platform.utils.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

import com.platform.dao.OcGoodsDao;
import com.platform.entity.OcGoodsEntity;
import com.platform.service.OcGoodsService;

/**
 * 商品表Service实现类
 *
 * @author wd
 * @email 952172674@qq.com
 * @date 2019-04-12 11:21:54
 */
@Service("ocGoodsService")
public class OcGoodsServiceImpl implements OcGoodsService {
    @Autowired
    private OcGoodsDao ocGoodsDao;
    @Autowired
    private OcShopDao ocShopDao;
    @Override
    public OcGoodsEntity queryObject(Integer goodsId) {
        return ocGoodsDao.queryObject(goodsId);
    }

    /**
     * 商品列表
     * @param map 参数
     * @return
     */
    @Override
    public List<OcGoodsEntity> queryList(Map<String, Object> map) {
        Object mid = map.get("mid");
        OcShopEntity ocShopEntity = ocShopDao.queryObjectByMid((Integer) mid);
        map.put("shopId",ocShopEntity.getShopId());
        return ocGoodsDao.queryList(map);
    }

    @Override
    public int queryTotal(Map<String, Object> map) {
        return ocGoodsDao.queryTotal(map);
    }

    @Override
    public int save(OcGoodsEntity ocGoods) {
        return ocGoodsDao.save(ocGoods);
    }

    @Override
    public int update(OcGoodsEntity ocGoods) {
        return ocGoodsDao.update(ocGoods);
    }

    @Override
    public int delete(Integer goodsId) {
        return ocGoodsDao.delete(goodsId);
    }

    @Override
    public int deleteBatch(Integer[] goodsIds) {
        return ocGoodsDao.deleteBatch(goodsIds);
    }

    @Override
    public int queryGoodsTotal(Map<String, Object> map) {
       ocGoodsDao.queryGoodsTotal(map);
        return 0;
    }

    @Override
    public List<OcGoodsEntity> queryGoodsList(Map<String, Object> map) {
        ocGoodsDao.queryGoodsList(map);
        return null;
    }
}
