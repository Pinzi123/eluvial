package com.eluvial.interceptor;

import java.util.Map;

import javax.swing.JOptionPane;

import org.apache.struts2.ServletActionContext;

import com.eluvial.bean.User;
import com.opensymphony.xwork2.Action;
import com.opensymphony.xwork2.ActionContext;
import com.opensymphony.xwork2.ActionInvocation;
import com.opensymphony.xwork2.interceptor.AbstractInterceptor;

public class LoginInterceptor extends AbstractInterceptor {

	@Override
	public String intercept(ActionInvocation arg0) throws Exception {
		// TODO Auto-generated method stub
		User user = (User) ServletActionContext.getRequest().getSession()
				.getAttribute("user");
		System.out.println("验证！！");
		if (user != null) {
			return arg0.invoke();// 执行其他操作
		} else {
			JOptionPane.showMessageDialog(null, "请先登录！！！");
			return Action.LOGIN;// 返回Action中的LOGIN字符串
		}
	}
}
