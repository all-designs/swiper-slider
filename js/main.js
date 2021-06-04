// Swiper Slider Plugin

(function($) {
    'use strict';
    var swiper = new Swiper('.swiper-container.two', {
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true,
        },
        autoplay: {
            delay: 3000,
        },
        speed: 1000,
        effect: 'coverflow',
        loop: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflowEffect: {
            rotate: 0,
            stretch: 80,
            depth: 200,
            modifier: 1,
            slideShadows : false,
        }
    });

})(jQuery);