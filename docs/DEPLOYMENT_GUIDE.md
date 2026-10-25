# Deployment

## Any static host

Publish the contents of `dist/` as the site root. Do not upload only index.html; preserve the assets and JavaScript files beside it. No backend, API keys, database or environment variables are required.

## Vercel configuration

Import this project into a Git repository and connect the repository in your Vercel account. Use the generic static/Other framework setting, no dependency install command, `npm run build` as the validation/build command, and `dist` as the output directory. If a host does not support build commands, upload `dist/` directly instead. Host interface labels may differ; these are the project's configuration requirements.

After deployment, open the resulting URL in a signed-out browser. Verify the title, mobile layout, all category counts (2/5/4/4/2), search and sorting, certificate previews and original-file links, and résumé download. A successful owner-only Sites deployment is not a public submission link. Public access must be enabled and verified before submitting to the professor.

## Accessibility and maintenance

Keep PDF links alongside preview images. Preserve native buttons, links, details and dialog elements. Respect reduced motion. Use an HTTP server locally because ES modules will not work consistently with file:// URLs. Original certificates remain readable independently of JavaScript via their local asset paths and the Drive collection fallback.
