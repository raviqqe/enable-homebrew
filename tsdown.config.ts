import { defineConfig } from "tsdown";

export default defineConfig({
  entry: ["src/index.ts"],
  noExternal: ["@actions/*"],
  platform: "browser",
  skipNodeModulesBundle: false,
});
