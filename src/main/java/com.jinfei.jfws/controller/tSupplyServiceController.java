package com.jinfei.jfws.controller;

import com.jinfei.jfws.model.tMaterialCode;
import com.jinfei.jfws.model.tSupply;
import com.jinfei.jfws.service.ITSupplyService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import java.util.List;

@Controller
@RequestMapping("/Supply")
public class tSupplyServiceController {

    @Resource
    private ITSupplyService itSupplyService;

    @RequestMapping("/selectSupply.do")
    private @ResponseBody List<tSupply> selectSupply(){
        return itSupplyService.selectSupply();
    }

    @RequestMapping(value = "/updateTSupply.do",method = RequestMethod.POST)
    private @ResponseBody Integer updateTSupply(tSupply supply){
        return itSupplyService.updateTSupply(supply);
    }
}
