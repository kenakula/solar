const zoom = () => {
  const solarEl = document.querySelector('.solar__inner');
  let coords;
  let distance;
  let deltaDistance;

  function GetCoords(evtTouches) {
    this.x1 = evtTouches[0].clientX;
    this.y1 = evtTouches[0].clientY;

    if (evtTouches.length > 1) {
      this.x2 = evtTouches[1].clientX;
      this.y2 = evtTouches[1].clientY;
    } else {
      this.x2 = 500;
      this.y2 = 500;
    }
  }

  const getDistance = ({x1, y1, x2, y2}) => {
    let deltaX = x2 - x1;
    let deltaY = y2 - y1;

    deltaX *= deltaX;
    deltaY *= deltaY;

    return Math.sqrt(deltaX + deltaY);
  };

  const zoomSolar = (newDistance) => {
    const step = 10;
    const initialScale = 0.5;
    const maxScale = 4;
    const isZooming = newDistance > distance;
    deltaDistance = Math.abs(newDistance - distance);
    console.log('deltaDistance:', deltaDistance)

    if (isZooming) {
      // solarEl.style.transform = `translate(-50%,-44%) scale(${scale})`;
    }
  };

  const updateDistance = () => {
    return Math.round(getDistance(coords));
  };

  const onTouchMove = (evt) => {
    coords = new GetCoords(evt.touches);
    const newDistance = updateDistance();

    zoomSolar(newDistance);
  };

  const onTouchEnd = (evt) => {
    document.removeEventListener('touchmove', onTouchMove);
    document.removeEventListener('touchend', onTouchEnd);
  };

  const onTouchStart = (evt) => {
    coords = new GetCoords(evt.touches);
    distance = Math.round(getDistance(coords));

    document.addEventListener('touchmove', onTouchMove);
    document.addEventListener('touchend', onTouchEnd);
  };

  document.addEventListener('touchstart', onTouchStart);
};

export {zoom};
