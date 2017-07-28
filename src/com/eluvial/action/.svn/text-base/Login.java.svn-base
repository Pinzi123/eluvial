package com.eluvial.action;

import java.io.IOException;

import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import javax.swing.JOptionPane;
import javax.websocket.Session;

import org.apache.struts2.ServletActionContext;

import com.eluvial.bean.User;
import com.eluvial.service.UserService;
import com.eluvial.service.Impl.UserServiceImpl;
import com.opensymphony.xwork2.ActionSupport;

public class Login extends ActionSupport {
	private String name;
	private String password;
	private User user;

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String login() {
		UserService userService=new UserServiceImpl();
	    user = userService.select(name);
	    //登录验证,应该放在service中
		if (user == null){
			JOptionPane.showMessageDialog(null, "用户名不存在！！！");
		}
		else if (!user.getPassword().equals(password)) {
			JOptionPane.showMessageDialog(null, "密码错误！！！");			
		}else {
			ServletActionContext.getRequest().getSession()
			.setAttribute("user", user);
	        return "success";
		}		
		return "error";
	}
	
	public String logout(){
		HttpSession session=ServletActionContext.getRequest().getSession();
		if (session.getAttribute("user")!=null) {			
			session.removeAttribute("user");
			session.invalidate();
			return "success";
		}else {
			return "error";
		}
	}
	public String findByName() throws IOException{
		UserService userService=new UserServiceImpl();
		String findByNameTip; 
		if(name==null)
			return null;
	    user = userService.select(name);
		if (user != null) {
		findByNameTip = "exist"; // 存在用户
		} else {
		findByNameTip = "noexist"; // 不存在用户
		}
		ServletActionContext.getResponse().getWriter().print(findByNameTip);
		return null;
		} 
	
	public String findByPass() throws IOException{
		HttpSession session=ServletActionContext.getRequest().getSession();
		User u=(User) session.getAttribute("user");
		String findByNameTip; 
		if(password==null)
			return null;
		else if (password.equals(u.getPassword())) {
		findByNameTip = "exist"; // 存在
		} else {
		findByNameTip = "noexist"; // 不存在
		}
		ServletActionContext.getResponse().getWriter().print(findByNameTip);
		return null;
		} 
	public String login_val() throws IOException{
		HttpSession session=ServletActionContext.getRequest().getSession();
		User u=(User) session.getAttribute("user");
		
		HttpServletResponse response=ServletActionContext.getResponse();
		response.setContentType( "text/html" );
		response.setCharacterEncoding( "UTF-8" );
		String Tip; 
		if(u==null){
		Tip = "noexist"; // 不存在用户
		} else {
			Tip =u.getName(); // 不存在用户
		}
		response.getWriter().print(Tip);
		return null;
	}
}
