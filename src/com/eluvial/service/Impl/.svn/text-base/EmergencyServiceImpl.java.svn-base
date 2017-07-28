package com.eluvial.service.Impl;

import java.util.List;

import com.eluvial.bean.Emergency;
import com.eluvial.dao.EmergencyDao;
import com.eluvial.dao.impl.EmergencyDaoImpl;
import com.eluvial.service.EmergencyService;

public class EmergencyServiceImpl implements EmergencyService {
private EmergencyDao emergencyDao=new EmergencyDaoImpl();
	@Override
	public List<Emergency> selectType(String type) {
		// TODO Auto-generated method stub
		return emergencyDao.selectType(type);
	}
	@Override
	public List<Emergency> selectEcase(String ecase) {
		// TODO Auto-generated method stub
		return emergencyDao.selectEcase(ecase);
	}
	@Override
	public List<Emergency> query(String type, String ecase) {
		// TODO Auto-generated method stub
		return emergencyDao.query(type, ecase);
	}

}
