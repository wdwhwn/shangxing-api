package com.platform.service;

import com.platform.entity.OcGoodsAttributeEntity;

import java.util.List;
import java.util.Map;

/**
 * 商品属性表Service接口
 *
 * @author wd
 * @email 952172674@qq.com
 * @date 2019-04-18 11:00:59
 */
public interface OcGoodsAttributeService {

    /**
     * 根据主键查询实体
     *
     * @param id 主键
     * @return 实体
     */
    OcGoodsAttributeEntity queryObject(Integer attrId);

    /**
     * 分页查询
     *
     * @param map 参数
     * @return list
     */
    List<OcGoodsAttributeEntity> queryList(Map<String, Object> map);

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
     * @param ocGoodsAttribute 实体
     * @return 保存条数
     */
    int save(OcGoodsAttributeEntity ocGoodsAttribute);

    /**
     * 根据主键更新实体
     *
     * @param ocGoodsAttribute 实体
     * @return 更新条数
     */
    int update(OcGoodsAttributeEntity ocGoodsAttribute);

    /**
     * 根据主键删除
     *
     * @param attrId
     * @return 删除条数
     */
    int delete(Integer attrId);

    /**
     * 根据主键批量删除
     *
     * @param attrIds
     * @return 删除条数
     */
    int deleteBatch(Integer[] attrIds);
}
