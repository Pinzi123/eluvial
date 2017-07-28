package com.eluvial.dao;

import java.util.List;
import com.eluvial.bean.Orderpark;

public interface OrderparkDao {
public Orderpark select(int id);
public Orderpark query(String time);
public List<Orderpark> queryOrderparks(String user_name);
public void update(String leave_time,int id);
public void delete(int id);
public void save(Orderpark orderpark);
public int reach(String time,int id);
public int leave(String time,int id);
//size设为0的时候，查询所有记录
	public List<Orderpark> findNumByCriteria(int pageNum, int size,String user_name); 
}
