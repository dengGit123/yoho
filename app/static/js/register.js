const checkInput = {
	phone(str){
		let reg = /^\d{11}$/;
		return reg.test(str);
	},
	verify(str){
		let reg = /^\w{4}$/;
		return reg.test(str);
	},
	password(str){
		let reg = /^[0-9a-zA-Z]{6,20}$/;
		return reg.test(str);
	}
}
const register = (function(){
	let form_box = document.querySelector("form");
	let inputAll = form_box.querySelector("input"),
	error_title = document.querySelector(".content .register .error_title");
	return {
		init(){
			this.event();
		},
		event(){
			let _this = this;
			form_box["phone"].oninput = function(){
				let val = this.value;
				console.log(val);
				if(checkInput[this.name](val)){
					error_title.style.display = "none";
					this.className = this.className.replace("error","");
				}else if(val==""){
					error_title.style.display = "block";
					error_title.innerHTML = this.getAttribute("data-error")
					if((this.className.indexOf("error"))==-1){
						this.className += "error" ;
					}
				}else{
					error_title.style.display = "block";
					error_title.innerHTML = "手机号码格式不正确,请重新输入";
					if((this.className.indexOf("error"))==-1){
						this.className += "error" ;
					}
				}
			}
			form_box["phone"].onblur = function(){
				let val = this.value;
				if(val !=""&& (this.className.indexOf("error"))!=-1){
					error_title.style.display = "block";
				}else{
					error_title.style.display = "none";
					this.className = "";
				}
			}
		}
	}
}());
register.init();
