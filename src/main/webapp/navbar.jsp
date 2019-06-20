<%@ page contentType="text/html;charset=UTF-8" language="java" pageEncoding="utf-8" %>
<div id="navbar" class="navbar navbar-default navbar-collapse collapse">
    <div class="container-fluid">
        <div class="navbar-header">
            <img src="img/jinfei_32X32.ico" style="float: left;padding-top: 0.6em;padding-right: 1em;"/>
            <span class="navbar-brand" style="font-size: 1.8em;font-family: '楷体';">铝锭仓库管理平台</span>
        </div>
        <ul class="nav navbar-nav">
            <li <% if (request.getParameter("aItem").equals("1")) {%> class="active" <%} %>><a href="home.jsp"><span
                    class="glyphicon glyphicon-th-large"></span> 首页</a></li>
            <li <% if (request.getParameter("aItem").equals("7")) {%> class="active" <%} %>><a
                    href="display.jsp"><span class="glyphicon glyphicon-th-large"></span> 显示屏</a></li>
            <li <% if (request.getParameter("aItem").equals("2")) {%> class="active" <%} %>><a
                    href="material.jsp"><span class="glyphicon glyphicon-th-large"></span> 原料代码</a></li>
            <li <% if (request.getParameter("aItem").equals("3")) {%> class="active" <%} %>><a
                    href="supply.jsp"><span class="glyphicon glyphicon-th-large"></span> 供应商</a></li>
            <li <% if (request.getParameter("aItem").equals("4")) {%> class="active" <%} %>><a
                    href="inventory.jsp"><span class="glyphicon glyphicon-th-large"></span> 库存量</a></li>
            <li <% if (request.getParameter("aItem").equals("5")) {%> class="active" <%} %>><a
                    href="config.jsp"><span class="glyphicon glyphicon-th-large"></span> LCD参数</a></li>
            <li <% if (request.getParameter("aItem").equals("6")) {%> class="active" <%} %>><a
                    href="sys.jsp"><span class="glyphicon glyphicon-th-large"></span> 系统配置</a></li>
        </ul>
    </div>
</div>
