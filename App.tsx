import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Values from './components/Values';
import Team from './components/Team';
import TechStack from './components/TechStack';
import Contact from './components/Contact';
import FadeInSection from './components/FadeInSection';
import { Language } from './types';
import { CONTENT } from './constants';

const App: React.FC = () => {
  // Main language state
  const [lang, setLang] = useState<Language>('en');
  // Scroll progress state
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      
      if (scrollHeight > 0) {
        const progress = scrollTop / scrollHeight;
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`min-h-screen flex flex-col ${lang === 'jp' ? 'font-jp' : 'font-sans'}`}>
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 z-[100] bg-transparent">
        <div 
          className="h-full bg-corporate-accent shadow-[0_0_10px_rgba(59,130,246,0.5)] transition-all duration-100 ease-out"
          style={{ width: `${scrollProgress * 100}%` }}
        />
      </div>

      <Navbar lang={lang} setLang={setLang} />
      
      <main className="flex-grow">
        <FadeInSection>
          <Hero lang={lang} />
        </FadeInSection>
        
        <FadeInSection>
          <Values lang={lang} />
        </FadeInSection>
        
        <FadeInSection>
          <Team lang={lang} />
        </FadeInSection>
        
        <FadeInSection>
          <TechStack lang={lang} />
        </FadeInSection>
        
        <FadeInSection>
          <Contact lang={lang} />
        </FadeInSection>
      </main>

      <footer className="bg-corporate-navy py-8 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-slate-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Kizuna Tech Solutions. {CONTENT[lang].footer.rights}</p>
          <div className="mt-4 md:mt-0 space-x-6">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;