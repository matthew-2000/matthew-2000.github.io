(function initCvPage() {
  const main = document.querySelector('main[data-cv-source][data-publications-source]');
  if (!main) {
    return;
  }

  const cvSource = main.getAttribute('data-cv-source');
  const publicationsSource = main.getAttribute('data-publications-source');

  const educationRoot = document.getElementById('cv-education');
  const researchRoot = document.getElementById('cv-research');
  const teachingRoot = document.getElementById('cv-teaching');
  const teachingSection = document.getElementById('cv-teaching-section');
  const skillsRoot = document.getElementById('cv-skills');
  const publicationsRoot = document.getElementById('cv-publications');

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function renderEntries(root, entries) {
    root.innerHTML = (entries || [])
      .map(function renderEntry(entry) {
        return [
          '<article class="cv-entry">',
          '<p class="cv-entry-meta">' + escapeHtml(entry.period) + '</p>',
          '<h3>' + escapeHtml(entry.title) + '</h3>',
          entry.organization ? '<p class="cv-entry-org">' + escapeHtml(entry.organization) + '</p>' : '',
          '<p>' + escapeHtml(entry.description) + '</p>',
          '</article>'
        ].join('');
      })
      .join('');
  }

  function renderSkills(skills) {
    skillsRoot.innerHTML = (skills || [])
      .map(function renderSkill(skill) {
        return '<li>' + escapeHtml(skill) + '</li>';
      })
      .join('');
  }

  function renderPublications(publicationData) {
    const highlightName = (publicationData && publicationData.nameToHighlight) || '';
    const items = (publicationData && publicationData.publications ? publicationData.publications : [])
      .slice()
      .sort(function byYearDesc(a, b) {
        return Number(b.year || 0) - Number(a.year || 0);
      });

    publicationsRoot.innerHTML = items
      .map(function renderItem(item) {
        const authors = (item.authors || [])
          .map(function mapAuthor(author) {
            if (author.trim().toLowerCase() === highlightName.trim().toLowerCase()) {
              return '<strong class="author-self">' + escapeHtml(author) + '</strong>';
            }
            return escapeHtml(author);
          })
          .join(', ');

        return [
          '<li>',
          '<p class="pub-authors">' + authors + ' (' + escapeHtml(item.year) + ').</p>',
          '<p class="pub-title">' + escapeHtml(item.title) + '.</p>',
          '<p class="pub-venue">' + escapeHtml(item.venue) + ' · ' + escapeHtml(item.type) + '.</p>',
          '</li>'
        ].join('');
      })
      .join('');
  }

  Promise.all([
    fetch(cvSource).then(function parseCv(response) {
      if (!response.ok) {
        throw new Error('Failed to load CV data');
      }
      return response.json();
    }),
    fetch(publicationsSource).then(function parsePubs(response) {
      if (!response.ok) {
        throw new Error('Failed to load publication data');
      }
      return response.json();
    })
  ])
    .then(function render(data) {
      const cvData = data[0] || {};
      const publicationData = data[1] || {};

      renderEntries(educationRoot, cvData.education || []);
      renderEntries(researchRoot, cvData.research || []);
      renderSkills(cvData.skills || []);
      renderPublications(publicationData);

      const teaching = cvData.teaching || [];
      if (teaching.length) {
        renderEntries(teachingRoot, teaching);
      } else {
        teachingSection.hidden = true;
      }
    })
    .catch(function onError() {
      educationRoot.innerHTML = '<p class="empty-state">Unable to load CV data.</p>';
      researchRoot.innerHTML = '';
      teachingSection.hidden = true;
      publicationsRoot.innerHTML = '';
      skillsRoot.innerHTML = '';
    });
})();
