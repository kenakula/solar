const drawStars = () => {
  const canvas = document.querySelector('.js-sky');

  if (!canvas) {
    return;
  }

  const starsCount = canvas.dataset.stars;
  const colors = canvas.dataset.colors;
  const colorRange = JSON.parse(colors);

  const ctx = canvas.getContext('2d');

  const getRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const render = (canvasEl, stars, colorsArr) => {
    canvasEl.width = window.innerWidth;
    canvasEl.height = window.innerHeight;

    for (let i = 0; i < +stars; i++) {
      let x = Math.random() * canvasEl.offsetWidth;
      let y = Math.random() * canvasEl.offsetHeight;
      let radius = Math.random() * 1.2;
      let hue = colorsArr[getRandom(0, colorsArr.length - 1)];
      let saturation = getRandom(50, 100);

      ctx.beginPath();
      ctx.arc(x, y, radius, 0, 360);
      ctx.fillStyle = `hsl(${hue}, ${saturation}%, 88%)`;
      ctx.fill();
    }
  };

  document.addEventListener('DOMContentLoaded', () => {
    render(canvas, starsCount, colorRange);
  });

  window.addEventListener('resize', () => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    render(canvas, starsCount, colorRange);
  });
};

export {drawStars};
