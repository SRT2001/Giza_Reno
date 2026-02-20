import { Request, Response } from "express";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

const CONTENT_DIR = path.resolve(process.cwd(), "content");

// Helper to read all markdown files from a collection folder
function readCollection(collectionName: string) {
  const collectionPath = path.join(CONTENT_DIR, collectionName);
  
  if (!fs.existsSync(collectionPath)) {
    return [];
  }

  const files = fs.readdirSync(collectionPath).filter(file => 
    file.endsWith(".md") || file.endsWith(".yml") || file.endsWith(".yaml")
  );

  return files.map(file => {
    const filePath = path.join(collectionPath, file);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(fileContent);
    
    return {
      slug: file.replace(/\.(md|yml|yaml)$/, ""),
      ...data,
      body: content,
    };
  });
}

// Get all projects
export function getProjects(_req: Request, res: Response) {
  try {
    const projects = readCollection("projects");
    res.json(projects);
  } catch (error) {
    console.error("Error reading projects:", error);
    res.status(500).json({ error: "Failed to read projects" });
  }
}

// Get all testimonials
export function getTestimonials(_req: Request, res: Response) {
  try {
    const testimonials = readCollection("testimonials");
    res.json(testimonials);
  } catch (error) {
    console.error("Error reading testimonials:", error);
    res.status(500).json({ error: "Failed to read testimonials" });
  }
}

// Get all services
export function getServices(_req: Request, res: Response) {
  try {
    const services = readCollection("services");
    res.json(services);
  } catch (error) {
    console.error("Error reading services:", error);
    res.status(500).json({ error: "Failed to read services" });
  }
}

// Get site settings
export function getSettings(_req: Request, res: Response) {
  try {
    const settingsPath = path.join(CONTENT_DIR, "settings", "general.yml");
    
    if (!fs.existsSync(settingsPath)) {
      return res.json({});
    }

    const fileContent = fs.readFileSync(settingsPath, "utf-8");
    const { data } = matter(fileContent);
    res.json(data);
  } catch (error) {
    console.error("Error reading settings:", error);
    res.status(500).json({ error: "Failed to read settings" });
  }
}
