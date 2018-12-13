var colseCode = (function(){
	var $dcCha = document.querySelector('.dc-cha');
	//console.log($dcCha);
	var $codeDownBox = document.querySelector('.code-down-box');
	console.log($dcCha);

	//console.log($dcCha);
	var $codeDownBox = document.querySelector('#code-down-box')
	return{
		init(){
			this.event();
		},
		event(e){
			var e = e || window.event;
			$dcCha.onclick = function(){
			$codeDownBox.style.display = "none";
			}
		}
	}
}())
colseCode.init();
//banner
$(function () {
    var which = 0;
    $('.banner-tip li').click(function () {
        which = $(this).index();
        showImage(which);
    });
    function showImage() {
        $('.banner-tip li').removeClass('active');
        $('#banner .banner-inner img').stop().animate({'opacity':0,'z-index':1});
        $('.banner-tip li').eq(which).addClass('active');
        $('#banner .banner-inner img').eq(which).stop().animate({'opacity':1,'z-index':2});       
    }
    function autoPlay() {
        which += 1;
        if (which>7){
            which = 0;
        }else if (which<0){
            which = 7;
        }
        showImage(which);
    }
    $('#banner').mouseleave(autoPlay());
    var start = setInterval(function () {
        autoPlay();
    },2000)

}())
