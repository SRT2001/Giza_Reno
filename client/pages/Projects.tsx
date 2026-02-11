import { Link } from "react-router-dom";
import { useState } from "react";

export default function Projects() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const projects = [
    {
      id: 1,
      title: "Stunning Kitchen Remodel",
      description: "Explore our diverse portfolio showcasing our exceptional home remodeling projects.",
      tags: ["Contemporary", "Luxury", "Functional"],
      image: "https://cdn.builder.io/api/v1/image/assets%2Ff8fc8faad3844710a06fef1ff8cf1884%2F797ffa29cd574904867b957258bd6aad?format=webp&width=1600&height=2400",
    },
    {
      id: 2,
      title: "Modern Kitchen Renovation",
      description: "Experience the beauty and functionality of our expert kitchen remodeling services.",
      tags: ["Contemporary", "Luxury", "Functional"],
      image: "https://cdn.builder.io/api/v1/image/assets%2Ff8fc8faad3844710a06fef1ff8cf1884%2Fa7ae7d2d55924bf0b10dc57ff4b2a395?format=webp&width=1600&height=2400",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Carousel Section */}
      <section className="relative h-[600px] md:h-[700px] lg:h-[800px] w-full overflow-hidden">
        {/* Carousel Images */}
        {projects.map((project, index) => (
          <div
            key={project.id}
            className={`absolute inset-0 transition-opacity duration-700 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
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
                  {project.tags.map((tag) => (
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
                  to={`/projects/${project.id}`}
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

      {/* Projects Grid Section - Placeholder for future content */}
      <section className="py-16 md:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-gray-600 uppercase tracking-wider mb-4">
              Portfolio
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Featured Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our portfolio of exceptional home remodeling projects
            </p>
          </div>

          {/* Project grid will be added here */}
          <div className="text-center text-gray-600">
            <p>More projects coming soon...</p>
          </div>
        </div>
      </section>
    </div>
  );
}
