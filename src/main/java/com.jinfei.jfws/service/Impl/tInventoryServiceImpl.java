package com.jinfei.jfws.service.Impl;

import com.jinfei.jfws.dao.tInventoryMapper;
import com.jinfei.jfws.model.tInventory;
import com.jinfei.jfws.service.ITInventoryService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

@Service
public class tInventoryServiceImpl implements ITInventoryService {

    @Resource
    private tInventoryMapper tInventoryMapper;


    @Override
    public List<tInventory> selectInventory() {
        return tInventoryMapper.selectInventory();
    }

    @Override
    public Integer updateInventory(tInventory tInventory) {
        return tInventoryMapper.updateByPrimaryKey(tInventory);
    }

    @Override
    public Integer insertInventory(tInventory tInventory) {
        return tInventoryMapper.insert(tInventory);
    }

    @Override
    public Integer delete(tInventory tInventory) {
        return tInventoryMapper.deleteByPrimaryKey(tInventory.getId());
    }
}
