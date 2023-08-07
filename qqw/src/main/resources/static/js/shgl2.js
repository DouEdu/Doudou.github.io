$(function (){
    // let args = getQueryStringArgs();
    // let arg = args["did"];
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

    $('#tianjia').click(function (){
        var name = $("#name").val();
        var province = $("#province").val();
        var city = $("#city").val();
        var district = $("#district").val();
        var postcode = $("#postcode").val();
        var detailAddress = $("#detail").val();
        var phone = $("#phone").val();
        var phone1 = $("#phone1").val();
        var type = $("#type").val();
        var address={
            name:name,
            addressProvince:province,
            addressCity:city,
            addressDistrict:district,
            postcode:postcode,
            detailAddress:detailAddress,
            addressPhone:phone,
            telepHone:phone1,
            addressType:type
        }
        $.ajax({
            url:'/add',
            type : "POST",
            contentType:'application/json',
            data:JSON.stringify(address),
            success : function (data) {
                if (data){
                    alert("添加成功");
                    window.location.href='/shouhuogl';
                }else {
                    alert("添加失败");
                }
            }
        })
    })
})