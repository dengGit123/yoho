const go_top = (function(){
	let $go_top = $(".go_top");
	let timer = null
	return {
		init(){
			this.event();
		},
		event(){
			let _this = this;
			$(document).on("scroll",function(){
				if($(this).scrollTop()>100){
					$go_top.css("display","block");
				}else{
					$go_top.css("display","none");
				}
			});
			$(".go_top .go").on("click",function(){
				console.log(111);
				clearInterval(timer);
				let top = $(document).scrollTop();
				timer = setInterval(function(){
					top -= 6;
					$(document).scrollTop(top);
					if(top<=0){
						$(document).scrollTop(0);
						clearInterval(timer);
					}
				},10);
			});
		}
	}
}());
go_top.init();
