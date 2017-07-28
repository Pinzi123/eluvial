package com.eluvial.service;

import java.util.Calendar;
import java.util.List;

import com.eluvial.bean.Orderpark;

public interface OrderparkService {
	public Orderpark select(int id);
	public List<Orderpark> queryOrderparks(String user_name);
	public void update(String leave_time,int id);
	public void save(Orderpark orderpark);
	public void delete(int id);
	public Orderpark query(String time);
	//判断停车场在time时还有多少停车位
	public int remain(int id,String time);
    public Calendar convertCalendar(String reach);
    public String convertString(Calendar c);
    public List<Orderpark> findNumByCriteria(int pageNum, int size,String user_name);
}
