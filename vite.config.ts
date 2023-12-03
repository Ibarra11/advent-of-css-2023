import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";
import path from "path";

console.log(path.resolve(process.cwd(), "src/assets/icons"));

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    createSvgIconsPlugin({
      // Specify the icon folder to be cached
      iconDirs: [path.resolve(process.cwd(), "src/assets/icons")],
      svgoOptions: {
        plugins: [
          {
            name: "removeAttrs",
            params: { attrs: ["fill", "fill-rule", "color-rule", "clip-rule"] },
          },
          {
            name: "addAttributesToSVGElement",
            params: { attribute: { fill: "currentColor" } },
          },
        ],
      },
      // Specify symbolId format
      symbolId: "icon-[name]",
    }),
  ],
});
