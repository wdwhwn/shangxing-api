package com.platform.entity;

import java.io.Serializable;
import java.util.Date;

/**
 * 品牌表实体
 * 表名 oc_goods_brand
 *
 * @author wd
 * @email 952172674@qq.com
 * @date 2019-04-20 15:51:20
 */
public class OcGoodsBrandEntity implements Serializable {
    private static final long serialVersionUID = 1L;

    //索引ID 1
    private Long brandId;
    //店铺ID
    private Integer shopId;
    //品牌名称 1
    private String brandName;
    //品牌首字母
    private String brandInitial;
    //图片id
    private Integer cover;
    //图片
    private String brandPic;
    //推荐，0为否，1为是，默认为0
    private Integer brandRecommend;
    //
    private Integer sort;

    /**
     * 设置：索引ID
     */
    public void setBrandId(Long brandId) {
        this.brandId = brandId;
    }

    /**
     * 获取：索引ID
     */
    public Long getBrandId() {
        return brandId;
    }
    /**
     * 设置：店铺ID
     */
    public void setShopId(Integer shopId) {
        this.shopId = shopId;
    }

    /**
     * 获取：店铺ID
     */
    public Integer getShopId() {
        return shopId;
    }
    /**
     * 设置：品牌名称
     */
    public void setBrandName(String brandName) {
        this.brandName = brandName;
    }

    /**
     * 获取：品牌名称
     */
    public String getBrandName() {
        return brandName;
    }
    /**
     * 设置：品牌首字母
     */
    public void setBrandInitial(String brandInitial) {
        this.brandInitial = brandInitial;
    }

    /**
     * 获取：品牌首字母
     */
    public String getBrandInitial() {
        return brandInitial;
    }
    /**
     * 设置：图片id
     */
    public void setCover(Integer cover) {
        this.cover = cover;
    }

    /**
     * 获取：图片id
     */
    public Integer getCover() {
        return cover;
    }
    /**
     * 设置：图片
     */
    public void setBrandPic(String brandPic) {
        this.brandPic = brandPic;
    }

    /**
     * 获取：图片
     */
    public String getBrandPic() {
        return brandPic;
    }
    /**
     * 设置：推荐，0为否，1为是，默认为0
     */
    public void setBrandRecommend(Integer brandRecommend) {
        this.brandRecommend = brandRecommend;
    }

    /**
     * 获取：推荐，0为否，1为是，默认为0
     */
    public Integer getBrandRecommend() {
        return brandRecommend;
    }
    /**
     * 设置：
     */
    public void setSort(Integer sort) {
        this.sort = sort;
    }

    /**
     * 获取：
     */
    public Integer getSort() {
        return sort;
    }
}
