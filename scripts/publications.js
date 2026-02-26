(function initPublicationsPage() {
  const main = document.querySelector('main[data-publications-source]');
  const filter = document.getElementById('type-filter');
  const list = document.getElementById('publication-list');
  const results = document.getElementById('publication-results');
  const motion = window.SiteMotion;

  if (!main || !filter || !list || !results) {
    return;
  }

  const source = main.getAttribute('data-publications-source');
  let allItems = [];
  let highlightName = '';

  function prefersReducedMotion() {
    if (motion && typeof motion.useReducedMotion === 'function') {
      return motion.useReducedMotion();
    }
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function formatAuthors(authors) {
    return authors
      .map(function mapAuthor(author) {
        if (author.trim().toLowerCase() === highlightName.trim().toLowerCase()) {
          return '<strong class="author-self">' + escapeHtml(author) + '</strong>';
        }
        return escapeHtml(author);
      })
      .join(', ');
  }

  function renderAccordionItem(idPrefix, index, label, contentHtml) {
    const triggerId = idPrefix + '-trigger-' + index;
    const panelId = idPrefix + '-panel-' + index;

    return [
      '<div class="accordion-item">',
      '<button id="' + triggerId + '" class="accordion-trigger" type="button" aria-expanded="false" aria-controls="' + panelId + '">',
      escapeHtml(label),
      '</button>',
      '<div id="' + panelId + '" class="accordion-panel" role="region" aria-labelledby="' + triggerId + '" hidden>',
      '<div class="accordion-panel-inner">',
      contentHtml,
      '</div>',
      '</div>',
      '</div>'
    ].join('');
  }

  function render(items) {
    results.textContent = items.length + ' publication' + (items.length === 1 ? '' : 's');

    if (!items.length) {
      list.innerHTML = '<li class="empty-state">No publications for this type.</li>';
      return;
    }

    list.innerHTML = items
      .map(function renderItem(item, index) {
        const links = (item.links || [])
          .map(function renderLink(link) {
            return '<a href="' + escapeHtml(link.url) + '" target="_blank" rel="noopener noreferrer">' + escapeHtml(link.label) + '</a>';
          })
          .join(' · ');

        const hasAbstract = typeof item.abstract === 'string' && item.abstract.trim().length > 0;
        const hasBibtex = typeof item.bibtex === 'string' && item.bibtex.trim().length > 0;

        const accordionItems = [];
        if (hasAbstract) {
          accordionItems.push(
            renderAccordionItem(
              'abstract-' + index,
              index,
              'Abstract',
              '<p class="accordion-content">' + escapeHtml(item.abstract) + '</p>'
            )
          );
        }

        if (hasBibtex) {
          const bibtexCodeId = 'bibtex-code-' + index;
          accordionItems.push(
            renderAccordionItem(
              'bibtex-' + index,
              index,
              'BibTeX',
              [
                '<pre id="' + bibtexCodeId + '">' + escapeHtml(item.bibtex) + '</pre>',
                '<button class="copy-bibtex" type="button" data-target="' + bibtexCodeId + '">Copy</button>'
              ].join('')
            )
          );
        }

        const accordionBlock = accordionItems.length
          ? '<div class="pub-accordion">' + accordionItems.join('') + '</div>'
          : '';

        return [
          '<li class="pub-item">',
          '<p class="pub-authors">' + formatAuthors(item.authors || []) + ' (' + escapeHtml(item.year) + ').</p>',
          '<p class="pub-title">' + escapeHtml(item.title) + '.</p>',
          '<p class="pub-venue">' + escapeHtml(item.venue) + ' · ' + escapeHtml(item.type) + '.</p>',
          links ? '<p class="pub-links">' + links + '</p>' : '',
          accordionBlock,
          '</li>'
        ].join('');
      })
      .join('');
  }

  function clearPanelListener(panel) {
    if (panel._accordionTransitionEnd) {
      panel.removeEventListener('transitionend', panel._accordionTransitionEnd);
      panel._accordionTransitionEnd = null;
    }
  }

  function openPanel(trigger, panel) {
    trigger.setAttribute('aria-expanded', 'true');

    if (prefersReducedMotion()) {
      panel.hidden = false;
      panel.style.height = 'auto';
      panel.style.opacity = '1';
      return;
    }

    clearPanelListener(panel);

    panel.hidden = false;
    panel.style.overflow = 'hidden';
    panel.style.height = '0px';
    panel.style.opacity = '0';

    requestAnimationFrame(function animateOpen() {
      panel.style.height = panel.scrollHeight + 'px';
      panel.style.opacity = '1';
    });

    panel._accordionTransitionEnd = function onOpenTransitionEnd(event) {
      if (event.propertyName !== 'height') {
        return;
      }
      panel.style.height = 'auto';
      panel.style.overflow = 'visible';
      clearPanelListener(panel);
    };

    panel.addEventListener('transitionend', panel._accordionTransitionEnd);
  }

  function closePanel(trigger, panel) {
    trigger.setAttribute('aria-expanded', 'false');

    if (prefersReducedMotion()) {
      panel.hidden = true;
      panel.style.height = '0px';
      panel.style.opacity = '0';
      return;
    }

    clearPanelListener(panel);

    panel.style.overflow = 'hidden';
    panel.style.height = panel.scrollHeight + 'px';
    panel.style.opacity = '1';

    requestAnimationFrame(function animateClose() {
      panel.style.height = '0px';
      panel.style.opacity = '0';
    });

    panel._accordionTransitionEnd = function onCloseTransitionEnd(event) {
      if (event.propertyName !== 'height') {
        return;
      }
      panel.hidden = true;
      panel.style.overflow = 'hidden';
      clearPanelListener(panel);
    };

    panel.addEventListener('transitionend', panel._accordionTransitionEnd);
  }

  function toggleAccordion(trigger) {
    const panelId = trigger.getAttribute('aria-controls');
    const panel = panelId ? document.getElementById(panelId) : null;

    if (!panel) {
      return;
    }

    const isExpanded = trigger.getAttribute('aria-expanded') === 'true';
    if (isExpanded) {
      closePanel(trigger, panel);
    } else {
      openPanel(trigger, panel);
    }
  }

  function applyFilter() {
    const type = filter.value;
    const filtered = type === 'All'
      ? allItems
      : allItems.filter(function filterByType(item) {
          return item.type === type;
        });
    render(filtered);
  }

  function showToast(message) {
    if (window.SiteToast && typeof window.SiteToast.show === 'function') {
      window.SiteToast.show(message, { duration: 1500 });
    }
  }

  function copyText(text) {
    if (navigator.clipboard && window.isSecureContext) {
      return navigator.clipboard.writeText(text);
    }

    return new Promise(function fallbackCopy(resolve, reject) {
      const textarea = document.createElement('textarea');
      textarea.value = text;
      textarea.setAttribute('readonly', 'readonly');
      textarea.style.position = 'absolute';
      textarea.style.left = '-9999px';
      document.body.appendChild(textarea);
      textarea.select();

      const copied = document.execCommand('copy');
      textarea.remove();

      if (copied) {
        resolve();
      } else {
        reject(new Error('Copy failed'));
      }
    });
  }

  list.addEventListener('click', function onListClick(event) {
    const trigger = event.target.closest('.accordion-trigger');
    if (trigger) {
      toggleAccordion(trigger);
      return;
    }

    const button = event.target.closest('.copy-bibtex');
    if (!button) {
      return;
    }

    const targetId = button.getAttribute('data-target');
    const pre = targetId ? document.getElementById(targetId) : null;
    if (!pre) {
      return;
    }

    copyText(pre.textContent || '').then(
      function onSuccess() {
        showToast('BibTeX copied');
      },
      function onError() {
        showToast('Copy failed');
      }
    );
  });

  filter.addEventListener('change', applyFilter);

  fetch(source)
    .then(function parseResponse(response) {
      if (!response.ok) {
        throw new Error('Failed to load publication data');
      }
      return response.json();
    })
    .then(function loadData(data) {
      highlightName = data.nameToHighlight || '';
      allItems = (data.publications || []).slice().sort(function byYearDesc(a, b) {
        return Number(b.year || 0) - Number(a.year || 0);
      });
      applyFilter();
    })
    .catch(function onError() {
      results.textContent = '';
      list.innerHTML = '<li class="empty-state">Unable to load publications data.</li>';
    });
})();
