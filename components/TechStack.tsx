import React from 'react';
import { Language } from '../types';
import { CONTENT } from '../constants';
import { Server, Layout, Database, Cloud, Code2, Container } from 'lucide-react';

interface TechStackProps {
  lang: Language;
}

const TechStack: React.FC<TechStackProps> = ({ lang }) => {
  const t = CONTENT[lang].tech;

  const techs = [
    { name: "Java", icon: Code2, desc: "Core, SE/EE" },
    { name: "Spring Boot", icon: Server, desc: "Microservices" },
    { name: "React / Vue", icon: Layout, desc: "Modern UI" },
    { name: "AWS / Azure", icon: Cloud, desc: "Cloud Infra" },
    { name: "Docker / K8s", icon: Container, desc: "Containerization" },
    { name: "PostgreSQL", icon: Database, desc: "RDBMS" },
  ];

  return (
    <section id="tech" className="py-20 bg-corporate-navy text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">{t.title}</h2>
          <p className="text-slate-400">{t.subtitle}</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {techs.map((tech, idx) => (
            <div key={idx} className="flex flex-col items-center p-6 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-colors">
              <tech.icon className="w-8 h-8 text-blue-400 mb-3" />
              <span className="font-bold text-sm mb-1">{tech.name}</span>
              <span className="text-xs text-slate-400">{tech.desc}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;