import { readdirSync, readFileSync } from "node:fs";
import path from "node:path";

const textExtensions = new Set([
  ".js",
  ".jsx",
  ".mjs",
  ".cjs",
  ".ts",
  ".tsx",
  ".css",
  ".html",
  ".json",
  ".md",
  ".yml",
  ".yaml",
]);

const utf8FatalDecoder = new TextDecoder("utf-8", { fatal: true });
const utf8Decoder = new TextDecoder("utf-8");

const shouldCheckAsText = (file) => textExtensions.has(path.extname(file).toLowerCase());
const shouldSkip = (file) =>
  file.startsWith("node_modules/") ||
  file.startsWith("dist/") ||
  file.startsWith(".git/") ||
  file.startsWith(".vite/") ||
  file.startsWith(".idea/") ||
  file.startsWith(".vscode/");
const shouldBlockUnicodeEscape = (file) =>
  file.startsWith("src/") || file === "index.html" || file === "vite.config.js";

const listFilesRecursively = (rootDir) => {
  const discovered = [];
  const walk = (relativeDir) => {
    const absoluteDir = path.join(rootDir, relativeDir);
    const entries = readdirSync(absoluteDir, { withFileTypes: true });
    for (const entry of entries) {
      const relativePath = path.posix.join(
        relativeDir.split(path.sep).join(path.posix.sep),
        entry.name,
      );
      if (entry.isDirectory()) {
        if (shouldSkip(relativePath + "/")) {
          continue;
        }
        walk(path.join(relativeDir, entry.name));
        continue;
      }
      discovered.push(relativePath);
    }
  };
  walk("");
  return discovered;
};

const trackedFiles = listFilesRecursively(process.cwd())
  .map((file) => file.replace(/^[\\/]+/, ""))
  .filter(Boolean);

const failures = [];

for (const file of trackedFiles) {
  if (shouldSkip(file) || !shouldCheckAsText(file)) {
    continue;
  }

  const buffer = readFileSync(file);
  const hasUtf8Bom =
    buffer.length >= 3 && buffer[0] === 0xef && buffer[1] === 0xbb && buffer[2] === 0xbf;

  if (hasUtf8Bom) {
    failures.push(`${file}: UTF-8 BOM is not allowed.`);
    continue;
  }

  let text = "";
  try {
    utf8FatalDecoder.decode(buffer);
    text = utf8Decoder.decode(buffer);
  } catch {
    failures.push(`${file}: invalid UTF-8 encoding.`);
    continue;
  }

  if (text.includes("\ufffd")) {
    failures.push(`${file}: found replacement character (possible mojibake).`);
  }

  if (shouldBlockUnicodeEscape(file) && /\\u[0-9a-fA-F]{4}/.test(text)) {
    failures.push(`${file}: found \\uXXXX escape in source text.`);
  }
}

if (failures.length > 0) {
  console.error("Encoding/content validation failed:");
  for (const item of failures) {
    console.error(`- ${item}`);
  }
  process.exit(1);
}

console.log(`Encoding/content validation passed (${trackedFiles.length} tracked files scanned).`);
