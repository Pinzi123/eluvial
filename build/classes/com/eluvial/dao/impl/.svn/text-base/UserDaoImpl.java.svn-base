package com.eluvial.dao.impl;

import java.util.List;

import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.Transaction;
import com.eluvial.bean.User;
import com.eluvial.dao.UserDao;
import com.eluvial.util.GetSessionFactory;

public class UserDaoImpl implements UserDao {

	@Override
	public User select(String name) {
		// TODO Auto-generated method stub
		Session session = GetSessionFactory.getSession();
		Transaction tr = session.beginTransaction();
		Query query = session.createQuery("from User where name=?");
		query.setString(0, name);
		List list = query.list();
		tr.commit();
		session.close();
		if (list.size()!=0) {
			return (User) list.get(0);
		}else {
			return null;
		}
		
	}

	@Override
	public void delete(String name) {
		// TODO Auto-generated method stub
		Session session = GetSessionFactory.getSession();
		Transaction tr = session.beginTransaction();
		Query query = session.createQuery("from User where name=?");
		query.setString(0, name);
		User student = (User) query.uniqueResult();
		// 把学生信息从数据库中删除
		session.delete(student);
		tr.commit();
		session.close();
	}

	@Override
	public void save(User user) {
		// TODO Auto-generated method stub
		Session session = GetSessionFactory.getSession();
		Transaction tr = session.beginTransaction();
		session.save(user);
		tr.commit();
		session.close();
	}


	@Override
	public void update(User user) {
		// TODO Auto-generated method stub
		Session session = GetSessionFactory.getSession();
		Transaction tr = session.beginTransaction();
		session.update(user);
		tr.commit();
		session.close();

	}

}
