
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

    
    $('.register form').submit(function(){
    	var password = $(this).find('input#password').val();
        var repassword = $(this).find('input#repassword').val();
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
    });

});


