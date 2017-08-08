$(document).ready(function () {
    $('#loginForm').formValidation({
        // List of fields and their validation rules
        fields: {
            name: {
                trigger: "blur change",
                validators: {
                    notEmpty: {
                        message: '身份证不能为空'
                    }
                }
            },
            password: {
                trigger: "blur change",
                validators: {
                    notEmpty: {
                        message: '密码不能为空'
                    }
                }
            }
        }
    });

    $("#btnLogin").on("click", function (e) {
        var validator = $('#loginForm').data('formValidation').validate();
        if (validator.isValid()) {
            selfAjax("post", "/client/login", {
                idCard: $("#name").val(),
                password: $("#password").val()
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