$(document).ready(function () {
    $('#loginForm').formValidation({
        // List of fields and their validation rules
        fields: {
            name: {
                trigger: "blur change",
                validators: {
                    notEmpty: {
                        message: '姓名不能为空'
                    }
                }
            },
            idCard: {
                trigger: "blur change",
                validators: {
                    notEmpty: {
                        message: '身份证不能为空'
                    },
                    stringLength: {
                        min: 18,
                        message: '身份证号必须是18位'
                    },
                    integer: {
                        message: '填写的不是数字',
                    }
                }
            },
            password: {
                trigger: "blur change",
                validators: {
                    notEmpty: {
                        message: '密码不能为空'
                    },
                    stringLength: {
                        min: 6,
                        max: 15,
                        message: '密码在6-15个字符之间'
                    }
                }
            },
            mobile: {
                trigger: "blur change",
                validators: {
                    notEmpty: {
                        message: '电话号码不能为空'
                    },
                    stringLength: {
                        min: 11,
                        message: '电话号码必须是11位'
                    },
                    integer: {
                        message: '填写的不是数字',
                    }
                }
            }
        }
    });

    $("#btnReg").on("click", function (e) {
        var validator = $('#loginForm').data('formValidation').validate();
        if (validator.isValid()) {
            selfAjax("post", "/client/reg", {
                name: $("#name").val(),
                idCard: $("#idCard").val(),
                password: $("#password").val(),
                mobile: $("#mobile").val()
            }, function (data) {
                if (data.error) {
                    $(".warning").text(data.error);
                    return;
                }
                if (data.url) {
                    location.href = data.url;
                }
            });
        }
    });
});