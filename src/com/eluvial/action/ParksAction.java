package com.eluvial.action;

import java.util.List;
import com.eluvial.bean.Parking;
import com.eluvial.service.OrderparkService;
import com.eluvial.service.ParkingService;
import com.eluvial.service.Impl.OrderparkServiceImpl;
import com.eluvial.service.Impl.ParkingServiceImpl;
import com.opensymphony.xwork2.ActionSupport;

public class ParksAction extends ActionSupport {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private List<Parking> parks;
	private double lat;
	private double lng;
	private String reach;
	private int id;
	private Parking park;
	
	public Parking getPark() {
		return park;
	}

	public void setId(int id) {
		this.id = id;
	}

	public List<Parking> getParks() {
		return parks;
	}

	public void setLat(double lat) {
		this.lat = lat;
	}

	public void setLng(double lng) {
		this.lng = lng;
	}

	public void setReach(String reach) {
		this.reach = reach;
	}

	public String execute() {

		ParkingService pService = new ParkingServiceImpl();
		OrderparkService orderService=new OrderparkServiceImpl();
		//查出附近的停车场
		parks = pService.query(lat,lng);
		//一个个检查附近的停车场,没有剩余车位的移除
		for (int i = 0; i < parks.size(); i++) {
			Parking parking=parks.get(i);
			int remain=orderService.remain(parking.getId(), reach);
			if (remain<=0) {
				parks.remove(i);
			}else{
				parks.get(i).setRemainder(remain);
			}
		}
		if (parks.isEmpty()) {
			return "error";
		}else{
/*			this.request.setAttribute("parks", parks);
			this.request.setAttribute("reach", reach);*/
			return "success";
		}
	}
	
	public String onePark(){
		ParkingService pService = new ParkingServiceImpl();
		park=pService.select(id);
		return "success";
	}

/*	@Override
	public void setServletRequest(HttpServletRequest arg0) {
		// TODO Auto-generated method stub
		this.request=arg0;	}*/
}
