const show_data = (function(){
	return {
		init(){
			$ul = $(".new ul");
			this.event();
		},
		event(){
			const _this = this;
			sendAjax("../static/json/insertData.json",{}).then(rev=>{
				data = JSON.parse(rev);
				console.log(data);
				for(let i=0;i<data.data.length;i++){
					let str = `<li><div><a href=""><img src="../static/images/${data.data[i].src}" alt="" /></a></div><a href="">${data.data[i].title}</a><p>${data.data[i].price}</p></li>`;
					$li = $(str);
					$ul.append($li);
				}
			})
		}
	}
}());
show_data.init();
