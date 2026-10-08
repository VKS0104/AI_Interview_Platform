import { useState } from 'react';
import { Link } from 'react-router-dom';

/**
 * Minimal Navbar component for AI Interview Platform.
 * Contains ONLY links to real sections (#features, #how-it-works) and routes (/login, /signup).
 * No dead links or placeholder navigation items.
 */
export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-[#FAFAF8]/90 backdrop-blur-sm border-b border-[#E6E4E1] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo & Brand Wordmark */}
          <Link
            to="/"
            className="flex items-center gap-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7C3AED] rounded-lg"
          >
            <div className="w-8 h-8 rounded-lg bg-[#111111] text-white flex items-center justify-center font-bold text-xs tracking-tight shadow-sm">
              AI
            </div>
            <span className="text-[17px] font-semibold tracking-tight text-[#111111]">
              AI Interview Platform
            </span>
          </Link>

          {/* Desktop Navigation Links (Only existing sections) */}
          <div className="hidden md:flex items-center gap-8 text-[14px] text-[#666666] font-medium">
            <a href="#features" className="hover:text-[#111111] transition-colors duration-150">
              Features
            </a>
            <a href="#how-it-works" className="hover:text-[#111111] transition-colors duration-150">
              How it works
            </a>
          </div>

          {/* Desktop Auth Actions */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              to="/login"
              className="text-[14px] font-medium text-[#111111] hover:text-[#2A2A2A] px-3.5 py-2 rounded-lg transition-colors duration-150"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="text-[14px] font-medium bg-[#111111] hover:bg-[#2A2A2A] text-white px-4 py-2 rounded-lg shadow-sm transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#111111]"
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile Menu Hamburger Button */}
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-[#111111] p-2 rounded-lg hover:bg-[#F6F5F3] focus:outline-none"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#E6E4E1] bg-white px-4 pt-4 pb-6 space-y-3">
          <div className="flex flex-col space-y-2 text-[15px] font-medium text-[#666666]">
            <a
              href="#features"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-[#111111]"
            >
              Features
            </a>
            <a
              href="#how-it-works"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-[#111111]"
            >
              How it works
            </a>
          </div>

          <div className="pt-4 border-t border-[#E6E4E1] flex flex-col gap-2.5">
            <Link
              to="/login"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 rounded-lg border border-[#E6E4E1] text-[14px] font-medium text-[#111111]"
            >
              Login
            </Link>
            <Link
              to="/signup"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 rounded-lg bg-[#111111] text-[14px] font-medium text-white shadow-sm"
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
