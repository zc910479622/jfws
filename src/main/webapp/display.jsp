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
<link rel="stylesheet" href="css/base.css?201905161313">
<link rel="stylesheet" href="css/display.css?201905161313">
<style type="text/css">
</style>
<body>
<jsp:include page="navbar.jsp" flush="true">
    <jsp:param name="aItem" value="7"/>
</jsp:include>

<div class="container">
    <div class="panel panel-default">
        <div class="panel-heading">显示屏</div>
        <div class="panel-body">
            <table id="tabDisplay" class="table table-striped"
                   style="word-break:break-all;word-wrap:break-word;"></table>
        </div>
    </div>
</div>

<div id="modal_editDisplay" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="modal_editDisplay_title">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span>
                </button>
                <h4 id="modal_editDisplay_title" class="modal-title"></h4>
            </div>
            <div class="modal-body">
                <form role="form" id="modal_editDisplay_form">
                    <div class="form-group form-inline ">
                        <label for="displayId"  style="margin-left:20% ">显示屏ID:</label>
                        <input id="displayId" name="displayId" type="text" class="form-control" readonly="readonly">
                        <label for="type"  style="margin-left:10% ">类&emsp;&emsp;&emsp;型:</label>
                        <select id="type" name="type" class="selectpicker">
                            <option value="0">铝锭库</option>
                            <option value="1">临时库</option>
                            <option value="2">待检区</option>
                            <option value="3">多库位</option>
                        </select>
                    </div>
                    <div class="form-group form-inline">
                        <label for="inLampLasttime"  style="margin-left:20% ">入库时间:</label>
                        <input id="inLampLasttime" name="inLampLasttime" type="text" class="form-control"
                               readonly="readonly">
                        <label for="houseName"  style="margin-left:10% ">库&emsp;位&emsp;号:</label>
                        <input id="houseName" name="houseName" type="text" class="form-control">
                        <span class="help-block"></span>
                    </div>
                    <div class="form-group form-inline">
                    </div>
                    <div class="form-group form-inline">
                        <label for="outLampLasttime"  style="margin-left:20% ">出库时间:</label>
                        <input id="outLampLasttime" name="outLampLasttime" type="text" class="form-control"
                               readonly="readonly">

                        <label for="lasttime"  style="margin-left:10% ">屏通信时间:</label>
                        <input id="lasttime" name="lasttime" type="text" class="form-control" readonly="readonly">
                        <span class="help-block"></span>
                    </div>
                    <div class="form-group form-inline">
                        <label for="color"  style="margin-left:20% ">信息颜色:</label>
                        <input id="color" name="color" type="text" class="form-control" readonly="readonly">
                        <span class="help-block"></span>
                    </div>
                    <input id="subitems" name="subitems" hidden type="text">
                </form>
                <div class="panel panel-default" id="displaySubDiv">
                    <div class="panel-heading">子项</div>
                    <div class="panel-body">
                        <form class="form-group form-inline" style="border-bottom: 1px solid #dddddd">
                            <label class="ui-dlist-tit" >库位</label>
                            <input name="NO" type="text" class="form-control">
                            <label class="ui-dlist-tit">品名</label>
                            <input name="Name" type="text" class="form-control">
                            <label  class="ui-dlist-tit model">规格</label>
                            <input name="Model" type="text" class="form-control">
                            <label class="ui-dlist-tit num">重量</label>
                            <input  name="Num" type="text" class="form-control">
                            <span class="help-block"></span>
                        </form>
                    </div>
                    <div class="panel-footer">
                        <span class="has-error" id="subError" style="color: red"></span>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <span id="modal_editDisplay_message" class="glyphicon"></span>
                <button id="modal_editDisplay_form_addDisplaySub" type="button" class="btn btn-success">添加子项</button>
                <button id="modal_editDisplay_form_deleteDisplaySub" type="button" class="btn btn-danger">删除子项</button>
                <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
                <button id="modal_editDisplay_form_submit" type="button" class="btn btn-primary">确认修改</button>
            </div>
        </div>
    </div>
</div>
</body>
<script type="text/javascript" src="assets/js/jquery-3.3.1.min.js"></script>
<script type="text/javascript" src="assets/bootstrap/3.3.7/js/bootstrap.min.js"></script>
<script type="text/javascript" src="assets/bootstrap-table/bootstrap-table.min.js"></script>
<script type="text/javascript" src="assets/bootstrap-table/locale/bootstrap-table-zh-CN.min.js"></script>
<script type="text/javascript" src="assets/bootstrap-select/js/bootstrap-select.min.js"></script>
<script type="text/javascript" src="assets/bootstrap-select/js/i18n/defaults-zh_CN.min.js"></script>
<script type="text/javascript" src="assets/minicolors/jquery.minicolors.js"></script>
<script type="text/javascript" src="js/display.js?201905161313"></script>
</html>

