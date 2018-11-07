;

function autoCutStr(prefix) {

    if (!prefix || prefix === undefined) {
        prefix = "autoCutStr_";
    }
    $('[class^="' + prefix + '"]').each(function() {
        if ($(this).length > 0) {
            var str = $(this).text();
            str = str.replace('<br/>', '');
            str = str.replace('<br>', '');
            $(this).html(str);
            var len = parseInt($(this).attr("class").substr($(this).attr("class").lastIndexOf("_") + 1));
            var length = str.length;
            if (length > len) {
                if (str.charAt(len) == ' ') {
                    str = str.substr(0, len);
                } else {
                    str = str.substr(0, len);
                    str = str.substr(0, str.lastIndexOf(" "));
                }
                $(this).html(str + "...");
            }
        }

    });
};

;
new WOW().init();
$(document).ready(function() {
    "use strict";

    // script update
    $('.payment-info .cart-form .nav label').click(function() {
        $('.coupon').fadeIn(300);
    });
    $('.payment-info label[for="1"]').click(function() {
        $('.coupon').fadeOut(300);
    });
    // end update

    autoCutStr();
    if ($(window).width() < 1200) {
        $('.landing-nav').scrollToFixed({
            zIndex: 100,
            marginTop: 50
        });
    } else {
        $('.landing-nav').scrollToFixed({
            zIndex: 100,
            marginTop: 130
        });
    }
    $(".landing-nav a").mPageScroll2id({
        offset: 170,
    });
    $('.gallery-slide').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        arrows: true,
        dots: false,
        adaptiveHeight: true
    });
	
	// $('.product-accessories .product-list').slick({
        // slidesToShow: 2,
        // slidesToScroll: 2,
        // speed: 1000,
        // arrows: false,
        // dots: false,
        // adaptiveHeight: true
    // });

    // if ($(window).width() < 1199) {
    $('header').scrollToFixed({ zIndex: 1100 });
    // }
    if ($(window).width() < 1199) {
        $('.btn-togglewrap').scrollToFixed({ zIndex: 100, marginTop: 82 });
    }
    if ($(window).width() < 576) {
        $('.btn-togglewrap').scrollToFixed({ zIndex: 100, marginTop: 82 });
    }

    $(window).bind('scroll', function() {
        if ($(window).scrollTop() > 100) {
            $('header').addClass('minimal');
        } else {
            $('header').removeClass('minimal');
        }
    });

    $(window).bind('scroll', function() {
        if ($(window).scrollTop() > 300) {
            $('.btn-up').fadeIn(300);
            $('.btn-down').fadeIn(300);
        } else {
            $('.btn-up').fadeOut(300);
            $('.btn-down').fadeIn(300);
        }
    });

    $('.btn-up').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 500);
    });

    $("a[href='#bottom']").click(function() {
        if ($('.ajaxresponse .ajaxresponsewrap').length > 0) {
            var pageurl = location.pathname + "?pagenumber=-1";
            if (pageurl != window.location) {
                window.history.pushState({ path: pageurl }, '', pageurl);
            }

        }

        $("html, body").animate({ scrollTop: $(document).height() }, "slow");

        return false;
    });

    if ($(window).width() < 575) {
        // $('.tool').insertBefore($('.menulink'));
        // $('.topmenu').insertAfter($('.menulink'));
        // $('.language').insertAfter($('.topmenu'));
        $('header .login').insertAfter('.menulink');
    }

    $('.btn-showmenu').click(function() {
        $('.menu').toggleClass('open');
        $('.overlay').fadeIn(500);
    });
    $('.btn-closemenu').click(function() {
        $('.menu').removeClass('open');
        $('.overlay').fadeOut(500);
    });
    $('.overlay').click(function() {
        $(this).fadeOut(500);
        $('.menu').removeClass('open');
        $('.sub').removeClass('open');
    });

    $('.btn-showsub').click(function() {
        $(this).toggleClass('active');
        $(this).siblings('.sub').slideToggle(500);
    });
    $('.btn-closesub').click(function() {
        $('.sub').removeClass('open');
    });
    // FILTER SCRIPT

    $('.btn-showsubfilter').click(function() {
        $(this).toggleClass('active');
        $(this).siblings('.sub').slideToggle(300);
    });
    $('.btn-showcate').click(function() {
        $(this).toggleClass('active');
        $('.btn-showfilter').removeClass('active');
        $('.option-group').removeClass('open');
        $('.category-group').toggleClass('open');
        // $('html').css('overflow', 'hidden');
    });
    $('.btn-showfilter').click(function() {
        $(this).toggleClass('active');
        $('.btn-showcate').removeClass('active');
        $('.category-group').removeClass('open');
        $('.option-group').toggleClass('open');
        // $('html').css('overflow', 'hidden');
    });
    $('.btn-closefilter').click(function() {
        $('.btn-showcate').removeClass('active');
        $('.btn-showfilter').removeClass('active');
        $('.filter-wrap').removeClass('open');
        // $('html').css('overflow', 'auto');
    });


    $('.filter-wrap').on('click', '.btn-closefilter', function() {
        $('.option-group').removeClass('open');
        $('.category-group').removeClass('open');
        $('body').css('overflow', 'unset');
    });

    if ($(window).width() < 1024) {
        $("body").on("click", '.filter-group .filter-name', function(e) {
            var _parent = $(this).parent();
            if ($(this).hasClass('active')) {
                $(this).removeClass('active');
                _parent.find('.filter-option').slideUp(300);
            } else {
                $('.filter-group .filter-name').removeClass('active');
                $('.filter-group .filter-option').slideUp();
                $(this).addClass('active');
                _parent.find('.filter-option').slideDown(300);
            }
        });
    }


    $('.btn-shownav').append($('.sidelink li.active a').html());
    $('.btn-shownav').click(function() {
        $(this).toggleClass('active');
        $(this).siblings('.sidelink').slideToggle(300);
    });

    $(".pagename").append($('.breadcrumb li a.active').find('span').html());

    $(".counter").countimator({
        duration: 1000
    });

    $('#product-slide-1').slick({
        fade: true,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
        dots: false,
        infinite: true,
        asNavFor: '#product-thumbnail-1'
    });

    $('#product-thumbnail-1').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: '#product-slide-1',
        focusOnSelect: true,
        responsive: [{
            breakpoint: 1199,
            settings: {
                slidesToShow: 5
            }
        }, {
            breakpoint: 992,
            settings: {
                slidesToShow: 5
            }
        }, {
            breakpoint: 767,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 543,
            settings: {
                slidesToShow: 3
            }
        }]
    });

    $('#product-slide-2').slick({
        fade: true,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
        dots: false,
        infinite: true,
        asNavFor: '#product-thumbnail-2'
    });

    $('#product-thumbnail-2').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: '#product-slide-2',
        focusOnSelect: true,
        responsive: [{
            breakpoint: 1199,
            settings: {
                slidesToShow: 5
            }
        }, {
            breakpoint: 992,
            settings: {
                slidesToShow: 5
            }
        }, {
            breakpoint: 767,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 543,
            settings: {
                slidesToShow: 3
            }
        }]
    });

    $('.category-slide').slick({
        dots: false,
        autoplay: false,
        infinite: false,
        arrows: false,
        fade: true
    });

    $('.upcoming-slide').slick({
        dots: true,
        autoplay: false,
        infinite: false,
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [{
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 544,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });

    $('.newproduct-slide').slick({
        fade: true,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
        dots: false,
        infinite: true,
    });





    function reloadBrandProduct() {


        $('.brand-slide').slick({
            slidesToShow: 7,
            slidesToScroll: 1,
            asNavFor: '.bigproduct-slide',
            centerMode: true,
            focusOnSelect: true,
            dots: false,
            arrows: true,
            swipeToSlide: true,
            responsive: [{
                breakpoint: 1199,
                settings: {
                    slidesToShow: 5,
                }
            }, {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                }
            }]
        });
        $('.bigproduct-slide').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            adaptiveHeight: true,
            asNavFor: '.brand-slide',
        });
    }
	
    if ($(".homepage .home-product").length == 0) {
		/*
        $.ajax({
            url: '/product/services/GetProductService.ashx',
            data: { mid: 252, zid: 1, name: 'ZoneHomeProduct' },
            type: "GET",
            async: true,
            success: function(data) {
                if (data.length > 0) {
                    $(data).insertAfter(".Module-162");
                    //$(".homediv").html(data);    
                    //reloadBrandProduct();

                    reloadBrandProduct();
                }
            }
        });
		*/
    } else {
        reloadBrandProduct();
    }

    if ($(".homepage .home-instagram").length == 0) {
		/*
        $.ajax({
            url: '/product/services/GetProductService.ashx',
            data: { mid: 187, zid: 1, name: 'ZoneHomeInstagram' },
            type: "GET",
            async: true,
            success: function(data) {
                if (data.length > 0) {
                    $(data).insertAfter(".Module-167");
                    reloadInstgram();
                }
            }
        });*/
    } else {
        reloadInstgram();
    }

    function reloadInstgram() {
        // Instagram
        $('.ver-slide').slick();
        $('div[id^="inModal-"]').on('shown.bs.modal', function(e) {
            e.preventDefault();
            $(this).find('.ver-slide').slick('unslick');
            $(this).find('.ver-slide').slick({
                slidesToShow: 2,
                slidesToScroll: 1,
                focusOnSelect: true,
                infinite: true,
                prevArrow: $('#ver-prev'),
                nextArrow: $('#ver-next'),
                vertical: true,
                verticalSwiping: true,
                responsive: [{
                    breakpoint: 543,
                    settings: {
                        vertical: false,
                        verticalSwiping: false,
                    }
                }]
            });
        });
    }

    $('.other-slide').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: false,
        autoplay: false,
        arrows: true,
        dots: false,
        responsive: [{
            breakpoint: 1199,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 992,
            settings: {
                slidesToShow: 3
            }
        }, {
            breakpoint: 767,
            settings: {
                slidesToShow: 2
            }
        }, {
            breakpoint: 543,
            settings: {
                slidesToShow: 1
            }
        }]

    });

    $('.store-img').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        infinite: false,
        autoplay: false,
        arrows: true,
        dots: false,
        prevArrow: $('.prev'),
        nextArrow: $('.next'),
        responsive: [{
            breakpoint: 1199,
            settings: {
                slidesToShow: 6
            }
        }, {
            breakpoint: 992,
            settings: {
                slidesToShow: 5
            }
        }, {
            breakpoint: 767,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 543,
            settings: {
                slidesToShow: 3
            }
        }]

    });

    $('.shopbanner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: false
    });

    $('.bannerPage').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: false
    });

    $('.news-slide').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        dots: true,
        fade: true,
        prevArrow: $('.prev'),
        nextArrow: $('.next')
    });

    if ($('body').hasClass('product-detail-page')) {
        $('.product-slide').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: false,
            infinite: false,
            asNavFor: '.product-nav'
        });
    }

    $('.btn-video').click(function() {
        $('.btn-video').removeClass('active');
        $(this).addClass('active');
        $('.box-video').addClass('active').html('<iframe src="' + $(this).attr('href') + '" width="100%" height="315" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen=""></iframe>');

        return false;
    });
    $('.product-nav').click(function() {
        $('.btn-video').removeClass('active');
        $('.box-video').removeClass('active');
    });
    $('.box-video').appendTo('.productslider-wrap');

    $('.product-nav').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        asNavFor: '.product-slide',
        dots: false,
        arrows: false,
        infinite: false,
        focusOnSelect: true,
        vertical: true,
        verticalSwiping: true,
        // responsive: [{
        //     breakpoint: 543,
        //     settings: {
        //         slidesToShow: 3,
        //         vertical: false,
        //         verticalSwiping: false,
        //         arrows: false,
        //         dots: false
        //     }
        // }]
    });

    $('.productimg-slide').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        fade: true,
        // touchMove: false,
        // swipeToSlide: false,
        // swipe: false,
        infinite: false,
        asNavFor: '.color-select',
    });
    
    $('.color-select').slick({
        slidesToShow: 10,
        slidesToScroll: 10,
        dots: false,
        arrows: false,
        infinite: false,
        focusOnSelect: true,
        variableWidth: true,
        asNavFor: '.productimg-slide',
        // touchMove: false,
        // swipeToSlide: false,
        // swipe: false
    });
    
    $('.sale-slide').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: $('#sale-prev'),
        nextArrow: $('#sale-next'),
        responsive: [{
            breakpoint: 1199,
            settings: {
                slidesToShow: 3
            }
        }, {
            breakpoint: 992,
            settings: {
                slidesToShow: 3
            }
        }, {
            breakpoint: 767,
            settings: {
                slidesToShow: 2
            }
        }, {
            breakpoint: 543,
            settings: {
                slidesToShow: 1
            }
        }]
    });

    $('.cart-slide').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: $('#cart-prev'),
        nextArrow: $('#cart-next'),
        responsive: [{
            breakpoint: 1199,
            settings: {
                slidesToShow: 3
            }
        }, {
            breakpoint: 992,
            settings: {
                slidesToShow: 3
            }
        }, {
            breakpoint: 767,
            settings: {
                slidesToShow: 3
            }
        }, {
            breakpoint: 543,
            settings: {
                slidesToShow: 3
            }
        }]

    });

    $('.countdown[data-countdown]').each(function() {
        var datecount = $(this).data('countdown');

        var datecountHours = $(this).data('countdownhours');

        $(this).countdown(datecount, function(event) {
            //var totalHours = event.offset.totalDays * 24 + event.offset.hours + datecountHours;
            $(this).html(event.strftime(datecountHours + ':%M:%S'));
        });
    });

    $(".facebook,.google").on('click', function() {
        var url = $(this).data('url');
        window.open(url, "popupWindow", "width=660,height=480,scrollbars=yes");
        return false;
    });

    $('.close-btn').click(function(event) {
        $(this).parent().addClass('hidden');
    });

    $('.fancybox-img').fancybox({
        'padding': 0,
        helpers: {
            overlay: {
                locked: false
            }
        }
    });

    $('.fancybox-video').fancybox({
        'padding': 0,
        'type': 'iframe',
        helpers: {
            title: null,
            overlay: {
                locked: false
            }
        }
    });

    $('.btn-spin').click(function() {

        var $button = $(this);
        var oldValue = $button.parent().find('input').val();

        if ($button.text() == '+') {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            // Don't allow decrementing below zero
            if (oldValue > 0) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 0;
            }
        }

        $button.parent().find('input').val(newVal);
        if (!$('.product-detail-page').length)
            AjaxCart.updatecart();
    });

    $('.detail-slide').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
        centerMode: true,
        focusOnSelect: true,
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [{
            breakpoint: 991,
            settings: {
                centerMode: false
            }
        }, {
            breakpoint: 543,
            settings: {
                vertical: false,
                verticalSwiping: false,
                centerMode: false
            }
        }, ]
    });

    // $('[data-toggle="tooltip"]').tooltip();

    $('.thumb-slide').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        centerMode: false,
        focusOnSelect: false,
        arrows: false,
        dots: false
    });

    $('.img-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        centerMode: false,
        focusOnSelect: false,
        arrows: false,
        dots: false
    });
    $('.img-nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.img-slider',
        dots: false,
        arrows: true,
        focusOnSelect: true,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 3
            }
        }, {
            breakpoint: 480,
            settings: {
                arrows: false,
                slidesToShow: 2
            }
        }]
    });

    // RESPONSIVE TABS
    if ($('.tabs-list li').length > 0) {
        $('#responsivetabs').responsiveTabs({
            startCollapsed: 'accordion'
        });
    }

    // PROMOTION PAGE SCRIPT
    $('.promotion-banner-slide').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        fade: false,
        asNavFor: '.promotion-banner-nav'
    });
    $('.promotion-banner-nav').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.promotion-banner-slide',
        dots: false,
        arrows: false,
        focusOnSelect: true
    });

    // PRODUCT DETAIL SCRIPT
    if ($('.product-description .product-content .content').height() < 700) {
        $('.product-description .product-content').addClass('open');
        $('.product-description .btn-viewmore').remove();
    }

    $('.product-description .btn-viewmore').click(function() {
        $(this).parent().prev('.product-content').addClass('open');
        $(this).remove();
    });

    // COMPARE SCRIPT
    $('.product-page').on('click', '.btn-compare', function() {
        $('.compare-panel').show();
    });

    $('.compare-panel').on('click', '.btn-minimize', function() {
        $(this).toggleClass('active');
        $('.compare-panel').toggleClass('hide');
    });

    $('.compare-panel').on('click', '.btn-closecompare', function() {
        $('.btn-compare').trigger('click');
    });

    $('.frame-link').click(function() {
        $('.career-frame').slideToggle(400);
        return false;
    });

    $('.block-homeBanner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: false,
        dots: false,
        arrows: true
    });

    $('.product-detail-page .block-prdNewsWrap').prependTo('.block-productsNewsWrap');

    $('.filter-group .filter-title').click(function() {
        var _parent = $(this).parent();
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            _parent.find('.filter-option').slideUp(300);
        } else {
            $('.filter-group .filter-title').removeClass('active');
            $('.filter-group .filter-option').slideUp();
            $(this).addClass('active');
            _parent.find('.filter-option').slideDown(300);
        }
    });

    $('.point-wrap').appendTo('.commentfrm');
    $('.commentpanel').appendTo('.comment-wrap');


    // SYSTEM SLIDE
    $('.system-slide').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        dots: true,
        autoplay: 5000,
    });

    $('.system-star').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        autoplay: true,
        autoplaySpeed: 5000,
    });

    // UPDATE 07 05 2018
    $('.bclose').click(function() {
        $('.ft-ads').fadeOut(300);
    })

    // 2018-07-26
    if ($('.faq-title').length)
    {
        $('.faq-title').click(function () {
            $('.faq-title').removeClass('active');
            $(this).addClass('active');
            $('.faq-content').slideUp(300);
            $(this).next().slideDown(300);
        });
    }

});

;
$(function() {
    //----- OPEN
    $('[data-popup-open]').on('click', function(e) {
        var targeted_popup_class = $(this).attr('data-popup-open');
        $('[data-popup="' + targeted_popup_class + '"]').fadeIn(350);
        e.preventDefault();
    });
    //----- CLOSE
    $('[data-popup-close]').on('click', function(e) {
        var targeted_popup_class = $(this).attr('data-popup-close');
        $('[data-popup="' + targeted_popup_class + '"]').fadeOut(350);
        e.preventDefault();
    });
});

;
setTimeout(function() {
    $('#myTurntable').turntable();
    $(".popup-content .loading-ajax").hide();
}, 6000);;

$(function() {
    $("img").lazyload({
        effect: "fadeIn"
    });
    // $('[data-toggle="tooltip"]').tooltip();

    $('.ui-dialog-titlebar-close').insertBefore('.caption');
});