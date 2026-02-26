(function initHomeReveal() {
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    return;
  }

  const body = document.body;
  const motion = window.SiteMotion;

  if (!body || !motion || body.getAttribute('data-page') !== 'home') {
    return;
  }

  const targets = Array.prototype.slice.call(document.querySelectorAll('[data-reveal]'));
  if (!targets.length) {
    return;
  }

  function reducedMotion() {
    return motion.useReducedMotion();
  }

  function markVisible(element) {
    const children = element.querySelectorAll('[data-reveal-child]');
    children.forEach(function applyDelay(child, index) {
      const delay = reducedMotion() ? 0 : index * motion.tokens.duration.stagger;
      child.style.setProperty('--reveal-delay', delay + 'ms');
    });
    element.classList.add('is-revealed');
  }

  function Reveal(element, observer) {
    this.element = element;
    this.observer = observer;
  }

  Reveal.prototype.reveal = function reveal() {
    markVisible(this.element);
    if (this.observer) {
      this.observer.unobserve(this.element);
    }
  };

  window.Reveal = Reveal;

  if (reducedMotion()) {
    targets.forEach(function showImmediately(target) {
      markVisible(target);
    });
    return;
  }

  const revealMap = new Map();
  const observer = new IntersectionObserver(
    function onIntersect(entries) {
      entries.forEach(function handleEntry(entry) {
        if (!entry.isIntersecting) {
          return;
        }
        const instance = revealMap.get(entry.target);
        if (instance) {
          instance.reveal();
        }
      });
    },
    {
      root: null,
      threshold: 0.16,
      rootMargin: '0px 0px -8% 0px'
    }
  );

  targets.forEach(function observeTarget(target) {
    revealMap.set(target, new Reveal(target, observer));
    observer.observe(target);
  });
})();
