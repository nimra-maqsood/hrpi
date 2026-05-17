
import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Heart, Globe, Scale, Leaf, Users, MessageCircle, Share2, Globe2, ArrowUpRight } from 'lucide-react';
import logo from '../src/assets/images/hrpi_logo_clean_1779034169966.png';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-slate-950 text-white pt-32 pb-12 overflow-hidden">
      {/* Decorative Grid Background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-20 mb-24">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-4 mb-10 group">
              <div className="w-16 h-16 p-1.5 bg-white rounded-2xl flex items-center justify-center transform group-hover:rotate-12 transition-transform">
                <img 
                  src={logo} 
                  alt="HRPI Logo" 
                  className="w-full h-full object-contain" 
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <h2 className="text-3xl font-display uppercase leading-tight tracking-tighter">HRPI</h2>
                <p className="text-[9px] font-black uppercase text-hrpi-green tracking-[0.2em] leading-none">International</p>
              </div>
            </div>
            <p className="text-slate-400 text-lg leading-relaxed mb-10 font-medium">
              Striving to empower humanity through universal justice, transparency, and the global rule of law.
            </p>
            <div className="flex gap-4">
              {[
                { icon: <MessageCircle className="w-6 h-6" />, color: 'hover:bg-hrpi-green' },
                { icon: <Share2 className="w-6 h-6" />, color: 'hover:bg-hrpi-blue' },
                { icon: <Globe2 className="w-6 h-6" />, color: 'hover:bg-indigo-600' }
              ].map((social, i) => (
                <motion.a 
                  key={i}
                  whileHover={{ y: -5, scale: 1.1 }}
                  href="#" 
                  className={`w-14 h-14 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center transition-all group ${social.color}`}
                >
                  <span className="text-slate-400 group-hover:text-white">{social.icon}</span>
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-black uppercase tracking-[0.3em] mb-12 text-hrpi-green">Contact Details</h3>
            <ul className="space-y-6 text-slate-400 text-sm font-medium">
              <li className="flex items-start gap-3 group cursor-pointer hover:text-white transition-colors">
                <MapPin className="w-5 h-5 shrink-0 text-hrpi-blue group-hover:scale-110 transition-transform" />
                <span className="leading-snug underline decoration-slate-800 underline-offset-8 group-hover:decoration-hrpi-blue transition-all">Office #3, ground floor, 114-C, 10th commercial street adjacent Bank Al Habib Phase iv DHA Karachi.</span>
              </li>
              <li className="flex items-center gap-3 group cursor-pointer hover:text-white transition-colors">
                <Phone className="w-5 h-5 shrink-0 text-hrpi-blue group-hover:scale-110 transition-transform" />
                <span className="underline decoration-slate-800 underline-offset-8 group-hover:decoration-hrpi-blue transition-all">021-4299189</span>
              </li>
              <li className="flex items-center gap-3 group cursor-pointer hover:text-white transition-colors">
                <Mail className="w-5 h-5 shrink-0 text-hrpi-blue group-hover:scale-110 transition-transform" />
                <span className="underline decoration-slate-800 underline-offset-8 group-hover:decoration-hrpi-blue transition-all break-all">humanrightsprotection.int@gmail.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-black uppercase tracking-[0.3em] mb-12 text-hrpi-blue">Quick Actions</h3>
            <ul className="space-y-6 text-slate-400 text-lg font-medium">
              {[
                { label: 'Our Mission', hash: 'about' },
                { label: 'Four Organs', hash: 'organs' },
                { label: 'Our Impact', hash: 'projects' },
                { label: 'Latest News', hash: 'news' },
                { label: 'Submit Issue', hash: 'report-issue' }
              ].map((link, i) => (
                <li key={i}>
                  <a href={`#${link.hash}`} className="flex items-center justify-between group hover:text-white transition-colors py-2 border-b border-slate-900 hover:border-slate-700">
                    {link.label}
                    <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all text-hrpi-green" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
             <h3 className="text-sm font-black uppercase tracking-[0.3em] mb-12 text-slate-500">The Chapters</h3>
             <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: <Scale className="w-8 h-8" />, label: 'Law', color: 'group-hover:text-hrpi-blue' },
                  { icon: <Users className="w-8 h-8" />, label: 'Democracy', color: 'group-hover:text-hrpi-green' },
                  { icon: <Leaf className="w-8 h-8" />, label: 'Green', color: 'group-hover:text-emerald-400' },
                  { icon: <Heart className="w-8 h-8" />, label: 'Rights', color: 'group-hover:text-red-500' }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    className="bg-slate-900/50 p-6 rounded-3xl flex flex-col items-center justify-center border border-slate-800 hover:border-slate-700 transition-all group"
                  >
                    <div className={`transition-colors duration-300 ${item.color}`}>
                      {item.icon}
                    </div>
                    <span className="text-[10px] font-black uppercase mt-3 tracking-widest text-slate-500">{item.label}</span>
                  </motion.div>
                ))}
             </div>
          </div>
        </div>

        <div className="pt-12 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-8 text-slate-500">
          <div className="flex items-center gap-6 text-xs font-black uppercase tracking-widest">
            <p>© {new Date().getFullYear()} HRPI GLOBAL</p>
            <div className="hidden md:flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <p className="text-[10px] font-black uppercase tracking-widest">A Movement for humanity</p>
            <div className="w-10 h-10 rounded-full border border-slate-800 flex items-center justify-center">
               <Globe className="w-5 h-5" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
