<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<html lang="en">

<head>

<meta charset="utf-8">
<title>Eluvial会员注册</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="">
<meta name="author" content="">

<!-- CSS -->
<link rel='stylesheet'
	href='http://fonts.googleapis.com/css?family=PT+Sans:400,700'>
<link rel='stylesheet'
	href='http://fonts.googleapis.com/css?family=Oleo+Script:400,700'>
<link rel="stylesheet" href="assets/bootstrap/css/bootstrap.min.css">
<link rel="stylesheet" href="assets/css/style.css">
<script type="text/javascript">
function loadimage(){
	document.getElementById("randImage").src="image.jsp?"+Math.random();
}
function findByName() {
$.ajax( {
					url : 'findByName.action',
					data : {
						name : $("#username").val()
					},
					type : 'post',
					dataType : 'text',
					success : function(data) {					
						if ('exist' === data) {
							$("#name").append("<span  class='red'> - 用户名已存在</span>");
							$("#username").focus();
						}
					},
					error : function() {
						alert("请填写用户名！");
					}
				});
	}
</script> 
<!-- HTML5 shim, for IE6-8 support of HTML5 elements -->
<!--[if lt IE 9]>
            <script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
        <![endif]-->

</head>

<body>

	<div class="header">
		<div class="container">
			<div class="row">
				<div class="logo span4">
					<h1>
						<a href="">User <span class="red">Register</span></a>
					</h1>
				</div>
				<div class="links span8">
					<a class="home" href="/eluvial/index.jsp" rel="tooltip" data-placement="bottom"
						data-original-title="Home"></a> <a class="blog" href=""
						rel="tooltip" data-placement="bottom" data-original-title="Blog"></a>
				</div>
			</div>
		</div>
	</div>

	<div class="register-container container">
		<div class="row">
			<div class="iphone span5">
				<img src="assets/img/iphone.png" alt="">
			</div>
			<div class="register span6">
				<form action="register" method="post">
					<h2>
						REGIST TO <span class="red"><strong>Eluvial</strong></span>
					</h2>
					<label for="username" id="name">用户名</label> 
					<input type="text" id="username" name="user.name" placeholder="请输入你的昵称..." onblur="findByName()">
					<label for="tel">手机号</label> 
					<input type="text" id="tel" name="user.tel" placeholder="必填项...">
					<label for="address">地址</label> 
					<input type="text" id="address" name="user.address" placeholder="必填项...">
					<label for="sex">性别</label> 
					<input type="radio" id="s1" name="user.sex" value="男" style="width:25px; height:25px;clear:both"/>男
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
					<input type="radio" id="s1" name="user.sex" value="女" style="width:25px; height:25px;clear:both"/>女
					<label for="password">密码</label>
					<input type="password" id="password" name="user.password" placeholder="必填项...">
					<label for="repassword">确认密码</label>
					<input type="password" id="repassword" name="repassword" placeholder="与密码相同...">
					<label for="srand" id="code">验证码:</label>
					<input type="text" id="srand" name="srand" placeholder="不区别大小写" style="width:200px" onblur="findByRand()">
					<img alt="code..." name="randImage" id="randImage" src="image.jsp" width="60" height="20" border="1">
					<a href="javascript:loadimage();">看不清</a>
					<button type="submit">注册</button>
				</form>
			</div>
		</div>
	</div>
	<!-- Javascript -->
	<script src="assets/js/jquery-1.8.2.min.js"></script>
	<script src="assets/bootstrap/js/bootstrap.min.js"></script>
	<script src="assets/js/jquery.backstretch.min.js"></script>
	<script src="assets/js/scripts.js"></script>

</body>
</html>