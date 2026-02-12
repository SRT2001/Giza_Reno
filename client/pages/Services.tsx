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
    </div>
  );
}
