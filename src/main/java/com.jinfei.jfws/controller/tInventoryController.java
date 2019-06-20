package com.jinfei.jfws.controller;

import com.jinfei.jfws.model.tInventory;
import com.jinfei.jfws.model.tMaterialCode;
import com.jinfei.jfws.service.ITInventoryService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import java.util.List;

@Controller
@RequestMapping("Inventory")
public class tInventoryController {

    @Resource
    private ITInventoryService itInventoryService;

    @RequestMapping("/selectInventory.do")
    private @ResponseBody List<tInventory> selectInventory(){
        return itInventoryService.selectInventory();
    }

    @RequestMapping(value = "/updateInventory.do",method = RequestMethod.POST)
    private @ResponseBody Integer updateInventory(tInventory tInventory){
        return itInventoryService.updateInventory(tInventory);
    }

    @RequestMapping(value = "/insertInventory.do",method = RequestMethod.POST)
    private @ResponseBody Integer insertInventory(tInventory tInventory){
        return itInventoryService.insertInventory(tInventory);
    }

    @RequestMapping(value = "/delete.do",method = RequestMethod.POST)
    private @ResponseBody Integer delete(tInventory tInventory){
        return itInventoryService.delete(tInventory);
    }
}
