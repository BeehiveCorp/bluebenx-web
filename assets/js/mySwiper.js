var swiper = new Swiper('.mySwiper', {
    slidesPerView: 1.2,
    spaceBetween: 20,
    grabCursor: true,
    centeredSlides: true,
    breakpoints: {
      380: {
        slidesPerView: 1.5,
      },
      420: {
        slidesPerView: 1.5,
      },
      460: {
        slidesPerView: 2,
      },
      600: {
        slidesPerView: 2.5,
      },
      768: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 3.5,
      },
      1100: {
        slidesPerView: 4,
      },
      1200: {
        slidesPerView: 5,
      },
    },
  });