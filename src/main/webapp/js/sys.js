var serialPortname = ["COM1", "COM2", "COM3", "COM4", "COM5", "COM6", "COM7", "COM8", "COM9", "COM10", "COM11", "COM12", "COM13", "COM14", "COM15", "COM16"];
var serialBaudrate = ["110", "300", "600", "1200", "2400", "4800", "9600", "14400", "19200", "38400", "43000", "56000", "57600", "115200"];
var serialParity = ["None", "Odd", "Even", "Mark", "Space"];
var serialDatabits = ["5", "6", "7", "8"];
var serialStopbits = ["None", "One", "OnePointFive", "Two"];
var password = "";
setSelect($("#serialPortname"), serialPortname)
setSelect($("#serialBaudrate"), serialBaudrate)
setSelect($("#serialParity"), serialParity)
setSelect($("#serialDatabits"), serialDatabits)
setSelect($("#serialStopbits"), serialStopbits)

function setSelect(dom, arr) {
    var str = "";
    var val = "";
    $(arr).each(function (i, v) {
        str += "<option value='" + v + "'>" + v + "</option>";
        if (i === 0) {
            val = v;
        }
    });
    dom.empty();
    dom.html(str);
    dom.selectpicker("val", val).prop('disabled', true);
    dom.selectpicker("refresh");
}

/************************解锁按钮*************************/
$("#unlock").click(function () {
    $("#modal_unlock").on("show.bs.modal",function (event) {
        $("#modal_unlock_form_password").val("");
    }).modal("show");
});
/************************确认解锁按钮*************************/
$("#modal_unlock_form_submit").click(function () {
    var pass = $("#modal_unlock_form_password").val();
    if (pass===password){
        $("#modal_unlock").modal("hide");
        $(".selectpicker").prop('disabled', false).selectpicker("refresh");
        $("input[type='password']").attr("type","text").removeAttr("readonly");
        $("#unlock").addClass("hidden")
    } else {
        $("#errorMessage").removeClass("hidden");
        setTimeout(function () {
            $("#errorMessage").addClass("hidden");
            selectSys();
        }, "2000")
    }
});

/******************表单验证********************/
$("#mesServer").on("input propertychange change blur", function (event) {
    var regexp = /^((25[0-5]|2[0-4]\d|((1\d{2})|([1-9]?\d)))\.){3}(25[0-5]|2[0-4]\d|((1\d{2})|([1-9]?\d)))$/;
    var str = $(this).val();
    $(this).parent().removeClass("has-success");
    $(this).parent().find(".help-block").css("padding-left", "5em");
    if (str == "" || str == null) {
        $(this).parent().addClass("has-error");
        $(this).next().html("请输入IP地址");
    } else if (!regexp.test(str)) {
        $(this).parent().addClass("has-error");
        $(this).next().html("IP格式:XXX.XXX.XXX.XXX,0-255");
    } else {
        $(this).parent().removeClass("has-error");
        $(this).parent().addClass("has-success");
        $(this).next().html("");
    }
    changesubmit()
});

$(".port").on("input propertychange change blur", function (event) {
    var regexp = /^([0-9]|[1-9]\d{1,3}|[1-5]\d{4}|6[0-4]\d{4}|65[0-4]\d{2}|655[0-2]\d|6553[0-5])$/;
    var str = $(this).val();
    $(this).parent().removeClass("has-success");
    $(this).parent().find(".help-block").css("padding-left", "5em");
    if (str == "" || str == null) {
        $(this).parent().addClass("has-error");
        $(this).next().html("请输入端口号");
    } else if (!regexp.test(str)) {
        $(this).parent().addClass("has-error");
        $(this).next().html("端口范围为0-65535");
    } else {
        $(this).parent().removeClass("has-error");
        $(this).parent().addClass("has-success");
        $(this).next().html("");
    }
    changesubmit()
});


$("#mesUser").on("input propertychange change blur", function (event) {
    var regexp = /^[a-zA-Z0-9]{4,16}$/;
    var str = $(this).val();
    $(this).parent().removeClass("has-success");
    $(this).parent().find(".help-block").css("padding-left", "5em");
    if (str == "" || str == null) {
        $(this).parent().addClass("has-error");
        $(this).next().html("请输入用户名");
    } else if (!regexp.test(str)) {
        $(this).parent().addClass("has-error");
        $(this).next().html("用户名为4到16位（字母，数字）");
    } else {
        $(this).parent().removeClass("has-error");
        $(this).parent().addClass("has-success");
        $(this).next().html("");
    }
    changesubmit()
});

