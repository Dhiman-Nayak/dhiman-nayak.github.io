import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const ChessContactForm = () => {

  return (
    <div
    >
      <div
        className={`md:hidden fixed inset-0 z-50 bg-black/95 backdrop-blur-md transition-all duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-6">
          {navLinks.map((link, index) => (
            link.type === 'scroll' ? (
              <button
                key={index}
                onClick={() => scrollToSection(link.sectionId)}
                className="px-6 py-2 text-white text-xl font-medium rounded-md transition duration-300 ease-in-out transform hover:text-purple-400"
              >
                {link.text}
              </button>
            ) : (
              <Link key={link.to} to={link.to} onClick={closeMenu}>
                <p className={`px-6 py-2 text-white text-xl font-medium rounded-md transition duration-300 ease-in-out transform ${link.highlight ? 'bg-purple-600/80' : 'hover:text-purple-400'}`}>
                  {link.text}
                </p>
              </Link>
            )
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChessContactForm;
