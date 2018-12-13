var colseCode = (function(){
	var $dcCha = document.querySelector('.dc-cha');
<<<<<<< HEAD
	var $codeDownBox = document.querySelector('.code-down-box');
=======
	console.log($dcCha);
	var $codeDownBox = document.querySelector('#code-down-box')
>>>>>>> c39d9cdd1e916541c75d8c6a2b0e5addc8ecf703
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