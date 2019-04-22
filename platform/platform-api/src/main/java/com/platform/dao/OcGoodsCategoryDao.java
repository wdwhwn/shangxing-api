package com.platform.dao;

import com.platform.entity.OcGoodsCategoryEntity;

import java.util.List;

/**
 * 商品分类表Dao
 *
 * @author wd
 * @email 952172674@qq.com
 * @date 2019-04-16 17:30:23
 */
public interface OcGoodsCategoryDao extends BaseDao<OcGoodsCategoryEntity> {

    List<OcGoodsCategoryEntity> selectAll();
}
