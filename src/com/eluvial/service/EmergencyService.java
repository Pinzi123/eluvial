package com.eluvial.service;

import java.util.List;

import com.eluvial.bean.Emergency;

public interface EmergencyService {
	public List<Emergency> selectType(String type);
	public List<Emergency> selectEcase(String ecase);
	public List<Emergency> query(String type,String ecase);
}
