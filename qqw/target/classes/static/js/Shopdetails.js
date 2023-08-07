$(function () {
    let args = getQueryStringArgs();
    let arg = args["sid"];
    select();

    function getQueryStringArgs() {
        //取得查询字符串并去掉开头的问号
        var qs = (location.search.length > 0 ? location.search.substring(1) : ""),
            //保存数据的对象
            args = {},
            //取得每一项
            items = qs.length ? qs.split("&") : [],
            item = null,
            name = null,
            value = null,
            //在for 循环中使用
            i = 0,
            len = items.length;
        //逐个将每一项添加到args 对象中
        for (i = 0; i < len; i++) {
            item = items[i].split("=");
            name = decodeURIComponent(item[0]);
            value = decodeURIComponent(item[1]);
            if (name.length) {
                args[name] = value;
            }
        }
        return args;
    }

    function select() {
        $.getJSON("/Commodity/selectid?sid=" + arg, function (data) {
            var html = ''
            data.ListPro.map(function (item, index) {
                html += '            <div class="dn">\n' +
                    '                <img style="width: 100%;height: 100%" src="' + item.img + '">\n' +
                    '            </div>\n' +
                    '            <div id="div4-1">\n' +
                    '                <h4>' + item.name + '</h4>\n' +
                    '                <font style="font-size: 2px;color: #5e5e5e">仅上海，广州，沈阳仓有货！预购从速！</font>\n' +
                    '                <div class="xue">\n' +
                    '                    <p>学员售价：<font style="font-size: 25px;">'+item.price+'</font></p>\n' +
                    '                    <p>*退货补运费*7天无理由退货*24小时快速发货</p>\n' +
                    '                </div>\n' +
                    '                <div class="shu">\n' +
                    '                    <font style="font-size: 15px;color: black">数量：</font>\n' +
                    '                    <button style="width: 20px;height: 25px;text-align: center;" id="xqddnum">-</button>\n' +
                    '                    <input type="text" value="' + item.quantity + '" style="width: 30px;height: 20px;text-align: center;">\n' +
                    '                    <button style="width: 20px;height: 25px;text-align: center;" id="xqaddnum">+</button>\n' +
                    '                </div>\n' +
                    '                <p><font style="color: #5e5e5e;font-size: 12px;margin-left: 25px;">电脑商城发货并提供售后服务，今日下单，明日送达</font></p>\n' +
                    '                <div class="mai">\n' +
                    '                    <button class="btun">立即购买</button>\n' +
                    '                </div>\n' +
                    '                <div id="jia">\n' +
                    '                    <input id="gwc" type="text" value="加入购物车" style="width: 100px;height: 25px;text-align: center;border: 1px solid lightgray;color: #5e5e5e">\n' +
                    '                    <input id="sc" type="text" value="加入收藏" style="width: 90px;height: 25px;text-align: center;border: 1px solid lightgray;color: #5e5e5e" id="sc">\n' +
                    '                </div>\n' +
                    '            </div>';
                $(".div4").html(html);

                $('#gwc').click(function () {
                    $.ajax({
                        url: '/Cart/insertCart?sid='+item.sid,
                        type: 'POST',
                        dataType: 'json',
                        data:{
                            "img" : item.img,
                            "name" : item.name,
                            "price" : item.price,
                            "quantity" : item.quantity,
                        },
                        success:function (data) {
                            if (data.success){
                                alert("添加成功");
                                window.location.href='/Cart/gwc';
                            }else {
                                alert("添加失败");
                            }
                        }
                    })
                })

                $('#xqaddnum').click(function (){
                    $.ajax({
                        url: "/Commodity/xqaddnum?sid="+item.sid,
                        async: false,
                        cache: false,
                        type: 'POST',
                        dataType: 'json',
                        data:{
                            "quantity" : item.quantity,
                        },
                        success:function (data) {
                            if (data.success){
                                // alert("增加成功");
                                window.location.href = '/Commodity/shopxq?sid='+ item.sid;
                            }else {
                                // alert("增加成功");
                                window.location.href = '/Commodity/shopxq?sid='+ item.sid;
                            }
                        }
                    });
                })

                $('#xqddnum').click(function (){
                    $.ajax({
                        url: "/Commodity/xqsubtractnum?sid="+item.sid,
                        async: false,
                        cache: false,
                        type: 'POST',
                        dataType: 'json',
                        data:{
                            "quantity" : item.quantity,
                        },
                        success:function (data) {
                            if (data.success){
                                // alert("减少成功");
                                window.location.href = '/Commodity/shopxq?sid='+ item.sid;
                            }else {
                                // alert("减少成功");
                                window.location.href = '/Commodity/shopxq?sid='+ item.sid;
                            }
                        }
                    });
                })

                $('#sc').click(function (){
                    var name = $('#name').val();
                    var price = $('#price').val();
                    var img = $('#img').val();
                    $.ajax({
                        url: '/Collect/addcollect?sid='+arg,
                        type: 'POST',
                        dataType: 'json',
                        data:{
                            name: item.name,
                            price: item.price,
                            img: item.img,
                        },
                        success:function (data){
                            if (data.success){
                                alert("收藏成功");
                                window.location.href = '/Collect/getAllPerson';
                            }else {
                                alert("收藏失败");
                            }
                        }
                    });
                })
            })
        })
    }
});