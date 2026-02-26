# Matteo Ercolino - Academic Website

Minimal multi-page academic website for a PhD student profile.

## Routes
- `/` home (academic profile)
- `/publications/` publication list with filtering and BibTeX copy
- `/cv/` print-optimized CV page with PDF download

## Data sources
- `data/publications.json`
- `data/cv.json`

## Stack
- Semantic HTML
- Vanilla CSS design system (`styles/main.css`)
- Minimal vanilla JavaScript (`scripts/*.js`)

## Motion + Interaction Features
- Home hero compaction on scroll (`scripts/hero-compact.js`)
- View Transition + fallback route transitions (`scripts/page-transitions.js`)
- Publications detailed list + BibTeX/abstract accordion (`scripts/publications.js`)

## Publications Search Indexing
- Publication filtering is built from `title`, `venue`, and `year` in `scripts/publications.js`.
- To update indexing behavior:
  - modify filtering logic in `applyFilter()` for matching behavior
- `/publications/` also accepts `?q=...` and filters against the same fields in `scripts/publications.js`.

## Runtime Config Flags
Use a global config object before app scripts load:

```html
<script>
  window.__SITE_CONFIG__ = {
    enableQuietGrain: false
  };
</script>
```

- `enableQuietGrain: true` enables the subtle static texture overlay.
