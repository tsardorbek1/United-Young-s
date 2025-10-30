import React, { useState, useEffect } from 'react';
import { JOIN_NOW_URL, navLinks } from '../constants';
import Logo from './Logo';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-sm shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#home" className="flex items-center space-x-2">
            <Logo showText textColor="text-gray-400" imgClassName="h-14 w-auto" />
          </a>
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-slate-700 hover:text-[#2AC1FF] font-medium transition-colors">
                {link.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center space-x-4">
            <a 
              href={JOIN_NOW_URL} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hidden md:inline-block bg-[#2AC1FF] text-white font-bold py-2 px-6 rounded-full hover:bg-opacity-90 transition-all shadow-md hover:shadow-lg"
            >
              Join Now
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-slate-800 focus:outline-none"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <nav className="flex flex-col items-center space-y-4 py-4">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setIsOpen(false)} className="text-slate-700 hover:text-[#2AC1FF] font-medium transition-colors">
                {link.label}
              </a>
            ))}
            <a 
              href={JOIN_NOW_URL} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-[#2AC1FF] text-white font-bold py-3 px-8 rounded-full hover:bg-opacity-90 transition-all shadow-md hover:shadow-lg w-full text-center mx-4"
            >
              Join Now
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;