package com.platform.service;

import com.platform.entity.OcGoodsCategoryEntity;

import java.util.List;
import java.util.Map;

/**
 * 商品分类表Service接口
 *
 * @author wd
 * @email 952172674@qq.com
 * @date 2019-04-16 17:30:23
 */
public interface OcGoodsCategoryService {

    /**
     * 根据主键查询实体
     *
     * @param id 主键
     * @return 实体
     */
    OcGoodsCategoryEntity queryObject(Integer id);

    /**
     * 分页查询
     *
     * @param map 参数
     * @return list
     */
    List<OcGoodsCategoryEntity> queryList(Map<String, Object> map);

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
     * @param ocGoodsCategory 实体
     * @return 保存条数
     */
    int save(OcGoodsCategoryEntity ocGoodsCategory);

    /**
     * 根据主键更新实体
     *
     * @param ocGoodsCategory 实体
     * @return 更新条数
     */
    int update(OcGoodsCategoryEntity ocGoodsCategory);

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
    int deleteBatch(Integer[] ids);

    List<OcGoodsCategoryEntity> selectAll();
}
