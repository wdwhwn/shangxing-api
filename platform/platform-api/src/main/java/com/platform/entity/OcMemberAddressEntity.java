package com.platform.entity;

import java.io.Serializable;
import java.util.Date;

/**
 * 收货地址表实体
 * 表名 oc_member_address
 *
 * @author wd
 * @email 952172674@qq.com
 * @date 2019-04-11 11:40:58
 */
public class OcMemberAddressEntity implements Serializable {
    private static final long serialVersionUID = 1L;

    //
    private Integer id;
    //当前用户id
    private Integer mid;
    //收货人名称
    private String name;
    //手机
    private String mobile;
    //省
    private Integer provinceId;
    //市
    private Integer cityId;
    //区
    private Integer districtId;
    //省市区
    private String locationplace;
    //具体收货地址
    private String addressDetail;
    //1:默认收货地址，0：非默认收货地址
    private Integer isDefault;
    //创建时间
    private Integer createTime;
    //修改时间
    private Integer updateTime;
    //状态,1：显示，0：隐藏
    private Integer status;

    /**
     * 设置：
     */
    public void setId(Integer id) {
        this.id = id;
    }

    /**
     * 获取：
     */
    public Integer getId() {
        return id;
    }
    /**
     * 设置：当前用户id
     */
    public void setMid(Integer mid) {
        this.mid = mid;
    }

    /**
     * 获取：当前用户id
     */
    public Integer getMid() {
        return mid;
    }
    /**
     * 设置：收货人名称
     */
    public void setName(String name) {
        this.name = name;
    }

    /**
     * 获取：收货人名称
     */
    public String getName() {
        return name;
    }
    /**
     * 设置：手机
     */
    public void setMobile(String mobile) {
        this.mobile = mobile;
    }

    /**
     * 获取：手机
     */
    public String getMobile() {
        return mobile;
    }
    /**
     * 设置：省
     */
    public void setProvinceId(Integer provinceId) {
        this.provinceId = provinceId;
    }

    /**
     * 获取：省
     */
    public Integer getProvinceId() {
        return provinceId;
    }
    /**
     * 设置：市
     */
    public void setCityId(Integer cityId) {
        this.cityId = cityId;
    }

    /**
     * 获取：市
     */
    public Integer getCityId() {
        return cityId;
    }
    /**
     * 设置：区
     */
    public void setDistrictId(Integer districtId) {
        this.districtId = districtId;
    }

    /**
     * 获取：区
     */
    public Integer getDistrictId() {
        return districtId;
    }
    /**
     * 设置：省市区
     */
    public void setLocationplace(String locationplace) {
        this.locationplace = locationplace;
    }

    /**
     * 获取：省市区
     */
    public String getLocationplace() {
        return locationplace;
    }
    /**
     * 设置：具体收货地址
     */
    public void setAddressDetail(String addressDetail) {
        this.addressDetail = addressDetail;
    }

    /**
     * 获取：具体收货地址
     */
    public String getAddressDetail() {
        return addressDetail;
    }
    /**
     * 设置：1:默认收货地址，0：非默认收货地址
     */
    public void setIsDefault(Integer isDefault) {
        this.isDefault = isDefault;
    }

    /**
     * 获取：1:默认收货地址，0：非默认收货地址
     */
    public Integer getIsDefault() {
        return isDefault;
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
    /**
     * 设置：修改时间
     */
    public void setUpdateTime(Integer updateTime) {
        this.updateTime = updateTime;
    }

    /**
     * 获取：修改时间
     * @param time
     */
    public Integer getUpdateTime(long time) {
        return updateTime;
    }
    /**
     * 设置：状态,1：显示，0：隐藏
     */
    public void setStatus(Integer status) {
        this.status = status;
    }

    /**
     * 获取：状态,1：显示，0：隐藏
     */
    public Integer getStatus() {
        return status;
    }
}
