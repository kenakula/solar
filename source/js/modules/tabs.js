import Swiper from 'swiper';

const tabsList = document.querySelector('.js-info-tabs');
const tabsBtns = document.querySelectorAll('.js-info-tabs-btn');

const initSlider = (tab) => {
  const sliderContainer = tab.querySelector('.swiper-container');

  if (sliderContainer) {
    const swiper = new Swiper('.swiper-container', {
      navigation: false,
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
    initSlider(contentTab);
  }
};

const tabs = () => {
  if (tabsList && tabsBtns.length) {
    tabsBtns.forEach((btn) => {
      btn.addEventListener('click', showTab);
    });
  }
};

export {tabs};
