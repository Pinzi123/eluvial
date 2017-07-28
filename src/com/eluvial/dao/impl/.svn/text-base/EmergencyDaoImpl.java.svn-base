package com.eluvial.dao.impl;

import java.util.List;

import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.Transaction;

import com.eluvial.bean.Emergency;
import com.eluvial.dao.EmergencyDao;
import com.eluvial.util.GetSessionFactory;

public class EmergencyDaoImpl implements EmergencyDao{

	@Override
	public List<Emergency> selectType(String type) {
		// TODO Auto-generated method stub
		
				Session session = GetSessionFactory.getSession();
				Transaction tr = session.beginTransaction();
				Query query = session.createQuery("from Emergency where emer_type=?");
				query.setString(0, type);
				@SuppressWarnings("unchecked")
				List<Emergency> list = query.list();
				tr.commit();
				return list;
	}

	@Override
	public List<Emergency> selectEcase(String ecase) {
		// TODO Auto-generated method stub
		Session session = GetSessionFactory.getSession();
		Transaction tr = session.beginTransaction();
		Query query = session.createQuery("from Emergency where emer_case like ?");
		query.setString(0, "%"+ecase+"%");
		@SuppressWarnings("unchecked")
		List<Emergency> list = query.list();
		tr.commit();
		return list;
	}

	@Override
	public List<Emergency> query(String type, String ecase) {

				Session session = GetSessionFactory.getSession();
				Transaction tr = session.beginTransaction();
				Query query = session.createQuery("from Emergency where emer_type=? and emer_case like ?");
				query.setString(0, type);
				query.setString(1, "%"+ecase+"%");
				@SuppressWarnings("unchecked")
				List<Emergency> list = query.list();
				tr.commit();
				return list;
	}

}
