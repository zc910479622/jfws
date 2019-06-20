

$(".checkbox[type='checkbox']").bootstrapSwitch({
    onSwitchChange: function (event, state) {
        if (state == true) {
            $("input[id^='close']").blur()
        } else {
            $(this).parent().removeClass("has-success").addClass("has-error");
            $("input[id^='close']").blur()
        }
    }
});
$("#closeStart,#closeEnd").val("");
$("#closeStart,#closeEnd").datetimepicker({
    format: "hh:ii",
    language: "zh-CN",
    startView: 1,
    autoclose: true,
    minView: 0,
    maxView: 1,
    pickerPosition: "top-right"
}).off("hide").on("hide", function (ev) {
    $(this).val($(this).val() + ":00");
    if ($("#closeStart").val() == $("#closeEnd").val()&&$(".checkbox[type='checkbox']").bootstrapSwitch('state')) {
        $(this).parent().addClass("has-error");
        $(this).next().html("开启时间不能与结束时间相同");
    }
});
selectConfig();

function selectConfig() {
    $.get("Config/selectConfig.do", function (data) {
        var bodyPercent = 1;
        $(data).each(function (i, obj) {
            for (var key in obj) {
                if ($("#" + key).hasClass("mini_color")) {
                    $("#" + key).minicolors({
                        animationEasing: 'swing',
                        control: 'hue',
                        inline: false,
                        letterCase: 'uppercase',
                        opacity: false,
                        position: 'bottom left',
                        showSpeed: 100,
                        theme: 'bootstrap',
                        defaultValue: obj[key]
                    })
                } else if ($("#" + key).hasClass("selectpicker")) {
                    $("#" + key).selectpicker("val", obj[key])
                } else if ((/Percent$/).test(key)) {
                    $("#" + key).val((obj[key] * 100).toFixed(2));
                    bodyPercent -= obj[key]
                    $("#" + key).blur()
                } else {
                    $("#" + key).val(obj[key]);
                    $("#" + key).blur()
                }
            }
        });
        $("#bodyPercent").val((bodyPercent * 100).toFixed(2));
        $("#bodyPercent").blur();
        if ($("#closeStart").val() != $("#closeEnd").val()) {
            var start = $("#closeStart").val();
            var end = $("#closeEnd").val();
            $(".checkbox[type='checkbox']").bootstrapSwitch("toggleState");
            $("#closeStart").val(start);
            $("#closeEnd").val(end);
            $("input[id^='close']").blur()
        }
    }, "json")
}

$("input[name$='FontSize']").on("input propertychange change blur", function (event) {
    var regexp = /^([8-9]?|[1-7][0-9]|80)$/;
    var str = $(this).val();
    $(this).parent().removeClass("has-success");
    if (str == "" || str == null) {
        $(this).parent().addClass("has-error");
        $(this).next().html("请输入字体尺寸大小");
    } else if (!regexp.test(str)) {
        $(this).parent().addClass("has-error");
        $(this).next().html("字体尺寸大小8-80");
    } else {
        $(this).parent().removeClass("has-error");
        $(this).parent().addClass("has-success");
        $(this).next().html("");
    }
    changesubmit()
});

$("#table2Rownum").on("input propertychange change blur", function (event) {
    var regexp = /^(1[0-9]|20)$/;
    var str = $(this).val();
    $(this).parent().removeClass("has-success");
    $(this).parent().find(".help-block").css("padding-left", "7em");
    if (str == "" || str == null) {
        $(this).parent().addClass("has-error");
        $(this).next().html("请输入库存表行数");
    } else if (!regexp.test(str)) {
        $(this).parent().addClass("has-error");
        $(this).next().html("库存表行数大小10-20");
    } else {
        $(this).parent().removeClass("has-error");
        $(this).parent().addClass("has-success");
        $(this).next().html("");
    }
    changesubmit()
});

