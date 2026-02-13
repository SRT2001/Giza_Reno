import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Background Image */}
      <section className="relative h-[400px] md:h-[450px] lg:h-[500px] w-full overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://cdn.builder.io/api/v1/image/assets%2Ff8fc8faad3844710a06fef1ff8cf1884%2Fe683fd60462c458c977ddd99947ed59d?format=webp&width=2400&height=1600')`,
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
    </div>
  );
}
