(function ($) {
    "use strict";


    // Smooth scrolling on the navbar links
    $(".navbar-nav a, #navbarCollapse a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            
            $('html, body').animate({
                scrollTop: $(this.hash).offset().top - 45
            }, 1500, 'easeInOutExpo');
            
            if ($(this).parents('.navbar-nav').length) {
                $('.navbar-nav .active').removeClass('active');
                $(this).closest('a').addClass('active');
            }
        }
    });


    // Typed Initiate
    if ($('.typed-text-output').length == 1) {
        var typed_strings = $('.typed-text').text();
        var typed = new Typed('.typed-text-output', {
            strings: typed_strings.split(', '),
            typeSpeed: 100,
            backSpeed: 20,
            smartBackspace: false,
            loop: true
        });
    }



    // Scroll to Bottom
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scroll-to-bottom').fadeOut('slow');
        } else {
            $('.scroll-to-bottom').fadeIn('slow');
        }
    });


    // Skills

    $('.skill').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {offset: '80%'});
    
    //projects
    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active'); 
        console.log($(this).data('filter'))
        $('.portfolio-container .portfolio-item').filter(':not(' +  $(this).data('filter') + ')').hide()
        $('.portfolio-container .portfolio-item').filter( $(this).data('filter')).show()
            if ($(this).data('filter') === '*') {
                $('.portfolio-container .portfolio-item').show();
            }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        dots: true,
        loop: true,
        items: 1
    });
    $('#contactForm').submit(function(event) {
        event.preventDefault();
        $("#contactForm input, #contactForm textarea").jqBootstrapValidation({
            preventSubmit: true,
            submitError: function ($form, event, errors) {},
            submitSuccess:function($form, event, errors){
                
                $.ajax({
                    type: 'POST',
                    url: 'https://formspree.io/f/xgejyavl',
                    data: $(this).serialize(),

                    success: function(){console.log('1111111')},
                    error: function(){console.log('2222')}
                });
            }
        });

   }); 
    
})(jQuery);

