import { useState, useEffect } from "react";

export interface Project {
  slug: string;
  title: string;
  description: string;
  image: string;
  category: string;
  tags: string[];
  date: string;
  body?: string;
}

export interface Testimonial {
  slug: string;
  name: string;
  location: string;
  project?: string;
  rating?: number;
  body: string;
  date?: string;
}

// Fallback testimonials in case CMS content is not available
const fallbackTestimonials: Testimonial[] = [
  {
    slug: "john-doe",
    body: "The team at Giza Renovations completely transformed my outdated kitchen into a modern and functional space. I couldn't be happier with the results.",
    name: "John Doe",
    location: "Homeowner, Coconut Grove",
  },
  {
    slug: "jane-smith",
    body: "Outstanding work! They delivered exactly what we envisioned and exceeded our expectations in every way.",
    name: "Jane Smith",
    location: "Homeowner, Coral Gables",
  },
  {
    slug: "michael-johnson",
    body: "Professional, reliable, and incredibly talented. Our bathroom renovation was completed on time and looks amazing.",
    name: "Michael Johnson",
    location: "Homeowner, Miami Beach",
  },
  {
    slug: "sarah-davis",
    body: "From start to finish, the experience was seamless. The quality of work is exceptional and worth every penny.",
    name: "Sarah Davis",
    location: "Homeowner, Brickell",
  },
  {
    slug: "david-wilson",
    body: "They turned our vision into reality. The attention to detail and craftsmanship is unmatched.",
    name: "David Wilson",
    location: "Homeowner, Key Biscayne",
  },
];

// Fallback projects
const fallbackProjects: Project[] = [
  {
    slug: "stunning-kitchen-remodel",
    title: "Stunning Kitchen Remodel",
    description: "Explore our diverse portfolio showcasing our exceptional home remodeling projects.",
    tags: ["Contemporary", "Luxury", "Functional"],
    image: "https://cdn.builder.io/api/v1/image/assets%2Ff8fc8faad3844710a06fef1ff8cf1884%2F797ffa29cd574904867b957258bd6aad?format=webp&width=1600&height=2400",
    category: "Residential",
    date: "2024-01-15",
  },
  {
    slug: "kitchen-remodel-2",
    title: "Kitchen Remodel",
    description: "Transformed an outdated kitchen into a modern and functional space.",
    tags: ["Residential", "Modern", "Renovation"],
    image: "https://cdn.builder.io/api/v1/image/assets%2Ff8fc8faad3844710a06fef1ff8cf1884%2Fac342fa3d3a04b979b877105ab7969f5?format=webp&width=1600&height=2400",
    category: "Residential",
    date: "2024-02-10",
  },
  {
    slug: "bathroom-renovation",
    title: "Bathroom Renovation",
    description: "Created a luxurious and modern bathroom for a commercial space.",
    tags: ["Commercial", "Luxury", "Remodel"],
    image: "https://cdn.builder.io/api/v1/image/assets%2Ff8fc8faad3844710a06fef1ff8cf1884%2Fbea764b0b8664f7b803c863ff6ffad7f?format=webp&width=1600&height=2400",
    category: "Commercial",
    date: "2024-03-05",
  },
];

export function useTestimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>(fallbackTestimonials);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchTestimonials() {
      try {
        const res = await fetch("/api/content/testimonials");
        if (res.ok) {
          const cmsTestimonials = await res.json();
          if (cmsTestimonials.length > 0) {
            setTestimonials(cmsTestimonials);
          }
        }
      } catch (error) {
        console.log("Using fallback testimonials:", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchTestimonials();
  }, []);

  return { testimonials, isLoading };
}

export function useProjects() {
  const [projects, setProjects] = useState<Project[]>(fallbackProjects);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const res = await fetch("/api/content/projects");
        if (res.ok) {
          const cmsProjects = await res.json();
          if (cmsProjects.length > 0) {
            setProjects(cmsProjects);
          }
        }
      } catch (error) {
        console.log("Using fallback projects:", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchProjects();
  }, []);

  return { projects, isLoading };
}
