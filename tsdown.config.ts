import { defineConfig } from "tsdown";

export default defineConfig({
  format: "cjs",
  inlineOnly: false,
  noExternal: ["@actions/*"],
  platform: "neutral",
});
