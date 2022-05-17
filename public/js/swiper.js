const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoplay: true,
    speed: 2500,
    autoplay: {
        delay: 1100,
    },
    slidesPerView: 1,
    spaceBetween: 0,
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },

    pagination: {
        el: '.swiper-pagination',
    },


});