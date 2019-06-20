package com.jinfei.jfws.service;

import com.jinfei.jfws.model.tSupply;

import java.util.List;

public interface ITSupplyService {
    List<tSupply> selectSupply();

    Integer updateTSupply(tSupply supply);
}
