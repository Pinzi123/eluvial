package com.eluvial.action;


import java.util.Calendar;

import java.util.List;


import org.apache.struts2.ServletActionContext;

import com.eluvial.bean.Orderpark;
import com.eluvial.bean.Parking;
import com.eluvial.service.OrderparkService;
import com.eluvial.service.Impl.OrderparkServiceImpl;
import com.opensymphony.xwork2.ActionSupport;

public class ParkingAction extends ActionSupport {
	private Orderpark orderpark;

	public Orderpark getOrderpark() {
		return orderpark;
	}

	public void setOrderpark(Orderpark orderpark) {
		this.orderpark = orderpark;
	}
//创建停车预订单
	public String execute() {
		// TODO Auto-generated method stub
		OrderparkService oServiceImpl = new OrderparkServiceImpl();
/*		String park_name = null;
		List<Parking> parks = (List<Parking>) ServletActionContext.getRequest()
				.getSession().getAttribute("parks");
		for (int i = 0; i < parks.size(); i++) {
			if (parks.get(i).getId() == orderpark.getParking_id()) {
				park_name = parks.get(i).getName();
				break;
			}
		}*/
	
		//将到达时间转换日期类，方便于计算
		String reach=orderpark.getReach_time();
		if (reach.length()<18) {
			reach=reach+":00";
			orderpark.setReach_time(reach);
		}
		Calendar calendar =oServiceImpl.convertCalendar(reach);
		//判断是否能从预定时间停到离开的时候，每个小时计算一次
		int leave=Integer.parseInt(orderpark.getLeave_time());
		for (int i = 0; i <= leave; i++) {
			calendar.add(Calendar.HOUR_OF_DAY,i);
			String leaveString=oServiceImpl.convertString(calendar);
			int remain = oServiceImpl.remain(orderpark.getParking_id(),
					leaveString);
			if (remain<=0) {
				return "full";
			}
		}
			oServiceImpl.save(orderpark);
/*			ServletActionContext.getRequest().setAttribute("park_name",
					park_name);*/
			return "success";
	}
}
