package com.eluvial.action;

import java.util.List;


import org.apache.struts2.ServletActionContext;

import com.eluvial.bean.Orderpark;

import com.eluvial.bean.User;
import com.eluvial.service.OrderparkService;

import com.eluvial.service.Impl.OrderparkServiceImpl;
import com.opensymphony.xwork2.ActionSupport;

public class POrdersAction extends ActionSupport {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	List<Orderpark> porders;
	private int pageNum;
	
	public void setPageNum(int pageNum) {
		this.pageNum = pageNum;
	}

	public List<Orderpark> getPorders() {
		return porders;
	}

	public void setPorders(List<Orderpark> porders) {
		this.porders = porders;
	}
	//查询出该用户所有停车订单
	@Override
	public String execute() throws Exception {
		// TODO Auto-generated method stub
		OrderparkService porderservice = new OrderparkServiceImpl();
		User user = (User) ServletActionContext.getRequest().getSession()
				.getAttribute("user");
		int size=6;
		System.out.println(pageNum);
		porders = porderservice.findNumByCriteria(pageNum, size, user.getName());	
			return "success";		
		}
	}
