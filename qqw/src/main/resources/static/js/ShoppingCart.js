$(function () {
    // let args = getQueryStringArgs();
    // let arg = args["uid"];
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
    var q ='';
    f();

    function f(){
        $.getJSON("/seekUserCart",function (data){
            console.log(data);

            var html = '';
            let arr = -1;
            for (let i= 0;i < data.length; i++) {
                q = data[i].commodityImg;
                arr++;
                html += '<ul  style="display: flex;justify-content: space-between;align-items: center" id="first">\n' +
                    '            <li ><img  style="width:50px;height: 50px" src="images/' + data[i].commodityImg + '" /> ' + data[i].commodityName +'</li>\n' +
                    '            <li >' + data[i].commodityPrice + '</li>\n' +
                    '            <li ><button onclick="delNumber(event)" data-commodityPrice="' + data[i].commodityPrice + '" data-commodityId="' + data[i].commodityId + '" data-total="' + data[i].total + '" data-commodityNumber="' + data[i].commodityNumber + '">-</button> ' + data[i].commodityNumber + '<button onclick="addNumber(event)" data-commodityPrice="' + data[i].commodityPrice + '" data-commodityId="' + data[i].commodityId + '" data-total="' + data[i].total + '" data-commodityNumber="' + data[i].commodityNumber + '">+</button></li>\n' +
                    '            <li >' + data[i].total + '</li>\n' +
                    '    ' +
                    '            <li ><button onclick="delCart(event)" data-commodityId="' + data[i].commodityId + '">删除</button></li>\n' +
                    '        </ul>'

                $("#ddd").html(html);
                // data-commodityPrice="' + data[i].commodityPrice + '"     data-commodityId="' + data[i].commodityId + '"  data-commodityPrice="' + data[i].commodityPrice + '" data-total="' + data[i].total + '" data-commodityNumber="' + data[i].commodityNumber + '"
                // $('#gwcaddnum').click(function (){
                //     $.ajax({
                //         url: "/Cart/gwcaddnum?id="+item.id,
                //         async: false,
                //         cache: false,
                //         type: 'POST',
                //         dataType: 'json',
                //         data:{
                //             "quantity" : item.quantity,
                //         },
                //         success:function (data) {
                //             if (data.success){
                //                 // alert("增加成功");
                //                 window.location.href = '/Cart/gwc?id='+ item.id;
                //             }else {
                //                 // alert("增加成功");
                //                 window.location.href = '/Cart/gwc?id='+ item.id;
                //             }
                //         }
                //     });
                // })
                //
                // $('#gwcsubtractnum').click(function (){
                //     $.ajax({
                //         url: "/Cart/gwcsubtractnum?id="+item.id,
                //         async: false,
                //         cache: false,
                //         type: 'POST',
                //         dataType: 'json',
                //         data:{
                //             "quantity" : item.quantity,
                //         },
                //         success:function (data) {
                //             if (data.success){
                //                 // alert("减少成功");
                //                 window.location.href = '/Cart/gwc?id='+ item.id;
                //             }else {
                //                 // alert("减少成功");
                //                 window.location.href = '/Cart/gwc?id='+ item.id;
                //             }
                //         }
                //     });
                // })
            }
        })
    }
})
function  delNumber() {
    // 获取当前点击的按钮
    var targetBtn = event.target;
    // 获取对应的addressId
    var commodityPrice = targetBtn.getAttribute("data-commodityPrice");
    var commodityId = targetBtn.getAttribute("data-commodityId");
    var total = targetBtn.getAttribute("data-total");
    var commodityNumber = targetBtn.getAttribute("data-commodityNumber");
    // 在这里可以使用addressId进行相关操作
    if (commodityNumber == 1) {
        alert("减去失败 数量1不能减去")
        location = location;
    } else {
        $.ajax({
            url: "/delNumber",
            type: 'Post',
            data: {
                commodityPrice: commodityPrice,
                commodityId: commodityId,
                total:total,
                commodityNumber:commodityNumber
            },
            success: function (resp) {
                if (resp) {
                    alert("减去成功");
                    location = location;
                } else {
                    alert("删除失败  请重试");
                }
            }
        })
    }
}
function  addNumber(){
    // 获取当前点击的按钮
    var targetBtn = event.target;
    // 获取对应的addressId
    var commodityPrice = targetBtn.getAttribute("data-commodityPrice");
    var commodityId = targetBtn.getAttribute("data-commodityId");
    var total = targetBtn.getAttribute("data-total");
    var commodityNumber = targetBtn.getAttribute("data-commodityNumber");
    // 在这里可以使用addressId进行相关操作

        $.ajax({
            url: "/addNumber1",
            type: 'Post',
            data: {
                commodityPrice: commodityPrice,
                commodityId: commodityId,
                total:total,
                commodityNumber:commodityNumber
            },
            success: function (resp) {
                // alert(resp)
                if (resp) {
                    alert("添加成功");
                    location = location;
                } else {
                    alert("添加失败  请重试");
                }
            }
        })
}
function  delCart(){
// 获取当前点击的按钮
    var targetBtn = event.target;
    // 获取对应的addressId
    var commodityId = targetBtn.getAttribute("data-commodityId");

    $.ajax({
        url: "/delCart",
        type: 'Post',
        data: {
            commodityId: commodityId,
        },
        success: function (resp) {
            // alert(resp)
            if (resp) {
                alert("删除成功");
                location = location;
            } else {
                alert("删除失败  请重试");
            }
        }
    })
}
function jiesuan() {

    $.ajax({
        url:'/addUserOrder',
        type:'POST',
        success :function (resp){
            alert(resp)
            if (resp){
                $.ajax({
                    url:'/delUserCart',
                    type:'POST',
                    success :function (resp){
                        if (resp){
                            alert(resp)

                            // $.getJSON("/seekUserCart",function (data){
                            //     for (let i= 0;i < data.length; i++) {
                            //         var commodityId = data[i].commodityNumber;
                            //         alert(commodityId)

                            // }
                            // })
                            window.location.href='/indent'
                        }else {
                            alert('结算失败 请重试');
                        }
                    }
                })
            }else {
                alert("添加订单失败")
            }
        }
    })

}