$("#mesPassword").on("input propertychange change blur", function (event) {
    var regexp = /^[\w]{6,16}$/;
    var str = $(this).val();
    $(this).parent().removeClass("has-success");
    $(this).parent().find(".help-block").css("padding-left", "4em");
    if (str == "" || str == null) {
        $(this).parent().addClass("has-error");
        $(this).next().html("请输入密码");
    } else if (!regexp.test(str)) {
        $(this).parent().addClass("has-error");
        $(this).next().html("密码为6到16位（字母，数字）");
    } else {
        $(this).parent().removeClass("has-error");
        $(this).parent().addClass("has-success");
        $(this).next().html("");
    }
    changesubmit()
});

$("#mesDatabase").on("input propertychange change blur", function (event) {
    var regexp = /^[-_a-zA-Z0-9]{1,15}$/;
    var str = $(this).val();
    $(this).parent().removeClass("has-success");
    $(this).parent().find(".help-block").css("padding-left", "6em");
    if (str == "" || str == null) {
        $(this).parent().addClass("has-error");
        $(this).next().html("请输入数据库名称");
    } else if (!regexp.test(str)) {
        $(this).parent().addClass("has-error");
        $(this).next().html("名称为1到15位（字母，数字）");
    } else {
        $(this).parent().removeClass("has-error");
        $(this).parent().addClass("has-success");
        $(this).next().html("");
    }
    changesubmit()
});

$("#warehouseId").on("input propertychange change blur", function (event) {
    var regexp = /^\d+$/;
    var str = $(this).val();
    $(this).parent().removeClass("has-success");
    $(this).parent().find(".help-block").css("padding-left", "5em");
    if (str == "" || str == null) {
        $(this).parent().addClass("has-error");
        $(this).next().html("请输入仓库ID");
    } else if (!regexp.test(str)) {
        $(this).parent().addClass("has-error");
        $(this).next().html("ID为正整数");
    } else {
        $(this).parent().removeClass("has-error");
        $(this).parent().addClass("has-success");
        $(this).next().html("");
    }
    changesubmit()
});

$("#checkinTimeout").on("input propertychange change blur", function (event) {
    var regexp = /^\d+$/;
    var str = $(this).val();
    $(this).parent().removeClass("has-success");
    $(this).parent().find(".help-block").css("padding-left", "10em");
    if (str == "" || str == null) {
        $(this).parent().addClass("has-error");
        $(this).next().html("请输入超时时间");
    } else if (!regexp.test(str)) {
        $(this).parent().addClass("has-error");
        $(this).next().html("时间为正整数");
    } else {
        $(this).parent().removeClass("has-error");
        $(this).parent().addClass("has-success");
        $(this).next().html("");
    }
    changesubmit()
});

function changesubmit() {
    var sound = $("#sys_form").find(".has-success").length;
    if (sound == 8) {
        $("#sys_form_btn").removeAttr("disabled");
        return true;
    } else {
        $("#sys_form_btn").attr("disabled", true);
        return false;
    }
}

selectSys();

function selectSys() {
    $.post("Sys/selectSys.do", function (data) {
        $(data).each(function (i, obj) {
            for (var key in obj) {
                if (key == "password"){
                    password = obj[key]
                } else if ($("#" + key).hasClass("selectpicker")) {
                    $("#" + key).selectpicker("val", obj[key])
                } else {
                    $("#" + key).val(obj[key]);
                    $("#" + key).blur()
                }
            }
        })
    }, "json")
}

$("#sys_form_btn").click(function () {
    var data = $("#sys_form").serializeArray();
    $("input").blur();
    if (changesubmit()) {
        $.post("Sys/updateSys.do", data, function (result) {
            if (result == 1) {
                $("#successMessage").removeClass("hidden");
                setTimeout(function () {
                    $("#successMessage").addClass("hidden");
                    selectSys();
                }, "3000")
            }
        })
    }
});