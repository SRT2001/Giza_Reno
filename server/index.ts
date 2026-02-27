import "dotenv/config";
import express from "express";
import cors from "cors";
import { handleDemo } from "./routes/demo";
import { getProjects, getTestimonials, getServices, getSettings, getProjectDetails, getProjectDetailBySlug } from "./routes/content";

export function createServer() {
  const app = express();

  // Middleware
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Example API routes
  app.get("/api/ping", (_req, res) => {
    const ping = process.env.PING_MESSAGE ?? "ping";
    res.json({ message: ping });
  });

  app.get("/api/demo", handleDemo);

  // Content API routes (reads from CMS content files)
  app.get("/api/content/projects", getProjects);
  app.get("/api/content/testimonials", getTestimonials);
  app.get("/api/content/services", getServices);
  app.get("/api/content/settings", getSettings);
  
  // Project details API routes
  app.get("/api/content/project-details", getProjectDetails);
  app.get("/api/content/project-details/:slug", getProjectDetailBySlug);

  return app;
}
