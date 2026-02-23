import { Link, useParams } from "react-router-dom";
import { useState } from "react";

interface ProjectData {
  [key: string]: {
    title: string;
    subtitle: string;
    heroImage: string;
    location: string;
    date: string;
    client: string;
    scope: string;
    overview: string;
    beforeImage: string;
    afterImage: string;
    beforeTitle: string;
    afterTitle: string;
    transformationDescription: string;
    sections: {
      title: string;
      content: string;
      icon?: string;
    }[];
    features: string[];
    highlightItems: {
      label: string;
      value: string;
      description?: string;
    }[];
    ctaText: string;
    ctaButtonText: string;
  };
}

const projectsData: ProjectData = {
  "coconut-grove-modern-bathroom": {
    title: "Coconut Grove Modern Bathroom Renovation",
    subtitle: "Full Bathroom Transformation | Coconut Grove, Miami, FL",
    heroImage: "https://cdn.builder.io/api/v1/image/assets%2Ff8fc8faad3844710a06fef1ff8cf1884%2F828994fee174439781f86accc6b0bfee?format=webp&width=1600&height=900",
    location: "Coconut Grove, Miami, Florida",
    date: "3 Months (Completed 2024)",
    client: "Private Homeowner",
    scope: "Full Bathroom Gut Renovation",
    overview: "This Coconut Grove bathroom renovation transformed an outdated, unfinished space into a modern, spa-inspired retreat. What was once a raw construction shell with exposed block walls and framing is now a sleek, high-end bathroom defined by clean lines, matte finishes, and intentional lighting.",
    beforeImage: "https://cdn.builder.io/api/v1/image/assets%2Ff8fc8faad3844710a06fef1ff8cf1884%2F7ccfc7decb7c4179a99e31e0edea82b3?format=webp&width=800&height=1200",
    afterImage: "https://cdn.builder.io/api/v1/image/assets%2Ff8fc8faad3844710a06fef1ff8cf1884%2Fbf1e8f827a134721beb02a6c8af42357?format=webp&width=800&height=1200",
    beforeTitle: "Before",
    afterTitle: "After",
    transformationDescription: "Drag the slider to see the dramatic difference in space flow and material selection.",
    sections: [
      {
        title: "The Before",
        content: "The original space was completely unfinished with exposed concrete block walls, visible framing and ceiling joists, no plumbing fixtures installed, no flooring or waterproofing, limited natural light, and inefficient layout planning. The room lacked insulation, moisture protection, and proper electrical routing. It required a full-scale renovation from the ground up."
      },
      {
        title: "The Vision",
        content: "The homeowners wanted a modern, minimalist aesthetic with dark, moody finishes and contrast, a freestanding soaking tub, a walk-in glass shower, custom floating vanity, improved natural lighting, and a bathroom that felt like a luxury hotel suite. The design direction focused on creating a spa-like environment while maintaining durability for long-term use in Miami's humid climate."
      },
      {
        title: "The Renovation Process",
        content: "Our comprehensive approach included structural & infrastructure work with full framing correction, plumbing rough-in, electrical installation, moisture barriers and waterproofing, insulation upgrade, layout optimization to allow a centered freestanding tub, glass-enclosed shower, and wall-mounted vanity, plus high-end finishes including large-format matte porcelain tiles, dark wall paneling, frameless glass shower, ceiling-mounted rainfall shower, custom floating vanity, minimalist matte black fixtures, and contemporary circular mirror with integrated lighting."
      }
    ],
    features: [
      "Full bathroom gut renovation",
      "Modern spa-inspired design",
      "Custom floating vanity",
      "Freestanding soaking tub",
      "Frameless glass shower",
      "High-end matte finishes",
      "Structural + plumbing overhaul",
      "LED task and ambient lighting"
    ],
    highlightItems: [
      {
        label: "Improved Flow",
        value: "+35%",
        description: "Increased usable space with better layout"
      },
      {
        label: "Market Position",
        value: "Luxury",
        description: "Upgraded to high-end contemporary style"
      },
      {
        label: "Quality Rating",
        value: "Premium",
        description: "Custom materials throughout"
      },
      {
        label: "Design Time",
        value: "2 Weeks",
        description: "Collaborative design process"
      }
    ],
    ctaText: "Ready to Transform Your Bathroom?",
    ctaButtonText: "Schedule a Consultation"
  }
};

