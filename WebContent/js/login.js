
function login_val(){
	$.ajax({
		url : 'login_val.action',
		type : 'post',
		dataType : 'text',
		async: false,
		success : function(data) {
			if(data!="noexist"){
				$("<a>").attr("href","userInfo.jsp").text(data).appendTo($(".nav_right p"));
				$("#user").text(data);
				username=data;
			}else{
				$("<a>").attr("href","login.jsp").text("登录").appendTo($(".nav_right p"));
				$("#user").text("请登录");
			}
			return;
		},
		error : function() {
			$("<a>").attr("href","login.jsp").text("登录").appendTo($(".nav_right p"));
			return false;
			//alert("无法获取远程数据,请检查你的网络连接或者设置");
		}
	});
}