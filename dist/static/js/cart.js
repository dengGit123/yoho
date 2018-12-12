var cartNewtipsClose = (function(){
	var $cartnewTips = document.querySelector('.cartnew-tips');
	return{
		init(){
			this.event();
		},
		event(e){
			var e = e || window.event;
			$cartnewTips.onclick = function(){
			$cartnewTips.style.display = 'none';
			}
		}
	}
}())
cartNewtipsClose.init();