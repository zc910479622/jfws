package com.jinfei.jfws.dao;

import com.jinfei.jfws.model.tInventory;

import java.util.List;

public interface tInventoryMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(tInventory record);

    int insertSelective(tInventory record);

    tInventory selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(tInventory record);

    int updateByPrimaryKey(tInventory record);

    List<tInventory> selectInventory();
}