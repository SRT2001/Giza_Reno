import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

interface Project {
  slug: string;
  title: string;
  description: string;
  image: string;
  category: string;
  tags: string[];
  date: string;
  body?: string;
}

interface Testimonial {
  slug: string;
  name: string;
  location: string;
  project: string;
  rating: number;
  body: string;
  date: string;
}

// Fallback data in case CMS content is not available
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
  {
    slug: "coconut-grove-modern-bathroom",
    title: "Coconut Grove Modern Bathroom Renovation",
    description: "Full bathroom transformation from raw construction shell to modern spa-inspired retreat with custom finishes and high-end materials.",
    tags: ["Modern", "Luxury", "Bathroom", "Residential"],
    image: "https://cdn.builder.io/api/v1/image/assets%2Ff8fc8faad3844710a06fef1ff8cf1884%2F828994fee174439781f86accc6b0bfee?format=webp&width=1600&height=2400",
    category: "Residential",
    date: "2024-04-15",
  },
  {
    slug: "modern-office-development",
    title: "Modern Office Development & Interior Build-Out",
    description: "Commercial office transformation featuring glass partitions, collaborative workspaces, and modern industrial finishes. Complete build-out from vacant shell.",
    tags: ["Commercial", "Modern", "Office", "Build-Out"],
    image: "https://cdn.builder.io/api/v1/image/assets%2Ff8fc8faad3844710a06fef1ff8cf1884%2Fbea764b0b8664f7b803c863ff6ffad7f?format=webp&width=1600&height=2400",
    category: "Commercial",
    date: "2024-05-01",
  },
];

const fallbackTestimonials: Testimonial[] = [
  {
    slug: "john-doe",
    body: "The team at Giza Renovations completely transformed my outdated kitchen into a modern and functional space. I couldn't be happier with the results.",
    name: "John Doe",
    location: "Homeowner, Coconut Grove",
    project: "Kitchen Remodel",
    rating: 5,
    date: "2024-01-20",
  },
  {
    slug: "jane-smith",
    body: "Outstanding work! They delivered exactly what we envisioned and exceeded our expectations in every way.",
    name: "Jane Smith",
    location: "Homeowner, Coral Gables",
    project: "Bathroom Remodel",
    rating: 5,
    date: "2024-02-15",
  },
  {
    slug: "michael-johnson",
    body: "Professional, reliable, and incredibly talented. Our bathroom renovation was completed on time and looks amazing.",
    name: "Michael Johnson",
    location: "Homeowner, Miami Beach",
    project: "Full Home Renovation",
    rating: 5,
    date: "2024-03-01",
  },
  {
    slug: "sarah-davis",
    body: "From start to finish, the experience was seamless. The quality of work is exceptional and worth every penny.",
    name: "Sarah Davis",
    location: "Homeowner, Brickell",
    project: "Kitchen Remodel",
    rating: 5,
    date: "2024-03-20",
  },
  {
    slug: "david-wilson",
    body: "They turned our vision into reality. The attention to detail and craftsmanship is unmatched.",
    name: "David Wilson",
    location: "Homeowner, Key Biscayne",
    project: "Outdoor Living Space",
    rating: 5,
    date: "2024-04-10",
  },
];

