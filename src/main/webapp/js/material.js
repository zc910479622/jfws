
window.operatEvents = {
    "click #edit":function (e,value,row,index) {
        $("#modal_editMaterial").one("show.bs.modal", function (event) {
            var modal = $(this);
            modal.find("#modal_editMaterial_title").html("修改<span>【原料代码】</span>信息");
            modal.find(".help-block").html("");
            modal.find("#modal_editMaterial_form>div").removeClass("has-error");
            modal.find("#modal_editMaterial_form_mateCode").val(row.mateCode);
            modal.find("#modal_editMaterial_form_mateCodeName").val(row.mateCodeName);
            modal.find("#modal_editMaterial_form_mateCodeShortName").val(row.mateCodeShortname);
        }).modal("show");
    }
};
setMaterialTable();


function setMaterialTable() {
    $("#tabMaterial").bootstrapTable({
        url: "Material/selectMaterial.do",
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
        uniqueId: "mateCode",
        columns: [{
            title: "原料代码",
            field: "mateCode",
            halign: "center",
            align: "center",
            valign: "middle",
            width: "80px"
        }, {
            title: "原料代码名称",
            field: "mateCodeName",
            align: "center",
            valign: "middle",
            width: "80px"
        }, {
            title: "原料代码简称",
            field: "mateCodeShortname",
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
$("#modal_editMaterial_form_mateCodeShortName").on("input propertychange change", function (event) {
    var regexp = /^[\u4E00-\u9FA5\uf900-\ufa2da-zA-Z0-9.-]{1,10}$/;
    var str = $("#modal_editMaterial_form_mateCodeShortName").val();
    $("#modal_editMaterial_form_mateCodeShortName").parent().removeClass("has-success");
    if (str == "" || str == null) {
        $("#modal_editMaterial_form_mateCodeShortName").parent().addClass("has-error");
        $("#modal_editMaterial_form_mateCodeShortName").next().html("请输入简称");
    } else if (!regexp.test(str)) {
        $("#modal_editMaterial_form_mateCodeShortName").parent().addClass("has-error");
        $("#modal_editMaterial_form_mateCodeShortName").next().html("简称长度在1-6之间,且是中文");
    } else {
        $("#modal_editMaterial_form_mateCodeShortName").parent().removeClass("has-error");
        $("#modal_editMaterial_form_mateCodeShortName").parent().addClass("has-success");
        $("#modal_editMaterial_form_mateCodeShortName").next().html("");
    }
    changesubmit()
});

function changesubmit() {
    var sound = $("#modal_editMaterial").find(".has-success").length;
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
$("#modal_editMaterial_form_submit").click(function () {
    if (changesubmit()){
        $.ajax({
            url: "Material/updateTMaterial.do",
            async: false,//同步，会阻塞操作
            type: "post",//PUT DELETE POST
            data: $("#modal_editMaterial_form").serialize(),
            complete: function (msg) {
                console.log("完成了");
            },
            success: function (result) {
                console.log(result);
                if (result == 1) {
                    $("#modal_editMaterial").modal("hide");
                    $("#tabMaterial").bootstrapTable("refresh");
                } else {
                    submit_fail($("#modal_editMaterial_message"), "修改失败！");
                }
            }, error: function () {
                submit_fail($("#modal_editMaterial_message"), "修改失败！");
            }
        });
    }
});
