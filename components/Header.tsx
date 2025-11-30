'use client';

import { useState, useEffect } from 'react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-dark-900/90 backdrop-blur-md py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo - Replace with your own */}
        <a href="#" className="text-2xl font-bold italic text-white">
          {/* You can replace this with an image logo */}
          <span className="font-light">Havish Komatreddy's Portfolio</span>
        </a>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-10">
          <a href="#home" className="nav-link text-sm tracking-wide">
            Home
          </a>
          <a href="#projects" className="nav-link text-sm tracking-wide">
            Projects
          </a>
          <a href="#experience" className="nav-link text-sm tracking-wide">
            Experience
          </a>
          <a href="#contact" className="nav-link text-sm tracking-wide">
            Contact
          </a>
        </nav>

        {/* Mobile menu button */}
        <button className="md:hidden text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>
    </header>
  );
}

