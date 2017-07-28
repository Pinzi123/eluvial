<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@taglib prefix="s" uri="/struts-tags"%>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
</head>
<body>
<s:iterator value="#request.FSOrders" var="order" status="st">
<div class="order">
			<ul>
				<li><s:property value="#st.index+1" />.预定维修管理店：<s:property
						value="#order.fs_name" /></li>
			</ul>
			<dl>
				<dt>
					预定车的车牌号：
					<s:property value="#order.car_id" />
				</dt>
				<dt>
					预计到达时间：
					<s:property value="#order.reach_time" />
				</dt>
				<dt>
				下单时间：
					<s:property value="#order.order_date" />
				</dt>
				<dt>
				<a href="deleteOrder.action?id=<s:property value="#order.id"/>">取消预订</a>
				</dt>
			</dl>
			</div>
</s:iterator>
</body>
</html>