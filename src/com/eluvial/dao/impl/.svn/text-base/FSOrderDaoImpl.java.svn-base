package com.eluvial.dao.impl;

import java.util.List;

import org.hibernate.Criteria;
import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.Transaction;
import org.hibernate.criterion.Order;
import org.hibernate.criterion.Projections;
import org.hibernate.criterion.Restrictions;

import com.eluvial.bean.FSOrder;
import com.eluvial.bean.Orderpark;
import com.eluvial.dao.FSOrderDao;
import com.eluvial.util.GetSessionFactory;

public class FSOrderDaoImpl implements FSOrderDao {

	@Override
	public FSOrder select(int id) {
		// TODO Auto-generated method stub
		Session session = GetSessionFactory.getSession();
		Transaction tr = session.beginTransaction();
		Query query = session.createQuery("from FSOrder where id=?");
		query.setLong(0, id);
		List list = query.list();
		tr.commit();
		session.close();
		return (FSOrder) list.get(0);
	}

	@Override
	public List<FSOrder> query(String user_name) {
		// 查询该用户所有订单
		Session session = GetSessionFactory.getSession();
		Transaction tr = session.beginTransaction();
		Query query = session
				.createQuery("from FSOrder where user_name=? order by order_date desc");
		query.setString(0, user_name);
		@SuppressWarnings("unchecked")
		List<FSOrder> list = query.list();
		tr.commit();
		session.close();
		return list;
	}

	@Override
	public void update(String reach_time, int id) {
		Session session = GetSessionFactory.getSession();
		Transaction tr = session.beginTransaction();
		Query query = session.createQuery("update FSOrder t set reach_time =? where id =?");
		query.setString(0, reach_time);
		query.setLong(1, id);
		query.executeUpdate();
		tr.commit();
		session.close();

	}

	@Override
	public void delete(int id) {
		Session session = GetSessionFactory.getSession();
		Transaction tr = session.beginTransaction();
		Query query = session.createQuery("from FSOrder where id=?");
		query.setLong(0, id);
		FSOrder order = (FSOrder) query.uniqueResult();
		System.out.println(order.getId());
		session.delete(order);
		tr.commit();
		session.close();

	}

	@Override
	public void save(FSOrder fsOrder) {
		Session session = GetSessionFactory.getSession();
		Transaction tr = session.beginTransaction();
		session.save(fsOrder);
		tr.commit();
		session.close();

	}

	@Override
	public List<FSOrder> findNumByCriteria(int pageNum, int size,
			String user_name) {
		// TODO Auto-generated method stub
		int firstNum=pageNum*size;
		Session session = GetSessionFactory.getSession();
		Criteria crit = session.createCriteria(FSOrder.class);
		crit.add(Restrictions.like("user_name", user_name));
		Long total=(Long)crit.setProjection(Projections.rowCount()).uniqueResult();
		crit.setProjection(null);
		if (firstNum<=total) {
			if (size!=0) {
				crit.setMaxResults(size);
			}
			
			crit.setFirstResult(firstNum).addOrder(Order.desc("order_date"));		
		List<FSOrder> fsOrders=crit.list();
		return fsOrders;
		}else {
			return null;
		}
	}

}
