const tooltips = () => {
  const buttons = document.querySelectorAll('.js-tooltip-btn');

  class Tooltip {
    constructor(btn) {
      this.button = btn;
      this.activeClass = 'active';
      this.tooltipId = btn.dataset.tooltip;
      this.tooltip = document.querySelector(`#${this.tooltipId}`);

      document.addEventListener('click', (evt) => {
        this.toggleTooltip(evt);
      });
    }

    toggleTooltip(evt) {
      const target = evt.target.closest('.js-tooltip-btn');

      if (target && !this.tooltip.classList.contains('active')) {
        this.tooltip.classList.add('active');
      } else if (target && this.tooltip.classList.contains('active')) {
        this.tooltip.classList.remove('active');
      } else {
        this.tooltip.classList.remove('active');
      }
    }
  }

  if (buttons.length) {
    buttons.forEach((btn) => {
      new Tooltip(btn);
    });
  }
};

export {tooltips};