export default function ProjectDetail() {
  const { id } = useParams();
  const [transformPosition, setTransformPosition] = useState(50);
  
  const project = projectsData[id as string];

  if (!project) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Project Not Found</h1>
          <p className="text-gray-600 mb-8">The project you're looking for doesn't exist.</p>
          <Link to="/projects" className="text-gray-900 underline hover:text-gray-600">
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setTransformPosition(Math.min(Math.max(percentage, 0), 100));
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('${project.heroImage}')`,
            backgroundPosition: 'center'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
        
        <div className="relative h-full flex flex-col justify-end px-6 md:px-12 lg:px-20 pb-12 md:pb-16 lg:pb-20">
          <div className="max-w-4xl">
            <p className="text-gray-400 text-sm uppercase tracking-wide mb-4">Full Home Renovation</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-4 leading-tight">
              {project.title}
            </h1>
            <p className="text-lg md:text-xl text-gray-300">
              {project.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Breadcrumb & Project Meta */}
      <section className="bg-white px-6 md:px-12 lg:px-20 py-12 md:py-16 border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-4 gap-8 md:gap-12">
            {/* Project Details */}
            <div>
              <p className="text-xs uppercase tracking-wide text-gray-600 mb-2">Location</p>
              <p className="text-gray-900 font-light text-lg">{project.location}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wide text-gray-600 mb-2">Timeline</p>
              <p className="text-gray-900 font-light text-lg">{project.date}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wide text-gray-600 mb-2">Client</p>
              <p className="text-gray-900 font-light text-lg">{project.client}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wide text-gray-600 mb-2">Scope</p>
              <p className="text-gray-900 font-light text-lg">{project.scope}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Design Concept */}
      <section className="bg-white px-6 md:px-12 lg:px-20 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-8">Design Concept</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            {project.overview}
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Our goal was to create a functional, minimalist design that feels open, calm, and luxurious while maximizing every inch of the space.
          </p>
        </div>
      </section>

      {/* The Transformation - Before/After Slider */}
      <section className="bg-white px-6 md:px-12 lg:px-20 py-16 md:py-24">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">The Transformation</h2>
          <p className="text-gray-600 text-lg mb-12">
            {project.transformationDescription}
          </p>

          {/* Before/After Slider */}
          <div
            className="relative w-full overflow-hidden rounded-lg cursor-col-resize group"
            onMouseMove={handleMouseMove}
            onMouseLeave={() => {}}
          >
            <img
              src={project.afterImage}
              alt="After"
              className="w-full h-auto"
            />
            
            <div
              className="absolute top-0 left-0 h-full overflow-hidden"
              style={{ width: `${transformPosition}%` }}
            >
              <img
                src={project.beforeImage}
                alt="Before"
                className="w-screen h-auto"
              />
            </div>

            {/* Slider Handle */}
            <div
              className="absolute top-0 h-full w-1 bg-white cursor-col-resize transition-opacity opacity-100 group-hover:opacity-100"
              style={{ left: `${transformPosition}%` }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-3 shadow-lg">
                <svg className="w-4 h-4 text-gray-900" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.293 5.293a1 1 0 011.414 0L10 6.586l.293-.293a1 1 0 111.414 1.414l-2 2a1 1 0 01-1.414 0l-2-2a1 1 0 010-1.414zm3.414 5.414a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L12 13.414l-.293-.293z" clipRule="evenodd" />
                </svg>
              </div>
            </div>

            {/* Labels */}
            <div className="absolute bottom-6 left-6">
              <p className="text-white font-light text-lg bg-black/40 px-4 py-2 rounded">
                {project.beforeTitle}
              </p>
            </div>
            <div className="absolute bottom-6 right-6">
              <p className="text-white font-light text-lg bg-black/40 px-4 py-2 rounded">
                {project.afterTitle}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Sections */}
      {project.sections.map((section, index) => (
        <section
          key={index}
          className={`px-6 md:px-12 lg:px-20 py-16 md:py-24 ${
            index % 2 === 0 ? "bg-white" : "bg-gray-50"
          }`}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-8">
              {section.title}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              {section.content}
            </p>
          </div>
        </section>
      ))}

      {/* Elevated Living Section */}
      <section className="bg-white px-6 md:px-12 lg:px-20 py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left Column - Image */}
            <div className="flex items-center justify-center">
              <img
                src={project.afterImage}
                alt="Bathroom detail"
                className="w-full rounded-lg"
              />
            </div>

            {/* Right Column - Features */}
            <div>
              <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-8">
                Elevated Living,<br />Quantifiable Value
              </h2>
              
              <div className="space-y-6 mb-12">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Improved Flow</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Redesigning the spatial flow and introducing thoughtful layouts created an open, flowing design that feels spacious and functional.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Market Position</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Upgrading to high-end finishes and contemporary design elevated the property's market value and appeal to discerning homeowners.
                  </p>
                </div>
              </div>

              {/* Key Upgrades */}
              <div className="border-t pt-8">
                <h3 className="text-sm uppercase tracking-wide text-gray-600 mb-6">Key Upgrades</h3>
                <ul className="space-y-3">
                  {project.features.slice(0, 4).map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-700">
                      <svg className="w-5 h-5 text-gray-900 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlight Stats */}
      <section className="bg-gray-50 px-6 md:px-12 lg:px-20 py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {project.highlightItems.map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-lg border border-gray-200">
                <p className="text-sm uppercase tracking-wide text-gray-600 mb-2">
                  {item.label}
                </p>
                <p className="text-4xl font-light text-gray-900 mb-3">{item.value}</p>
                {item.description && (
                  <p className="text-sm text-gray-600">{item.description}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 px-6 md:px-12 lg:px-20 py-16 md:py-24 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-4">
            {project.ctaText}
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            If you're planning a bathroom renovation in Coconut Grove or anywhere in Miami, our team delivers high-quality craftsmanship with modern design expertise.
          </p>
          <button className="bg-white text-gray-900 px-10 py-4 font-semibold hover:bg-gray-100 transition-colors">
            {project.ctaButtonText}
          </button>
        </div>
      </section>

      {/* Back to Projects */}
      <section className="bg-white px-6 md:px-12 lg:px-20 py-12 border-t border-gray-200">
        <div className="max-w-6xl mx-auto">
          <Link to="/projects" className="inline-flex items-center gap-2 text-gray-900 hover:text-gray-600 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Projects
          </Link>
        </div>
      </section>
    </div>
  );
}
