// 2. JavaScript数据类型及语言基础 
// 实践判断各种数据类型的方法 
// 判断arr是否为一个数组，返回一个bool值
function isArray(arr) {
    return arr instanceof Array;
}
/*
console.log(isArray([0, 1]));
console.log(isArray("hello"));
console.log(isArray(0));
*/
// 判断fn是否为一个函数，返回一个bool值
function isFunction(fn) {
    return fn instanceof Function;
}
/*
var a = function() {};
console.log(isFunction(a));
var b = "hello";
console.log(isFunction(b));
*/
//了解值类型和引用类型的区别，了解各种对象的读取、遍历方式
//被复制的对象类型会被限制为数字、字符串、布尔、日期、数组、Object对象。不会包含函数、正则对象等

function cloneObject(src) {
    var newObj;
    if (typeof src == "object") {
        if (src instanceof Array) {
            newObj = [];
        } else {
            newObj = {};
        }
        for (var i in src) {
            if (typeof src[i] == "object") {
                newObj[i] = cloneObject(src[i]);
            } else {
                newObj[i] = src[i];
            }
        }
    } else {
        newObj = src;
    }
    return newObj;
}
/* 测试用例：
var srcObj = {
    a: 1,
    b: {
        b1: ["hello", "hi"],
        b2: "JavaScript"
    }
};
var abObj = srcObj;
var tarObj = cloneObject(srcObj);

srcObj.a = 2;
srcObj.b.b1[0] = "Hello";

console.log(abObj.a);// 2
console.log(abObj.b.b1[0]);//"Hello"

console.log(tarObj.a);      // 1
console.log(tarObj.b.b1[0]);    // "hello"

console.log(cloneObject([0, 1, 2]));//测试数组

console.log(cloneObject(1)); //测试数字

console.log(cloneObject(true));//测试布尔值

console.log(cloneObject("test"));//测试字符串
*/
//学习数组、字符串、数字等相关方法
//对数组进行去重操作，只考虑数组中元素为数字或字符串，返回一个去重后的数组

function uniqArray(arr) {
    var result = [];
    for (var i in arr) {
        if (result.indexOf(arr[i]) == -1) {
            result.push(arr[i]);
        }
    }
    return result;
}
/* 使用示例
var a = [1, 3, 5, 7, 5, 3];
var b = uniqArray(a);
console.log(b); // [1, 3, 5, 7]
var c = ["a", "b", "c", "a", "c"];
var d = uniqArray(c);
console.log(d);
*/
// 对字符串头尾进行空格字符的去除、包括全角半角空格、Tab等，返回一个字符串
// 先暂时不要简单的用一句正则表达式来实现

/*function trim(str) { //去掉字符串所有空格字符
    var result = "";
    for (var i = 0; i < str.length; i++) {
        if (str[i] != " ") {
            result += str[i]
        }
    }
    return result;
}
console.log(trim("  1 2 3   "));// '123'
*/
/* 
function trim(str) {// 只去除头尾空格字符
    var i , j;
    for (i = 0; i < str.length; i++) {
        if (str.charAt(i) != " " && str.charAt(i) != "\t") {
            break;
        }
    }
    for (j = str.length-1; j >= 0; j--) {
        if (str.charAt(j) != " " && str.charAt(j) != "\t") {
            break;
        }
    }
    return str.slice(i, j+1);
}
*/
function trim(str) {//正则表达式
    return str.replace(/^\s+|\s+$/g,"");
}
// 使用示例
var str = '   hi!  ';
str = trim(str);
console.log(str); // 'hi!'

