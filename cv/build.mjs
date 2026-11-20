// Renders src/resume.es.html and src/resume.en.html to A4 PDFs with Puppeteer.
import { existsSync, mkdirSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import puppeteer from "puppeteer";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = resolve(here, "..", "public", "cv");

const jobs = [
  { html: resolve(here, "src", "resume.es.html"), pdf: resolve(outDir, "JEHH_FullStack_ES.pdf") },
  { html: resolve(here, "src", "resume.en.html"), pdf: resolve(outDir, "JEHH_FullStack_EN.pdf") },
];

mkdirSync(outDir, { recursive: true });

const browser = await puppeteer.launch({
  headless: true,
  args: ["--no-sandbox", "--disable-setuid-sandbox"],
});

try {
  for (const job of jobs) {
    if (!existsSync(job.html)) throw new Error(`Missing source: ${job.html}`);
    const page = await browser.newPage();
    await page.goto(pathToFileURL(job.html).href, { waitUntil: "networkidle0" });
    await page.emulateMediaType("print");
    await page.pdf({
      path: job.pdf,
      format: "A4",
      printBackground: true,
      preferCSSPageSize: true,
      margin: { top: 0, right: 0, bottom: 0, left: 0 },
    });
    await page.close();
    console.log(`PDF written: ${job.pdf}`);
  }
} finally {
  await browser.close();
}
