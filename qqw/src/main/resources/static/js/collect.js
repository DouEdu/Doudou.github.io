$(function (){
    // let args = getQueryStringArgs();
    // let sid = args["sid"];
    // let id = args["id"];
    // const arg = getQueryStringArgs();
    // var pageNum = arg["pageNum"];
    //
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
        // if (pageNum == null){
        //     pageNum = 1;
        // }
        // $.getJSON("/Collect/shopid",function (data){
        //     var html = ''
        //     data.ListPor.map(function (item,collect){
        $.getJSON("/seekUserFavorite",function (data){
            console.log(data);
            var html ='';
            for (let i= 0;i < data.length; i++) {
                html += '' +
                    '<li id="favorite-' + data[i].FavoriteId + '" class="commodity-item">' +
                    '<img style="width:50px;height: 50px" src=" images/' + data[i].commodityImg + '" >' +
                    // '<img src="../images/index/dn1.png">' +
                    ' <div class="commodity-info"><br>' +
                    '<span>' + data[i].commodityPrice + '</span><br>' +
                    '<p>' + data[i].commodityOverview + '</p>' +
                    '<button onclick="delFavorite(event)" data-FavoriteId="' + data[i].favoriteId + '">取消收藏</button>' +
                    '&nbsp;&nbsp;&nbsp;&nbsp;<button onclick="gomai(event)" data-commodityName="' + data[i].commodityName + '" data-commodityPrice="' + data[i].commodityPrice + '" data-commodityImg="' + data[i].commodityImg + '" data-commodityOverview="' + data[i].commodityOverview + '"   data-commodityId="' + data[i].commodityId + '">立即购买</button>&nbsp;&nbsp;' +
                    '</div>' +
                    '</li>';
                // 每四个商品换一行
                // if ((i+1) % 4 === 0 && i !== data.length-1) {
                //     html += '</ul><ul>';
                // }
            }
            html += '</ul>';
                    $("#div4").html(html);
            })
        }
})
function delFavorite(){
    // 获取当前点击的按钮
    var targetBtn = event.target;
    // 获取对应的addressId
    var favoriteId = targetBtn.getAttribute("data-FavoriteId");
    // 在这里可以使用addressId进行相关操作
    // alert(favoriteId)
    $.ajax({
        url:'/delFavorite',
        type:'POST',
        data:{favoriteId:favoriteId},
        success:function (resp){
            if (resp){
                alert("取消成功");
                location = location;
            }else {
                alert("取消失败 请重试")
            }
        }
    })
}
function gomai(){
    // 获取当前点击的按钮
    var targetBtn = event.target;
    // 获取对应的addressId
    var commodityId = targetBtn.getAttribute("data-commodityId");
    var commodityPrice = targetBtn.getAttribute("data-commodityPrice");
    var total = commodityPrice;
    var commodityImg = targetBtn.getAttribute("data-commodityImg");
    var commodityOverview = targetBtn.getAttribute("data-commodityOverview");
    var commodityName = targetBtn.getAttribute("data-commodityName");
    // 在这里可以使用addressId进行相关操作

    // $.ajax({
    //     url:'/userCommodity',
    //     type:'POST',
    //     data:{commodityId:commodityId},
    //     success:function (resp){
    //         // alert(resp)
    //         if (resp){
    //             $.ajax({
    //                 url:'/addCart',
    //                 type:'POST',
    //                 data:{
    //                     commodityId:commodityId,
    //                     total:total,
    //                     commodityImg:commodityImg,
    //                     commodityOverview:commodityOverview,
    //                     commodityName:commodityName
    //                 },
    //                 success:function (resp){
    //                     if (resp){
    //                         alert("添加成功")
    //                     }else {
    //                         alert("添加失败请重试")
    //                     }
    //                 }
    //             })
    //         }else {
    //             // alert("111")
    //             $.ajax({
    //                 url:'/addNumber',
    //                 type:'POST',
    //                 data:{
    //                     commodityId:commodityId,
    //                     commodityPrice:commodityPrice,
    //                 },
    //                 success:function (resp){
    //                     if (resp){
    //                         alert("数量添加成功")
    //                     }else {
    //                         alert("数量添加失败")
    //                     }
    //                 }
    //             })
    //
    //         }
    //     }
    // })
    $.ajax({
        url:'/userCommodity',
        type:'POST',
        data:{commodityId:commodityId},
        success:function (resp){
            // alert(resp)
            if (resp){
                $.ajax({
                    url:'/addCart',
                    type:'POST',
                    data:{
                        commodityId:commodityId,
                        commodityPrice:commodityPrice,
                        commodityImg:commodityImg,
                        commodityOverview:commodityOverview,
                        total:total,
                        commodityName:commodityName
                    },
                    success:function (resp){
                        if (resp){
                            alert("添加购物车成功")
                        }else {
                            alert("添加失败请重试")
                        }
                    }
                })
            }else {
                // alert("111")
                $.ajax({
                    url:'/addNumber',
                    type:'POST',
                    data:{
                        commodityId:commodityId,
                        commodityPrice:commodityPrice,
                    },
                    success:function (resp){
                        if (resp){
                            alert("数量添加成功")
                        }else {
                            alert("数量添加失败")
                        }
                    }
                })

            }
        }
    })
}