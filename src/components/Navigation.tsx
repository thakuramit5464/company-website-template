"use client";

import { useState, useEffect } from "react";
import Logo from "./Logo";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-900/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a
            href="#"
            onClick={closeMobileMenu}
            className="flex items-center"
          >
            <Logo width={180} height={45} />
          </a>
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <a
              href="#services"
              className="text-slate-300 hover:text-white transition-colors duration-300 text-sm lg:text-base"
            >
              Services
            </a>
            <a
              href="#technologies"
              className="text-slate-300 hover:text-white transition-colors duration-300 text-sm lg:text-base"
            >
              Technologies
            </a>
            <a
              href="#contact"
              className="text-slate-300 hover:text-white transition-colors duration-300 text-sm lg:text-base"
            >
              Contact
            </a>
            <a
              href="#contact"
              className="px-4 lg:px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 text-sm lg:text-base"
            >
              Get Quote
            </a>
          </div>
          {/* Mobile menu button */}
          <button
            className="md:hidden text-slate-300 hover:text-white p-2"
            aria-label="Menu"
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
        
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-900/98 backdrop-blur-md border-t border-slate-800">
            <div className="px-4 py-4 space-y-4">
              <a
                href="#services"
                className="block text-slate-300 hover:text-white transition-colors duration-300 py-2"
                onClick={closeMobileMenu}
              >
                Services
              </a>
              <a
                href="#technologies"
                className="block text-slate-300 hover:text-white transition-colors duration-300 py-2"
                onClick={closeMobileMenu}
              >
                Technologies
              </a>
              <a
                href="#contact"
                className="block text-slate-300 hover:text-white transition-colors duration-300 py-2"
                onClick={closeMobileMenu}
              >
                Contact
              </a>
              <a
                href="#contact"
                className="block w-full text-center px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                onClick={closeMobileMenu}
              >
                Get Quote
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
