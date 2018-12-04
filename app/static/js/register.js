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
	let inputAll = form_box.querySelector("input");
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
					console.log(111);
				}else{
					console.log(111111111111111111111111);
				}
			}
		}
	}
}());
register.init();
