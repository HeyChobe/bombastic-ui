import babel from "rollup-plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import external from "rollup-plugin-peer-deps-external";
import { terser } from "rollup-plugin-terser";
import commonjs from "@rollup/plugin-commonjs";
import postCSS from "rollup-plugin-postcss";
import typescript from "rollup-plugin-typescript2";

export default [
  {
    input: "./src/index.ts",
    output: [
      {
        file: "dist/index.js",
        format: "cjs",
      },
      {
        file: "dist/index.es.js",
        format: "es",
        exports: "named",
      },
    ],
    plugins: [
      babel({
        exclude: "node_modules/**",
        presets: [
          "@babel/preset-react",
          "@babel/preset-typescript",
          "@babel/preset-env",
        ],
      }),
      external(),
      resolve(),
      commonjs(),
      typescript({
        typescript: require("typescript"),
      }),
      postCSS({
        plugins: [require("autoprefixer")],
      }),
      terser(),
    ],
  },
];
