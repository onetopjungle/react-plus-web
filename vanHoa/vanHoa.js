$('.filtering').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    dots: false,
    speed: 800,
    autoplaySpeed: 2000,
    prevArrow: '<i class="fa fa-angle-left left_arrow"></i>',
    nextArrow: '<i class="fa fa-angle-right right_arrow"></i>',
});

var filtered = false;

$('.js-filter').on('click', function () {
    if (filtered === false) {
        $('.filtering').slick('slickFilter', ':even');
        $(this).text('Unfilter Slides');
        filtered = true;
    } else {
        $('.filtering').slick('slickUnfilter');
        $(this).text('Filter Slides');
        filtered = false;
    }
});