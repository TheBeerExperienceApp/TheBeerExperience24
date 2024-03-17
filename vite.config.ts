import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/TheBeerExperience24/",
  plugins: [vue()],
  assetsInclude: ["**/*.jpg", "**/*.JPG"],
  optimizeDeps: {
    include: ["vuetify"],
  },
});
