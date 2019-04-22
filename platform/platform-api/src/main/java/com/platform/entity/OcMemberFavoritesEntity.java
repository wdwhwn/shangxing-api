package com.platform.entity;

import java.io.Serializable;
import java.math.BigDecimal;
import java.util.Date;

/**
 * 收藏表实体
 * 表名 oc_member_favorites
 *
 * @author wd
 * @email 952172674@qq.com
 * @date 2019-04-11 15:34:45
 */
public class OcMemberFavoritesEntity implements Serializable {
    private static final long serialVersionUID = 1L;

    //记录ID 1
    private Integer id;
    //会员ID 1
    private Integer mid;
    //商品或店铺ID 1
    private Integer goodsId;
    //类型:goods为商品,shop为店铺,默认为商品
    private String favType;
    //店铺ID
    private Integer shopId;
    //店铺名称
    private String shopName;
    //店铺logo
    private String shopLogo;
    //商品名称
    private String goodsName;
    //
    private String imgIdArray;
    //商品收藏时价格
    private BigDecimal goodsPrice;
    //收藏备注
    private String favMsg;
    //收藏时间 1
    private Integer createTime;

    /**
     * 设置：记录ID
     */
    public void setId(Integer id) {
        this.id = id;
    }

    /**
     * 获取：记录ID
     */
    public Integer getId() {
        return id;
    }
    /**
     * 设置：会员ID
     */
    public void setMid(Integer mid) {
        this.mid = mid;
    }

    /**
     * 获取：会员ID
     */
    public Integer getMid() {
        return mid;
    }
    /**
     * 设置：商品或店铺ID
     */
    public void setGoodsId(Integer goodsId) {
        this.goodsId = goodsId;
    }

    /**
     * 获取：商品或店铺ID
     */
    public Integer getGoodsId() {
        return goodsId;
    }
    /**
     * 设置：类型:goods为商品,shop为店铺,默认为商品
     */
    public void setFavType(String favType) {
        this.favType = favType;
    }

    /**
     * 获取：类型:goods为商品,shop为店铺,默认为商品
     */
    public String getFavType() {
        return favType;
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
     * 设置：店铺名称
     */
    public void setShopName(String shopName) {
        this.shopName = shopName;
    }

    /**
     * 获取：店铺名称
     */
    public String getShopName() {
        return shopName;
    }
    /**
     * 设置：店铺logo
     */
    public void setShopLogo(String shopLogo) {
        this.shopLogo = shopLogo;
    }

    /**
     * 获取：店铺logo
     */
    public String getShopLogo() {
        return shopLogo;
    }
    /**
     * 设置：商品名称
     */
    public void setGoodsName(String goodsName) {
        this.goodsName = goodsName;
    }

    /**
     * 获取：商品名称
     */
    public String getGoodsName() {
        return goodsName;
    }
    /**
     * 设置：
     */
    public void setImgIdArray(String imgIdArray) {
        this.imgIdArray = imgIdArray;
    }

    /**
     * 获取：
     */
    public String getImgIdArray() {
        return imgIdArray;
    }
    /**
     * 设置：商品收藏时价格
     */
    public void setGoodsPrice(BigDecimal goodsPrice) {
        this.goodsPrice = goodsPrice;
    }

    /**
     * 获取：商品收藏时价格
     */
    public BigDecimal getGoodsPrice() {
        return goodsPrice;
    }
    /**
     * 设置：收藏备注
     */
    public void setFavMsg(String favMsg) {
        this.favMsg = favMsg;
    }

    /**
     * 获取：收藏备注
     */
    public String getFavMsg() {
        return favMsg;
    }
    /**
     * 设置：收藏时间
     */
    public void setCreateTime(Integer createTime) {
        this.createTime = createTime;
    }

    /**
     * 获取：收藏时间
     */
    public Integer getCreateTime() {
        return createTime;
    }
}
