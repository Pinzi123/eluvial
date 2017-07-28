package com.eluvial.action;

import javax.swing.JOptionPane;

import org.apache.struts2.ServletActionContext;

import com.eluvial.bean.User;
import com.eluvial.service.UserService;
import com.eluvial.service.Impl.UserServiceImpl;
import com.opensymphony.xwork2.ActionSupport;

public class UserAction extends ActionSupport{
	private User user;

	public User getUser() {
		return user;
	}
	
	public void setUser(User user) {
		this.user = user;
	}

	public String updateUser() {
		UserService userService=new UserServiceImpl();
		User u1=(User) ServletActionContext.getRequest().getSession()
		.getAttribute("user");
		user.setPassword(u1.getPassword());
		userService.update(user);
		ServletActionContext.getRequest().getSession()
		.setAttribute("user", user);
		return SUCCESS;
	}
	public String updatePass() {
		UserService userService=new UserServiceImpl();
		userService.update(user);
		ServletActionContext.getRequest().getSession()
		.setAttribute("user", user);
		return SUCCESS;
	}
	
	public String saveUser() {
		UserService userService=new UserServiceImpl();
		if (user.getName()==null&&user.getPassword()==null) {
			JOptionPane.showMessageDialog(null, "请输入完整用户信息！！！");
			return ERROR;
		}
		userService.save(user);
		return SUCCESS;
	}
}
