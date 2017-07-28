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

var b = new BMap.Autocomplete( //建立一个自动完成的对象
{
	"input" : "endId",
	"location" : map
});
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
	
	getadd();
	var local = new BMap.LocalSearch(map, {
		renderOptions:{map: map}
	});
	local.search(G("endId").value);
/*	alert(lng+" "+lat);*/
	

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
		getParks();
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
	var loader = new net.AjaxRequest("findFS?lat=" + lat + "&lng=" + lng
			 + "&nocache=" + new Date().getTime(),
			deal_getInfo, onerror, "GET");
}
//回调函数
function deal_getInfo() {
	document.getElementById("list").innerHTML = this.req.responseText;
}