package com.platform.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Map;

import com.platform.dao.OcMemberAddressDao;
import com.platform.entity.OcMemberAddressEntity;
import com.platform.service.OcMemberAddressService;

/**
 * 收货地址表Service实现类
 *
 * @author wd
 * @email 952172674@qq.com
 * @date 2019-04-11 11:40:58
 */
@Service("ocMemberAddressService")
public class OcMemberAddressServiceImpl implements OcMemberAddressService {
    @Autowired
    private OcMemberAddressDao ocMemberAddressDao;

    @Override
    public OcMemberAddressEntity queryObject(Integer id) {
        return ocMemberAddressDao.queryObject(id);
    }

    @Override
    public List<OcMemberAddressEntity> queryList(Map<String, Object> map) {
        return ocMemberAddressDao.queryList(map);
    }

    @Override
    public int queryTotal(Map<String, Object> map) {
        return ocMemberAddressDao.queryTotal(map);
    }

    @Override
    public int save(OcMemberAddressEntity ocMemberAddress) {
        long time = System.currentTimeMillis();
        ocMemberAddress.setCreateTime((int) time);
        ocMemberAddress.setUpdateTime((int) time);
        return ocMemberAddressDao.save(ocMemberAddress);
    }

    @Override
    public int update(OcMemberAddressEntity ocMemberAddress) {
        OcMemberAddressEntity ocMemberAddressEntity = ocMemberAddressDao.queryObject(ocMemberAddress.getId());
        Integer createTime = ocMemberAddressEntity.getCreateTime();
        long l = System.currentTimeMillis();
        ocMemberAddress.setUpdateTime((int) l);
        ocMemberAddress.setCreateTime(createTime);
        return ocMemberAddressDao.update(ocMemberAddress);
    }

    @Override
    public int delete(Integer id) {
        return ocMemberAddressDao.delete(id);
    }

    @Override
    public int deleteBatch(Integer[] ids) {
        return ocMemberAddressDao.deleteBatch(ids);
    }

    @Override
    public void updateBatch(Integer[] ids) {
        ocMemberAddressDao.updateBach(ids);
    }

    @Override
    public void updateDefault(Integer id,Integer mid) {

//        其它的地址更改为非默认
       /* List<Integer> list=ocMemberAddressDao.queryTotalToId(mid);
        Integer[] ids = list.toArray(new Integer[list.size()]);*/
        Integer[] ids=ocMemberAddressDao.queryTotalToId(mid);
        ocMemberAddressDao.updateAllToNoDefault(ids);
        //        当前的更改为默认
        ocMemberAddressDao.updateOneToDefault(id);
    }
}
