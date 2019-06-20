package com.jinfei.jfws.dao;

import com.jinfei.jfws.model.tSupply;

import java.util.List;

public interface tSupplyMapper {
    int deleteByPrimaryKey(Long supplyId);

    int insert(tSupply record);

    int insertSelective(tSupply record);

    tSupply selectByPrimaryKey(Long supplyId);

    int updateByPrimaryKeySelective(tSupply record);

    int updateByPrimaryKey(tSupply record);

    List<tSupply> selectSupply();

}