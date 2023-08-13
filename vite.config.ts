import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      "@/components": "/src/components",
      "@/const": "/src/const",
      "@/json": "/src/JSON",
      socket: "/src/Service/socketService",
      peer: "/src/Service/peerService",
      "@/hooks": "/src/hooks",
      "@/service": "/src/Service",
    },
  },
});
