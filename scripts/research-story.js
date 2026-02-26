(function initResearchStory() {
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    return;
  }

  const body = document.body;
  const motion = window.SiteMotion;
  const section = document.querySelector('[data-research-story-source]');

  if (!body || body.getAttribute('data-page') !== 'home' || !section || !motion) {
    return;
  }

  const indicatorRoot = section.querySelector('[data-research-indicator]');
  const trackRoot = section.querySelector('[data-research-track]');
  const source = section.getAttribute('data-research-story-source');
  const supportsScrollDriven = typeof CSS !== 'undefined' && CSS.supports && CSS.supports('animation-timeline: view()');
  let observer = null;
  let visibilityByIndex = [];
  let stepCount = 0;
  let activeIndex = 0;

  if (!indicatorRoot || !trackRoot) {
    return;
  }

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function normalizeItems(rawItems) {
    const fromSource = Array.isArray(rawItems)
      ? rawItems
          .map(function mapItem(item) {
            const title = item && typeof item.title === 'string' ? item.title.trim() : '';
            const text = item && typeof item.text === 'string' ? item.text.trim() : '';
            const methods = item && typeof item.methods === 'string' ? item.methods.trim() : '';
            if (!title || !text) {
              return null;
            }
            return {
              title: title,
              text: text,
              methods: methods
            };
          })
          .filter(Boolean)
      : [];

    const normalized = fromSource.slice(0, 4);
    while (normalized.length < 2) {
      normalized.push({
        title: 'TBD: research area',
        text: 'TBD: 1-2 factual sentences',
        methods: ''
      });
    }

    return normalized;
  }

  function setActiveStep(index) {
    const nextIndex = Math.max(0, Math.min(index, stepCount - 1));
    activeIndex = nextIndex;

    const indicatorItems = indicatorRoot.querySelectorAll('button[data-step-index]');
    const steps = trackRoot.querySelectorAll('.research-story-step');

    indicatorItems.forEach(function updateIndicator(button) {
      const isActive = Number(button.getAttribute('data-step-index')) === activeIndex;
      button.classList.toggle('is-active', isActive);
      if (isActive) {
        button.setAttribute('aria-current', 'step');
      } else {
        button.removeAttribute('aria-current');
      }
    });

    steps.forEach(function updateStep(step) {
      const isActive = Number(step.getAttribute('data-step-index')) === activeIndex;
      step.classList.toggle('is-active', isActive);
      step.setAttribute('data-active', isActive ? 'true' : 'false');
    });
  }

  function setObserverState() {
    if (observer) {
      observer.disconnect();
      observer = null;
    }

    if (!stepCount) {
      return;
    }

    const reducedMotion = motion.useReducedMotion();
    section.classList.toggle('is-static', reducedMotion);
    section.classList.toggle('has-scroll-driven', supportsScrollDriven && !reducedMotion);
    section.classList.toggle('is-discrete', !supportsScrollDriven && !reducedMotion);

    setActiveStep(0);

    if (reducedMotion) {
      return;
    }

    const steps = Array.prototype.slice.call(trackRoot.querySelectorAll('.research-story-step'));
    visibilityByIndex = steps.map(function mapToZero() {
      return 0;
    });

    observer = new IntersectionObserver(
      function handleEntries(entries) {
        entries.forEach(function handleEntry(entry) {
          const index = Number(entry.target.getAttribute('data-step-index'));
          if (Number.isNaN(index)) {
            return;
          }

          visibilityByIndex[index] = entry.isIntersecting ? entry.intersectionRatio : 0;
        });

        let highestIndex = activeIndex;
        let highestRatio = -1;
        visibilityByIndex.forEach(function pickHighest(ratio, index) {
          if (ratio > highestRatio) {
            highestRatio = ratio;
            highestIndex = index;
          }
        });

        if (highestRatio >= 0) {
          setActiveStep(highestIndex);
        }
      },
      {
        threshold: [0.25, 0.45, 0.65, 0.85],
        rootMargin: '-22% 0px -30% 0px'
      }
    );

    steps.forEach(function observeStep(step) {
      observer.observe(step);
    });
  }

  function bindIndicatorClicks() {
    indicatorRoot.addEventListener('click', function onIndicatorClick(event) {
      const button = event.target.closest('button[data-step-index]');
      if (!button) {
        return;
      }

      const index = Number(button.getAttribute('data-step-index'));
      const target = trackRoot.querySelector('.research-story-step[data-step-index="' + index + '"]');
      if (!target) {
        return;
      }

      target.scrollIntoView({
        block: 'start',
        behavior: motion.useReducedMotion() ? 'auto' : 'smooth'
      });
    });
  }

  function render(items) {
    stepCount = items.length;
    activeIndex = 0;

    indicatorRoot.innerHTML = items
      .map(function renderIndicator(item, index) {
        return [
          '<li>',
          '<button class="research-story-indicator-item' + (index === 0 ? ' is-active' : '') + '" type="button" data-step-index="' + index + '"' + (index === 0 ? ' aria-current="step"' : '') + '>',
          '<span class="research-story-indicator-dot" aria-hidden="true"></span>',
          '<span class="research-story-indicator-label">' + escapeHtml(item.title) + '</span>',
          '</button>',
          '</li>'
        ].join('');
      })
      .join('');

    trackRoot.innerHTML = items
      .map(function renderStep(item, index) {
        const methodsLine = item.methods
          ? '<p class="research-story-methods"><strong>Methods/keywords:</strong> ' + escapeHtml(item.methods) + '</p>'
          : '';

        return [
          '<article class="research-story-step' + (index === 0 ? ' is-active' : '') + '" data-step-index="' + index + '" data-active="' + (index === 0 ? 'true' : 'false') + '">',
          '<div class="research-story-card">',
          '<h3>' + escapeHtml(item.title) + '</h3>',
          '<p>' + escapeHtml(item.text) + '</p>',
          methodsLine,
          '</div>',
          '</article>'
        ].join('');
      })
      .join('');

    setObserverState();
  }

  function fallbackData() {
    return normalizeItems([]);
  }

  bindIndicatorClicks();

  if (typeof motion.onReducedMotionChange === 'function') {
    motion.onReducedMotionChange(function onReducedMotionChanged() {
      setObserverState();
    });
  }

  if (!source) {
    render(fallbackData());
    return;
  }

  fetch(source)
    .then(function parseResponse(response) {
      if (!response.ok) {
        throw new Error('Failed to load research story data');
      }
      return response.json();
    })
    .then(function renderFromSource(payload) {
      render(normalizeItems(payload && payload.areas ? payload.areas : []));
    })
    .catch(function onError() {
      render(fallbackData());
    });
})();
