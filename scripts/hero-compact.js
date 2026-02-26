(function initHeroCompaction() {
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    return;
  }

  const body = document.body;
  const root = document.documentElement;
  const motion = window.SiteMotion;
  const sentinel = document.getElementById('hero-compact-sentinel');
  const supportsScrollDriven = typeof CSS !== 'undefined' && CSS.supports && CSS.supports('animation-timeline: scroll()');

  if (!body || body.getAttribute('data-page') !== 'home' || !motion || !sentinel) {
    return;
  }

  const compactRange = motion.tokens && motion.tokens.hero ? motion.tokens.hero.compactRange : 170;
  let observer = null;

  function applyState(isCompact) {
    const reducedMotion = motion.useReducedMotion();
    const useDiscreteState = reducedMotion || !supportsScrollDriven;

    if (useDiscreteState) {
      root.style.setProperty('--hero-progress', isCompact ? '1' : '0');
    } else {
      root.style.setProperty('--hero-progress', '0');
    }

    body.classList.toggle('is-hero-compact', isCompact);
  }

  function bindObserver() {
    if (observer) {
      observer.disconnect();
      observer = null;
    }

    observer = new IntersectionObserver(
      function onIntersect(entries) {
        const entry = entries[0];
        applyState(entry ? !entry.isIntersecting : false);
      },
      {
        threshold: 0
      }
    );

    observer.observe(sentinel);
  }

  sentinel.style.height = compactRange + 'px';
  bindObserver();
  window.addEventListener('resize', bindObserver);

  if (typeof motion.onReducedMotionChange === 'function') {
    motion.onReducedMotionChange(function onReducedMotionChanged() {
      bindObserver();
    });
  }
})();
