window.operatEvents = {
    "click #edit": function (e, value, row, index) {
        $("#modal_editDisplay").one("show.bs.modal", function (event) {
            var modal = $(this);
            modal.find("#modal_editDisplay_title").html("修改<span>【显示屏】</span>信息");
            modal.find(".help-block").html("");
            modal.find("input").val("");
            modal.find("#modal_editDisplay_form>div").removeClass("has-error");
            modal.find("#displayId").val(row.displayId);
            modal.find("#type").selectpicker("val", row.type).blur();
            modal.find("#houseName").val(row.houseName);
            modal.find("#inLampLasttime").val(timestampTime(row.inLampLasttime));
            modal.find("#outLampLasttime").val(timestampTime(row.outLampLasttime));
            modal.find("#color").minicolors("value",row.color);
            modal.find("#lasttime").val(timestampTime(row.lasttime));
            modal.find("input").blur();
            if (row.type == "0" || row.type == "1") {
                $(".modal-body .panel-body form:not(:first)").remove()
            } else if (row.type == "2" || row.type == "3") {
                var readonly = "";
                var Model = "规格";
                var Num = "重量";
                if (row.type == "2") {
                    Model = "批次";
                    Num = "包数";
                    readonly = "readonly='readonly'"
                }
                $(".modal-body .panel-body form").remove();
                var str = '';
                $(JSON.parse(row.subitems)).each(function (i, v) {
                    str += ' <form class="form-group form-inline" style="border-bottom: 1px solid #dddddd">\n' +
                        '<label  class="ui-dlist-tit">库位</label>\n' +
                        '<input name="NO" type="text" class="form-control" value="' + v.NO + '"' + readonly + '>\n' +
                        '<label class="ui-dlist-tit">品名</label>\n' +
                        '<input name="Name" type="text" class="form-control" value="' + v.Name + '">\n' +
                        '<label  class="ui-dlist-tit model">'+Model+'</label>\n' +
                        '<input name="Model" type="text" class="form-control" value="' + v.Model + '">\n' +
                        '<label class="ui-dlist-tit num">'+Num+'</label>\n' +
                        '<input  name="Num" type="text" class="form-control" value="' + v.Num + '">\n' +
                        '<span class="help-block"></span>\n' +
                        '</form>'
                })
                $(".modal-body .panel-body").append(str)
            }
        }).modal("show");
    }
};
setDisplayTable();

$("#color").minicolors({
    animationEasing: 'swing',
    control: 'hue',
    inline: false,
    letterCase: 'uppercase',
    opacity: false,
    position: 'bottom left',
    showSpeed: 100,
    theme: 'bootstrap'
});


function setDisplayTable() {
    $("#tabDisplay").bootstrapTable({
        url: "Display/selectDisplay.do",
        method: "post",
        dataType: "JSON",
        pagination: false,
        singleSelect: true,
        striped: true,
        undefinedText: "",
        showColumns: false,
        showRefresh: false,
        showToggle: false,
        cache: false,
        clickToSelect: true,
        uniqueId: "displayId",
        columns: [{
            title: "显示屏ID",
            field: "displayId",
            halign: "center",
            align: "center",
            valign: "middle",
            width: "40px"
        }, {
            title: "类型",
            field: "type",
            halign: "center",
            align: "center",
            valign: "middle",
            width: "60px",
            formatter: function (row, value, index) {
                if (value.type == 0) {
                    return "铝锭库"
                } else if (value.type == 1) {
                    return "临时库"
                } else if (value.type == 2) {
                    return "待检区"
                } else if (value.type == 3) {
                    return "多库位"
                }
            }
        }, {
            title: "库位",
            field: "houseName",
            align: "center",
            valign: "middle",
            width: "80px"
        }, {
            title: "入库灯通信时间",
            field: "inLampLasttime",
            halign: "center",
            align: "center",
            valign: "middle",
            width: "100px",
            formatter: function (row, value, index) {
                return timestampTime(value.inLampLasttime)
            }
        }, {
            title: "出库灯通信时间",
            field: "outLampLasttime",
            halign: "center",
            align: "center",
            valign: "middle",
            width: "100px",
            formatter: function (row, value, index) {
                return timestampTime(value.outLampLasttime)
            }
        }, {
            title: "字体,线条颜色",
            field: "color",
            halign: "center",
            align: "center",
            valign: "middle",
            width: "100px"
        }, {
            title: "屏最后通信时间",
            field: "lasttime",
            halign: "center",
            align: "center",
            valign: "middle",
            width: "100px",
            formatter: function (row, value, index) {
                return timestampTime(value.lasttime)
            }
        }, {
            title: "操作",
            halign: "center",
            align: "center",
            valign: "middle",
            width: "60px",
            events: operatEvents,
            formatter: function (value, row, index) {
                return aFormatter(value, row, index);
            }
        }]
    });
}


function aFormatter(value, row, index) {
    if (row.type == 0 || row.type == 1) {
        return [
            '<a id="edit" href="#">修改</a>'
        ].join("")
    } else if (row.type == 2 || row.type == 3) {
        return [
            '<a id="edit" href="#">修改</a>'
        ].join("")
    }
}

