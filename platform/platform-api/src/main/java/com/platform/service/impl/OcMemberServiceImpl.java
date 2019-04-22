package com.platform.service.impl;

import com.platform.service.TokenService;
import org.apache.commons.codec.digest.DigestUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

import com.platform.dao.OcMemberDao;
import com.platform.entity.OcMemberEntity;
import com.platform.service.OcMemberService;

/**
 * 用户账号表Service实现类
 *
 * @author wd
 * @email 952172674@qq.com
 * @date 2019-04-10 15:53:50
 */
@Service("ocMemberService")
public class OcMemberServiceImpl implements OcMemberService {
    @Autowired
    private OcMemberDao ocMemberDao;
    @Autowired
    private TokenService tokenService;
    @Override
    public OcMemberEntity queryObject(Integer mid) {
        return ocMemberDao.queryObject(mid);
    }

    @Override
    public List<OcMemberEntity> queryList(Map<String, Object> map) {
        return ocMemberDao.queryList(map);
    }

    @Override
    public int queryTotal(Map<String, Object> map) {
        return ocMemberDao.queryTotal(map);
    }

    @Override
    public int save(OcMemberEntity ocMember) {
        String password = ocMember.getPassword();
//      密码加密
        String s = DigestUtils.sha256Hex(password);
        ocMember.setPassword(s);
        return ocMemberDao.save(ocMember);
    }

    @Override
    public int update(OcMemberEntity ocMember){

        return ocMemberDao.update(ocMember);
    }

    @Override
    public int delete(Integer mid) {
        return ocMemberDao.delete(mid);
    }

    @Override
    public int deleteBatch(Integer[] mids) {
        return ocMemberDao.deleteBatch(mids);
    }

    @Override
    public OcMemberEntity login(OcMemberEntity ocMemberEntity) {
        String password = ocMemberEntity.getPassword();
//      密码加密
        String s = DigestUtils.sha256Hex(password);
        ocMemberEntity.setPassword(s);
        OcMemberEntity ocMemberEntity1=ocMemberDao.selectOneByMP(ocMemberEntity);
        //生成token
        Map<String, Object> map = tokenService.createToken(ocMemberEntity1.getMid());
        ocMemberEntity1.setToken(map.get("token").toString());
        System.out.println(ocMemberEntity1);
        ocMemberDao.update(ocMemberEntity1);
        return ocMemberEntity1;
    }

    @Override
    public OcMemberEntity loginBymsg(String mobile) {
        OcMemberEntity ocMemberEntity=ocMemberDao.selectOneByMobile(mobile);
        //生成token
        if(ocMemberEntity!=null) {
            Map<String, Object> map = tokenService.createToken(ocMemberEntity.getMid());
            ocMemberEntity.setToken(map.get("token").toString());
            ocMemberDao.update(ocMemberEntity);
        }
        return ocMemberEntity;
    }

    @Override
    public OcMemberEntity selectByToken(String token) {
        OcMemberEntity ocMemberEntity=ocMemberDao.selectOneByToken(token);
        return ocMemberEntity;
    }
}
