# Testing report — October 23, 2026

## Passed

- Production validation (`npm run build`) and JavaScript syntax check.
- Exactly 17 unique certificate records; category counts 2/5/4/4/2.
- Automated combined category/search filtering, empty search, newest/oldest/alphabetical sorting.
- Browser interaction: Microsoft + Azure returns one record; a nonexistent query produces the empty state; oldest starts with the July 8 webinar; alphabetical starts with Agentic AI.
- Certificate dialog opens with original preview and correct source links. Escape closes it and restores focus. Close button also works. Mobile dialog fits its container without horizontal overflow.
- Mobile menu toggles and closes after selecting a destination.
- Responsive browser iframe viewport checks at 320, 375, 430, 768, 1024, 1440, 1920 CSS pixels: document scroll width equals client width at each size (browser scrollbar consumes 15 pixels). Desktop hero and mobile gallery visually reviewed.
- All referenced local production files exist; all internal anchor targets exist. Direct executor HTTP sweep could not connect to the supervisor port; browser preview asset loading was checked instead.
- All 13 original PDFs parsed successfully; all four original JPEGs decoded. Generated optimized previews are present for every certificate.
- Résumé PDF: one page, selectable text, factual current-student wording, embedded font, visually rendered and inspected; working relative link with download attribute.
- Native dialog semantics, named search/sort/menu controls, image alt text, semantic headings, focus styles and reduced-motion CSS reviewed.

## Verification limits

No Lighthouse score is claimed. No physical iOS/Android device or comprehensive assistive-technology audit was run. Responsive QA used actual nested browser viewports, not device emulation. Browser log inspection showed extension metadata errors unrelated to application source; no portfolio JavaScript error was observed during the tested flows.

The preview opens a generated first-page image of the original PDF. Full original PDF files are available via links and downloads; viewer behavior depends on the browser. Original Drive file identities were verified through the connector; anonymous Drive access was not tested because the site hosts originals locally.

No approved public email/social profiles and no authentic application screenshots are included. These are content omissions, not dead links or simulated integrations. Deployment outcome is recorded separately.
