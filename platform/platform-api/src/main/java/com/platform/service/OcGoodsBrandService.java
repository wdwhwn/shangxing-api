package com.platform.service;

import com.platform.entity.OcGoodsBrandEntity;

import java.util.List;
import java.util.Map;

/**
 * 品牌表Service接口
 *
 * @author wd
 * @email 952172674@qq.com
 * @date 2019-04-20 15:51:20
 */
public interface OcGoodsBrandService {

    /**
     * 根据主键查询实体
     *
     * @param id 主键
     * @return 实体
     */
    OcGoodsBrandEntity queryObject(Long brandId);

    /**
     * 分页查询
     *
     * @param map 参数
     * @return list
     */
    List<OcGoodsBrandEntity> queryList(Map<String, Object> map);

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
     * @param ocGoodsBrand 实体
     * @return 保存条数
     */
    int save(OcGoodsBrandEntity ocGoodsBrand);

    /**
     * 根据主键更新实体
     *
     * @param ocGoodsBrand 实体
     * @return 更新条数
     */
    int update(OcGoodsBrandEntity ocGoodsBrand);

    /**
     * 根据主键删除
     *
     * @param brandId
     * @return 删除条数
     */
    int delete(Long brandId);

    /**
     * 根据主键批量删除
     *
     * @param brandIds
     * @return 删除条数
     */
    int deleteBatch(Long[] brandIds);
}
