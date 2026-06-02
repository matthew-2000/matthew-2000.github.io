(function initPublicationsPage() {
  if (document.body.getAttribute("data-page") !== "publications") {
    return;
  }

  const main = document.querySelector("main[data-publications-source]");
  const typeFilter = document.getElementById("type-filter");
  const searchFilter = document.getElementById("search-filter");
  const listRoot = document.getElementById("publication-list");
  const resultsRoot = document.getElementById("publication-results");

  if (!main || !typeFilter || !searchFilter || !listRoot || !resultsRoot) {
    return;
  }

  const source = main.getAttribute("data-publications-source");
  const currentUrl = new URL(window.location.href);
  let allItems = [];
  let highlightedName = "";

  searchFilter.value = (currentUrl.searchParams.get("q") || "").trim();

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function formatAuthors(authors) {
    return (authors || [])
      .map(function mapAuthor(author) {
        if (author.trim().toLowerCase() === highlightedName.trim().toLowerCase()) {
          return "<strong>" + escapeHtml(author) + "</strong>";
        }
        return escapeHtml(author);
      })
      .join(", ");
  }

  function updateUrl(query) {
    if (query) {
      currentUrl.searchParams.set("q", query);
    } else {
      currentUrl.searchParams.delete("q");
    }
    window.history.replaceState({}, "", currentUrl);
  }

  function render(items) {
    resultsRoot.textContent = items.length + " result" + (items.length === 1 ? "" : "s");

    if (!items.length) {
      listRoot.innerHTML = '<li class="empty-state">No publications match the current filter.</li>';
      return;
    }

    listRoot.innerHTML = items
      .map(function renderPublication(item, index) {
        const detailId = "publication-detail-" + index;
        const links = (item.links || [])
          .map(function renderLink(link) {
            return '<a href="' + escapeHtml(link.url) + '" target="_blank" rel="noopener noreferrer">' + escapeHtml(link.label) + "</a>";
          })
          .join("");

        const abstractBlock =
          typeof item.abstract === "string" && item.abstract.trim()
            ? "<p>" + escapeHtml(item.abstract) + "</p>"
            : "";

        const bibtexBlock =
          typeof item.bibtex === "string" && item.bibtex.trim()
            ? [
                '<div class="detail-row">',
                '<button class="detail-copy" type="button" data-copy="' + detailId + '-bibtex">Copy BibTeX</button>',
                "</div>",
                '<pre class="detail-pre" id="' + detailId + '-bibtex">' + escapeHtml(item.bibtex) + "</pre>",
              ].join("")
            : "";

        const hasDetails = abstractBlock || bibtexBlock;

        return [
          '<li class="publication-record">',
          '<div class="publication-record-index">',
          "<strong>" + String(index + 1).padStart(2, "0") + "</strong>",
          "<span>" + escapeHtml(item.year || "") + "</span>",
          "</div>",
          '<div class="publication-record-body">',
          "<h2>" + escapeHtml(item.title) + "</h2>",
          '<p class="publication-authors">' + formatAuthors(item.authors || []) + "</p>",
          '<p class="publication-venue">' + escapeHtml(item.venue || "") + " · " + escapeHtml(item.type || "") + "</p>",
          '<div class="detail-row">',
          links ? '<div class="publication-links">' + links + "</div>" : "",
          hasDetails
            ? [
                '<button class="detail-toggle" type="button" aria-expanded="false" aria-controls="' + detailId + '">',
                '<svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M8 1v14M1 8h14" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/></svg>',
                "Details",
                "</button>",
              ].join("")
            : "",
          "</div>",
          hasDetails
            ? '<div class="detail-panel" id="' + detailId + '" hidden>' + abstractBlock + bibtexBlock + "</div>"
            : "",
          "</div>",
          "</li>",
        ].join("");
      })
      .join("");
  }

  function applyFilters() {
    const selectedType = typeFilter.value;
    const query = searchFilter.value.trim().toLowerCase();

    updateUrl(searchFilter.value.trim());

    const filtered = allItems.filter(function filterItem(item) {
      const typeMatches = selectedType === "All" || item.type === selectedType;
      if (!typeMatches) {
        return false;
      }

      if (!query) {
        return true;
      }

      const haystack = [item.title, item.venue, item.year]
        .map(function normalize(part) {
          return String(part || "").toLowerCase();
        })
        .join(" ");

      return haystack.indexOf(query) !== -1;
    });

    render(filtered);
  }

  function copyText(text) {
    if (navigator.clipboard && window.isSecureContext) {
      return navigator.clipboard.writeText(text);
    }

    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.setAttribute("readonly", "readonly");
    textarea.style.position = "absolute";
    textarea.style.left = "-9999px";
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
    return Promise.resolve();
  }

  listRoot.addEventListener("click", function onListClick(event) {
    const toggle = event.target.closest(".detail-toggle");
    if (toggle) {
      const panelId = toggle.getAttribute("aria-controls");
      const panel = panelId ? document.getElementById(panelId) : null;
      if (!panel) {
        return;
      }

      const isExpanded = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!isExpanded));
      panel.hidden = isExpanded;
      return;
    }

    const copyButton = event.target.closest("[data-copy]");
    if (!copyButton) {
      return;
    }

    const targetId = copyButton.getAttribute("data-copy");
    const target = targetId ? document.getElementById(targetId) : null;
    if (!target) {
      return;
    }

    const originalText = copyButton.textContent;
    copyText(target.textContent || "").then(function onCopied() {
      copyButton.textContent = "Copied";
      window.setTimeout(function restoreLabel() {
        copyButton.textContent = originalText;
      }, 1200);
    });
  });

  typeFilter.addEventListener("change", applyFilters);
  searchFilter.addEventListener("input", applyFilters);

  fetch(source)
    .then(function parseResponse(response) {
      if (!response.ok) {
        throw new Error("Failed to load publication data");
      }
      return response.json();
    })
    .then(function hydrate(data) {
      highlightedName = data.nameToHighlight || "";
      allItems = (data.publications || []).slice().sort(function byYearDesc(a, b) {
        return Number(b.year || 0) - Number(a.year || 0);
      });
      applyFilters();
    })
    .catch(function onError() {
      resultsRoot.textContent = "";
      listRoot.innerHTML = '<li class="empty-state">Unable to load publication data.</li>';
    });
})();
