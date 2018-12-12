const fdj = (function() {
    const min_img = document.querySelector(".min_img"),
        move = document.querySelector(".move"),
        show_img = document.querySelector(".show_img");
    let shop_attr = document.querySelector(".attr"),
    color = shop_attr.querySelector(".color p"),
    len = shop_attr.querySelector(".length ul"),
    minus = document.querySelector(".number .minus"),
    num = document.querySelector(".number .num"),
   	add = document.querySelector(".number .add"),
   	go_car = document.querySelector(".btn .go_car"),
   	p = document.querySelector(".error");
   	
    return {
        init() {
            this.event();
        },
        event() {
            let _this = this;
            min_img.onmouseenter = function(e) {
                move.style.display = "block";
                show_img.style.display = "block";
            }
            min_img.onmouseleave = function() {
                move.style.display = "none";
                show_img.style.display = "none";
            }
            min_img.onmousemove = function(e){
                e = e || window.event;
                //方块的位置
                let x = e.clientX-this.offsetLeft - move.offsetWidth/2,
                y = e.clientY - this.offsetTop-move.offsetHeight/2;
                //方块移动的临界点
                let maxL = this.clientWidth-move.offsetWidth,
                maxT = this.clientHeight - move.offsetHeight;
                if(x<=0){
                    x = 0;
                }else if(x>maxL){
                    x = maxL;
                }
                if(y<=0){
                    y = 0;
                }else if(y>maxT){
                    y = maxT;
                }
                move.style.left = x+"px";
                move.style.top = y+"px";
                //放大图片比列588/314
                let bili = 588/314;
                let img = show_img.querySelector("img");
                img.style.left = -bili*x+"px";
                img.style.top = -bili*y+"px";
            }

            //选择商品的操作
            len.onclick = function(e){
            	e = e || window.event;
            	const target = e.target || e.srcElement;
            	if(target.nodeName == "LI"){
            		for(let i=0;i<this.children.length;i++){
            			this.children[i].className = "";
            		}
            		target.className = "focus";
            		p.style.display = "none";
            	}
            }
            //添加数量
            add.onclick = function(){
//          	for(let i=0;i<len.children.length;i++){
//          			if(len.children[i].className.indexOf("focus")==-1){
//          				p.style.display = "block";
//          				break;
//          			}
//          	}
//          	console.log(p.style.display);
            	if(p.style.display == "none"){
            		num.innerHTML = Number.parseInt(num.innerHTML)+1;
            		minus.style.color = "#000000";
            	}
            	
            }
            //减少数量
            minus.onclick = function(){
            	if(Number.parseInt(num.innerHTML)>1){
            		num.innerHTML = Number.parseInt(num.innerHTML)-1;
            	}else if(Number.parseInt(num.innerHTML)==1){
            		this.style.color = "#808080";
            	}
            }
            //加入购物车
            data = {}
            go_car.onclick = function(){
//          	_this.getData();
			sendAjax("static/json/shop.json",{
				method:"get"
			}).then(rev=>{
				rev = JSON.parse(rev);
//				console.log(rev.data);
				rev.data[0].shop_num = num.innerHTML;
//				console.log(rev.data[0]);
				_this.setItem(rev.data[0]);
			})
			
            }
        },
        // 把商品数据存储到本地
        setItem(data){
        	  // 现获取原有数据
        	  var shopList = localStorage.getItem("shopList") || "[]";
        	   shopList = JSON.parse(shopList);
        	    // 在把新数据push到原有数据
                shopList.push(data);
              	// 在把全部数据存到本地
               	localStorage.shopList = JSON.stringify(shopList);
        },
                    //获取数据
//      getData(){
//          sendAjax("http://localhost:8888/item/yoho/server/php/getData.php",{}).then(rev=>{
////          	console.log(rev);
////          	rev = JSON.parse(rev);
////          	console.log(rev);
//				p = shop_info = document.querySelector(".shop_info p");
//				p.innerHTML = rev;
//          })
//      }
    }
}());
fdj.init();