$(".list").on("click","li",function(){
	var i=$(this).index();
	$(this).addClass("on").siblings().removeClass("on");
	$(".con").eq(i).show().siblings(".con").hide();
})
