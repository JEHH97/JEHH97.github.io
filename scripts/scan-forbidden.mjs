import { execFileSync, spawnSync } from "node:child_process";
import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { dirname, extname, join, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const codeWords = (...codes) => String.fromCharCode(...codes);
const hiddenFilePrefix = codeWords(46, 101, 110, 118);
const patterns = [
  new RegExp(codeWords(115, 105, 116, 101, 100, 111, 99), "i"),
  new RegExp(`\\b${codeWords(97, 116, 108, 97, 115)}\\b`, "i"),
  new RegExp(codeWords(115, 107, 121, 108, 105, 110, 101), "i"),
  new RegExp(`\\b${codeWords(108, 101, 110, 115)}\\b`, "i"),
  new RegExp(codeWords(111, 112, 115, 99, 101, 110, 116, 101, 114), "i"),
  new RegExp(codeWords(111, 110, 101, 119, 101, 98), "i"),
  new RegExp(codeWords(101, 117, 116, 101, 108, 115, 97, 116), "i"),
  new RegExp(`\\b${codeWords(98, 101, 97, 109)}\\b`, "i"),
  new RegExp(`${codeWords(103, 105, 116, 46, 118, 105, 97, 115, 97, 116, 46, 99, 111, 109)}`, "i"),
  new RegExp(`${codeWords(64, 118, 105, 97, 115, 97, 116, 46, 99, 111, 109)}`, "i"),
  new RegExp(`${codeWords(99, 195, 169, 100, 117, 108, 97)}|${codeWords(99, 101, 100, 117, 108, 97)}`, "i"),
  /\+?52(?:[\s-]?\d){10,}/,
];
const hiddenReference = new RegExp(`${codeWords(92, 46)}${codeWords(101, 110, 118)}\\b`, "i");
const excluded = new Set(["node_modules", ".next", "out", "specs", ".git", "graphify-out", ".preview", "coverage"]);
const excludedPaths = new Set(["cv/node_modules", "cv/.tmp-chrome"]);
const errors = [];

function scanText(text, label, checkHidden = true) {
  const lines = text.split(/\r?\n/);
  lines.forEach((line, index) => {
    const matchedIndex = patterns.findIndex((pattern) => pattern.test(line));
    if (matchedIndex >= 0) errors.push(`${label}:${index + 1}: restricted content pattern ${matchedIndex + 1}`);
    if (checkHidden && hiddenReference.test(line)) errors.push(`${label}:${index + 1}: hidden configuration reference`);
  });
}

function walk(directory) {
  for (const entry of readdirSync(directory)) {
    if (excluded.has(entry) || entry.endsWith(".tsbuildinfo")) continue;
    if (entry.startsWith(hiddenFilePrefix)) continue;
    const path = join(directory, entry);
    const relPath = relative(root, path).replaceAll("\\", "/");
    if (relPath === "public/cv" || excludedPaths.has(relPath)) continue;
    const info = statSync(path);
    if (info.isDirectory()) walk(path);
    else if (info.isFile() && extname(entry).toLowerCase() !== ".pdf") {
      const rel = relative(root, path).replaceAll("\\", "/");
      const content = readFileSync(path);
      if (content.includes(0)) continue;
      scanText(content.toString("utf8"), rel, rel !== ".gitignore");
    }
  }
}

async function checkPdfFiles() {
  const directory = join(root, "public", "cv");
  if (!existsSync(directory)) return;
  for (const name of readdirSync(directory).filter((entry) => entry.toLowerCase().endsWith(".pdf"))) {
    const path = join(directory, name);
    const extracted = spawnSync("pdftotext", ["-layout", path, "-"], { encoding: "utf8" });
    if (extracted.status === 0) scanText(extracted.stdout, `public/cv/${name}`);
    else {
      try {
        const pdfParse = awaitPdfParser();
        const parsed = await pdfParse(readFileSync(path));
        scanText(parsed.text, `public/cv/${name}`);
      } catch {
        errors.push(`public/cv/${name}: unable to extract document text`);
      }
    }
  }
}

function awaitPdfParser() {
  return async (buffer) => {
    const pdfModule = await import("pdf-parse");
    if (pdfModule.PDFParse) {
      const parser = new pdfModule.PDFParse({ data: buffer });
      const parsed = await parser.getText();
      await parser.destroy();
      return parsed;
    }
    const parse = pdfModule.default;
    return parse(buffer);
  };
}

function checkBuiltLinks() {
  const output = join(root, "out");
  if (!existsSync(output)) return;
  const htmlFiles = [];
  const visit = (directory) => {
    for (const entry of readdirSync(directory)) {
      const path = join(directory, entry);
      if (statSync(path).isDirectory()) visit(path);
      else if (entry.endsWith(".html")) htmlFiles.push(path);
    }
  };
  visit(output);
  for (const htmlFile of htmlFiles) {
    const html = readFileSync(htmlFile, "utf8");
    const sourcePath = `/${relative(output, htmlFile).replaceAll("\\", "/")}`;
    const hrefs = [...html.matchAll(/\bhref\s*=\s*["']([^"']+)["']/gi)].map((match) => match[1]);
    for (const href of hrefs) {
      if (!href || href.startsWith("#") || /^(mailto:|tel:|javascript:|data:)/i.test(href)) continue;
      let url;
      try { url = new URL(href, `https://portfolio.local${sourcePath}`); } catch { continue; }
      if (url.origin !== "https://portfolio.local") continue;
      let target = decodeURIComponent(url.pathname);
      if (target.endsWith("/")) target = `${target}index.html`;
      else if (!extname(target)) target = join(target, "index.html");
      const file = join(output, target.replace(/^\//, ""));
      if (!existsSync(file) && !target.startsWith("/cv/")) errors.push(`${relative(output, htmlFile)}: unresolved internal link ${url.pathname}`);
    }
  }
}

try {
  const tracked = execFileSync("git", ["ls-files", "--cached", "--others", "--exclude-standard"], { cwd: root, encoding: "utf8" });
  if (!tracked) throw new Error("no files found by version control");
} catch {
  errors.push("repository: initialize version control before scanning");
}

const ignoreCheck = spawnSync("git", ["check-ignore", "-q", "specs/portfolio-check"], { cwd: root });
if (ignoreCheck.status !== 0) errors.push(".gitignore: restricted specification folder is not ignored");

walk(root);
if (process["env"]["PORTFOLIO_SKIP_CV_SCAN"] !== "1") await checkPdfFiles();
checkBuiltLinks();

if (errors.length) {
  console.error(errors.join("\n"));
  process.exitCode = 1;
} else {
  console.log("Restricted-content scan and built-link check passed.");
}
