import React, { useState, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = useCallback(() => {
        setIsOpen(prev => !prev);
        document.body.style.overflow = !isOpen ? 'hidden' : 'auto';
    }, [isOpen]);

    const closeMenu = useCallback(() => {
        setIsOpen(false);
        document.body.style.overflow = 'auto';
    }, []);

    useEffect(() => {
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, []);

    useEffect(() => {
        closeMenu();
    }, [location, closeMenu]);

    const navLinks = [
        { to: "/", text: "Home", className: "hover:text-yellow-200" },
        { to: "/projects", text: "Projects", className: "hover:text-yellow-200" },
        // { to: "/about", text: "About", className: "hover:text-yellow-200" },
        { to: "/contact", text: "Contact", className: "bg-[#ba86ea81] hover:text-yellow-200" }
    ];

    return (
        <nav className="relative z-10 flex items-center justify-between p-5 text-white transition-shadow duration-300 ease-in-out w-full">
            <div className="text-2xl font-bold">
                Dhiman<span className="text-[#8A2BE2]">N.</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex md:items-center">
                {navLinks.map((link) => (
                    <Link key={link.to} to={link.to}>
                        <p className={`px-4 py-2 text-white font-semibold rounded-md transition duration-300 ease-in-out transform hover:-translate-y-0.5 hover:scale-105 ${link.className}`}>
                            {link.text}
                        </p>
                    </Link>
                ))}
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden fixed inset-0 z-50 bg-black bg-opacity-90 transition-opacity duration-300 ${
                    isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                }`}
            >
                <div className="flex flex-col items-center justify-center h-full gap-8">
                    {navLinks.map((link) => (
                        <Link key={link.to} to={link.to} onClick={closeMenu}>
                            <p className={`px-6 py-2 text-white font-semibold rounded-md transition duration-300 ease-in-out transform hover:-translate-y-0.5 hover:scale-105 ${link.className}`}>
                                {link.text}
                            </p>
                        </Link>
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