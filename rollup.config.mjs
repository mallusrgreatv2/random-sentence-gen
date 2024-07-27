// import { eslint } from "rollup-plugin-eslint";
import esbuild from "rollup-plugin-esbuild";
import json from "@rollup/plugin-json";
import dts from "rollup-plugin-dts";
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
  {
    input: "src/index.ts",
    output: {
      file: "dist/index.d.ts",
      format: "es",
    },
    plugins: [dts()],
  },
];
