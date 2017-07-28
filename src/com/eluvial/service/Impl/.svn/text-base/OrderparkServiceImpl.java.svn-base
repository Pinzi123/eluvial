package com.eluvial.service.Impl;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

import com.eluvial.bean.Orderpark;
import com.eluvial.bean.Parking;
import com.eluvial.dao.OrderparkDao;
import com.eluvial.dao.impl.OrderparkDaoImpl;
import com.eluvial.service.OrderparkService;
import com.eluvial.service.ParkingService;

public class OrderparkServiceImpl implements OrderparkService {
OrderparkDao orderDao=new OrderparkDaoImpl();
	@Override
	public Orderpark select(int id) {
		// TODO Auto-generated method stub
		return orderDao.select(id);
	}

	@Override
	public Orderpark query(String time) {
		// TODO Auto-generated method stub
		return orderDao.query(time);
	}

	@Override
	public int remain(int id,String time) {
		// time格式年月日小时分钟秒
		ParkingService pService=new ParkingServiceImpl();
		int leave=orderDao.leave(time,id);
		int reach=orderDao.reach(time,id);
		System.out.println("离开"+leave+" "+"到达"+reach);
		Parking park=pService.select(id);
		int remain=park.getRemainder();
		remain=remain-reach+leave;
		return remain;
	}

	@Override
	public void save(Orderpark orderpark) {
		// TODO Auto-generated method stub
		//计算离开时间
		int leave=Integer.parseInt(orderpark.getLeave_time());
		String reach=orderpark.getReach_time();
		if (reach.length()<18) {
			reach=reach+":00";
			orderpark.setReach_time(reach);
		}
		System.out.println(reach);
		String srcPat="yyyy-MM-dd HH:mm:ss";
		SimpleDateFormat srcSdf=new SimpleDateFormat(srcPat);
		Date date=null;
		try {
			date=srcSdf.parse(reach);
		} catch (ParseException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		Calendar calendar = Calendar.getInstance();
		calendar.setTime(date);
		calendar.add(Calendar.HOUR_OF_DAY,leave);
		String leaveString=srcSdf.format(calendar.getTime());
		orderpark.setLeave_time(leaveString);
		orderDao.save(orderpark);
	}

	@Override
	public void delete(int id) {
		// TODO Auto-generated method stub
		orderDao.delete(id);
	}

	@Override
	public List<Orderpark> queryOrderparks(String user_name) {
		// TODO Auto-generated method stub
		return orderDao.queryOrderparks(user_name);
	}

	@Override
	public void update(String leave_time,int id) {
		// TODO Auto-generated method stub
		orderDao.update(leave_time, id);
	}
	//将字符串转换成calendar
    public Calendar convertCalendar(String reach){
    	String srcPat="yyyy-MM-dd HH:mm:ss";
		SimpleDateFormat srcSdf=new SimpleDateFormat(srcPat);
		Date date=null;
		try {
			date=srcSdf.parse(reach);
		} catch (ParseException e) {
			e.printStackTrace();
		}
		Calendar calendar = Calendar.getInstance();
		calendar.setTime(date);
		return calendar;
    }
    public String convertString(Calendar c){
    	String srcPat="yyyy-MM-dd HH:mm:ss";
		SimpleDateFormat srcSdf=new SimpleDateFormat(srcPat);
		String cString=srcSdf.format(c.getTime());
		return cString;
    }

	@Override
	public List<Orderpark> findNumByCriteria(int pageNum, int size,
			String user_name) {
		// TODO Auto-generated method stub
		return orderDao.findNumByCriteria(pageNum, size, user_name);
	}
}
