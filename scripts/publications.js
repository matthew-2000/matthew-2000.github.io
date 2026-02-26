(function initPublicationsPage() {
  const main = document.querySelector('main[data-publications-source]');
  const filter = document.getElementById('type-filter');
  const list = document.getElementById('publication-list');
  const results = document.getElementById('publication-results');

  if (!main || !filter || !list || !results) {
    return;
  }

  const source = main.getAttribute('data-publications-source');
  let allItems = [];
  let highlightName = '';

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

        const detailsId = 'bibtex-' + index;
        const hasBibtex = typeof item.bibtex === 'string' && item.bibtex.trim().length > 0;
        const bibtexBlock = hasBibtex
          ? [
              '<details class="bibtex-block">',
              '<summary>BibTeX</summary>',
              '<pre id="' + detailsId + '">' + escapeHtml(item.bibtex) + '</pre>',
              '<button class="copy-bibtex" type="button" data-target="' + detailsId + '">Copy</button>',
              '</details>'
            ].join('')
          : '';

        return [
          '<li class="pub-item">',
          '<p class="pub-authors">' + formatAuthors(item.authors || []) + ' (' + escapeHtml(item.year) + ').</p>',
          '<p class="pub-title">' + escapeHtml(item.title) + '.</p>',
          '<p class="pub-venue">' + escapeHtml(item.venue) + ' · ' + escapeHtml(item.type) + '.</p>',
          links ? '<p class="pub-links">' + links + '</p>' : '',
          bibtexBlock,
          '</li>'
        ].join('');
      })
      .join('');
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

  list.addEventListener('click', function onCopyClick(event) {
    const button = event.target.closest('.copy-bibtex');
    if (!button) {
      return;
    }

    const targetId = button.getAttribute('data-target');
    const pre = targetId ? document.getElementById(targetId) : null;
    if (!pre) {
      return;
    }

    navigator.clipboard.writeText(pre.textContent || '').then(
      function onSuccess() {
        const original = button.textContent;
        button.textContent = 'Copied';
        setTimeout(function resetLabel() {
          button.textContent = original;
        }, 1200);
      },
      function onError() {
        button.textContent = 'Copy failed';
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
