// src/Description.js
import { Link } from 'react-router-dom';
import React from 'react';
import { motion } from 'framer-motion';
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import Skills from '../../components/skills/Skill';

// Move variants outside component for better performance
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

const Home = () => {
  const scrollToSection = () => {
    const el = document.getElementById('about-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex flex-col justify-center bg-transparent relative">
      {/* Hero Container */}
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
              className="inline-block px-4 py-2 mb-4 text-sm font-medium text-emerald-300 bg-emerald-500/10 rounded-full border border-emerald-500/30 backdrop-blur-sm"
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
              <span
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent drop-shadow-lg"
              >
                Dhiman Nayak
              </span>
            </h1>

            {/* Role with typing effect style */}
            <div className="mb-6 md:mb-8">
              <p className="text-lg sm:text-xl md:text-2xl text-gray-300 leading-relaxed">
                I'm a <span className="text-emerald-400 font-semibold">Full Stack Developer</span>
              </p>
              <p className="text-sm sm:text-base text-gray-400 mt-2 max-w-md mx-auto lg:mx-0">
                Passionate about building beautiful, functional, and user-friendly web applications.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/contact">
                <motion.button
                  className="w-full sm:w-auto bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-medium py-3 px-8 rounded-full transition-all duration-300 shadow-lg shadow-emerald-500/30"
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(16, 185, 129, 0.35)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Me
                </motion.button>
              </Link>
              {/* <Link to="/projects">
                <motion.button
                  className="w-full sm:w-auto border-2 border-emerald-500/50 hover:border-emerald-400 hover:bg-emerald-500/10 text-white font-medium py-3 px-8 rounded-full transition-all duration-300 backdrop-blur-sm"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Projects
                </motion.button>
              </Link> */}
            </div>

            {/* Mobile Social Icons */}
            <motion.div 
              className="flex lg:hidden justify-center gap-5 mt-8"
              variants={iconContainerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.a
                href="https://github.com/Dhiman-Nayak"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-gray-400 hover:text-white hover:bg-emerald-500/20 hover:border-emerald-400/50 transition-all duration-300 backdrop-blur-sm"
                variants={iconVariants}
                whileHover={{ scale: 1.2, y: -3 }}
                aria-label="GitHub Profile"
              >
                <FaGithub className="w-6 h-6" />
              </motion.a>
              <motion.a
                href="https://twitter.com/your-profile"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-gray-400 hover:text-white hover:bg-emerald-500/20 hover:border-emerald-400/50 transition-all duration-300 backdrop-blur-sm"
                variants={iconVariants}
                whileHover={{ scale: 1.2, y: -3 }}
                aria-label="Twitter Profile"
              >
                <FaSquareXTwitter className="w-6 h-6" />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/your-profile"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-gray-400 hover:text-[#0077B5] hover:bg-blue-500/10 hover:border-blue-400/50 transition-all duration-300 backdrop-blur-sm"
                variants={iconVariants}
                whileHover={{ scale: 1.2, y: -3 }}
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin className="w-6 h-6" />
              </motion.a>
              <motion.a
                href="https://instagram.com/your-profile"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-gray-400 hover:text-pink-500 hover:bg-pink-500/10 hover:border-pink-400/50 transition-all duration-300 backdrop-blur-sm"
                variants={iconVariants}
                whileHover={{ scale: 1.2, y: -3 }}
                aria-label="Instagram Profile"
              >
                <FaInstagram className="w-6 h-6" />
              </motion.a>
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
              {/* Subtle glow effect */}
              <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-emerald-500/20 via-teal-400/15 to-cyan-500/20 blur-xl"></div>
              
              {/* Image wrapper for aspect ratio - larger size, zoom out effect */}
              <div className="relative w-40 h-60 sm:w-80 sm:h-80 lg:w-64 lg:h-96">
                <img
                  src="/IMG20240828202308-Photoroom.png"
                  alt="Portrait of Dhiman Nayak"
                  className="w-full h-full rounded-full object-cover object-center border-2 border-emerald-400/30 shadow-lg shadow-emerald-900/20"
                  loading="eager"
                />
                {/* Decorative dots - more subtle */}
                <div className="absolute -top-2 -right-2 w-4 h-4 sm:w-5 sm:h-5 bg-emerald-400 rounded-full opacity-50 animate-bounce"></div>
                <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-teal-400 rounded-full opacity-40 animate-pulse"></div>
              </div>
            </motion.div>

            {/* Desktop Social Media Icons */}
            <div className="hidden lg:flex flex-col items-center gap-4">
              <div className="w-px h-16 bg-gradient-to-b from-transparent via-emerald-400/60 to-transparent"></div>
              
              <motion.div
                className="flex flex-col gap-4"
                variants={iconContainerVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.a
                  href="https://github.com/Dhiman-Nayak"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-gray-400 hover:text-white hover:bg-emerald-500/20 hover:border-emerald-400/50 transition-all duration-300 backdrop-blur-sm"
                  variants={iconVariants}
                  whileHover={{ scale: 1.3, x: 5 }}
                  aria-label="GitHub Profile"
                >
                  <FaGithub className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href="https://twitter.com/your-profile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-gray-400 hover:text-white hover:bg-emerald-500/20 hover:border-emerald-400/50 transition-all duration-300 backdrop-blur-sm"
                  variants={iconVariants}
                  whileHover={{ scale: 1.3, x: 5 }}
                  aria-label="Twitter Profile"
                >
                  <FaSquareXTwitter className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href="https://linkedin.com/in/your-profile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-gray-400 hover:text-[#0077B5] hover:bg-blue-500/10 hover:border-blue-400/50 transition-all duration-300 backdrop-blur-sm"
                  variants={iconVariants}
                  whileHover={{ scale: 1.3, x: 5 }}
                  aria-label="LinkedIn Profile"
                >
                  <FaLinkedin className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href="https://instagram.com/your-profile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-gray-400 hover:text-pink-500 hover:bg-pink-500/10 hover:border-pink-400/50 transition-all duration-300 backdrop-blur-sm"
                  variants={iconVariants}
                  whileHover={{ scale: 1.3, x: 5 }}
                  aria-label="Instagram Profile"
                >
                  <FaInstagram className="w-5 h-5" />
                </motion.a>
              </motion.div>

              <div className="w-px h-16 bg-gradient-to-b from-transparent via-emerald-400/60 to-transparent"></div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="flex justify-center mt-16 lg:mt-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <button
            className="group flex flex-col items-center gap-2 text-gray-400 hover:text-emerald-400 transition-colors duration-300 focus:outline-none"
            onClick={scrollToSection}
            aria-label="Scroll to skills section"
          >
            <span className="text-xs uppercase tracking-widest font-medium">Scroll Down</span>
            <motion.div
              className="p-2 rounded-full border border-emerald-500/30 group-hover:border-emerald-400/50 group-hover:bg-emerald-500/10 transition-all duration-300"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </motion.div>
          </button>
        </motion.div>
      </div>

      {/* Skills Section */}
      <Skills />
    </section>
  );
};

export default Home;
