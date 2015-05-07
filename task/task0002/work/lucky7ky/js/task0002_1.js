function level1() {
    var hobbyArray = getHobbies('txtFirst',',');
    var pHobby = document.getElementById("p1");
    pHobby.innerHTML = hobbyArray;
}
function level2() {
    var hobbyArray = getHobbies('txtSecond',/[\n\s,，、;；]/);
    var pHobby = document.getElementById("p2");
    pHobby.innerHTML = hobbyArray;
}
function level3() {
    clearCheckBoxes();//清空checkbox和label
    var hobbyArray = getHobbies('txtThird',/[\n\s,，、;；]/);
    for (var i = 0; i < hobbyArray.length; i++) {
        var label = document.createElement("label");
        label.innerHTML = hobbyArray[i];
        var checkBox = document.createElement("input");
        checkBox.setAttribute("type","checkbox");
        var divHobby = document.getElementById("levelThird");
        divHobby.appendChild(label);
        divHobby.appendChild(checkBox);
    }
}
function getHobbies(id, separator) {//获取数组
    var str = document.getElementById(id).value;
    var strs  = new Array();
    strs  = str.split(separator);
    hobbyArray = uniqArray(strs);//数组去重
    for (var i =0; i < hobbyArray.length; i++) {
        if (trim(hobbyArray[i]) =="") {
            hobbyArray.splice(i,1);
        }
    }
    return hobbyArray;
}
function uniqArray(arr) {// 实现去重
    var result = []; 
    for (var i in arr) {
        if (result.indexOf(arr[i]) == -1) {
            result.push(arr[i]);
        }   
    }   
    return result;
}
function trim(str)  {//去除字符串中头尾空字符
    return str.replace(/^\s+|\s+$/g,'')
}
function clearCheckBoxes() {//清空checkbox和label
    var divHobby = document.getElementById("levelThird");
    var labels = divHobby.getElementsByTagName("label");
    var checkBoxes = divHobby.getElementsByTagName("input");
    while (labels.length > 0) { 
        divHobby.removeChild(labels[0]);
    }
    while (checkBoxes.length > 0) {
        divHobby.removeChild(checkBoxes[0]);
    }

}
function onInput () {
    var hobbyArray = getHobbies('txtThird',/[\n\s,，、；]/);
    var warning = document.getElementById("warning");
    if (hobbyArray.length > 10) {
        warning.innerHTML = "爱好不可以超过10个!";
    } else if (0 == hobbyArray.length ){
        warning.innerHTML = "请输入您的爱好!";
    } else {
        warning.innerHTML="";
    }
}
