(function initHomePage() {
  if (document.body.getAttribute("data-page") !== "home") {
    return;
  }

  const selectedPublicationsRoot = document.getElementById("selected-publications");
  const researchRoot = document.querySelector("[data-research-story-source]");

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function formatAuthors(authors, nameToHighlight) {
    return (authors || [])
      .map(function mapAuthor(author) {
        if (author.trim().toLowerCase() === nameToHighlight.trim().toLowerCase()) {
          return "<strong>" + escapeHtml(author) + "</strong>";
        }
        return escapeHtml(author);
      })
      .join(", ");
  }

  function renderSelectedPublications(data) {
    if (!selectedPublicationsRoot) {
      return;
    }

    const sorted = (data.publications || []).slice().sort(function byYearDesc(a, b) {
      return Number(b.year || 0) - Number(a.year || 0);
    });

    if (!sorted.length) {
      selectedPublicationsRoot.innerHTML = '<li class="empty-state">No publications available.</li>';
      return;
    }

    selectedPublicationsRoot.innerHTML = sorted
      .slice(0, 3)
      .map(function renderPublication(item) {
        const links = (item.links || [])
          .map(function renderLink(link) {
            return '<a href="' + escapeHtml(link.url) + '" target="_blank" rel="noopener noreferrer">' + escapeHtml(link.label) + "</a>";
          })
          .join("");

        return [
          '<li class="selected-publication">',
          '<div class="publication-meta">',
          "<span>" + escapeHtml(item.type || "Publication") + "</span>",
          "<span>" + escapeHtml(item.year || "") + "</span>",
          "</div>",
          '<div class="publication-body">',
          "<h3>" + escapeHtml(item.title) + "</h3>",
          '<p class="publication-authors">' + formatAuthors(item.authors || [], data.nameToHighlight || "") + "</p>",
          '<p class="publication-venue">' + escapeHtml(item.venue || "") + "</p>",
          links ? '<div class="publication-links">' + links + "</div>" : "",
          "</div>",
          "</li>",
        ].join("");
      })
      .join("");
  }

  function renderResearchStory(payload) {
    if (!researchRoot) {
      return;
    }

    const navRoot = researchRoot.querySelector("[data-research-nav]");
    const stageRoot = researchRoot.querySelector("[data-research-stage]");
    const items = Array.isArray(payload && payload.areas) ? payload.areas : [];

    if (!navRoot || !stageRoot || !items.length) {
      return;
    }

    function setActive(index) {
      const buttons = navRoot.querySelectorAll("button[data-index]");
      const panels = stageRoot.querySelectorAll("[data-index]");

      buttons.forEach(function updateButton(button) {
        const isActive = Number(button.getAttribute("data-index")) === index;
        button.classList.toggle("is-active", isActive);
        if (isActive) {
          button.setAttribute("aria-current", "true");
        } else {
          button.removeAttribute("aria-current");
        }
      });

      panels.forEach(function updatePanel(panel) {
        panel.classList.toggle("is-active", Number(panel.getAttribute("data-index")) === index);
      });
    }

    navRoot.innerHTML = items
      .map(function renderButton(item, index) {
        return [
          "<li>",
          '<button type="button" data-index="' + index + '"' + (index === 0 ? ' class="is-active" aria-current="true"' : "") + ">",
          '<span class="research-index">' + String(index + 1).padStart(2, "0") + "</span>",
          '<span class="research-label">',
          "<strong>" + escapeHtml(item.title) + "</strong>",
          "<span>Explore this line</span>",
          "</span>",
          "</button>",
          "</li>",
        ].join("");
      })
      .join("");

    stageRoot.innerHTML = items
      .map(function renderCard(item, index) {
        return [
          '<article class="research-card' + (index === 0 ? " is-active" : "") + '" data-index="' + index + '">',
          '<p class="publication-meta">0' + (index + 1) + "</p>",
          "<h3>" + escapeHtml(item.title) + "</h3>",
          "<p>" + escapeHtml(item.text) + "</p>",
          '<a class="text-link" href="/cv/">Read related experience</a>',
          "</article>",
        ].join("");
      })
      .join("");

    navRoot.addEventListener("click", function onNavClick(event) {
      const button = event.target.closest("button[data-index]");
      if (!button) {
        return;
      }
      setActive(Number(button.getAttribute("data-index")));
    });

    setActive(0);
  }

  fetch("/data/publications.json")
    .then(function parseResponse(response) {
      if (!response.ok) {
        throw new Error("Failed to load publications data");
      }
      return response.json();
    })
    .then(renderSelectedPublications)
    .catch(function onError() {
      if (selectedPublicationsRoot) {
        selectedPublicationsRoot.innerHTML = '<li class="empty-state">Unable to load publications.</li>';
      }
    });

  fetch("/data/research-story.json")
    .then(function parseResponse(response) {
      if (!response.ok) {
        throw new Error("Failed to load research story");
      }
      return response.json();
    })
    .then(renderResearchStory)
    .catch(function onError() {
      if (researchRoot) {
        const stageRoot = researchRoot.querySelector("[data-research-stage]");
        if (stageRoot) {
          stageRoot.innerHTML = '<p class="empty-state">Unable to load research story.</p>';
        }
      }
    });
})();
