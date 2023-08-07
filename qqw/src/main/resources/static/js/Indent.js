$(function () {
    // let args = getQueryStringArgs();
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
        $.getJSON("/seekUserOrder",function (data) {
            console.log(data);
            var html = '';
            for (let i= 0;i < data.length; i++) {
                html += '<div class="ding">' +
                    '        <font style="font-size: 15px;color: #5e5e5e;">订单号：'+data[i].orderHao+'，下单时间：'+data[i].orderTime+'，收货人：'+data[i].orderName+'</font>' +
                    '    </div>' +
                    '  <div id="div5-1">' +
                    '          <table>' +
                    '              <thead>' +
                    '                <tr>' +
                    '                    <th> </th>' +
                    '                    <th>商品</th>' +
                    '                    <th>单价</th>' +
                    '                    <th>数量</th>' +
                    '                    <th>小计</th>' +
                    '                    <th>售后</th>' +
                    '                    <th>状态</th>' +
                    '                    <th>操作</th>' +
                    '                </tr>' +
                    '              </thead>' +
                    '              <tbody class="tbody">' +
                    '                <tr class="inline">' +
                    '                    <td>' +
                    '                        <img style="width: 60px;height: 60px" src="images/'+data[i].commodityImg+'">' +
                    '                    </td>' +
                    '                    <td>' +
                    '                        <a>'+data[i].commodityName+'</a>' +
                    '                    </td>' +
                    '                    <td>'+data[i].commodityPrice+'</td>' +
                    '                    <td>'+data[i].commodityNumber+'</td>' +
                    '                    <td>'+data[i].orderTotal+'</td>' +
                    '                    <td>' +
                    '                        <a style="color: #428BCA">申请售后</a>' +
                    '                    </td>' +
                    '                    <td>' +
                    '                        <a>已发货</a>' +
                    '                        <br>' +
                    '                        <a style="color: #428BCA">订单详情</a>' +
                    '                    </td>' +
                    '                    <td>' +
                    '                        <button>确认收货</button>' +
                    '                    </td>' +
                    '                </tr>' +
                    '              </tbody>' +
                    '          </table>' +
                    '  </div>';
                $("#div5").html(html);
            }
        })
    }
})