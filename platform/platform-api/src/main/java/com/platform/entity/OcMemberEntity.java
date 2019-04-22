package com.platform.entity;

import java.io.Serializable;
import java.math.BigDecimal;
import java.util.Date;

/**
 * 用户账号表实体
 * 表名 oc_member
 *
 * @author wd
 * @email 952172674@qq.com
 * @date 2019-04-10 15:53:50
 */
public class OcMemberEntity implements Serializable {
    private static final long serialVersionUID = 1L;

    //mid
    private Integer mid;
    //传播ID
    private Integer tid;
    //上线ID
    private Integer pid;
    //手机号
    private String mobile;
    //推荐码
    private String invitecode;
    //app唯一用户标识
    private String token;
    //密码
    private String password;
    //店铺ID
    private Integer shopId;
    //前台用户名
    private String username;
    //真实姓名
    private String realname;
    //小程序openid
    private String miniopenid;
    //会员等级ID
    private Integer memberLevel;
    //用户等级
    private Integer levelId;
    //
    private String levelName;
    //在平台的收益-可以提现操作
    private BigDecimal profit;
    //余额
    private BigDecimal money;
    //备注
    private String memo;
    //所在省ID
    private Integer provinceId;
    //所在城市ID
    private Integer cityId;
    //所在区ID
    private Integer districtId;
    //省市区
    private String locationplace;
    //镇乡：非必填
    private String town;
    //乡：非必填
    private String village;
    //积分,保留字段
    private Integer point;
    //头像图片地址
    private String headUrl;
    //邮箱
    private String email;
    //0：男，1：女
    private Integer sex;
    //性别别名
    private String sexCn;
    //注册时间
    private Integer createTime;
    //更新时间
    private Integer updateTime;
    //状态
    private Integer status;
    //
    private String qq;
    //公众号，小程序唯一标识-unionid
    private String unionid;
    //微信用户昵称
    private String nickname;
    //微信用户：access_token
    private String accessToken;
    //微信用户头像
    private String headimgurl;

    /**
     * 设置：mid
     */
    public void setMid(Integer mid) {
        this.mid = mid;
    }

    /**
     * 获取：mid
     */
    public Integer getMid() {
        return mid;
    }
    /**
     * 设置：传播ID
     */
    public void setTid(Integer tid) {
        this.tid = tid;
    }

    /**
     * 获取：传播ID
     */
    public Integer getTid() {
        return tid;
    }
    /**
     * 设置：上线ID
     */
    public void setPid(Integer pid) {
        this.pid = pid;
    }

    /**
     * 获取：上线ID
     */
    public Integer getPid() {
        return pid;
    }
    /**
     * 设置：手机号
     */
    public void setMobile(String mobile) {
        this.mobile = mobile;
    }

    /**
     * 获取：手机号
     */
    public String getMobile() {
        return mobile;
    }
    /**
     * 设置：推荐码
     */
    public void setInvitecode(String invitecode) {
        this.invitecode = invitecode;
    }

    /**
     * 获取：推荐码
     */
    public String getInvitecode() {
        return invitecode;
    }
    /**
     * 设置：app唯一用户标识
     */
    public void setToken(String token) {
        this.token = token;
    }

    /**
     * 获取：app唯一用户标识
     */
    public String getToken() {
        return token;
    }
    /**
     * 设置：密码
     */
    public void setPassword(String password) {
        this.password = password;
    }

