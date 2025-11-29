import React, { useState, useEffect, useCallback } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const toggleMenu = useCallback(() => {
        setIsOpen(prev => !prev);
        document.body.style.overflow = !isOpen ? 'hidden' : 'auto';
    }, [isOpen]);

    const closeMenu = useCallback(() => {
        setIsOpen(false);
        document.body.style.overflow = 'auto';
    }, []);

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, []);

    useEffect(() => {
        closeMenu();
    }, [location, closeMenu]);

    // Smooth scroll to section
    const scrollToSection = (sectionId) => {
        closeMenu();
        if (location.pathname !== '/') {
            navigate('/');
            setTimeout(() => {
                const el = document.getElementById(sectionId);
                if (el) el.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        } else {
            const el = document.getElementById(sectionId);
            if (el) el.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const navLinks = [
        { type: 'scroll', sectionId: 'about-section', text: "About" },
        { type: 'scroll', sectionId: 'skills-section', text: "Skills" },
        { type: 'scroll', sectionId: 'certifications-section', text: "Certifications" },
        { type: 'scroll', sectionId: 'projects-section', text: "Projects" },
        { type: 'link', to: "/contact", text: "Contact", highlight: true }
    ];

    return (
        <nav className={`sticky top-0 z-50 flex items-center justify-between p-4 md:p-5 text-white transition-all duration-300 ${
            scrolled 
                ? 'bg-black/90 backdrop-blur-lg shadow-lg shadow-purple-500/5 border-b border-white/5' 
                : 'bg-black/50 backdrop-blur-sm'
        }`}>
            <Link to="/" className="text-xl md:text-2xl font-bold hover:opacity-80 transition-opacity">
                Dhiman<span className="text-[#8A2BE2]">N.</span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex md:items-center gap-1 lg:gap-2">
                {navLinks.map((link, index) => (
                    link.type === 'scroll' ? (
                        <button
                            key={index}
                            onClick={() => scrollToSection(link.sectionId)}
                            className="px-3 lg:px-4 py-2 text-sm lg:text-base text-white font-medium rounded-md transition duration-300 ease-in-out transform hover:-translate-y-0.5 hover:text-purple-400"
                        >
                            {link.text}
                        </button>
                    ) : (
                        <Link key={link.to} to={link.to}>
                            <p className={`px-3 lg:px-4 py-2 text-sm lg:text-base text-white font-medium rounded-md transition duration-300 ease-in-out transform hover:-translate-y-0.5 ${link.highlight ? 'bg-purple-600/80 hover:bg-purple-500' : 'hover:text-purple-400'}`}>
                                {link.text}
                            </p>
                        </Link>
                    )
                ))}
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden fixed inset-0 z-50 bg-black/95 backdrop-blur-md transition-all duration-300 ${
                    isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
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

            {/* Hamburger Menu */}
            <button
                className="md:hidden z-50 w-10 h-10 relative focus:outline-none"
                onClick={toggleMenu}
                aria-label="Toggle menu"
                aria-expanded={isOpen}
            >
                <div className="block w-5 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <span
                        aria-hidden="true"
                        className={`block absolute h-0.5 w-5 bg-white transform transition duration-300 ease-in-out ${
                            isOpen ? 'rotate-45' : '-translate-y-1.5'
                        }`}
                    ></span>
                    <span
                        aria-hidden="true"
                        className={`block absolute h-0.5 w-5 bg-white transform transition duration-300 ease-in-out ${
                            isOpen ? 'opacity-0' : 'opacity-100'
                        }`}
                    ></span>
                    <span
                        aria-hidden="true"
                        className={`block absolute h-0.5 w-5 bg-white transform transition duration-300 ease-in-out ${
                            isOpen ? '-rotate-45' : 'translate-y-1.5'
                        }`}
                    ></span>
                </div>
            </button>
        </nav>
    );
};

export default Navbar;