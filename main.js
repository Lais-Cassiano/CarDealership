let swiperPopular = new Swiper(".popular-models", {
    loop: true,
    spaceBetween: 24,
    slidesPerView: 'auto',
    grabCursor: true,
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
    },
    breakpoints: {
        300: {
          slidesPerView: 1,
        },

        600: {
          slidesPerView: 2,
          spaceBetween: 48,
        },

        768: {
          slidesPerView: 2,
          spaceBetween: 48,
        },
        1000: {
          slidesPerView: 3,
          spaceBetween: 48,
        },
    },
});