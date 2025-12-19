import React from 'react';
import { Language } from '../types';
import { CONTENT } from '../constants';
import { Mail, CheckCircle } from 'lucide-react';

interface ContactProps {
  lang: Language;
}

const Contact: React.FC<ContactProps> = ({ lang }) => {
  const t = CONTENT[lang].contact;

  return (
    <section id="contact" className="py-24 bg-slate-50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row">
          {/* Info Side */}
          <div className="bg-corporate-blue p-10 md:w-2/5 text-white flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-4">{t.title}</h3>
              <p className="text-blue-100 mb-8">{t.desc}</p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-blue-300" />
                  <span className="text-sm">NDAs signed upfront</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-blue-300" />
                  <span className="text-sm">Direct access to Lead</span>
                </div>
              </div>
            </div>
            
            <div className="mt-12">
              <Mail className="w-10 h-10 text-blue-300 mb-4 opacity-50" />
              <p className="text-xs text-blue-200 uppercase tracking-widest">Kizuna Tech Solutions</p>
            </div>
          </div>

          {/* Form Side */}
          <div className="p-10 md:w-3/5">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  {t.form.name}
                </label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 rounded-md border border-slate-300 focus:border-corporate-blue focus:ring-1 focus:ring-corporate-blue outline-none transition-all bg-slate-50"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  {t.form.email}
                </label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 rounded-md border border-slate-300 focus:border-corporate-blue focus:ring-1 focus:ring-corporate-blue outline-none transition-all bg-slate-50"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  {t.form.message}
                </label>
                <textarea 
                  rows={4} 
                  className="w-full px-4 py-3 rounded-md border border-slate-300 focus:border-corporate-blue focus:ring-1 focus:ring-corporate-blue outline-none transition-all bg-slate-50"
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full bg-corporate-navy text-white font-bold py-3 rounded-md hover:bg-slate-800 transition-colors"
              >
                {t.form.submit}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;