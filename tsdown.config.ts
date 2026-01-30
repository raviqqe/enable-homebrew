import { defineConfig } from "tsdown";

export default defineConfig({
  entry: ["src/index.ts"],
  bundle: true,
  minify: true,
  platform: "browser",
});
