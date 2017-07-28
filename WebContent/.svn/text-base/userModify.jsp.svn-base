<%@ page language="java" contentType="text/html; charset=utf-8"
	pageEncoding="UTF-8"%>
<html lang="en">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>个人资料修改</title>
<link rel="stylesheet" href="assets/bootstrap/css/bootstrap.min.css">
<link rel="stylesheet" href="assets/css/style.css">
</head>
<body>
	<div class="register span6"
		style="position: absolute; left: 29%; top: 23%;">
		<form action="usermodify" method="post">
			<h2>
				修改 <span class="red"><strong>${session.user.name}</strong></span>个人信息
			</h2>
			<input type="hidden" id="username" name="user.name"
				value="${session.user.name}"> <label for="tel">手机号</label> <input
				type="text" id="tel" value="${session.user.tel}" name="user.tel"
				onfocus="if (value==defaultValue)value=''"
				onblur="if(!value)value=defaultValue"> <label for="address">地址</label>
			<input type="text" id="address" name="user.address"
				value="${session.user.address}"
				onfocus="if (value==defaultValue)value=''"
				onblur="if(!value)value=defaultValue"> <label for="sex">性别</label>
			<input type="radio" name="user.sex" value="男"
				style="width: 25px; height: 25px; clear: both" checked /> 男 <input
				type="radio" name="user.sex" value="女"
				style="width: 25px; height: 25px; clear: both" /> 女 <br>
			<button type="submit">确认修改</button>
		</form>
	</div>
	<!-- Javascript -->
	<script src="assets/js/jquery-1.8.2.min.js"></script>
	<script src="assets/bootstrap/js/bootstrap.min.js"></script>
	<script src="assets/js/jquery.backstretch.min.js"></script>
	<script src="assets/js/scripts.js"></script>

</body>
</html>
