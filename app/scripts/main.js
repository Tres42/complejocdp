$(function() {
    'use strict';
    var $wrapper = $("#wrapper"),
        $slider = $('#slider');

    function sliderHeight() {
        $wrapper.css('padding-top', $slider.height());
    }

    console.log('Loaded');


    if (Modernizr.csstransitions) {
        console.log('Using jquery.transit');
        $.fn.animate = $.fn.transition;
        $.cssEase._default = 'out';
    }

    // Foundation JavaScript
    // Documentation can be found at: http://foundation.zurb.com/docs
    $(document).foundation({
        topbar: {
            back_text: 'Volver',
            scrolltop: false
        },
        orbit: {
            timer_speed: 3500,
            pause_on_hover: false,
            animation_speed: 750,
            slide_number: false
        }
    });

    sliderHeight();
    $slider.on('ready.fndtn.orbit', sliderHeight);
    $(window).on('resize', sliderHeight);
});
