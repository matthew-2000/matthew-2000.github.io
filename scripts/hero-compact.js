(function initHeroCompaction() {
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    return;
  }

  const body = document.body;
  const root = document.documentElement;
  const motion = window.SiteMotion;

  if (!body || body.getAttribute('data-page') !== 'home' || !motion) {
    return;
  }

  const compactRange = motion.tokens && motion.tokens.hero ? motion.tokens.hero.compactRange : 160;
  let ticking = false;

  function setProgress() {
    const scrollY = window.scrollY || window.pageYOffset || 0;

    if (motion.useReducedMotion()) {
      const isCompact = scrollY >= compactRange;
      root.style.setProperty('--hero-progress', isCompact ? '1' : '0');
      body.classList.toggle('is-hero-compact', isCompact);
      return;
    }

    const progress = Math.max(0, Math.min(scrollY / compactRange, 1));
    root.style.setProperty('--hero-progress', progress.toFixed(3));
    body.classList.toggle('is-hero-compact', progress >= 0.82);
  }

  function requestTick() {
    if (ticking) {
      return;
    }

    ticking = true;
    window.requestAnimationFrame(function onFrame() {
      setProgress();
      ticking = false;
    });
  }

  window.addEventListener('scroll', requestTick, { passive: true });
  window.addEventListener('resize', requestTick);

  if (typeof motion.onReducedMotionChange === 'function') {
    motion.onReducedMotionChange(requestTick);
  }

  setProgress();
})();
