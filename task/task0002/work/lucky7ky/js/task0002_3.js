var bannerSlide = {
    config:{
               index:0,
               n:0,
               leftnumber:0,
               auto:true,
           },
    init:function() {
             this.banner = document.getElementById('banner');
             this.slide_img = document.getElementsByClassName('slide_img')[0];
             this.slide_a = document.getElementsByClassName('slide_btn')[0].getElementsByTagName('a');
             this.img_arr = document.getElementsByClassName('slide_img')[0].getElementsByTagName('img');
             if (this.config.auto) {
                 this.play();
             };
             this.click();
         },
    play:function() {
             this.banner.timer = setInterval(function () {
                 bannerSlide.config.index++;
                 if (bannerSlide.config.index >= bannerSlide.img_arr.length) {
                     bannerSlide.config.index = 0;
                 };
                 bannerSlide.transit();
             },3000)
         },
    transit:function() {
                if (!this.slide_img.timer) {
                    this.slide_img.timer = setInterval(function () {
                        bannerSlide.config.n++;
                        if(bannerSlide.config.n > 20) {
                            bannerSlide.config.n = 0;
                            clearInterval(bannerSlide.slide_img.timer);
                            bannerSlide.slide_img.timer = null;
                            bannerSlide.circle();
                            return;
                        }
                        bannerSlide.config.leftnumber = -(40*bannerSlide.config.n+(bannerSlide.config.index-1)*800);
                        bannerSlide.slide_img.style.left = bannerSlide.config.leftnumber+"px";
                    },20)
                }
            },
    circle:function() {
               for (var i = 0; i < this.slide_a.length; i++){
                   this.slide_a[i].style.background = "none";
               }
               this.slide_a[bannerSlide.config.index].style.background = "#F9F5F2";
           },
    click:function() {
              for (var i = 0; i < this.slide_a.length; i++) {
                  this.slide_a[i].index = i;
                  this.slide_a[i].onclick = function() {
                      bannerSlide.config.index = this.index;
                      bannerSlide.config.leftnumber = -(bannerSlide.config.index)*800;
                      bannerSlide.slide_img.style.left = bannerSlide.config.leftnumber+"px";
                      bannerSlide.circle();
                      clearInterval(bannerSlide.banner.timer);
                      bannerSlide.play();
                  }
              }
          }

}
bannerSlide.init();


