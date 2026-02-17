import { memo, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { socialLinks } from '../../Data/SocialMediaLink';
const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
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




// Social Icon Component
const SocialIcon = memo(({ href, icon: Icon, label, hoverClass, size = "w-10 h-10", iconSize = "w-5 h-5" }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`flex items-center justify-center ${size} rounded-full bg-purple-500/10 border border-purple-500/30 text-gray-400 ${hoverClass} transition-all duration-300 backdrop-blur-sm`}
    aria-label={label}
  >
    <Icon className={iconSize} />
  </a>
));

SocialIcon.displayName = 'SocialIcon';

SocialIcon.propTypes = {
  href: PropTypes.string.isRequired,
  icon: PropTypes.elementType.isRequired,
  label: PropTypes.string.isRequired,
  hoverClass: PropTypes.string.isRequired,
  size: PropTypes.string,
  iconSize: PropTypes.string
};

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
    <section className="min-h-[100vh] flex flex-col justify-center relative z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-8 flex flex-col min-h-[90vh] justify-center">
        <div className="grid lg:grid-cols-[1fr_minmax(0,680px)_1fr] items-center gap-8 lg:gap-16 flex-grow lg:flex-grow-0">
          <div className="hidden lg:block" aria-hidden="true"></div>

          {/* Text Section */}
          <motion.div
            className="w-full text-center"
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
            <motion.span 
              className="inline-block px-4 py-2 mb-6 text-xs font-semibold tracking-[0.35em] uppercase text-purple-300/80 bg-white/5 rounded-full border border-white/10"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              👋 Welcome to my portfolio
            </motion.span>

            <h1 className="text-white mb-5 drop-shadow-[0_12px_35px_rgba(255,255,255,0.18)]">
              <span className="block text-base sm:text-lg md:text-xl mb-3 text-gray-300">
                Hi, I&apos;m
              </span>
              <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight">
                Dhiman Nayak
              </span>
            </h1>

            {/* Role */}
            <div className="mb-8">
              <p className="text-lg sm:text-xl md:text-2xl text-gray-300 leading-relaxed">
                I&apos;m a <span className="text-purple-300 font-semibold">Full Stack Developer</span>
              </p>
            </div>

            {/* CTA Buttons */}
            {/* <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <motion.button
                  className="w-full sm:w-auto bg-white text-black font-semibold py-3 px-8 rounded-full transition-all duration-300 shadow-lg shadow-black/40"
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0, 0, 0, 0.35)" }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Me
                </motion.button>
              </Link>
            </div> */}

            {/* Mobile Social Icons */}
            <motion.div 
              className="flex lg:hidden justify-center gap-4 mt-10"
              variants={iconContainerVariants}
              initial="hidden"
              animate="visible"
            >
              {socialLinks.map(link => (
                <SocialIcon 
                  key={link.label}
                  {...link}
                  size="w-11 h-11"
                  iconSize="w-5 h-5"
                />
              ))}
            </motion.div>
          </motion.div>

          {/* Desktop Social Media Icons */}
          <div className="hidden lg:flex flex-col items-center gap-4 justify-self-end">
            <div className="w-px h-16 bg-gradient-to-b from-transparent via-white/40 to-transparent"></div>
            
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

            <div className="w-px h-16 bg-gradient-to-b from-transparent via-white/40 to-transparent"></div>
          </div>
        </div>

        {/* Scroll Indicator - Hidden on scroll */}
        <div 
          className={`flex justify-center mt-auto mb-8 lg:mt-16 lg:mb-0 transition-all duration-500 ${
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