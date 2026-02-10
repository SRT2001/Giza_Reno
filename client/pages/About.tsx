import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Background Image */}
      <section className="relative h-[600px] md:h-[700px] lg:h-[800px] w-full overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://cdn.builder.io/api/v1/image/assets%2Ff8fc8faad3844710a06fef1ff8cf1884%2F5770ed230d7d4ff3ad4c40592be54e0e?format=webp&width=800&height=1200')`,
          }}
        >
          {/* Gradient overlay from left to right for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/20"></div>
        </div>

        {/* Hero Content */}
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 drop-shadow-lg">
              About Giza Renovations
            </h1>
            <p className="text-lg sm:text-xl text-white/95 mb-8 max-w-xl drop-shadow-md">
              Excellence in home remodeling since 2010. Transforming spaces with quality craftsmanship and innovative design.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 md:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <p className="text-sm font-semibold text-gray-600 uppercase tracking-wider mb-4">
                Our Story
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                Building Dreams, Creating Homes
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Founded in 2010, Giza Renovations has been at the forefront of home transformation in the region. 
                  Our journey began with a simple mission: to help homeowners realize their dream spaces through 
                  exceptional craftsmanship and personalized service.
                </p>
                <p>
                  Over the years, we've completed hundreds of projects, from intimate bathroom renovations to 
                  comprehensive whole-home remodels. Each project reflects our commitment to quality, attention 
                  to detail, and our passion for creating beautiful, functional spaces.
                </p>
                <p>
                  What sets us apart is our collaborative approach. We work closely with our clients throughout 
                  every phase of the project, ensuring that their vision is brought to life with precision and care.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="text-4xl font-bold text-brand-yellow mb-2">500+</div>
                <p className="text-gray-600">Projects Completed</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="text-4xl font-bold text-brand-yellow mb-2">14+</div>
                <p className="text-gray-600">Years Experience</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="text-4xl font-bold text-brand-yellow mb-2">98%</div>
                <p className="text-gray-600">Client Satisfaction</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="text-4xl font-bold text-brand-yellow mb-2">50+</div>
                <p className="text-gray-600">Expert Team Members</p>
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

      {/* CTA Section */}
      <section className="bg-brand-dark py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Let's discuss how we can transform your home into the space of your dreams
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-block px-8 py-4 bg-white text-gray-900 rounded text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get A Free Quote
            </Link>
            <Link
              to="/projects"
              className="inline-block px-8 py-4 border-2 border-white text-white rounded text-lg font-semibold hover:bg-white/10 transition-colors"
            >
              View Our Projects
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
