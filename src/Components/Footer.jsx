import { motion } from 'framer-motion';
import { FaTwitter, FaYoutube, FaLinkedinIn, FaInstagram, FaCopyright } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  const fadeInUp = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.6 }
  };

  const socialLinks = [
    { icon: <FaTwitter />, href: "#" },
    { icon: <FaYoutube />, href: "#" },
    { icon: <FaLinkedinIn />, href: "#" },
    { icon: <FaInstagram />, href: "#" }
  ];

  return (
    <footer className="relative bg-black/95 text-white overflow-hidden">
      {/* Blur Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30 backdrop-blur-sm"></div>
      
      {/* Border Top Light Effect */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

      <div className="relative max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo and Description Section */}
          <motion.div 
            {...fadeInUp}
            className="space-y-6"
          >
            <Link to="/" className="text-2xl font-bold">Logo</Link>
            <p className="text-gray-400 max-w-sm">
              Creating compelling visual narratives that captivate audiences and drive meaningful engagement through innovative storytelling.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white/5 p-3 rounded-full hover:bg-white/10 transition-colors duration-300"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links Section */}
          <motion.div 
            {...fadeInUp}
            className="space-y-6"
          >
            <h3 className="text-xl font-semibold">Quick Links</h3>
            <div className="grid grid-cols-2 gap-4">
              {['Home', 'Projects', 'About', 'Services', 'Contact', 'Blog', 'Terms and Conditions', 'Privacy Policy'].map((link, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: 5 }}
                  className="w-fit"
                >
                  <Link 
                    to={`/${link.toLowerCase().replace(/ /g, '-')}`} // Convert spaces to hyphens for routing
                    className="text-gray-400 hover:text-white transition-colors duration-300 relative group"
                  >
                    {link}
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-orange-500 group-hover:w-full transition-all duration-300"></span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Map Section using iframe */}
          <motion.div 
            {...fadeInUp}
            className="space-y-6"
          >
            <h4 className="text-xl font-bold mb-2">Find Us</h4>
            <div className="w-full h-48 md:h-60">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d198.05682701357803!2d-0.5911997844741369!3d51.50996567963467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876c1a1c5d1e5bb%3A0x4c2c5b7c2b2f0c4!2s260%20Bath%20Road%2C%20Slough%20SL1%204DX%2C%20UK!5e0!3m2!1sen!2suk!4v1634151950670!5m2!1sen!2suk"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </motion.div>
        </div>

        {/* Copyright Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-16 pt-8 border-t border-white/10 text-center text-gray-400"
        >
          <div className="flex items-center justify-center gap-2">
            <FaCopyright />
            <p>2024 StoryStream Studios. All rights reserved.</p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;