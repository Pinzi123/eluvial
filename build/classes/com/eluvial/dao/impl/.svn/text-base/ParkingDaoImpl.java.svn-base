package com.eluvial.dao.impl;

import java.util.List;

import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.Transaction;

import com.eluvial.bean.Parking;
import com.eluvial.dao.ParkingDao;
import com.eluvial.util.GetSessionFactory;

public class ParkingDaoImpl implements ParkingDao {

	@Override
	public Parking select(int id) {
		// TODO Auto-generated method stub
		Session session = GetSessionFactory.getSession();
		Transaction tr = session.beginTransaction();
		Query query = session.createQuery("from Parking where id=?");
		query.setLong(0, id);
		List list = query.list();
		tr.commit();
		session.close();
		return (Parking) list.get(0);
	}

	@Override
	public List<Parking> query(String address) {
		// TODO Auto-generated method stub
		Session session = GetSessionFactory.getSession();
		Transaction tr = session.beginTransaction();
		Query query = session.createQuery("from Parking as p where p.address like :address");
		query.setString("address", "%"+address+"%");
		@SuppressWarnings("unchecked")
		List<Parking> list = query.list();
		tr.commit();
		session.close();
		return list;
	}

	@Override
	public List<Parking> query(double lat, double lng) {
		// TODO Auto-generated method stub
		System.out.println(lat+" "+lng);
		Session session = GetSessionFactory.getSession();
		Transaction tr = session.beginTransaction();
		Query query = session.createQuery("from Parking where abs(lat-?)<0.1 and abs(lng-?)<0.1");
		query.setDouble(0, lat);
		query.setDouble(1, lng);
		@SuppressWarnings("unchecked")
		List<Parking> list = query.list();
		tr.commit();
		session.close();
		return list;
	}

	@Override
	public void update(Parking park) {
		// TODO Auto-generated method stub
		Session session = GetSessionFactory.getSession();
		Transaction tr = session.beginTransaction();
		session.update(park);
		tr.commit();
		session.close();
	}

}
