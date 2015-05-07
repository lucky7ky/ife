function countTime() {//倒计时
    var dateStr = IsDate();
    var dateArr = [];
    if (typeof dateStr != "undefined") {
        dateArr = dateStr.split('-');
        document.getElementById('setY').innerHTML = dateArr[0];
        document.getElementById('setM').innerHTML = dateArr[1];
        document.getElementById('setD').innerHTML = dateArr[2];
        var setDate = dateStr.replace(/-/g,'/');
        var endDate = new Date(setDate);
        var startDate = new Date();
        var t = endDate.getTime() - startDate.getTime();
        if (t >= 0) {
            var d=Math.floor(t/1000/60/60/24); 
            document.getElementById("countD").innerHTML = d;
            var h=Math.floor(t/1000/60/60%24); 
            document.getElementById("countH").innerHTML = h;
            var m=Math.floor(t/1000/60%60); 
            document.getElementById("countM").innerHTML = m;
            var s=Math.floor(t/1000%60); 
            document.getElementById("countS").innerHTML = s;
            if (d == 0 && h == 0 && m == 0 && s == 0){
                return;
            }
            var t = setTimeout('countTime()',1000);
        } else {
            alert("请准确输入未来某天日期");
        }
    }
}
function IsDate(){ //验证日期格式
    var str = document.getElementById('date').value.trim();    
    if(str.length!=0) {    
        var reg = /^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/;     
        var r = str.match(reg);     
        if(r==null) {    
            alert('对不起，您输入的日期格式不正确!请按照YYYY-MM-DD格式输入!');  
        } else {
            return str;
        } 
    } else {
        alert('请按照YYYY-MM-DD格式输入日期!');
    } 
}    
String.prototype.trim = function () {//去除空格
    return this.replace (/^\s+|\s+$/g,'');
}
