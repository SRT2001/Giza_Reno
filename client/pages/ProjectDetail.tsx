import { Link, useParams } from "react-router-dom";
import { useState, useRef } from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

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
    }[];
    features: string[];
    highlightSections: {
      title: string;
      description: string;
    }[];
    ctaText: string;
    ctaButtonText: string;
  };
}

const projectsData: ProjectData = {
  "stunning-kitchen-remodel": {
    title: "Stunning Kitchen Remodel",
    subtitle: "Complete Kitchen Transformation | Contemporary Design",
    heroImage: "https://cdn.builder.io/api/v1/image/assets%2Ff8fc8faad3844710a06fef1ff8cf1884%2F797ffa29cd574904867b957258bd6aad?format=webp&width=1600&height=900",
    location: "Miami, Florida",
    date: "4 Months (Completed 2024)",
    client: "Private Homeowner",
    scope: "Full Kitchen Renovation",
    overview: "This comprehensive kitchen remodel transformed an outdated space into a modern, functional culinary hub. Combining contemporary design with premium materials, we created a kitchen that seamlessly blends aesthetics with practicality.",
    beforeImage: "https://cdn.builder.io/api/v1/image/assets%2Ff8fc8faad3844710a06fef1ff8cf1884%2F797ffa29cd574904867b957258bd6aad?format=webp&width=800&height=1200",
    afterImage: "https://cdn.builder.io/api/v1/image/assets%2Ff8fc8faad3844710a06fef1ff8cf1884%2F797ffa29cd574904867b957258bd6aad?format=webp&width=800&height=1200",
    beforeTitle: "Before",
    afterTitle: "After",
    transformationDescription: "Drag the slider to see how we transformed this kitchen from dated to contemporary.",
    sections: [
      {
        title: "Design Concept",
        content: "The primary objective for this kitchen remodel was to design a contemporary space that reflects current design trends while maintaining timeless appeal. The homeowners wanted a modern, open-concept kitchen that would serve as the heart of their home. We designed a space that maximizes natural light, improves workflow, and incorporates high-end appliances and finishes."
      }
    ],
    features: [
      "Open concept layout",
      "Custom cabinetry",
      "Quartz countertops",
      "Premium appliances",
      "Improved lighting",
      "Modern aesthetic"
    ],
    highlightSections: [
      {
        title: "Improved Flow",
        description: "Redesigning the spatial flow and introducing thoughtful layouts created an open, flowing design that feels spacious and functional."
      },
      {
        title: "Market Position",
        description: "Upgrading to high-end finishes and contemporary design elevated the property's market value and appeal to discerning homeowners."
      }
    ],
    ctaText: "Ready to Remodel Your Kitchen?",
    ctaButtonText: "Schedule a Consultation"
  },
  "kitchen-remodel-2": {
    title: "Kitchen Remodel",
    subtitle: "Modern Functionality | Residential Kitchen",
    heroImage: "https://cdn.builder.io/api/v1/image/assets%2Ff8fc8faad3844710a06fef1ff8cf1884%2Fac342fa3d3a04b979b877105ab7969f5?format=webp&width=1600&height=900",
    location: "Miami, Florida",
    date: "3 Months (Completed 2024)",
    client: "Private Homeowner",
    scope: "Kitchen Renovation",
    overview: "This kitchen renovation modernized an outdated space with contemporary design elements and improved functionality. We transformed a tired, underutilized kitchen into a vibrant, efficient hub for daily living.",
    beforeImage: "https://cdn.builder.io/api/v1/image/assets%2Ff8fc8faad3844710a06fef1ff8cf1884%2Fac342fa3d3a04b979b877105ab7969f5?format=webp&width=800&height=1200",
    afterImage: "https://cdn.builder.io/api/v1/image/assets%2Ff8fc8faad3844710a06fef1ff8cf1884%2Fac342fa3d3a04b979b877105ab7969f5?format=webp&width=800&height=1200",
    beforeTitle: "Before",
    afterTitle: "After",
    transformationDescription: "View the transformation of this kitchen space.",
    sections: [
      {
        title: "Design Concept",
        content: "The existing kitchen was dated with poor workflow and limited storage. We implemented a modern design with improved layouts, contemporary finishes, and smart storage solutions. The result is a kitchen that feels both timeless and current."
      }
    ],
    features: [
      "Modern design",
      "Improved workflow",
      "Enhanced storage",
      "Quality finishes",
      "Better lighting",
      "Contemporary style"
    ],
    highlightSections: [
      {
        title: "Improved Flow",
        description: "Optimized kitchen layout for better workflow and accessibility."
      },
      {
        title: "Storage Solutions",
        description: "Increased storage capacity with smart organizational design."
      }
    ],
    ctaText: "Transform Your Kitchen Today",
    ctaButtonText: "Get Started"
  },
  "bathroom-renovation": {
    title: "Bathroom Renovation",
    subtitle: "Luxury Commercial Bathroom | Modern Design",
    heroImage: "https://cdn.builder.io/api/v1/image/assets%2Ff8fc8faad3844710a06fef1ff8cf1884%2Fbea764b0b8664f7b803c863ff6ffad7f?format=webp&width=1600&height=900",
    location: "Miami, Florida",
    date: "2 Months (Completed 2024)",
    client: "Commercial Client",
    scope: "Bathroom Renovation",
    overview: "This luxury bathroom renovation created a sophisticated commercial space that combines functionality with high-end design. The space now serves as a premium facility for clients and employees.",
    beforeImage: "https://cdn.builder.io/api/v1/image/assets%2Ff8fc8faad3844710a06fef1ff8cf1884%2Fbea764b0b8664f7b803c863ff6ffad7f?format=webp&width=800&height=1200",
    afterImage: "https://cdn.builder.io/api/v1/image/assets%2Ff8fc8faad3844710a06fef1ff8cf1884%2Fbea764b0b8664f7b803c863ff6ffad7f?format=webp&width=800&height=1200",
    beforeTitle: "Before",
    afterTitle: "After",
    transformationDescription: "Experience the luxury of this commercial bathroom transformation.",
    sections: [
      {
        title: "Design Concept",
        content: "We created a luxurious bathroom space that reflects high-end design principles. Premium fixtures, quality materials, and thoughtful layouts combine to create an elegant facility that elevates the overall perception of the commercial space."
      }
    ],
    features: [
      "Luxury finishes",
      "Premium fixtures",
      "Commercial-grade durability",
      "Modern aesthetics",
      "Efficient layout",
      "High-end materials"
    ],
    highlightSections: [
      {
        title: "Premium Quality",
        description: "Using only the highest quality materials and finishes for a luxury experience."
      },
      {
        title: "Functional Design",
        description: "Designed for commercial use with durability and style."
      }
    ],
    ctaText: "Upgrade Your Commercial Space",
    ctaButtonText: "Get a Free Quote"
  },
  "modern-bathroom-renovation": {
    title: "Modern Bathroom Renovation",
    subtitle: "Full Bathroom Transformation | Contemporary Design",
    heroImage: "https://cdn.builder.io/api/v1/image/assets%2Ff8fc8faad3844710a06fef1ff8cf1884%2F828994fee174439781f86accc6b0bfee?format=webp&width=1600&height=900",
    location: "Miami, Florida",
    date: "3 Months (Completed 2024)",
    client: "Private Homeowner",
    scope: "Full Bathroom Gut Renovation",
    overview: "This modern bathroom renovation transformed an outdated, unfinished space into a sleek, spa-inspired retreat. What was once a raw construction shell with exposed block walls and framing is now a high-end bathroom defined by clean lines, matte finishes, and intentional lighting.",
    beforeImage: "https://cdn.builder.io/api/v1/image/assets%2Ff8fc8faad3844710a06fef1ff8cf1884%2F2bb412a9930c42c091cb8df1940e189a?format=webp&width=800&height=1200",
    afterImage: "https://cdn.builder.io/api/v1/image/assets%2Ff8fc8faad3844710a06fef1ff8cf1884%2F3af6a714d28741d7b85737a3282c77c3?format=webp&width=800&height=1200",
    beforeTitle: "Before",
    afterTitle: "After",
    transformationDescription: "Drag the slider to see the dramatic difference in spatial flow and material selection.",
    sections: [
      {
        title: "Design Concept",
        content: "The homeowners wanted a modern, minimalist aesthetic with dark, moody finishes and contrast, a freestanding soaking tub, a walk-in glass shower, custom floating vanity, improved natural lighting, and a bathroom that felt like a luxury hotel suite. The design direction focused on creating a spa-like environment while maintaining durability for long-term use in Miami's humid climate."
      }
    ],
    features: [
      "Full bathroom gut renovation",
      "Modern spa-inspired design",
      "Custom floating vanity",
      "Freestanding soaking tub",
      "Frameless glass shower",
      "High-end matte finishes"
    ],
    highlightSections: [
      {
        title: "Improved Flow",
        description: "Redesigning the spatial flow created an open, flowing design that maximizes every inch of space."
      },
      {
        title: "Luxury Materials",
        description: "Upgraded to high-end finishes and contemporary design for a spa-like experience."
      }
    ],
    ctaText: "Ready to Transform Your Bathroom?",
    ctaButtonText: "Schedule a Consultation"
  },
  "coconut-grove-modern-bathroom": {
    title: "Coconut Grove Modern Bathroom Renovation",
    subtitle: "Full Bathroom Transformation | Coconut Grove, Miami, FL",
    heroImage: "https://cdn.builder.io/api/v1/image/assets%2Ff8fc8faad3844710a06fef1ff8cf1884%2F828994fee174439781f86accc6b0bfee?format=webp&width=1600&height=900",
    location: "Coconut Grove, Miami, Florida",
    date: "3 Months (Completed 2024)",
    client: "Private Homeowner",
    scope: "Full Bathroom Gut Renovation",
    overview: "This Coconut Grove bathroom renovation transformed an outdated, unfinished space into a modern, spa-inspired retreat. What was once a raw construction shell with exposed block walls and framing is now a sleek, high-end bathroom defined by clean lines, matte finishes, and intentional lighting.",
    beforeImage: "https://cdn.builder.io/api/v1/image/assets%2Ff8fc8faad3844710a06fef1ff8cf1884%2F2bb412a9930c42c091cb8df1940e189a?format=webp&width=800&height=1200",
    afterImage: "https://cdn.builder.io/api/v1/image/assets%2Ff8fc8faad3844710a06fef1ff8cf1884%2F3af6a714d28741d7b85737a3282c77c3?format=webp&width=800&height=1200",
    beforeTitle: "Before",
    afterTitle: "After",
    transformationDescription: "Drag the slider to see the dramatic difference in space flow and material selection.",
    sections: [
      {
        title: "Design Concept",
        content: "Our goal was to create a functional, minimalist design that feels open, calm, and luxurious while maximizing every inch of the space. The homeowners wanted dark, moody finishes with a freestanding soaking tub, walk-in glass shower, custom floating vanity, and a bathroom that felt like a luxury hotel suite."
      }
    ],
    features: [
      "Full bathroom gut renovation",
      "Modern spa-inspired design",
      "Custom floating vanity",
      "Freestanding soaking tub",
      "Frameless glass shower",
      "High-end matte finishes"
    ],
    highlightSections: [
      {
        title: "Improved Flow",
        description: "Redesigning the spatial flow created an open, flowing design that feels spacious and luxurious."
      },
      {
        title: "Market Position",
        description: "Upgraded to high-end finishes and contemporary design to elevate property value."
      }
    ],
    ctaText: "Ready to Transform Your Bathroom?",
    ctaButtonText: "Schedule a Consultation"
  },
  "modern-office-development": {
    title: "Modern Office Development & Interior Build-Out",
    subtitle: "Commercial Office Transformation | Miami, FL",
    heroImage: "https://cdn.builder.io/api/v1/image/assets%2Ff8fc8faad3844710a06fef1ff8cf1884%2F848e39b319e349aaacc5c442ebba91ee?format=webp&width=1600&height=900",
    location: "Miami, Florida",
    date: "4 Months (Completed 2024)",
    client: "Corporate Client",
    scope: "Full Commercial Office Build-Out",
    overview: "This commercial office development project transformed a vacant, unfinished corporate floor into a fully built-out, modern workspace designed for functionality, efficiency, and architectural presence. What began as an empty shell with exposed ceilings, outdated lighting grids, and raw concrete flooring is now a refined, glass-partitioned office environment featuring private meeting rooms, collaborative spaces, and clean industrial finishes.",
    beforeImage: "https://cdn.builder.io/api/v1/image/assets%2Ff8fc8faad3844710a06fef1ff8cf1884%2F69478feeffd647908d2e3677e20fe629?format=webp&width=800&height=1200",
    afterImage: "https://cdn.builder.io/api/v1/image/assets%2Ff8fc8faad3844710a06fef1ff8cf1884%2F848e39b319e349aaacc5c442ebba91ee?format=webp&width=800&height=1200",
    beforeTitle: "Before",
    afterTitle: "After",
    transformationDescription: "Drag the slider to see the transformation from a vacant shell to a sophisticated corporate office environment.",
    sections: [
      {
        title: "Design Concept",
        content: "The goal was to create a professional, modern office space that enhances workflow, supports team productivity, and leaves a strong impression on clients. The design direction combined industrial minimalism with warm, professional elements to balance openness with privacy. We focused on maximizing natural light penetration while maintaining acoustic privacy through strategic glass partitioning and acoustic ceiling design."
      }
    ],
    features: [
      "Full commercial interior build-out",
      "Glass-partitioned private offices",
      "Open collaborative work areas",
      "Electrical rewiring and panel upgrades",
      "Custom lighting design",
      "Polished concrete flooring",
      "Acoustic ceiling tiles",
      "Wood accent feature walls"
    ],
    highlightSections: [
      {
        title: "Improved Workflow",
        description: "The redesigned floor plan optimizes circulation and defines separate work zones, improving employee productivity and client navigation through the space."
      },
      {
        title: "Professional Presence",
        description: "Modern glass partitions and refined finishes create a sophisticated corporate aesthetic that strengthens the company's brand image and client impression."
      }
    ],
    ctaText: "Ready to Build Your Office Space?",
    ctaButtonText: "Schedule a Consultation"
  }
};

