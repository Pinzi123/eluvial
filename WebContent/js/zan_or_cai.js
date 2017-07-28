// JavaScript Document
//点赞点踩的效果
function zan(id,zan,cai){
  $(".zan").click(function(){
	   $(".zan .addone").show();
	  $(".zan .addone").animate({top:'-100px'},"slow",function(){
		  $(this).hide();
		  var num=parseInt(zan)+1;
		  $(".zan .d_num").text("赞("+num+")");
		  $(".cai").unbind();
		  $.post("addzan.action",{
			  id:id
		  });
	  });
  });
   $(".cai").click(function(){
	   $(".cai .addone").show();
	  $(".cai .addone").animate({top:'-100px'},"slow",function(){
		  $(this).hide();
		  var num=parseInt(cai)+1;
		  $(".cai .d_num").text("踩("+num+")");
		  $(".zan").unbind();
		  $.post("addcai.action",{
			  id:id
		  });
	  });
  });
}