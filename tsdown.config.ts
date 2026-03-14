import { defineConfig } from "tsdown";

export default defineConfig({
  deps: {
    alwaysBundle: ["@actions/*"],
  },
  platform: "node",
});
