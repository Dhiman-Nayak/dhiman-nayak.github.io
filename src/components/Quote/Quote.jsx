import { useState, useEffect, useCallback, memo } from 'react';
import quoteArray from "../../Data/Quote.data";

const Quote = memo(() => {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [displayedQuotes, setDisplayedQuotes] = useState([]);

  // Initialize with 3 random unique quotes
  useEffect(() => {
    const getRandomQuotes = () => {
      const shuffled = [...quoteArray].sort(() => Math.random() - 0.5);
      return shuffled.slice(0, 3);
    };
    setDisplayedQuotes(getRandomQuotes());
  }, []);

  // Auto-rotate every 30 seconds
  useEffect(() => {
    if (displayedQuotes.length === 0) return;

    const interval = setInterval(() => {
      handleQuoteChange((currentQuoteIndex + 1) % 3);
    }, 20000);

    return () => clearInterval(interval);
  }, [currentQuoteIndex, displayedQuotes.length]);

  const handleQuoteChange = useCallback((newIndex) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentQuoteIndex(newIndex);
      setIsTransitioning(false);
    }, 300);
  }, []);

  if (displayedQuotes.length === 0) return null;

  const currentQuote = displayedQuotes[currentQuoteIndex];

  return (
    <section className="px-4 sm:px-6 lg:px-10 py-10 md:py-10 relative overflow-hidden">
      {/* Ambient Lighting Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[400px] bg-[#c084fc]/[0.04] blur-[120px] pointer-events-none" />
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#a855f7]/[0.01] blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto max-w-4xl relative z-10">
        {/* Section Heading */}
        <div className="flex items-center gap-4 mb-8">
          <h2 className="text-xl md:text-md font-semibold text-white">Words of Wisdom</h2>
          <div className="flex-1 h-px bg-white/10"></div>
        </div>
        {/* Main Quote Card */}
        <div className="relative bg-zinc-900/[0.4] backdrop-blur-xl border border-zinc-800/50 rounded-[2.5rem] p-4 md:p-6 lg:px-10 shadow-2xl overflow-hidden group">
          {/* Decorative Corner Elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#c084fc]/5 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#a855f7]/5 blur-3xl rounded-full translate-y-1/2 -translate-x-1/2" />

          {/* Quote Icon */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-[#c084fc]/20 blur-xl rounded-full" />
              <svg 
                className="w-12 h-12 md:w-16 md:h-16 text-purple-300/40 relative z-10" 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
              </svg>
            </div>
          </div>

          {/* Quote Content with Fade Transition */}
          <div 
            className={`text-right space-y-6 transition-all duration-500 ${
              isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
            }`}
          >
            {/* Quote Text */}
            <blockquote className="relative">
              <p className="text-md md:text-md lg:text-xl font-light text-white leading-relaxed italic tracking-wide px-4 text-center">
                &ldquo;{currentQuote?.q}&rdquo;
              </p>
            </blockquote>

            {/* Author - Left aligned with line */}
            <div className="flex items-right gap-3 px-4">
              <div className="h-px w-8 md:w-12 bg-gradient-to-r from-purple-300/40 to-transparent" />
              <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-purple-300/70 font-medium">
                {currentQuote?.a}
              </p>
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center items-center gap-3 mt-10">
            {[0, 1, 2].map((index) => (
              <button
                key={index}
                onClick={() => handleQuoteChange(index)}
                className={`group/dot relative transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-purple-300/50 rounded-full ${
                  currentQuoteIndex === index ? 'scale-110' : 'scale-100 hover:scale-105'
                }`}
                aria-label={`View quote ${index + 1}`}
              >
                {/* Active indicator glow */}
                {currentQuoteIndex === index && (
                  <div className="absolute inset-0 bg-purple-400/30 blur-md rounded-full animate-pulse" />
                )}
                
                {/* Dot */}
                <div
                  className={`relative w-2.5 h-2.5 rounded-full transition-all duration-500 ${
                    currentQuoteIndex === index
                      ? 'bg-gradient-to-r from-[#c084fc] to-[#a855f7] shadow-lg shadow-purple-500/50'
                      : 'bg-zinc-700 group-hover/dot:bg-zinc-600'
                  }`}
                />
              </button>
            ))}
          </div>

          
        </div>
      </div>
    </section>
  );
});

Quote.displayName = 'Quote';

export default Quote;