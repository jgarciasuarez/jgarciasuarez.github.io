import { lstat, readFile, readdir } from "node:fs/promises";
import { join, relative, resolve } from "node:path";

const outputDirectory = resolve(process.cwd(), "out");
const maximumBytes = 12 * 1024 * 1024;
const canonicalOrigin = new URL(
  process.env.NEXT_PUBLIC_SITE_URL?.trim() ||
    "https://jgarciasuarez.github.io",
).origin;
const siteIndexingEnabled =
  process.env.SITE_INDEXING?.trim().toLowerCase() === "true";

const requiredFiles = [
  "index.html",
  "404.html",
  "research/index.html",
  "teaching/index.html",
  "ddcf/index.html",
  "robots.txt",
  "sitemap.xml",
  "opengraph-image.png",
  "Joaquin_Garcia-Suarez_CV_May_2026.pdf",
  "images/DDCF_collage_corrected.webp",
  "images/contact_across_scales_corrected.webp",
  "images/portfolio_waves.webp",
];

const routeCanonicals = new Map([
  ["index.html", `${canonicalOrigin}/`],
  ["research/index.html", `${canonicalOrigin}/research`],
  ["teaching/index.html", `${canonicalOrigin}/teaching`],
  ["ddcf/index.html", `${canonicalOrigin}/ddcf`],
]);

const forbiddenFiles = [
  "file.svg",
  "globe.svg",
  "next.svg",
  "vercel.svg",
  "window.svg",
  "og.png",
  "images/DDCF_collage_corrected.png",
  "images/contact_across_scales_corrected.png",
  "images/datasets.png",
  "images/portfolio_waves.png",
];

async function localReferenceExists(reference) {
  const pathname = decodeURIComponent(reference.split(/[?#]/, 1)[0]);
  if (!pathname || pathname === "/") {
    return true;
  }

  const relativePath = pathname.replace(/^\/+/, "");
  const candidates = relativePath.endsWith("/")
    ? [join(outputDirectory, relativePath, "index.html")]
    : [
        join(outputDirectory, relativePath),
        join(outputDirectory, relativePath, "index.html"),
        join(outputDirectory, `${relativePath}.html`),
      ];

  for (const candidate of candidates) {
    const details = await lstat(candidate).catch(() => null);
    if (details?.isFile()) {
      return true;
    }
  }

  return false;
}

async function inspectDirectory(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  let bytes = 0;
  let files = 0;
  let bundledFontFound = false;

  for (const entry of entries) {
    const filePath = join(directory, entry.name);
    const details = await lstat(filePath);

    if (details.isSymbolicLink()) {
      throw new Error(`Symbolic links are not allowed in the Pages artifact: ${relative(outputDirectory, filePath)}`);
    }

    if (details.isDirectory()) {
      const nested = await inspectDirectory(filePath);
      bytes += nested.bytes;
      files += nested.files;
      bundledFontFound ||= nested.bundledFontFound;
      continue;
    }

    bytes += details.size;
    files += 1;
    bundledFontFound ||= entry.name.endsWith(".woff2");
  }

  return { bytes, files, bundledFontFound };
}

for (const requiredFile of requiredFiles) {
  const details = await lstat(join(outputDirectory, requiredFile)).catch(() => null);
  if (!details?.isFile()) {
    throw new Error(`Required export file is missing: ${requiredFile}`);
  }
}

for (const forbiddenFile of forbiddenFiles) {
  const details = await lstat(join(outputDirectory, forbiddenFile)).catch(() => null);
  if (details) {
    throw new Error(`Unused or legacy asset leaked into the export: ${forbiddenFile}`);
  }
}

for (const [routeFile, canonicalUrl] of routeCanonicals) {
  const html = await readFile(join(outputDirectory, routeFile), "utf8");
  if (!html.includes(canonicalUrl)) {
    throw new Error(`Canonical URL ${canonicalUrl} is missing from ${routeFile}`);
  }
  if (siteIndexingEnabled && html.includes('content="noindex, nofollow"')) {
    throw new Error(`Indexable export contains noindex metadata in ${routeFile}`);
  }
  if (!siteIndexingEnabled && !html.includes('content="noindex, nofollow"')) {
    throw new Error(`Staging export is missing noindex metadata in ${routeFile}`);
  }
  if (html.includes("fonts.googleapis.com") || html.includes("fonts.gstatic.com")) {
    throw new Error(`External Google Fonts dependency found in ${routeFile}`);
  }

  const references = html.matchAll(/(?:href|src)="([^"]+)"/g);
  for (const [, reference] of references) {
    if (
      reference.startsWith("#") ||
      reference.startsWith("//") ||
      /^[a-z][a-z\d+.-]*:/i.test(reference)
    ) {
      continue;
    }
    if (!(await localReferenceExists(reference))) {
      throw new Error(`Broken local reference in ${routeFile}: ${reference}`);
    }
  }
}

const sitemap = await readFile(join(outputDirectory, "sitemap.xml"), "utf8");
for (const canonicalUrl of routeCanonicals.values()) {
  if (!sitemap.includes(canonicalUrl)) {
    throw new Error(`Sitemap is missing ${canonicalUrl}`);
  }
}

const robots = await readFile(join(outputDirectory, "robots.txt"), "utf8");
if (siteIndexingEnabled) {
  if (!robots.includes("Allow: /") || !robots.includes(`${canonicalOrigin}/sitemap.xml`)) {
    throw new Error("Indexable robots.txt does not allow crawling or reference the sitemap");
  }
} else if (!robots.includes("Disallow: /") || robots.includes("Sitemap:")) {
  throw new Error("Staging robots.txt must block crawling and omit the sitemap declaration");
}

const result = await inspectDirectory(outputDirectory);
if (!result.bundledFontFound) {
  throw new Error("The self-hosted Inter WOFF2 file is missing from the export");
}
if (result.bytes > maximumBytes) {
  throw new Error(
    `Static export is ${(result.bytes / 1024 / 1024).toFixed(2)} MiB; budget is ${(maximumBytes / 1024 / 1024).toFixed(0)} MiB`,
  );
}

console.log(
  `Static export validated for ${canonicalOrigin} (${siteIndexingEnabled ? "indexable" : "noindex"}): ${result.files} files, ${(result.bytes / 1024 / 1024).toFixed(2)} MiB`,
);
