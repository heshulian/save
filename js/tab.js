$(".list").on("click","li",function(){
	$(this).addClass("on").siblings().removeClass("on");
})
