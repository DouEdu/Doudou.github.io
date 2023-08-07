$(function (){
    // `let args = getQueryStringArgs();
    // let arg = args["id"];
    // function getQueryStringArgs() {
    //     //取得查询字符串并去掉开头的问号
    //     var qs = (location.search.length > 0 ? location.search.substring(1) : ""),
    //         //保存数据的对象
    //         args = {},
    //         //取得每一项
    //         items = qs.length ? qs.split("&") : [],
    //         item = null,
    //         name = null,
    //         value = null,
    //         //在for 循环中使用
    //         i = 0,
    //         len = items.length;
    //     //逐个将每一项添加到args 对象中
    //     for (i = 0; i < len; i++) {
    //         item = items[i].split("=");
    //         name = decodeURIComponent(item[0]);
    //         value = decodeURIComponent(item[1]);
    //         if (name.length) {
    //             args[name] = value;
    //         }
    //     }
    //     return args;
    // }

    f();
    function f(){
    $.get('/gerenzl1',function (data){
        console.log(data)
        var html ='';
            if (data.userSex === "男"){
                var nan = "checked";
            }else if (data.userSex === "女"){
                var nv = "checked";
            }
            html += '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font color="#646464">用户名：</font>&nbsp;&nbsp;\n' +
                '            <input class="inp" type="text" onblur="send_username()" id="username"  placeholder="'+data.userName+'">\n' +
                '            <br>\n' +
                '            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<font color="#646464">电话号码：</font>&nbsp;&nbsp;\n' +
                '            <input class="inp" type="text" id="phone" onblur="checkInput(this)" placeholder="'+data.userPhone+'">\n' +
                '            <br>\n' +
                '            &nbsp;&nbsp;&nbsp;&nbsp;<font color="#646464">电子邮箱：</font>&nbsp;&nbsp;&nbsp;&nbsp;\n' +
                '            <input class="inp" type="text" id ="email" onblur="checkInput(this)" placeholder="'+data.userEmail+'">\n' +
                '            <br>\n' +
                '            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;性别： &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n' +
                '                 <input type="radio" name="sex" value="男" '+nan+'>男\n' +
                '                 <input type="radio" name="sex" value="女" '+nv+'>女\n' +
                '            <br>\n' +
                '            <button class="but" onclick="check()" style="color: white">修改</button>';
            $(".kon-1").html(html);
            // alert(data)

        })

    }

    // $('#submit').click(function (){
    //     alert('执行')
    //     var userName = $('#username').val();
    //     var userPhone = $('#phone').val();
    //     var userEmail = $('#email').val();
    //     alert(userName)
    //     const userSex = document.getElementsByName("sex");
    //     for (let i =0; i<userSex.length;i++){
    //         if (userSex[i].checked){
    //             if (userSex[i].value==="男"){
    //                 var sex = "男";
    //             }else if (userSex[i].value==="女"){
    //                 var sex = "女";
    //             }
    //         }
    //     }
    //     var user={
    //         userName : userName,
    //         userPhone : userPhone,
    //         userEmail : userEmail,
    //         userSex : userSex,
    //     }
    //     $.ajax({
    //         url:'/user/gerenzl2',
    //         // async:false,
    //         // cache:false,
    //         type:"POST",
    //         // dataType:'json',
    //         contentType: 'application/json',
    //         data:JSON.stringify(user),
    //         success:function (data){
    //             alert(data)
    //             if (data){
    //                 alert("修改成功");
    //             }else {
    //                 alert("修改失败");
    //             }
    //         }
    //     });
    // });
})