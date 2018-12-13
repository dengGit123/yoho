var colseCode = (function(){
	var $dcCha = document.querySelector('.dc-cha');
<<<<<<< HEAD
	//console.log($dcCha);
=======
	var $codeDownBox = document.querySelector('.code-down-box');
	console.log($dcCha);
>>>>>>> 34537cfaece534aab2bb2e2a27aded9e91d6ba71
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