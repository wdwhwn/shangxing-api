package com.platform.service;

import com.platform.entity.OcGoodsEntity;
import com.platform.utils.Query;

import java.util.List;
import java.util.Map;

/**
 * 商品表Service接口
 *
 * @author wd
 * @email 952172674@qq.com
 * @date 2019-04-12 11:21:54
 */
public interface OcGoodsService {

    /**
     * 根据主键查询实体
     *
     * @param id 主键
     * @return 实体
     */
    OcGoodsEntity queryObject(Integer goodsId);

    /**
     * 分页查询
     *
     * @param map 参数
     * @return list
     */
    List<OcGoodsEntity> queryList(Map<String, Object> map);

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
     * @param ocGoods 实体
     * @return 保存条数
     */
    int save(OcGoodsEntity ocGoods);

    /**
     * 根据主键更新实体
     *
     * @param ocGoods 实体
     * @return 更新条数
     */
    int update(OcGoodsEntity ocGoods);

    /**
     * 根据主键删除
     *
     * @param goodsId
     * @return 删除条数
     */
    int delete(Integer goodsId);

    /**
     * 根据主键批量删除
     *
     * @param goodsIds
     * @return 删除条数
     */
    int deleteBatch(Integer[] goodsIds);

    int queryGoodsTotal(Map<String, Object> map);

    List<OcGoodsEntity> queryGoodsList(Map<String, Object> map);
}
