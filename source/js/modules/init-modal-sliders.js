const modalSliders = document.querySelectorAll('.modal-info .swiper-container');

const initModalSliders = () => {
  if (modalSliders.length) {
    modalSliders.forEach((slider) => {
      const swiper = new Swiper(slider, {
        speed: 400,
        slidesPerView: 1,
        spaceBetween: 40,
        centeredSlides: true,
        loop: true,
      });
    });
  }
};

export {initModalSliders};
