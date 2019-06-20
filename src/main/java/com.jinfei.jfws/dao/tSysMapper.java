package com.jinfei.jfws.dao;

import com.jinfei.jfws.model.tSys;

import java.util.List;

public interface tSysMapper {
    int insert(tSys record);

    int insertSelective(tSys record);

    List<tSys> selectSys();

    Integer updateSys(tSys tSys);
}