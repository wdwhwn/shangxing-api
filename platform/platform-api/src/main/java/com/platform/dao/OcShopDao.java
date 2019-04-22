package com.platform.dao;

import com.platform.entity.OcShopEntity;

/**
 * 店铺数据表Dao
 *
 * @author wd
 * @email 952172674@qq.com
 * @date 2019-04-12 11:35:44
 */
public interface OcShopDao extends BaseDao<OcShopEntity> {

    OcShopEntity queryObjectByGoodsId(Integer goodsId);
    OcShopEntity queryObjectByMid(Integer mid);

}
