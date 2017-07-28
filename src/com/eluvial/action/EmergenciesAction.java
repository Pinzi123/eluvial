package com.eluvial.action;

import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;
import java.util.Iterator;
import java.util.List;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;

import org.apache.struts2.ServletActionContext;

import com.eluvial.bean.Emergency;
import com.eluvial.service.EmergencyService;
import com.eluvial.service.Impl.EmergencyServiceImpl;
import com.opensymphony.xwork2.ActionSupport;

@SuppressWarnings("serial")
public class EmergenciesAction extends ActionSupport {
	private String type;
	private String ecase;
	public String getEcase() {
		return ecase;
	}

	public void setEcase(String ecase) {
		this.ecase = ecase;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	@Override
	public String execute() throws Exception {
		// TODO Auto-generated method stub
		System.out.println(type);
		EmergencyService emerService = new EmergencyServiceImpl();
		List<Emergency> emersList=null;
		if (ecase==null||ecase.equals("")) {
			emersList = emerService.selectType(type);
		}else if (type==null||type.equals("")) {
			emersList=emerService.selectEcase(ecase);
		}else{
			emersList=emerService.query(type, ecase);
		}
		clear();
		clear();
		if (emersList.size() != 0) {
			int i=0;
			Iterator<Emergency> iterator=emersList.iterator();
			while (iterator.hasNext()) {
				Emergency emergency = (Emergency) iterator.next();
				addCookie(i, "<h4>"+(i+1)+"、 "+emergency.getEmerCase()+"</h4><strong>"+emergency.getEmerSolution()+"</strong>");
				i++;
			}
/*			HttpServletRequest request=ServletActionContext.getRequest();
			request.setCharacterEncoding("utf-8");
		    Cookie[] cookies = ServletActionContext.getRequest().getCookies();
			for (Cookie c : cookies) {
				//如果有名为emer的cookie值，则是要需找的
				if (c.getName().startsWith("emer")) {
					System.out.println(java.net.URLDecoder.decode(c.getValue()));
				}
			}*/
			return SUCCESS;
		} else {
			return ERROR;
		}
	}
	public void clear(){
		HttpServletRequest request=ServletActionContext.getRequest();
		Cookie[] cookies = request.getCookies();
		for (Cookie c : cookies) {
			if (c.getName().startsWith("emer")) {
//				System.out.println(c.getName()+" clear");
				c.setValue("");
				c.setMaxAge(0);
				ServletActionContext.getResponse().addCookie(c);
//				System.out.println(java.net.URLDecoder.decode(c.getValue()));
			}
		}
	}
	public void addCookie(int i,String value){
		System.out.println(value);
		         //创建Cookie		
		           Cookie cookie = new Cookie("emer"+i, URLEncoder.encode(value));
		          //设置Cookie的生命周期
		           cookie.setMaxAge(60*60);
		          ServletActionContext.getResponse().addCookie(cookie);
		      	HttpServletRequest request=ServletActionContext.getRequest();
			    Cookie[] cookies = ServletActionContext.getRequest().getCookies();
			   
				for (Cookie c : cookies) {
					if (c.getName().equals("emer"+i)) {
						c.setValue(URLEncoder.encode(value));
						System.out.println(java.net.URLDecoder.decode(c.getValue()));
					}
				
		      }
}
}
