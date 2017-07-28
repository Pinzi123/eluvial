package com.eluvial.action;

import java.io.IOException;
import java.util.List;

import javax.servlet.http.HttpServletResponse;

import net.sf.json.JSONArray;

import org.apache.struts2.ServletActionContext;

import com.eluvial.bean.FSOrder;
import com.eluvial.bean.User;
import com.eluvial.service.FSOrderService;
import com.eluvial.service.Impl.FSOrderServiceImpl;
import com.opensymphony.xwork2.ActionContext;

public class OrderFSAction {
	private int id;
	private String reach_time;
	private int pagenum;
	
	public void setFsOrderService(FSOrderService fsOrderService) {
		this.fsOrderService = fsOrderService;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getReach_time() {
		return reach_time;
	}

	public void setReach_time(String reach_time) {
		this.reach_time = reach_time;
	}

	private FSOrder fsOrder;
	private FSOrderService fsOrderService=new FSOrderServiceImpl();
	
	public FSOrder getFsOrder() {
		return fsOrder;
	}

	public void setFsOrder(FSOrder fsOrder) {
		System.out.println(fsOrder);
		this.fsOrder = fsOrder;
	}

	public String addOrder(){
		fsOrderService.save(fsOrder);
		return "success";
	}
	
	public String deleteOrder(){
		fsOrderService.delete(id);
		return null;
	}
	
	public String updateOrder(){
		fsOrderService.update(reach_time, id);
		return "success";
	}
	
	public String queryOrder() {
		User u1=(User) ServletActionContext.getRequest().getSession()
				.getAttribute("user");
		String user_name=u1.getName();
		List<FSOrder> FSOrders=fsOrderService.query(user_name);
		ServletActionContext.getRequest()
		.setAttribute("FSOrders",FSOrders);
		return "orders";
		
	}
	public String queryFSorder() throws IOException{
		User u1=(User) ServletActionContext.getRequest().getSession()
				.getAttribute("user");
		String user_name=u1.getName();
		int size=6;
		List<FSOrder> FSOrders=fsOrderService
				.getMore(pagenum, size, user_name);
		//将list转化成JSON对象
		JSONArray jsonArray = JSONArray.fromObject(FSOrders);
		HttpServletResponse response = (HttpServletResponse) ActionContext.getContext().get(ServletActionContext.HTTP_RESPONSE);
		response.setCharacterEncoding("UTF-8");
		response.getWriter().print(jsonArray);
		return null; 
	}
}
