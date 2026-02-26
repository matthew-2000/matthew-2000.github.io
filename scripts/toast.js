(function initToast() {
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    return;
  }

  const motion = window.SiteMotion;
  const body = document.body;

  if (!body || !motion) {
    return;
  }

  let region = document.getElementById('toast-region');
  if (!region) {
    region = document.createElement('div');
    region.id = 'toast-region';
    region.className = 'toast-region';
    region.setAttribute('aria-live', 'polite');
    region.setAttribute('aria-atomic', 'true');
    body.appendChild(region);
  }

  let activeToast = null;
  let dismissTimer = null;

  function show(message, options) {
    const settings = options || {};
    const duration = typeof settings.duration === 'number' ? settings.duration : 1400;

    if (dismissTimer) {
      clearTimeout(dismissTimer);
      dismissTimer = null;
    }

    if (activeToast) {
      activeToast.remove();
      activeToast = null;
    }

    activeToast = document.createElement('div');
    activeToast.className = 'toast';
    activeToast.textContent = message;
    region.appendChild(activeToast);

    if (!motion.useReducedMotion()) {
      requestAnimationFrame(function onFrame() {
        activeToast.classList.add('is-visible');
      });
    } else {
      activeToast.classList.add('is-visible');
    }

    dismissTimer = window.setTimeout(function dismiss() {
      if (!activeToast) {
        return;
      }

      if (!motion.useReducedMotion()) {
        activeToast.classList.remove('is-visible');
        window.setTimeout(function removeAfterFade() {
          if (activeToast) {
            activeToast.remove();
            activeToast = null;
          }
        }, motion.tokens.duration.toast);
      } else {
        activeToast.remove();
        activeToast = null;
      }
    }, duration);
  }

  window.SiteToast = Object.freeze({ show: show });
})();
