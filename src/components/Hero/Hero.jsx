import React, { memo, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: "easeOut" } 
  }
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    transition: { duration: 0.8, ease: "easeOut" } 
  }
};

const iconContainerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const iconVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.4, ease: "easeOut" } 
  }
};

// Social links
const socialLinks = [
  { href: "https://github.com/Dhiman-Nayak", icon: FaGithub, label: "GitHub", hoverClass: "hover:text-white hover:bg-purple-500/20" },
  { href: "https://twitter.com/your-profile", icon: FaSquareXTwitter, label: "Twitter", hoverClass: "hover:text-white hover:bg-purple-500/20" },
  { href: "https://linkedin.com/in/your-profile", icon: FaLinkedin, label: "LinkedIn", hoverClass: "hover:text-[#0077B5] hover:bg-blue-500/10" },
  { href: "https://instagram.com/your-profile", icon: FaInstagram, label: "Instagram", hoverClass: "hover:text-pink-500 hover:bg-pink-500/10" },
];

// Social Icon Component
const SocialIcon = memo(({ href, icon: Icon, label, hoverClass, size = "w-10 h-10", iconSize = "w-5 h-5" }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`flex items-center justify-center ${size} rounded-full bg-purple-500/10 border border-purple-500/30 text-gray-400 ${hoverClass} transition-all duration-300 backdrop-blur-sm`}
    variants={iconVariants}
    whileHover={{ scale: 1.2, y: -3 }}
    aria-label={label}
  >
    <Icon className={iconSize} />
  </motion.a>
));

SocialIcon.displayName = 'SocialIcon';

const HeroSection = ({ scrollToSection }) => {
  const [showExplore, setShowExplore] = useState(true);

  // Hide explore button on scroll
  useEffect(() => {
    const handleScroll = () => {
      // Hide when scrolled more than 100px
      setShowExplore(window.scrollY < 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="min-h-[90vh] flex flex-col justify-center relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-8 lg:gap-12">

          {/* Text Section */}
          <motion.div
            className="w-full lg:w-1/2 text-center lg:text-left"
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
            {/* Greeting Badge */}
            <motion.span 
              className="inline-block px-4 py-2 mb-4 text-sm font-medium text-purple-300 bg-purple-500/10 rounded-full border border-purple-500/30 backdrop-blur-sm"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              👋 Welcome to my portfolio
            </motion.span>

            <h1 className="text-white mb-4 font-serif">
              <span className="block text-xl sm:text-2xl md:text-3xl mb-2 text-gray-300">
                Hi, I'm
              </span>
              <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent drop-shadow-lg">
                Dhiman Nayak
              </span>
            </h1>

            {/* Role */}
            <div className="mb-6 md:mb-8">
              <p className="text-lg sm:text-xl md:text-2xl text-gray-300 leading-relaxed">
                I'm a <span className="text-purple-400 font-semibold">Full Stack Developer</span>
              </p>
              <p className="text-sm sm:text-base text-gray-400 mt-2 max-w-md mx-auto lg:mx-0">
                Passionate about building beautiful, functional, and user-friendly web applications.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/contact">
                <motion.button
                  className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-medium py-3 px-8 rounded-full transition-all duration-300 shadow-lg shadow-purple-500/30"
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(147, 51, 234, 0.35)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Me
                </motion.button>
              </Link>
              <motion.button
                onClick={() => scrollToSection('projects-section')}
                className="w-full sm:w-auto border-2 border-purple-500/50 hover:border-purple-400 hover:bg-purple-500/10 text-white font-medium py-3 px-8 rounded-full transition-all duration-300 backdrop-blur-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
              </motion.button>
            </div>

            {/* Mobile Social Icons */}
            <motion.div 
              className="flex lg:hidden justify-center gap-5 mt-8"
              variants={iconContainerVariants}
              initial="hidden"
              animate="visible"
            >
              {socialLinks.map(link => (
                <SocialIcon 
                  key={link.label}
                  {...link}
                  size="w-12 h-12"
                  iconSize="w-6 h-6"
                />
              ))}
            </motion.div>
          </motion.div>

          {/* Image and Desktop Icons */}
          <div className="flex items-center justify-center gap-6 lg:gap-8">
            {/* Profile Image Container */}
            <motion.div
              className="relative"
              initial="hidden"
              animate="visible"
              variants={imageVariants}
            >
              {/* Glow effect */}
              <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-purple-500/20 via-pink-400/15 to-purple-500/20 blur-xl"></div>
              
              {/* Image wrapper */}
              <div className="relative w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80">
                <img
                  src="/IMG20240828202308-Photoroom.png"
                  alt="Portrait of Dhiman Nayak"
                  className="w-full h-full rounded-full object-cover object-center border-4 border-purple-400/30 shadow-2xl shadow-purple-900/30"
                  loading="eager"
                />
                {/* Decorative dots */}
                <div className="absolute -top-2 -right-2 w-4 h-4 sm:w-5 sm:h-5 bg-purple-400 rounded-full opacity-60 animate-bounce"></div>
                <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-pink-400 rounded-full opacity-50 animate-pulse"></div>
              </div>
            </motion.div>

            {/* Desktop Social Media Icons */}
            <div className="hidden lg:flex flex-col items-center gap-4">
              <div className="w-px h-16 bg-gradient-to-b from-transparent via-purple-400/60 to-transparent"></div>
              
              <motion.div
                className="flex flex-col gap-4"
                variants={iconContainerVariants}
                initial="hidden"
                animate="visible"
              >
                {socialLinks.map(link => (
                  <SocialIcon key={link.label} {...link} />
                ))}
              </motion.div>

              <div className="w-px h-16 bg-gradient-to-b from-transparent via-purple-400/60 to-transparent"></div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator - Hidden on scroll */}
        <div 
          className={`flex justify-center mt-12 lg:mt-16 transition-all duration-500 ${
            showExplore 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-4 pointer-events-none'
          }`}
        >
          <button
            className="group flex flex-col items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors duration-300 focus:outline-none"
            onClick={() => scrollToSection('about-section')}
            aria-label="Scroll to about section"
          >
            <span className="text-xs uppercase tracking-widest font-medium">Explore</span>
            <div
              className="p-2 rounded-full border border-purple-500/30 group-hover:border-purple-400/50 group-hover:bg-purple-500/10 transition-all duration-300 animate-bounce"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;