package com.platform.service;

import com.platform.entity.OcShopEntity;

import java.util.List;
import java.util.Map;

/**
 * 店铺数据表Service接口
 *
 * @author wd
 * @email 952172674@qq.com
 * @date 2019-04-12 11:35:44
 */
public interface OcShopService {

    /**
     * 根据主键查询实体
     *
     * @param id 主键
     * @return 实体
     */
    OcShopEntity queryObject(String token);

    /**
     * 分页查询
     *
     * @param map 参数
     * @return list
     */
    List<OcShopEntity> queryList(Map<String, Object> map);

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
     * @param ocShop 实体
     * @return 保存条数
     */
    int save(OcShopEntity ocShop);

    /**
     * 根据主键更新实体
     *
     * @param ocShop 实体
     * @return 更新条数
     */
    int update(OcShopEntity ocShop);

    /**
     * 根据主键删除
     *
     * @param shopId
     * @return 删除条数
     */
    int delete(Integer shopId);

    /**
     * 根据主键批量删除
     *
     * @param shopIds
     * @return 删除条数
     */
    int deleteBatch(Integer[] shopIds);


    void update(String token, OcShopEntity ocShopEntity);
}
