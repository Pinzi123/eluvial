package com.eluvial.action;

import org.apache.struts2.ServletActionContext;

import com.opensymphony.xwork2.ActionSupport;

public class Verification_Code extends ActionSupport {
private String srand;

public String getSrand() {
	return srand;
}

public void setSrand(String srand) {
	this.srand = srand;
}

@Override
public String execute() throws Exception {
	// TODO Auto-generated method stub
	String rand=(String) ServletActionContext.getRequest().getSession().getAttribute("rand");
	String code="yes";
	if (!rand.equalsIgnoreCase(srand)) {
		code="no";
	}
	ServletActionContext.getResponse().getWriter().print(code);
	return null;
}

}
