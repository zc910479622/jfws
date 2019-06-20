package com.jinfei.jfws.controller;

import com.jinfei.jfws.model.tMaterialCode;
import com.jinfei.jfws.service.ITMaterialCodeService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import java.util.List;

@Controller
@RequestMapping("/Material")
public class tMaterialCodeController {

    @Resource
    private ITMaterialCodeService itMaterialCodeService;

    @RequestMapping("/selectMaterial.do")
    private @ResponseBody List<tMaterialCode> selectMaterial(){
        return itMaterialCodeService.selectMaterial();
    }

    @RequestMapping(value = "/updateTMaterial.do",method = RequestMethod.POST)
    private @ResponseBody Integer updateTMaterial(tMaterialCode tMaterialCode){
        return itMaterialCodeService.updateTMaterial(tMaterialCode);
    }
}
