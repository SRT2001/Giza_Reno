import { Link } from "react-router-dom";
import { useState } from "react";

export default function Services() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      quote: "Our experience with Giza Renovations was exceptional. They exceeded our expectations.",
      name: "John Doe",
      location: "Homeowner, ABC Company",
    },
    {
      id: 2,
      quote: "The team at Giza Renovations transformed our kitchen beyond our wildest dreams. Their attention to detail and professionalism was outstanding from start to finish.",
      name: "Sarah Johnson",
      location: "Satisfied Customer",
    },
    {
      id: 3,
      quote: "We couldn't be happier with our new bathroom renovation. The quality of work and materials used exceeded all our expectations. Highly recommended!",
      name: "Michael Chen",
      location: "Home Renovation Client",
    },
    {
      id: 4,
      quote: "Giza Renovations transformed our outdated kitchen into a modern and functional space. We couldn't be happier with the results.",
      name: "Jane Smith",
      location: "Business Owner, XYZ Corporation",
    },
    {
      id: 5,
      quote: "From consultation to completion, Giza Renovations delivered exceptional service. Our home extension was completed on time and within budget.",
      name: "Robert Martinez",
      location: "Project Manager",
    },
    {
      id: 6,
      quote: "Outstanding craftsmanship and customer service! Giza Renovations made our dream home a reality. Every detail was handled with care and precision.",
      name: "Emily Davis",
      location: "Homeowner",
    },
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Background Image */}
      <section className="relative h-[400px] md:h-[450px] lg:h-[500px] w-full overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://cdn.builder.io/api/v1/image/assets%2Ff8fc8faad3844710a06fef1ff8cf1884%2F76a0742abef442269e1fa900dd20b789?format=webp&width=2400&height=3600')`,
          }}
        >
          {/* Gradient overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/20"></div>
        </div>

        {/* Hero Content */}
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-start justify-center">
          <div className="max-w-3xl">
            <p className="text-sm sm:text-base text-white/90 mb-4 drop-shadow-md">
              Transform
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 drop-shadow-lg">
              Revamp Your Home
            </h1>
            <p className="text-base sm:text-lg text-white/90 mb-8 max-w-2xl drop-shadow-md">
              Experience the highest quality home remodeling services with Giza Renovations.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/about"
                className="px-6 py-3 bg-white text-gray-900 rounded text-base font-semibold hover:bg-gray-100 transition-colors"
              >
                Learn More
              </Link>
              <Link
                to="/contact"
                className="px-6 py-3 border-2 border-white text-white rounded text-base font-semibold hover:bg-white/10 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white py-16 md:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="mb-12 md:mb-16">
            <p className="text-sm sm:text-base text-gray-600 mb-4">
              Transform
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Expert Home Remodeling Services<br />for Your Dream Space
            </h2>
            <p className="text-base sm:text-lg text-gray-700 max-w-3xl">
              At Giza Renovations, we offer a wide range of services to transform your home into the perfect space for you and your family. From kitchen remodeling to bathroom renovations, home additions to outdoor living spaces, our team of experts will bring your vision to life.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12 mb-12">
            {/* Kitchen Remodeling */}
            <div className="flex flex-col">
              <div className="overflow-hidden rounded-lg mb-6 h-[280px]">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Ff8fc8faad3844710a06fef1ff8cf1884%2F2eec984ebff848cfad5cb2189c59ea88?format=webp&width=2400&height=3600"
                  alt="Kitchen Remodeling"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                Kitchen Remodeling
              </h3>
              <p className="text-base text-gray-700">
                Upgrade your kitchen with our professional remodeling services.
              </p>
            </div>

            {/* Bathroom Renovations */}
            <div className="flex flex-col">
              <div className="overflow-hidden rounded-lg mb-6 h-[280px]">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Ff8fc8faad3844710a06fef1ff8cf1884%2Fac5c3ddf2edb4260b85f7edc9669f170?format=webp&width=2400&height=3600"
                  alt="Bathroom Renovations"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                Bathroom Renovations
              </h3>
              <p className="text-base text-gray-700">
                Create a relaxing and stylish bathroom with our renovation expertise.
              </p>
            </div>

            {/* Home Additions */}
            <div className="flex flex-col">
              <div className="overflow-hidden rounded-lg mb-6 h-[280px]">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Ff8fc8faad3844710a06fef1ff8cf1884%2Fb7f0713cdfe147ce807cf8a42de328c1?format=webp&width=2400&height=3600"
                  alt="Home Additions"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                Home Additions
              </h3>
              <p className="text-base text-gray-700">
                Expand your living space with our seamless home addition solutions.
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <Link
              to="/about"
              className="inline-block px-6 py-3 bg-white text-gray-900 border-2 border-gray-900 rounded text-base font-semibold hover:bg-gray-50 transition-colors"
            >
              Learn More
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 text-gray-900 text-base font-semibold hover:gap-3 transition-all"
            >
              Contact Us
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Customized Solutions Section */}
      <section className="bg-white py-16 md:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 mb-12">
            {/* Left Column - Text Content */}
            <div>
              <p className="text-sm sm:text-base text-gray-600 mb-4">
                Transform
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
                Customized Solutions for Your Dream Home
              </h2>
            </div>

            {/* Right Column - Description and Buttons */}
            <div>
              <p className="text-base sm:text-lg text-gray-700 mb-8">
                At Giza Renovations, we understand that your home is a reflection of your unique style and personality. Our team of skilled craftsmen is dedicated to delivering exceptional results that exceed your expectations. With our commitment to customer satisfaction, we ensure that every project is tailored to your specific needs and preferences.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/about"
                  className="inline-block px-6 py-3 bg-white text-gray-900 border-2 border-gray-900 rounded text-base font-semibold hover:bg-gray-50 transition-colors"
                >
                  Learn More
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 text-gray-900 text-base font-semibold hover:gap-3 transition-all"
                >
                  Contact Us
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Full Width Image */}
          <div className="overflow-hidden rounded-lg">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2Ff8fc8faad3844710a06fef1ff8cf1884%2F85718f34dcc044a1b147ef7bab35b3c1?format=webp&width=2400&height=3600"
              alt="Modern luxury home with pool"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* Designing and Building Beautiful Spaces Section */}
      <section className="bg-white py-16 md:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left Column - Text Content */}
            <div>
              <p className="text-sm sm:text-base text-gray-600 mb-4">
                Quality
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
                Designing and Building Beautiful Spaces
              </h2>
              <p className="text-base sm:text-lg text-gray-700 mb-8">
                At Giza Renovations, we pride ourselves on our unique design-to-build process. From concept to completion, our team of experts will work closely with you to create beautiful and functional spaces that exceed your expectations. With a focus on sustainability, we use eco-friendly materials and practices to minimize our environmental impact.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/about"
                  className="inline-block px-6 py-3 bg-white text-gray-900 border-2 border-gray-900 rounded text-base font-semibold hover:bg-gray-50 transition-colors"
                >
                  Learn More
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 text-gray-900 text-base font-semibold hover:gap-3 transition-all"
                >
                  Contact Us
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="overflow-hidden rounded-lg">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Ff8fc8faad3844710a06fef1ff8cf1884%2Fd8b81825ea184b9c8f2185fe352d3a64?format=webp&width=2400&height=3600"
              alt="Modern bathroom design"
              className="w-full h-auto object-cover"
              />
            </div>
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
                  key={testimonial.id}
                  className={`transition-opacity duration-500 ${
                    index === currentTestimonial ? "opacity-100" : "opacity-0 absolute inset-0"
                  }`}
                >
                  <p className="text-xl md:text-2xl lg:text-3xl font-normal text-gray-900 leading-relaxed mb-8 max-w-4xl mx-auto">
                    "{testimonial.quote}"
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
    </div>
  );
}
