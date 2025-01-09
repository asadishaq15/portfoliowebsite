import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/sampleLogo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="fixed w-full z-50 flex justify-center items-center px-4 top-6">
      <nav
        className={`transition-all duration-300 rounded-full max-w-4xl w-full ${
          scrolled ? "bg-black/30 backdrop-blur-[8px]" : "bg-transparent"
        } ${isOpen ? "rounded-b-none rounded-t-full" : "rounded-full"}`}
      >
        <div className="flex justify-between items-center px-6 py-4">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <span className="text-white font-syne">Logo</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              to="/"
              className="text-white relative group transition-all duration-500 font-syne text-sm px-6 py-2 rounded-full before:content-[''] before:absolute before:inset-0 before:rounded-full before:transition-all before:duration-300 hover:text-orange-500 before:opacity-0 hover:before:opacity-100 before:bg-white/20"
            >
              Home
              <span className="absolute bottom-0 left-1/2 w-10 h-0.5 bg-orange-500 transform -translate-x-1/2 scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></span>
            </Link>
            <Link
              to="/projects"
              className="text-white relative group transition-all duration-500 font-syne text-sm px-6 py-2 rounded-full before:content-[''] before:absolute before:inset-0 before:rounded-full before:transition-all before:duration-300 hover:text-orange-500 before:opacity-0 hover:before:opacity-100 before:bg-white/20"
            >
              Projects
              <span className="absolute bottom-0 left-1/2 w-10 h-0.5 bg-orange-500 transform -translate-x-1/2 scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></span>
            </Link>
            <Link
              to="/albums"
              className="text-white relative group transition-all duration-500 font-syne text-sm px-6 py-2 rounded-full before:content-[''] before:absolute before:inset-0 before:rounded-full before:transition-all before:duration-300 hover:text-orange-500 before:opacity-0 hover:before:opacity-100 before:bg-white/20"
            >
              Albums
              <span className="absolute bottom-0 left-1/2 w-10 h-0.5 bg-orange-500 transform -translate-x-1/2 scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></span>
            </Link>
            <Link
              to="/about"
              className="text-white relative group transition-all duration-500 font-syne text-sm px-6 py-2 rounded-full before:content-[''] before:absolute before:inset-0 before:rounded-full before:transition-all before:duration-300 hover:text-orange-500 before:opacity-0 hover:before:opacity-100 before:bg-white/20"
            >
              About
              <span className="absolute bottom-0 left-1/2 w-10 h-0.5 bg-orange-500 transform -translate-x-1/2 scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></span>
            </Link>
            <Link
              to="/services"
              className="text-white relative group transition-all duration-500 font-syne text-sm px-6 py-2 rounded-full before:content-[''] before:absolute before:inset-0 before:rounded-full before:transition-all before:duration-300 hover:text-orange-500 before:opacity-0 hover:before:opacity-100 before:bg-white/20"
            >
              Services
              <span className="absolute bottom-0 left-1/2 w-10 h-0.5 bg-orange-500 transform -translate-x-1/2 scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></span>
            </Link>
            <Link
              to="/blogs"
              className="text-white relative group transition-all duration-500 font-syne text-sm px-6 py-2 rounded-full before:content-[''] before:absolute before:inset-0 before:rounded-full before:transition-all before:duration-300 hover:text-orange-500 before:opacity-0 hover:before:opacity-100 before:bg-white/20"
            >
              Blogs
              <span className="absolute bottom-0 left-1/2 w-10 h-0.5 bg-orange-500 transform -translate-x-1/2 scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></span>
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              to="/contact"
              className="bg-white text-black px-8 py-3 rounded-full hover:bg-orange-500 hover:text-white transition-colors duration-300 font-syne text-base"
            >
              Let's Talk
            </Link>
          </div>

          {/* Hamburger Menu */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex flex-col justify-center w-8 h-8 space-y-1.5 relative z-50"
            >
              <span
                className={`block h-0.5 bg-white transition-all duration-300 ease-out ${
                  isOpen ? "w-6 rotate-45 translate-y-2" : "w-6"
                }`}
              ></span>
              <span
                className={`block h-0.5 bg-white transition-all duration-300 ease-out ${
                  isOpen ? "w-0 opacity-0" : "w-4"
                }`}
              ></span>
              <span
                className={`block h-0.5 bg-white transition-all duration-300 ease-out ${
                  isOpen ? "w-6 -rotate-45 -translate-y-2" : "w-6"
                }`}
              ></span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation - Updated */}
        <div
          className={`md:hidden bg-gray-900/40 backdrop-blur-md transition-all duration-300 overflow-hidden rounded-b-3xl ${
            isOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col items-center py-6 px-8 space-y-4">
            <Link
              to="/"
              className="text-white/90 hover:text-orange-500 font-syne text-base transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/projects"
              className="text-white/90 hover:text-orange-500 font-syne text-base transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </Link>
            <Link
              to="/albums"
              className="text-white/90 hover:text-orange-500 font-syne text-base transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              Albums
            </Link>
            <Link
              to="/about"
              className="text-white/90 hover:text-orange-500 font-syne text-base transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              to="/services"
              className="text-white/90 hover:text-orange-500 font-syne text-base transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link
              to="/blogs"
              className="text-white/90 hover:text-orange-500 font-syne text-base transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              Blogs
            </Link>
            <div className="pt-2 w-full max-w-[200px]">
              <Link
                to="/contact"
                className="inline-block w-full text-center bg-white/90 text-black py-2.5 rounded-full hover:bg-orange-500 hover:text-white transition-colors duration-300 font-syne text-sm"
                onClick={() => setIsOpen(false)}
              >
                Let's Talk
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;