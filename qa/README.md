# QA Scripts

## Static validation

Run from the repo root:

```bash
python3 qa/static_validate.py
```

This checks HTML structure, JSON-LD, sitemap XML, JSON files, alt text, iframe titles, external link rel attributes, and local asset references.

## Browser screenshot evidence

Requires Playwright and Chromium on a developer machine:

```bash
npm i -D playwright
npx playwright install chromium
python3 -m http.server 8080
node qa/playwright_capture.mjs http://127.0.0.1:8080 qa-screenshots
```

Expected output:

- `responsive-desktop.png`
- `responsive-tablet.png`
- `responsive-mobile.png`
- `mobile-menu-before.png`
- `mobile-menu-after.png`
- `faq-before.png`
- `faq-after.png`
- `form-empty.png`
- `form-filled.png`
- `test-results.json`

These files should be attached to Reality Checker / Evidence Collector follow-up reports.
