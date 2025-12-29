
import React, { useState, useEffect, useRef } from 'react';
import { Language, translations } from './types';
import Snowflakes from './components/Snowflakes';
import LanguageSelector from './components/LanguageSelector';
import LogoIcon from './components/LogoIcon';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isShutterOpen, setIsShutterOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedImg, setSelectedImg] = useState<string | null>(null);
  const [sliderPos, setSliderPos] = useState(50);
  
  const [formData, setFormData] = useState({ name: '', phone: '', date: '' });
  
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observerRef.current?.observe(el));

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observerRef.current?.disconnect();
    };
  }, [lang]);

  useEffect(() => {
    if (lang) {
      setTimeout(() => setIsShutterOpen(true), 100);
    }
  }, [lang]);

  if (!lang) {
    return <LanguageSelector onSelect={setLang} />;
  }

  const t = translations[lang];

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    
    const message = `Hello Photosession Pro! My name is ${formData.name}. I want to book a session for ${formData.date}. Contact: ${formData.phone}`;
    const waUrl = `https://wa.me/84901234567?text=${encodeURIComponent(message)}`;
    
    setTimeout(() => {
      window.open(waUrl, '_blank');
      setSubmitted(false);
      setFormData({ name: '', phone: '', date: '' });
    }, 1500);
  };

  const navItems = [
    { id: 'gallery', label: t.nav.gallery },
    { id: 'prices', label: t.nav.prices },
    { id: 'about', label: t.nav.about },
    { id: 'booking', label: t.nav.booking },
    { id: 'contacts', label: t.nav.contacts }
  ];

  const galleryImages = [
    { src: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800", title: "Island Lovestory" },
    { src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=800", title: "Vinpearl Castle" },
    { src: "https://images.unsplash.com/photo-1518134458944-124eef065977?auto=format&fit=crop&q=80&w=800", title: "Tropical Paradise" },
    { src: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&q=80&w=800", title: "Professional Studio" },
    { src: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&q=80&w=800", title: "Nha Trang Sunset" },
    { src: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80&w=800", title: "European Style" }
  ];

  return (
    <div className={`relative min-h-screen bg-slate-950 text-white selection:bg-cyan-500/30 ${isShutterOpen ? 'shutter-open' : ''}`}>
      {/* Camera Shutter Animation */}
      <div className="shutter-top" />
      <div className="shutter-bottom" />
      
      <Snowflakes />

      {/* Lightbox */}
      {selectedImg && (
        <div 
          className="fixed inset-0 z-[100] bg-slate-950/95 flex items-center justify-center p-4 backdrop-blur-xl animate-in fade-in duration-300"
          onClick={() => setSelectedImg(null)}
        >
          <button className="absolute top-8 right-8 text-white hover:text-cyan-400 p-2"><svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg></button>
          <img src={selectedImg} className="max-w-full max-h-[90vh] rounded-2xl shadow-2xl" alt="Enlarged" />
        </div>
      )}
      
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-700 ${scrolled ? 'py-3 glass border-b border-white/5' : 'py-8'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <button onClick={() => scrollTo('hero')} className="flex items-center gap-3 group text-left">
             <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center transition-transform duration-700 group-hover:rotate-180">
               <LogoIcon className="w-8 h-8 sm:w-10 sm:h-10 text-white group-hover:text-cyan-400 transition-colors" />
             </div>
             <div className="flex flex-col">
               <span className="text-lg sm:text-xl font-serif font-bold tracking-tight uppercase">PHOTOSESSION <span className="text-cyan-400">PRO</span></span>
               <span className="text-[7px] sm:text-[8px] tracking-[.4em] text-white/40 font-bold uppercase -mt-1">Vinpearl • Nha Trang</span>
             </div>
          </button>
          
          <ul className="hidden lg:flex items-center gap-10">
            {navItems.map(item => (
              <li key={item.id}>
                <button 
                  onClick={() => scrollTo(item.id)}
                  className="text-xs font-semibold tracking-[.2em] hover:text-cyan-400 transition-all uppercase relative group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all group-hover:w-full" />
                </button>
              </li>
            ))}
            <li className="flex gap-3 ml-6 border-l border-white/10 pl-6">
              {['ru', 'en', 'vi'].map(l => (
                <button key={l} onClick={() => setLang(l as Language)} className={`text-[10px] font-bold transition-colors ${lang === l ? 'text-cyan-400' : 'text-white/30 hover:text-white'}`}>{l.toUpperCase()}</button>
              ))}
            </li>
          </ul>

          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden glass p-3 rounded-2xl hover:bg-cyan-500/20 transition-all z-[70] active:scale-90"
          >
             <svg className={`w-6 h-6 text-cyan-400 transition-transform duration-500 ${isMenuOpen ? 'rotate-90' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
               {isMenuOpen ? (
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
               ) : (
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
               )}
             </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <div className={`fixed inset-0 z-[55] bg-slate-950/95 backdrop-blur-xl lg:hidden transition-all duration-700 flex flex-col justify-center px-10 gap-8 ${isMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'}`}>
        {navItems.map((item, idx) => (
          <button 
            key={item.id}
            onClick={() => scrollTo(item.id)}
            className="text-4xl font-serif text-white hover:text-cyan-400 text-left transition-all duration-300 transform"
            style={{ transitionDelay: `${idx * 100}ms` }}
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* Hero Section */}
      <header id="hero" className="relative h-screen flex items-center justify-center text-center px-6 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&q=80&w=1920" alt="Hero background" className="w-full h-full object-cover opacity-60" />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/70 to-slate-950" />
        </div>

        <div className="max-w-5xl fade-in pt-20">
          <div className="flex justify-center mb-8">
            <LogoIcon className="w-16 h-16 sm:w-24 sm:h-24 text-white animate-pulse" />
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-serif font-bold mb-8 leading-[1.1] tracking-tighter text-glow uppercase px-2">
            {t.hero.title.split(' ')[0]} <span className="italic font-normal text-white/90">{t.hero.title.split(' ')[1]}</span>
          </h1>
          <p className="text-base sm:text-lg md:text-2xl text-white/60 mb-12 font-light max-w-2xl mx-auto italic leading-relaxed px-4">
            {t.hero.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center px-6">
            <button 
              onClick={() => scrollTo('booking')}
              className="px-8 sm:px-12 py-4 sm:py-5 bg-white text-slate-950 rounded-2xl font-bold hover:bg-cyan-400 hover:text-white transition-all duration-500 transform hover:-translate-y-1 shadow-2xl uppercase tracking-widest text-xs sm:text-sm shimmer-btn btn-glow"
            >
              {t.hero.cta}
            </button>
            <button 
              onClick={() => scrollTo('gallery')}
              className="px-8 sm:px-12 py-4 sm:py-5 glass border border-white/10 rounded-2xl font-bold hover:bg-white/10 transition-all duration-500 uppercase tracking-widest text-xs sm:text-sm"
            >
              {t.nav.gallery}
            </button>
          </div>
        </div>
      </header>

      {/* AI Before/After Slider */}
      <section className="py-24 px-6 bg-slate-950 relative">
        <div className="max-w-5xl mx-auto">
          <div className="reveal text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-serif mb-6 text-glow uppercase">{t.aiMagic.title}</h2>
            <p className="text-white/40 italic">{t.aiMagic.subtitle}</p>
          </div>
          <div className="relative aspect-video rounded-[2rem] sm:rounded-[3rem] overflow-hidden glass shadow-2xl reveal group">
             {/* Original */}
             <img src="https://images.unsplash.com/photo-1518134458944-124eef065977?auto=format&fit=crop&q=80&w=1200" className="absolute inset-0 w-full h-full object-cover" alt="Original" />
             {/* Processed AI */}
             <div 
               className="absolute inset-0 w-full h-full overflow-hidden" 
               style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
             >
                <img src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&q=80&w=1200" className="absolute inset-0 w-full h-full object-cover filter saturate-150 contrast-110" alt="Processed" />
             </div>
             {/* Slider Line */}
             <div 
               className="absolute inset-y-0 w-1 bg-cyan-400 cursor-ew-resize flex items-center justify-center z-10"
               style={{ left: `${sliderPos}%` }}
             >
                <div className="w-10 h-10 rounded-full bg-cyan-400 text-slate-950 flex items-center justify-center shadow-lg transform -translate-x-1/2">
                   <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7l-5 5m0 0l5 5m-5-5h18m-5-5l5 5m0 0l-5 5" /></svg>
                </div>
             </div>
             <input 
               type="range" min="0" max="100" value={sliderPos} 
               onChange={(e) => setSliderPos(Number(e.target.value))}
               className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20"
             />
             <div className="absolute bottom-6 left-6 px-4 py-2 glass rounded-xl text-[10px] font-bold uppercase tracking-widest z-10">{t.aiMagic.after}</div>
             <div className="absolute bottom-6 right-6 px-4 py-2 glass rounded-xl text-[10px] font-bold uppercase tracking-widest z-10">{t.aiMagic.before}</div>
          </div>
        </div>
      </section>

      {/* AI Services Section */}
      <section className="py-24 px-6 bg-slate-950 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10">
             <div className="reveal glass-card p-8 sm:p-12 rounded-[2rem] sm:rounded-[2.5rem] border-cyan-400/20 border group hover:border-cyan-400/50 transition-all duration-500">
                <div className="w-12 h-12 sm:w-16 sm:h-16 mb-6 sm:mb-8 bg-cyan-500/10 rounded-2xl flex items-center justify-center text-2xl sm:text-3xl group-hover:rotate-12 transition-transform">🤖</div>
                <h3 className="text-2xl sm:text-3xl font-serif mb-4 text-white group-hover:text-cyan-400 transition-colors">{t.aiServices.neuro.name}</h3>
                <p className="text-white/50 text-base sm:text-lg leading-relaxed">{t.aiServices.neuro.desc}</p>
             </div>
             <div className="reveal glass-card p-8 sm:p-12 rounded-[2rem] sm:rounded-[2.5rem] border-cyan-400/20 border group hover:border-cyan-400/50 transition-all duration-500">
                <div className="w-12 h-12 sm:w-16 sm:h-16 mb-6 sm:mb-8 bg-cyan-500/10 rounded-2xl flex items-center justify-center text-2xl sm:text-3xl group-hover:rotate-12 transition-transform">🎬</div>
                <h3 className="text-2xl sm:text-3xl font-serif mb-4 text-white group-hover:text-cyan-400 transition-colors">{t.aiServices.video.name}</h3>
                <p className="text-white/50 text-base sm:text-lg leading-relaxed">{t.aiServices.video.desc}</p>
             </div>
          </div>
        </div>
      </section>

      {/* Prices Section */}
      <section id="prices" className="py-24 sm:py-32 px-6 bg-slate-950 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 sm:mb-24 reveal">
            <h2 className="text-3xl sm:text-5xl md:text-7xl font-serif mb-6 uppercase">{t.prices.title}</h2>
            <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch">
            {[t.prices.basic, t.prices.standard, t.prices.premium].map((pkg, idx) => (
              <div key={idx} className={`reveal relative p-8 sm:p-12 rounded-[2rem] sm:rounded-[2.5rem] transition-all duration-700 hover:scale-[1.03] group flex flex-col ${idx === 1 ? 'glass border-cyan-400/30 border-2 shadow-2xl shadow-cyan-500/5' : 'glass'}`}>
                {idx === 1 && <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-cyan-400 text-slate-950 px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-xl">Popular</div>}
                <h3 className="text-2xl sm:text-3xl font-serif mb-2">{pkg.name}</h3>
                <div className="flex flex-col mb-8 sm:mb-10">
                  <span className="text-sm sm:text-lg text-white/30 line-through font-medium">{pkg.oldPrice}</span>
                  <span className="text-4xl sm:text-5xl font-bold text-cyan-400">{pkg.price}</span>
                </div>
                <ul className="space-y-4 sm:space-y-5 mb-10 sm:mb-12 flex-grow">
                  {pkg.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-3 sm:gap-4 text-white/50 text-xs sm:text-sm leading-relaxed">
                      <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-cyan-400/10 flex items-center justify-center shrink-0 mt-0.5">
                        <svg className="w-2 h-2 sm:w-3 sm:h-3 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                      </div>
                      {feat}
                    </li>
                  ))}
                </ul>
                <button 
                  onClick={() => scrollTo('booking')}
                  className={`block w-full text-center py-4 sm:py-5 rounded-2xl font-bold transition-all duration-500 uppercase tracking-widest text-[10px] sm:text-xs ${idx === 1 ? 'bg-cyan-500 text-slate-950 hover:bg-white shimmer-btn' : 'border border-white/10 hover:bg-white hover:text-slate-950'}`}
                >
                  {t.hero.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 sm:py-32 px-6 bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 sm:mb-20 reveal">
            <h2 className="text-3xl sm:text-5xl md:text-7xl font-serif mb-6 uppercase">{t.nav.gallery}</h2>
            <p className="text-cyan-400 font-bold tracking-[0.3em] text-[10px] sm:text-xs uppercase italic">Capturing Pure Magic</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {galleryImages.map((img, idx) => (
              <div 
                key={idx} 
                className="reveal group relative aspect-[4/5] overflow-hidden rounded-3xl glass-card transition-all duration-700 hover:-translate-y-3 cursor-pointer"
                onClick={() => setSelectedImg(img.src)}
              >
                <img src={img.src} alt={img.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-80 group-hover:opacity-100" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6 sm:p-10">
                   <span className="text-cyan-400 text-[10px] font-bold uppercase tracking-[0.4em] mb-2">Portfolio</span>
                   <h3 className="text-xl sm:text-2xl font-serif text-white">{img.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 sm:py-32 px-6 bg-slate-950 relative">
        <div className="max-w-3xl mx-auto">
           <div className="reveal text-center mb-16">
              <h2 className="text-3xl sm:text-5xl font-serif mb-6 uppercase">{t.faq.title}</h2>
           </div>
           <div className="space-y-4">
              {[t.faq.q1, t.faq.q2, t.faq.q3].map((item, idx) => (
                 <details key={idx} className="reveal glass rounded-2xl p-6 group cursor-pointer transition-all duration-300 open:bg-white/5">
                    <summary className="list-none flex items-center justify-between font-bold text-lg">
                       {item.q}
                       <svg className="w-6 h-6 text-cyan-400 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                    </summary>
                    <p className="mt-4 text-white/50 leading-relaxed italic">{item.a}</p>
                 </details>
              ))}
           </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 sm:py-32 px-6 bg-slate-950 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 sm:gap-24 items-center">
           <div className="reveal relative group px-4">
              <div className="relative z-10 aspect-square overflow-hidden rounded-[2rem] sm:rounded-[3rem] glass p-2 sm:p-3 shadow-2xl">
                 <img src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&q=80&w=1000" alt="Studio" className="w-full h-full object-cover rounded-[1.8rem] sm:rounded-[2.5rem] transition-all duration-1000" />
              </div>
           </div>
           <div className="reveal text-left px-4">
              <span className="text-cyan-400 font-bold tracking-[0.4em] text-[10px] uppercase mb-6 block">{t.nav.about}</span>
              <h2 className="text-3xl sm:text-5xl md:text-7xl font-serif mb-8 sm:mb-10 leading-[1.1] uppercase">{t.about.title}</h2>
              <p className="text-lg sm:text-xl text-white/50 leading-relaxed mb-12 font-light italic">{t.about.text}</p>
           </div>
        </div>
      </section>

      {/* Booking Form */}
      <section id="booking" className="py-24 sm:py-32 px-4 sm:px-6 bg-slate-950">
        <div className="reveal max-w-4xl mx-auto glass p-8 sm:p-24 rounded-[2.5rem] sm:rounded-[3rem] border border-white/5 shadow-2xl relative overflow-hidden">
          <div className="text-center mb-12 sm:mb-16 relative">
            <h2 className="text-3xl sm:text-5xl font-serif mb-6 uppercase">{t.booking.title}</h2>
          </div>
          {submitted ? (
            <div className="text-center py-20 animate-pulse">
               <p className="text-2xl sm:text-3xl font-serif text-cyan-400">{t.booking.success}</p>
            </div>
          ) : (
            <form onSubmit={handleBookingSubmit} className="space-y-6 sm:space-y-8 relative">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 text-left">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-bold ml-2">{t.booking.nameLabel}</label>
                  <input required type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 sm:px-8 py-4 sm:py-5 focus:outline-none focus:border-cyan-400 transition-all text-white text-sm" placeholder={t.booking.namePlaceholder} />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-bold ml-2">{t.booking.phoneLabel}</label>
                  <input required type="tel" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 sm:px-8 py-4 sm:py-5 focus:outline-none focus:border-cyan-400 transition-all text-white text-sm" placeholder={t.booking.phonePlaceholder} />
                </div>
              </div>
              <div className="space-y-2 text-left">
                <label className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-bold ml-2">{t.booking.dateLabel}</label>
                <input required type="date" value={formData.date} onChange={e => setFormData({...formData, date: e.target.value})} className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 sm:px-8 py-4 sm:py-5 focus:outline-none focus:border-cyan-400 transition-all text-white/50 text-sm" />
              </div>
              <button type="submit" className="group w-full py-5 sm:py-6 bg-white text-slate-950 rounded-2xl font-bold hover:bg-cyan-500 hover:text-white transition-all duration-500 uppercase tracking-[0.2em] text-[10px] sm:text-xs btn-glow shimmer-btn">
                {t.booking.submit}
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer id="contacts" className="py-24 sm:py-32 px-6 border-t border-white/5 bg-slate-950 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16 sm:gap-20 mb-20 sm:mb-24">
            <div className="col-span-1 md:col-span-2 reveal">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 flex items-center justify-center">
                  <LogoIcon className="w-10 h-10 text-white" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-2xl sm:text-3xl font-serif font-bold tracking-tight uppercase">PHOTOSESSION <span className="text-cyan-400">PRO</span></span>
                  <span className="text-[8px] tracking-[.4em] text-white/40 font-bold uppercase">Vietnam • Elite Media</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                {['Instagram', 'WhatsApp', 'Telegram'].map((social) => (
                  <a key={social} href="#" className="px-5 sm:px-6 py-3 glass-card rounded-xl text-[9px] sm:text-[10px] font-bold uppercase tracking-widest hover:bg-cyan-400 hover:text-slate-950 transition-all duration-500 border border-white/5">{social}</a>
                ))}
              </div>
            </div>
            <div className="reveal text-left">
              <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold mb-6 sm:mb-8 text-cyan-400">{t.nav.contacts}</h4>
              <p className="text-white/70 text-sm sm:text-base">{t.contacts.address}</p>
              <p className="text-xl sm:text-2xl font-serif text-white mt-4">+84 901 234 567</p>
            </div>
            <div className="reveal text-left">
              <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold mb-6 sm:mb-8 text-cyan-400">{t.contacts.navigation}</h4>
              <ul className="space-y-3 sm:space-y-4">
                {navItems.map(item => (
                  <li key={item.id}>
                    <button onClick={() => scrollTo(item.id)} className="text-white/40 hover:text-cyan-400 transition-colors uppercase text-[9px] sm:text-[10px] font-bold tracking-widest text-left">
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="text-white/20 text-[8px] sm:text-[10px] uppercase tracking-[0.2em] font-medium text-center">© 2024 PHOTOSESSION PRO. Elite Media & AI Production.</p>
        </div>
      </footer>

      {/* Floating Action Button */}
      <div className="fixed bottom-6 right-6 sm:bottom-10 sm:right-10 z-50">
        <a href="https://wa.me/84901234567" target="_blank" rel="noopener noreferrer" className="w-14 h-14 sm:w-16 sm:h-16 bg-white text-slate-950 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-90 transition-all duration-500 btn-glow">
           <svg className="w-7 h-7 sm:w-8 sm:h-8" fill="currentColor" viewBox="0 0 448 512"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-5.5-2.8-23.2-8.5-44.2-27.1-16.4-14.6-27.4-32.7-30.6-38.2-3.2-5.6-.3-8.6 2.4-11.3 2.5-2.4 5.5-6.5 8.3-9.7 2.8-3.3 3.7-5.6 5.5-9.2 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 13.2 5.8 23.5 9.2 31.6 11.8 13.3 4.2 25.4 3.6 35 2.2 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" /></svg>
        </a>
      </div>
    </div>
  );
};

export default App;
