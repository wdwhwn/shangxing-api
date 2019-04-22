package com.platform.dao;

import com.platform.entity.OcMemberBankAccountEntity;

/**
 * 会员提现账号Dao
 *
 * @author wd
 * @email 952172674@qq.com
 * @date 2019-04-16 16:09:41
 */
public interface OcMemberBankAccountDao extends BaseDao<OcMemberBankAccountEntity> {

    void updateToNoDefault(Integer mid);

    void updateToDefault(Integer id);
}
