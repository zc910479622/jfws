package com.jinfei.jfws.service.Impl;

import com.jinfei.jfws.dao.tDisplayMapper;
import com.jinfei.jfws.model.tDisplay;
import com.jinfei.jfws.service.ITDisplayService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

@Service
public class tDisplayServiceImpl implements ITDisplayService {

    @Resource
    private tDisplayMapper tDisplayMapper;

    @Override
    public List<tDisplay> selectDisplay() {
        return tDisplayMapper.selectDisplay();
    }

    @Override
    public Integer updateDisplay(tDisplay tDisplay) {
        return tDisplayMapper.updateByPrimaryKey(tDisplay);
    }

}
