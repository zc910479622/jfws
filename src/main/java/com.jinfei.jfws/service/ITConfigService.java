package com.jinfei.jfws.service;

import com.jinfei.jfws.model.tConfig;

import java.util.List;

public interface ITConfigService {
    List<tConfig> selectConfig();

    Integer updateConfig(tConfig tConfig);
}
