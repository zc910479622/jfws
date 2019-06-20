package com.jinfei.jfws.controller;

import com.jinfei.jfws.model.tSys;
import com.jinfei.jfws.service.ITSysService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import java.util.List;

@Controller
@RequestMapping("Sys")
public class tSysController {

    @Resource
    private ITSysService itSysService;

    @RequestMapping("selectSys.do")
    private @ResponseBody List<tSys> selectSys(){
        return itSysService.selectSys();
    }

    @RequestMapping("updateSys.do")
    private @ResponseBody Integer updateSys(tSys tSys){
        return itSysService.updateSys(tSys);
    }

}
