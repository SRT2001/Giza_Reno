import { Link } from "react-router-dom";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <svg
              width="102"
              height="34"
              viewBox="0 0 102 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-auto"
            >
              <path
                d="M0 0H17L8.5 17L0 34V0Z"
                fill="#FFD700"
              />
              <path
                d="M8.5 0H25.5L17 17L8.5 34V0Z"
                fill="#FFC000"
              />
            </svg>
            <div className="flex items-baseline gap-0">
              <span className="text-xl font-bold text-gray-900">Info</span>
              <span className="text-xl font-light text-gray-900 tracking-tight">INNOVATIONS</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              to="/services"
              className="text-gray-700 hover:text-gray-900 text-sm font-medium transition-colors"
            >
              Services
            </Link>
            <Link
              to="/projects"
              className="text-gray-700 hover:text-gray-900 text-sm font-medium transition-colors"
            >
              Projects
            </Link>
            <Link
              to="/about"
              className="px-5 py-2 border border-gray-300 rounded text-gray-900 text-sm font-medium hover:bg-gray-50 transition-colors"
            >
              About us
            </Link>
            <Link
              to="/contact"
              className="px-5 py-2 bg-brand-dark text-white rounded text-sm font-medium hover:bg-gray-800 transition-colors"
            >
              Contact Us
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-gray-700 hover:text-gray-900"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col gap-4">
              <Link
                to="/services"
                className="text-gray-700 hover:text-gray-900 text-sm font-medium transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                to="/projects"
                className="text-gray-700 hover:text-gray-900 text-sm font-medium transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Projects
              </Link>
              <Link
                to="/about"
                className="px-5 py-3 border border-gray-300 rounded text-gray-900 text-sm font-medium hover:bg-gray-50 transition-colors text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                About us
              </Link>
              <Link
                to="/contact"
                className="px-5 py-3 bg-brand-dark text-white rounded text-sm font-medium hover:bg-gray-800 transition-colors text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
