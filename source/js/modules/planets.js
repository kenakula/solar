const planets = () => {
  const MOBILE_WIDTH = 768;
  const solar = document.querySelector('.solar');

  const onPlanetMouseOver = (evt) => {
    console.log(evt.clientX);
  };

  window.addEventListener('mouseover', onPlanetMouseOver);
};

export {planets};
