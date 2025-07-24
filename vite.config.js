import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/meuzapgestor/", // nome do repo do GitHub
  plugins: [react()],
});
