(function initTheme() {
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    return;
  }

  const storageKey = 'theme-preference';
  const root = document.documentElement;
  const toggle = document.getElementById('theme-toggle');
  const icon = toggle ? toggle.querySelector('.theme-toggle-icon') : null;
  const label = toggle ? toggle.querySelector('.theme-toggle-text') : null;
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  const motion = window.SiteMotion;

  function prefersReducedMotion() {
    if (motion && typeof motion.useReducedMotion === 'function') {
      return motion.useReducedMotion();
    }
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }

  function storedPreference() {
    try {
      return localStorage.getItem(storageKey);
    } catch (error) {
      return null;
    }
  }

  function preferredTheme() {
    const stored = storedPreference();
    if (stored === 'light' || stored === 'dark') {
      return stored;
    }
    return mediaQuery.matches ? 'dark' : 'light';
  }

  function applyTheme(theme) {
    root.setAttribute('data-theme', theme);
    root.style.colorScheme = theme;
    if (label) {
      label.textContent = theme === 'dark' ? 'Dark' : 'Light';
    }
    if (icon) {
      icon.classList.toggle('is-dark', theme === 'dark');
    }
    if (toggle) {
      toggle.setAttribute('aria-pressed', String(theme === 'dark'));
      toggle.setAttribute('aria-label', 'Switch to ' + (theme === 'dark' ? 'light' : 'dark') + ' mode');
    }
  }

  function persistTheme(theme) {
    try {
      localStorage.setItem(storageKey, theme);
    } catch (error) {
      // Ignore storage write failures (private mode / blocked storage).
    }
  }

  applyTheme(preferredTheme());
  root.classList.add('theme-ready');

  if (toggle) {
    toggle.addEventListener('click', function onToggle() {
      const current = root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
      const next = current === 'dark' ? 'light' : 'dark';
      persistTheme(next);

      if (typeof document.startViewTransition === 'function' && !prefersReducedMotion()) {
        document.startViewTransition(function applyWithTransition() {
          applyTheme(next);
        });
        return;
      }

      applyTheme(next);
    });
  }

  function handleSystemThemeChange(event) {
    if (storedPreference()) {
      return;
    }
    applyTheme(event.matches ? 'dark' : 'light');
  }

  if (typeof mediaQuery.addEventListener === 'function') {
    mediaQuery.addEventListener('change', handleSystemThemeChange);
  } else {
    mediaQuery.addListener(handleSystemThemeChange);
  }
})();
