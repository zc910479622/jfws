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
<link rel="stylesheet" href="assets/bootstrap-switch-master/css/bootstrap3/bootstrap-switch.css">
<link rel="stylesheet" href="assets/bootstrap-datetimepicker/css/bootstrap-datetimepicker.min.css">
<link rel="stylesheet" href="assets/minicolors/jquery.minicolors.css">
<link rel="stylesheet" href="css/base.css?201905161313">
<link rel="stylesheet" href="css/setting.css?201905161313">
<body>
<jsp:include page="navbar.jsp" flush="true">
    <jsp:param name="aItem" value="5"/>
</jsp:include>

<div class="container">
    <div class="panel panel-default">
        <div class="panel-heading">LCD参数配置</div>
        <div class="panel-body" id="config_box">
            <form role="form" id="config_form"><h4><%--@declare id="name"--%><label for="name">显示屏比例</label></h4>
                <hr>
                <div class="form-group form-inline">
                    <label for="topPercent">顶部占比(%)：</label>
                    <input id="topPercent" name="topPercent"  type="text" class="form-control percent topPercent">
                    <span class="help-block"></span>
                </div>
                <div class="form-group form-inline">
                    <label for="bodyPercent">中间占比(%)：</label>
                    <input id="bodyPercent" type="text" class="form-control percent blank bodyPercent">
                    <span class="help-block"></span>
                </div>
                <div class="form-group form-inline">
                    <label for="bottomPercent">底部占比(%)：</label>
                    <input id="bottomPercent" name="bottomPercent" type="text" class="form-control percent bottomPercent">
                    <span class="help-block"></span>
                </div>
                <br/>
                <br/>
                <br/>
                <br/>
                <h4><label for="name">LOGO设置</label></h4>
                <hr>
                <div class="form-group form-inline" style="width: 90%">
                    <label for="logoText">LOGO文字：</label>
                    <input id="logoText" name="logoText" type="text" style="width: 50%"  class="form-control">
                    <span class="help-block"></span>
                </div>
                <div class="form-group form-inline">
                    <label for="logoFontSize">字体尺寸：</label>
                    <input id="logoFontSize" name="logoFontSize" type="text" class="form-control">
                    <span class="help-block"></span>
                </div>
                <div class="form-group form-inline">
                    <label for="logoColor">字体颜色：</label>
                    <input id="logoColor" name="logoColor" type="text" class="form-control mini_color" readonly>
                    <span class="help-block"></span>
                </div>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <h4><label for="name">标题设置</label></h4>
                <hr>
                <div class="form-group form-inline" style="width: 90%">
                    <label for="titleText">标题文字：</label>
                    <input id="titleText" name="titleText" type="text" style="width: 50%" class="form-control">
                    <span class="help-block"></span>
                </div>
                <div class="form-group form-inline">
                    <label for="titleFontSize">字体尺寸：</label>
                    <input id="titleFontSize" name="titleFontSize" type="text" class="form-control">
                    <span class="help-block"></span>
                </div>
                <div class="form-group form-inline">
                    <label for="titleColor">字体颜色：</label>
                    <input id="titleColor" name="titleColor" type="text" class="form-control mini_color" readonly>
                    <span class="help-block"></span>
                </div>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <h4><label for="name">系统名称</label></h4>
                <hr>
                <div class="form-group form-inline" style="width: 90%">
                    <label for="systemNameText">名称文字：</label>
                    <input  id="systemNameText" name="systemNameText" type="text" style="width: 50%" class="form-control">
                    <span class="help-block"></span>
                </div>
                <div class="form-group form-inline">
                    <label for="systemNameFontSize">字体尺寸：</label>
                    <input id="systemNameFontSize" name="systemNameFontSize" type="text" class="form-control">
                    <span class="help-block"></span>
                </div>
                <div class="form-group form-inline">
                    <label for="systemNameColor">字体颜色：</label>
                    <input id="systemNameColor" name="systemNameColor" type="text" class="form-control mini_color" readonly>
                    <span class="help-block"></span>
                </div>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <h4><label for="name">版权信息设置</label></h4>
                <hr>
                <div class="form-group form-inline" style="width: 90%">
                    <label for="copyrightText">信息文字：</label>
                    <input id="copyrightText" name="copyrightText" type="text" style="width: 50%" class="form-control">
                    <span class="help-block"></span>
                </div>
                <div class="form-group form-inline">
                    <label for="copyrightFontSize">字体尺寸：</label>
                    <input id="copyrightFontSize" name="copyrightFontSize" type="text" class="form-control">
                    <span class="help-block"></span>
                </div>
                <div class="form-group form-inline">
                    <label for="copyrightColor">字体颜色：</label>
                    <input id="copyrightColor" name="copyrightColor" type="text" class="form-control mini_color" readonly>
                    <span class="help-block"></span>
                </div>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <h4><label for="name">字段设置</label></h4>
                <hr>
                <div class="form-group form-inline">
                    <label for="fieldFontSize">字体尺寸：</label>
                    <input id="fieldFontSize" name="fieldFontSize" type="text" class="form-control">
                    <span class="help-block"></span>
                </div>
                <div class="form-group form-inline">
                    <label for="fieldColor">字体颜色：</label>
                    <input id="fieldColor" name="fieldColor" type="text" class="form-control mini_color" readonly>
                    <span class="help-block"></span>
                </div>
                <br/>
                <br/>
                <br/>
                <br/>
                <h4><label for="name">正文设置</label></h4>
                <hr>
                <div class="form-group form-inline">
                    <label for="textFontSize">字体尺寸：</label>
                    <input id="textFontSize" name="textFontSize" type="text" class="form-control">
                    <span class="help-block"></span>
                </div>
                <div class="form-group form-inline">
                    <label for="textColor">字体颜色：</label>
                    <input id="textColor" name="textColor" type="text" class="form-control mini_color" readonly>
                    <span class="help-block"></span>
                </div>
                <br/>
                <br/>
                <br/>
                <br/><h4><label for="name">客户端设置</label></h4>
                <hr>
                <div class="form-group form-inline">
                    <label for="clientnumFontSize">字体尺寸：</label>
                    <input id="clientnumFontSize" name="clientnumFontSize" type="text" class="form-control">
                    <span class="help-block"></span>
                </div>
                <div class="form-group form-inline">
                    <label for="clientnumColor">字体颜色：</label>
                    <input id="clientnumColor" name="clientnumColor" type="text" class="form-control mini_color"
                           readonly>
                    <span class="help-block"></span>
                </div>
                <br/>
                <br/>
                <br/>
                <br/>
                <h4><label for="name">隔行背景设置</label></h4>
                <hr>
                <div class="form-group form-inline">
                    <label for="rowBackcolor">背景色：</label>
                    <input id="rowBackcolor" name="rowBackcolor" type="text" class="form-control mini_color" readonly>
                    <span class="help-block"></span>
                </div>
                <br/>
                <br/>
                <br/>
                <br/>
                <h4><label for="name">线条颜色设置</label></h4>
                <hr>
                <div class="form-group form-inline">
                    <label for="lineColor1">线条颜色1：</label>
                    <input id="lineColor1" name="lineColor1" type="text" class="form-control mini_color" readonly>
                    <span class="help-block"></span>
                </div>
                <div class="form-group form-inline">
                    <label for="lineColor2">线条颜色2：</label>
                    <input id="lineColor2" name="lineColor2" type="text" class="form-control mini_color" readonly>
                    <span class="help-block"></span>
                </div>
                <div class="form-group form-inline">
                    <label for="lineColor3">线条颜色3：</label>
                    <input id="lineColor3" name="lineColor3" type="text" class="form-control mini_color" readonly>
                    <span class="help-block"></span>
                </div>
                <br/>
                <br/>
                <br/>
                <br/>
                <h4><%--@declare id="name"--%><label for="name">表格设置</label></h4>
                <hr>
                <div class="form-group form-inline">
                    <label for="table2Rownum">行数：</label>
                    <input id="table2Rownum" name="table2Rownum" type="text" class="form-control">
                    <span class="help-block"></span>
                </div>
                <div class="form-group form-inline">
                    <label for="table1RowUnitnum">每行单元数：</label>
                    <select id="table1RowUnitnum" name="table1RowUnitnum" type="text" class="selectpicker">
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>
                    <span class="help-block"></span>
                </div>
                <div class="form-group form-inline">
                    <label for="table2Interval">翻页间隔(秒)：</label>
                    <input id="table2Interval" name="table2Interval" type="text" class="form-control">
                    <span class="help-block"></span>
                </div>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <h4><%--@declare id="name"--%><label for="name">系统休眠</label></h4>
                <hr>

                <div class="form-group form-inline" style="margin-bottom: 0">
                    <label>是否启用：</label>
                    <input type="checkbox" class="checkbox"
                           data-switch-value="Large" data-on-text="是" data-off-text="否" data-off-color="danger"
                           data-on-color="success"/>
                </div>
                <div class="form-group form-inline">
                    <label for="closeStart">开始时间：</label>
                    <input id="closeStart" name="closeStart" type="text" class="form-control closeStart" readonly="readonly">
                    <span class="help-block"></span>
                </div>
                <div class="form-group form-inline">
                    <label for="closeEnd">结束时间：</label>
                    <input id="closeEnd" name="closeEnd" type="text" class="form-control closeEnd" readonly="readonly">
                    <span class="help-block"></span>
                </div>
                <div style="margin-left:5%">
                    <p style="color: #888888">开始时间与结束时间不能相同；开始时间小于结束时间时，为同一天的时间；开始时间大于结束时间时，结束时间为第二天的时间。</p>
                </div>
                <br/>
                <br/>
                <br/>
                <button class="btn btn-primary" id="config_form_btn" type="button">保存更改</button>
            </form>
        </div>
    </div>
