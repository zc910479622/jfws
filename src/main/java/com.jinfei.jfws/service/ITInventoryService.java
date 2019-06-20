package com.jinfei.jfws.service;

import com.jinfei.jfws.model.tInventory;

import java.util.List;

public interface ITInventoryService {
    List<tInventory> selectInventory();

    Integer updateInventory(tInventory tInventory);

    Integer insertInventory(tInventory tInventory);

    Integer delete(tInventory tInventory);
}
