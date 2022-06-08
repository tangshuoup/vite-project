/*
 * @Descripttion:
 * @version:
 * @Author: tangshuo
 * @Date: 2022-06-08 10:06:17
 * @LastEditors: tangshuo
 * @LastEditTime: 2022-06-08 11:18:33
 */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import autoprefixer from "autoprefixer";
import viteEslint from "vite-plugin-eslint";
import viteStylelint from "@amatlash/vite-plugin-stylelint";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteEslint(),
    viteStylelint({
      exclude: /node_modules/,
    }),
  ],
  css: {
    postcss: {
      plugins: [
        autoprefixer({
          overrideBrowserslist: ["Chrome > 40", "ff > 31", "ie 10"],
        }),
      ],
    },
  },
  server: {
    port: 3001,
  },
});
