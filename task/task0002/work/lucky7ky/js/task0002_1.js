function level1() {
    var hobbyArray = getHobbies('txtFirst',',');
    showHobbies('showHobby','levelFirst');
}
function level2() {
    var hobbyArray = getHobbies('txtSecond',/[\n\s,，、;；]/);
    showHobbies('showHobby','levelSecond');
}
function level3() {
    var hobbyArray = getHobbies('txtThird',/[\n\s,，、;；]/);
    console.log(hobbyArray);
    for (var i = 0; i < hobbyArray.length; i++) {
        var label = document.createElement("label");
        label.setAttribute("for","hobbyArray[i]");
        label.innerHTML = hobbyArray[i];
        var checkBox = document.createElement("input");
        checkBox.setAttribute("type","checkbox");
        checkBox.setAttribute("id","hobbyArray[i]");
        var divHobby = document.getElementById("levelThird");
        divHobby.appendChild(label);
        divHobby.appendChild(checkBox);
    }
}
function getHobbies(id, separator) {//获取数组
    var str = document.getElementById(id).value;
    var strs  = new Array();
    strs  = str.split(separator);
    hobbyArray = uniqArray(strs);
    for (var i =0; i < hobbyArray.length; i++) {
        if (trim(hobbyArray[i]) =="") {
            hobbyArray.splice(i,1);
        }
    }
    return hobbyArray;
}
function showHobbies(p,div) {
    var pHobby  = document.createElement("p");
    pHobby.setAttribute("class",p);
    var divHobby = document.getElementById(div);
    divHobby.appendChild(pHobby);
    pHobby.innerHTML = hobbyArray;
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
function OnInput (event) {
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
//TODO 超过10个爱好无法进行后面操作
