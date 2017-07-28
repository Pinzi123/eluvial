package com.eluvial.util;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;
import org.hibernate.service.ServiceRegistry;
import org.hibernate.service.ServiceRegistryBuilder;

public class GetSessionFactory {
	public static Session getSession() {
		// 读取hibernate.cfg.xml配置文件，生成SessionFactory对象
		Configuration cfg = new Configuration().configure();
		// 产生生产Session的工厂，工厂的名字是从hibernate.cfg.xml读取的
		ServiceRegistry serviceRegistry = new ServiceRegistryBuilder().applySettings(cfg.getProperties()).buildServiceRegistry();
		SessionFactory sf = cfg.buildSessionFactory(serviceRegistry);
		// 建立session对象session，Session接口用来操作PO的更新、删除等操作，是Hibernate的核心
		Session session = sf.openSession();
		// 开始事务，Transaction对象保存操作结果到数据库

		return session;
	}
}
