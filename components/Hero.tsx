import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Language } from '../types';
import { CONTENT } from '../constants';

interface HeroProps {
  lang: Language;
}

const Hero: React.FC<HeroProps> = ({ lang }) => {
  const t = CONTENT[lang].hero;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-corporate-navy">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://picsum.photos/id/1073/2000/1200?grayscale&blur=2"
          alt="Technology Background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-corporate-navy/90 via-corporate-navy/80 to-corporate-light"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20 text-center">
        <span className="inline-block py-1 px-3 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-300 text-xs font-semibold tracking-wider uppercase mb-6 backdrop-blur-md">
          {lang === 'en' ? 'Enterprise Software Development' : 'エンタープライズ・ソフトウェア開発'}
        </span>
        
        <h1 className={`text-4xl md:text-6xl font-bold text-white mb-8 leading-tight ${lang === 'jp' ? 'font-sans' : ''}`}>
          {t.headline}
        </h1>
        
        <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed font-light">
          {t.subheadline}
        </p>
        
        <div className="flex justify-center">
          <a
            href="#contact"
            className="group flex items-center bg-white text-corporate-navy px-8 py-4 rounded-sm font-semibold transition-all hover:bg-corporate-accent hover:text-white"
          >
            {t.cta}
            <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;