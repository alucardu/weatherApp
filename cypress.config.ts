import { defineConfig } from "cypress";

export default defineConfig({
  viewportWidth: 1280,
  e2e: {
    testIsolation: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
