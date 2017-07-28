jQuery(document).ready(function() {

    /*
        Background slideshow
    */
    $.backstretch([
      "assets/img/backgrounds/1.jpg"
    , "assets/img/backgrounds/2.jpg"
    , "assets/img/backgrounds/3.jpg"
    ], {duration: 3000, fade: 750});

    /*
        Tooltips
    */
    $('.links a.home').tooltip();
    $('.links a.blog').tooltip();

    /*
        Form validation
    */
    $('.register form').submit(function(){
/*        $(this).find("label[for='address']").html('地址未填');
        $(this).find("label[for='tel']").html('手机号未填');
        $(this).find("label[for='username']").html('用户名未填');
        $(this).find("label[for='email']").html('Email');
        $(this).find("label[for='password']").html('密码未填');
        $(this).find("label[for='repassword']").html('密码不一致');
*/        
    	var username = $(this).find('input#username').val();
    	var tel = $(this).find('input#tel').val();
    	var address = $(this).find('input#address').val();
    	var sex = $('input:radio:checked').val();
        var password = $(this).find('input#password').val();
        var repassword = $(this).find('input#repassword').val();

        if(username == ''||username.length>10) {
            $(this).find("label[for='username']").append("<span style='display:none' class='red'> - 用户名格式不正确</span>");
            $(this).find("label[for='username'] span").fadeIn('medium');
            $("#username").focus();
            return false;
        }
        if(tel == ''|| !/^1[3|4|5|8]\d{9}$/.test(tel)) {
            $(this).find("label[for='tel']").append("<span style='display:none' class='red'> - 手机号格式不正确</span>");
            $(this).find("label[for='tel'] span").fadeIn('medium');
            $("#tel").focus();
            return false;
        }
        if(address == '') {
            $(this).find("label[for='address']").append("<span style='display:none' class='red'> - 地址未填写</span>");
            $(this).find("label[for='address'] span").fadeIn('medium');
            $("#address").focus();
            return false;
        }
        if(sex == null) {
            $(this).find("label[for='sex']").append("<span style='display:none' class='red'> - 未选择性别</span>");
            $(this).find("label[for='sex'] span").fadeIn('medium');
            return false;
        }
        if(password == '') {
            $(this).find("label[for='password']").append("<span style='display:none' class='red'> - 密码不能为空</span>");
            $(this).find("label[for='password'] span").fadeIn('medium');
            $("#password").focus();
            return false;
        }else if(password.length<6){
        	$(this).find("label[for='password']").append("<span style='display:none' class='red'> - 密码不能少于6位</span>");
            $(this).find("label[for='password'] span").fadeIn('medium');
            $("#password").focus();
            return false;
        } 
        if(repassword!=password)  { 
        $(this).find("label[for='repassword']").append("<span style='display:none' class='red'> - 密码不一致</span>");
            $(this).find("label[for='repassword'] span").fadeIn('medium');
            $("repassword").focus();
            return false;
        }
        if($(this).find('input#srand')!=null){
        	var i=1;
        	$.ajax( {
    			url : 'verify.action',
    			data : {
    				srand : $("#srand").val()
    			},
    			type : 'post',
    			dataType : 'text',
    			success : function(data) {					
    				if ('no' === data) {
    					$("#code").append("<span  class='red'> - 验证码错误！！！</span>");
    					$("#srand").focus();
    						  i=0;
    				}
    			},
    			error : function() {
    				alert("请填写验证码！");
    				 i=0;
    				return false;
    			}
    		});
        alert("感谢你的注册！！！");
        if(i==0){
        	return false;
        }
        }
        });

    

});
    
