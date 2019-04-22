package com.platform.entity;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

/**
 * 商品分类表实体
 * 表名 oc_goods_category
 *
 * @author wd
 * @email 952172674@qq.com
 * @date 2019-04-16 17:30:23
 */
public class OcGoodsCategoryEntity implements Serializable {
    private static final long serialVersionUID = 1L;

    //ID 1
    private Integer id;
    //父类ID 1
    private Integer pid;
    //分类名称 1
    private String categoryName;
    //商品分类简称
    private String shortName;
    //图片
    private String categoryPic;
    //图片ID
    private Integer cover;
    //创建时间
    private Integer createTime;
    //修改时间
    private Integer updateTime;
    //状态,0：隐藏，1：显示 1
    private Integer isVisible;
    //层级级别 1
    private Integer level;
    //排序 1
    private Integer sort;
    //是否展开显示
    private Integer open;
//    子类别
    private List<OcGoodsCategoryEntity> ocGoodsCategoryEntityList;
    /**
     * 设置：ID
     */
    public void setId(Integer id) {
        this.id = id;
    }

    /**
     * 获取：ID
     */
    public Integer getId() {
        return id;
    }
    /**
     * 设置：父类ID
     */
    public void setPid(Integer pid) {
        this.pid = pid;
    }

    /**
     * 获取：父类ID
     */
    public Integer getPid() {
        return pid;
    }
    /**
     * 设置：分类名称
     */
    public void setCategoryName(String categoryName) {
        this.categoryName = categoryName;
    }

    /**
     * 获取：分类名称
     */
    public String getCategoryName() {
        return categoryName;
    }
    /**
     * 设置：商品分类简称
     */
    public void setShortName(String shortName) {
        this.shortName = shortName;
    }

    /**
     * 获取：商品分类简称
     */
    public String getShortName() {
        return shortName;
    }
    /**
     * 设置：图片
     */
    public void setCategoryPic(String categoryPic) {
        this.categoryPic = categoryPic;
    }

    /**
     * 获取：图片
     */
    public String getCategoryPic() {
        return categoryPic;
    }
    /**
     * 设置：图片ID
     */
    public void setCover(Integer cover) {
        this.cover = cover;
    }

    /**
     * 获取：图片ID
     */
    public Integer getCover() {
        return cover;
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
     */
    public Integer getUpdateTime() {
        return updateTime;
    }
    /**
     * 设置：状态,0：隐藏，1：显示
     */
    public void setIsVisible(Integer isVisible) {
        this.isVisible = isVisible;
    }

    /**
     * 获取：状态,0：隐藏，1：显示
     */
    public Integer getIsVisible() {
        return isVisible;
    }
    /**
     * 设置：层级级别
     */
    public void setLevel(Integer level) {
        this.level = level;
    }

    /**
     * 获取：层级级别
     */
    public Integer getLevel() {
        return level;
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
     * 设置：是否展开显示
     */
    public void setOpen(Integer open) {
        this.open = open;
    }

    /**
     * 获取：是否展开显示
     */
    public Integer getOpen() {
        return open;
    }

    public List<OcGoodsCategoryEntity> getOcGoodsCategoryEntityList() {
        return ocGoodsCategoryEntityList;
    }

    public void setOcGoodsCategoryEntityList(List<OcGoodsCategoryEntity> ocGoodsCategoryEntityList) {
        this.ocGoodsCategoryEntityList = ocGoodsCategoryEntityList;
    }
}
