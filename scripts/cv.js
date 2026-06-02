(function initCvPage() {
  if (document.body.getAttribute("data-page") !== "cv") {
    return;
  }

  const main = document.querySelector("main[data-cv-source][data-publications-source]");
  if (!main) {
    return;
  }

  const educationRoot = document.getElementById("cv-education");
  const researchRoot = document.getElementById("cv-research");
  const teachingRoot = document.getElementById("cv-teaching");
  const teachingSection = document.getElementById("teaching");
  const publicationsRoot = document.getElementById("cv-publications");
  const skillsRoot = document.getElementById("cv-skills");

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function renderEntries(root, entries) {
    root.innerHTML = (entries || [])
      .map(function renderEntry(entry) {
        return [
          '<article class="cv-entry">',
          '<p class="entry-period">' + escapeHtml(entry.period || "") + "</p>",
          "<div>",
          "<h3>" + escapeHtml(entry.title || "") + "</h3>",
          entry.organization ? '<p class="cv-entry-org">' + escapeHtml(entry.organization) + "</p>" : "",
          "<p>" + escapeHtml(entry.description || "") + "</p>",
          "</div>",
          "</article>",
        ].join("");
      })
      .join("");
  }

  function renderPublications(data) {
    const highlightName = data.nameToHighlight || "";
    const items = (data.publications || []).slice().sort(function byYearDesc(a, b) {
      return Number(b.year || 0) - Number(a.year || 0);
    });

    publicationsRoot.innerHTML = items
      .map(function renderPublication(item) {
        const authors = (item.authors || [])
          .map(function formatAuthor(author) {
            if (author.trim().toLowerCase() === highlightName.trim().toLowerCase()) {
              return "<strong>" + escapeHtml(author) + "</strong>";
            }
            return escapeHtml(author);
          })
          .join(", ");

        return [
          '<li class="cv-publication">',
          '<div class="cv-publication-meta">',
          "<span>" + escapeHtml(item.type || "Publication") + "</span>",
          "<span>" + escapeHtml(item.year || "") + "</span>",
          "</div>",
          "<div>",
          "<h3>" + escapeHtml(item.title || "") + "</h3>",
          '<p class="publication-authors">' + authors + "</p>",
          '<p class="publication-venue">' + escapeHtml(item.venue || "") + "</p>",
          "</div>",
          "</li>",
        ].join("");
      })
      .join("");
  }

  function renderSkills(skills) {
    skillsRoot.innerHTML = (skills || [])
      .map(function renderSkill(skill) {
        return "<li>" + escapeHtml(skill) + "</li>";
      })
      .join("");
  }

  Promise.all([
    fetch(main.getAttribute("data-cv-source")).then(function parseCv(response) {
      if (!response.ok) {
        throw new Error("Failed to load CV data");
      }
      return response.json();
    }),
    fetch(main.getAttribute("data-publications-source")).then(function parsePublications(response) {
      if (!response.ok) {
        throw new Error("Failed to load publication data");
      }
      return response.json();
    }),
  ])
    .then(function onLoaded(data) {
      const cvData = data[0] || {};
      const publicationsData = data[1] || {};

      renderEntries(educationRoot, cvData.education || []);
      renderEntries(researchRoot, cvData.research || []);
      renderSkills(cvData.skills || []);
      renderPublications(publicationsData);

      if (Array.isArray(cvData.teaching) && cvData.teaching.length) {
        renderEntries(teachingRoot, cvData.teaching);
      } else if (teachingSection) {
        teachingSection.hidden = true;
      }
    })
    .catch(function onError() {
      educationRoot.innerHTML = '<p class="empty-state">Unable to load CV data.</p>';
      researchRoot.innerHTML = "";
      teachingRoot.innerHTML = "";
      publicationsRoot.innerHTML = "";
      skillsRoot.innerHTML = "";
    });
})();
