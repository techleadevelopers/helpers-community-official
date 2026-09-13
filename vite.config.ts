import path from "path";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@assets": path.resolve(__dirname, "src/assets"),
    },
    dedupe: ["react", "react-dom"],
  },

  server: {
    host: "localhost",
    port: 5173,
    strictPort: true,
  },

  preview: {
    host: "localhost",
    port: 4173,
  },

  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
});