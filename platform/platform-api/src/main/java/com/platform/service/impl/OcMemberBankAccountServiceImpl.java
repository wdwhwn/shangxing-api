package com.platform.service.impl;

import com.platform.entity.TokenEntity;
import com.platform.service.TokenService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

import com.platform.dao.OcMemberBankAccountDao;
import com.platform.entity.OcMemberBankAccountEntity;
import com.platform.service.OcMemberBankAccountService;

/**
 * 会员提现账号Service实现类
 *
 * @author wd
 * @email 952172674@qq.com
 * @date 2019-04-16 16:09:41
 */
@Service("ocMemberBankAccountService")
public class OcMemberBankAccountServiceImpl implements OcMemberBankAccountService {
    @Autowired
    private OcMemberBankAccountDao ocMemberBankAccountDao;
    @Autowired
    private TokenService tokenService;
    @Override
    public OcMemberBankAccountEntity queryObject(Integer id) {
        return ocMemberBankAccountDao.queryObject(id);
    }

    @Override
    public List<OcMemberBankAccountEntity> queryList(Map<String, Object> map) {
        return ocMemberBankAccountDao.queryList(map);
    }

    @Override
    public int queryTotal(Map<String, Object> map) {
        return ocMemberBankAccountDao.queryTotal(map);
    }

    @Override
    public int save(OcMemberBankAccountEntity ocMemberBankAccount) {
        return ocMemberBankAccountDao.save(ocMemberBankAccount);
    }

    @Override
    public int update(OcMemberBankAccountEntity ocMemberBankAccount) {
        return ocMemberBankAccountDao.update(ocMemberBankAccount);
    }

    @Override
    public int delete(Integer id) {
        return ocMemberBankAccountDao.delete(id);
    }

    @Override
    public int deleteBatch(Integer[] ids) {
        return ocMemberBankAccountDao.deleteBatch(ids);
    }

    @Override
    public void updateToDefault(String token, Integer id) {
//        获取当前用户id
        TokenEntity tokenEntity = tokenService.queryByToken(token);
        Integer mid= Math.toIntExact(tokenEntity.getUserId());
//       当前用户所有账号设为非默认
        ocMemberBankAccountDao.updateToNoDefault(mid);
        //当前id设为默认
        ocMemberBankAccountDao.updateToDefault(id);

    }
}
