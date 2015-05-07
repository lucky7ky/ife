var downTimes = 0;//向下方向键被按次数
var upTimes = 0;//向上方向键被按次数
function showData() {
    clear();// 清空数据列表
    var str = document.getElementById("search").value;
    var suggestData = ['a','array','apple','b','boy','c','css','d','day','hi','hello','test', 'test1', 'test2','test3'];
    var ul = document.createElement("ul");
    ul.setAttribute("id", "data");
    var form = document.getElementById("dataForm");
    form.appendChild(ul);
    for ( var i = 0; i < suggestData.length; i++) {
        if ( suggestData[i].charAt(0) == str.charAt(0)) {
            var li = document.createElement("li");
            li.setAttribute("class","dataLi");
            li.innerHTML = suggestData[i];
            li.onclick = function () {
                document.getElementById("search").value = this.innerHTML;//鼠标点击选中时提示内容变更到输入框中
            }
            ul.appendChild(li);
        }
        ul.style.display ="block";
    }

}
function clear() {//清空数据列表
    var ul = document.getElementById("data");
    var form = document.getElementById("dataForm");
    form.removeChild(ul);
}
function selectItem() {
    var search = document.getElementById("search");
    var li = document.getElementById("data").getElementsByTagName("li");
    var dataArr = [];
    if ( li.length > 0) {
        for (var i = 0; i < li.length; i ++) {
            dataArr[i] = li[i].innerHTML;
        }
        if (event.keyCode == 40) {//向下方向键
            for (var j = 0; j < li.length; j++) {
                li[j].style.background="none";//清空背景色
            }
            li[downTimes%dataArr.length].style.background="rgb(228, 227, 224)";//选取时背景色
            downTimes++;
        }
        if (event.keyCode == 38) {//向上方向键
            for (var j = 0; j < li.length; j++) {
                li[j].style.background="none";//清空背景色
            }
            li[(dataArr.length-1-upTimes%dataArr.length)].style.background="rgb(228, 227, 224)";//选取时背景色
            upTimes++;
        }
        if (event.keyCode == 13){ //回车
            for (var j = 0; j < li.length; j++) {
                if (li[j].style.background =="rgb(228, 227, 224)"){//根据背景色判断是否为选中的项
                    search.value = dataArr[j];//选中时提示内容变更到输入框中
                }

            }
        }
    }
}
