package com.eluvial.service.Impl;

import java.util.List;

import com.eluvial.bean.FS;
import com.eluvial.dao.FSDao;
import com.eluvial.dao.impl.FSDaoImpl;
import com.eluvial.service.FSService;

public class FSServiceImpl implements FSService {
private FSDao fsDao=new FSDaoImpl();
	@Override
	public FS select(int id) {
		// TODO Auto-generated method stub
		return fsDao.select(id);
	}

	@Override
	public List<FS> query(double lat, double lng) {
		// TODO Auto-generated method stub
		return fsDao.query(lat, lng);
	}

	@Override
	public void addcai(int id) {
		// TODO Auto-generated method stub
		fsDao.addcai(id);
		
	}

	@Override
	public void addzan(int id) {
		// TODO Auto-generated method stub
		fsDao.addzan(id);
	}

	/*测试
	 * public static void main(String[] args) {
		FSServiceImpl fsServiceImpl=new FSServiceImpl();
		String detailString=fsServiceImpl.select(1).getDetail();
		System.out.println(detailString);
		System.out.println("----------------Dividing Line------------------");
		int size=fsServiceImpl.query(28.6, 115.9).size();
		System.out.println(size);
	}*/
}
