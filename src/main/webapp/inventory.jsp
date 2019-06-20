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
    <jsp:param name="aItem" value="4"/>
</jsp:include>

<div class="container">
    <div class="panel panel-default">
        <div class="panel-heading">库存量</div>
        <div class="panel-body">
            <div id="tabInventory_toolbar" class="btn-group">
                <button id="tabInventory_add" type="button" class="btn btn-success">
                    <span class="glyphicon glyphicon-plus" aria-hidden="true"></span>&nbsp;新增
                </button>
                <%--<button id="tabInventory_edit" type="button" class="btn btn-primary">
                    <span class="glyphicon glyphicon-pencil" aria-hidden="true"></span>&nbsp;修改
                </button>
                <button id="tabInventory_del" type="button" class="btn btn-danger">
                    <span class="glyphicon glyphicon-remove" aria-hidden="true"></span>&nbsp;删除
                </button>--%>
            </div>
            <table id="tabInventory" class="table table-striped"
                   style="word-break:break-all;word-wrap:break-word;"></table>
        </div>
    </div>
</div>

<div id="modal_addInventory" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="modal_addInventory_title">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span>
                </button>
                <h4 id="modal_addInventory_title" class="modal-title"></h4>
            </div>
            <div class="modal-body">
                <form role="form" id="modal_addInventory_form">
                    <div class="form-group form-inline">
                        <label for="modal_addInventory_form_name">品&emsp;&emsp;&emsp;名：</label>
                        <input id="modal_addInventory_form_name" name="name" type="text" class="form-control">
                        <span class="help-block"></span>
                    </div>
                    <div class="form-group form-inline">
                        <label for="modal_addInventory_form_low">最小库存数：</label>
                        <input id="modal_addInventory_form_low" name="low"
                               class="form-control">
                        <span class="help-block"></span>
                    </div>
                    <div class="form-group form-inline">
                        <label for="modal_addInventory_form_high">最大库存数：</label>
                        <input id="modal_addInventory_form_high" name="high" type="text" class="form-control">
                        <span class="help-block"></span>
                    </div>
                    <input id="modal_addInventory_form_id" name="id" type="hidden"/>
                </form>
            </div>
            <div class="modal-footer">
                <span id="modal_addInventory_message" class="glyphicon"></span>
                <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
                <button id="modal_addInventory_form_submit" type="button" class="btn btn-primary hidden">确认添加</button>
                <button id="modal_editInventory_form_submit" type="button" class="btn btn-primary hidden">确认修改</button>
            </div>
        </div>
    </div>
</div>

<div id="modal_del" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="modal_del_title">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span>
                </button>
                <h4 class="modal-title">提示信息</h4>
            </div>
            <div class="modal-body">
                <p id="modal_del_info"></p>
                <form id="modal_del_form">
                    <input id="modal_del_form_id" name="id" type="hidden"/>
                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
                <button id="modal_del_form_submit" type="button" class="btn btn-success" data-dismiss="modal">确定
                </button>
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
<script type="text/javascript" src="js/inventory.js?201905151025"></script>
</html>

