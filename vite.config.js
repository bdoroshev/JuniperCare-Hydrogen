import { defineConfig } from "vite";
import hydrogen from "@shopify/hydrogen/plugin";
import okendo from "@okendo/shopify-hydrogen/plugin";

export default defineConfig({
  plugins: [hydrogen(), okendo()]
});