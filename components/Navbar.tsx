import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { Language } from '../types';
import { CONTENT } from '../constants';

interface NavbarProps {
  lang: Language;
  setLang: (lang: Language) => void;
}

const Navbar: React.FC<NavbarProps> = ({ lang, setLang }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const t = CONTENT[lang].nav;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: t.services, href: '#values' },
    { label: t.team, href: '#team' },
    { label: t.tech, href: '#tech' },
    { label: t.contact, href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);

    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);

    if (element) {
      // 80px offset ensures the section title isn't hidden behind the fixed header
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <button 
          onClick={(e) => handleNavClick(e, '#')}
          className="flex items-center space-x-2 group focus:outline-none"
        >
          <div className="w-8 h-8 bg-corporate-blue rounded-sm flex items-center justify-center transition-transform group-hover:scale-105">
             <span className="text-white font-bold text-xl">K</span>
          </div>
          <span className={`text-xl font-bold tracking-tight ${isScrolled ? 'text-corporate-navy' : 'text-white'}`}>
            KIZUNA<span className="font-light">TECH</span>
          </span>
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`text-sm font-medium transition-colors hover:text-corporate-accent cursor-pointer ${
                isScrolled ? 'text-slate-600' : 'text-slate-200'
              }`}
            >
              {link.label}
            </a>
          ))}
          
          {/* Language Switcher Desktop */}
          <div className={`flex items-center rounded-full p-1 border transition-colors ml-4 ${
             isScrolled ? 'border-slate-200 bg-slate-100' : 'border-white/20 bg-black/20 backdrop-blur-sm'
          }`}>
            <button
              onClick={() => setLang('en')}
              className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all duration-300 ${
                lang === 'en' 
                  ? 'bg-white text-corporate-navy shadow-sm' 
                  : (isScrolled ? 'text-slate-500 hover:text-slate-800' : 'text-slate-300 hover:text-white')
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLang('jp')}
              className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-bold transition-all duration-300 ${
                lang === 'jp' 
                  ? 'bg-corporate-accent text-white shadow-sm' 
                  : (isScrolled ? 'text-slate-500 hover:text-slate-800' : 'text-slate-300 hover:text-white')
              }`}
            >
              JP
              {lang === 'jp' && <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X className={isScrolled ? 'text-slate-800' : 'text-white'} />
          ) : (
            <Menu className={isScrolled ? 'text-slate-800' : 'text-white'} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-6 px-6 flex flex-col space-y-4 animate-in slide-in-from-top-5 duration-200">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-slate-800 text-lg font-medium cursor-pointer"
              onClick={(e) => handleNavClick(e, link.href)}
            >
              {link.label}
            </a>
          ))}
          
          <div className="pt-6 border-t border-slate-100 flex flex-col space-y-3">
             <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-2">
                <Globe className="w-3 h-3" /> Language
             </span>
             <div className="flex bg-slate-100 p-1 rounded-lg">
                <button
                  onClick={() => { setLang('en'); setIsOpen(false); }}
                  className={`flex-1 py-2.5 rounded-md text-sm font-bold transition-all ${
                    lang === 'en' ? 'bg-white text-corporate-navy shadow-sm' : 'text-slate-500'
                  }`}
                >
                  English
                </button>
                <button
                  onClick={() => { setLang('jp'); setIsOpen(false); }}
                  className={`flex-1 py-2.5 rounded-md text-sm font-bold transition-all ${
                    lang === 'jp' ? 'bg-corporate-accent text-white shadow-sm' : 'text-slate-500'
                  }`}
                >
                  日本語
                </button>
             </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;