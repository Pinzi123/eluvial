package com.eluvial.dao;

import java.util.List;

import com.eluvial.bean.FSOrder;


public interface FSOrderDao {
	public FSOrder select(int id);
	public List<FSOrder> query(String user_name);
	public void update(String reach_time,int id);
	public void delete(int id);
	public void save(FSOrder fsOrder);
	//size设为0的时候，查询所有记录
	public List<FSOrder> findNumByCriteria(int pageNum, int size,String user_name);  
}
