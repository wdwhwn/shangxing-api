package com.platform.dao;

import com.platform.entity.OcMemberEntity;

/**
 * 用户账号表Dao
 *
 * @author wd
 * @email 952172674@qq.com
 * @date 2019-04-10 15:53:50
 */
public interface OcMemberDao extends BaseDao<OcMemberEntity> {

    OcMemberEntity selectOneByMP(OcMemberEntity ocMemberEntity);

    OcMemberEntity selectOneByMobile(String mobile);

    OcMemberEntity selectOneByToken(String token);
}
