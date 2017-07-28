<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@taglib prefix="s" uri="/struts-tags"  %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>订单成功</title>
</head>
<body>
<h3>预订成功</h3>
<dl>
<dt>
用户名：<s:property value="orderpark.user_name"/>
</dt>
<dt>
所预定的停车场：<s:property value="#request.park_name"/>
</dt>
<dt>
预定车的车牌号：<s:property value="orderpark.car_id"/>
</dt>
<dt>
预计到达时间：<s:property value="orderpark.reach_time"/>
</dt>
<dt>
预定离开时间：<s:property value="orderpark.leave_time"/>
</dt>
<dt>
<a href="pOrders.action">返回停车预定预定列表！！！</a>
</dt>
</dl>

</body>
</html>