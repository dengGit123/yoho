 const checkedInput = {
//	密码验证
	password(str){
		const reg = /[0-9A-Za-z]{6,20}/;
		return reg.test(str);
	}
}
const login = (function(){
	let code = document.querySelector("form .code>img"),
	//密码登录
	pass_login = document.querySelector("form .pass_login");
	//扫码登录
	let scan_code = document.querySelector("form .scan_code");
	let form_box = document.querySelector("form"),
	btn = document.querySelector("button");
	let img_list = document.querySelector(".img_list");
	return{
		init(){
			this.event();
		},
		event(){
			let _this = this;
			code.onclick = function(){
				if(this.className == "scan"){
					scan_code.style.display = "none";
					pass_login.style.display = "block";
					this.className = "pass";
				}else{
					this.className = "scan";
					scan_code.style.display = "block";
					pass_login.style.display = "none";
				}
				
			}
			//电话或邮箱
			form_box["tel_email"].onfocus = function(){
				_this.hideError(this);
			}
			form_box["tel_email"].onblur = function(){
				_this.showError(this);
			}
			//密码
			form_box["password"].onfocus = function(){
				_this.hideError(this);
			}
			form_box["password"].onblur = function(){
				_this.showError(this);
			}
			btn.onclick = function(){
				if(form_box["tel_email"].value != "" && form_box["password"].value !=""){
					sendAjax("http://10.36.141.35:7777/server/php/login.php",{
						method: 'post',
        				data: {
        					phone:form_box["tel_email"].value,
        					password:form_box["password"].value
        				}
					}).then(data =>{
//						console.log(data,typeof data);
						if(data == "1"){
							location.assign("index.html");
						}else{
							console.log(111);
							let p = form_box["password"].nextElementSibling;
							form_box["password"].style.border = "1px solid red";
							p.style.display = "block";
							p.innerHTML= `<span class="iconfont icon-quancha"></span>账户名或密码不正确,建议您找回登录密码或者联系在线客服`;
						}
					})
				}
			}
			let count = 0;
			img_list.onclick = function(e){
				e = e || window.event;
				const target = e.target || e.srcElement;
				if(target.nodeName == "IMG"){
					count ++;
					console.log(count);
					if(count ==4){
						count = 0;
					}
					target.style.marginTop = -60*count+"px";
				}
			}
		},
		hideError(ele){
			ele.style.border= "1px solid #dbdbdb";
			ele.nextElementSibling.style.display = "none";
		},
		showError(ele){
			let value = ele.value;
			if(value==""){
					console.log(ele.getAttribute("data-error"));
					ele.style.border = "1px solid red"
					ele.nextElementSibling.style.display = "block";
					ele.nextElementSibling.innerHTML= `<span class="iconfont icon-quancha"></span>${ele.getAttribute("data-error")}`;
			}else{
						if(ele.className == "email"){
							const reg = /^1[3578]\d{9}$/;
							console.log(reg.test(value));
							if(!reg.test(value)){
//								ele.style.border = "1px solid red";
//								ele.nextElementSibling.style.display = "block";
//								ele.nextElementSibling.innerHTML= `<span class="iconfont icon-quancha"></span>手机号码格式不正确，请重新输入`;
								if((value.indexOf("@") ==-1) || (value.indexOf(".com") == -1)){
									ele.style.border = "1px solid red";
									ele.nextElementSibling.style.display = "block";
									ele.nextElementSibling.innerHTML= `<span class="iconfont icon-quancha"></span>邮箱格式不正确，请重新输入`;
								}
							}
							
						}else if(ele.className == "mima"){
							console.log(111);
							if(!checkedInput[ele.name](value)){
								ele.style.border = "1px solid red";
								ele.nextElementSibling.style.display = "block";
								ele.nextElementSibling.innerHTML= `<span class="iconfont icon-quancha"></span>请输入长度为6-20字符的密码`;
							}
						}
				}
			}
		}
}());
login.init();
