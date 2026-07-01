#!/usr/bin/env node
/**
 * Optional browser evidence capture for Dusty's site.
 *
 * Setup:
 *   npm i -D playwright
 *   npx playwright install chromium
 *
 * Run while local server is active:
 *   python3 -m http.server 8080
 *   node qa/playwright_capture.mjs http://127.0.0.1:8080 qa-screenshots
 */
import fs from 'node:fs/promises';
import path from 'node:path';

const baseUrl = process.argv[2] || 'http://127.0.0.1:8080';
const outDir = process.argv[3] || 'qa-screenshots';

let chromium;
try {
  ({ chromium } = await import('playwright'));
} catch (err) {
  console.error('Playwright is not installed. Run: npm i -D playwright && npx playwright install chromium');
  process.exit(2);
}

await fs.mkdir(outDir, { recursive: true });
const browser = await chromium.launch();
const results = [];

const devices = [
  ['desktop', { width: 1440, height: 1100 }],
  ['tablet', { width: 768, height: 1024 }],
  ['mobile', { width: 390, height: 844 }],
];

for (const [name, viewport] of devices) {
  const page = await browser.newPage({ viewport });
  const start = Date.now();
  await page.goto(baseUrl, { waitUntil: 'networkidle' });
  results.push({ name, path: '/', status: 'loaded', ms: Date.now() - start, viewport });
  await page.screenshot({ path: path.join(outDir, `responsive-${name}.png`), fullPage: true });
  await page.close();
}

const mobile = await browser.newPage({ viewport: { width: 390, height: 844 } });
await mobile.goto(baseUrl, { waitUntil: 'networkidle' });
await mobile.screenshot({ path: path.join(outDir, 'mobile-menu-before.png'), fullPage: false });
await mobile.click('#menuBtn');
await mobile.screenshot({ path: path.join(outDir, 'mobile-menu-after.png'), fullPage: false });
results.push({ name: 'mobile-menu', status: 'tested' });
await mobile.close();

const desktop = await browser.newPage({ viewport: { width: 1440, height: 1100 } });
await desktop.goto(baseUrl, { waitUntil: 'networkidle' });
await desktop.locator('.faq-q').first().scrollIntoViewIfNeeded();
await desktop.screenshot({ path: path.join(outDir, 'faq-before.png'), fullPage: false });
await desktop.locator('.faq-q').nth(1).click();
await desktop.screenshot({ path: path.join(outDir, 'faq-after.png'), fullPage: false });
await desktop.locator('#serviceForm').scrollIntoViewIfNeeded();
await desktop.screenshot({ path: path.join(outDir, 'form-empty.png'), fullPage: false });
await desktop.fill('#name', 'QA Rider');
await desktop.fill('#phone', '(714) 555-1212');
await desktop.fill('#bike', '2018 Honda CBR500R');
await desktop.selectOption('#timeline', 'this-week');
await desktop.selectOption('#service', 'inspection');
await desktop.fill('#message', 'QA test only.');
await desktop.screenshot({ path: path.join(outDir, 'form-filled.png'), fullPage: false });
results.push({ name: 'faq-and-form', status: 'tested' });
await desktop.close();

await fs.writeFile(path.join(outDir, 'test-results.json'), JSON.stringify({ baseUrl, generatedAt: new Date().toISOString(), results }, null, 2));
await browser.close();
console.log(`Evidence captured in ${outDir}`);
