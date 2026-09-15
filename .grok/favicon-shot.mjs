import { chromium } from "playwright";
import { readFileSync } from "node:fs";

const svg = readFileSync("/workspace/.grok/favicon.svg", "utf8");
const browser = await chromium.launch();
const jobs = [
  ["16", 16, 1],
  ["32", 32, 1],
  ["16z", 16, 8],
  ["32z", 32, 4],
];
for (const [name, size, dsf] of jobs) {
  const page = await browser.newPage({
    viewport: { width: size, height: size },
    deviceScaleFactor: dsf,
  });
  const marked = svg.replace("<svg ", `<svg width="${size}" height="${size}" `);
  await page.setContent(
    `<html><body style="margin:0;background:#070C14">${marked}</body></html>`,
  );
  await page.screenshot({ path: `/workspace/.grok/fav-final-${name}.png` });
  await page.close();
}
await browser.close();
