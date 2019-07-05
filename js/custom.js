$(document).ready(function(){
    //header
    $(window).on('scroll',function(){
        var distance = $(window).scrollTop();
        var $header = $(".js_header");
        if (distance > 80){
            $header.addClass("header_color");
        }else{
            $header.removeClass("header_color");
        }
    })

    //wow plugin
    if(screen.width > 768){
        new WOW().init();
    }

    //fancybox plugin
    $('[data-fancybox]').fancybox({
        loop:true
    });

    //stellar
    if(screen.width > 991){
        $(window).stellar();
    }
})