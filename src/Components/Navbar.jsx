import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/sampleLogo.png"
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

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="fixed w-full z-50 flex justify-center items-center px-4 top-6">
      <nav className={`transition-all duration-300 rounded-full max-w-4xl w-full ${
        scrolled ? 'bg-black/30 backdrop-blur-[8px]' : 'bg-transparent'
      }`}>
        <div className="flex justify-between items-center px-6 py-4">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            {/* <img
              className="h-8 w-auto"
              src={logo}
              alt="StoryStream Studios"
            /> */}
            <span className="text-white">Logo</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-white hover:text-orange-500 relative group transition-colors duration-300 font-['Montserrat'] text-sm">
              Home
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </Link>
            <Link to="/projects" className="text-white hover:text-orange-500 relative group transition-colors duration-300 font-['Montserrat'] text-sm">
              Projects
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </Link>
            <Link to="/albums" className="text-white hover:text-orange-500 relative group transition-colors duration-300 font-['Montserrat'] text-sm">
              Albums
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </Link>
            <Link to="/about" className="text-white hover:text-orange-500 relative group transition-colors duration-300 font-['Montserrat'] text-sm">
              About
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </Link>
            <Link to="/services" className="text-white hover:text-orange-500 relative group transition-colors duration-300 font-['Montserrat'] text-sm">
              Services
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </Link>
            <Link to="/blogs" className="text-white hover:text-orange-500 relative group transition-colors duration-300 font-['Montserrat'] text-sm">
              Blogs
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link to="/contact" className="bg-white text-black px-8 py-3 rounded-full hover:bg-orange-500 hover:text-white transition-colors duration-300 font-['Montserrat'] text-base">
              Let's Talk
            </Link>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex flex-col justify-center w-8 h-8 space-y-1.5 relative"
            >
              <span className={`block h-0.5 bg-white transition-all duration-300 ease-out ${
                isOpen ? 'w-6 rotate-45 translate-y-2' : 'w-6'
              }`}></span>
              <span className={`block h-0.5 bg-white transition-all duration-300 ease-out  ${
                isOpen ? 'w-0 opacity-0' : 'w-4'
              }`}></span>
              <span className={`block h-0.5 bg-white transition-all duration-300 ease-out ${
                isOpen ? 'w-6 -rotate-45 -translate-y-2' : 'w-6'
              }`}></span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation - Attached to Navbar */}
        <div className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="bg-black/40 backdrop-blur-md px-4 py-6 rounded-b-3xl space-y-6">
            <Link to="/" className="block text-white hover:text-orange-500 text-center font-['Montserrat']" onClick={() => setIsOpen(false)}>
              Home
            </Link>
            <Link to="/projects" className="block text-white hover:text-orange-500 text-center font-['Montserrat']" onClick={() => setIsOpen(false)}>
              Projects
            </Link>
            <Link to="/albums" className="block text-white hover:text-orange-500 text-center font-['Montserrat']" onClick={() => setIsOpen(false)}>
              Albums
            </Link>
            <Link to="/about" className="block text-white hover:text-orange-500 text-center font-['Montserrat']" onClick={() => setIsOpen(false)}>
              About
            </Link>
            <Link to="/services" className="block text-white hover:text-orange-500 text-center font-['Montserrat']" onClick={() => setIsOpen(false)}>
              Services
            </Link>
            <Link to="/blogs" className="block text-white hover:text-orange-500 text-center font-['Montserrat']" onClick={() => setIsOpen(false)}>
              Blogs
            </Link>
            <div className="pt-4">
              <Link to="/contact" className="block w-full bg-white text-black py-3 rounded-full hover:bg-orange-500 hover:text-white transition-colors duration-300 font-['Montserrat'] text-center" onClick={() => setIsOpen(false)}>
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