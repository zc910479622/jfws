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
<link rel="stylesheet" href="css/base.css?201905151025">
<body>
<jsp:include page="navbar.jsp" flush="true">
    <jsp:param name="aItem" value="3"/>
</jsp:include>

<div class="container">
    <div class="panel panel-default">
        <div class="panel-heading">供应商</div>
        <div class="panel-body">
            <table id="tabSupply" class="table table-striped" style="word-break:break-all;word-wrap:break-word;"></table>
        </div>
    </div>
</div>

<div id="modal_editSupply" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="modal_editSupply_title">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span>
                </button>
                <h4 id="modal_editSupply_title" class="modal-title"></h4>
            </div>
            <div class="modal-body">
                <form role="form" id="modal_editSupply_form">
                    <div class="form-group form-inline">
                        <label for="modal_editSupply_form_supplyNbr">供&ensp;应&ensp;商&ensp;编&ensp;号&ensp;：</label>
                        <input id="modal_editSupply_form_supplyNbr" name="supplyNbr" type="text" class="form-control" readonly="readonly">
                        <span class="help-block"></span>
                    </div>
                    <div class="form-group form-inline">
                        <label for="modal_editSupply_form_supplyCode">生&nbsp;成&nbsp;条&nbsp;码&nbsp;编&nbsp;号：</label>
                        <input id="modal_editSupply_form_supplyCode" name="supplyCode"
                               class="form-control" readonly="readonly">
                        <span class="help-block"></span>
                    </div>
                    <div class="form-group form-inline">
                        <label for="modal_editSupply_form_supplyName">供&ensp;应&ensp;商&ensp;名&ensp;称&ensp;：</label>
                        <input id="modal_editSupply_form_supplyName" name="supplyName" type="text" class="form-control" readonly="readonly">
                        <span class="help-block"></span>
                    </div>
                    <div class="form-group form-inline">
                        <label for="modal_editSupply_form_supplyAddress">供&ensp;应&ensp;商&ensp;地&ensp;址&ensp;：</label>
                        <input id="modal_editSupply_form_supplyAddress" name="supplyAddress" type="text" class="form-control" readonly="readonly">
                        <span class="help-block"></span>
                    </div>
                    <div class="form-group form-inline">
                        <label for="modal_editSupply_form_supplyShortname">供&ensp;应&ensp;商&ensp;简&ensp;称&ensp;：</label>
                        <input id="modal_editSupply_form_supplyShortname" name="supplyShortname" type="text" class="form-control">
                        <span class="help-block"></span>
                    </div>
                    <input id="modal_editSupply_form_supplyId" name="supplyId" hidden>
                </form>
            </div>
            <div class="modal-footer">
                <span id="modal_editSupply_message" class="glyphicon"></span>
                <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
                <button id="modal_editSupply_form_submit" type="button" class="btn btn-primary">确认修改</button>
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
<script type="text/javascript" src="js/supply.js?201905151025"></script>
</html>

