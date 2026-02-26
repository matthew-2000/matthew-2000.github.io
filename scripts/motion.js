(function initSiteMotion() {
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    return;
  }

  const root = document.documentElement;
  const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

  const tokens = Object.freeze({
    duration: Object.freeze({
      route: 160,
      reveal: 210,
      stagger: 60,
      press: 100,
      underline: 140,
      accordion: 190,
      toast: 140,
      theme: 180,
      palette: 160
    }),
    distance: Object.freeze({
      route: 8,
      reveal: 10,
      palette: 8
    }),
    hero: Object.freeze({
      compactRange: 160,
      titleMax: 3.5,
      titleMin: 2.5
    }),
    glass: Object.freeze({
      blur: 14
    }),
    breakpoint: Object.freeze({
      mobile: 860
    }),
    easing: Object.freeze({
      standard: 'cubic-bezier(0.22, 1, 0.36, 1)',
      gentle: 'cubic-bezier(0.16, 1, 0.3, 1)'
    })
  });

  function useReducedMotion() {
    return reducedMotionQuery.matches;
  }

  function onReducedMotionChange(callback) {
    if (typeof callback !== 'function') {
      return function noop() {};
    }

    if (typeof reducedMotionQuery.addEventListener === 'function') {
      reducedMotionQuery.addEventListener('change', callback);
      return function unsubscribe() {
        reducedMotionQuery.removeEventListener('change', callback);
      };
    }

    reducedMotionQuery.addListener(callback);
    return function unsubscribeLegacy() {
      reducedMotionQuery.removeListener(callback);
    };
  }

  function syncReducedMotionState() {
    // MDN behavior: this media query matches when users request less motion.
    root.setAttribute('data-reduced-motion', useReducedMotion() ? 'reduce' : 'no-preference');
  }

  function setTokenVariables() {
    root.style.setProperty('--motion-duration-route', tokens.duration.route + 'ms');
    root.style.setProperty('--motion-duration-reveal', tokens.duration.reveal + 'ms');
    root.style.setProperty('--motion-duration-stagger', tokens.duration.stagger + 'ms');
    root.style.setProperty('--motion-duration-press', tokens.duration.press + 'ms');
    root.style.setProperty('--motion-duration-underline', tokens.duration.underline + 'ms');
    root.style.setProperty('--motion-duration-accordion', tokens.duration.accordion + 'ms');
    root.style.setProperty('--motion-duration-toast', tokens.duration.toast + 'ms');
    root.style.setProperty('--motion-duration-theme', tokens.duration.theme + 'ms');
    root.style.setProperty('--motion-duration-palette', tokens.duration.palette + 'ms');
    root.style.setProperty('--motion-distance-route', tokens.distance.route + 'px');
    root.style.setProperty('--motion-distance-reveal', tokens.distance.reveal + 'px');
    root.style.setProperty('--motion-distance-palette', tokens.distance.palette + 'px');
    root.style.setProperty('--motion-ease-standard', tokens.easing.standard);
    root.style.setProperty('--motion-ease-gentle', tokens.easing.gentle);
    root.style.setProperty('--hero-compact-range', tokens.hero.compactRange + 'px');
    root.style.setProperty('--hero-title-max', tokens.hero.titleMax + 'rem');
    root.style.setProperty('--hero-title-min', tokens.hero.titleMin + 'rem');
    root.style.setProperty('--glass-blur', tokens.glass.blur + 'px');
    root.style.setProperty('--bp-mobile', tokens.breakpoint.mobile + 'px');
  }

  const baseConfig = Object.freeze({
    enableQuietGrain: false
  });
  const externalConfig = window.__SITE_CONFIG__ && typeof window.__SITE_CONFIG__ === 'object'
    ? window.__SITE_CONFIG__
    : {};
  const siteConfig = Object.freeze(Object.assign({}, baseConfig, externalConfig));

  if (siteConfig.enableQuietGrain) {
    root.classList.add('has-quiet-grain');
  }

  root.classList.add('motion-enabled');
  setTokenVariables();
  syncReducedMotionState();
  onReducedMotionChange(syncReducedMotionState);

  window.SiteConfig = siteConfig;
  window.SiteMotion = Object.freeze({
    tokens: tokens,
    useReducedMotion: useReducedMotion,
    onReducedMotionChange: onReducedMotionChange
  });
})();
