<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>修改用户密码</title>
<style>
body {
	text-align: center
}

.div {
	margin: 0 auto;
	width: 400px;
	height: 100px;
	border: 1px solid #F00
}
/* css注释：为了观察效果设置宽度 边框 高度等样式 */
</style>
<link rel="stylesheet" href="assets/bootstrap/css/bootstrap.min.css">
<link rel="stylesheet" href="assets/css/style.css">
<script type="text/javascript">
	function findByPass() {

		$.ajax({
			url : 'findByPass.action',
			data : {
				password : $("#oldpassword").val()
			},
			type : 'post',
			dataType : 'text',
			success : function(data) {
				if ('exist' == data) {
					$("#old").append("<span class='red'> - 密码正确</span>");
					$("#old").focus();
				} else if ('noexist' == data) {
					$("#old").append("<span class='red'> - 密码错误</span>");
					$("#old").focus();
				}
			},
			error : function() {
				alert("请填写旧密码！");
			}
		});
	}
</script>
</head>
<body>
	<div class="register span6"
		style="clear: both; position: absolute; left: 28%; top: 24%;">
		<form action="passModify" method="post">
			<h2>
				修改 <span class="red"><strong>密码</strong></span>
			</h2>
			<label id="old">原来密码</label>
			 <input type="password" id="oldpassword"
				placeholder="输入你的旧密码" onblur="findByPass()">
				 <input type="hidden" id="username" name="user.name"
				value="${session.user.name}"> 
				<input type="hidden" id="tel"
				name="user.tel" value="${session.user.tel}"> 
				<input type="hidden" id="address" name="user.address"
				value="${session.user.address}">
			   <input type="radio" id="s1"
				name="user.sex" value="${session.user.sex}" style="display: none"
				checked /> 
				<label for="password">新密码</label> 
				<input type="password"
				id="password" name="user.password" placeholder="输入你的新密码"> 
				<label for="repassword">确认密码</label> 
				<input type="password" id="repassword" name="repassword" placeholder="与密码相同...">
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