package com.eluvial.service;

import java.util.List;

import com.eluvial.bean.FS;

public interface FSService {

	public FS select(int id);
	public List<FS> query(double lat,double lng);
	public void addcai(int id);
	public void addzan(int id);
}
