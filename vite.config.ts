import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { loadEnv } from 'vite'

// https://vitejs.dev/config/
export default ({ mode }) => {
  const env = loadEnv(mode, process.cwd())

  return defineConfig({
    base: "/TheBeerExperience24/",
    plugins: [vue()],
    assetsInclude: ["**/*.jpg", "**/*.JPG"],
    define: {
      "process.env": env,
    },
  })
}