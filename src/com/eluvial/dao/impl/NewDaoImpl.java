package com.eluvial.dao.impl;

import java.io.BufferedReader;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;

import com.eluvial.dao.NewDao;

public class NewDaoImpl implements NewDao{

	/**
	 * @param urlAll
	 *            :请求接口
	 * @param httpArg
	 *            :参数
	 * @return 返回结果
	 */
	public static String request(String httpUrl, String httpArg) {
	    BufferedReader reader = null;
	    String result = null;
	    StringBuffer sbf = new StringBuffer();
	    httpUrl = httpUrl + "?" + httpArg;

	    try {
	        URL url = new URL(httpUrl);
	        HttpURLConnection connection = (HttpURLConnection) url
	                .openConnection();
	        connection.setRequestMethod("GET");
	        connection.setRequestProperty("Content-type", "application/json");
	      /*  // 填入apikey到HTTP header
	        connection.setRequestProperty("apikey",  "a5e48c79fe1cc7011e101e9c539d01db");*/
	        connection.connect();
	        InputStream is = connection.getInputStream();
	        reader = new BufferedReader(new InputStreamReader(is, "UTF-8"));
	        String strRead = null;
	        while ((strRead = reader.readLine()) != null) {
	            sbf.append(strRead);
	            sbf.append("\r\n");
	        }
	        reader.close();
	        result = sbf.toString();
	    } catch (Exception e) {
	        e.printStackTrace();
	    }
	    return result;
	}
	
	@Override
	public String query(String type) {

		String httpUrl = "http://api.sina.cn/sinago/list.json";
		String httpArg = "channel="+type;
		String jsonResult = request(httpUrl, httpArg);
		System.out.print(httpUrl+httpArg);
		return jsonResult;
	}
	
	public String getSomeNews() {
	    BufferedReader reader = null;
	    String result = null;
	    StringBuffer sbf = new StringBuffer();
	    String httpUrl = "http://apis.baidu.com/showapi_open_bus/channel_news/search_news";
		String httpArg = "channelId=5572a109b3cdc86cf39001db&channelName=%E5%9B%BD%E5%86%85%E6%9C%80%E6%96%B0&title=%E4%B8%8A%E5%B8%82&page=1&needContent=0&needHtml=0";
	    httpUrl = httpUrl + "?" + httpArg;

	    try {
	        URL url = new URL(httpUrl);
	        HttpURLConnection connection = (HttpURLConnection) url
	                .openConnection();
	        connection.setRequestMethod("GET");
	        // 填入apikey到HTTP header
	        connection.setRequestProperty("apikey",  "a5e48c79fe1cc7011e101e9c539d01db");
	        connection.connect();
	        InputStream is = connection.getInputStream();
	        reader = new BufferedReader(new InputStreamReader(is, "UTF-8"));
	        String strRead = null;
	        while ((strRead = reader.readLine()) != null) {
	            sbf.append(strRead);
	            sbf.append("\r\n");
	        }
	        reader.close();
	        result = sbf.toString();
	    } catch (Exception e) {
	        e.printStackTrace();
	    }
	    
	    return result;
	}

}