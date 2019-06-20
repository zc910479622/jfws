
window.operatEvents = {
    "click #edit":function (e,value,row,index) {
        $("#modal_addInventory").one("show.bs.modal", function (event) {
            var modal = $(this);
            modal.find("#modal_addInventory_title").html("修改<span>【库存品类】</span>");
            modal.find(".help-block").html("");
            modal.find("#modal_addInventory_form>div").removeClass("has-error");
            modal.find("#modal_addInventory_form_name").val(row.name).parent().addClass("has-success");
            modal.find("#modal_addInventory_form_low").val(row.low).parent().addClass("has-success");
            modal.find("#modal_addInventory_form_high").val(row.high).parent().addClass("has-success");
            modal.find("#modal_addInventory_form_id").val(row.id);
            modal.find("#modal_editInventory_form_submit").removeClass("hidden");
            modal.find("#modal_addInventory_form_submit").addClass("hidden");
        }).modal("show");
    },
    "click #delete":function (e,value,row,index) {
        $("#modal_del").on("show.bs.modal", function (event) {
            var modal = $(this);
            modal.find("#modal_del_info").html("确认要删除【<span style=\"color:#F00;\">" + row.name + "</span>】吗？");
            modal.find("#modal_del_form_id").val(row.id);
            modal.find("#modal_del_form_submit").show();
        }).modal("show");
    }
};
setInventoryTable();


function setInventoryTable() {
    $("#tabInventory").bootstrapTable({
        url: "Inventory/selectInventory.do",
        method:"post",
        dataType:"JSON",
        pagination: true,
        singleSelect: true,
        striped: true,
        undefinedText: "",
        height: $(window).height()*0.6,
        pageSize: 10,
        pageList: [ 10, 20, 30, 50],
        showColumns: false,
        showRefresh: false,
        showToggle: false,
        toolbar: "#tabInventory_toolbar",
        cache: false,
        clickToSelect: false,
        uniqueId: "id",
        columns: [{
            title: "品名",
            field: "name",
            halign: "center",
            align: "center",
            valign: "middle",
            width: "80px"
        }, {
            title: "最小库存量",
            field: "low",
            align: "center",
            valign: "middle",
            width: "80px"
        }, {
            title: "最大库存量",
            field: "high",
            halign: "center",
            align: "center",
            valign: "middle",
            width: "100px"
        },{
            title: "操作",
            halign: "center",
            align: "center",
            valign: "middle",
            width: "60px",
            events:operatEvents,
            formatter: aFormatter()
        }]
    });
}

function aFormatter(value, row, index) {
    return [
        '<a id="edit" href="#">修改</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a id="delete" href="#">删除</a>'
    ].join("")
}

$("#tabInventory_add").click(function () {
    $("#modal_addInventory").on("show.bs.modal", function (event) {
        var modal = $(this);
        modal.find("#modal_addInventory_title").html("新增<span>【库存品类】</span>");
        modal.find(".help-block").html("");
        modal.find("div").removeClass("has-error has-success");
        $("#modal_addInventory_form input").val("");
        modal.find("#modal_editInventory_form_submit").addClass("hidden");
        modal.find("#modal_addInventory_form_submit").removeClass("hidden");
        modal.find("#modal_addInventory_form_submit").attr("disabled", true);
    }).modal("show");
});

//***************************验证表单信息***********************************
$("#modal_addInventory_form_name").on("input propertychange change", function (event) {
    var regexp = /^[\u4E00-\u9FA5\uf900-\ufa2d·s0-9]{2,10}$/;;
    var str = $("#modal_addInventory_form_name").val();
    $("#modal_addInventory_form_name").parent().removeClass("has-success");
    if (str == "" || str == null) {
        $("#modal_addInventory_form_name").parent().addClass("has-error");
        $("#modal_addInventory_form_name").next().html("请输入品名");
    } else if (!regexp.test(str)) {
        $("#modal_addInventory_form_name").parent().addClass("has-error");
        $("#modal_addInventory_form_name").next().html("品名长度在2-10之间,且是中文");
    } else {
        $("#modal_addInventory_form_name").parent().removeClass("has-error");
        $("#modal_addInventory_form_name").parent().addClass("has-success");
        $("#modal_addInventory_form_name").next().html("");
    }
    changesubmit()
});

