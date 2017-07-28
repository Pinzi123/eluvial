<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@taglib prefix="s" uri="/struts-tags"%>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>停车场预定单列表</title>
<!-- CSS -->
<link rel='stylesheet'
	href='http://fonts.googleapis.com/css?family=PT+Sans:400,700'>
<link rel='stylesheet'
	href='http://fonts.googleapis.com/css?family=Oleo+Script:400,700'>
<link rel="stylesheet" href="assets/bootstrap/css/bootstrap.min.css">
<link rel="stylesheet" href="assets/css/style.css">
<style type="text/css">
.order {

    display:inline;
    float:left;
    margin-top: 30px;
    margin-left:13%;
	text-align: center;
	border: 2px solid #a1a1a1;
	padding: 10px 40px;
	background: #dddddd;
	width: 350px;
	border-radius: 25px;
	-moz-border-radius: 25px; /* 老的 Firefox */
	box-shadow: 10px 10px 5px #888888;
}

</style>

</head>
<body>
<div class="header">
		<div class="container">
			<div class="row">
				<div class="logo span4">
					<h1>
						<a href="/eluvial/selectPark.jsp" title="进行预定" target="_blank">
						<span class="red">停车位预定</span>
						</a>列表
					</h1>
				</div>
				<div class="links span8">
				
					<a class="home" href="/eluvial/index.jsp" title="首页"></a>
					 <a class="blog" href="http://my.csdn.net/" title="博客" target="_blank"></a>
				</div>
			</div>
		</div>
	</div>
	<s:iterator value="porders" var="porder" status="st">
		<div class="order">
			<ul>
				<li><s:property value="#st.index+1" />.预定停车场：<s:property
						value="#porder.parking_name" /></li>
			</ul>
			<dl>
				<dt>
					预定车的车牌号：
					<s:property value="#porder.car_id" />
				</dt>
				<dt>
					下单时间：
					<s:property value="#porder.co_date" />
				</dt>
				<dt>
					预计到达时间：
					<s:property value="#porder.reach_time" />
				</dt>
				<dt>
					预定离开时间：
					<s:property value="#porder.leave_time" />
				</dt>
				<dt>
					<a
						href="deletePorderAction.action?id=<s:property value="#porder.id"/>">取消预订</a>
					&nbsp;&nbsp;<a
						href="updatePorder.jsp?id=<s:property value="#porder.id"/>&parking_id=<s:property value="#porder.parking_id"/>&leave=<s:property value="#porder.leave_time"/>">
						延长时间</a>
				</dt>
			</dl>
		</div>
	</s:iterator>
</body>
</html>