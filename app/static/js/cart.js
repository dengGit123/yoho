var cartNewtipsClose = (function(){
	var $cartnewTips = document.querySelector('.cartnew-tips');
			$car_null = $("#order-pay-wrapper"),
			$car_have = $("#car_shop");
			$add_li = $(".shop_info ul.add_li"),
			$minus = $(".num .minus"),
			$xuan_num = $(".num .val"),
			$add = $(".num .add"),
			$num = $(".clear .shop_num");
	return{
		init(){
			this.event();

		},
		event(e){
			var e = e || window.event;
			$cartnewTips.onclick = function(){
			$cartnewTips.style.display = 'none';
			}
			if(localStorage.length==0){
				$car_null.show();
				$car_have.hide();
			}
			console.log(localStorage.getItem("shopList"));
			let data = localStorage.getItem("shopList");
			data = JSON.parse(data);
			//显示数据
//			console.log(data instanceof Array);
			for(let i=0;i<data.length;i++){
				let str = 	`<li class="clearfix">
					<div class="img float location"><input type="checkbox" class="location" checked="checked"/><a href="detail_page.html"><img src="static/images/${data[i].src}"/></a></div>
			<div class="shop_shuju float location">
				<h2>${data[i].title}</h2>
				<div class="attr float">
					<span>颜色：</span><span class="color">${data[i].color}</span> &nbsp;&nbsp;<span>尺寸：</span><span class="len">${data[i].len}</span>
				</div>
			</div>
			<div class="price float location">
				<p>${data[i].price}</p>
			</div>
			<div class="num float location clearfix">
				<span class="minus">-</span>
				<input type="text" disabled="disabled" value="${data[i].shop_num}" class="val"/>
				<span class="add">+</span>
			</div>
			<div class="sum float location">
				<p></p>
			</div>
			<div class="other float location">
				<span class="remove">删除</span>
				<span class="move">移入收藏</span>
			</div>
				</li>`;
				$li = $(str);
				$add_li.append($li);
//				console.log($add_li.children()[0]);
//				console.log($("input:checked").length);
			}
			let a = $xuan_num;
				console.log(a);
				$num.val("3");
		}
	}
}())
cartNewtipsClose.init();