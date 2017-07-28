package com.eluvial.action;

import java.util.Calendar;

import com.eluvial.bean.Orderpark;
import com.eluvial.service.OrderparkService;
import com.eluvial.service.Impl.OrderparkServiceImpl;
import com.opensymphony.xwork2.ActionSupport;

public class POrderAction extends ActionSupport{
private	String leave;
private String leave_time;
private int parking_id;
private int id;
public int getParking_id() {
	return parking_id;
}

public void setParking_id(int parking_id) {
	this.parking_id = parking_id;
}
public String getLeave() {
	return leave;
}

public void setLeave(String leave) {
	this.leave = leave;
}

OrderparkService porderservice = new OrderparkServiceImpl();

public String getLeave_time() {
	return leave_time;
}

public void setLeave_time(String leave_time) {
	this.leave_time = leave_time;
}

public int getId() {
	return id;
}

public void setId(int id) {
	this.id = id;
}
//修改订单，延长停车时间
	public String updatePorder() throws Exception {

		Calendar calendar = porderservice.convertCalendar(leave);
		// 判断是否能延时，每个小时计算一次有无空闲车位
		int leave = Integer.parseInt(leave_time);
		for (int i = 0; i <= leave; i++) {
			calendar.add(Calendar.HOUR_OF_DAY, i);
			String leaveString = porderservice.convertString(calendar);
			int remain = porderservice.remain(parking_id, leaveString);
			System.out.println(remain);
			if (remain <= 0) {
				return "full";
			}
		}
		leave_time = porderservice.convertString(calendar);
		porderservice.update(leave_time, id);
		return "updatePorder";
	}
//删除订单
public String  deletePorder() throws Exception{
	
	porderservice.delete(id);
	return null;
}
}
