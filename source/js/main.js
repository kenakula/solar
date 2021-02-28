import { ieFix } from './utils/ie-fix';
import { iosVhFix } from './utils/ios-vh-fix';

import { initModals } from './modules/init-modals';
import { menuToggler, onMenuTogglerToggleClass } from './modules/toggler';
import { drawStars } from './modules/sky';
import { animateOrbits } from './modules/animate-orbits';
import { setSpeed } from './modules/set-speed';
import { tabs } from './modules/tabs';
import { preload } from './modules/preload';
import { tooltips } from './modules/tooltips';
import { zoom } from './modules/zoom';

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
tabs();
preload();
tooltips();
// zoom();
