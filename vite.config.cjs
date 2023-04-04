import { defineConfig } from "vite";
import path from "path";
import dts from "vite-plugin-dts";

const resolvePath = (str) => path.resolve(__dirname, str);

export default defineConfig({
  build: {
    outDir: "lib",
    minify: false,
    sourcemap: true,
    lib: {
      entry: resolvePath("./src/index.ts"),
      formats: ["es", "cjs"],
      fileName: (format) => (format === "es" ? `index.esm.js` : `index.js`),
    },
  },
  plugins: [dts({ copyDtsFiles: false, rollupTypes: true })],
});
