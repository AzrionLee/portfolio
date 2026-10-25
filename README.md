# Leslie Domingo — IT Student Portfolio

A complete monochrome static portfolio for Leslie Jhayne C. Domingo, a third-year BSIT student at Northeastern College. The site includes academic projects, education, skills, a professional-development timeline, 17 original certificate files, searchable/filterable/sortable previews, and a privacy-safe student résumé.

## Run locally

No installation or third-party JavaScript packages are required. Use a static HTTP server; do not double-click index.html because browser ES modules require HTTP.

Windows / macOS / Linux with Python:

```sh
python -m http.server 8000 --directory dist
```

Open http://localhost:8000. On systems using python3, substitute python3.

## Production validation

With Node.js installed:

```sh
npm run build
npm test
```

This is a buildless site. The build command validates the ready-to-host `dist/` directory; there is no compiler, package installation, or generated bundle required. Source files in `dist/` are also production files.

## Structure

- `dist/index.html`: semantic content, navigation, projects, learning timeline, résumé and contact sections.
- `dist/style.css`: monochrome design system, responsive layouts, focus states and reduced-motion styles.
- `dist/main.js`: certificate cards, native dialog, search, category filters, sorting, navigation.
- `dist/selection.js`: independent certificate filtering/sorting logic.
- `dist/certificates.js`: centralized dataset of all 17 certificates.
- `dist/assets/`: unchanged original PDFs/JPGs, optimized first-page previews, résumé and favicon.
- `scripts/verify.mjs`: production asset and functional data validation.
- `docs/`: content inventory, original catalog, assignment mapping, testing report and deployment guidance.
- `.openai/hosting.json`: Sites hosting identity. Not required on other static hosts.

## Updating

Edit biography/project copy in index.html. Add certificates to certificates.js with a unique ID, title, category, issuer, ISO date, evidence type, local original, preview and original Drive link. Place originals and optimized previews in assets/. Keep category counts derived from data. Add categories in main.js if necessary. Replace the résumé PDF under the same filename to update all download links.

No professional email or social profile is published. Add only an approved email with a `mailto:` link, or verified profile URLs. Do not add a form unless a tested submission service exists.

Certificate PDF previews use first-page WebP images for reliable mobile rendering. The dialog provides full-resolution original-file viewing, local download, and the verified Drive source link. Original certificate files are unmodified. Cisco records are course completions, Microsoft records are Learn achievements, and TESDA records are individual course completions (not NC II).

Original classroom graduate résumés, application/resignation letters, private telephone number, date of birth and unverified honors are not included. Project visuals are typographic title treatments, not screenshots of applications.
