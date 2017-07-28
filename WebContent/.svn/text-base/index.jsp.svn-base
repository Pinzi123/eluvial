<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<html>
<head>
<title>一路无忧——汽车服务网主页</title>

<meta http-equiv="pragma" content="no-cache">
<meta http-equiv="cache-control" content="no-cache">
<meta http-equiv="expires" content="0">
<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
<meta http-equiv="description" content="This is my page">

<!-- For-Mobile-Apps -->
<meta name="viewport" content="width=device-width, initial-scale=1" />
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="keywords"
	content="Hotel Booking Widget Responsive, Login Form Web Template, Flat Pricing Tables, Flat Drop-Downs, Sign-Up Web Templates, Flat Web Templates, Login Sign-up Responsive Web Template, Smartphone Compatible Web Template, Free Web Designs for Nokia, Samsung, LG, Sony Ericsson, Motorola Web Design" />
<script type="application/x-javascript">
	
	 addEventListener("load", function() { setTimeout(hideURLbar, 0); }, false); function hideURLbar(){ window.scrollTo(0,1); } 
	 function exist(){
		 if (confirm('确定要退出吗？')) 
			  window.location.href="logout.action";  
		 else 
			 return false;
	 }
	 function connect(){
		 alert("邮箱:515551@163.com");
	 }
</script>

<!-- Style -->
<link rel="stylesheet" href="css/indexstyle.css" type="text/css"
	media="all" />

</head>
<body>
	<c:if test="${empty sessionScope.user.name }">
		<a href="/eluvial/regist.jsp">注册</a>
		<a href="/eluvial/login.jsp">登录</a>
	</c:if>
	<c:if test="${!empty sessionScope.user.name }">
亲爱的${sessionScope.user.name }，欢迎您！
</c:if>
	<h1>Eluvial Automobile Service</h1>

	<div class="hotel">

		<ul class="menu">
			<li class="item1"><a href="">CHOOSE&nbsp;&nbsp;SERVICE<i
					class="menu-down"><img src="images/down.png" alt="" /></i>
			</a>
				<ul class="cute">
					<li class="subitem1"><a href="/eluvial/selectPark.jsp">预定停车位</a></li>
					<li class="subitem2"><a href="/eluvial/selectFS.jsp">预定汽车维修保养</a></li>
					<li class="subitem3"><a href="http://www.jxhld.gov.cn/" target="_blank">违章缴费</a></li>
					<li class="subitem3"><a href="/eluvial/entertainment/entertainment.html">一点乐趣</a></li>
					<li class="subitem1"><a href="/eluvial/order.html">预定订单</a></li>
					<li class="subitem2"><a href="/eluvial/userInfo.jsp">个人资料</a></li>
					<li class="subitem3"><a href="/eluvial/about.html" target="_blank">关于本站</a></li>
					<li class="subitem3"><a href="#" onclick="connect()">联系我们</a></li>
					<li class="subitem3"><a href="#" onclick="exist()">注销登录</a></li>
				</ul></li>
		</ul>

	</div>

	<div class="footer">
		<p>
			Copyright &copy; 2015.江西师范大学软件学院.3507java工作室.<a target="_blank"
				href="#">一路无忧</a>
		</p>
	</div>

</body>
</html>