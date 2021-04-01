$(function () {
'use strict';
    //just slider height
    var winH = $(window).height(),
        upperH = $('.upper-bar').innerHeight(),
        navH = $('.navbar').innerHeight();
    $('.slider , .carousel-item').height(winH - (upperH + navH));
    
    //sticky navbar
    window.onscroll = function() {myFunction()};
        var navbar = document.getElementById("navbar");
        var sticky = navbar.offsetTop;

        function myFunction() {
          if (window.pageYOffset >= sticky) {
            navbar.classList.add("sticky")
          } else {
            navbar.classList.remove("sticky");
          }
        }
    
    
    // feature work

    $('.featured-work ul li').on('click',function(){
        $(this).addClass('active').siblings().removeClass('active');
        
        if($(this).data('class')==='all'){
            $('.shuffle-images .col-sm').css('opacity',1)
        }else{
             $('.shuffle-images .col-sm').css('opacity','0.1');
            $($(this).data('class')).parent().css('opacity',1)
        }
    });
    
   
});