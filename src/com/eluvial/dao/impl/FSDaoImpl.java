package com.eluvial.dao.impl;

import java.util.List;

import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.Transaction;
import com.eluvial.bean.FS;
import com.eluvial.dao.FSDao;
import com.eluvial.util.GetSessionFactory;

public class FSDaoImpl implements FSDao {

	@Override
	public FS select(int id) {

		Session session = GetSessionFactory.getSession();
		Transaction tr = session.beginTransaction();
		Query query = session.createQuery("from FS where id=?");
		query.setLong(0, id);
		List list = query.list();
		tr.commit();
		session.close();
		return (FS)list.get(0);
	}

	@Override
	public List<FS> query(double lat, double lng) {
		// TODO Auto-generated method stub
		Session session = GetSessionFactory.getSession();
		Transaction tr = session.beginTransaction();
		Query query = session.createQuery("from FS where abs(lat-?)<0.1 and abs(lng-?)<0.1");
		query.setDouble(0, lat);
		query.setDouble(1, lng);
		@SuppressWarnings("unchecked")
		List<FS> list = query.list();
		tr.commit();
		session.close();
		return list;
	}

	@Override
	public void addcai(int id) {
		// TODO Auto-generated method stub
		Session session = GetSessionFactory.getSession();
		Transaction tr = session.beginTransaction();
		Query query = session.createQuery("update FS fs set cai =cai+1 where id =?");
		query.setInteger(0, id);
		query.executeUpdate();
		tr.commit();
		session.close();
	}

	@Override
	public void addzan(int id) {
		// TODO Auto-generated method stub
		Session session = GetSessionFactory.getSession();
		Transaction tr = session.beginTransaction();
		Query query = session.createQuery("update FS fs set zan =zan+1 where id =?");
		query.setInteger(0, id);
		query.executeUpdate();
		tr.commit();
		session.close();
		
	}
/*	public static void main(String[] args) {
		FSDaoImpl daoImpl=new FSDaoImpl();
		daoImpl.addcai(1);
	}
*/
}
