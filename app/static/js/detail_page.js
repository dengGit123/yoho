const fdj = (function() {
    const min_img = document.querySelector(".min_img"),
        move = document.querySelector(".move"),
        show_img = document.querySelector(".show_img");
    return {
        init() {
            this.event();
        },
        event() {
            let _this = this;
            min_img.onmouseenter = function(e) {
                move.style.display = "block";
                show_img.style.display = "block";
            }
            min_img.onmouseleave = function() {
                move.style.display = "none";
                show_img.style.display = "none";
            }
            min_img.onmousemove = function(e){
                e = e || window.event;
                //方块的位置
                let x = e.clientX-this.offsetLeft - move.offsetWidth/2,
                y = e.clientY - this.offsetTop-move.offsetHeight/2;
                //方块移动的临界点
                let maxL = this.clientWidth-move.offsetWidth,
                maxT = this.clientHeight - move.offsetHeight;
                if(x<=0){
                    x = 0;
                }else if(x>maxL){
                    x = maxL;
                }
                if(y<=0){
                    y = 0;
                }else if(y>maxT){
                    y = maxT;
                }
                move.style.left = x+"px";
                move.style.top = y+"px";
                //放大图片比列588/314
                let bili = 588/314;
                let img = show_img.querySelector("img");
                img.style.left = -bili*x+"px";
                img.style.top = -bili*y+"px";
            }
        }
    }
}());
fdj.init();