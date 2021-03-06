var shop={};
var username=null;
var pagenum=0,i=0;
$( window ).on( "load", function(){
	//验证登录
	login_val();
	if(username!=null){
		getparkOrder();
	    $(document).bind("scroll",getpoMore);
	    
	$("#FS a").click(function(e){
		$(document).unbind("scroll");
		pagenum=0;
		shop={};
		e.stopPropagation();
        i=0;

		getFSOrder();
		$(".native").removeClass("native");
		$(this).addClass("native");
		$(".current").removeClass("current");
		$(".use:first").addClass("current");
		$(document).bind("scroll",getfoMore);
	});
	
	$("#park a").click(function(e){
		$(document).unbind("scroll");
		pagenum=0;
		shop={};
		e.stopPropagation();
        i=0;

		getparkOrder();
		$(".native").removeClass("native");
		$(this).addClass("native");
		$(".current").removeClass("current");
		$(".use:first").addClass("current");
		$(document).bind("scroll",getpoMore);
	});
	
	
	}
});
function login_val(){
	$.ajax({
		url : 'login_val.action',
		type : 'post',
		dataType : 'text',
		async: false,
		success : function(data) {
			if(data!="noexist"){
				$("<a>").attr("href","userInfo.jsp").text(data).appendTo($(".nav_right p"));
				$("#user").html(data+'<a href="#" onclick="exist()">注销</a>');
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
//获得预定停车的订单
function getparkOrder(){
	$.ajax({
		url : 'querypOrders.action',
		type : 'post',
		data:{pageNum:pagenum},
		dataType : 'text',
		success : function(data) {
			if (data!="{}") {
				pagenum++;
				data=JSON.parse(data);
				var list=data.porders;
				for (var key in list) {//遍历第二个json对象添加到第一个json中s	
				shop[i] = list[key];
				i++;
				};
				addparkOrder(shop);
				$(".use").unbind();
				select_order(shop);
			}else{
				to_the_end();
			} 
		},
		error : function() {
			return;
		}
	});
	
}
//将预定停车订单添加页面
function addparkOrder(data){
	$(".order_list tr").remove(".addinfo");
	$.each(data,function(index, el) {
		if(el!==undefined){
		var $tr=$("<tr>").addClass("addinfo").appendTo($(".order_list"));
		var $td=$("<td>").attr("align","center").appendTo($tr);
		$("<p>").html("店铺名："+el.parking_name).appendTo($td);
		$("<p>").html("下单时间："+el.co_date).appendTo($td);
		$("<td>").attr("align","center").html(el.car_id).appendTo($tr);
		var con=null;
		if(el.confirm_leave==0)
			con="未使用";
		else
		   con="已使用";
		$("<td>").attr("align","center").html(con).appendTo($tr);
		$("<td>").attr("align","center").html('<p>预定到达时：'+el.reach_time+"</p><p>预定离开时间："+el.leave_time+"</p>").appendTo($tr);
		/*$("<td>").attr("align","center").html('<p><a href="#">取消</a></p><p><a href="#">修改</a></p>').appendTo($tr);*/
		var $op=$("<td>").attr("align","center").appendTo($tr);
		if(el.confirm_leave==0){
		var p1=$("<a>").attr({"order_id":el.id,"order_type":"park","href":"#"}).text("取消");
//	    var p2=$("<a>").attr({"order_id":el.id,"order_type":"park","href":"#"}).text("修改");
	    $("<p>").append(p1).appendTo($op);
	    var l=escape(el.leave_time);
	    $("<p>").append("<a href=updatePorder.jsp?id="+el.id+"&parking_id="+el.parking_id+"&leave="+l+">修改</a>").appendTo($op);
		}else{
			$("<p>").text("取消").appendTo($op);
		    $("<p>").text("修改").appendTo($op);
		}
		}
		});
	$(".addinfo p a").unbind();
	$(".addinfo p a").bind("click",function(){
		var id=$(this).attr("order_id");
		var type=$(this).attr("order_type");
		deleteorder(id,type);
	});
}
//显示到底
function to_the_end(){
	var $tr=$("<tr>").addClass("addinfo").appendTo($(".order_list"));
	var $td=$("<td>").attr({"colspan":"5",
		"align":"center"}).appendTo($tr);
	$td.html("<p style='line-height:30px;border:1px solid red;'>到底了</p>");
	$(document).unbind("scroll");
}

function select_order(data){
	$(".use").click(function(e){
		e.stopPropagation();
		$(".current").removeClass("current");
		$(this).addClass("current");
		var type=$(this).attr("type");
		
		filter_order(data,type);
	});
}
//对已查询的订单进行筛选
function filter_order(list,type){

	var copy_list= jQuery.extend(true, {}, list); 
	//已经使用
	if(type==1){
		$.each(list,function(index, el) {
			if(el.confirm==0||el.confirm_leave==0)
				delete copy_list[index];
		});
	}else if(type==0){//未使用
		$.each(list,function(index, el) {
		if(el.confirm==1||el.confirm_leave==1)
			delete copy_list[index];
		});
	}
	if(list[0].hasOwnProperty('confirm_leave'))
	    addparkOrder(copy_list);
	else
		addFSorder(copy_list);
}
//获得维修保养订单
function getFSOrder(){
	$.ajax({
		url : 'queryFSorder.action',
		type : 'post',
		data:{pageNum:pagenum},
		dataType : 'text',
		success : function(data) {
			if (data!="{}")  {
				pagenum++;
				data=JSON.parse(data);
				for (var key in data) {//遍历第二个json对象添加到第一个json中s	
					shop[i] = data[key];
					i++;
					};
				addFSorder(data);
				$(".use").unbind();
				select_order(data);
			}else{
				to_the_end();
			}  
		},
		error : function() {
			return;
		}
	});
}
//将维修保养订单添加页面
function addFSorder(data){
$(".order_list tr").remove(".addinfo");
	$.each(data,function(index, el) {
		var $tr=$("<tr>").addClass("addinfo").appendTo($(".order_list"));
		var $td=$("<td>").attr("align","center").appendTo($tr);
		$("<p>").html("店铺名："+el.fs_name).appendTo($td);
		$("<p>").html("下单时间："+el.order_date).appendTo($td);
		$("<td>").attr("align","center").html(el.car_id).appendTo($tr);
		var con=null;
		if(el.confirm==0)
			con="未使用";
		else
		   con="已使用";
		$("<td>").attr("align","center").html(con).appendTo($tr);
		$("<td>").attr("align","center").html(el.notes).appendTo($tr);
		var $op=$("<td>").attr("align","center").appendTo($tr);
	    if(el.confirm==0){	    	
			var p1=$("<a>").attr({"order_id":el.id,"order_type":"fs","href":"#"}).text("取消");
		    var p2=$("<a>").attr({"order_id":el.id,"order_type":"fs","href":"#"}).text("修改");
	        $("<p>").append(p1).appendTo($op);
	        $("<p>").append(p2).appendTo($op);
	     }else{
	    	 $("<p>").text("取消").appendTo($op);
	    	 $("<p>").text("修改").appendTo($op);
	     }
	});
	$(".addinfo p a").unbind();
	$(".addinfo p a").bind("click",function(){
		var id=$(this).attr("order_id");
		var type=$(this).attr("order_type");
		deleteorder(id,type);
	});

}
function exist(){
	 if (confirm('确定要退出吗？')) 
		  window.location.href="logout.action";  
	 else 
		 return false;
}

