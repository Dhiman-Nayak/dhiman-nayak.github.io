import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram, FaHeart } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const socialLinks = [
  { href: "https://github.com/Dhiman-Nayak", icon: FaGithub, label: "GitHub" },
  { href: "https://twitter.com/your-profile", icon: FaSquareXTwitter, label: "Twitter" },
  { href: "https://linkedin.com/in/your-profile", icon: FaLinkedin, label: "LinkedIn" },
  { href: "https://instagram.com/your-profile", icon: FaInstagram, label: "Instagram" },
];

const FooterSection = () => {
  return (
    <>
      {/* Footer CTA */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Let's Work <span className="text-purple-400">Together</span>
            </h2>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">
              Have a project in mind or just want to say hi? Feel free to reach out!
            </p>
            <Link to="/contact">
              <motion.button
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-medium py-4 px-10 rounded-full transition-all duration-300 shadow-lg shadow-purple-500/30"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-white/10">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo/Name */}
            <div className="text-center md:text-left">
              <Link to="/" className="text-xl font-bold text-white hover:text-purple-400 transition-colors">
                Dhiman<span className="text-purple-400">N.</span>
              </Link>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map(link => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-gray-400 hover:text-purple-400 transition-colors duration-300"
                  aria-label={link.label}
                >
                  <link.icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            {/* Copyright */}
            <p className="text-gray-500 text-sm flex items-center gap-1">
              © {new Date().getFullYear()} Made with 
              <FaHeart className="w-3 h-3 text-red-500" /> 
              by Dhiman Nayak
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterSection;