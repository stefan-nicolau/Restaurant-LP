/*global $, console, WOW*/
$(document).ready(function () {
    "use strict";
    
    //global
    $('header, .break-fast, .lunch, .dinner').height($(window).height());
    $('.break-fast i').on('click', function () {
        $('html, body').animate({
            scrollTop: $('.lunch').offset().top
        }, 700);
    });
    $('.lunch i').on('click', function () {
        $('html, body').animate({
            scrollTop: $('.dinner').offset().top
        }, 700);
    });
    $('.dinner i').on('click', function () {
        $('html, body').animate({
            scrollTop: $('.discover').offset().top
        }, 700);
    });
    $('header .fa-chevron-up').on('click', function () {
        $('html, body').animate({
            scrollTop: 0
        }, 700);
    });

    //border-bottom class add
    $(window).scroll(function () {
        
        if ($(window).scrollTop() > $('.discover').offset().top && $(window).scrollTop() < $('.our-chef').offset().top) {
            $('.navbar-default .navbar-nav li').removeClass('border-bottom');
            $('.navbar-default .navbar-nav li:nth-child(2)').addClass('border-bottom');
        }
        if ($(window).scrollTop() > $('.our-chef').offset().top && $(window).scrollTop() < $('.special-dishes').offset().top) {
            $('.navbar-default .navbar-nav li').removeClass('border-bottom');
            $('.navbar-default .navbar-nav li:nth-child(3)').addClass('border-bottom');
        }
        if ($(window).scrollTop() > $('.special-dishes').offset().top && $(window).scrollTop() < $('.food-gallery').offset().top) {
            $('.navbar-default .navbar-nav li').removeClass('border-bottom');
            $('.navbar-default .navbar-nav li:nth-child(4)').addClass('border-bottom');
        }
        if ($(window).scrollTop() > $('.food-gallery').offset().top && $(window).scrollTop() < $('.last-blog').offset().top) {
            $('.navbar-default .navbar-nav li').removeClass('border-bottom');
            $('.navbar-default .navbar-nav li:nth-child(5)').addClass('border-bottom');
        }
        if ($(window).scrollTop() > $('.last-blog').offset().top && $(window).scrollTop() < $('.status').offset().top) {
            $('.navbar-default .navbar-nav li').removeClass('border-bottom');
            $('.navbar-default .navbar-nav li:nth-child(6)').addClass('border-bottom');
        }
        if ($(window).scrollTop() > $('.status').offset().top && $(window).scrollTop() < $('.contact-us').offset().top) {
            $('.navbar-default .navbar-nav li').removeClass('border-bottom');
            $('.navbar-default .navbar-nav li:nth-child(7)').addClass('border-bottom');
        }
    });
    
    //nav
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 1) {
            $('.navbar-default').css({
                padding: "5px 0px",
                backgroundColor: '#000',
                border: 0
            });
            $('.fa-chevron-up').fadeIn();
        } else if ($(window).scrollTop() < 1) {
            $('.navbar-default').css({
                padding: '12px 0px',
                backgroundColor: 'transparent',
                border: "1px solid #574B3E"
            });
            $('.fa-chevron-up').fadeOut();
        }
    });
    
    //header
    $(window).resize(function () {
        $('header, .break-fast, .lunch, .dinner').height($(window).height());
        $('header .container div').css({
            width : $('header img').width(),
            marginTop : ($(window).height() / 2) - ($('header .container div').height() / 2)
        });
    });
    $('header .container div').css({
        width : $('header img').width(),
        marginTop : ($(window).height() / 2) - ($('header .container div').height() / 2)
    });
    $('header .fa-arrow-down').on('click', function () {
        $('html, body').animate({
            scrollTop: $('.break-fast').offset().top
        }, 700);
    });
    
    //discover
    $('.discover .box').height($('.discover .box div:last-of-type').height());
    $('.discover .box').mouseenter(function () {
        $(this).children('div:last-of-type').animate({
            top: 30,
            opacity: 1
        }, 500);
        
        
    });
    $('.discover .box').mouseleave(function () {
        $(this).children('div:last-of-type').animate({
            top: -100,
            opacity: 0
        }, 500);
        
    });
    
    //special-dishes
    $('.special-dishes .container > .center').width($('.special-dishes .container > .center img').width());
    $('.special-dishes .col-sm-4 .center').width($('.special-dishes .col-sm-4 .center img').width());
    
    //food-gallery
    $('.food-gallery .col-md-3').hover(function () {
        $(this).children('img').animate({
            top: -80,
            opacity: '.7'
        }, 300);

    });
    $('.food-gallery .col-md-3').mouseleave(function () {
        $(this).children('img').animate({
            top: 0,
            opacity: 1
        }, 300, "linear");
    });
    
    //slider
    function iFade() {
        if ($('.food-gallery .center-block .row:first').hasClass('active')) {
            $('.food-gallery i.fa-chevron-left').fadeOut(100);
        } else {
            $('.food-gallery i.fa-chevron-left').fadeIn(100);
        }
        if ($('.food-gallery .center-block .row:last').hasClass('active')) {
            $('.food-gallery i.fa-chevron-right').fadeOut(100);
        } else {
            $('.food-gallery i.fa-chevron-right').fadeIn(100);
        }
    }
    iFade();
    $('.food-gallery i').on('click', function () {
        if ($(this).hasClass('fa-chevron-right')) {
            $('.food-gallery .center-block .row.active').fadeOut(200, function () {
                $(this).removeClass('active').next('.row').fadeIn(400).addClass('active');
                iFade();
            });
        } else if ($(this).hasClass('fa-chevron-left')) {
            $('.food-gallery .center-block .row.active').fadeOut(200, function () {
                $(this).removeClass('active').prev('.row').fadeIn(400).addClass('active');
                iFade();
            });
        }
    });
    
    //mixer
    $('#container').mixItUp();
    
    //count to
    $(window).scroll(function () {
        if ($(window).scrollTop() > $('.book-your-table').offset().top) {
            $('.count').countTo({
                refreshInterval: 25
            });
            $('.count').removeClass('count');
        }
    });
    
    //nice scroll 
    $("html, body").niceScroll({
        cursorcolor: '#D8B75F',
        cursorwidth: '10px',
        cursorborder: 'none',
        cursorborderradius: 2,
        zindex: 10,
        cursorminheight: 100,
        enablescrollonselection: false
    });
});

