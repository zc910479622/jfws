package com.jinfei.jfws.service;

import com.jinfei.jfws.model.tSys;

import java.util.List;

public interface ITSysService {
    List<tSys> selectSys();

    Integer updateSys(tSys tSys);
}
