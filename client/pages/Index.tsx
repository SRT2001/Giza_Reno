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
            backgroundImage: `url('https://cdn.builder.io/api/v1/image/assets%2Ff8fc8faad3844710a06fef1ff8cf1884%2Fe7bdbb23a2704eb8930a26f6d9d2bb9b?format=webp&width=800&height=1200')`,
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
                src="https://cdn.builder.io/api/v1/image/assets%2Ff8fc8faad3844710a06fef1ff8cf1884%2F979f3f48b2e84b87974bd3fb148178e9?format=webp&width=800&height=1200"
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

      {/* CTA Section */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ready to Transform Your Home?
          </h2>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Get a free consultation and quote for your renovation project today
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-4 bg-brand-dark text-white rounded text-lg font-semibold hover:bg-gray-800 transition-colors"
          >
            Get A Free Quote
          </Link>
        </div>
      </section>
    </div>
  );
}
