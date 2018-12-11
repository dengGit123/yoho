// 淡入淡出的轮播图
/*
    {
        el: '目标元素',
        autoplay： false，
        index: 0 // 展示图片的索引
    }

*/

function Swiper(obj) {
    if(typeof obj.el === 'string') {
        obj.el = document.querySelector(obj.el);
    }
    this.$el =  obj.el;
    // 找到小圆点的盒子
    this.$tipsBox = this.$el.querySelector('.banner-tip');
    // 获取所有的小圆点
    this.$allTips = this.$tipsBox.querySelectorAll('li');
    // 找到所有的图片
    this.$allImage = this.$el.querySelectorAll('.slide-wrapper>div');
    // 当前展示图片的索引
    this.index = obj.index || 0;
    this.timer = null;
}
// 初始化函数
Swiper.prototype.init = function() {
    this.showImage();
    this.autoPlay();
}
// 展示图片
Swiper.prototype.showImage = function(index) {
    // 如果用户传入index, 直接替换当前值
    if(index) {
        this.index = index;
    }
    // 判断index和法值
    if(this.index >= this.$allImage.length) {
        this.index = 0;
    }
    for(let i = 0; i < this.$allTips.length; i++) {
        this.$allTips[i].classList.remove('active');
        move(this.$allImage[i], {opacity: 0}, 500, function(obj) {
            obj.classList.remove('active');
        })
    }
    this.$allTips[this.index].classList.add('active');
    this.$allImage[this.index].classList.add('active');
    move(this.$allImage[this.index], {opacity: 100}, 500)

}
// 自动播放
Swiper.prototype.autoPlay = function(index) {
    clearInterval(this.timer);
    this.timer = setInterval(() => {
        this.index++;
        this.showImage();
    }, 2000) 
}