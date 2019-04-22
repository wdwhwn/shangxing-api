package com.platform.entity;

import java.io.Serializable;
import java.util.Date;

/**
 * 会员提现账号实体
 * 表名 oc_member_bank_account
 *
 * @author wd
 * @email 952172674@qq.com
 * @date 2019-04-16 16:09:41
 */
public class OcMemberBankAccountEntity implements Serializable {
    private static final long serialVersionUID = 1L;

    //
    private Integer id;
    //会员id
    private Integer mid;
    //支行信息
    private String branchBankName;
    //真实姓名
    private String realname;
    //银行账号
    private String accountNumber;
    //手机号
    private String mobile;
    //是否默认账号
    private Integer isDefault;
    //创建日期
    private Integer createTime;
    //修改日期
    private Integer updateTime;
    //账户类型，1：银行卡，2：微信，3：支付宝
    private Integer accountType;
    //账户类型名称：银行卡，微信，支付宝
    private String accountTypeName;

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
     * 设置：会员id
     */
    public void setMid(Integer mid) {
        this.mid = mid;
    }

    /**
     * 获取：会员id
     */
    public Integer getMid() {
        return mid;
    }
    /**
     * 设置：支行信息
     */
    public void setBranchBankName(String branchBankName) {
        this.branchBankName = branchBankName;
    }

    /**
     * 获取：支行信息
     */
    public String getBranchBankName() {
        return branchBankName;
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
     * 设置：银行账号
     */
    public void setAccountNumber(String accountNumber) {
        this.accountNumber = accountNumber;
    }

    /**
     * 获取：银行账号
     */
    public String getAccountNumber() {
        return accountNumber;
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
     * 设置：是否默认账号
     */
    public void setIsDefault(Integer isDefault) {
        this.isDefault = isDefault;
    }

    /**
     * 获取：是否默认账号
     */
    public Integer getIsDefault() {
        return isDefault;
    }
    /**
     * 设置：创建日期
     */
    public void setCreateTime(Integer createTime) {
        this.createTime = createTime;
    }

    /**
     * 获取：创建日期
     */
    public Integer getCreateTime() {
        return createTime;
    }
    /**
     * 设置：修改日期
     */
    public void setUpdateTime(Integer updateTime) {
        this.updateTime = updateTime;
    }

    /**
     * 获取：修改日期
     */
    public Integer getUpdateTime() {
        return updateTime;
    }
    /**
     * 设置：账户类型，1：银行卡，2：微信，3：支付宝
     */
    public void setAccountType(Integer accountType) {
        this.accountType = accountType;
    }

    /**
     * 获取：账户类型，1：银行卡，2：微信，3：支付宝
     */
    public Integer getAccountType() {
        return accountType;
    }
    /**
     * 设置：账户类型名称：银行卡，微信，支付宝
     */
    public void setAccountTypeName(String accountTypeName) {
        this.accountTypeName = accountTypeName;
    }

    /**
     * 获取：账户类型名称：银行卡，微信，支付宝
     */
    public String getAccountTypeName() {
        return accountTypeName;
    }
}
