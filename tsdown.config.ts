import { defineConfig } from "tsdown";

export default defineConfig({
  deps: {
    alwaysBundle: ["**"],
  },
  platform: "node",
});
