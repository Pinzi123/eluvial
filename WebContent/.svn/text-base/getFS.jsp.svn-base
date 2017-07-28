<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@taglib prefix="s" uri="/struts-tags"  %>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Insert title here</title>
</head>
<body>
  <s:iterator value="FSs" var="FS" status="st">
  	<ul>
  	<li><s:property value="#FS.name"/></li>
  	</ul>
  	<dl>
  	<dt>
  	地址：<s:property value="#FS.address"/>
  	</dt>
  	<dt>
  	详情：<s:property value="#FS.detail"/>
  	</dt>
  	<dt>
  	电话号码：<s:property value="#FS.tel"/>
  	</dt>
  	<dt>
  	<a href="/eluvial/shopdetail.html?id=<s:property value="#FS.id"/>&FS=0">进入预定</a>
  	</dt>
  	</dl>
  </s:iterator>
</body>
</html>