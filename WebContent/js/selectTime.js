var days=[31,28,31,30,31,30,31,31,30,31,30,31];
var types={"year":3,"month":13,"date":0,"hours":24,"minutes":60};
var type,range;
$(window).on("load",function(){
	
	init();
	var dtone=document.getElementsByClassName("dtc")[0];
	var dttwo=document.getElementsByClassName("dtc")[1];
	var scrollFunc = function (e) {
        var direct = 0;
        e = e || window.event;
        if (e.wheelDelta) {  //判断浏览器IE，谷歌滑轮事件             
            if (e.wheelDelta > 0) { //当滑轮向上滚动时
                reset(1,range);
            }
            if (e.wheelDelta < 0) { //当滑轮向下滚动时
                reset(-1,range);
            }
        } else if (e.detail) {  //Firefox滑轮事件
            if (e.detail> 0) { //当滑轮向上滚动时
                reset(1,range);
            }
            if (e.detail< 0) { //当滑轮向下滚动时
               reset(-1,range);
            }
        }
    }
    //给日期选择绑定滑轮滚动事件
    if (dtone.addEventListener) {
        dtone.addEventListener('DOMMouseScroll', scrollFunc, false);
    }
    //滚动滑轮触发scrollFunc方法
    dtone.onmousewheel = dtone.onmousewheel = scrollFunc;  

     //给时间选择绑定滑轮滚动事件
    if (dttwo.addEventListener) {
        dttwo.addEventListener('DOMMouseScroll', scrollFunc, false);
    }
    //滚动滑轮触发scrollFunc方法
    dttwo.onmousewheel = dttwo.onmousewheel = scrollFunc;  
	
	$(".dtt").on("mouseover",function(){
		type=$(this).attr("type");
		range=resetRange(type);
	});
	//绑定确认按钮
	/*$(".dwb-s").on('click', function(event) {
		event.preventDefault();
		$(".dt").hide();
	});*/
	/*绑定取消按钮*/
	$(".dwb-c").on('click', function(event) {
		event.preventDefault();
		init();
	});
});
//初始化时间选择器
function init(){
	$(".dtt .selected").removeClass('selected');
	var now=new Date();
	var year=now.getFullYear();
	setYear(year);
	var month=now.getMonth()+1;
	set(month,"month");
	var date=now.getDate();
	set(date,"date");
	var hours=now.getHours();
	set(hours,"hours");
	var minutes=now.getMinutes();
	set(minutes,"minutes");
	$(".dtv").html("local time："+month+"/"+date+"/"+year+" "+" "+hours+":"+minutes);
//	alert(year+" "+month+" "+date+" "+hours+" "+minutes);

function set(time,type){
	var h=$("."+type);
	h.empty();
	if(type=="date")
		num=32;
	else
		num=getNum(type);
	
	if(type=="hours"||type=="minutes"){
		for(var i=0;i<num;i++){

		if(i==time){
			$("<div>").addClass("dt_num selected").html(i).appendTo(h);
		}else{
			$("<div>").addClass("dt_num").html(i).appendTo(h);
		}
	}
	h.css({"margin-top":-40*(time-1)+"px"});
	}else{
		for(var i=1;i<num;i++){

		if(i==time){
			$("<div>").addClass("dt_num selected").html(i).appendTo(h);
		}else{
			$("<div>").addClass("dt_num").html(i).appendTo(h);
		}
	}
	h.css({"margin-top":-40*(time-2)+"px"});
	}
	
}
}

function setYear(year){
	var y=$(".year");
	y.empty();
	$("<div>").addClass("dt_num").html(year-1).appendTo(y);
	$("<div>").addClass("dt_num selected").html(year).appendTo(y);
	$("<div>").addClass("dt_num").html(year+1).appendTo(y);
}

/*function up(){
	var ele=$(".month");
	var margin=parseInt(ele.css("margin-top").split("px")[0])+40;
	var s=$(".month .selected");
	s.removeClass("selected");
	var num=parseInt(s.html())-1;
	ele.css({"margin-top":margin+"px"});
	$(".month :contains("+num+")").addClass("selected");
}
function down(){
	alert($(".").attr("type"));
	var ele=$(".month");
	var margin=parseInt(ele.css("margin-top").split("px")[0]);
	ele.css({"margin-top":margin-40+"px"});
	var s=$(".month .selected");
	s.removeClass("selected");
	var num=parseInt(s.html())+1;
	$(".month :contains("+num+")").addClass("selected");
	
}*/
function reset(action,range){
	
	var ele=$("."+type);
	var margin=parseInt(ele.css("margin-top").split("px")[0]);
	var s=$("."+type+" .selected");	
	var num=parseInt(s.html());
	if(action<0){
		margin=margin-40;
		num+=1;
  }else{
	  margin=margin+40;
	  num-=1;
  }
	  if(num>range.min&&num<range.max){
		  	 s.removeClass("selected");
	         ele.css({"margin-top":margin+"px"});
	         $("."+type+" :contains("+num+")").addClass("selected");
	  }
	  
}

//确定当前选择范围
function resetRange(type){
	var max,min;
  if(type=="year"){
	var now=new Date();
	var year=now.getFullYear();
	max=year+2;
	min=year-2;
  }else if(type=="date"){
	  var month=$(".month .selected").html();
	  max=getNum(type,month);
	  min=0;
  }else {
	 max=getNum(type);
	 min=0;
	 if(type=="hours"||type=="minutes")
	    min=-1;
	 else if(type=="month"){
	 	var month=$(".month .selected").html();
	 	if($(".date .selected").html()>days[month-1]){
	 	$(".date .selected").removeClass("selected");
	 	$(".date").css({"margin-top":"40px"});
	 	$(".date :first-child").addClass("selected");}
	 }
  }

  var range={"max":max,"min":min};
  return range;
}

function getNum(type){
	var num=types[type];
	if(type=="date"){
		var month=$(".month .selected").html();
		if(month==2||month=="2"){
			var year=$(".year .selected").html();
			if(isLeapYear(year))
				num=29+1;
			else
				num=28+1;
		}else{
		num=days[month-1]+1;
		}
	}
	return num;
}

//判断闰年
function isLeapYear(year) {  return (year % 4 == 0) && (year % 100 != 0 || year % 400 == 0);  }

//获得当前选择的时间
function getselected_time(){
	var t=["year","month",'date','hours','minutes'];
	var times="";
	for (var i = 0; i < t.length; i++) {
		if (i>0) {
			if (i>3) 
				times=times+":"+$("."+t[i]+" .selected").html();				
			else if (i>2) 
				times=times+" "+$("."+t[i]+" .selected").html();
			else
			times=times+"-"+$("."+t[i]+" .selected").html();
		}else{
			times=$("."+t[i]+" .selected").html();
		}
	}
	return times;
}