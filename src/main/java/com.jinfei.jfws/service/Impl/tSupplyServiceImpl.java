package com.jinfei.jfws.service.Impl;

import com.jinfei.jfws.dao.tSupplyMapper;
import com.jinfei.jfws.model.tSupply;
import com.jinfei.jfws.service.ITSupplyService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

@Service
public class tSupplyServiceImpl implements ITSupplyService {
    @Resource
    private tSupplyMapper tSupplyMapper;

    @Override
    public List<tSupply> selectSupply() {
        return tSupplyMapper.selectSupply();
    }

    @Override
    public Integer updateTSupply(tSupply supply) {
        return tSupplyMapper.updateByPrimaryKey(supply);
    }
}
