import { defineConfig } from "tsdown";

export default defineConfig({
  format: "cjs",
  noExternal: ["@actions/*"],
  platform: "neutral",
});
