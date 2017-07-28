package com.eluvial.dao;


import com.eluvial.bean.User;

public interface UserDao {
public void save(User user);
public User select(String name);
public void delete(String name);
public void update(User user);
}
