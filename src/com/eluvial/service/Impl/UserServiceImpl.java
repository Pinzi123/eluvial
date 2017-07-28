package com.eluvial.service.Impl;

import com.eluvial.bean.User;
import com.eluvial.dao.UserDao;
import com.eluvial.dao.impl.UserDaoImpl;
import com.eluvial.service.UserService;

public class UserServiceImpl implements UserService {
UserDao uDao=new UserDaoImpl();
	@Override
	public void save(User user) {
		// TODO Auto-generated method stub
		uDao.save(user);
	}

	@Override
	public void update(User user) {
		// TODO Auto-generated method stub
		uDao.update(user);
	}

	@Override
	public void delete(String name) {
		// TODO Auto-generated method stub
		uDao.delete(name);

	}

	@Override
	public User select(String name) {
		// TODO Auto-generated method stub
		User user=uDao.select(name);
		return user;
	}

}
