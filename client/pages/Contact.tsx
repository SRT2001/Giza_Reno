import { Link } from "react-router-dom";
import { useState } from "react";

export default function Contact() {
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
            backgroundImage: `url('https://cdn.builder.io/api/v1/image/assets%2Ff8fc8faad3844710a06fef1ff8cf1884%2F4ba7cd5181a7426abd3d157601804488?format=webp&width=2400&height=1600')`,
          }}
        >
          {/* Gradient overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/20"></div>
        </div>

        {/* Hero Content */}
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center">
          <div className="max-w-3xl">
            <p className="text-sm sm:text-base text-white/90 mb-4 drop-shadow-md">
              Connect
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 drop-shadow-lg">
              Let's build together
            </h1>
            <p className="text-base sm:text-lg text-white/90 mb-8 max-w-2xl mx-auto drop-shadow-md">
              Tell us about your vision and we'll make it real with precision and care
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button
                className="px-6 py-3 bg-white text-gray-900 rounded text-base font-semibold hover:bg-gray-100 transition-colors"
              >
                Inquire
              </button>
              <Link
                to="/projects"
                className="px-6 py-3 bg-[#D4AF37] text-gray-900 rounded text-base font-semibold hover:bg-[#C19B2B] transition-colors"
              >
                Portfolio
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 md:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Column - Contact Info */}
            <div>
              <p className="text-sm sm:text-base text-gray-900 mb-4 font-medium">
                Connect
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Your details
              </h2>
              <p className="text-base sm:text-lg text-gray-700 mb-8">
                Share your project scope and timeline with us
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href="mailto:hello@gizarenovation.com" className="text-base text-gray-900 hover:underline">
                    hello@gizarenovation.com
                  </a>
                </div>

                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <a href="tel:+15550000000" className="text-base text-gray-900 hover:underline">
                    +1 (555) 000-0000
                  </a>
                </div>

                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-base text-gray-900">
                    123 Sample St, Sydney NSW 2000 AU
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div>
              <form className="space-y-6">
                {/* First Name and Last Name */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-900 mb-2">
                      First name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      className="w-full px-4 py-3 border border-gray-900 rounded focus:outline-none focus:ring-2 focus:ring-gray-900"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-900 mb-2">
                      Last name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      className="w-full px-4 py-3 border border-gray-900 rounded focus:outline-none focus:ring-2 focus:ring-gray-900"
                    />
                  </div>
                </div>

                {/* Email and Phone Number */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 border border-gray-900 rounded focus:outline-none focus:ring-2 focus:ring-gray-900"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-900 mb-2">
                      Phone number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 border border-gray-900 rounded focus:outline-none focus:ring-2 focus:ring-gray-900"
                    />
                  </div>
                </div>

                {/* What's your inquiry about? */}
                <div>
                  <label htmlFor="inquiry" className="block text-sm font-medium text-gray-900 mb-2">
                    What's your inquiry about?
                  </label>
                  <select
                    id="inquiry"
                    name="inquiry"
                    className="w-full px-4 py-3 border border-gray-900 rounded focus:outline-none focus:ring-2 focus:ring-gray-900 bg-white appearance-none"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='%23000' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3E%3C/svg%3E")`,
                      backgroundPosition: 'right 1rem center',
                      backgroundRepeat: 'no-repeat',
                      backgroundSize: '1.5em 1.5em',
                    }}
                  >
                    <option value="">Select one...</option>
                    <option value="kitchen">Kitchen Remodeling</option>
                    <option value="bathroom">Bathroom Renovation</option>
                    <option value="addition">Home Addition</option>
                    <option value="general">General Inquiry</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* How would you describe yourself? */}
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-4">
                    How would you describe yourself?
                  </label>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="flex items-center gap-3">
                      <input
                        type="radio"
                        id="homeowner"
                        name="userType"
                        value="homeowner"
                        className="w-4 h-4 border-gray-900"
                      />
                      <label htmlFor="homeowner" className="text-sm text-gray-900">
                        Homeowner
                      </label>
                    </div>
                    <div className="flex items-center gap-3">
                      <input
                        type="radio"
                        id="interior-designer"
                        name="userType"
                        value="interior-designer"
                        className="w-4 h-4 border-gray-900"
                      />
                      <label htmlFor="interior-designer" className="text-sm text-gray-900">
                        Interior designer
                      </label>
                    </div>
                    <div className="flex items-center gap-3">
                      <input
                        type="radio"
                        id="architect"
                        name="userType"
                        value="architect"
                        className="w-4 h-4 border-gray-900"
                      />
                      <label htmlFor="architect" className="text-sm text-gray-900">
                        Architect
                      </label>
                    </div>
                    <div className="flex items-center gap-3">
                      <input
                        type="radio"
                        id="property-developer"
                        name="userType"
                        value="property-developer"
                        className="w-4 h-4 border-gray-900"
                      />
                      <label htmlFor="property-developer" className="text-sm text-gray-900">
                        Property developer
                      </label>
                    </div>
                    <div className="flex items-center gap-3">
                      <input
                        type="radio"
                        id="real-estate"
                        name="userType"
                        value="real-estate"
                        className="w-4 h-4 border-gray-900"
                      />
                      <label htmlFor="real-estate" className="text-sm text-gray-900">
                        Real estate agent
                      </label>
                    </div>
                    <div className="flex items-center gap-3">
                      <input
                        type="radio"
                        id="other"
                        name="userType"
                        value="other"
                        className="w-4 h-4 border-gray-900"
                      />
                      <label htmlFor="other" className="text-sm text-gray-900">
                        Other
                      </label>
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-900 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    placeholder="Tell us more..."
                    className="w-full px-4 py-3 border border-gray-900 rounded focus:outline-none focus:ring-2 focus:ring-gray-900 resize-none"
                  />
                </div>

                {/* Terms Checkbox */}
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="terms"
                    name="terms"
                    className="w-4 h-4 mt-1 border-gray-900 rounded"
                  />
                  <label htmlFor="terms" className="text-sm text-gray-900">
                    I agree to the terms
                  </label>
                </div>

                {/* Submit Button */}
                <div>
                  <button
                    type="submit"
                    className="px-8 py-4 bg-gray-900 text-white rounded text-base font-semibold hover:bg-gray-800 transition-colors"
                  >
                    Send
                  </button>
                </div>
              </form>
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

      {/* Map Section */}
      <section className="w-full">
        <div className="w-full h-[400px] md:h-[500px] lg:h-[600px]">
          <iframe
            width="100%"
            height="100%"
            frameBorder="0"
            title="Giza Renovations Miami Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3590.1234567890!2d-80.19!3d25.76!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b2b2b2b2b2b%3A0x1234567890!2sDowntown%20Miami!5e0!3m2!1sen!2sus!4v1234567890"
            style={{ border: 0, filter: 'grayscale(100%) contrast(0.9)' }}
            allowFullScreen=""
            loading="lazy"
          />
        </div>
      </section>
    </div>
  );
}
