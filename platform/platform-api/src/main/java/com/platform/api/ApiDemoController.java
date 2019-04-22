package com.platform.api;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.platform.annotation.IgnoreAuth;
import com.platform.util.ApiBaseAction;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;

@Controller
@Api(tags="测试的DEMO")
@RequestMapping("/api/demo")
public class ApiDemoController extends ApiBaseAction{
	
	@GetMapping(value="/list")
	@ApiOperation(value="查询列表",response=Map.class)
	@IgnoreAuth
	@ResponseBody
	public Object list(@RequestParam(value="page",defaultValue="1") Integer page,
			@RequestParam(value="size",defaultValue="10") Integer size) {
		List<Map<String,Object>> resultLs = new ArrayList<Map<String,Object>>();
		Map<String,Object> map = new HashMap<String,Object>();
		map.put("name", "xujianhui");
		map.put("sex", "男");
		resultLs.add(map);
		return this.toResponsSuccess(resultLs);
	}

}
