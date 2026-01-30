import { defineConfig } from "tsdown";

export default defineConfig({
  noExternal: ["@actions/*"],
  platform: "neutral",
});
