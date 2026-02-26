(function loadSelectedPublications() {
  const list = document.getElementById('selected-publications');
  if (!list) {
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

  function formatAuthors(authors, nameToHighlight) {
    return authors
      .map(function mapAuthor(author) {
        if (author.trim().toLowerCase() === nameToHighlight.trim().toLowerCase()) {
          return '<strong class="author-self">' + escapeHtml(author) + '</strong>';
        }
        return escapeHtml(author);
      })
      .join(', ');
  }

  fetch('data/publications.json')
    .then(function parseResponse(response) {
      if (!response.ok) {
        throw new Error('Failed to load publications data');
      }
      return response.json();
    })
    .then(function renderSelected(data) {
      const sorted = (data.publications || []).slice().sort(function byYearDesc(a, b) {
        return Number(b.year || 0) - Number(a.year || 0);
      });

      const selected = sorted.slice(0, 3);
      if (!selected.length) {
        list.innerHTML = '<li class="empty-state">No publications available.</li>';
        return;
      }

      list.innerHTML = selected
        .map(function renderItem(item) {
          const links = (item.links || [])
            .map(function renderLink(link) {
              return '<a href="' + escapeHtml(link.url) + '" target="_blank" rel="noopener noreferrer">' + escapeHtml(link.label) + '</a>';
            })
            .join(' · ');

          return [
            '<li>',
            '<p class="pub-authors">' + formatAuthors(item.authors || [], data.nameToHighlight || '') + ' (' + escapeHtml(item.year) + ').</p>',
            '<p class="pub-title">' + escapeHtml(item.title) + '.</p>',
            '<p class="pub-venue">' + escapeHtml(item.venue) + '.</p>',
            links ? '<p class="pub-links">' + links + '</p>' : '',
            '</li>'
          ].join('');
        })
        .join('');
    })
    .catch(function onError() {
      list.innerHTML = '<li class="empty-state">Unable to load publications.</li>';
    });
})();
