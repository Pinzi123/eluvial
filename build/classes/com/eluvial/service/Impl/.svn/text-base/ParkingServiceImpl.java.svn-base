package com.eluvial.service.Impl;

import java.util.List;

import com.eluvial.bean.Parking;
import com.eluvial.dao.ParkingDao;
import com.eluvial.dao.impl.ParkingDaoImpl;
import com.eluvial.service.ParkingService;

public class ParkingServiceImpl implements ParkingService {
	ParkingDao pDao = new ParkingDaoImpl();

	@Override
	public Parking select(int id) {
		// TODO Auto-generated method stub
		return pDao.select(id);
	}

	@Override
	public List<Parking> query(String address) {
		// TODO Auto-generated method stub
		return pDao.query(address);
	}

	@Override
	public List<Parking> query(double lat, double lng) {
		// TODO Auto-generated method stub
		return pDao.query(lat, lng);
	}

	@Override
	public void update(Parking park) {
		// TODO Auto-generated method stub
		pDao.update(park);
	}

}
