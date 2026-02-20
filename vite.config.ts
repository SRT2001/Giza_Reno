import { defineConfig, Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import fs from "fs";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    fs: {
      allow: ["./client", "./shared", "./public"],
      deny: [".env", ".env.*", "*.{crt,pem}", "**/.git/**", "server/**"],
    },
  },
  build: {
    outDir: "dist/spa",
  },
  plugins: [react(), expressPlugin(), adminStaticPlugin()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./client"),
      "@shared": path.resolve(__dirname, "./shared"),
    },
  },
}));

function expressPlugin(): Plugin {
  return {
    name: "express-plugin",
    apply: "serve", // Only apply during development (serve mode)
    async configureServer(server) {
      // Dynamically import to avoid loading gray-matter at config time
      const { createServer } = await import("./server");
      const app = createServer();

      // Add Express app as middleware to Vite dev server
      server.middlewares.use(app);
    },
  };
}

// Plugin to serve static admin files and bypass the SPA fallback
function adminStaticPlugin(): Plugin {
  return {
    name: "admin-static-plugin",
    apply: "serve",
    configureServer(server) {
      // This runs before the built-in middlewares
      server.middlewares.use((req, res, next) => {
        const url = req.url || "";
        
        // Handle admin routes - serve the static HTML directly
        if (url === "/admin" || url === "/admin/" || url === "/admin/index.html") {
          const adminPath = path.resolve(__dirname, "public/admin/index.html");
          
          if (fs.existsSync(adminPath)) {
            res.setHeader("Content-Type", "text/html");
            res.end(fs.readFileSync(adminPath, "utf-8"));
            return;
          }
        }
        
        // Handle admin config.yml
        if (url === "/admin/config.yml") {
          const configPath = path.resolve(__dirname, "public/admin/config.yml");
          
          if (fs.existsSync(configPath)) {
            res.setHeader("Content-Type", "text/yaml");
            res.end(fs.readFileSync(configPath, "utf-8"));
            return;
          }
        }
        
        next();
      });
    },
  };
}
