var drag = {
    config:{ // 配置初始参数
               left:0,
               top:0,
               x:0,
               y:0,
               n:0,
           },
    init: function() {
              this.content = document.getElementsByClassName("content")[0];
              this.containerLeft = document.getElementById("left");
              this.containerRight = document.getElementById("right");
              this.box = document.getElementsByClassName("box");

              for(var i = 0; i < this.box.length; i++) {
                  this.box[i].onmousedown = function(evt) { // 给每个长方形box添加onmousedown事件
                      var oEvent = evt || event;
                      drag.config.x = oEvent.clientX - drag.content.offsetLeft - this.offsetLeft;//获取鼠标与长方形box的水平相对位置差
                      drag.config.y = oEvent.clientY - drag.content.offsetTop - this.offsetTop;//获取鼠标与长方形box的垂直相对位置差
                      drag.config.n = this.id; //记录n 便于识别哪个box被触发
                      document.onmousemove = function (evt) {// 添加onmousemove 事件
                          var oEvent = evt || event;
                          drag.config.left = oEvent.clientX - drag.content.offsetLeft -  drag.config.x;//计算box的新位置 (与鼠标的相对位置不变）
                          drag.config.top = oEvent.clientY - drag.content.offsetTop -  drag.config.y;
                          drag.box[drag.config.n].style.left = drag.config.left + "px";//实现box随鼠标移动
                          drag.box[drag.config.n].style.top = drag.config.top  + "px";
                          drag.box[drag.config.n].style.cursor = "move";
                          drag.mouseUp();//设置onmouseup
                      }
                  }
              }
          },
    mouseUp:function () {
                drag.box[drag.config.n].onmouseup = function () { // 添加onmouseup事件
                    if (drag.config.left >= 0 && drag.config.left <= 400 && drag.config.top >=0 && drag.config.top <= 550) {//判断移动过程中长方形box是否超过class为content的div的边界
                        document.getElementById("hint").innerHTML = "";//在边界内释放 则清空提示内容
                        this.style.cursor = "pointer";
                        drag.active();//设置拖拽释放的效果
                        drag.updatePosition(drag.containerLeft);//对左边容器的box位置进行处理，使box位置依次紧凑
                        drag.updatePosition(drag.containerRight);//对右边容器的box位置进行处理，使box位置依次紧凑
                        document.onmousemove = null;//在边界内正常释放 清空onmousemove,使box着陆
                        this.onmouseup= null;// 清空onmouseup
                    }  else {
                        document.getElementById("hint").innerHTML = "长方形越狱啦";//当超过边界释放时 出现提示
                    }
                } 

            },
    active:function () {
               var insideLeftNumber = this.containerLeft.getElementsByTagName("div").length;//获取左边容器的box个数
               var insideRightNumber = this.containerRight.getElementsByTagName("div").length;//获取右边容器的box个数
               if(drag.config.left <= 200) { //判断box的位置 决定加入左边还是右边容器  
                   drag.box[drag.config.n].style.left = 51 + "px";//将box添加到左边容器 （50px的padding+1px的border）
                   if (drag.box[drag.config.n].parentNode != this.containerLeft) { //判断box是否已是左边容器的子元素
                       drag.box[drag.config.n].style.top = 51 + 50*insideLeftNumber + "px";//当box来自右边容器，计算box添加到左边容器的top位置(box高度为50px) 
                       this.containerLeft.appendChild(drag.box[drag.config.n]);//相应修改DOM
                   } else {
                       drag.box[drag.config.n].style.top = 51 + 50*insideLeftNumber-50 + "px";//当box原属于左边容器，释放时回归原位
                   }
               } else { 
                   drag.box[drag.config.n].style.left = 349 + "px";//将box添加到右边容器
                   if (drag.box[drag.config.n].parentNode != this.containerRight) {//判断box是否已是右边容器的子元素
                       drag.box[drag.config.n].style.top = 51 + 50*insideRightNumber + "px";//计算top 添加到其他box的下面
                       this.containerRight.appendChild(drag.box[drag.config.n]);//相应修改DOM
                   } else {
                       drag.box[drag.config.n].style.top = 51 + 50*insideRightNumber-50 + "px";//当box原属于右边容器，释放时回归原位
                   }
               }

           },
    updatePosition:function (container){
                       console.log(1);
                       var insideBoxes = container.getElementsByTagName("div");
                       for( var j=0; j < insideBoxes.length; j++) {
                           insideBoxes[j].style.top = 51 + j*50 + "px";//获取新的top值，使box在容器中依次紧凑排序
                       }
                   }
}
drag.init();
