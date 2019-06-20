package com.jinfei.jfws.model;

public class tSupply {
    private Long supplyId;

    private String supplyNbr;

    private String supplyCode;

    private String supplyName;

    private String supplyAddress;

    private String supplyShortname;

    public Long getSupplyId() {
        return supplyId;
    }

    public void setSupplyId(Long supplyId) {
        this.supplyId = supplyId;
    }

    public String getSupplyNbr() {
        return supplyNbr;
    }

    public void setSupplyNbr(String supplyNbr) {
        this.supplyNbr = supplyNbr == null ? null : supplyNbr.trim();
    }

    public String getSupplyCode() {
        return supplyCode;
    }

    public void setSupplyCode(String supplyCode) {
        this.supplyCode = supplyCode == null ? null : supplyCode.trim();
    }

    public String getSupplyName() {
        return supplyName;
    }

    public void setSupplyName(String supplyName) {
        this.supplyName = supplyName == null ? null : supplyName.trim();
    }

    public String getSupplyAddress() {
        return supplyAddress;
    }

    public void setSupplyAddress(String supplyAddress) {
        this.supplyAddress = supplyAddress == null ? null : supplyAddress.trim();
    }

    public String getSupplyShortname() {
        return supplyShortname;
    }

    public void setSupplyShortname(String supplyShortname) {
        this.supplyShortname = supplyShortname == null ? null : supplyShortname.trim();
    }
}