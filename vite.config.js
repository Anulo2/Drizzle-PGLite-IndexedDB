import path from "node:path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
	base: "./",

	build: {
		outDir: "dist",
	},

	plugins: [react()],
	server: {
		host: true,
		watch: {
			usePolling: true,
		},
	},
	optimizeDeps: {
		exclude: ["@electric-sql/pglite"],
	},
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
		},
	},
});
