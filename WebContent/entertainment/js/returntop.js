  window.onload = function(){
    var obtn = document.getElementById('btn');
	//获取页面可视区的高度
	var clientHeight=document.documentElement.clientHeight;
	var timer = null;
	var isTop = true;
		
        window.onscroll = function(){
        var osTop = document.documentElement.scrollTop || document.body.scrollTop;
  //      console.log(osTop);
        if (osTop >= clientHeight/2){
        //显示按钮
            obtn.style.display = 'block';
    	}else {
		//隐藏按钮
            obtn.style.display = 'none';
		}
		if (!isTop){
			clearInterval(timer);
		}
		isTop = false;
    };
    
	obtn.onclick = function(){
		
		//设置定时器
		timer = setInterval(function(){
             var osTop = document.documentElement.scrollTop || document.body.scrollTop;
			var ispeed = Math.floor(-osTop / 6);
			document.documentElement.scrollTop = document.body.scrollTop = osTop +ispeed;			
			isTop = true;
			console.log(osTop -ispeed);
			if (osTop == 0){
				clearInterval(timer);
			}
		},30);
	}
	
}