const preload = () => {
  const preloadEl = document.querySelector('.js-preload');

  const hidePreload = () => {
    setTimeout(() => {
      preloadEl.classList.remove('preload--show');
    }, 1000);
  };

  if (preload) {
    document.addEventListener('DOMContentLoaded', hidePreload);
  }
};

export {preload};
