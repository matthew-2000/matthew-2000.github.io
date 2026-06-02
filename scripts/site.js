(function initSite() {
  var header = document.querySelector(".site-header");
  var navToggle = document.querySelector("[data-nav-toggle]");
  var mediaQuery = window.matchMedia("(max-width: 760px)");

  function syncHeader() {
    if (!header) {
      return;
    }
    header.classList.toggle("is-scrolled", window.scrollY > 12);
  }

  function closeNav() {
    document.body.setAttribute("data-nav-open", "false");
    if (navToggle) {
      navToggle.setAttribute("aria-expanded", "false");
      navToggle.setAttribute("aria-label", "Open navigation");
    }
  }

  function toggleNav() {
    var isOpen = document.body.getAttribute("data-nav-open") === "true";
    document.body.setAttribute("data-nav-open", String(!isOpen));
    if (navToggle) {
      navToggle.setAttribute("aria-expanded", String(!isOpen));
      navToggle.setAttribute("aria-label", !isOpen ? "Close navigation" : "Open navigation");
    }
  }

  function syncViewportState() {
    if (!mediaQuery.matches) {
      closeNav();
    }
  }

  function setupReveal() {
    var revealBlocks = document.querySelectorAll("[data-reveal]");
    if (!revealBlocks.length || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      revealBlocks.forEach(function showBlock(block) {
        block.classList.add("is-visible");
      });
      return;
    }

    var observer = new IntersectionObserver(
      function handleEntries(entries) {
        entries.forEach(function handleEntry(entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.18,
        rootMargin: "0px 0px -8% 0px",
      }
    );

    revealBlocks.forEach(function observeBlock(block) {
      var rect = block.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.92) {
        block.classList.add("is-visible");
        return;
      }
      observer.observe(block);
    });
  }

  if (navToggle) {
    navToggle.addEventListener("click", toggleNav);
  }

  document.addEventListener("click", function onDocumentClick(event) {
    if (event.target.closest(".site-nav a")) {
      closeNav();
    }
  });

  window.addEventListener("scroll", syncHeader, { passive: true });
  window.addEventListener("resize", syncViewportState);

  syncHeader();
  syncViewportState();
  setupReveal();
})();
