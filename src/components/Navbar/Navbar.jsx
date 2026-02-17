import { useState, useEffect, useCallback } from 'react';
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
        { type: 'link', to: '/about', text: "About" },
        { type: 'scroll', sectionId: 'skills-section', text: "Skills" },
        { type: 'scroll', sectionId: 'certifications-section', text: "Certifications" },
        { type: 'scroll', sectionId: 'projects-section', text: "Projects" },
        { type: 'link', to: "/contact", text: "Contact", highlight: true }
    ];

    return (
        <>
        <nav className={`sticky top-1 z-[80] flex items-center justify-between px-6 md:px-8 lg:px-12 py-4 md:py-5 mx-4 md:mx-6 lg:mx-8 rounded-2xl text-white transition-all duration-500 ${
            scrolled 
                ? 'bg-black/95 backdrop-blur-xl shadow-2xl shadow-purple-500/10 border border-purple-500/20' 
                : 'bg-black/30 backdrop-blur-md border border-white/5'
        }`}>
            <Link 
                to="/" 
                className="relative text-2xl md:text-3xl font-black tracking-tight hover:scale-105 transition-transform duration-300 group"
            >
                <span className="relative z-10">
                    Dhiman<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">N.</span>
                </span>
                <div className="absolute inset-0 bg-purple-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex md:items-center gap-2 lg:gap-3">
                {navLinks.map((link, index) => (
                    link.type === 'scroll' ? (
                        <button
                            key={index}
                            onClick={() => scrollToSection(link.sectionId)}
                            className="relative px-4 lg:px-5 py-2.5 text-sm lg:text-base font-medium text-gray-300 rounded-xl transition-all duration-300 hover:text-white hover:scale-105 group overflow-hidden"
                        >
                            <span className="relative z-10">{link.text}</span>
                            <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                        </button>
                    ) : (
                        <Link key={link.to} to={link.to}>
                            <button className={`relative px-4 lg:px-5 py-2.5 text-sm lg:text-base font-medium rounded-xl transition-all duration-300 hover:scale-105 overflow-hidden group ${
                                link.highlight 
                                    ? 'bg-purple-600 text-white border-2 border-purple-500 shadow-lg shadow-purple-500/30 hover:bg-purple-500 hover:shadow-xl hover:shadow-purple-500/50' 
                                    : 'text-gray-300 hover:text-white'
                            }`}>
                                <span className="relative z-10">{link.text}</span>
                                {!link.highlight && (
                                    <>
                                        <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                                    </>
                                )}
                            </button>
                        </Link>
                    )
                ))}
            </div>

            {/* Elegant Hamburger Menu */}
            <button
                className={`md:hidden w-11 h-11 relative focus:outline-none rounded-xl border border-white/10 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300 ${
                    isOpen ? 'z-[70] fixed top-4 right-6 bg-black/80 border-purple-500/50 scale-110' : 'z-50 bg-black/20'
                }`}
                onClick={toggleMenu}
                aria-label="Toggle menu"
                aria-expanded={isOpen}
            >
                <div className="block w-5 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <span
                        aria-hidden="true"
                        className={`block absolute h-0.5 w-5 bg-white rounded-full transform transition-all duration-300 ease-out ${
                            isOpen ? 'rotate-45' : '-translate-y-1.5'
                        }`}
                    ></span>
                    <span
                        aria-hidden="true"
                        className={`block absolute h-0.5 w-5 bg-white rounded-full transform transition-all duration-300 ease-out ${
                            isOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
                        }`}
                    ></span>
                    <span
                        aria-hidden="true"
                        className={`block absolute h-0.5 w-5 bg-white rounded-full transform transition-all duration-300 ease-out ${
                            isOpen ? '-rotate-45' : 'translate-y-1.5'
                        }`}
                    ></span>
                </div>
            </button>
        </nav>

        {/* Premium Mobile Menu Overlay */}
        {isOpen && (
            <div
                className="md:hidden fixed inset-0 z-[60] bg-black/95 backdrop-blur-2xl transition-all duration-500 flex items-center justify-center animate-in fade-in"
                onClick={closeMenu}
                role="dialog"
                aria-modal="true"
            >
                {/* Gradient Orbs */}
                <div className="absolute top-20 left-10 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-20 right-10 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl animate-pulse delay-700" />
                
                <div className="relative z-10 flex flex-col items-center justify-center gap-6 w-full px-8" onClick={(e) => e.stopPropagation()}>
                    {navLinks.map((link, index) => (
                        link.type === 'scroll' ? (
                            <button
                                key={index}
                                onClick={() => scrollToSection(link.sectionId)}
                                className="w-full max-w-xs group relative overflow-hidden"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <div className="relative px-8 py-4 text-white text-xl font-semibold rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 group-hover:border-purple-500/50 group-hover:bg-white/10 group-hover:scale-105 text-center">
                                    <span className="relative z-10">{link.text}</span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                                </div>
                            </button>
                        ) : (
                            <Link 
                                key={link.to} 
                                to={link.to} 
                                onClick={closeMenu}
                                className="w-full max-w-xs group"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <div className={`relative px-8 py-4 text-xl font-semibold rounded-2xl transition-all duration-300 group-hover:scale-105 text-center overflow-hidden backdrop-blur-md ${
                                    link.highlight 
                                        ? 'bg-purple-600 text-white border-2 border-purple-500 shadow-2xl shadow-purple-500/40 group-hover:bg-purple-500' 
                                        : 'text-white border border-white/10 bg-white/5 backdrop-blur-sm group-hover:border-purple-500/50 group-hover:bg-white/10'
                                }`}>
                                    <span className="relative z-10">{link.text}</span>
                                    {!link.highlight && (
                                        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    )}
                                </div>
                            </Link>
                        )
                    ))}
                </div>
            </div>
        )}
        </>
    );
};

export default Navbar;