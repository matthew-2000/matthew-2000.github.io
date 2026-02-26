(function initPageTransitions() {
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    return;
  }

  const main = document.querySelector('.page-main');
  const motion = window.SiteMotion;

  if (!main || !motion) {
    return;
  }

  function reducedMotion() {
    return motion.useReducedMotion();
  }

  function runEnterTransition() {
    if (reducedMotion()) {
      return;
    }

    main.classList.add('is-page-entering');
    requestAnimationFrame(function onNextFrame() {
      requestAnimationFrame(function activateEnter() {
        main.classList.add('is-page-entered');
      });
    });

    main.addEventListener(
      'transitionend',
      function cleanup(event) {
        if (event.propertyName !== 'opacity') {
          return;
        }
        main.classList.remove('is-page-entering');
        main.classList.remove('is-page-entered');
      },
      { once: true }
    );
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', runEnterTransition, { once: true });
  } else {
    runEnterTransition();
  }

  function shouldHandleLink(anchor, event) {
    if (!anchor || event.defaultPrevented) {
      return false;
    }

    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
      return false;
    }

    if (anchor.target && anchor.target !== '_self') {
      return false;
    }

    if (anchor.hasAttribute('download')) {
      return false;
    }

    const href = anchor.getAttribute('href');
    if (!href || href.startsWith('#')) {
      return false;
    }

    let nextUrl;
    try {
      nextUrl = new URL(anchor.href, window.location.href);
    } catch (error) {
      return false;
    }

    if (nextUrl.origin !== window.location.origin) {
      return false;
    }

    if (nextUrl.pathname === window.location.pathname && nextUrl.search === window.location.search) {
      return false;
    }

    return true;
  }

  let navigating = false;

  document.addEventListener('click', function onNavigate(event) {
    const anchor = event.target.closest('a[href]');
    if (!shouldHandleLink(anchor, event) || navigating) {
      return;
    }

    if (reducedMotion()) {
      return;
    }

    event.preventDefault();

    const targetUrl = anchor.href;
    const duration = motion.tokens.duration.route;

    function navigateOnce() {
      if (navigating) {
        return;
      }
      navigating = true;
      window.location.href = targetUrl;
    }

    function applyLeavingState() {
      document.documentElement.classList.add('is-route-leaving');
      main.classList.add('is-route-leaving');
    }

    if (typeof document.startViewTransition === 'function') {
      try {
        const transition = document.startViewTransition(function update() {
          applyLeavingState();
        });
        transition.finished.finally(navigateOnce);
        window.setTimeout(navigateOnce, duration + 40);
        return;
      } catch (error) {
        applyLeavingState();
        window.setTimeout(navigateOnce, duration);
        return;
      }
    }

    applyLeavingState();
    window.setTimeout(navigateOnce, duration);
  });
})();
