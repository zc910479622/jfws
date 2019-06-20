package com.jinfei.jfws.service.Impl;

import com.jinfei.jfws.dao.tSysMapper;
import com.jinfei.jfws.model.tSys;
import com.jinfei.jfws.service.ITSysService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

@Service
public class tSysServiceImpl implements ITSysService {

    @Resource
    private tSysMapper tSysMapper;

    @Override
    public List<tSys> selectSys() {
        return tSysMapper.selectSys();
    }

    @Override
    public Integer updateSys(tSys tSys) {
        return tSysMapper.updateSys(tSys);
    }
}
