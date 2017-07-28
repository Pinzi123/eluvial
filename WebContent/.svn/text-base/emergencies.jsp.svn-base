<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@taglib prefix="s" uri="/struts-tags"%>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<script  src="js/AjaxRequest.js"></script>
<link href="css/emergency.css" rel="stylesheet" type="text/css">
<style type="text/css">
.div_parent {
	width: 100%;
	overflow-y: hidden;
	overflow-x: auto;
	white-space: nowrap;
}

.div_child {
	width: 13%;
	height: 300px;
	float: left;
	display: inline-block;
	margin: 1ex;
}

span {
	width: 12%, vertical-align: text-top
}
</style>
<title>突发应急</title>
</head>
<body>
	<a href="/eluvial/index.jsp" title="首页"> <img border="0"
		src="/eluvial/assets/img/home.png" />
	</a>
	<div class="section">
		<div class="container">
			<div class="row">
				<div class="col-md-12">
					<div class="panel panel-primary">
						<div class="panel-heading">
							<h3 class="panel-title">行车温馨提醒</h3>
						</div>
						<div class="panel-body">
							<ol>
								<li>每天出发记得检查车辆</li>
								<li>遵守交通规则，忍一时风平浪静</li>
								<li>为了自己和他人的安全，不要疲劳驾驶，醉酒驾驶</li>
							</ol>
						</div>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-md-12">
					<div class="panel panel-primary">
						<div class="panel-heading">
							<h3 class="panel-title">突发应急查询</h3>
						</div>
						<div class="panel-body">
								请选择类型： <select name="type" id="type">
									<option selected value="">类型</option>
									<option value="保险电话">保险电话</option>
									<option value="品牌售后">品牌售后</option>
									<option value="道路救援">道路救援</option>
									<option value="故障灯">故障灯</option>
								</select> 请输入关键字： <input type="text" name="ecase" id="ecase"> <input
									value="确定" type="submit" name="提交" onclick="getEmers()">
							<div id="emers">
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<script>
function G(id) {
		return document.getElementById(id).value;
	}
	//错误处理的方法
function onerror() {
	document.getElementById("emers").innerHTML="查询出错，请稍后重试！！！"
}
//实例化Ajax对象的方法
function getEmers() {
/* alert("findEmerg.action?type=" + G("type") + "&ecase=" + G("ecase")); */
	var loader = new net.AjaxRequest("findEmerg.action?type=" + G("type") + "&ecase=" + G("ecase")
			+ "&nocache=" + new Date().getTime(),
			deal_getInfo, onerror, "GET");
}
//回调函数
function deal_getInfo() {
	document.getElementById("emers").innerHTML = this.req.responseText;
}
</script>
</body>
</html>