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
            min_img.onmousemove = function(e) {
                e = e || window.event;
                //方块的位置
                let x = e.clientX - this.offsetLeft - move.offsetWidth / 2,
                    y = e.clientY - this.offsetTop - move.offsetHeight / 2;
                //方块移动的临界点
                let maxT = this.clientHeight - move.offsetHeight,
                    maxL = this.clientWidth - move.offsetWidth;
                if (x <= 0) {
                    x = 0;
                } else if (x >= maxL) {
                    x = maxL;
                }
                if (y <= 0) {
                    y = 0;
                } else if (y > maxT) {
                    y = maxT;
                }
                move.style.left = x + "px";
                move.style.top = y + "px";
                // 移动大图片的位置， 放大558/314备
                let fdj_img = show_img.querySelector("img");
                let flag = 558 / 314;
                fdj_img.style.left = -flag * x + "px";
                fdj_img.style.top = -flag * y + "px";
            }
        }
    }
}());
fdj.init();