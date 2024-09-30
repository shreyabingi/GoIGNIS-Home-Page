
$(document).ready(function() {
    $('.service-img-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        fade: true,
        asNavFor: '.service-description-sec',
        autoplay: true, 
        autoplaySpeed: 2000 
    });

    $('.service-description-sec').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        fade: true,
        asNavFor: '.service-img-slider',
        autoplay: true, 
        autoplaySpeed: 2000 
    });

    // Sync active class
    $('.service-img-slider').on('afterChange', function(event, slick, currentSlide) {
        $('.service-list div').removeClass('active');
        $('.service-list div[data-index="' + currentSlide + '"]').addClass('active');
    });

    // Click service list items
    $('.service-list div').click(function() {
        var index = $(this).data('index');
        $('.service-img-slider').slick('slickGoTo', index);
        $('.service-description-sec').slick('slickGoTo', index);
    });
});

