package com.platform.dao;

import com.platform.entity.OcMemberFavoritesEntity;
import com.platform.service.OcMemberService;

/**
 * 收藏表Dao
 *
 * @author wd
 * @email 952172674@qq.com
 * @date 2019-04-11 15:34:45
 */
public interface OcMemberFavoritesDao extends BaseDao<OcMemberFavoritesEntity> {
    void save1(OcMemberFavoritesEntity ocMemberFavoritesEntity);
    int deleteByGoodsId(Integer goodsId);

    int deleteByShopId(Integer shopId);
}
