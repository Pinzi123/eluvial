package com.eluvial.service;

import com.eluvial.bean.User;

public interface UserService {
public void save(User user);
public void update(User user);
public void delete(String name);
public User select(String name);
}
