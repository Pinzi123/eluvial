var username = null;
var people_num = 1102;
$(window).on("load", function() {
	var urltype=true;
	// 验证登录
	login_val();
	
	$(".minpic li").on("click", Switching);
	//判断是哪种类型的请求
	var urlstr=window.location.toString(); 
	if(urlstr.indexOf("park")>0){
		queryPark();
		urltype=false;
	}else if(urlstr.indexOf("FS")>0){
	    queryFS();
	    urltype=true;
	}
	$(".order").on("click", function(e) {
		writeorder(e,urltype);
	});
});

/* 图片切换 */
function Switching() {
	var i = $(this).attr("i");
	$(".native").removeClass("native");
	$(this).addClass("native");
	$(".one_pic").animate({
		marginTop : -266 * i + 'px'
	}, 500);
}
/*
 * 从url中获得ID 获得维修管理店的信息
 */
function queryFS() {
	var id = GetQueryString("id");
	$.ajax({
		url : 'selectFS.action',
		type : 'post',
		dataType : 'text',
		data : {
			id : id
		},
		success : function(data) {
			var shop = JSON.parse(data).fs;
			addFS_info(shop);
		},
		error : function() {
			return;
		}
	});
}
/* 添加维修管理店信息到HTNL页面中去 */
function addFS_info(shop) {
	/* 图片还没有添加 */
	$(".shop_name").text(shop.name);
	$(".detail_right").html(shop.detail);
	$("#people_num").text(people_num);
	$(".zan .d_num").text("赞(" + shop.zan + ")");
	$(".cai .d_num").text("踩(" + shop.cai + ")");
	var shop_more = $(".shop_tel");
	$("<p>").html('<img src="images/tel.fw.png">联系电话：' + shop.tel).appendTo(
			shop_more);
	var address = $("<p>").html('<img src="images/local.fw.png">详细地址：')
			.appendTo(shop_more);
	$("<a>").attr({
		href : "http://ditu.amap.com/search?query=" + shop.address,
		target : "_blank"
	}).text(shop.address).appendTo(address);

	// 在表单里填写文字
	$("#fs_name").val(shop.name);
	$("#user_name").val(username);
	
	//赞踩
	zan(shop.id,shop.zan,shop.cai);
}

/*
 * 从url中获得ID 获得停车场的信息
 */
function queryPark() {
	var id = GetQueryString("id");
	$.ajax({
		url : 'selectPark.action',
		type : 'post',
		dataType : 'text',
		data : {
			id : id
		},
		success : function(data) {
			var shop = JSON.parse(data).park;
			addPark_info(shop);
		},
		error : function() {
			return;
		}
	});
}
/* 添加停车场信息到HTNL页面中去 */
function addPark_info(shop) {
	/* 图片还没有添加 */
	$(".shop_name").text(shop.name);

	var price = shop.price;
	$("<p>").html("&yen;" + price).appendTo($(".price"));
	$("<p>").html("元/每小时").appendTo($(".price"));
	$("<p>").html("8.0折").appendTo($(".discount"));
	$("<p>").html("折扣").appendTo($(".discount"));
	$("<p>").html("&yen;" + price / 0.8).appendTo($(".original"));
	$("<p>").html("价值").appendTo($(".original"));

	$("#people_num").text(people_num);
	$(".total_num").text(shop.total);
	$(".remainder_num").text(shop.remainder);
	var shop_more = $(".shop_tel");

	$("<p>").html('<img src="images/tel.fw.png">联系电话：' + shop.tel).appendTo(
			shop_more);
	var address = $("<p>").html('<img src="images/local.fw.png">详细地址：')
			.appendTo(shop_more);
	$("<a>").attr({
		href : "http://ditu.amap.com/search?query=" + shop.address,
		target : "_blank"
	}).text(shop.address).appendTo(address);
	// 在表单里填写文字
	$("#parking_name").val(shop.name);
	$("#parking_id").val(shop.id);
	$("#user_name").val(username);
	
	//计算总金额
	add_sum();
	$("#leave_time").bind("change",add_sum);

	//计算总金额
	function add_sum(){
		var $sum=$(".sum span");
		$sum.empty();
		var patt=/\d+/;
		var money=String(parseFloat(price)*parseFloat(patt.exec($("#leave_time").val())));
		var index=money.indexOf(".");
		$sum.html("&yen;"+money.substring(0,index+2)).appendTo($(".sum"));
	}
}


