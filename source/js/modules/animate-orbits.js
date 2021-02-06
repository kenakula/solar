const orbits = document.querySelectorAll('.orbit');
const asteroids = document.querySelector('.asteroid-belt');

const setRotationSpeed = (el) => {
  let delimeter = +getComputedStyle(document.documentElement).getPropertyValue('--delimeter');
  let orbitSpeed = +el.dataset.speed;
  const animationSpeed = orbitSpeed / delimeter;

  el.style.animationDuration = `${animationSpeed}s`;
};

const animateOrbits = () => {
  if (orbits.length && asteroids) {
    setRotationSpeed(asteroids);

    orbits.forEach((orbit) => {
      setRotationSpeed(orbit);
    });
  }
};

export { animateOrbits };
