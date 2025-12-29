
import React from 'react';
import { Language } from '../types';
import LogoIcon from './LogoIcon';

interface Props {
  onSelect: (lang: Language) => void;
}

const LanguageSelector: React.FC<Props> = ({ onSelect }) => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900 overflow-hidden">
      <div className="absolute inset-0 opacity-40">
        <img 
          src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&q=80&w=1920" 
          alt="background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-slate-900/80 to-slate-900" />
      </div>

      <div className="relative text-center p-8 glass rounded-3xl max-w-lg w-full mx-4 shadow-2xl fade-in">
        <div className="mb-8">
           <div className="w-32 h-32 mx-auto flex items-center justify-center mb-6 group transition-all duration-700 hover:rotate-180">
             <LogoIcon className="w-24 h-24 text-white" />
           </div>
           <h1 className="text-4xl font-serif font-bold text-white mb-2 tracking-tighter uppercase">PHOTOSESSION <span className="text-cyan-400">PRO</span></h1>
           <p className="text-cyan-200 uppercase tracking-[0.3em] text-[10px] font-bold">Nha Trang • Vinpearl • Vietnam</p>
        </div>

        <div className="grid gap-3">
          <button 
            onClick={() => onSelect('ru')}
            className="py-4 px-8 glass-card hover:bg-cyan-500/30 border border-white/10 rounded-2xl transition-all duration-500 font-medium tracking-wide flex items-center justify-between group"
          >
            <span className="flex items-center gap-3">
              <span className="text-xl">🇷🇺</span> Русский
            </span>
            <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
          </button>
          <button 
            onClick={() => onSelect('en')}
            className="py-4 px-8 glass-card hover:bg-cyan-500/30 border border-white/10 rounded-2xl transition-all duration-500 font-medium tracking-wide flex items-center justify-between group"
          >
            <span className="flex items-center gap-3">
              <span className="text-xl">🇺🇸</span> English
            </span>
            <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
          </button>
          <button 
            onClick={() => onSelect('vi')}
            className="py-4 px-8 glass-card hover:bg-cyan-500/30 border border-white/10 rounded-2xl transition-all duration-500 font-medium tracking-wide flex items-center justify-between group"
          >
            <span className="flex items-center gap-3">
              <span className="text-xl">🇻🇳</span> Tiếng Việt
            </span>
            <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LanguageSelector;
