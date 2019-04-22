package com.platform.entity;

import java.io.Serializable;
import java.math.BigDecimal;
import java.util.Date;

/**
 * 商品属性表实体
 * 表名 oc_goods_attribute
 *
 * @author wd
 * @email 952172674@qq.com
 * @date 2019-04-18 11:00:59
 */
public class OcGoodsAttributeEntity implements Serializable {
    private static final long serialVersionUID = 1L;

    //
    private Integer attrId;
    //属性sku
    private String sku;
    //商品ID
    private Integer goodsId;
    //商品原价格
    private BigDecimal specPrice;
    //市场价
    private BigDecimal specMarketPrice;
    //促销价
    private BigDecimal specPromotionPrice;
    //会员价
    private BigDecimal specMemberPrice;
    //商品库存
    private Integer specStock;
    //店铺ID
    private Integer shopId;
    //属性值id
    private String specIds;
    //属性值名称
    private String specName;
    //属性值对应数据值
    private String specValueDatas;
    //排序
    private Integer sort;
    //创建时间
    private Integer createTime;

    /**
     * 设置：
     */
    public void setAttrId(Integer attrId) {
        this.attrId = attrId;
    }

    /**
     * 获取：
     */
    public Integer getAttrId() {
        return attrId;
    }
    /**
     * 设置：属性sku
     */
    public void setSku(String sku) {
        this.sku = sku;
    }

    /**
     * 获取：属性sku
     */
    public String getSku() {
        return sku;
    }
    /**
     * 设置：商品ID
     */
    public void setGoodsId(Integer goodsId) {
        this.goodsId = goodsId;
    }

    /**
     * 获取：商品ID
     */
    public Integer getGoodsId() {
        return goodsId;
    }
    /**
     * 设置：商品原价格
     */
    public void setSpecPrice(BigDecimal specPrice) {
        this.specPrice = specPrice;
    }

    /**
     * 获取：商品原价格
     */
    public BigDecimal getSpecPrice() {
        return specPrice;
    }
    /**
     * 设置：市场价
     */
    public void setSpecMarketPrice(BigDecimal specMarketPrice) {
        this.specMarketPrice = specMarketPrice;
    }

    /**
     * 获取：市场价
     */
    public BigDecimal getSpecMarketPrice() {
        return specMarketPrice;
    }
    /**
     * 设置：促销价
     */
    public void setSpecPromotionPrice(BigDecimal specPromotionPrice) {
        this.specPromotionPrice = specPromotionPrice;
    }

    /**
     * 获取：促销价
     */
    public BigDecimal getSpecPromotionPrice() {
        return specPromotionPrice;
    }
    /**
     * 设置：会员价
     */
    public void setSpecMemberPrice(BigDecimal specMemberPrice) {
        this.specMemberPrice = specMemberPrice;
    }

    /**
     * 获取：会员价
     */
    public BigDecimal getSpecMemberPrice() {
        return specMemberPrice;
    }
    /**
     * 设置：商品库存
     */
    public void setSpecStock(Integer specStock) {
        this.specStock = specStock;
    }

    /**
     * 获取：商品库存
     */
    public Integer getSpecStock() {
        return specStock;
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
     * 设置：属性值id
     */
    public void setSpecIds(String specIds) {
        this.specIds = specIds;
    }

    /**
     * 获取：属性值id
     */
    public String getSpecIds() {
        return specIds;
    }
    /**
     * 设置：属性值名称
     */
    public void setSpecName(String specName) {
        this.specName = specName;
    }

    /**
     * 获取：属性值名称
     */
    public String getSpecName() {
        return specName;
    }
    /**
     * 设置：属性值对应数据值
     */
    public void setSpecValueDatas(String specValueDatas) {
        this.specValueDatas = specValueDatas;
    }

    /**
     * 获取：属性值对应数据值
     */
    public String getSpecValueDatas() {
        return specValueDatas;
    }
    /**
     * 设置：排序
     */
    public void setSort(Integer sort) {
        this.sort = sort;
    }

    /**
     * 获取：排序
     */
    public Integer getSort() {
        return sort;
    }
    /**
     * 设置：创建时间
     */
    public void setCreateTime(Integer createTime) {
        this.createTime = createTime;
    }

    /**
     * 获取：创建时间
     */
    public Integer getCreateTime() {
        return createTime;
    }
}
