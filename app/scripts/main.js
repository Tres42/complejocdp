'use strict';

$(function() {
    var $wrapper = $('#wrapper'),
        $slider = $('#slider'),
        $topBar = $('#header .sticky'),
        sliderHeight;

    var changeSliderHeight = function () {
        sliderHeight = $slider.height();
        $wrapper.css('padding-top', sliderHeight);
    };

    var changeTopBarSize = function (e) {
        var scrollPos = $(e.target).scrollTop(),
            $sliderContainer = $('.orbit-container', $slider);

        if (scrollPos >= sliderHeight && !$topBar.hasClass('mini')) {
            $topBar.addClass('mini');
            $sliderContainer.click();
        } else if (scrollPos < sliderHeight && $topBar.hasClass('mini')) {
            $topBar.removeClass('mini');
            $sliderContainer.click();
        }
    };

    new Imager({
        availableWidths: {
            320: 'small',
            640: 'medium',
            1440: 'large'
        },
        onImagesReplaced: function () {
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
        }
    });

    if (Modernizr.csstransitions) {
        console.log('Using jquery.transit');
        $.fn.animate = $.fn.transition;
        $.cssEase._default = 'out';
    }

    $slider.on('ready.fndtn.orbit', changeSliderHeight);
    $(window).on('resize', changeSliderHeight).on('scroll', changeTopBarSize);
});