$("#table2Interval").on("input propertychange change blur", function (event) {
    var regexp = /^([5-9]|[1-2][0-9]|30)$/;
    var str = $(this).val();
    $(this).parent().removeClass("has-success");
    $(this).parent().find(".help-block").css("padding-left", "12em");
    if (str == "" || str == null) {
        $(this).parent().addClass("has-error");
        $(this).next().html("请输入库存表行数");
    } else if (!regexp.test(str)) {
        $(this).parent().addClass("has-error");
        $(this).next().html("库存表行数大小10-20");
    } else {
        $(this).parent().removeClass("has-error");
        $(this).parent().addClass("has-success");
        $(this).next().html("");
    }
    changesubmit()
});

$("input[id$='Percent']").on("input propertychange change blur focus", function (event) {
    var regexp = /^\d(\.\d)\d?$|^[1-9]\d(\.\d)\d?$|^(?:0|[1-9][0-9]?|100)$/;
    var str = $(this).val();
    $(this).parent().removeClass("has-success");
    $(this).parent().find(".help-block").css("padding-left", "6em");
    if (str == "" || str == null) {
        $(this).parent().addClass("has-error");
        if ($(this).hasClass("topPercent")) {
            $(this).next().html("请输入顶部比例");
        } else if ($(this).hasClass("bodyPercent")) {
            $(this).next().html("请输入中间比例");
        } else {
            $(this).next().html("请输入底部比例");
        }
    } else if (!regexp.test(str)) {
        $(this).parent().addClass("has-error");
        $(this).next().html("占比在0-100之间,保留两位的小数");
    } else {
        if ($(this).hasClass("blank")) {
            $("#topPercent").val((100 - str - $("#bottomPercent").val()).toFixed(2));
        } else {
            $("#bodyPercent").val((100 - $("#topPercent").val() - $("#bottomPercent").val()).toFixed(2))
        }

        $(this).parent().removeClass("has-error");
        $(this).parent().addClass("has-success");
        $(this).next().html("");
    }
    changesubmit()
});

$("input[id$='Percent']").blur(function () {
    if (/^[1-9]\d*$/.test($(this).val()))
        $(this).val($(this).val() + ".00")
    if (/^\d(\.\d)?$|^[1-9]\d(\.\d)?$/.test($(this).val()))
        $(this).val($(this).val() + "0")
});

$("input[id^='close']").on("input propertychange change blur", function (event) {
    var str = $(this).val();
    $(this).parent().removeClass("has-success");
    $(this).parent().find(".help-block").css("padding-left", "5em");
    if ($("#closeStart").val() == $("#closeEnd").val()&&$(".checkbox[type='checkbox']").bootstrapSwitch('state')) {
        $(this).parent().addClass("has-error");
        $(this).next().html("开启时间不能与结束时间相同");
    }else if (str == "" || str == null) {
        $(this).parent().addClass("has-error");
        if ($(this).hasClass("closeStart")) {
            $(this).next().html("请输入开始时间");
        } else if ($(this).hasClass("closeEnd")) {
            $(this).next().html("请输入结束时间");
        }
    } else {
        $(this).parent().removeClass("has-error");
        $(this).parent().addClass("has-success");
        $(this).next().html("");
    }
    changesubmit()
});

function changesubmit() {
    var sound = $("#config_form").find(".has-success").length;
    if (sound == 14) {
        $("#config_form_btn").removeAttr("disabled");
        return true;
    } else {
        $("#config_form_btn").attr("disabled", true);
        return false;
    }
}

$("#config_form_btn").click(function () {
    var data = $("#config_form").serializeArray();
    var reg = /^(#[A-F0-9]{6})$/;
    $(data).each(function (i, v) {
        if (reg.test(v.value)) {
            v.value = v.value.substring(1, 7);
        }
        if ((/Percent$/).test(v.name)) {
            v.value = (v.value / 100).toFixed(4)
        }
        if((/^close/).test(v.name)&&!$(".checkbox[type='checkbox']").bootstrapSwitch('state')){
            v.value = "00:00:00"
        }
    });
    $("input").blur();
    if (changesubmit()) {
        $.post("Config/updateConfig.do", data, function (result) {
            if (result == 1) {
                $("#successMessage").removeClass("hidden");
                setTimeout(function () {
                    $("#successMessage").addClass("hidden");
                }, "3000")
            }
        })
    }
});

