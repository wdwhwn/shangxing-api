package com.platform.controller;

import java.io.FileNotFoundException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.platform.annotation.LoginUser;
import com.platform.common.Msg;
import com.platform.service.TokenService;
import com.platform.util.ApiBaseAction;
import com.platform.util.JedisUtil;
import com.platform.util.RandomNumber;
import com.platform.utils.JsonUtil;
import org.apache.shiro.authz.annotation.RequiresPermissions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.platform.entity.OcMemberEntity;
import com.platform.service.OcMemberService;
import com.platform.utils.PageUtils;
import com.platform.utils.Query;
import com.platform.utils.R;

/**
 * 用户账号表Controller
 *
 * @author wd
 * @email 952172674@qq.com
 * @date 2019-04-10 15:53:50*/


@RestController
@RequestMapping("/index.php/app/index")
public class OcMemberController extends ApiBaseAction {
    @Autowired
    private OcMemberService ocMemberService;

    @Autowired
    private TokenService tokenService;
/**
     *@title 发送验证码
     * @Description 生成验证码---存储到redis---发送给用户短信
     * @param mobile   手机号
     * @return  状态信息：成功  OR  失败
     * @throws FileNotFoundException 文件为找到异常*/


    @RequestMapping("/msg")
    public Object msg(String mobile) throws FileNotFoundException {
        String card = RandomNumber.getCard();
        JedisUtil.getJedis().set(mobile,card);
        Map<String, Object> stringObjectMap = Msg.mobileQuery(mobile, card);
        return toResponsSuccess(stringObjectMap);
    }

/*
*
     * 短信登录
     * @param mobile
     * @param smscode
     * @return
     * @throws FileNotFoundException
*/


    @RequestMapping("/smscodeLogin")
    public Object smscodeLogin(String mobile,String smscode) throws FileNotFoundException {
        //      核对短信验证码
        String s = JedisUtil.getJedis().get(mobile);
        if(smscode==null){
            return toResponsFail("验证码不能为空");
        }
        if(smscode!=null && !smscode.equals(s)){
            return toResponsFail("请核对验证码之后，重新输入");
        }
        OcMemberEntity ocMemberEntity=ocMemberService.loginBymsg(mobile);
        if(ocMemberEntity==null){
            return toResponsFail("手机号不存在");
        }

        return toResponsSuccess(ocMemberEntity);

    }

/**
     * 用户详情
     * @param token
     * @return*/


    @RequestMapping("/memberDetail")
    public Object memberDetail(String token){
        OcMemberEntity ocMemberEntity=ocMemberService.selectByToken(token);
        HashMap<String, Object> data = new HashMap<>();
        data.put("pageparm",ocMemberEntity);
        return toResponsSuccess(data);
    }
/**
     * 用户注册*/


    @RequestMapping("/memberRegister")
    public Object memberRegister(OcMemberEntity ocMember,String smscode ) {
//        验证手机号是否已经被注册
        OcMemberEntity ocMemberEntity=ocMemberService.loginBymsg(ocMember.getMobile());
        if(ocMemberEntity!=null){
            return toResponsFail("手机号已被注册");
        }
        //      核对短信验证码
        String s = JedisUtil.getJedis().get(ocMember.getMobile());
        if(smscode==null){
            return toResponsFail("验证码不能为空");
        }
        if(smscode!=null && !smscode.equals(s)){
            return toResponsFail("请核对验证码之后，重新输入");
        }
        ocMemberService.save(ocMember);
        return R.ok();
    }
    /**
     * 账号密码 登录
    * */
    @RequestMapping("memberLogin")
//    @RequiresPermissions("ocmember:info")
    public Object memberLogin(OcMemberEntity ocMemberEntity) {
        System.out.println(ocMemberEntity);
        OcMemberEntity login = ocMemberService.login(ocMemberEntity);
        System.out.println(login);
        return toResponsSuccess(login);
    }
/**
     * 更新用户*/


    @RequestMapping("/memberUpdate")
//    @RequiresPermissions("ocmember:update")
    public Object memberUpdate(OcMemberEntity ocMember) {
        ocMemberService.update(ocMember);
        return R.ok();
    }

/**
     * 更新手机*/


    @RequestMapping("/updateMobile")
//    @RequiresPermissions("ocmember:update")
    public Object updateMobile(@LoginUser OcMemberEntity ocMember, String mobileNew, String smscode, String token) {
//        查询当前用户的手机号  调用用户详情接口
//        使用当前用户手机号发送验证码
        //      核对短信验证码
        String s = JedisUtil.getJedis().get(ocMember.getMobile());
        if(smscode==null){
                    return toResponsFail("验证码不能为空");
        }
        if(smscode!=null && !smscode.equals(s)){
            return toResponsFail("请核对验证码之后，重新输入");
        }
        ocMember.setMobile(mobileNew);
//        验证通过，更新手机号
        ocMemberService.update(ocMember);
        return R.ok();
    }
/*
*
     * 查看列表
*/



//    @RequiresPermissions("ocmember:list")
    public R list(@RequestParam Map<String, Object> params) {
        //查询列表数据
        Query query = new Query(params);

        List<OcMemberEntity> ocMemberList = ocMemberService.queryList(query);
        int total = ocMemberService.queryTotal(query);

        PageUtils pageUtil = new PageUtils(ocMemberList, total, query.getLimit(), query.getPage());

        return R.ok().put("page", pageUtil);
    }
/**
     * 查看信息*/



//    @RequiresPermissions("ocmember:info")
    public R info(@PathVariable("mid") Integer mid) {
        OcMemberEntity ocMember = ocMemberService.queryObject(mid);

        return R.ok().put("ocMember", ocMember);
    }
/**
     * 删除*/



//    @RequiresPermissions("ocmember:delete")
    public R delete(@RequestBody Integer[] mids) {
        ocMemberService.deleteBatch(mids);
        return R.ok();
    }

/**
     * 查看所有列表*/



    public R queryAll(@RequestParam Map<String, Object> params) {
        List<OcMemberEntity> list = ocMemberService.queryList(params);
        return R.ok().put("list", list);
    }
}
