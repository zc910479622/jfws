package com.jinfei.jfws.model;

public class tSys {
    private String mesServer;

    private Integer mesPort;

    private String mesUser;

    private String mesPassword;

    private String mesDatabase;

    private Integer tcpPort;

    private String serialPortname;

    private Integer serialBaudrate;

    private String serialParity;

    private Integer serialDatabits;

    private String serialStopbits;

    private Integer warehouseId;

    private Integer checkinTimeout;

    private String password;

    public String getMesServer() {
        return mesServer;
    }

    public void setMesServer(String mesServer) {
        this.mesServer = mesServer == null ? null : mesServer.trim();
    }

    public Integer getMesPort() {
        return mesPort;
    }

    public void setMesPort(Integer mesPort) {
        this.mesPort = mesPort;
    }

    public String getMesUser() {
        return mesUser;
    }

    public void setMesUser(String mesUser) {
        this.mesUser = mesUser == null ? null : mesUser.trim();
    }

    public String getMesPassword() {
        return mesPassword;
    }

    public void setMesPassword(String mesPassword) {
        this.mesPassword = mesPassword == null ? null : mesPassword.trim();
    }

    public String getMesDatabase() {
        return mesDatabase;
    }

    public void setMesDatabase(String mesDatabase) {
        this.mesDatabase = mesDatabase == null ? null : mesDatabase.trim();
    }

    public Integer getTcpPort() {
        return tcpPort;
    }

    public void setTcpPort(Integer tcpPort) {
        this.tcpPort = tcpPort;
    }

    public String getSerialPortname() {
        return serialPortname;
    }

    public void setSerialPortname(String serialPortname) {
        this.serialPortname = serialPortname == null ? null : serialPortname.trim();
    }

    public Integer getSerialBaudrate() {
        return serialBaudrate;
    }

    public void setSerialBaudrate(Integer serialBaudrate) {
        this.serialBaudrate = serialBaudrate;
    }

    public String getSerialParity() {
        return serialParity;
    }

    public void setSerialParity(String serialParity) {
        this.serialParity = serialParity == null ? null : serialParity.trim();
    }

    public Integer getSerialDatabits() {
        return serialDatabits;
    }

    public void setSerialDatabits(Integer serialDatabits) {
        this.serialDatabits = serialDatabits;
    }

    public String getSerialStopbits() {
        return serialStopbits;
    }

    public void setSerialStopbits(String serialStopbits) {
        this.serialStopbits = serialStopbits == null ? null : serialStopbits.trim();
    }

    public Integer getWarehouseId() {
        return warehouseId;
    }

    public void setWarehouseId(Integer warehouseId) {
        this.warehouseId = warehouseId;
    }

    public Integer getCheckinTimeout() {
        return checkinTimeout;
    }

    public void setCheckinTimeout(Integer checkinTimeout) {
        this.checkinTimeout = checkinTimeout;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}