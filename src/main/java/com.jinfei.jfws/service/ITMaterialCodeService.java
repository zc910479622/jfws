package com.jinfei.jfws.service;

import com.jinfei.jfws.model.tMaterialCode;

import java.util.List;

public interface ITMaterialCodeService {
    List<tMaterialCode> selectMaterial();

    Integer updateTMaterial(tMaterialCode tMaterialCode);
}
