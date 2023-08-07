// $(function () {
//     f();
//     function f(){
//         $.getJSON("/user/selectid",function (data){
//             let imgsq = '';
//             $.each(data.ListPro,function (index,o){
//                 imgsq = o.img;
//             })
//             var html = '<form enctype="multipart/form-data" method="post" action="/user/douploa">'+
//
//                 '<p>' +
//                 '<label> 头 像：</label>' +
//                 '<img src="'+imgsq+'" style="width: 100;height: 100px" alt="" id="headPortrait" class="round_icon" ><br>' +
//                 '<input type="file" name="file" value="选择头像" id="chooseImg">' +
//                 '<input type="submit" value="上传">' +
//                 '</p >'+
//                 '</form>';
//             $(".kon-1").append(html);
//         })
//     }
// })