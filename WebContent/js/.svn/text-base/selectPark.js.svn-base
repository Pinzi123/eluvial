var lng = 0, lat = 0;//经纬度
var reach = 0;//到达停车场时间
var d = 0, h = 0, mi= 0;
// 百度地图API功能
var map = new BMap.Map("allmap");
var point = new BMap.Point(116.404, 39.915); //创建点坐标
map.centerAndZoom(point, 12); //初始化地图，设置中心点坐标和地图级别
map.enableScrollWheelZoom();   //启用滚轮放大缩小，默认禁用
map.enableContinuousZoom();    //启用地图惯性拖拽，默认禁用
function G(id) {
	return document.getElementById(id);
}

var a = new BMap.Autocomplete( //建立一个自动完成的对象
{
	"input" : "localId",
	"location" : map
});
var b = new BMap.Autocomplete( //建立一个自动完成的对象
{
	"input" : "endId",
	"location" : map
});
auto_complete(a);
auto_complete(b);

G("sub").onclick = count;
//关键字提示输入
function auto_complete(ac) {
	ac.addEventListener("onhighlight", function(e) { //鼠标放在下拉列表上的事件
		var str = "";
		var _value = e.fromitem.value;
		var value = "";
		if (e.fromitem.index > -1) {
			value = _value.province + _value.city + _value.district
					+ _value.street + _value.business;
		}
		str = "FromItem<br />index = " + e.fromitem.index
				+ "<br />value = " + value;

		value = "";
		if (e.toitem.index > -1) {
			_value = e.toitem.value;
			value = _value.province + _value.city + _value.district
					+ _value.street + _value.business;
		}
		str += "<br />ToItem<br />index = " + e.toitem.index
				+ "<br />value = " + value;
		G("searchResultPanel").innerHTML = str;
	});
	var myValue;
	ac.addEventListener("onconfirm", function(e) { //鼠标点击下拉列表后的事件
		var _value = e.item.value;
		myValue = _value.province + _value.city + _value.district
				+ _value.street + _value.business;
		G("searchResultPanel").innerHTML = "onconfirm<br />index = "
				+ e.item.index + "<br />myValue = " + myValue;
	});
}
//计算到达目的地的时间
function count() {
	var time = 0;
	getadd();
	var start = G("localId").value;
	var end = G("endId").value;
	var output = "从" + start + "到" + end + "驾车需要";
	var searchComplete = function(results) {
		if (transit.getStatus() != BMAP_STATUS_SUCCESS) {
			return;
		}
		var plan = results.getPlan(0);
		time = plan.getDuration(true);//获取时间
		output += time + "\n";
		output += plan.getDistance(true) + "\n"; //获取距离
	}
	var transit = new BMap.DrivingRoute(map, {
		renderOptions : {
			map : map
		},
		onSearchComplete : searchComplete,
		onPolylinesSet : function() {
			setTimeout(function() {
				var r = confirm(output)
				if (r == true) {
					splittime(time);
					reach = getnow();
					getParks();
				} else {
					document.getElementById("reachtime").style.display="";
				}
			}, "1000");
		}
	});
	transit.search(start, end);

}
//计算目的地的经纬度
function getadd() {
	var localSearch = new BMap.LocalSearch(map);
	localSearch.enableAutoViewport(); //允许自动调节窗体大小
	map.clearOverlays();//清空原来的标注
	var keyword = G("endId").value;
	localSearch.setSearchCompleteCallback(function(searchResult) {
		var poi = searchResult.getPoi(0);
		lng = poi.point.lng;
		lat = poi.point.lat;
	});
	localSearch.search(keyword);
}

//自己输入时间
function redrawtime(){
	reach= G("time").value;
	getParks();
}

//错误处理的方法
function onerror() {
	alert("该地区没有录入！");
}
//实例化Ajax对象的方法
function getParks() {
	var loader = new net.AjaxRequest("parks?lat=" + lat + "&lng=" + lng
			+ "&reach=" + reach + "&nocache=" + new Date().getTime(),
			deal_getInfo, onerror, "GET");
}
//回调函数
function deal_getInfo() {
	document.getElementById("list").innerHTML = this.req.responseText;
}
//获得估计到达时间
function splittime(time) {
	var i = 0, t = 0;
	if (time.indexOf("天") > 0) {
		i = time.indexOf("天");
		d = time.substring(t, i);
		t = i + 1;
	}
	if (time.indexOf("小时") > 0) {
		i = time.indexOf("小时");
		h = time.substring(t, i);
		t = i + 2;
	}
	if (time.indexOf("分钟") > 0) {
		i = time.indexOf("分钟");
		mi = time.substring(t, i);
		t = i + 2;
	}
}
//估计到达时间
function getnow() {
	var mon, d1, h1, m1;
	var da = new Date;
	var s = da.getFullYear() + "";
	mon = (da.getMonth() + 1);
	d1 = parseInt(da.getDate()) + parseInt(d);
	h1 = parseInt(da.getHours()) + parseInt(h);
	m1 = parseInt(da.getMinutes()) + parseInt(mi);
	if (m1 >=60) {
		m1 = m1 - 60;
		h1 = h1 + 1;
		if (h1 >=24) {
			h1 = h1 - 24;
			d1 = d1 + 1;
			var j = judgem(da.getFullYear(), (da.getMonth() + 1));
			if (d1 > j) {
				d1 = d1 - j;
				mon = mon + 1;
			}
		}
	}
	if (mon < 10) {
		s = s +"-"+ "0" + mon;
	} else {
		s = s +"-"+ mon;
	}
	if (d1 < 10) {
		s = s +"-"+ "0" + d1;
	} else {
		s = s +"-"+ d1;
	}
	if (h1 < 10) {
		s = s +" "+ "0" + h1;
	} else {
		s = s +" "+ h1;
	}
	if (m1 < 10) {
		s = s +":"+ "0" + m1;
	} else {
		s = s +":"+ m1;
	}
	if (da.getSeconds() < 10) {
		s = s +":"+ "0" + da.getSeconds();
	} else {
		s = s +":"+ da.getSeconds();
	}
	return s;
}
//判断一个月有多少天
function judgem(y, m) {
	if (m == 2) {
		if (y % 4 == 0 && y % 100 != 0) {
			return 29;
		} else {
			return 28;
		}
	} else if (m == 4 || m == 6 || m == 9 || m == 11) {
		return 30;
	} else {
		return 31;
	}
}