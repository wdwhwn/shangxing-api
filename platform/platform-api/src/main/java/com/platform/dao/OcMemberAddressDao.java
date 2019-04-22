package com.platform.dao;

import com.platform.entity.OcMemberAddressEntity;

import java.util.List;

/**
 * 收货地址表Dao
 *
 * @author wd
 * @email 952172674@qq.com
 * @date 2019-04-11 11:40:58
 */
public interface OcMemberAddressDao extends BaseDao<OcMemberAddressEntity> {

    void updateBach(Integer[] ids);

    void updateOneToDefault(Integer id);

    Integer[] queryTotalToId(Integer mid);

    void updateAllToNoDefault(Integer[] ids);
}