//***************************验证表单信息***********************************
$("#houseName").on("input propertychange change blur", function (event) {
    var regexp = /^[\u4E00-\u9FA5\uf900-\ufa2d·sa-zA-Z0-9]{1,10}$/;
    var str = $(this).val();
    $(this).parent().removeClass("has-success");
    $(this).parent().find(".help-block").css("padding-left", "61%");
    if (str == "" || str == null) {
        $(this).parent().addClass("has-error");
        $(this).next().html("请输入库位号或库位名称");
    } else if (!regexp.test(str)) {
        $(this).parent().addClass("has-error");
        $(this).next().html("库位长度在1-10之间");
    } else {
        $(this).parent().removeClass("has-error");
        $(this).parent().addClass("has-success");
        $(this).next().html("");
    }
    changesubmit()
});

function changesubmit() {
    var sound = $("#modal_editDisplay").find(".has-success").length;
    if (sound == 1) {
        return true;
    } else {
        return false;
    }
}

//***********************错误信息************************
function submit_fail(fn, msg) {
    fn.hide().html("<label class=\"label label-danger\">" + msg + "</label>").show(300, function () {
        setTimeout(function () {
            fn.hide();
        }, 1000);
    });
}

//******************************修改按钮***********************************
$("#modal_editDisplay_form_submit").click(function () {
    var number = 0;
    if ($("#type").val()=="2") {
        $(".panel-body>.form-group>input[name!='NO']").each(function(e) {
            var text = $(this).val();
            if(text == "") {
                number++;
            }
        });
    }else if ($("#type").val()=="3") {
        $(".panel-body>.form-group>input[type=text]").each(function(e) {
            var text = $(this).val();
            if(text == "") {
                number++;
            }
        });
    }

    if (number>0){
        $("#subError").text("请填满子项数据");
        setTimeout(function () {
            $("#subError").text("")
        },5000);
        return false;
    }
    if($("#type").val()=="2"||$("#type").val()=="3"){
        $("#subitems").val(JSON.stringify(serializeObject()))
    }else {
        $("#subitems").val("")
    }
    if (changesubmit()) {
        var data = $("#modal_editDisplay_form").serializeArray();
        for (var key in data) {
            if (data[key].name == "color") {
                data[key].value = data[key].value.substring(1, 7)
            }
        }
        $.ajax({
            url: "Display/updateDisplay.do",
            async: false,//同步，会阻塞操作
            type: "post",//PUT DELETE POST
            data: data,
            success: function (result) {
                if (result == 1) {
                    $("#modal_editDisplay").modal("hide");
                    $("#tabDisplay").bootstrapTable("refresh");
                } else {
                    submit_fail($("#modal_editDisplay_message"), "修改失败！");
                }
            }, error: function () {
                submit_fail($("#modal_editDisplay_message"), "修改失败！");
            }
        });
    }
});

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

$("#type").on("change blur", function () {
    if ($(this).val() == "0" || $(this).val() == "1") {
        $("#displaySubDiv").hide();
        $("#modal_editDisplay_form_addDisplaySub").addClass("hidden");
        $("#modal_editDisplay_form_deleteDisplaySub").addClass("hidden");
    } else if ($(this).val() == "2" || $(this).val() == "3") {
        if ($(this).val() == "2") {
            $("label.model").text("批次");
            $("label.num").text("包数");
            $(".modal-body .panel-body input[name='NO']").val("")
            $(".modal-body .panel-body input[name='NO']").attr("readonly", "readonly")
        } else if ($(this).val() == "3") {
            $("label.model").text("规格");
            $("label.num").text("重量");
            $(".modal-body .panel-body input[name='NO']").removeAttr("readonly", "readonly")
        }
        $("#displaySubDiv").show();
        $("#modal_editDisplay_form_addDisplaySub").removeClass("hidden");
        $("#modal_editDisplay_form_deleteDisplaySub").removeClass("hidden");
    }
});

$("#modal_editDisplay_form_addDisplaySub").click(function () {
    var type = $("#type").val();
    var readonly = "";
    var Model = "规格";
    var Num = "重量";
    if (type == "2") {
        Model = "批次";
        Num = "包数";
        readonly = "readonly='readonly'"
    }
    var str = ' <form class="form-group form-inline" style="border-bottom: 1px solid #dddddd">\n' +
        '<label  class="ui-dlist-tit">库位</label>\n' +
        '<input name="NO" type="text" class="form-control"' + readonly + '>\n' +
        '<label class="ui-dlist-tit">品名</label>\n' +
        '<input name="Name" type="text" class="form-control">\n' +
        '<label  class="ui-dlist-tit model">'+Model+'</label>\n' +
        '<input name="Model" type="text" class="form-control">\n' +
        '<label class="ui-dlist-tit num">'+Num+'</label>\n' +
        '<input  name="Num" type="text" class="form-control">\n' +
        '<span class="help-block"></span>\n' +
        '</form>';

    $(".modal-body .panel-body").append(str);
});

$("#modal_editDisplay_form_deleteDisplaySub").click(function () {
    if ($(".modal-body .panel-body form").length > 1) {
        $(".modal-body .panel-body form").last().remove();
    }
});

function serializeObject() {
    var data = $('.modal-body .panel-body form');
    var json = [];
    var obj = {};
    $(data).each(function (i,v) {
        obj = {};
        $($(v).serializeArray()).each(function (j, k) {
            obj[k.name] = k.value;
        });
        json.push(obj)
    });
    return json;
}
