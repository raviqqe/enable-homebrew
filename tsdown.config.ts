import { defineConfig } from "tsdown";

export default defineConfig({
  inlineOnly: false,
  noExternal: ["@actions/*"],
  platform: "neutral",
});
