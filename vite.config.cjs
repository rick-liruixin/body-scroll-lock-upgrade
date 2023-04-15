import { defineConfig } from "vite";
import path from "path";
import dts from "vite-plugin-dts";
import banner from "vite-plugin-banner";
const { version, name, author } = require("./package.json");

const resolvePath = (str) => path.resolve(__dirname, str);
const outDir = "lib";

export default defineConfig({
  build: {
    outDir,
    minify: false,
    sourcemap: true,
    lib: {
      entry: resolvePath("./src/index.ts"),
      formats: ["es", "cjs"],
      fileName: (format) => (format === "es" ? `index.esm.js` : `index.js`),
    },
  },
  plugins: [
    banner({
      outDir,
      content: `/**\n * name: ${name}\n * version: v${version}\n * author: ${author}\n */`,
    }),
    dts({ copyDtsFiles: false, rollupTypes: true }),
  ],
});
