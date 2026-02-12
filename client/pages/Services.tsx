import { Link } from "react-router-dom";

export default function Services() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Background Image */}
      <section className="relative h-[400px] md:h-[450px] lg:h-[500px] w-full overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://cdn.builder.io/api/v1/image/assets%2Ff8fc8faad3844710a06fef1ff8cf1884%2F76a0742abef442269e1fa900dd20b789?format=webp&width=1600&height=2400')`,
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
              <div className="overflow-hidden rounded-lg mb-6">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Ff8fc8faad3844710a06fef1ff8cf1884%2F2eec984ebff848cfad5cb2189c59ea88?format=webp&width=1600&height=2400"
                  alt="Kitchen Remodeling"
                  className="w-full h-auto object-cover"
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
              <div className="overflow-hidden rounded-lg mb-6">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Ff8fc8faad3844710a06fef1ff8cf1884%2Fac5c3ddf2edb4260b85f7edc9669f170?format=webp&width=1600&height=2400"
                  alt="Bathroom Renovations"
                  className="w-full h-auto object-cover"
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
              <div className="overflow-hidden rounded-lg mb-6">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Ff8fc8faad3844710a06fef1ff8cf1884%2Fb7f0713cdfe147ce807cf8a42de328c1?format=webp&width=1600&height=2400"
                  alt="Home Additions"
                  className="w-full h-auto object-cover"
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
    </div>
  );
}
