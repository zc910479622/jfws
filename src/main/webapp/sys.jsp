<%--
  Created by IntelliJ IDEA.
  User： WORK
  Date： 2019/04/30
  Time： 14：29
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>铝锭仓库管理平台</title>
</head>
<link rel="stylesheet" href="assets/bootstrap/3.3.7/css/bootstrap.min.css"/>
<link rel="stylesheet" href="assets/bootstrap-table/bootstrap-table.min.css"/>
<link rel="stylesheet" href="assets/bootstrap-select/css/bootstrap-select.min.css">
<link rel="stylesheet" href="assets/minicolors/jquery.minicolors.css">
<link rel="stylesheet" href="css/base.css?201905151025">
<link rel="stylesheet" href="css/setting.css?201905151025">
<body>
<jsp:include page="navbar.jsp" flush="true">
    <jsp:param name="aItem" value="6"/>
</jsp:include>

<div class="container">
    <div class="panel panel-default">
        <div class="panel-heading">系统配置</div>
        <div class="panel-body" id="sys_box">
            <form role="form" id="sys_form">
                <h4><label for="name">数据库设置</label></h4>
                <hr>
                <div class="form-group form-inline">
                    <label for="mesServer">IP地址：</label>
                    <input id="mesServer" name="mesServer" type="password" class="form-control" readonly="readonly">
                    <span class="help-block"></span>
                </div>
                <div class="form-group form-inline">
                    <label for="mesPort">端口号：</label>
                    <input id="mesPort" name="mesPort" type="password" class="form-control port" readonly="readonly">
                    <span class="help-block"></span>
                </div>
                <div class="form-group form-inline">
                    <label for="mesUser">用户名：</label>
                    <input id="mesUser" name="mesUser" type="password" class="form-control" readonly="readonly">
                    <span class="help-block"></span>
                </div>
                <div class="form-group form-inline">
                    <label for="mesPassword">密码：</label>
                    <input id="mesPassword" name="mesPassword" type="password" class="form-control" readonly="readonly">
                    <span class="help-block"></span>
                </div>
                <div class="form-group form-inline">
                    <label for="mesDatabase">数据库名：</label>
                    <input id="mesDatabase" name="mesDatabase" type="password" class="form-control" readonly="readonly">
                    <span class="help-block"></span>
                </div>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <h4><label for="name">TCP设置</label></h4>
                <hr>
                <div class="form-group form-inline">
                    <label for="tcpPort">TCP端口：</label>
                    <input id="tcpPort" name="tcpPort" type="password" class="form-control port" readonly="readonly">
                    <span class="help-block"></span>
                </div>
                <br/>
                <br/>
                <br/>
                <br/>
                <h4><label for="name">串口设置</label></h4>
                <hr>
                <div class="form-group form-inline">
                    <label for="serialPortname">串口名：</label>
                    <select id="serialPortname" name="serialPortname" class="selectpicker">
                    </select>
                </div>
                <div class="form-group form-inline">
                    <label for="serialBaudrate">串口波特率：</label>
                    <select id="serialBaudrate" name="serialBaudrate" class="selectpicker">
                    </select>
                </div>
                <div class="form-group form-inline">
                    <label for="serialParity">串口校验位：</label>
                    <select id="serialParity" name="serialParity" class="selectpicker">
                    </select>
                </div>
                <div class="form-group form-inline">
                    <label for="serialDatabits">串口数据位：</label>
                    <select id="serialDatabits" name="serialDatabits" class="selectpicker">
                    </select>
                </div>
                <div class="form-group form-inline">
                    <label for="serialStopbits">串口停止位：</label>
                    <select id="serialStopbits" name="serialStopbits" class="selectpicker">
                    </select>
                </div>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <h4><label for="name">仓库设置</label></h4>
                <hr>
                <div class="form-group form-inline">
                    <label for="warehouseId">仓库ID：</label>
                    <input id="warehouseId" name="warehouseId" type="text" class="form-control mini_color">
                    <span class="help-block"></span>
                </div>
                <div class="form-group form-inline">
                    <label for="checkinTimeout">入库超时(秒)：</label>
                    <input id="checkinTimeout" name="checkinTimeout" type="text" class="form-control">
                    <span class="help-block"></span>
                </div>
                <br/>
                <br/>
                <br/>
                <br/>
                <button class="btn btn-success" id="unlock" type="button">解锁高级设置</button>
                <button class="btn btn-primary" disabled id="sys_form_btn" type="button">保存更改</button>
            </form>
        </div>
    </div>
</div>

<div id="modal_unlock" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="modal_unlock_title">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span>
                </button>
                <h4 id="modal_unlock_title" class="modal-title">解锁高级设置</h4>
            </div>
            <div class="modal-body" style="margin-left: 5%">
                <div class="form-group form-inline">
                    <label for="modal_unlock_form_password" class="ui-dlist-tit" style="width: 20%">密 码</label>
                    <input id="modal_unlock_form_password" name="password" type="text" class="form-control" style="width: 12em;">
                    <span class="help-block"></span>
                </div>
            </div>
            <div class="modal-footer">
                <span id="modal_unlock_message" class="glyphicon"></span>
                <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
                <button id="modal_unlock_form_submit" type="button" class="btn btn-primary">确认解锁</button>
            </div>
        </div>
    </div>
</div>
<div class="alert alert-success alert-dismissible hidden" id="successMessage">
    <button type="button" class="close" data-dismiss="alert">&times;</button>
    <strong>保存成功!</strong>
</div>

<div class="alert alert-success alert-dismissible hidden" id="errorMessage">
    <button type="button" class="close" data-dismiss="alert">&times;</button>
    <strong>密码错误!</strong>
</div>

</body>
<script type="text/javascript" src="assets/js/jquery-3.3.1.min.js"></script>
<script type="text/javascript" src="assets/bootstrap/3.3.7/js/bootstrap.min.js"></script>
<script type="text/javascript" src="assets/bootstrap-table/bootstrap-table.min.js"></script>
<script type="text/javascript" src="assets/bootstrap-table/locale/bootstrap-table-zh-CN.min.js"></script>
<script type="text/javascript" src="assets/bootstrap-select/js/bootstrap-select.min.js"></script>
<script type="text/javascript" src="assets/bootstrap-select/js/i18n/defaults-zh_CN.min.js"></script>
<script type="text/javascript" src="assets/minicolors/jquery.minicolors.js"></script>
<script type="text/javascript" src="js/sys.js?201905151025"></script>
</html>