</div>

<div class="alert alert-success alert-dismissible hidden" id="successMessage">
    <button type="button" class="close" data-dismiss="alert">&times;</button>
    <strong>保存成功!</strong>
</div>
</body>
<script type="text/javascript" src="assets/js/jquery-3.3.1.min.js"></script>
<script type="text/javascript" src="assets/bootstrap/3.3.7/js/bootstrap.min.js"></script>
<script type="text/javascript" src="assets/bootstrap-table/bootstrap-table.min.js"></script>
<script type="text/javascript" src="assets/bootstrap-table/locale/bootstrap-table-zh-CN.min.js"></script>
<script type="text/javascript" src="assets/bootstrap-select/js/bootstrap-select.min.js"></script>
<script type="text/javascript" src="assets/bootstrap-switch-master/js/bootstrap-switch.js"></script>
<script type="text/javascript" src="assets/bootstrap-select/js/i18n/defaults-zh_CN.min.js"></script>
<script type="text/javascript" src="assets/bootstrap-datetimepicker/js/bootstrap-datetimepicker.min.js"></script>
<script type="text/javascript" src="assets/bootstrap-datetimepicker/js/locales/bootstrap-datetimepicker.zh-CN.js"></script>
<script type="text/javascript" src="assets/minicolors/jquery.minicolors.js"></script>
<script type="text/javascript" src="js/config.js?201905161313"></script>
</html>
