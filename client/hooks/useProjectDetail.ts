import { useState, useEffect } from "react";

export interface ProjectDetailData {
  slug: string;
  // Card fields
  title: string;
  description: string;
  image: string;
  category: string;
  tags: string[];
  date: string;
  // Detail fields
  subtitle?: string;
  heroImage?: string;
  location?: string;
  timeline?: string;
  client?: string;
  scope?: string;
  overview?: string;
  beforeImage?: string;
  afterImage?: string;
  beforeTitle?: string;
  afterTitle?: string;
  transformationDescription?: string;
  sections?: {
    title: string;
    content: string;
  }[];
  features?: string[];
  highlightSections?: {
    title: string;
    description: string;
  }[];
  ctaText?: string;
  ctaButtonText?: string;
}

export function useProjectDetail(slug: string | undefined) {
  const [project, setProject] = useState<ProjectDetailData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!slug) {
      setIsLoading(false);
      return;
    }

    async function fetchProjectDetail() {
      try {
        // Fetch from unified projects endpoint
        const res = await fetch(`/api/content/projects/${slug}`);
        if (res.ok) {
          const data = await res.json();
          setProject(data);
        } else if (res.status === 404) {
          setError("Project not found");
        } else {
          setError("Failed to load project");
        }
      } catch (err) {
        console.error("Error fetching project detail:", err);
        setError("Failed to load project");
      } finally {
        setIsLoading(false);
      }
    }

    fetchProjectDetail();
  }, [slug]);

  return { project, isLoading, error };
}
