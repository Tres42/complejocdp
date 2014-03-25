'use strict';

(function ($, document, window){
    var $wrapper = $('#wrapper'),
        $slider = $('#slider'),
        $topBar = $('#header .sticky'),
        $sliderContainer,
        sliderHeight;

    var calcSliderHeight = function () {
        sliderHeight = $slider.height();
        $wrapper.css('padding-top', sliderHeight);
    };

    var changeTopBarSize = function (e) {
        var scrollPos = $(e.target).scrollTop();

        if (scrollPos >= sliderHeight && !$topBar.hasClass('mini')) {
            $topBar.addClass('mini');
            $sliderContainer.click();
        } else if (scrollPos < sliderHeight && $topBar.hasClass('mini')) {
            $topBar.removeClass('mini');
            $sliderContainer.click();
        }
    };

    if (Modernizr.csstransitions) {
        console.log('Using jquery.transit');
        $.fn.animate = $.fn.transition;
        $.cssEase._default = 'out';
    }

    new Imager({
        availableWidths: {
            320: 'small',
            640: 'medium',
            1440: 'large'
        },
        onImagesReplaced: function () {
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

    $slider.on('ready.fndtn.orbit', function () {
        if (!$sliderContainer) {
            $sliderContainer = $('.orbit-container', $slider);
        }
    });

    $slider.on('ready.fndtn.orbit', calcSliderHeight);
    $(window).on('resize', calcSliderHeight).on('scroll', changeTopBarSize);
})(jQuery, document, window);
