(function initTheme() {
  const storageKey = 'theme-preference';
  const root = document.documentElement;
  const toggle = document.getElementById('theme-toggle');
  const label = toggle ? toggle.querySelector('.theme-toggle-text') : null;
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

  function storedPreference() {
    return localStorage.getItem(storageKey);
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
    if (toggle) {
      toggle.setAttribute('aria-pressed', String(theme === 'dark'));
      toggle.setAttribute('aria-label', 'Switch to ' + (theme === 'dark' ? 'light' : 'dark') + ' mode');
    }
  }

  applyTheme(preferredTheme());
  root.classList.add('theme-ready');

  if (toggle) {
    toggle.addEventListener('click', function onToggle() {
      const current = root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
      const next = current === 'dark' ? 'light' : 'dark';
      localStorage.setItem(storageKey, next);
      applyTheme(next);
    });
  }

  mediaQuery.addEventListener('change', function onSystemThemeChange(event) {
    if (storedPreference()) {
      return;
    }
    applyTheme(event.matches ? 'dark' : 'light');
  });
})();
