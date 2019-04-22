package com.platform.service;

import com.platform.entity.OcMemberAddressEntity;

import java.util.List;
import java.util.Map;

/**
 * 收货地址表Service接口
 *
 * @author wd
 * @email 952172674@qq.com
 * @date 2019-04-11 11:40:58
 */
public interface OcMemberAddressService {

    /**
     * 根据主键查询实体
     *
     * @param id 主键
     * @return 实体
     */
    OcMemberAddressEntity queryObject(Integer id);

    /**
     * 分页查询
     *
     * @param map 参数
     * @return list
     */
    List<OcMemberAddressEntity> queryList(Map<String, Object> map);

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
     * @param ocMemberAddress 实体
     * @return 保存条数
     */
    int save(OcMemberAddressEntity ocMemberAddress);

    /**
     * 根据主键更新实体
     *
     * @param ocMemberAddress 实体
     * @return 更新条数
     */
    int update(OcMemberAddressEntity ocMemberAddress);

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

    void updateBatch(Integer[] ids);

    void updateDefault(Integer id,Integer mid);
}
