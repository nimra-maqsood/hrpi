
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Globe, Users, ShieldAlert, Newspaper, Heart, Mail } from 'lucide-react';
import logo from '../src/assets/images/hrpi_logo_clean_1779034169966.png';
interface HeaderProps {
  currentPage: string;
}

const Header: React.FC<HeaderProps> = ({ currentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', hash: 'home' },
    { label: 'About', hash: 'about' },
    { label: 'Organs', hash: 'organs' },
    { label: 'Impact', hash: 'projects' },
    { label: 'News', hash: 'news' },
    { label: 'Submit Issue', hash: 'report-issue' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'py-3 bg-white/90 backdrop-blur-xl border-b border-slate-100 shadow-2xl shadow-slate-200/50' : 'py-6 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <a href="#home" className="flex items-center gap-4 group">
            <div className="relative w-16 h-16 flex items-center justify-center p-1 bg-white rounded-2xl shadow-xl border border-slate-100 group-hover:rotate-6 transition-transform">
              <img 
                src={logo} 
                alt="HRPI Logo" 
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h1 className="text-[10px] sm:text-xs md:text-sm font-black uppercase leading-tight tracking-widest text-slate-900 group-hover:text-hrpi-blue transition-colors">
                Human Rights
              </h1>
              <p className="text-[7px] sm:text-[8px] md:text-[10px] uppercase font-bold text-hrpi-green leading-tight">
                Protection International
              </p>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-1 bg-slate-100/50 p-1.5 rounded-2xl backdrop-blur-md">
            {navItems.map((item) => (
              <a
                key={item.hash}
                href={`#${item.hash}`}
                className={`px-5 py-2.5 text-sm font-black uppercase tracking-tight rounded-xl transition-all ${
                  currentPage === item.hash 
                    ? 'text-white bg-hrpi-blue shadow-lg shadow-hrpi-blue/30' 
                    : 'text-slate-500 hover:text-slate-900 hover:bg-white'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#projects" 
              className="flex items-center gap-2 bg-hrpi-green text-white px-7 py-3 rounded-2xl text-sm font-black uppercase tracking-tighter hover:bg-hrpi-green/90 transition-all shadow-xl shadow-hrpi-green/20"
            >
              <Heart className="w-5 h-5 fill-white" /> Support Us
            </motion.a>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-3 bg-slate-100 rounded-2xl text-slate-900 hover:text-hrpi-blue transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-2xl border-t border-slate-100 px-6 py-10 space-y-4 shadow-3xl overflow-y-auto max-h-[85vh]"
          >
            {navItems.map((item) => (
              <a
                key={item.hash}
                href={`#${item.hash}`}
                onClick={() => setIsMenuOpen(false)}
                className={`flex items-center gap-5 px-6 py-5 text-xl font-display uppercase tracking-widest rounded-[2rem] transition-all shadow-sm ${
                  currentPage === item.hash 
                    ? 'bg-hrpi-blue text-white shadow-xl shadow-hrpi-blue/30' 
                    : 'text-slate-600 bg-slate-50 hover:bg-slate-100'
                }`}
              >
                {item.label === 'Home' && <Globe className="w-6 h-6" />}
                {item.label === 'News' && <Newspaper className="w-6 h-6" />}
                {item.label === 'Impact' && <Heart className="w-6 h-6" />}
                {item.label === 'Submit Issue' && <ShieldAlert className="w-6 h-6" />}
                {item.label}
              </a>
            ))}
            <div className="pt-6 mt-6 border-t border-slate-100">
              <a
                href="#projects"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center justify-center gap-3 w-full bg-hrpi-green text-white px-8 py-6 rounded-[2rem] font-black uppercase text-xl shadow-2xl shadow-hrpi-green/30"
              >
                <Heart className="w-7 h-7 fill-white" /> Support Us
              </a>
            </div>
            
            <div className="pt-8 text-center">
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 mb-2">General Enquiries</p>
              <div className="flex items-center justify-center gap-2 text-slate-900 font-bold text-xs">
                 <Mail className="w-3 h-3 text-hrpi-blue" /> humanrightsprotection.int@gmail.com
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
