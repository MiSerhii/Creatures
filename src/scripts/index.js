jQuery(function($) {
    "use strict"

    $(document).ready(function() {
        var windowWidth = $(window).width();
        var countSlides = $('.slide').length;
        $('.slider_container').width((windowWidth*countSlides) + 'px');
        $('.slide-dot').click(function() {
            var slide = $(this).attr('data-slide');
            $('.slider_container').css('transform', 'translate(-' + (slide*windowWidth) + 'px)');
            $('.slide-dot').removeClass('active');    
            $(this).addClass('active');
        });
        $(window).resize(function() {
            
        });
    });
});

