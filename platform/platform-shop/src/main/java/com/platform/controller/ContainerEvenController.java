package com.platform.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.platform.utils.R;

@RestController
@RequestMapping("/lockerbox")
public class ContainerEvenController {
	
	/**
	 * 
	 * @return
	 */
	@PostMapping("/event")
	public R handerContainerEvent() {
		Map<String,Object> rMap = new HashMap<String,Object>();
		
		return R.ok(rMap);
	}

}
