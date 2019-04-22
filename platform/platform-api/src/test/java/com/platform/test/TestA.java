package com.platform.test;


import com.platform.entity.OcMemberEntity;
import com.platform.service.OcMemberService;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

/**
 * Created by Administrator on 2019/4/11 0011.
 */

public class TestA {

    public static void main(String[] args) {
        ApplicationContext apx = new ClassPathXmlApplicationContext("applicationContext-test.xml");
        OcMemberService ocMemberService = (OcMemberService) apx.getBean("ocMemberService");
//        System.out.println(car1);
//        OcMemberEntity ocMemberEntity=ocMemberService.loginBymsg("1234567890");
        OcMemberEntity ocMemberEntity=ocMemberService.selectByToken("ljivrzz3y7n590etcz5up2k90coxr1v5");
        System.out.println(ocMemberEntity);
    }
}
