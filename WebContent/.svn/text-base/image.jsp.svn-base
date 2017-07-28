<%@ page language="java" contentType="image/jpeg; charset=UTF-8"
    pageEncoding="UTF-8" import="java.awt.*,java.awt.image.*,java.util.*,javax.imageio.*"%>
<%!
//产生rgb颜色是fc到bc范围的颜色
Color getRandColor(int fc,int bc){
	Random random=new Random();
	if(fc>255) fc=255;
	if(bc>255) bc=255;
	int r=fc+random.nextInt(bc-fc);
	int g=fc+random.nextInt(bc-fc);
	int b=fc+random.nextInt(bc-fc);
	return new Color(r,g,b);
}
%>
<%
//强制JSp页面刷新，防止被服务器缓存
response.setHeader("Cache-Control","no-cache");
response.setHeader("Pragma", "no-cache");
response.setDateHeader("Expires", 0);
int width=60,height=20;
BufferedImage image=new BufferedImage(width,height,BufferedImage.TYPE_INT_RGB);
Graphics g=image.getGraphics();
Random random=new Random();
g.setColor(getRandColor(200, 260));
g.fillRect(0,0,width,height);
g.setFont(new Font("Time New Roman",Font.PLAIN,18));
g.setColor(getRandColor(160, 200));
for(int i=0;i<100;i++){
	int x1=random.nextInt(width);
	int y1=random.nextInt(height);
	int x2=random.nextInt(12);
	int y2=random.nextInt(12);
	g.drawLine(x1, y1, x1+x2, y1+y2);
}
String sRand="";
for(int i=0;i<4;i++){
	String rand=null;
	if(random.nextInt(10)>5){
		rand=String.valueOf((char)(random.nextInt(10)+48));
	}else{
		rand=String.valueOf((char)(random.nextInt(26)+65));
	}
	sRand=sRand+rand;
	g.setColor(new Color(20+random.nextInt(110),20+random.nextInt(110),20+random.nextInt(110)));
	g.drawString(rand, 13*i+6, 16);
	
}
session.setAttribute("rand", sRand);
g.dispose();
ServletOutputStream output=response.getOutputStream();
output.flush();
ImageIO.write(image, "JPEG", output);
out.clear();
out = pageContext.pushBody();
%>