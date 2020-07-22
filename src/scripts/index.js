$(document).ready(function() {
    // var windowWidth = $(window).width();
    // var countSlides = $('.slide').length;
    // $('.slider_container').width((windowWidth*countSlides) + 'px');
    // $('.slide-dot').click(function() {
    //     var slide = $(this).attr('data-slide');
    //     $('.slider_container').css('transform', 'translate(-' + (slide*windowWidth) + 'px)');
    //     $('.slide-dot').removeClass('active');    
    //     $(this).addClass('active');
    // });
    
    // $(window).resize(function() {
        
    // });
    

    $('.slider').slick({
        arrows: false,
        dots: true
        // adaptiveHeight: true,
        // autoplay: true,
        // autoplaySpeed: 4000,
        // pauseOnFocus: true,
        // pauseOnHover: true,
        // pauseOnDotHover: true
    });

    var $searchIcon = $('.search_butt');
    var $searchInput = $('.search_inpt');

    $searchIcon.on('click', function() {
        $searchInput.toggleClass('active');
    });

    // $('.search_inpt').on('keypress', function (event) {
    //     if (event.keyCode == 13) {
    //         event.preventDefault();
    //         $('.search_inpt').append('default');
    //     }
    // });
});


