import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Background Image */}
      <section className="relative h-[400px] md:h-[450px] lg:h-[500px] w-full overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://cdn.builder.io/api/v1/image/assets%2Ff8fc8faad3844710a06fef1ff8cf1884%2F5770ed230d7d4ff3ad4c40592be54e0e?format=webp&width=1600&height=2400')`,
          }}
        >
          {/* Gradient overlay from left to right for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/20"></div>
        </div>

        {/* Hero Content */}
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-start justify-center">
          <div className="max-w-3xl">
            <p className="text-sm sm:text-base text-white/90 mb-4 drop-shadow-md">
              Transform
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 drop-shadow-lg">
              Excellence in Remodeling
            </h1>
            <p className="text-base sm:text-lg text-white/90 mb-8 max-w-2xl drop-shadow-md">
              Giza Renovations is dedicated to providing exceptional home remodeling services that exceed expectations.
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

      {/* Our Story Section with Image */}
      <section className="bg-white py-16 md:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column - Content */}
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                Our Story
              </h2>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                Giza Renovations is a leading home remodeling company that has been transforming houses into dream homes for over a decade. Our mission is to provide exceptional craftsmanship and personalized service to our clients, ensuring their satisfaction and exceeding their expectations. With a vision to create beautiful and functional spaces, we take pride in our work and strive to deliver projects that enhance the value and comfort of every home. At Giza Renovations, our core values of integrity, professionalism, and innovation drive us to stand out in the home remodeling industry and make a positive impact on the lives of our clients.
              </p>
            </div>

            {/* Right Column - Image */}
            <div className="order-1 lg:order-2">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Ff8fc8faad3844710a06fef1ff8cf1884%2Fb46ba7a89a3c47b9ae2cdbf26debb6b2?format=webp&width=1600&height=2400"
                alt="Modern cityscape with luxury buildings at sunset"
                className="w-full h-auto rounded-lg shadow-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-50 py-16 md:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="text-4xl md:text-5xl font-bold text-brand-yellow mb-2">500+</div>
              <p className="text-gray-600 font-medium">Projects Completed</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="text-4xl md:text-5xl font-bold text-brand-yellow mb-2">14+</div>
              <p className="text-gray-600 font-medium">Years Experience</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="text-4xl md:text-5xl font-bold text-brand-yellow mb-2">98%</div>
              <p className="text-gray-600 font-medium">Client Satisfaction</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="text-4xl md:text-5xl font-bold text-brand-yellow mb-2">50+</div>
              <p className="text-gray-600 font-medium">Expert Team Members</p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section - Building Dreams */}
      <section className="bg-white py-16 md:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Column - Heading and CTA */}
            <div className="order-2 lg:order-1">
              <p className="text-sm font-semibold text-gray-600 uppercase tracking-wider mb-4">
                Transform
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-8">
                Building Dreams, One Renovation at a Time
              </h2>
              <Link
                to="/contact"
                className="inline-block px-6 py-3 border-2 border-gray-900 text-gray-900 rounded text-base font-semibold hover:bg-gray-900 hover:text-white transition-colors"
              >
                Get Started
              </Link>
            </div>

            {/* Right Column - Timeline */}
            <div className="order-1 lg:order-2">
              <div className="space-y-8">
                {/* Timeline Item 1 */}
                <div className="flex gap-6">
                  <div className="flex flex-col items-center flex-shrink-0">
                    <div className="w-12 h-12 rounded-full border-2 border-gray-900 bg-white flex items-center justify-center">
                      <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    </div>
                    <div className="w-0.5 h-full bg-gray-300 mt-2"></div>
                  </div>
                  <div className="pb-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Our Beginnings</h3>
                    <p className="text-gray-700">
                      Founded in 2005, Giza Renovations started as a small family-owned business.
                    </p>
                  </div>
                </div>

                {/* Timeline Item 2 */}
                <div className="flex gap-6">
                  <div className="flex flex-col items-center flex-shrink-0">
                    <div className="w-12 h-12 rounded-full border-2 border-gray-900 bg-white flex items-center justify-center">
                      <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                      </svg>
                    </div>
                    <div className="w-0.5 h-full bg-gray-300 mt-2"></div>
                  </div>
                  <div className="pb-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Expanding Reach</h3>
                    <p className="text-gray-700">
                      In 2010, we expanded our services to cover the entire state, serving more customers.
                    </p>
                  </div>
                </div>

                {/* Timeline Item 3 */}
                <div className="flex gap-6">
                  <div className="flex flex-col items-center flex-shrink-0">
                    <div className="w-12 h-12 rounded-full border-2 border-gray-900 bg-white flex items-center justify-center">
                      <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <div className="w-0.5 h-full bg-gray-300 mt-2"></div>
                  </div>
                  <div className="pb-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Innovation Driven</h3>
                    <p className="text-gray-700">
                      Constantly innovating, we introduced new techniques and materials to elevate our projects.
                    </p>
                  </div>
                </div>

                {/* Timeline Item 4 */}
                <div className="flex gap-6">
                  <div className="flex flex-col items-center flex-shrink-0">
                    <div className="w-12 h-12 rounded-full border-2 border-gray-900 bg-white flex items-center justify-center">
                      <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Award-Winning Excellence</h3>
                    <p className="text-gray-700">
                      Recognized for our exceptional work, we have received multiple industry awards.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="bg-gray-50 py-16 md:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-gray-600 uppercase tracking-wider mb-4">
              Our Values
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              What Drives Us
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our core values guide every decision we make and every project we undertake
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-brand-yellow rounded-lg mb-6 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Quality First</h3>
              <p className="text-gray-600">
                We never compromise on the quality of materials or workmanship. Every project is executed with 
                meticulous attention to detail.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-brand-yellow rounded-lg mb-6 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Client-Centered</h3>
              <p className="text-gray-600">
                Your satisfaction is our priority. We listen, collaborate, and ensure your vision becomes reality 
                through transparent communication.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-brand-yellow rounded-lg mb-6 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Innovation</h3>
              <p className="text-gray-600">
                We stay ahead of industry trends, incorporating the latest design concepts and sustainable 
                practices into every project.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-gray-600 uppercase tracking-wider mb-4">
              Our Team
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Meet the Experts
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our skilled professionals bring years of experience and passion to every project
            </p>
          </div>

          <div className="text-center">
            <p className="text-gray-700 leading-relaxed mb-8 max-w-3xl mx-auto">
              Our team consists of licensed contractors, skilled craftsmen, experienced designers, and dedicated 
              project managers who work together seamlessly to deliver exceptional results. We invest in ongoing 
              training and development to ensure our team stays at the cutting edge of renovation techniques and 
              technologies.
            </p>
            <Link
              to="/contact"
              className="inline-block px-8 py-4 bg-brand-dark text-white rounded text-lg font-semibold hover:bg-gray-800 transition-colors"
            >
              Work With Us
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section with Background Image */}
      <section className="relative py-16 md:py-24 w-full overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://cdn.builder.io/api/v1/image/assets%2Ff8fc8faad3844710a06fef1ff8cf1884%2Fa8d3e9969dfa42b29bcc8189f580c7d8?format=webp&width=1600&height=2400')`,
          }}
        >
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* CTA Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-white/95 mb-10 max-w-2xl mx-auto drop-shadow-md">
            Let's discuss how we can transform your home into the space of your dreams
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-block px-8 py-4 bg-white text-gray-900 rounded text-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
            >
              Get A Free Quote
            </Link>
            <Link
              to="/projects"
              className="inline-block px-8 py-4 border-2 border-white text-white rounded text-lg font-semibold hover:bg-white/10 transition-colors shadow-lg"
            >
              View Our Projects
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
