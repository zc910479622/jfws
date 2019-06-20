package com.jinfei.jfws.controller;

import com.jinfei.jfws.model.tDisplay;
import com.jinfei.jfws.service.ITDisplayService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import java.util.List;

@Controller
@RequestMapping("Display")
public class tDisplayController {

    @Resource
    private ITDisplayService itDisplayService;

    @RequestMapping("/selectDisplay.do")
    private @ResponseBody List<tDisplay> selectDisplay(){
        return itDisplayService.selectDisplay();
    }

    @RequestMapping(value = "/updateDisplay.do",method = RequestMethod.POST)
    private @ResponseBody Integer updateDisplay(tDisplay tDisplay){
        System.out.println(tDisplay.getSubitems());
        return itDisplayService.updateDisplay(tDisplay);
    }
}
