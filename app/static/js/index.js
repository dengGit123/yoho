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