import React, { useEffect, useRef, useState } from 'react';
import { Language } from '../types';
import { CONTENT } from '../constants';

interface TeamProps {
  lang: Language;
}

const Team: React.FC<TeamProps> = ({ lang }) => {
  const t = CONTENT[lang].team;

  // Placeholder images for a professional look
  const photoIds = ['1059', '1027', '1012', '1006', '1035', '1025']; 

  // Track which images have been revealed
  const [revealedIndices, setRevealedIndices] = useState<Set<number>>(new Set());
  const imageRefs = useRef<(HTMLImageElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-index'));
            setRevealedIndices((prev) => {
              const newSet = new Set(prev);
              newSet.add(index);
              return newSet;
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2, rootMargin: '0px 0px -50px 0px' }
    );

    imageRefs.current.forEach((img) => {
      if (img) observer.observe(img);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="team" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-corporate-navy mb-4">{t.title}</h2>
          <p className="text-slate-600">{t.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {t.roles.map((role, index) => (
            <div key={index} className="group">
              <div className="flex items-start space-x-4">
                <div className="relative shrink-0">
                  <img
                    ref={(el) => { imageRefs.current[index] = el; }}
                    data-index={index}
                    src={`https://picsum.photos/id/${photoIds[index]}/150/150`}
                    alt={role.name}
                    className={`w-20 h-20 rounded-md object-cover shadow-sm transition-all duration-1000 ease-out will-change-transform ${
                      revealedIndices.has(index) 
                        ? 'opacity-100 scale-100 grayscale group-hover:grayscale-0' 
                        : 'opacity-0 scale-90 grayscale'
                    }`}
                  />
                  {index === 1 && ( // Highlight badge for BA
                    <div 
                      className={`absolute -top-2 -right-2 bg-corporate-accent text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-sm transition-all duration-700 delay-500 ${
                        revealedIndices.has(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                      }`}
                    >
                      N1
                    </div>
                  )}
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-corporate-accent uppercase tracking-wide mb-1">
                    {role.title}
                  </h4>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {role.name}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed border-l-2 border-slate-200 pl-3">
                    {role.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;