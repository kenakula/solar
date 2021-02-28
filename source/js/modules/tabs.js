/* eslint-disable no-new */
import Swiper, {Navigation, Pagination} from 'swiper';

Swiper.use([Navigation, Pagination]);

const tabs = () => {
  const tabsBtns = document.querySelectorAll('.js-info-tabs-btn');
  const tabsList = document.querySelector('.js-info-tabs');

  const initSlider = (container) => {
    const prevBtn = container.querySelector('.swiper-button-prev');
    const nextBtn = container.querySelector('.swiper-button-next');
    const paginationContainer = container.querySelector('.swiper-pagination');

    if (!container.swiper && container) {
      const inst = new Swiper(container, {
        spaceBetween: 1,
        navigation: {
          prevEl: prevBtn,
          nextEl: nextBtn,
        },
        pagination: {
          el: paginationContainer,
          type: 'bullets',
          clickable: true,
        },
        observer: true,
        observeParents: true,
      });
    }
  };

  const showTab = (evt) => {
    const target = evt.target.closest('.js-info-tabs-btn');

    if (target) {
      const contentId = target.dataset.content;
      const activeTab = tabsList.querySelector('.modal-info__item.active');
      const contentTab = tabsList.querySelector(`[data-content="${contentId}"]`);

      activeTab.classList.remove('active');
      contentTab.classList.add('active');
      const sliderContainer = contentTab.querySelector('.swiper-container');
      initSlider(sliderContainer);
    }
  };

  if (tabsList && tabsBtns.length) {
    tabsBtns.forEach((btn) => {
      btn.addEventListener('click', showTab);
    });
  }
};

export {tabs};
