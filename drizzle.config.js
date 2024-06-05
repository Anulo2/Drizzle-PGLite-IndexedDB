import { defineConfig } from "drizzle-kit";

export default defineConfig({
    schema: "./src/drizzle/schema.js",
    out: "./src/drizzle/migrations",
    dialect: "postgresql",
});