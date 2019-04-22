package com.platform.api;

import com.alibaba.fastjson.JSONObject;
import com.platform.annotation.LoginUser;
import com.platform.entity.FeedbackVo;
import com.platform.entity.UserVo;
import com.platform.service.ApiFeedbackService;
import com.platform.util.ApiBaseAction;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Date;

/**
 * 作者: @author Harmon <br>
 * 时间: 2017-08-11 08:32<br>
 * 描述: ApiFeedbackController <br>
 */
@Api(tags = "反馈")
@RestController
@RequestMapping("/api/feedback")
public class ApiFeedbackController extends ApiBaseAction {
    @Autowired
    private ApiFeedbackService feedbackService;

    /**
     * 添加反馈
     */
    @ApiOperation(value = "添加反馈")
    @PostMapping("save")
    public Object save(@LoginUser UserVo loginUser,String mobile,Integer index,String content) {
//        JSONObject feedbackJson = super.getJsonRequest();
            try {
                FeedbackVo feedbackVo = new FeedbackVo();
                feedbackVo.setUserId(loginUser.getUserId().intValue());
                feedbackVo.setUserName(loginUser.getUsername());
                feedbackVo.setMobile(mobile);
                feedbackVo.setFeedType(index);
                feedbackVo.setStatus(1);
                feedbackVo.setContent(content);
                feedbackVo.setAddTime(new Date());
                feedbackService.save(feedbackVo);
                return super.toResponsSuccess("感谢你的反馈");
            } catch (Exception e) {
                e.printStackTrace();
                return super.toResponsFail("反馈失败");
            }

    }
}