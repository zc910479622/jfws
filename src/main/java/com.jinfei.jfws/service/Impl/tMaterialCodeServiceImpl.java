package com.jinfei.jfws.service.Impl;

import com.jinfei.jfws.dao.tMaterialCodeMapper;
import com.jinfei.jfws.model.tMaterialCode;
import com.jinfei.jfws.service.ITMaterialCodeService;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

@Service
public class tMaterialCodeServiceImpl implements ITMaterialCodeService {
    @Resource
    private tMaterialCodeMapper tMaterialCodeMapper;

    @Override
    public List<tMaterialCode> selectMaterial() {
        return tMaterialCodeMapper.selectMaterial();
    }

    @Override
    public Integer updateTMaterial(tMaterialCode tMaterialCode) {
        return tMaterialCodeMapper.updateByPrimaryKey(tMaterialCode);
    }
}
