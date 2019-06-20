package com.jinfei.jfws.service.Impl;

import com.jinfei.jfws.dao.tConfigMapper;
import com.jinfei.jfws.model.tConfig;
import com.jinfei.jfws.service.ITConfigService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

@Service
public class tConfigServiceImpl implements ITConfigService {

    @Resource
    private tConfigMapper  tConfigMapper;

    @Override
    public List<tConfig> selectConfig() {
        return tConfigMapper.selectConfig();
    }

    @Override
    public Integer updateConfig(tConfig tConfig) {
        return tConfigMapper.updateConfig(tConfig);
    }
}
