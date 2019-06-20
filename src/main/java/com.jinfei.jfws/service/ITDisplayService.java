package com.jinfei.jfws.service;

import com.jinfei.jfws.model.tDisplay;

import java.util.List;

public interface ITDisplayService {
    List<tDisplay> selectDisplay();

    Integer updateDisplay(tDisplay tDisplay);

}
