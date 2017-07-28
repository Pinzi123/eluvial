<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@taglib prefix="s" uri="/struts-tags"%>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>延长离开时间</title>
<link rel="stylesheet" href="assets/bootstrap/css/bootstrap.min.css">
<link rel="stylesheet" href="assets/css/style.css">
</head>
<body>
	<a href="#" onclick="window.history.go(-1)"> <img border="0"
		src="/eluvial/images/left.png" />
	</a>
	<div class="register span6"
		style="clear: both; position: absolute; left: 28%; top: 24%;">

		<form action="updatePorderAction.action" method="post">
			<h2>
				<span class="red"><strong>延长</strong></span>时间
			</h2>
			<label>原来离开时的时间：</label>
			<span class="red"><s:property value="#parameters.leave" /></span>
			<br>
			<input type="text" name="id" value="${param.id}"
				style="display: none"> 
			<input type="text" name="parking_id"
				value="${param.parking_id}" style="display: none"> 
			<input type="text" name="leave" value="${param.leave}"
				style="display: none"> 
			<label>你选择延长的时间：请选择停车时间：</label><select name="leave_time">
				<option value="1">1个小时</option>
				<option value="2">2个小时</option>
				<option value="3">3个小时</option>
				<option value="4">4个小时</option>
				<option value="5">5个小时</option>
				<option value="6">6个小时</option>
				<option value="7">7个小时</option>
				<option value="8">8个小时</option>
				<option value="9">9个小时</option>
			</select> 
			<br>
			<button type="submit">确认</button>
		</form>
	</div>
	<!-- Javascript -->
	<script src="assets/js/jquery-1.8.2.min.js"></script>
	<script src="assets/bootstrap/js/bootstrap.min.js"></script>
	<script src="assets/js/jquery.backstretch.min.js"></script>
	<script src="assets/js/scripts1.js"></script>
</body>
</html>