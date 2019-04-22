package com.platform.test;

import com.platform.entity.OcMemberAddressEntity;
import com.platform.entity.OcMemberEntity;
import com.platform.service.OcMemberAddressService;
import com.platform.service.OcMemberService;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Created by Administrator on 2019/4/11 0011.
 */
public class OcMemberAddress {
    public static void main(String[] args) {
        ApplicationContext apx = new ClassPathXmlApplicationContext("applicationContext-test.xml");
        OcMemberAddressService ocMemberAddressService = (OcMemberAddressService) apx.getBean("ocMemberAddressService");
        Map<String, Object> param = new HashMap<String, Object>();
//        param.put("mid", );
        List<OcMemberAddressEntity> ocMemberAddressEntities = ocMemberAddressService.queryList(param);
    }
}
