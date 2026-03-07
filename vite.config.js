import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

function resolvePagesBase() {
  const repoSlug = process.env.GITHUB_REPOSITORY?.split("/")[1];
  const overrideBase = process.env.VITE_BASE_PATH;

  if (overrideBase) {
    return overrideBase;
  }

  if (repoSlug?.endsWith(".github.io")) {
    return "/";
  }

  if (repoSlug) {
    return `/${repoSlug}/`;
  }

  return "/portfolio/";
}

export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === "serve" ? "/" : resolvePagesBase()
}));
