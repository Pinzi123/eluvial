package com.eluvial.service.Impl;

import java.util.List;

import com.eluvial.bean.FSOrder;
import com.eluvial.dao.FSOrderDao;
import com.eluvial.dao.impl.FSOrderDaoImpl;
import com.eluvial.service.FSOrderService;

public class FSOrderServiceImpl implements FSOrderService {
 FSOrderDao fOrderService=new FSOrderDaoImpl();
	@Override
	public FSOrder select(int id) {
		// TODO Auto-generated method stub
		return fOrderService.select(id);
	}

	@Override
	public List<FSOrder> query(String user_name) {
		// TODO Auto-generated method stub
		return fOrderService.query(user_name);
	}

	@Override
	public void update(String reach_time, int id) {
		// TODO Auto-generated method stub
		fOrderService.update(reach_time, id);
	}

	@Override
	public void delete(int id) {
		// TODO Auto-generated method stub
		fOrderService.delete(id);
	}

	@Override
	public void save(FSOrder fsOrder) {
		// TODO Auto-generated method stub
		fOrderService.save(fsOrder);
	}

	@Override
	public List<FSOrder> getMore(int firstNum, int size, String user_name) {
		// TODO Auto-generated method stub
		return fOrderService.findNumByCriteria(firstNum, size, user_name);
	}

}
