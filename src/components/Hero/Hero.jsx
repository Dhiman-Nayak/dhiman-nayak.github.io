import { memo, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { socialLinks } from '../../Data/SocialMediaLink';

// Social Icon Component
const SocialIcon = memo(({ href, icon: Icon, label, hoverClass, size = "w-8 h-8", iconSize = "w-5 h-5" }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`flex items-center rounded-lg justify-center ${size} text-gray-400 ${hoverClass} transition-all duration-300 backdrop-blur-sm`}
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

const NameDisplay = memo(() => {
  const renderLetters = (text, prefix) => (
    text.split('').map((char, index) => (
      <span
        key={`${prefix}-${index}`}
        className="transition-all duration-300 hover:text-transparent hover:[-webkit-text-stroke:1px_white] sm:hover:[-webkit-text-stroke:1.5px_white] md:hover:[-webkit-text-stroke:2px_white] cursor-pointer"
      >
        {char}
      </span>
    ))
  );

  return (
    <div className="flex flex-col sm:flex-row justify-center items-center sm:items-end text-7xl sm:text-8xl md:text-8xl lg:text-[7.5rem] xl:text-[9.5rem] font-black tracking-tight leading-[0.8] sm:gap-5">
      <div className="flex ">
        {renderLetters('DHIMAN', 'first')}
      </div>
      <div className="flex ">
        {renderLetters('NAYAK', 'last')}
      </div>
    </div>
  );
});

NameDisplay.displayName = 'NameDisplay';

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
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-2 pb-6 md:py-8 flex flex-col min-h-[90vh] justify-center items-center">
        <div className="flex items-center justify-center gap-8 lg:gap-16 w-full flex-grow">

          {/* Text Section */}
          <div
            className="w-full max-w-4xl text-center">
            <span 
              className="inline-block px-4 py-2 mb-6 text-xs font-semibold tracking-[0.35em] uppercase text-purple-400/80 bg-white/5 rounded-full border border-white/10 shadow-[0_0_25px_rgba(192,132,252,0.65)] animate-pulse"
              
            >
              👋 Welcome to my portfolio
            </span>

            <h1 className="text-white mb-5 drop-shadow-[0_12px_35px_rgba(255,255,255,0.18)]">
              <span className="block text-base sm:text-lg md:text-xl mb-4 text-gray-300">
                Hi, I&apos;m
              </span>
              <NameDisplay />
            </h1>

            {/* Role */}
            <div className="mb-8">
              <p className="text-lg sm:text-xl md:text-2xl text-gray-300 leading-relaxed">
                <span className="text-purple-300 font-semibold">Full Stack Developer</span>
              </p>
            </div>

            {/* Mobile Social Icons */}
            <div 
              className="flex lg:hidden justify-center gap-4 mt-10">
              {socialLinks.map(link => (
                <SocialIcon 
                  key={link.label}
                  {...link}
                  size="w-11 h-11"
                  iconSize="w-5 h-5"
                />
              ))}
            </div>
          </div>

          {/* Desktop Social Media Icons - Fixed at right */}
          {/* <div className="hidden lg:flex fixed right-8 top-1/2 -translate-y-1/2 z-50">
            <div className="flex flex-col items-center gap-2">
              <div className="w-px h-10 bg-gradient-to-b from-transparent via-white/40 to-transparent"></div>
              
              <div className="flex flex-col gap-2">
                {socialLinks.map(link => (
                  <SocialIcon key={link.label} {...link} />
                ))}
              </div>

              <div className="w-px h-16 bg-gradient-to-b from-transparent via-white/40 to-transparent"></div>
            </div>
          </div> */}
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
        <div className='h-10'></div>
      </div>
    </section>
  );
};

HeroSection.propTypes = {
  scrollToSection: PropTypes.func.isRequired
};

export default HeroSection;