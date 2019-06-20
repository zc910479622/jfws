package com.jinfei.jfws.dao;

import com.jinfei.jfws.model.tMaterialCode;

import java.util.List;

public interface tMaterialCodeMapper {
    int deleteByPrimaryKey(String mateCode);

    int insert(tMaterialCode record);

    int insertSelective(tMaterialCode record);

    tMaterialCode selectByPrimaryKey(String mateCode);

    int updateByPrimaryKeySelective(tMaterialCode record);

    int updateByPrimaryKey(tMaterialCode record);

    List<tMaterialCode> selectMaterial();
}