new WOW().init();
$(document).ready(function() {
    // script update
    $('.vc-product-slick').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [{
            breakpoint: 1199,
            settings: {
                slidesToShow: 3
            }
        }, {
            breakpoint: 992,
            settings: {
                slidesToShow: 2
            }
        }, {
            breakpoint: 767,
            settings: {
                slidesToShow: 1
            }
        }, {
            breakpoint: 543,
            settings: {
                slidesToShow: 1
            }
        }]
    })
    // end update
});