<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@taglib uri="/struts-tags" prefix="s"%>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>个人资料</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<script type="application/x-javascript">
	 addEventListener("load", function() { setTimeout(hideURLbar, 0); }, false); function hideURLbar(){ window.scrollTo(0,1); } 
</script>
<meta name="keywords"
	content="Flat Dark Web Login Form Responsive Templates, Iphone Widget Template, Smartphone login forms,Login form, Widget Template, Responsive Templates, a Ipad 404 Templates, Flat Responsive Templates" />
<link href="css/style.css" rel='stylesheet' type='text/css' />
<!--webfonts-->
<link
	href='http://fonts.useso.com/css?family=PT+Sans:400,700,400italic,700italic|Oswald:400,300,700'
	rel='stylesheet' type='text/css'>
<link href='http://fonts.useso.com/css?family=Exo+2' rel='stylesheet'
	type='text/css'>
<!--//webfonts-->
<script
	src="http://ajax.useso.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
</head>
<body>
<a href="/eluvial/index.jsp" title="首页">
<img border="0" src="/eluvial/images/left.png" />
</a>
<h1>会员信息</h1>
<div class="login-form">
		<div class="close"></div>
		<div class="head-info">
			<label class="lbl-1"> </label> <label class="lbl-2"> </label> <label
				class="lbl-3"> </label>
		</div>
		<div class="clear"></div>
		<div class="avtar">
			<img src="images/avtar.png" />
		</div>
		<br>
		<s:if test="#session.user==null">
		<p>你还没有<a href="/eluvial/login.jsp">登录</a>！</p>
		<br>
		</s:if>
		<s:else>

		<ul>
			<li>
			姓名：${session.user.name}
			</li>
			<li>
			性别：${session.user.sex}
			</li>
			<li>电话：${session.user.tel}
			</li>
			<li>
			地址：${session.user.address}
			</li>
		</ul>
		<br>
		<a href="/eluvial/userModify.jsp" target="_blank"><input type="button" value="修改个人信息"/></a>&nbsp;&nbsp;
		<a href="/eluvial/passModify.jsp" target="_blank"><input type="button" value="修改个人密码"/></a>
		</s:else>
	</div>
	<%-- <div align="center">
		<table>
			<tr>
				<td>姓名：</td>
				<td>${session.user.name}</td>
			</tr>
			<tr>
				<td>性别：</td>
				<td>${session.user.sex}</td>
			</tr>
			<tr>
				<td>电话：</td>
				<td>${session.user.tel}</td>
			</tr>
			<tr>
				<td>地址：</td>
				<td>${session.user.address}</td>
			</tr>
		</table>
		<a href="/eluvial/userModify.jsp">修改个人资料</a>
		<a href="/eluvial/passModify.jsp">修改密码</a>
	</div> --%>
</body>
</html>