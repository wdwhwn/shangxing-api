package com.platform.entity;

import java.io.Serializable;
import java.util.Date;

/**
 * 实体
 * 表名 user123
 *
 * @author wd
 * @email 952172674@qq.com
 * @date 2019-04-22 10:09:12
 */
public class User123Entity implements Serializable {
    private static final long serialVersionUID = 1L;

    //
    private Integer id;
    //
    private String name;
    //
    private String pwd;
    //
    private Date birthdy;

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
     * 设置：
     */
    public void setName(String name) {
        this.name = name;
    }

    /**
     * 获取：
     */
    public String getName() {
        return name;
    }
    /**
     * 设置：
     */
    public void setPwd(String pwd) {
        this.pwd = pwd;
    }

    /**
     * 获取：
     */
    public String getPwd() {
        return pwd;
    }
    /**
     * 设置：
     */
    public void setBirthdy(Date birthdy) {
        this.birthdy = birthdy;
    }

    /**
     * 获取：
     */
    public Date getBirthdy() {
        return birthdy;
    }
}
