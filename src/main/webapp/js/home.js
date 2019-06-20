var dataAll;
var str = "";
var arr = [];

var timeOut = function () {
  selectDisplay()
    setTimeout(timeOut,5000)
};

timeOut();

function selectDisplay() {
    $.get("Display/selectDisplay.do", function (data) {
        $(data).each(function (i, v) {
            if (arr.indexOf(v.type) == "-1") {
                arr.push(v.type)
            }
            dataAll = data;
        });
        aaa()
    }, "json");
}

function aaa() {
    str = "";
    var sec = new Date().valueOf();
    var strstr = "";
    var index = 0;
    var type = ""
    $(dataAll).each(function (j, v) {
        var lasttimeColor = "";
        var inLampLasttimeColor = "";
        var outLampLasttimeColor = "";
        if (v.type == 0) {
            if ((sec - v.outLampLasttime) > 300000) {
                outLampLasttimeColor += "color:red"
            }
            if ((sec - v.inLampLasttime) > 300000) {
                inLampLasttimeColor += "color:red"
            }
            v.inLampLasttime=timestampTime(v.inLampLasttime);
            v.outLampLasttime=timestampTime(v.outLampLasttime)
        }else {
            v.inLampLasttime="无";
            v.outLampLasttime="无"
        }
        if ((sec - v.lasttime) > 300000) {
            lasttimeColor += "color:red"
        }
        strstr += "<tr><td align='center'>" + v.displayId + "</td><td align='center'>" + v.houseName + "</td><td align='center' style='" + inLampLasttimeColor + "'>" + v.inLampLasttime + "</td><td align='center' style='" + outLampLasttimeColor + "'>" + v.outLampLasttime + "</td><td align='center' style='" + lasttimeColor + "'>" + timestampTime(v.lasttime) + "</td></tr>";
        index++;
    });

    str += "<div class='panel panel-default'>";
    str += "<div class='panel-heading' style='text-align: center'>设备通信状态展示<span class='badge'>" + index + "</span></div>";
    str += "<table class='table table-striped table-bordered'>";
    str += "<thead><tr><th style='width:10%;text-align: center'>显示屏ID</th><th style='width: 10%;text-align: center'>库位号</th><th style='width:20%;text-align: center'>入库灯通信时间</th><th style='width:20%;text-align: center'>出库灯通信时间</th><th style='width:20%;text-align: center'>屏通信时间</th></tr></thead>";
    str += "<tbody>";
    str += strstr;
    str += "</tbody></table></div>";
    $(".container").html(str);
}



function timestampTime(str) {
    if (str != null) {
        var date = new Date(str);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
        var Y = date.getFullYear() + '-';
        var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
        var D = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate()) + " ";
        var h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
        var m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':';
        var s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
        return Y + M + D + h + m + s;
    } else {
        return null
    }
}