export default function Projects() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [projects, setProjects] = useState<Project[]>(fallbackProjects);
  const [testimonials, setTestimonials] = useState<Testimonial[]>(fallbackTestimonials);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchContent() {
      try {
        // Fetch projects from CMS
        const projectsRes = await fetch("/api/content/projects");
        if (projectsRes.ok) {
          const cmsProjects = await projectsRes.json();
          if (cmsProjects.length > 0) {
            setProjects(cmsProjects);
          }
        }

        // Fetch testimonials from CMS
        const testimonialsRes = await fetch("/api/content/testimonials");
        if (testimonialsRes.ok) {
          const cmsTestimonials = await testimonialsRes.json();
          if (cmsTestimonials.length > 0) {
            setTestimonials(cmsTestimonials);
          }
        }
      } catch (error) {
        console.log("Using fallback content:", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchContent();
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Carousel Section */}
      <section className="relative h-[600px] md:h-[700px] lg:h-[800px] w-full overflow-hidden">
        {/* Carousel Images */}
        {projects.map((project, index) => (
          <div
            key={project.slug}
            className={`absolute inset-0 transition-opacity duration-700 ${
              index === currentSlide ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
            }`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url('${project.image}')`,
              }}
            >
              {/* Dark overlay for text readability */}
              <div className="absolute inset-0 bg-black/40"></div>
            </div>

            {/* Project Content */}
            <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
              <div className="max-w-3xl">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 drop-shadow-lg">
                  {project.title}
                </h1>
                <p className="text-lg sm:text-xl text-white/95 mb-8 max-w-2xl drop-shadow-md">
                  {project.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-3 mb-8">
                  {project.tags?.map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-2 bg-white text-gray-900 rounded text-sm font-semibold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* View Project Button */}
                <Link
                  to={`/projects/${project.slug}`}
                  className="inline-block px-8 py-3 bg-white text-gray-900 rounded text-base font-semibold hover:bg-gray-100 transition-colors shadow-lg"
                >
                  View Project Details
                </Link>
              </div>
            </div>
          </div>
        ))}

        {/* Carousel Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center transition-colors"
          aria-label="Previous slide"
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center transition-colors"
          aria-label="Next slide"
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Carousel Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentSlide
                  ? "bg-white w-8"
                  : "bg-white/50 hover:bg-white/75"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Our Past Projects Grid Section */}
      <section className="py-16 md:py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-gray-600 uppercase tracking-wider mb-4">
              Projects
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Past Projects
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Browse through our gallery of past projects.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="space-y-16">
            {projects.map((project) => (
              <div key={project.slug} className="space-y-6">
                {/* Project Image - Full Width */}
                <div className="overflow-hidden rounded-lg">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-auto object-cover"
                  />
                </div>

                {/* Project Details - Horizontal Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                  {/* Title and Tags */}
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                      {project.title}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.tags?.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 border border-gray-900 text-gray-900 rounded text-sm font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Description */}
                  <div>
                    <p className="text-base text-gray-700 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Carousel Section */}
      <section className="py-16 md:py-24 lg:py-32 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Testimonial Content */}
            <div className="text-center px-12 md:px-20">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.slug}
                  className={`transition-opacity duration-500 ${
                    index === currentTestimonial ? "opacity-100" : "opacity-0 absolute inset-0"
                  }`}
                >
                  <p className="text-xl md:text-2xl lg:text-3xl font-normal text-gray-900 leading-relaxed mb-8 max-w-4xl mx-auto">
                    {testimonial.body.includes("Giza Renovations") ? (
                      <>
                        The team at <span className="font-bold">Giza Renovations</span> {testimonial.body.split("Giza Renovations")[1]}
                      </>
                    ) : (
                      testimonial.body
                    )}
                  </p>
                  <div className="text-center">
                    <p className="text-base md:text-lg font-semibold text-gray-900 mb-1">
                      {testimonial.name}
                    </p>
                    <p className="text-sm md:text-base text-gray-600">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 border-2 border-gray-900 rounded-full flex items-center justify-center transition-colors hover:bg-gray-900 hover:text-white"
              aria-label="Previous testimonial"
            >
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 border-2 border-gray-900 rounded-full flex items-center justify-center transition-colors hover:bg-gray-900 hover:text-white"
              aria-label="Next testimonial"
            >
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Indicator Dots */}
            <div className="flex justify-center gap-2 mt-12">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentTestimonial
                      ? "bg-gray-900"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="bg-gray-50 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-center text-base md:text-lg font-medium text-gray-900 mb-8">
            Used by the world's most average companies
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16">
            {/* Houzz Logo */}
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2Ff8fc8faad3844710a06fef1ff8cf1884%2F0954b31a1b8e4168a6b9f08b3c709844?format=webp&width=800"
              alt="Houzz"
              className="h-8 md:h-10 w-auto grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all"
            />
            {/* BBB Logo */}
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2Ff8fc8faad3844710a06fef1ff8cf1884%2Fdcdf337541f849319421754a8df88cd9?format=webp&width=800"
              alt="BBB Accredited Business"
              className="h-12 md:h-14 w-auto grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all"
            />
            {/* Lowe's Logo */}
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2Ff8fc8faad3844710a06fef1ff8cf1884%2Fb0844bcc46e54e3499af151e40ac9083?format=webp&width=800"
              alt="Lowe's Home Improvement"
              className="h-10 md:h-12 w-auto grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all"
            />
            {/* Home Depot Logo */}
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2Ff8fc8faad3844710a06fef1ff8cf1884%2F54fc52ce6e144ffdab0f5d1ed8345bb7?format=webp&width=800"
              alt="The Home Depot"
              className="h-10 md:h-12 w-auto grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all"
            />
            {/* Angie's List Logo */}
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2Ff8fc8faad3844710a06fef1ff8cf1884%2F2b426367b50248b28111cbdc73598dfc?format=webp&width=800"
              alt="Angie's List"
              className="h-8 md:h-10 w-auto grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left Column - Text Content */}
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Transform your home with Giza
              </h2>
              <p className="text-lg md:text-xl text-gray-700 mb-8">
                Schedule a consultation today and start your dream remodeling project.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="inline-block px-8 py-3 bg-gray-900 text-white rounded text-base font-semibold hover:bg-gray-800 transition-colors text-center"
                >
                  Get Started
                </Link>
                <Link
                  to="/about"
                  className="inline-block px-8 py-3 bg-white text-gray-900 border-2 border-gray-900 rounded text-base font-semibold hover:bg-gray-50 transition-colors text-center"
                >
                  Learn More
                </Link>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="overflow-hidden rounded-lg">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Ff8fc8faad3844710a06fef1ff8cf1884%2F4a0eb737d19f4b689c5f361766c05d92?format=webp&width=1600&height=2400"
                alt="Modern bathroom renovation"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
