const drawStars = () => {
  const canvas = document.querySelector('.js-sky');

  if (!canvas) {
    return;
  }

  const starsCount = canvas.dataset.stars;
  const colors = canvas.dataset.colors;
  const colorRange = JSON.parse(colors);

  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const getRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  document.addEventListener('DOMContentLoaded', () => {
    for (let i = 0; i < +starsCount; i++) {
      let x = Math.random() * canvas.offsetWidth;
      let y = Math.random() * canvas.offsetHeight;
      let radius = Math.random() * 1.2;
      let hue = colorRange[getRandom(0, colorRange.length - 1)];
      let saturation = getRandom(50, 100);

      ctx.beginPath();
      ctx.arc(x, y, radius, 0, 360);
      ctx.fillStyle = `hsl(${hue}, ${saturation}%, 88%)`;
      ctx.fill();
    }
  });
};

export {drawStars};
