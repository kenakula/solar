import Swiper from 'swiper';

const tabs = () => {
  const tabsBtns = document.querySelectorAll('.js-info-tabs-btn');
  const tabsList = document.querySelector('.js-info-tabs');


  const initSliders = () => {
    const tabEls = tabsList.querySelectorAll('.modal-info__item');

    tabEls.forEach((tab) => {
      const sliderContainer = tab.querySelector('.swiper-container');

      if (sliderContainer) {
        const pagination = sliderContainer.querySelector('.swiper-pagination');

        const swiper = new Swiper(sliderContainer, {
          navigation: false,
          spaceBetween: 1,
          observer: true,
          observeParents: true,
        });
      }
    });
  };

  const showTab = (evt) => {
    const target = evt.target.closest('.js-info-tabs-btn');

    if (target) {
      const contentId = target.dataset.content;
      const activeTab = tabsList.querySelector('.modal-info__item.active');
      const contentTab = tabsList.querySelector(`[data-content="${contentId}"]`);

      activeTab.classList.remove('active');
      contentTab.classList.add('active');
    }
  };

  if (tabsList) {
    document.addEventListener('DOMContentLoaded', initSliders);
  }

  if (tabsList && tabsBtns.length) {
    tabsBtns.forEach((btn) => {
      btn.addEventListener('click', showTab);
    });
  }
};

export {tabs};
