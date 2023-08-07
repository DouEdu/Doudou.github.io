// $(function (){
//     f();
//     function f(){
//         $.getJSON("/seekCommodity",function (data) {
//             console.log(data);
//             let html ='';
//             let arr =-1;
//             let len = data.length;
//             // var html =
//             //     '<div class="xin">' +
//             //     '    <p>新到好货</p>' +
//             //     '</div>';
//             for (let i = 0; i < len; i++) {
//                 arr++;
//                 html +=
//                 arr++;
//                 html += '<ul style="display: flex;justify-content: space-between;align-items: center" id="first">\n' +
//                     '            <li>' + data[i].commodityName + '</li>\n' +
//                     '            <li>' + data[i].commodityPrice + '</li>\n' +
//                     '            <li>' + data[i].commodityOverview + '</li>\n' +
//                     '            <li>' + data[i].commodityImg + '</li>\n' +
//                     '    ' +
//                     '            <li><button onclick="deleteShop(event)" data-commodityId="' + data[i].commodityId + '">购买</button></li>\n' +
//                     '            <li><button onclick="updateShop(event)" data-commodityId="' + data[i].commodityId + '">收藏</button></li>\n' +
//                     '        </ul>'
//             }
//                 $("#div5").html(html);
//             })
//         };
//
// })

// $(function (){
//     f();
//     function f(){
//         $.getJSON("/seekCommodity", function (data) {
//             console.log(data);
//             let html = '<ul>';
//             for (let i = 0; i < data.length; i++) {
//                 html += '<li>' +
//                     '<img src="' + data[i].commodityImg + '">' +
//                     '<div class="commodity-info">' +
//                     '<h4>' + data[i].commodityName + '</h4>' +
//                     '<p>' + data[i].commodityOverview + '</p>' +
//                     '<span>' + data[i].commodityPrice + '</span><br>' +
//                     '<button onclick="deleteShop(event)" data-commodityId="' + data[i].commodityId + '">购买</button>' +
//                     '<button onclick="updateShop(event)" data-commodityId="' + data[i].commodityId + '">收藏</button>' +
//                     '</div>' +
//                     '</li><br><br>';
//             }
//             html += '</ul>';
//             $("#div5").html(html);
//         });
//     };
// });

$(function (){
    f();
    function f(){
        $.getJSON("/seekCommodity", function (data) {
            console.log(data);
            let html = '<ul>';

        for (let i = 0; i < data.length; i++) {
            html += '<li id="commodity-' + data[i].commodityId + '" class="commodity-item">' +
                '<img style="width:50px;height:50px"  src=" images/' + data[i].commodityImg + '"  >' +
                '<div class="commodity-info">' +
                '<h4>' + data[i].commodityName + '</h4>' +
                '<p>' + data[i].commodityOverview + '</p>' +
                '<span>' + data[i].commodityPrice + '</span><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' +
                '<button onclick="addCart(event)" data-commodityName="' + data[i].commodityName + '" data-commodityPrice="' + data[i].commodityPrice + '" data-commodityImg="' + data[i].commodityImg + '" data-commodityOverview="' + data[i].commodityOverview + '"   data-commodityId="' + data[i].commodityId + '">立即购买</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' +
                '<button onclick="addFavorite(event)" data-commodityName="' + data[i].commodityName + '" data-commodityPrice="' + data[i].commodityPrice + '" data-commodityImg="' + data[i].commodityImg + '" data-commodityOverview="' + data[i].commodityOverview + '"   data-commodityId="' + data[i].commodityId + '">加入收藏</button>' +
                '</div>' +
                '</li>';
            // 每四个商品换一行
            if ((i+1) % 4 === 0) {
                html += '</ul><ul>';
            }
}
            $("#div5").html(html);
        });
    };
});

function addCart(){
    // 获取当前点击的按钮
    var targetBtn = event.target;
    // 获取对应的addressId
    var commodityId = targetBtn.getAttribute("data-commodityId");
    var commodityPrice = targetBtn.getAttribute("data-commodityPrice");
    var commodityImg = targetBtn.getAttribute("data-commodityImg");
    var commodityOverview = targetBtn.getAttribute("data-commodityOverview");
    var commodityName = targetBtn.getAttribute("data-commodityName");
    var total = commodityPrice
    // 在这里可以使用addressId进行相关操作

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
function addFavorite(){
    // 获取当前点击的按钮
    var targetBtn = event.target;
    // 获取对应的addressId
    var commodityId = targetBtn.getAttribute("data-commodityId");
    var commodityPrice = targetBtn.getAttribute("data-commodityPrice");
    var commodityImg = targetBtn.getAttribute("data-commodityImg");
    var commodityOverview = targetBtn.getAttribute("data-commodityOverview");
    var commodityName = targetBtn.getAttribute("data-commodityName");
    // 在这里可以使用addressId进行相关操作

    $.ajax({
        url:'/ifRepeat',
        type:'POST',
        data:{commodityId:commodityId},
        success:function (resp){
            // alert(resp)
            if (resp){
                $.ajax({
                    url:'/addFavorite',
                    type:'POST',
                    data:{
                        commodityId:commodityId,
                        commodityPrice:commodityPrice,
                        commodityImg:commodityImg,
                        commodityOverview:commodityOverview,
                        commodityName:commodityName
                    },
                    success:function (resp){
                        if (resp){
                            alert("添加收藏成功")
                        }else {
                            alert("添加失败 请重试")
                        }
                    }
                })
            }else {
                alert("添加失败 商品只能收藏一次")
            }
        }
    })


}