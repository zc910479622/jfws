package com.jinfei.jfws.dao;

import com.jinfei.jfws.model.tDisplay;

import java.util.List;

public interface tDisplayMapper {
    int deleteByPrimaryKey(Byte displayId);

    int insert(tDisplay record);

    int insertSelective(tDisplay record);

    tDisplay selectByPrimaryKey(Byte displayId);

    int updateByPrimaryKeySelective(tDisplay record);

    int updateByPrimaryKey(tDisplay record);

    List<tDisplay> selectDisplay();

    Integer updateDisplaySub(tDisplay tDisplay);
}