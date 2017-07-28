$( window ).on( "load", function(){
		getWord();
/*	var $pics=$(".pic li");*/
	var $options=$(".select_pic>span");
	for(var i=0;i<$options.length;i++){		
	 (function(){  
	    var p=i; 
		$options[i].onclick=function(evnet){
			var ad="ad_pic";
			ad=ad+p;
			$(".pic li:visible").hide("slow");
			$("."+ad).show("slow");
			event.stopPropagation();
		}
		
	 })();
	}
	//验证登录
	login_val();
	
	});
function addword(newInfo){
	console.log(newInfo);
	var newlist=newInfo.showapi_res_body.pagebean.contentlist;
	$.each(newlist,function(index, el) {
		var one_new=$('<div>').addClass('one_new').appendTo($( ".new_tutiao"));
			$('<h3>').html(newlist[index].title).appendTo(one_new);
			$('<h5>').html("来源："+newlist[index].source).appendTo(one_new);
			$('<h5>').html(newlist[index].pubDate).appendTo(one_new);
			$('<span>').html(newlist[index].desc).appendTo(one_new);
	        $("<a>").attr({'href':newlist[index].link,'target':'_blank'}).html("更多").appendTo(one_new);
	});
}
function getWord(){
	$.ajax({
		url : 'someNews.action',
		type : 'post',
		dataType : 'text',
		success : function(data) {
			if (data!=null) {
				var newInfo= JSON.parse(data);
				addword(newInfo);
			} 
		},
		error : function() {
			alert("无法获取远程数据,请检查你的网络连接或者设置");
		}
	});
}
function login_val(){
	$.ajax({
		url : 'login_val.action',
		type : 'post',
		dataType : 'text',
		success : function(data) {
			if(data!="noexist"){
				$("<a>").attr("href","../userInfo.jsp").text(data).appendTo($(".nav_right p"));
			}else{
				$("<a>").attr("href","../login.jsp").text("登录").appendTo($(".nav_right p"));
			}
			return;
		},
		error : function() {
			return false;
			alert("无法获取远程数据,请检查你的网络连接或者设置");
		}
	});
}