package com.eluvial.action;

import java.io.IOException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.struts2.ServletActionContext;

import com.eluvial.dao.NewDao;
import com.eluvial.dao.impl.NewDaoImpl;
import com.opensymphony.xwork2.ActionSupport;

public class NewsAction extends ActionSupport{
	private String type;
	
	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public String execute() throws IOException {
		NewDao news=new NewDaoImpl();
		String newsString=new String();
		newsString=news.query(type);
		if (newsString!=null) {
			ServletActionContext.getResponse().getWriter().print(newsString);
		} else {
			return ERROR;
		}
		return null;
		
	}
	public String someNews() throws IOException {
		NewDao news=new NewDaoImpl();
		String jsonResult = news.getSomeNews();
		
		HttpServletResponse response=ServletActionContext.getResponse();
		response.setContentType( "text/html" );
		response.setCharacterEncoding( "UTF-8" );
		if (jsonResult!=null) {
			response.getWriter().print(jsonResult);
		} else {
			return ERROR;
		}
		return null;
		
	}
}
