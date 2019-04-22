package com.platform.service;

import com.platform.entity.OcGoodsEntity;
import com.platform.entity.OcMemberFavoritesEntity;
import com.platform.entity.OcShopEntity;

import java.util.List;
import java.util.Map;

/**
 * 收藏表Service接口
 *
 * @author wd
 * @email 952172674@qq.com
 * @date 2019-04-11 15:34:45
 */
public interface OcMemberFavoritesService {

    /**
     * 根据主键查询实体
     *
     * @param id 主键
     * @return 实体
     */
    OcMemberFavoritesEntity queryObject(Integer id);

    /**
     * 分页查询
     *
     * @param map 参数
     * @return list
     */
    List<OcMemberFavoritesEntity> queryList(Map<String, Object> map);

    /**
     * 分页统计总数
     *
     * @param map 参数
     * @return 总数
     */
    int queryTotal(Map<String, Object> map);

    /**
     * 保存实体
     *
     * @param ocMemberFavorites 实体
     * @return 保存条数
     */
    void save(String token,String favMsg, OcGoodsEntity ocGoodsEntity, OcShopEntity ocShopEntity);

    /**
     * 根据主键更新实体
     *
     * @param ocMemberFavorites 实体
     * @return 更新条数
     */
    int update(OcMemberFavoritesEntity ocMemberFavorites);

    /**
     * 根据主键删除
     *
     * @param id
     * @return 删除条数
     */
    int delete(Integer id);

    /**
     * 根据主键批量删除
     *
     * @param ids
     * @return 删除条数
     */
    int deleteBatch(Integer goodsId,Integer shopId);
}
