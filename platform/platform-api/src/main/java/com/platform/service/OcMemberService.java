package com.platform.service;

import com.platform.entity.OcMemberEntity;

import java.util.List;
import java.util.Map;

/**
 * 用户账号表Service接口
 *
 * @author wd
 * @email 952172674@qq.com
 * @date 2019-04-10 15:53:50
 */
public interface OcMemberService {

    /**
     * 根据主键查询实体
     *
     * @param id 主键
     * @return 实体
     */
    OcMemberEntity queryObject(Integer mid);

    /**
     * 分页查询
     *
     * @param map 参数
     * @return list
     */
    List<OcMemberEntity> queryList(Map<String, Object> map);

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
     * @param ocMember 实体
     * @return 保存条数
     */
    int save(OcMemberEntity ocMember);

    /**
     * 根据主键更新实体
     *
     * @param ocMember 实体
     * @return 更新条数
     */
    int update(OcMemberEntity ocMember);

    /**
     * 根据主键删除
     *
     * @param mid
     * @return 删除条数
     */
    int delete(Integer mid);

    /**
     * 根据主键批量删除
     *
     * @param mids
     * @return 删除条数
     */
    int deleteBatch(Integer[] mids);

    OcMemberEntity login(OcMemberEntity ocMemberEntity);

    OcMemberEntity loginBymsg(String mobile);

    OcMemberEntity selectByToken(String token);
}
