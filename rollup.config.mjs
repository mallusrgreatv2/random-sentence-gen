import esbuild from "rollup-plugin-esbuild";
import json from "@rollup/plugin-json";
/**
 * @type {import("rollup").RollupOptions}
 */
export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: "dist/index.mjs",
        format: "es",
      },
      {
        file: "dist/index.cjs",
        format: "cjs",
      },
    ],
    plugins: [json(), esbuild()],
  },
];
