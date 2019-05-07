					 
   $(document).ready(function(){
      
      $(window).scroll(function () {
            if ($(window).scrollTop() > 95) {
              
                 $(".sk_float_content").hide();
            }
            else {
              
                 $(".sk_float_content").show();
            }
        });

        $("#back-to-top").click(function () {
            $('body,html').animate({scrollTop: 0}, 100);
            return false;
        });
    });
