package com.eluvial.dao.impl;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import org.hibernate.Criteria;
import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.Transaction;
import org.hibernate.criterion.Order;
import org.hibernate.criterion.Projections;
import org.hibernate.criterion.Restrictions;

import com.eluvial.bean.Orderpark;
import com.eluvial.dao.OrderparkDao;
import com.eluvial.util.GetSessionFactory;

public class OrderparkDaoImpl implements OrderparkDao {

	@Override
	public Orderpark select(int id) {
		// TODO Auto-generated method stub
		Session session = GetSessionFactory.getSession();
		Transaction tr = session.beginTransaction();
		Query query = session.createQuery("from Orderpark where id=?");
		query.setLong(0, id);
		List list = query.list();
		tr.commit();
		session.close();
		return (Orderpark) list.get(0);
	}

	@Override
	public Orderpark query(String time) {
		// TODO Auto-generated method stub
		Session session = GetSessionFactory.getSession();
		Transaction tr = session.beginTransaction();
		Query query = session.createQuery("from Orderpark where reach_time=?");
		query.setString(0, time);
		List list = query.list();
		tr.commit();
		return (Orderpark) list.get(0);
	}

	// 查询该时间前到达的车辆数
	@Override
	public int reach(String time, int id) {
		// TODO Auto-generated method stub
		Session session = GetSessionFactory.getSession();
		Transaction tr = session.beginTransaction();
		String now = getNow();
		Query query = session
				.createQuery("select count(*) from Orderpark where parking_id=? and ?<reach_time and reach_time<?");
		query.setLong(0, id);
		query.setString(1, now);
		query.setString(2, time);
		// 由于Hibernate4版本的（select count(*)）查询返回的结果是个Long不能强制转换
		Long lo = (Long) query.uniqueResult();
		// 解决办法把long型拆分字符串进行转换
		Integer n = new Integer(String.valueOf(lo));
		tr.commit();
		session.close();
		return n;
	}

	// 查询该时间前离开的车辆数
	@Override
	public int leave(String time, int id) {
		// TODO Auto-generated method stub
		Session session = GetSessionFactory.getSession();
		Transaction tr = session.beginTransaction();
		String now = getNow();
		Query query = session
				.createQuery("select count(*) from Orderpark where parking_id=? and ?<leave_time and leave_time<?");
		query.setLong(0, id);
		query.setString(1, now);
		query.setString(2, time);
		// 由于Hibernate4版本的（select count(*)）查询返回的结果是个Long不能强制转换
		Long lo = (Long) query.uniqueResult();
		// 解决办法把long型拆分字符串进行转换
		Integer n = new Integer(String.valueOf(lo));
		tr.commit();
		session.close();
		return n;
	}

	public String getNow() {
		String time = null;
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		time = sdf.format(new Date());
		return time;
	}

	@Override
	public void save(Orderpark orderpark) {
		// TODO Auto-generated method stub
		Session session = GetSessionFactory.getSession();
		Transaction tr = session.beginTransaction();
		session.save(orderpark);
		tr.commit();
		session.close();
	}

	@Override
	public void delete(int id) {
		// TODO Auto-generated method stub
		Session session = GetSessionFactory.getSession();
		Transaction tr = session.beginTransaction();
		Query query = session.createQuery("from Orderpark where id=?");
		query.setLong(0, id);
		Orderpark orderpark = (Orderpark) query.uniqueResult();
		System.out.println(orderpark.getId());
		session.delete(orderpark);
		tr.commit();
		session.close();
	}

	@Override
	public List<Orderpark> queryOrderparks(String user_name) {
		//查询该用户所有订单
		Session session = GetSessionFactory.getSession();
		Transaction tr = session.beginTransaction();
		Query query = session.createQuery("from Orderpark where user_name=? order by co_date desc");
		query.setString(0, user_name);
		@SuppressWarnings("unchecked")
		List<Orderpark> list = query.list();
		tr.commit();
		session.close();
		return list;
	}

	@Override
	public void update(String leave_time,int id) {
		Session session = GetSessionFactory.getSession();
		Transaction tr = session.beginTransaction();
		Query query = session.createQuery("update Orderpark t set leave_time =? where id =?");
		query.setString(0, leave_time);
		query.setLong(1, id);
		query.executeUpdate();
		tr.commit();
		session.close();
	}

	@Override
	public List<Orderpark> findNumByCriteria(int pageNum, int size,
			String user_name) {
		// TODO Auto-generated method stub
		int firstNum=pageNum*size;
		System.out.println(firstNum);
		Session session = GetSessionFactory.getSession();
		Criteria crit = session.createCriteria(Orderpark.class);
		crit.add(Restrictions.like("user_name", user_name));
		Long total=(Long)crit.setProjection(Projections.rowCount()).uniqueResult();
		crit.setProjection(null);
		if (firstNum<=total) {
		if (size!=0) {
			crit.setMaxResults(size);
		}
		
		crit.setFirstResult(firstNum).addOrder( Order.desc("co_date") ) ;
		
		List<Orderpark> list=crit.list();
		return list;
		}else{
			return null;
		}
	}
}
