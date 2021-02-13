import { ieFix } from './utils/ie-fix';
import { iosVhFix } from './utils/ios-vh-fix';

import { initModals } from './modules/init-modals';
import { menuToggler, onMenuTogglerToggleClass } from './modules/toggler';
import { drawStars } from './modules/sky';
import { animateOrbits } from './modules/animate-orbits';
import { setSpeed } from './modules/set-speed';
import { initModalSliders } from './modules/init-modal-sliders';
import { tabs } from './modules/tabs';

// Utils
// ---------------------------------

ieFix();
iosVhFix();

// Modules
// ---------------------------------

initModals();
if (menuToggler) {
  menuToggler.addEventListener('click', onMenuTogglerToggleClass);
}

drawStars();
animateOrbits();
setSpeed();
initModalSliders();
tabs();