export default function ProjectDetail() {
  const { id } = useParams();
  const [sliderPosition, setSliderPosition] = useState(50);
  const sliderRef = useRef<HTMLDivElement>(null);

  const project = projectsData[id as string];

  const handleSliderMove = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    if (!sliderRef.current) return;

    const rect = sliderRef.current.getBoundingClientRect();
    let x: number;

    if ("touches" in e) {
      x = e.touches[0].clientX - rect.left;
    } else {
      x = e.clientX - rect.left;
    }

    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

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


  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('${project.heroImage}')`,
            backgroundPosition: 'center'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/40 to-black/30" />
        
        <div className="relative h-full flex flex-col justify-end px-6 md:px-12 lg:px-20 pb-16 md:pb-20 lg:pb-24">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-white mb-4 leading-tight">
              {project.title}
            </h1>
            <p className="text-lg md:text-xl text-gray-200">
              {project.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Project Metadata */}
      <section className="px-6 md:px-12 lg:px-20 py-12 md:py-16 border-b border-gray-200">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
          <div>
            <p className="text-xs uppercase tracking-widest text-gray-600 font-semibold mb-2">Location</p>
            <p className="text-gray-900 text-sm">{project.location}</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-gray-600 font-semibold mb-2">Timeline</p>
            <p className="text-gray-900 text-sm">{project.date}</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-gray-600 font-semibold mb-2">Client</p>
            <p className="text-gray-900 text-sm">{project.client}</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-gray-600 font-semibold mb-2">Scope</p>
            <p className="text-gray-900 text-sm">{project.scope}</p>
          </div>
        </div>
      </section>

      {/* Design Concept */}
      <section className="px-6 md:px-12 lg:px-20 py-16 md:py-24">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-8">Design Concept</h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl">
            {project.sections[0]?.content || project.overview}
          </p>
        </div>
      </section>

      {/* Before & After Slider Section */}
      <section className="py-24 bg-gray-50 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mb-12 text-center"
          >
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">The Transformation</h2>
            <p className="text-gray-600 font-light max-w-2xl mx-auto text-lg">{project.transformationDescription}</p>
          </motion.div>

          <div
            className="relative w-full aspect-video md:aspect-[21/9] bg-gray-200 overflow-hidden select-none cursor-ew-resize group rounded-lg"
            ref={sliderRef}
            onMouseMove={handleSliderMove}
            onTouchMove={handleSliderMove}
          >
            {/* After Image (Background) */}
            <div className="absolute inset-0">
              <img src={project.afterImage} alt="After Renovation" className="w-full h-full object-cover" />
              <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm px-4 py-2 text-xs font-semibold tracking-wider uppercase text-gray-900">After</div>
            </div>

            {/* Before Image (Foreground, clipped) */}
            <div
              className="absolute inset-0 border-r-2 border-white pointer-events-none"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              <img src={project.beforeImage} alt="Before Renovation" className="w-full h-full object-cover opacity-90" />
              <div className="absolute top-6 left-6 bg-black/80 backdrop-blur-sm px-4 py-2 text-xs font-semibold tracking-wider uppercase text-white">Before</div>
            </div>

            {/* Slider Handle */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-white/60 backdrop-blur shadow-[0_0_10px_rgba(0,0,0,0.3)] pointer-events-none"
              style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 md:w-12 md:h-12 bg-white rounded-full shadow-lg flex items-center justify-center transition-transform group-hover:scale-110">
                <div className="flex gap-1 md:gap-2 text-gray-900">
                  <div className="w-0 h-0 border-t-[4px] border-b-[4px] border-r-[6px] border-transparent border-r-gray-900"></div>
                  <div className="w-0 h-0 border-t-[4px] border-b-[4px] border-l-[6px] border-transparent border-l-gray-900"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Elevated Living Section */}
      <section className="px-6 md:px-12 lg:px-20 py-16 md:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left - Image with stat overlay */}
            <div className="relative">
              <img
                src={project.afterImage}
                alt="Project detail"
                className="w-full rounded-lg shadow-lg"
              />
              <div className="absolute bottom-6 left-6 bg-white/95 px-6 py-4 rounded backdrop-blur-sm">
                <p className="text-xs uppercase tracking-widest text-gray-600 font-semibold mb-1">Value Increase</p>
                <p className="text-3xl font-light text-gray-900">+35%</p>
                <p className="text-xs text-gray-600 mt-1">Market position</p>
              </div>
            </div>

            {/* Right - Content */}
            <div>
              <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-8">
                Elevated Living,<br />Quantifiable Value
              </h2>
              
              <div className="space-y-8 mb-12">
                {project.highlightSections.map((section, idx) => (
                  <div key={idx}>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">{section.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{section.description}</p>
                  </div>
                ))}
              </div>

              {/* Key Upgrades */}
              <div className="border-t pt-8">
                <p className="text-xs uppercase tracking-widest text-gray-600 font-semibold mb-6">Key Upgrades</p>
                <ul className="space-y-3">
                  {project.features.slice(0, 4).map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-700">
                      <svg className="w-5 h-5 text-gray-900 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
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

      {/* CTA Section */}
      <section className="bg-gray-900 px-6 md:px-12 lg:px-20 py-20 md:py-28 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
            {project.ctaText}
          </h2>
          <p className="text-gray-400 text-lg mb-10">
            Schedule a consultation with our design team to discuss your vision and property potential.
          </p>
          <button className="bg-white text-gray-900 px-12 py-4 font-semibold hover:bg-gray-100 transition-colors rounded">
            {project.ctaButtonText}
          </button>
        </div>
      </section>

      {/* Back to Projects */}
      <section className="px-6 md:px-12 lg:px-20 py-12 border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
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
