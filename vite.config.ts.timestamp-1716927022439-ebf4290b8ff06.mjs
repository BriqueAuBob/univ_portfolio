// vite.config.ts
import { defineConfig } from "file:///Users/brandon/Desktop/Projets/Cours/Portfolio/portfolio-univ/node_modules/vite/dist/node/index.js";
import { getDirname } from "file:///Users/brandon/Desktop/Projets/Cours/Portfolio/portfolio-univ/node_modules/@adonisjs/core/build/src/helpers/main.js";
import inertia from "file:///Users/brandon/Desktop/Projets/Cours/Portfolio/portfolio-univ/node_modules/@adonisjs/inertia/build/src/plugins/vite.js";
import vue from "file:///Users/brandon/Desktop/Projets/Cours/Portfolio/portfolio-univ/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import adonisjs from "file:///Users/brandon/Desktop/Projets/Cours/Portfolio/portfolio-univ/node_modules/@adonisjs/vite/build/src/client/main.js";
var __vite_injected_original_import_meta_url = "file:///Users/brandon/Desktop/Projets/Cours/Portfolio/portfolio-univ/vite.config.ts";
var vite_config_default = defineConfig({
  plugins: [
    inertia({ ssr: { enabled: true, entrypoint: "inertia/app/ssr.ts" } }),
    vue(),
    adonisjs({
      entrypoints: ["inertia/app/app.ts"],
      reload: ["resources/views/**/*.edge"]
    })
  ],
  /**
   * Define aliases for importing modules from
   * your frontend code
   */
  resolve: {
    alias: {
      "~/": `${getDirname(__vite_injected_original_import_meta_url)}/inertia/`
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvYnJhbmRvbi9EZXNrdG9wL1Byb2pldHMvQ291cnMvUG9ydGZvbGlvL3BvcnRmb2xpby11bml2XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvYnJhbmRvbi9EZXNrdG9wL1Byb2pldHMvQ291cnMvUG9ydGZvbGlvL3BvcnRmb2xpby11bml2L3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy9icmFuZG9uL0Rlc2t0b3AvUHJvamV0cy9Db3Vycy9Qb3J0Zm9saW8vcG9ydGZvbGlvLXVuaXYvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcbmltcG9ydCB7IGdldERpcm5hbWUgfSBmcm9tICdAYWRvbmlzanMvY29yZS9oZWxwZXJzJztcbmltcG9ydCBpbmVydGlhIGZyb20gJ0BhZG9uaXNqcy9pbmVydGlhL2NsaWVudCc7XG5pbXBvcnQgdnVlIGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZSc7XG5pbXBvcnQgYWRvbmlzanMgZnJvbSAnQGFkb25pc2pzL3ZpdGUvY2xpZW50JztcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW1xuICAgIGluZXJ0aWEoeyBzc3I6IHsgZW5hYmxlZDogdHJ1ZSwgZW50cnlwb2ludDogJ2luZXJ0aWEvYXBwL3Nzci50cycgfSB9KSxcbiAgICB2dWUoKSxcbiAgICBhZG9uaXNqcyh7XG4gICAgICBlbnRyeXBvaW50czogWydpbmVydGlhL2FwcC9hcHAudHMnXSxcbiAgICAgIHJlbG9hZDogWydyZXNvdXJjZXMvdmlld3MvKiovKi5lZGdlJ10sXG4gICAgfSksXG4gIF0sXG5cbiAgLyoqXG4gICAqIERlZmluZSBhbGlhc2VzIGZvciBpbXBvcnRpbmcgbW9kdWxlcyBmcm9tXG4gICAqIHlvdXIgZnJvbnRlbmQgY29kZVxuICAgKi9cbiAgcmVzb2x2ZToge1xuICAgIGFsaWFzOiB7XG4gICAgICAnfi8nOiBgJHtnZXREaXJuYW1lKGltcG9ydC5tZXRhLnVybCl9L2luZXJ0aWEvYCxcbiAgICB9LFxuICB9LFxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQXlXLFNBQVMsb0JBQW9CO0FBQ3RZLFNBQVMsa0JBQWtCO0FBQzNCLE9BQU8sYUFBYTtBQUNwQixPQUFPLFNBQVM7QUFDaEIsT0FBTyxjQUFjO0FBSjZNLElBQU0sMkNBQTJDO0FBTW5SLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQSxJQUNQLFFBQVEsRUFBRSxLQUFLLEVBQUUsU0FBUyxNQUFNLFlBQVkscUJBQXFCLEVBQUUsQ0FBQztBQUFBLElBQ3BFLElBQUk7QUFBQSxJQUNKLFNBQVM7QUFBQSxNQUNQLGFBQWEsQ0FBQyxvQkFBb0I7QUFBQSxNQUNsQyxRQUFRLENBQUMsMkJBQTJCO0FBQUEsSUFDdEMsQ0FBQztBQUFBLEVBQ0g7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBTUEsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsTUFBTSxHQUFHLFdBQVcsd0NBQWUsQ0FBQztBQUFBLElBQ3RDO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
