import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import envCompatible from "vite-plugin-env-compatible"
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),envCompatible()],
  build: {
    commonjsOptions: {
      transformMixedEsModules: true
    }
  },
  envPrefix: "REACT_APP_",
  resolve: {
    alias: {
      stream: "stream-browserify",
      os: "os-browserify/browser",
      util: "util",
      process: "process/browser",
      buffer: "buffer",
    },
  },
});
