$(function () {
    $('#submit').click(function (){
        var UserName = $('#username').val();
        var UserPassword = $('#password').val();
        // alert(UserPassword)
        var user={
            userName:UserName,
            userPassword: UserPassword
        }
        $.ajax({
            url:'/register1',
            // async:false,
            // cache:false,
            type:"post",
            contentType: "application/json;charset=utf-8",
            // dataType:'json',
            data:JSON.stringify(user),
            success:function (data){
                // alert(data)
                if (data){
                    alert("登录成功")
                    window.location.href = '/';
                }else {
                    alert("登录失败")
                    window.location.href = '/logon';
                }
            }
        });
    });
});