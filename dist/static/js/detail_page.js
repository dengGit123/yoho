const fdj = (function() {
    const min_img = document.querySelector(".min_img"),
        move = document.querySelector(".move");
    return {
        init() {
            this.event();
        },
        event() {
            let _this = this;
            min_img.onmouseenter = function(e) {
                move.style.display = "block";
            }
            min_img.onmouseleave = function() {
                move.style.display = "none";
            }
        }
    }
}());
fdj.init();