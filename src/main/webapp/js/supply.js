
window.operatEvents = {
    "click #edit":function (e,value,row,index) {
        $("#modal_editSupply").one("show.bs.modal", function (event) {
            var modal = $(this);
            modal.find("#modal_editSupply_title").html("修改<span>【供应商】</span>信息");
            modal.find(".help-block").html("");
            modal.find("#modal_editSupply_form>div").removeClass("has-error");
            modal.find("#modal_editSupply_form_supplyNbr").val(row.supplyNbr);
            modal.find("#modal_editSupply_form_supplyCode").val(row.supplyCode);
            modal.find("#modal_editSupply_form_supplyName").val(row.supplyName);
            modal.find("#modal_editSupply_form_supplyAddress").val(row.supplyAddress);
            modal.find("#modal_editSupply_form_supplyShortname").val(row.supplyShortname);
            modal.find("#modal_editSupply_form_supplyId").val(row.supplyId);
            $("input").blur()
        }).modal("show");
    }
};
setSupplyTable();


function setSupplyTable() {
    $("#tabSupply").bootstrapTable({
        url: "Supply/selectSupply.do",
        method:"post",
        dataType:"JSON",
        pagination: true,
        singleSelect: true,
        striped: true,
        undefinedText: "",
        height: $(window).height()*0.6,
        pageSize: 10,
        pageList: [10, 20, 30, 50],
        showColumns: false,
        showRefresh: false,
        showToggle: false,
        cache: false,
        clickToSelect: false,
        uniqueId: "supplyId",
        columns: [{
            title: "供应商编号",
            field: "supplyNbr",
            halign: "center",
            align: "center",
            valign: "middle",
            width: "20px"
        }, {
            title: "生成条码编号",
            field: "supplyCode",
            align: "center",
            valign: "middle",
            width: "10px"
        }, {
            title: "供应商名称",
            field: "supplyName",
            halign: "center",
            align: "center",
            valign: "middle",
            width: "200px"
        },{
            title: "供应商地址",
            field: "supplyAddress",
            halign: "center",
            align: "center",
            valign: "middle",
            width: "150px"
        },{
            title: "供应商简称",
            field: "supplyShortname",
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
        '<a id="edit" href="#">修改</a>'
    ].join("")
}

//***************************验证表单信息***********************************
$("#modal_editSupply_form_supplyShortname").on("input propertychange change blur", function (event) {
    var regexp = /^[\u4E00-\u9FA5\uf900-\ufa2d·s]{1,10}$/;
    var str = $("#modal_editSupply_form_supplyShortname").val();
    $("#modal_editSupply_form_supplyShortname").parent().removeClass("has-success");
    if (str == "" || str == null) {
        $("#modal_editSupply_form_supplyShortname").parent().addClass("has-error");
        $("#modal_editSupply_form_supplyShortname").next().html("请输入简称");
    } else if (!regexp.test(str)) {
        $("#modal_editSupply_form_supplyShortname").parent().addClass("has-error");
        $("#modal_editSupply_form_supplyShortname").next().html("简称长度在1-6之间,且是中文");
    } else {
        $("#modal_editSupply_form_supplyShortname").parent().removeClass("has-error");
        $("#modal_editSupply_form_supplyShortname").parent().addClass("has-success");
        $("#modal_editSupply_form_supplyShortname").next().html("");
    }
    changesubmit()
});

function changesubmit() {
    var sound = $("#modal_editSupply").find(".has-success").length;
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
        }, 5000);
    });
}

//******************************修改按钮***********************************
$("#modal_editSupply_form_submit").click(function () {
    $("input").blur();
    if (changesubmit()){
        $.ajax({
            url: "Supply/updateTSupply.do",
            async: false,//同步，会阻塞操作
            type: "post",//PUT DELETE POST
            data: $("#modal_editSupply_form").serialize(),
            complete: function (msg) {
                console.log("完成了");
            },
            success: function (result) {
                console.log(result);
                if (result == 1) {
                    $("#modal_editSupply").modal("hide");
                    $("#tabSupply").bootstrapTable("refresh");
                } else {
                    submit_fail($("#modal_editSupply_message"), "修改失败！");
                }
            }, error: function () {
                submit_fail($("#modal_editSupply_message"), "修改失败！");
            }
        });
    }
});
