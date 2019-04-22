package com.platform.dao;

import com.platform.entity.OcGoodsEntity;
import com.platform.utils.Query;

import java.util.Map;

/**
 * 商品表Dao
 * @author wd
 * @email 952172674@qq.com
 * @date 2019-04-12 11:21:54
 */
public interface OcGoodsDao extends BaseDao<OcGoodsEntity> {

    void queryGoodsTotal(Map<String, Object> map);

    void queryGoodsList(Map<String, Object> map);
}