$("#modal_addInventory_form_low").on("input propertychange change blur", function (event) {
    var regexp = /^[0-9]{0,10}$/;
    var str = $("#modal_addInventory_form_low").val();
    var high = $("#modal_addInventory_form_high").val()!=""?$("#modal_addInventory_form_high").val():99999999;
    $("#modal_addInventory_form_low").parent().removeClass("has-success");
    if (str == "" || str == null) {
        $("#modal_addInventory_form_low").parent().addClass("has-error");
        $("#modal_addInventory_form_low").next().html("请输入最小库存数,必须为整数");
    } else if (!regexp.test(str)||parseInt(str)>=parseInt(high)) {
        $("#modal_addInventory_form_low").parent().addClass("has-error");
        $("#modal_addInventory_form_low").next().html("最小库存数应为整数,且小于最大库存数");
    } else {
        $("#modal_addInventory_form_low").parent().removeClass("has-error");
        $("#modal_addInventory_form_low").parent().addClass("has-success");
        $("#modal_addInventory_form_low").next().html("");
    }
    changesubmit()
});

$("#modal_addInventory_form_high,#modal_addInventory_form_low").on("change",function (event) {
    $("#modal_addInventory_form_high,#modal_addInventory_form_low").blur();
});

$("#modal_addInventory_form_high").on("input propertychange change blur", function (event) {
    var regexp = /^[0-9]{0,10}$/;
    var str = $("#modal_addInventory_form_high").val();
    var low = $("#modal_addInventory_form_low").val()!=""?$("#modal_addInventory_form_low").val():0;
    $("#modal_addInventory_form_high").parent().removeClass("has-success");
    if (str == "" || str == null) {
        $("#modal_addInventory_form_high").parent().addClass("has-error");
        $("#modal_addInventory_form_high").next().html("请输入最大库存数,必须为整数");
    } else if (!regexp.test(str)||parseInt(str)<=parseInt(low)) {
        $("#modal_addInventory_form_high").parent().addClass("has-error");
        $("#modal_addInventory_form_high").next().html("最大库存数应为整数,且大于最大库存数");
    } else {
        $("#modal_addInventory_form_high").parent().removeClass("has-error");
        $("#modal_addInventory_form_high").parent().addClass("has-success");
        $("#modal_addInventory_form_high").next().html("");
    }
    changesubmit()
});

function changesubmit() {
    var sound = $("#modal_addInventory").find(".has-success").length;
    if (sound == 3) {
        $("#modal_addInventory_form_submit").removeAttr("disabled");
        $("#modal_editInventory_form_submit").removeAttr("disabled");
        return true;
    } else {
        $("#modal_addInventory_form_submit").attr("disabled", true);
        $("#modal_editInventory_form_submit").attr("disabled", true);
        return false;
    }
}

//***********************错误信息************************
function submit_fail(fn, msg) {
    fn.hide().html("<label class=\"label label-danger\">" + msg + "</label>").show(300, function () {
        setTimeout(function () {
            fn.hide();
        }, 5000);
    });
}

//**************************查询按钮*****************************
$("#queryBtn").click(function () {
    $('#tabInventory').bootstrapTable('selectPage',1);
    $('#tabInventory').bootstrapTable('refresh')
});

//*************************重置按钮*************************
$("#result").click(function () {
    $("#queryForm input").val("");
    $("#queryJjRole").val(0);
    $("#queryZw").val(0);
});

//**************************添加按钮*************************************
$("#modal_addInventory_form_submit").click(function () {
    if (changesubmit()){
        $.ajax({
            url: "Inventory/insertInventory.do",
            async: false,//同步，会阻塞操作
            type: "post",//PUT DELETE POST
            data: $("#modal_addInventory_form").serialize(),
            complete: function (msg) {
                console.log("完成了");
            },
            success: function (result) {
                console.log(result);
                if (result == 1) {
                    $("#modal_addInventory").modal("hide");
                    $("#tabInventory").bootstrapTable("refresh");
                } else {
                    submit_fail($("#modal_addInventory_message"), "保存失败，请检查编号是否有重复！");
                }
            }, error: function () {
                submit_fail($("#modal_addInventory_message"), "保存失败，请检查编号是否有重复！");
            }
        });
    }
});

//******************************修改按钮***********************************
$("#modal_editInventory_form_submit").click(function () {
    if (changesubmit()){
        $.ajax({
            url: "Inventory/updateInventory.do",
            async: false,//同步，会阻塞操作
            type: "post",//PUT DELETE POST
            data: $("#modal_addInventory_form").serialize(),
            complete: function (msg) {
                console.log("完成了");
            },
            success: function (result) {
                console.log(result);
                if (result == 1) {
                    $("#modal_addInventory").modal("hide");
                    $("#tabInventory").bootstrapTable("refresh");
                } else {
                    submit_fail($("#modal_addInventory_message"), "修改失败，请检查编号是否有重复！");
                }
            }, error: function () {
                submit_fail($("#modal_addInventory_message"), "修改失败，请检查编号是否有重复！");
            }
        });
    }
});

//********************************删除按钮*************************************
$("#modal_del_form_submit").click(function () {
    $.post("Inventory/delete.do",{id:$("#modal_del_form_id").val()},function (result) {
        if(result == 1){
            $("#tabInventory").bootstrapTable("refresh");
        }
    })
});