package com.jinfei.jfws.dao;

import com.jinfei.jfws.model.tConfig;

import java.util.List;

public interface tConfigMapper {
    int insert(tConfig record);

    int insertSelective(tConfig record);

    List<tConfig> selectConfig();

    Integer updateConfig(tConfig tConfig);
}
