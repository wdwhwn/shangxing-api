package com.platform.service.impl;

import com.platform.dao.OcGoodsDao;
import com.platform.dao.OcShopDao;
import com.platform.entity.OcGoodsEntity;
import com.platform.entity.OcShopEntity;
import com.platform.entity.TokenEntity;
import com.platform.service.OcShopService;
import com.platform.service.TokenService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.Map;

import com.platform.dao.OcMemberFavoritesDao;
import com.platform.entity.OcMemberFavoritesEntity;
import com.platform.service.OcMemberFavoritesService;

/**
 * 收藏表Service实现类
 * @author wd
 * @email 952172674@qq.com
 * @date 2019-04-11 15:34:45
 */
@Service("ocMemberFavoritesService")
public class OcMemberFavoritesServiceImpl implements OcMemberFavoritesService {
    @Autowired
    private OcMemberFavoritesDao ocMemberFavoritesDao;
    @Autowired
    private TokenService tokenService;
    @Autowired
    private OcGoodsDao ocGoodsDao;
    @Autowired
    private OcShopDao ocShopDao;
    @Override
    public OcMemberFavoritesEntity queryObject(Integer id) {
        return ocMemberFavoritesDao.queryObject(id);
    }

    @Override
    public List<OcMemberFavoritesEntity> queryList(Map<String, Object> map) {
        return ocMemberFavoritesDao.queryList(map);
    }

    @Override
    public int queryTotal(Map<String, Object> map) {
        return ocMemberFavoritesDao.queryTotal(map);
    }

    @Override
    public void save(String token, String favMsg,OcGoodsEntity ocGoodsEntity, OcShopEntity ocShopEntity) {
        OcMemberFavoritesEntity ocMemberFavoritesEntity = new OcMemberFavoritesEntity();
        TokenEntity tokenEntity = tokenService.queryByToken(token);
        Integer userId = Math.toIntExact(tokenEntity.getUserId());
        ocMemberFavoritesEntity.setMid(userId);
        //  判断是商品、还是店铺
        Integer goodsId = ocGoodsEntity.getGoodsId();
        Integer shopId = ocShopEntity.getShopId();
        OcShopEntity ocShopEntity1=new OcShopEntity();
        //  获取商品名称  by goods表
        //  获取店铺名称  by shop表
        if(goodsId!=null & shopId==null){
            OcGoodsEntity ocGoodsEntity1 = ocGoodsDao.queryObject(goodsId);
            ocShopEntity1=ocShopDao.queryObject(ocGoodsEntity1.getShopId());
            ocMemberFavoritesEntity.setGoodsId(ocGoodsEntity1.getGoodsId());
            ocMemberFavoritesEntity.setFavType("goods");
            ocMemberFavoritesEntity.setShopLogo(ocGoodsEntity1.getGoodsName());
            ocMemberFavoritesEntity.setGoodsPrice(ocGoodsEntity1.getPrice());
        }else if(goodsId==null & shopId!=null){
            ocShopEntity1 = ocShopDao.queryObject(shopId);
            ocMemberFavoritesEntity.setFavType("shop");
        }else{
            throw new RuntimeException();
        }
        ocMemberFavoritesEntity.setShopId(ocShopEntity1.getShopId());
        ocMemberFavoritesEntity.setShopName(ocShopEntity1.getShopName());
        ocMemberFavoritesEntity.setShopLogo(ocShopEntity1.getShopLogo());
        ocMemberFavoritesEntity.setFavMsg(favMsg);
        long l = System.currentTimeMillis();
        ocMemberFavoritesEntity.setCreateTime((int) l);
        ocMemberFavoritesDao.save(ocMemberFavoritesEntity);
    }

    @Override
    public int update(OcMemberFavoritesEntity ocMemberFavorites) {
        return ocMemberFavoritesDao.update(ocMemberFavorites);
    }

    @Override
    public int delete(Integer id) {
        return ocMemberFavoritesDao.delete(id);
    }

    @Override
    public int deleteBatch(Integer goodsId,Integer shopId) {
//        删除商品收藏   删除店铺收藏
        if(goodsId!=null & shopId==null){
         return    ocMemberFavoritesDao.deleteByGoodsId(goodsId);
        }else if(goodsId==null & shopId!=null){
         return    ocMemberFavoritesDao.deleteByShopId(shopId);
        }else{
            throw  new RuntimeException();
        }
    }
}
