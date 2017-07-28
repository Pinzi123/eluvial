<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8" %>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="viewport" content="initial-scale=1.0, user-scalable=no" />
<style type="text/css">
body,html,#allmap {
	width: 100%;
	height: 100%;
	overflow: hidden;
	margin: 0;
	font-family: "微软雅黑";
}

#r-result,#r-result table {
	width: 100%;
}
</style>
<!-- Style -->
<link rel="stylesheet" href="css/selectdate.css" type="text/css"
	media="all" />
<script  src="js/AjaxRequest.js"></script>
<script type="text/javascript" src="http://api.map.baidu.com/api?v=1.4"></script>
<script src="http://libs.baidu.com/jquery/1.9.0/jquery.js"></script>
<title>停车</title>
<!-- CSS -->
<link rel='stylesheet'
	href='http://fonts.googleapis.com/css?family=PT+Sans:400,700'>
<link rel='stylesheet'
	href='http://fonts.googleapis.com/css?family=Oleo+Script:400,700'>
<link rel="stylesheet" href="assets/bootstrap/css/bootstrap.min.css">
<link rel="stylesheet" href="assets/css/style.css">
</head>
<body>
<div class="header">
		<div class="container" style="    margin-top: 5px;">
			<a href="/eluvial/index.jsp" title="首页"> <img border="0"
				src="/eluvial/assets/img/home.png" />
			</a> 你所在的位置:<input type="text" id="localId" size="20" style="width: 150px;height: auto;" />
		<div id="searchResultPanel"
			style="border: 1px solid #C0C0C0; width: 150px; height: auto; display: none;">
			</div>
		你要去的位置:<input type="text" id="endId" size="20" style="width: 150px;height: auto;" />
		<div id="searchResultPanel"
			style="border: 1px solid #C0C0C0; width: 150px; height: auto; display: none;"></div>
		<button type="submit" id="sub">查询</button> 
<!-- 		<input id="sub" type="button" style="width: 50px;" value="查询" /> -->
	<div id="reachtime" style=" height: 5%; display:none;">
	你所到达的时间:<input type="text" id="time" size="20" style="width: 150px; height: auto;"/>
	<span>形如2016-01-07 08:08:08</span>
		<!-- <input id="sub" type="button" style="width: 50px;" value="确认" onclick="redrawtime()"/> -->
		<button type="submit" onclick="redrawtime()">确认</button>
	</div>

		</div>

	</div>
	
	<div class="register-container container">
		<div class="row">
			<div class="iphone span5" >
				<div id="allmap"style="
			border:2px solid;
            border-radius:25px;
			border-radius:25px;
			-moz-border-radius:25px; /* 老的 Firefox */
			box-shadow: 10px 10px 5px #888888;" ></div>
			</div>
			<div class="register span6">
				<form action="register" method="post">
					<h2>
						 <span class="red"><strong>停车场</strong></span>列表
					</h2>
				<div id="list" >请输入查询条件!</div>
				</form>
			</div>
		</div>
	</div>
		<!-- Javascript -->
	<script src="assets/js/jquery-1.8.2.min.js"></script>
	<script src="assets/bootstrap/js/bootstrap.min.js"></script>
	<script src="assets/js/jquery.backstretch.min.js"></script>
	<script src="assets/js/scripts1.js"></script>
	<script src="js/selectPark.js"></script>
</body>
</html>