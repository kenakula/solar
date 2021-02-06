import { animateOrbits } from './animate-orbits';

const SPEED_MULTIPLIER = 10;

const toolbar = document.querySelector('.js-toolbar');
const speedText = document.querySelector('.js-speed-text span');
let currentMultiplier = +speedText.textContent;

const setSpeedOutput = (value) => {
  if (currentMultiplier === 1) {
    currentMultiplier -= 1;
  }

  let output = currentMultiplier + value;

  if (output > 100) {
    return;
  } else if (output < 1) {
    output = 1;
    speedText.textContent = output;
    currentMultiplier = output;
  } else {
    speedText.textContent = output;
    currentMultiplier = output;
  }
};

const adjustSpeed = (action) => {
  if (action === 'up') {
    setSpeedOutput(SPEED_MULTIPLIER);
  } else {
    setSpeedOutput(-SPEED_MULTIPLIER);
  }

  document.documentElement.style.setProperty('--delimeter', `${currentMultiplier}`);
  animateOrbits();
};

const toolbarInterationHandler = (evt) => {
  const target = evt.target.closest('.main-nav__button');

  adjustSpeed(target.dataset.multiplier);
};

const setSpeed = () => {
  if (toolbar) {
    toolbar.addEventListener('click', toolbarInterationHandler);
  }
};

export {setSpeed};
