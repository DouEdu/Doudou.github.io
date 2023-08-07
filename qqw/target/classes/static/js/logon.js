$(function () {
    $('#submit').click(function () {
        let UserName = $('#username').val();
        let UserPassword = $('#password').val();
        let password1 = $('#password1').val()
        var user = {
            userName: UserName,
            userPassword: UserPassword
        };
        if(UserPassword == password1){
            $.ajax({
                url: '/name',
                type: 'POST',
                data: {userName: UserName},
                // contentType: "application/json;charset=utf-8",
                // dataType: 'json',
                success : function (resp) {
                    // alert(user_name)
                    // alert(resp)
                    if (resp == true) {
                        location = location;
                        // alert("账号重复，请重新输入");
                        alert("账号重复，请重新输入");
                    }else {
                        $.ajax({
                            url: '/logon1',
                            type: 'POST',
                            contentType: 'application/json',
                            // ;charset=utf-8
                            data:JSON.stringify(user),
                            // JSON.stringify
                            // dataType: 'json',
                            success: function (data) {
                                if (data > 0) {
                                    alert('注册成功')
                                    window.location.href = '/register'
                                }
                            }
                        })
                    }
                    }
            })
        }else{
            alert('密码不一致')
        }
    });
});


// $.ajax({
//     url: '/user/logon',
//     type: "Post",
//     dataType: 'json',
//     data:{
//         username : username,
//         password : password,
//         password1 : password1
//     },
//     success: function (data) {
//         if (data.success) {
//             alert("注册成功")
//             window.location.href='/user/denglu';
//         } else {
//             alert("注册异常")
//         }
//     }
// });