$(function () {

    $('#submit').click(function () {
        var userPassword = $('#password1').val();
        var passWord1 = $('#password2').val();
        var password3 = $('#password3').val();
        var password = {
            userPassword:userPassword,
            passWord1:passWord1
        }
        if (passWord1 == password3) {
            //查看原密码输入的是用户的吗
            $.ajax({
                url: '/namePassWord',
                type: 'POST',
                success : function (resp){
                    if (userPassword==resp){
                        //修改密码
                        $.ajax({
                            url: '/xgpasswprd1',
                            // async: false,
                            // cache: false,
                            type: 'POST',
                            contentType: "application/json;charset=utf-8",
                            // dateType: 'json',
                            data: JSON.stringify(password),
                            success: function (data) {
                                if (data) {
                                    alert("修改成功")
                                    window.location.href = "/register";
                                } else {
                                    alert("修改失败")
                                }
                            }
                        })
                    }else {
                        alert("原密码错误");
                    }
                }
            })
    }else {
            alert("修改密码与确认密码不一致,重新输入");
            location = location;
        }
    })
})