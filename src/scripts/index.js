$(document).ready(function() {
    
    $('.slider').slick({
        arrows: false,
        dots: true,
        slidesToShow: 1
    });

    var $searchIcon = $('.search_butt');
    var $searchInput = $('.search_inpt');

    $searchIcon.on('click', function() {
        $searchInput.toggleClass('active');
    });

    $searchInput.on('keypress', function (event) {
        if (event.keyCode == 13) {
            event.preventDefault();

            $(this).val('');
            $(this).blur();
        }
    });

    $(document).on('click', function(event) { 
        var $target = $(event.target);
  
        if (!$target.closest('.search').length) {
          $searchInput.removeClass('active');
        }
      });
});


