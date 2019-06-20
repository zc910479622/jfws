package com.jinfei.jfws.model;

public class tMaterialCode {
    private String mateCode;

    private String mateCodeName;

    private String mateCodeShortname;

    public String getMateCode() {
        return mateCode;
    }

    public void setMateCode(String mateCode) {
        this.mateCode = mateCode == null ? null : mateCode.trim();
    }

    public String getMateCodeName() {
        return mateCodeName;
    }

    public void setMateCodeName(String mateCodeName) {
        this.mateCodeName = mateCodeName == null ? null : mateCodeName.trim();
    }

    public String getMateCodeShortname() {
        return mateCodeShortname;
    }

    public void setMateCodeShortname(String mateCodeShortname) {
        this.mateCodeShortname = mateCodeShortname == null ? null : mateCodeShortname.trim();
    }
}