/* 采用正则表达式获取地址栏参数：（ 强烈推荐，既实用又方便！） */
function GetQueryString(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
	var r = window.location.search.substr(1).match(reg);
	if (r != null)
		return unescape(r[2]);
	return null;
}

/* 显示订单表填写 */
function writeorder(e,urltype) {
	e.stopPropagation();
	// 获取当前页面的各种高度
	var height = $(document).height();
	var hidew = $(".order_form").width();
	var hideh = $(".order_form").height();
	var now_left = $(window).width() / 2 - hidew / 2;
	var now_top = $(window).height() / 2 - hideh / 2;
	// append遮罩层元素
	$('body').append(
			"<div id=greybackground style='height:" + height + "px';></div>");
	// 确定偏移位置
	$(".order_form").css({
		left : now_left + 'px',
		top : now_top + 'px'
	});
	$(".order_form").slideDown();
	$(".order_form a").bind("click", closeorder);
	// 绑定时间选择器
	if (urltype) {
		$("#appointment").bind("focus", {
			ele : "#appointment"
		}, showdt);
	} else {
		$("#reach_time").bind("focus", {
			ele : "#reach_time"
		}, showdt);
	}
//绑定车牌号合法性判断
	bindLicense("#car_id");

	function showdt(e) {
		/* Act on the event */
/*		alert(e.data.ele);*/
	  $('.order_form').append
	  ("<div id=greybackground style='height:"+(hideh+20)+"px';></div>");
	   $(".dt").css({
		  left: (now_left+300)+'px',
		  top: now_top+'px'
	  });
		$(".dt").show();
		$(".dwb-s").on('click', function(event) {
			event.preventDefault();
/*			alert(e.data.ele);*/
			$(e.data.ele).val(getselected_time());
			$('.order_form #greybackground').remove();
			$(".dt").hide();
			$(".dwb-s").unbind();
});

}
}

/* 关闭订单表 */
function closeorder() {
	// 关闭弹出框
	$(".order_form").slideUp();
	$("#greybackground").remove();
	// 解除绑定背景
	$("body").css({
		overflow : "scroll"
	});
	$(".order_form a").unbind();
}

/* 判断是否是合法车牌号 */
function isLicenseNo(str) {
	var re = /(^[\u4E00-\u9FA5]{1}[A-Z0-9]{6}$)|(^[A-Z]{2}[A-Z0-9]{2}[A-Z0-9\u4E00-\u9FA5]{1}[A-Z0-9]{4}$)|(^[\u4E00-\u9FA5]{1}[A-Z0-9]{5}[挂学警军港澳]{1}$)|(^[A-Z]{2}[0-9]{5}$)|(^(08|38){1}[A-Z0-9]{4}[A-Z0-9挂学警军港澳]{1}$)/;
	/* var re=/^[\u4e00-\u9fa5]{1}[A-Z]{1}[A-Z_0-9]{5}$/; */
	return re.test(str);
}

function bindLicense(elename) {
	var f1 = false, f2 = false;
	var allele = $(".order_form :input");
	$(elename).bind("blur", comfirm);
	// 提交按钮,所有验证通过方可提交
	$('.order_form .comfirm').bind("click", function(e) {
		if (f1) {
			//所有input不为空
			for (var i = 0; i < allele.length(); i++) {
				if (allele[i].val() == null || allele[i].val() == undefined) {
					f2 = false;
					break;
				} else {
					f2 = true;
				}
			}
			if(f2)
			  $('form').submit();
			else
				e.preventDefault();// 此处阻止提交表单
		} else {
			e.preventDefault();// 此处阻止提交表单
		}
	});

	
	function comfirm() {
		if (!isLicenseNo($(this).val())) {
			$(this).addClass("unval");
			$(this).focus();
			f1 = false;
		} else {
			$(this).removeClass("unval");
			f1 = true;
		}
	}
}