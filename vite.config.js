import { defineConfig } from "vite";
import React from "@vitejs/plugin-react";


export default defineConfig({
    plugins: [React()],
    root: './src',
    build: {
        outDir: '../dist',
    },
});