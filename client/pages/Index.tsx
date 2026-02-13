import { Link } from "react-router-dom";

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Background Image */}
      <section className="relative h-[600px] md:h-[700px] lg:h-[800px] w-full overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://cdn.builder.io/api/v1/image/assets%2Ff8fc8faad3844710a06fef1ff8cf1884%2Fe7bdbb23a2704eb8930a26f6d9d2bb9b?format=webp&width=1600&height=2400')`,
          }}
        >
          {/* Linear gradient overlay from left to right for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-black/10"></div>
        </div>

        {/* Hero Content */}
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
              Transform Your Home<br />
              with Giza Renovations
            </h1>
            <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-xl">
              Experience the beauty and functionality of our expert home remodeling services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/projects"
                className="px-8 py-3 bg-white text-gray-900 rounded text-base font-semibold hover:bg-gray-100 transition-colors text-center"
              >
                Explore Our Work
              </Link>
              <Link
                to="/contact"
                className="px-8 py-3 border-2 border-white text-white rounded text-base font-semibold hover:bg-white/10 transition-colors text-center"
              >
                Get A Free Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Experience the Difference Section */}
      <section className="bg-white py-16 md:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left Column - Image */}
            <div className="order-2 lg:order-1">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Ff8fc8faad3844710a06fef1ff8cf1884%2F15f789b43626491faf6861b10502ffd3?format=webp&width=1600&height=2400"
                alt="Modern kitchen renovation with bar stools and dining area"
                className="w-full h-auto rounded-lg shadow-lg object-cover"
              />
            </div>

            {/* Right Column - Content */}
            <div className="order-1 lg:order-2">
              <p className="text-sm font-semibold text-gray-600 uppercase tracking-wider mb-4">
                Transform
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                Experience the Difference with Giza Renovations
              </h2>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-8">
                At Giza Renovations, we pride ourselves on providing exceptional home remodeling services.
                With our team of experienced professionals, high-quality materials, and personalized service,
                we ensure that every project is completed to the highest standards.
              </p>

              {/* Feature List */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-gray-700 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <span className="text-gray-900 font-medium">Experienced Professionals</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-gray-700 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                  <span className="text-gray-900 font-medium">Quality Materials</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-gray-700 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  <span className="text-gray-900 font-medium">Personalized Service</span>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/about"
                  className="px-6 py-3 border-2 border-gray-900 text-gray-900 rounded text-base font-semibold hover:bg-gray-900 hover:text-white transition-colors text-center"
                >
                  Learn More
                </Link>
                <Link
                  to="/contact"
                  className="px-6 py-3 bg-transparent text-gray-900 rounded text-base font-semibold hover:text-gray-600 transition-colors text-center flex items-center justify-center gap-2"
                >
                  Get Started
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expert Remodeling Services Section */}
      <section className="bg-gray-50 py-16 md:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left Column - Content */}
            <div className="order-1 lg:order-1">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                Transform Your Home with Giza Renovations' Expert Remodeling Services
              </h2>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-8">
                At Giza Renovations, we specialize in a wide range of home remodeling services, including
                kitchen remodeling, bathroom renovations, and home extensions. Our team of experienced
                professionals is dedicated to delivering high-quality craftsmanship and exceptional customer
                service.
              </p>

              {/* Feature List */}
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-gray-700 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  <span className="text-gray-900 font-medium">Revitalize your kitchen with our expert remodeling solutions.</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-gray-700 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  <span className="text-gray-900 font-medium">Upgrade your bathroom with our innovative design concepts.</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-gray-700 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                  </svg>
                  <span className="text-gray-900 font-medium">Expand your living space with our seamless home extension solutions.</span>
                </div>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="order-2 lg:order-2">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Ff8fc8faad3844710a06fef1ff8cf1884%2F2cbb7f16d2704d39bf08b12c7eb723b3?format=webp&width=1600&height=2400"
                alt="Modern luxury home with pool and outdoor living space"
                className="w-full h-auto rounded-lg shadow-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="bg-white py-16 md:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-gray-600 uppercase tracking-wider mb-4">
              Projects
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Transforming Homes with Excellence
            </h2>
            <p className="text-lg text-gray-600">
              Explore our diverse range of completed projects.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="space-y-8">
            {/* Project Card 1 - Modern Kitchen Renovation */}
            <div className="group">
              <div className="overflow-hidden rounded-lg mb-6">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Ff8fc8faad3844710a06fef1ff8cf1884%2F1d11e29c7b3044eebf58b9f614dd32a1?format=webp&width=1600&height=2400"
                  alt="Modern Kitchen Renovation with sleek cabinetry and marble countertops"
                  className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Modern Kitchen Renovation
                  </h3>
                  <p className="text-gray-600">
                    Experience the beauty and functionality of our kitchen renovations.
                  </p>
                </div>
                <Link
                  to="/projects"
                  className="flex-shrink-0 flex items-center gap-2 text-gray-900 font-semibold hover:text-gray-600 transition-colors"
                >
                  View Project
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Project Card 2 - Luxurious Bathroom Remodel */}
            <div className="group">
              <div className="overflow-hidden rounded-lg mb-6">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Ff8fc8faad3844710a06fef1ff8cf1884%2F213c7665abde47b5840d803798176e20?format=webp&width=1600&height=2400"
                  alt="Luxurious Bathroom Remodel with modern fixtures and elegant design"
                  className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Luxurious Bathroom Remodel
                  </h3>
                  <p className="text-gray-600">
                    Indulge in the elegance and comfort of our bathroom remodels.
                  </p>
                </div>
                <Link
                  to="/projects"
                  className="flex-shrink-0 flex items-center gap-2 text-gray-900 font-semibold hover:text-gray-600 transition-colors"
                >
                  View Project
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* View All Button */}
          <div className="text-center mt-12">
            <Link
              to="/projects"
              className="inline-block px-8 py-3 border-2 border-gray-900 text-gray-900 rounded text-base font-semibold hover:bg-gray-900 hover:text-white transition-colors"
            >
              View all
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section with Background */}
      <section className="relative h-[400px] md:h-[500px] w-full overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://cdn.builder.io/api/v1/image/assets%2Ff8fc8faad3844710a06fef1ff8cf1884%2Fe71d1e67c5904643894d25e402ccfc29?format=webp&width=1600&height=2400')`,
          }}
        >
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* CTA Content */}
        <div className="relative h-full flex items-center justify-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 drop-shadow-lg">
              Transform Your Home with Giza
            </h2>
            <p className="text-lg sm:text-xl text-white/95 mb-8 max-w-2xl mx-auto drop-shadow-md">
              Schedule a consultation today to discuss your home remodeling needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="px-8 py-3 bg-white text-gray-900 rounded text-base font-semibold hover:bg-gray-100 transition-colors shadow-lg"
              >
                Schedule
              </Link>
              <Link
                to="/services"
                className="px-8 py-3 bg-gray-600 text-white rounded text-base font-semibold hover:bg-gray-700 transition-colors shadow-lg"
              >
                Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Clients Testimonials Section */}
      <section className="bg-white py-16 md:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Clients Testimonials
            </h2>
            <p className="text-lg text-gray-600">
              Hear what our satisfied clients have to say
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Testimonial Card 1 */}
            <div className="border border-gray-300 rounded-lg p-6 bg-white">
              <p className="text-gray-900 mb-6 leading-relaxed">
                "We hired Giza Renovations to completely remodel our 1970s kitchen, and the results are absolutely stunning. They handled everything from the initial design consultation to the final walkthrough with incredible professionalism. The project finished two days ahead of schedule!"
              </p>
              <div>
                <p className="font-bold text-gray-900">David & Amanda Richardson</p>
                <p className="text-sm text-gray-600">Kitchen Remodel - Coral Gables, FL</p>
              </div>
            </div>

            {/* Testimonial Card 2 */}
            <div className="border border-gray-300 rounded-lg p-6 bg-white">
              <p className="text-gray-900 mb-6 leading-relaxed">
                "The team at Giza Renovations transformed our master bathroom into a spa-like retreat. Their attention to detail, from the tile work to the custom vanity installation, was impeccable. Communication throughout the project was excellent, and they respected our home and schedule."
              </p>
              <div>
                <p className="font-bold text-gray-900">Sarah Mendoza</p>
                <p className="text-sm text-gray-600">Bathroom Renovation - Miami Beach, FL</p>
              </div>
            </div>

            {/* Testimonial Card 3 */}
            <div className="border border-gray-300 rounded-lg p-6 bg-white">
              <p className="text-gray-900 mb-6 leading-relaxed">
                "After getting quotes from five different contractors, we chose Giza Renovations for our basement finishing project. Best decision we made! They provided creative solutions to maximize the space and stayed within our budget. The quality of their work is outstanding."
              </p>
              <div>
                <p className="font-bold text-gray-900">Michael Chen</p>
                <p className="text-sm text-gray-600">Basement Remodel - Kendall, FL</p>
              </div>
            </div>

            {/* Testimonial Card 4 */}
            <div className="border border-gray-300 rounded-lg p-6 bg-white">
              <p className="text-gray-900 mb-6 leading-relaxed">
                "Our 1950s home needed major updates, and Giza Renovations delivered beyond our expectations. They carefully preserved the home's character while modernizing every space. The craftsmanship is evident in every corner, and their team was a pleasure to work with."
              </p>
              <div>
                <p className="font-bold text-gray-900">Jennifer & Tom Sullivan</p>
                <p className="text-sm text-gray-600">Whole Home Renovation - Pinecrest, FL</p>
              </div>
            </div>

            {/* Testimonial Card 5 */}
            <div className="border border-gray-300 rounded-lg p-6 bg-white">
              <p className="text-gray-900 mb-6 leading-relaxed">
                "From start to finish, Giza Renovations was professional, punctual, and incredibly skilled. Our home extension blends seamlessly with the existing structure, and the added 400 square feet has completely transformed how we use our space. Worth every penny!"
              </p>
              <div>
                <p className="font-bold text-gray-900">Roberto & Maria Garcia</p>
                <p className="text-sm text-gray-600">Home Extension - Coconut Grove, FL</p>
              </div>
            </div>

            {/* Testimonial Card 6 */}
            <div className="border border-gray-300 rounded-lg p-6 bg-white">
              <p className="text-gray-900 mb-6 leading-relaxed">
                "Outstanding service from consultation to completion! Giza Renovations helped us navigate the permit process, provided 3D renderings of the design, and completed our guest suite renovation in just six weeks. Their attention to detail and commitment to quality is unmatched."
              </p>
              <div>
                <p className="font-bold text-gray-900">Lisa Thompson</p>
                <p className="text-sm text-gray-600">Guest Suite Addition - Aventura, FL</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
