<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@taglib prefix="s" uri="/struts-tags"  %>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

<title>Insert title here</title>
</head>
<body>
  	 <s:iterator value="parks" var="park" status="st">
  	<ul>
  	<li><s:property value="#park.name"/></li>
  	</ul>
  	<dl>
  	<dt>
  	地址：<s:property value="#park.address"/>
  	</dt>
  	<dt>
  	总车位：<s:property value="#park.total"/>
  	</dt>
  	<dt>
  	剩余车位：<s:property value="#park.remainder"/>
  	</dt>
  	<dt>
  	<a href="/eluvial/parkdetail.html?id=<s:property value="#park.id"/>&park=0">进入预定停车位</a>
  	</dt>
  	</dl>
  </s:iterator>
</body>
</html>