import React from 'react';
import { ShieldCheck, MessageSquare, Briefcase, Clock } from 'lucide-react';
import { Language } from '../types';
import { CONTENT } from '../constants';

interface ValuesProps {
  lang: Language;
}

const Values: React.FC<ValuesProps> = ({ lang }) => {
  const t = CONTENT[lang].values;

  const icons = [ShieldCheck, MessageSquare, Briefcase, Clock];

  return (
    <section id="values" className="py-24 bg-corporate-light">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-corporate-navy mb-4">{t.title}</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">{t.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.items.map((item, index) => {
            const Icon = icons[index];
            return (
              <div 
                key={index} 
                className="bg-white p-8 rounded-lg shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6 text-corporate-blue" />
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-3">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Values;