    /**
     * 获取：密码
     */
    public String getPassword() {
        return password;
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
     * 设置：前台用户名
     */
    public void setUsername(String username) {
        this.username = username;
    }

    /**
     * 获取：前台用户名
     */
    public String getUsername() {
        return username;
    }
    /**
     * 设置：真实姓名
     */
    public void setRealname(String realname) {
        this.realname = realname;
    }

    /**
     * 获取：真实姓名
     */
    public String getRealname() {
        return realname;
    }
    /**
     * 设置：小程序openid
     */
    public void setMiniopenid(String miniopenid) {
        this.miniopenid = miniopenid;
    }

    /**
     * 获取：小程序openid
     */
    public String getMiniopenid() {
        return miniopenid;
    }
    /**
     * 设置：会员等级ID
     */
    public void setMemberLevel(Integer memberLevel) {
        this.memberLevel = memberLevel;
    }

    /**
     * 获取：会员等级ID
     */
    public Integer getMemberLevel() {
        return memberLevel;
    }
    /**
     * 设置：用户等级
     */
    public void setLevelId(Integer levelId) {
        this.levelId = levelId;
    }

    /**
     * 获取：用户等级
     */
    public Integer getLevelId() {
        return levelId;
    }
    /**
     * 设置：
     */
    public void setLevelName(String levelName) {
        this.levelName = levelName;
    }

    /**
     * 获取：
     */
    public String getLevelName() {
        return levelName;
    }
    /**
     * 设置：在平台的收益-可以提现操作
     */
    public void setProfit(BigDecimal profit) {
        this.profit = profit;
    }

    /**
     * 获取：在平台的收益-可以提现操作
     */
    public BigDecimal getProfit() {
        return profit;
    }
    /**
     * 设置：余额
     */
    public void setMoney(BigDecimal money) {
        this.money = money;
    }

    /**
     * 获取：余额
     */
    public BigDecimal getMoney() {
        return money;
    }
    /**
     * 设置：备注
     */
    public void setMemo(String memo) {
        this.memo = memo;
    }

    /**
     * 获取：备注
     */
    public String getMemo() {
        return memo;
    }
    /**
     * 设置：所在省ID
     */
    public void setProvinceId(Integer provinceId) {
        this.provinceId = provinceId;
    }

    /**
     * 获取：所在省ID
     */
    public Integer getProvinceId() {
        return provinceId;
    }
    /**
     * 设置：所在城市ID
     */
    public void setCityId(Integer cityId) {
        this.cityId = cityId;
    }

    /**
     * 获取：所在城市ID
     */
    public Integer getCityId() {
        return cityId;
    }
    /**
     * 设置：所在区ID
     */
    public void setDistrictId(Integer districtId) {
        this.districtId = districtId;
    }

    /**
     * 获取：所在区ID
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
     * 设置：镇乡：非必填
     */
    public void setTown(String town) {
        this.town = town;
    }

    /**
     * 获取：镇乡：非必填
     */
    public String getTown() {
        return town;
    }
    /**
     * 设置：乡：非必填
     */
    public void setVillage(String village) {
        this.village = village;
    }

    /**
     * 获取：乡：非必填
     */
    public String getVillage() {
        return village;
    }
    /**
     * 设置：积分,保留字段
     */
    public void setPoint(Integer point) {
        this.point = point;
    }

    /**
     * 获取：积分,保留字段
     */
    public Integer getPoint() {
        return point;
    }
    /**
     * 设置：头像图片地址
     */
    public void setHeadUrl(String headUrl) {
        this.headUrl = headUrl;
    }

    /**
     * 获取：头像图片地址
     */
    public String getHeadUrl() {
        return headUrl;
    }
    /**
     * 设置：邮箱
     */
    public void setEmail(String email) {
        this.email = email;
    }

    /**
     * 获取：邮箱
     */
    public String getEmail() {
        return email;
    }
    /**
     * 设置：0：男，1：女
     */
    public void setSex(Integer sex) {
        this.sex = sex;
    }

    /**
     * 获取：0：男，1：女
     */
    public Integer getSex() {
        return sex;
    }
    /**
     * 设置：性别别名
     */
    public void setSexCn(String sexCn) {
        this.sexCn = sexCn;
    }

    /**
     * 获取：性别别名
     */
    public String getSexCn() {
        return sexCn;
    }
    /**
     * 设置：注册时间
     */
    public void setCreateTime(Integer createTime) {
        this.createTime = createTime;
    }

    /**
     * 获取：注册时间
     */
    public Integer getCreateTime() {
        return createTime;
    }
    /**
     * 设置：更新时间
     */
    public void setUpdateTime(Integer updateTime) {
        this.updateTime = updateTime;
    }

    /**
     * 获取：更新时间
     */
    public Integer getUpdateTime() {
        return updateTime;
    }
    /**
     * 设置：状态
     */
    public void setStatus(Integer status) {
        this.status = status;
    }

    /**
     * 获取：状态
     */
    public Integer getStatus() {
        return status;
    }
    /**
     * 设置：
     */
    public void setQq(String qq) {
        this.qq = qq;
    }

    /**
     * 获取：
     */
    public String getQq() {
        return qq;
    }
    /**
     * 设置：公众号，小程序唯一标识-unionid
     */
    public void setUnionid(String unionid) {
        this.unionid = unionid;
    }

    /**
     * 获取：公众号，小程序唯一标识-unionid
     */
    public String getUnionid() {
        return unionid;
    }
    /**
     * 设置：微信用户昵称
     */
    public void setNickname(String nickname) {
        this.nickname = nickname;
    }

    /**
     * 获取：微信用户昵称
     */
    public String getNickname() {
        return nickname;
    }
    /**
     * 设置：微信用户：access_token
     */
    public void setAccessToken(String accessToken) {
        this.accessToken = accessToken;
    }

    /**
     * 获取：微信用户：access_token
     */
    public String getAccessToken() {
        return accessToken;
    }
    /**
     * 设置：微信用户头像
     */
    public void setHeadimgurl(String headimgurl) {
        this.headimgurl = headimgurl;
    }

    /**
     * 获取：微信用户头像
     */
    public String getHeadimgurl() {
        return headimgurl;
    }

    @Override
    public String toString() {
        return "OcMemberEntity{" +
                "mid=" + mid +
                ", tid=" + tid +
                ", pid=" + pid +
                ", mobile='" + mobile + '\'' +
                ", invitecode='" + invitecode + '\'' +
                ", token='" + token + '\'' +
                ", password='" + password + '\'' +
                ", shopId=" + shopId +
                ", username='" + username + '\'' +
                ", realname='" + realname + '\'' +
                ", miniopenid='" + miniopenid + '\'' +
                ", memberLevel=" + memberLevel +
                ", levelId=" + levelId +
                ", levelName='" + levelName + '\'' +
                ", profit=" + profit +
                ", money=" + money +
                ", memo='" + memo + '\'' +
                ", provinceId=" + provinceId +
                ", cityId=" + cityId +
                ", districtId=" + districtId +
                ", locationplace='" + locationplace + '\'' +
                ", town='" + town + '\'' +
                ", village='" + village + '\'' +
                ", point=" + point +
                ", headUrl='" + headUrl + '\'' +
                ", email='" + email + '\'' +
                ", sex=" + sex +
                ", sexCn='" + sexCn + '\'' +
                ", createTime=" + createTime +
                ", updateTime=" + updateTime +
                ", status=" + status +
                ", qq='" + qq + '\'' +
                ", unionid='" + unionid + '\'' +
                ", nickname='" + nickname + '\'' +
                ", accessToken='" + accessToken + '\'' +
                ", headimgurl='" + headimgurl + '\'' +
                '}';
    }
}
