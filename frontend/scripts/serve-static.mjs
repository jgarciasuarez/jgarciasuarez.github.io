import { createReadStream } from "node:fs";
import { access, lstat } from "node:fs/promises";
import { createServer } from "node:http";
import { extname, resolve, sep } from "node:path";

const outputDirectory = resolve(process.cwd(), "out");
const portArgument = process.argv.indexOf("--port");
const hostArgument = process.argv.indexOf("--host");
const requestedPort =
  portArgument >= 0 ? process.argv[portArgument + 1] : undefined;
const requestedHost =
  hostArgument >= 0 ? process.argv[hostArgument + 1] : undefined;
const port = Number.parseInt(
  requestedPort ?? process.env.STATIC_PORT ?? "4173",
  10,
);
const host = requestedHost ?? process.env.STATIC_HOST ?? "127.0.0.1";

const contentTypes = new Map([
  [".css", "text/css; charset=utf-8"],
  [".html", "text/html; charset=utf-8"],
  [".ico", "image/x-icon"],
  [".jpeg", "image/jpeg"],
  [".jpg", "image/jpeg"],
  [".js", "text/javascript; charset=utf-8"],
  [".json", "application/json; charset=utf-8"],
  [".map", "application/json; charset=utf-8"],
  [".pdf", "application/pdf"],
  [".png", "image/png"],
  [".svg", "image/svg+xml"],
  [".txt", "text/plain; charset=utf-8"],
  [".webp", "image/webp"],
  [".woff2", "font/woff2"],
  [".xml", "application/xml; charset=utf-8"],
]);

function isInsideOutput(filePath) {
  return filePath === outputDirectory || filePath.startsWith(`${outputDirectory}${sep}`);
}

async function resolveRequest(pathname) {
  const decodedPath = decodeURIComponent(pathname);
  const candidate = resolve(outputDirectory, `.${decodedPath}`);

  if (!isInsideOutput(candidate)) {
    return null;
  }

  try {
    const details = await lstat(candidate);
    if (details.isFile()) {
      return candidate;
    }
    if (details.isDirectory()) {
      const indexFile = resolve(candidate, "index.html");
      await access(indexFile);
      return indexFile;
    }
  } catch {
    const htmlCandidate = `${candidate}.html`;
    if (isInsideOutput(htmlCandidate)) {
      try {
        await access(htmlCandidate);
        return htmlCandidate;
      } catch {
        return null;
      }
    }
  }

  return null;
}

await access(outputDirectory).catch(() => {
  throw new Error("Static export not found. Run `npm run build` before `npm start`.");
});

const server = createServer(async (request, response) => {
  if (request.method !== "GET" && request.method !== "HEAD") {
    response.writeHead(405, { Allow: "GET, HEAD" });
    response.end("Method Not Allowed");
    return;
  }

  try {
    const requestUrl = new URL(request.url ?? "/", `http://${host}:${port}`);
    const requestedFile = await resolveRequest(requestUrl.pathname);
    const filePath = requestedFile ?? resolve(outputDirectory, "404.html");
    const statusCode = requestedFile ? 200 : 404;
    const extension = extname(filePath).toLowerCase();
    const immutableAsset = filePath.includes(`${sep}_next${sep}static${sep}`);

    response.writeHead(statusCode, {
      "Cache-Control": immutableAsset
        ? "public, max-age=31536000, immutable"
        : "no-cache",
      "Content-Type": contentTypes.get(extension) ?? "application/octet-stream",
    });

    if (request.method === "HEAD") {
      response.end();
      return;
    }

    createReadStream(filePath).pipe(response);
  } catch {
    response.writeHead(400, { "Content-Type": "text/plain; charset=utf-8" });
    response.end("Bad Request");
  }
});

server.listen(port, host, () => {
  console.log(`Static export available at http://${host}:${port}`);
});
