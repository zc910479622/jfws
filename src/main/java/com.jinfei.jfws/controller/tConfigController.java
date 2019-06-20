package com.jinfei.jfws.controller;

import com.jinfei.jfws.model.tConfig;
import com.jinfei.jfws.service.ITConfigService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import java.util.List;

@Controller
@RequestMapping("/Config")
public class tConfigController {
    @Resource
    private ITConfigService itConfigService;

    @RequestMapping("/selectConfig.do")
    private @ResponseBody List<tConfig> selectConfig(){
        List<tConfig> a = itConfigService.selectConfig();
        for(tConfig tConfig:a){
            System.out.println(tConfig.getCloseStart());
        }
        return itConfigService.selectConfig();
    }

    @RequestMapping(value = "/updateConfig.do",method = RequestMethod.POST)
    private @ResponseBody Integer updateConfig(tConfig tConfig){
        return itConfigService.updateConfig(tConfig);
    }
}
