package com.jinfei.jfws.model;

import org.springframework.format.annotation.DateTimeFormat;

import java.util.Date;

public class tDisplay {
    private Byte displayId;

    private Byte type;

    private String houseName;

    @DateTimeFormat( pattern="yyyy-MM-dd HH:mm:ss")
    private Date inLampLasttime;

    @DateTimeFormat( pattern="yyyy-MM-dd HH:mm:ss")
    private Date outLampLasttime;

    private String color;

    @DateTimeFormat( pattern="yyyy-MM-dd HH:mm:ss")
    private Date lasttime;

    private String subitems;

    public Byte getDisplayId() {
        return displayId;
    }

    public void setDisplayId(Byte displayId) {
        this.displayId = displayId;
    }

    public Byte getType() {
        return type;
    }

    public void setType(Byte type) {
        this.type = type;
    }

    public String getHouseName() {
        return houseName;
    }

    public void setHouseName(String houseName) {
        this.houseName = houseName == null ? null : houseName.trim();
    }

    public Date getInLampLasttime() {
        return inLampLasttime;
    }

    public void setInLampLasttime(Date inLampLasttime) {
        this.inLampLasttime = inLampLasttime;
    }

    public Date getOutLampLasttime() {
        return outLampLasttime;
    }

    public void setOutLampLasttime(Date outLampLasttime) {
        this.outLampLasttime = outLampLasttime;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color == null ? null : color.trim();
    }

    public Date getLasttime() {
        return lasttime;
    }

    public void setLasttime(Date lasttime) {
        this.lasttime = lasttime;
    }

    public String getSubitems() {
        return subitems;
    }

    public void setSubitems(String subitems) {
        this.subitems = subitems == null ? null : subitems.trim();
    }
}