const checkInput = {
    phone(str) {
        let reg = /^\d{11}$/;
        return reg.test(str);
    },
    verify(str) {
        let reg = /^\w{4}$/;
        return reg.test(str);
    },
    password(str) {
        let reg = /^[0-9a-zA-Z]{6,20}$/;
        return reg.test(str);
    }
}
const register = (function() {
    let form_box = document.querySelector("form");
    let inputAll = form_box.querySelector("input"),
        error_title = document.querySelector(".content .register .error_title"),
        img_list = document.querySelector(".img_list"),
        img = img_list.querySelector("img"),
        btn = document.querySelector("button"),
        status = document.querySelector(".status"),
        sub = document.querySelector(".sub");
    return {
        init() {
            this.event();
        },
        event() {
            let _this = this;
            form_box["phone"].oninput = function() {
                let val = this.value;
                //				console.log(val);
                if (checkInput[this.name](val)) {
                    error_title.style.display = "none";
                    this.className = this.className.replace("error", "");
                } else if (val == "") {
                    error_title.style.display = "block";
                    error_title.innerHTML = this.getAttribute("data-error")
                    if ((this.className.indexOf("error")) == -1) {
                        this.className += "error";
                    }
                } else {
                    error_title.style.display = "block";
                    error_title.innerHTML = "手机号码格式不正确,请重新输入";
                    if ((this.className.indexOf("error")) == -1) {
                        this.className += "error";
                    }
                }
            }
            form_box["phone"].onblur = function() {
                let val = this.value;
                if (val != "" && (this.className.indexOf("error")) != -1) {
                    error_title.style.display = "block";
                } else {
                    error_title.style.display = "none";
                    this.className = "";
                }
            }
            let count = 0;
            img_list.onclick = function(e) {
                    //				console.log(1111);
                    e = e || window.event;
                    const target = e.target || e.srcElement;
                    console.log(target.nodeName);
                    if (target.nodeName == "IMG") {
                        count++;
                        console.log(count);
                        if (count == 4) {
                            count = 0;
                        }
                        target.style.marginTop = -(60 * count) + "px";
                    }
                }
                //按钮验证
            btn.onclick = function() {

                    let val = form_box["phone"].value;
                    if (val == "") {
                        error_title.style.display = "block";
                        error_title.innerHTML = form_box["phone"].getAttribute("data-error")
                        if ((this.className.indexOf("error")) == -1) {
                            this.className += "error";
                        }
                    } else if (checkInput["phone"](val)) {
                        let reg = /^1[3589]{1}[0-9]{9}$/;
                        if (reg.test(form_box["phone"].value)) {
                            btn.style.background = "#555";
                            let time = 60;
                            btn_p = btn.nextElementSibling;
                            btn_p.style.display = "block";
                            timer = setInterval(function() {
                                time--;
                                btn.innerHTML = time + "秒可重新发送";
                                if (time == 0) {
                                    btn.innerHTML = "获取短信验证码";
                                    btn.style.background = "#ff1901";
                                    clearInterval(timer);
                                }
                            }, 1000);
                        } else {
                            error_title.style.display = "block";
                            error_title.innerHTML = "手机号码格式错误";
                            this.className += "error";
                        }

                    }
                }
                //密码验证
            form_box["password"].onfocus = function() {

                    let hint = this.parentNode.lastElementChild;
                    let error_title = this.parentNode.querySelector(".error_title");
                    hint.style.display = "block";
                    let spans = status.children;
                    console.log(spans);
                    this.oninput = function() {
                        let val = this.value;
                        //					console.log(val);
                        if (checkInput[this.name](val)) {
                            error_title.style.display = "none";
                            this.className = this.className.replace("error", "");
                            //						console.log(status.firstElementChild);
                        } else if (val == "") {
                            error_title.style.display = "block";
                            error_title.innerHTML = this.getAttribute("data-error")
                            if ((this.className.indexOf("error")) == -1) {
                                this.className += "error";
                            }
                        } else {
                            error_title.style.display = "block";
                            error_title.innerHTML = "密码只支持6-20位字符";
                            if ((this.className.indexOf("error")) == -1) {
                                this.className += "error";
                            }
                        }

                        if (/\d{1,4}/.test(val) || val.indexOf()) {
                            for (let i = 0; i < spans.length; i++) {
                                spans[i].className = "";
                            }
                            spans[0].className = "red";
                        }
                        if (/\d{2}[a-zA-Z]{4,}/.test(val)) {
                            for (let i = 0; i < spans.length; i++) {
                                spans[i].className = "";
                            }
                            for (let i = 0; i < 2; i++) {
                                spans[i].className = "yellow";
                            }
                        }
                        if (/\d{5}[a-zA-Z]{5,}/.test(val)) {
                            for (let i = 0; i < spans.length; i++) {
                                spans[i].className = "";
                            }
                            for (let i = 0; i < spans.length; i++) {
                                spans[i].className = "green";
                            }
                            console.log(3);
                        }
                    }
                }
                //注册验证
            sub.onclick = function() {
                let class_phone = form_box["phone"].className,
                    class_password = form_box["password"].className,
                    val_phone = form_box["phone"].value,
                    val_password = form_box["password"].value;
                //				console.log(class_phone,class_password);
                if ((val_phone != "") && (val_password != "") && (class_phone != "error") && (class_password != "error")) {
                    sendAjax("http://10.36.141.35:7777/wamp64/www/item/yoho/server/php/register.php", {
                        method: 'post',
                        data: {
                            phone: form_box["phone"].value,
                            password: form_box["password"].value
                        }
                    }).then(data => {
                        console.log(data);
                    })
                }
            }
        }
    }
}());
register.init();