$(function (){
    f();
    function f(){
        $.getJSON("/addressuser", function (data) {
            console.log("我被执行了！")
            let html = '';
            let arr = -1;
            let len = data.length;
            console.dir(data)
            var addressId ='';
            for (let i = 0; i < len; i++) {
                addressId = data[i].addressId;
                arr++;
                html += '<ul style="display: flex;justify-content: space-between;align-items: center" id="first">\n' +
                    '            <li>' + data[i].addressType + '</li>\n' +
                    '            <li>' + data[i].name + '</li>\n' +
                    '            <li>' + data[i].detailAddress + '</li>\n' +
                    '            <li>' + data[i].addressPhone + '</li>\n' +
                    '    ' +
                    '            <li><button onclick="deleteShop(event)" data-addressId="' + data[i].addressId + '">删除</button></li>\n' +
                    '            <li><button onclick="updateShop(event)" data-addressId="' + data[i].addressId + '" data-name="' + data[i].name + '" data-addressProvince="' + data[i].addressProvince + '" data-addressCity="' + data[i].addressCity + '" data-addressDistrict="' + data[i].addressDistrict + '" data-postcode="' + data[i].postcode + '" data-detailAddress="' + data[i].detailAddress + '" data-addressPhone="' + data[i].addressPhone + '" data-addressType="' + data[i].addressType + '"  >修改</button></li>\n' +
                    '        </ul>'

            }
            $("#kon-1").html(html);
        });

    }
})

function  deleteShop(){
    // 获取当前点击的按钮
    var targetBtn = event.target;
    // 获取对应的addressId
    var addressId = targetBtn.getAttribute("data-addressId");
    // 在这里可以使用addressId进行相关操作

    $.ajax({
        url:"/deleteAddress",
        type:'Post',
        data:{addressId:addressId},
        success:function (resp){
            if (resp){
                alert("删除成功");
                window.location.href="/shouhuogl"
            }else {
                alert("删除失败  请重试");
            }
        }
    })
}
function updateShop(){
    // 获取当前点击的按钮
    var targetBtn = event.target;
    // 获取对应的addressId
    var addressId = targetBtn.getAttribute("data-addressId");
    var name = targetBtn.getAttribute("data-name");
    var addressProvince = targetBtn.getAttribute("data-addressProvince");
    var addressCity = targetBtn.getAttribute("data-addressCity");
    var addressDistrict = targetBtn.getAttribute("data-addressDistrict");
    var postcode = targetBtn.getAttribute("data-postcode");
    var detailAddress = targetBtn.getAttribute("data-detailAddress");
    var addressType = targetBtn.getAttribute("data-addressType");
    var addressPhone = targetBtn.getAttribute("data-addressPhone");
    // 在这里可以使用addressId进行相关操作
    var id={
        addressId:addressId,
    }
    $.ajax({
        // url:"/updateAddress",
        type:'Post',
        contentType:'application/json',
        data:JSON.stringify(id),

        // success:function (resp){
        //     if (resp){
        //         alert("修改成功");
        //         window.location.href="/shouhuogl"
        //     }else {
        //         alert("修改失败  请重试");
        //     }
        // }
    })
    let addressId1 = addressId;
    localStorage.setItem('addressId',addressId1);
    localStorage.setItem('name',name);
    localStorage.setItem('addressProvince',addressProvince);
    localStorage.setItem('addressCity',addressCity);
    localStorage.setItem('addressDistrict',addressDistrict);
    localStorage.setItem('postcode',postcode);
    localStorage.setItem('detailAddress',detailAddress);
    localStorage.setItem('addressType',addressType);
    localStorage.setItem('addressPhone',addressPhone);
    window.location.href="/xiugaidz"
        //?addressId=" + addressId

}

