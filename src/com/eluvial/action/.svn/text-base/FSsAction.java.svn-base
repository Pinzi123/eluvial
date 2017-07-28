package com.eluvial.action;

import java.util.List;
import com.eluvial.bean.FS;
import com.eluvial.service.FSService;
import com.eluvial.service.Impl.FSServiceImpl;

public class FSsAction {
	private double lat;
	private double lng;
	private List<FS> FSs;
	private FS fs;
	private int id;
	
	public void setId(int id) {
		this.id = id;
	}
	public FS getFs() {
		return fs;
	}
	public void setLat(double lat) {
		this.lat = lat;
	}
	public void setLng(double lng) {
		this.lng = lng;
	}
	public List<FS> getFSs() {
		return FSs;
	}
	public void setFSs(List<FS> fSs) {
		FSs = fSs;
	}
	public String execute() {
		FSService fsService=new FSServiceImpl();
		FSs=fsService.query(lat, lng);
		if(FSs.isEmpty()){
			return "error";
		}else {
			return "success";
		}	
	}
	public String oneFS(){
		FSService fsService=new FSServiceImpl();
		fs=fsService.select(id);
		return "success";
	}
	
	public String addzan(){
		FSService fsService=new FSServiceImpl();
		fsService.addzan(id);
		System.out.println("zan");
		return null;
	}
	
	public String addcai(){
		FSService fsService=new FSServiceImpl();
		fsService.addcai(id);
		return null;
	}
}
