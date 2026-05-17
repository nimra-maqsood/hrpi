
import React from 'react';
import { motion } from 'motion/react';
import { Shield, Scale, Leaf, Users, ArrowRight, Heart, Newspaper, Globe, CheckCircle2, MessageSquare, Anchor, Timer } from 'lucide-react';
import floodReliefImg from '../src/assets/images/flood_relief_2010_1779038236918.png';

const Home: React.FC = () => {
  return (
    <div className="overflow-x-hidden pt-20">
      {/* Hero Section - The "Activist" Style */}
      <section className="relative min-h-[90vh] flex items-center bg-white overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-hrpi-green/5 -skew-x-12 transform origin-top translate-x-32 hidden lg:block"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-hrpi-blue/5 skew-x-12 transform origin-bottom -translate-x-32 hidden lg:block"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-hrpi-green/10 text-hrpi-green text-xs font-black uppercase tracking-widest rounded-full mb-8 shadow-sm border border-hrpi-green/20">
                <Shield className="w-3 h-3" /> Protecting Global Dignity
              </span>
              
              <div className="mb-8">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-display uppercase leading-[0.9] text-hrpi-blue mb-2">
                  Get To Know
                </h2>
                <h1 className="text-7xl md:text-8xl lg:text-9xl font-display uppercase leading-[0.8] text-hrpi-green -ml-1">
                  HRPI
                </h1>
              </div>

              <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-xl font-medium">
                Human Rights Protection International is a global movement dedicated to strengthening <span className="text-hrpi-blue">Justice</span>, <span className="text-hrpi-green">Equality</span>, and the <span className="text-slate-900 font-bold">Rule of Law</span>.
              </p>

              <div className="flex flex-wrap gap-5">
                <motion.a 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="#about" 
                  className="bg-hrpi-green text-white px-10 py-5 rounded-2xl font-black text-lg transition-all shadow-2xl shadow-hrpi-green/30 flex items-center gap-3 uppercase tracking-tighter"
                >
                  Our Mission <ArrowRight className="w-6 h-6" />
                </motion.a>
                <motion.a 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="#report-issue" 
                  className="bg-white text-slate-900 px-10 py-5 rounded-2xl font-black text-lg border-2 border-slate-200 hover:border-hrpi-blue transition-all shadow-sm flex items-center gap-3 uppercase tracking-tighter"
                >
                   Report Issue <Shield className="w-6 h-6" />
                </motion.a>
              </div>
              
              <div className="mt-16 flex items-center gap-6">
                <div className="flex -space-x-4">
                  {[1, 2, 3, 4, 5].map(i => (
                    <motion.div 
                      key={i} 
                      whileHover={{ y: -10, zIndex: 10 }}
                      className="w-12 h-12 rounded-full border-4 border-white flex items-center justify-center overflow-hidden bg-slate-100 shadow-md"
                    >
                      <img src={`https://i.pravatar.cc/150?u=hrpi_user_${i}`} alt="supporter" className="w-full h-full object-cover" />
                    </motion.div>
                  ))}
                </div>
                <div className="text-sm font-bold text-slate-500 uppercase tracking-tight">
                  <span className="text-hrpi-blue font-black text-lg">25k+</span> Active members worldwide
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative"
            >
              {/* Central Visual - Fists Illustration Style */}
              <div className="relative z-10 aspect-square rounded-full bg-slate-50 border-8 border-white shadow-3xl overflow-hidden group">
                <img 
                   src="https://images.unsplash.com/photo-1543269664-76bc3997d9ea?q=80&w=1000&auto=format&fit=crop" 
                   alt="Human Rights Movement" 
                   className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-hrpi-green/60 via-transparent to-hrpi-blue/30 mix-blend-multiply opacity-60"></div>
                
                {/* Floating Elements on Top of Image */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center text-white">
                   <motion.div
                    animate={{ y: [0, -20, 0] }}
                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                    className="p-6 bg-white/20 backdrop-blur-xl rounded-[2rem] border border-white/30"
                   >
                     <Users className="w-16 h-16 mb-4 mx-auto" />
                     <h3 className="text-2xl font-display uppercase tracking-widest">Solidarity</h3>
                   </motion.div>
                </div>
              </div>
              
              {/* Badge Overlay */}
              <motion.div 
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ repeat: Infinity, duration: 8 }}
                className="absolute -bottom-10 -left-10 bg-white p-10 rounded-[3rem] shadow-4xl z-20 max-w-[280px] border border-slate-100 hidden md:block"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-hrpi-green rounded-2xl flex items-center justify-center shadow-lg">
                    <CheckCircle2 className="w-8 h-8 text-white" />
                  </div>
                  <div className="leading-tight">
                    <span className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Since 1998</span>
                    <h4 className="text-xl font-display uppercase text-slate-900 tracking-tight">SDG Verified</h4>
                  </div>
                </div>
                <p className="text-sm font-medium text-slate-600 leading-relaxed italic">
                  Leading the struggle for civil justice and humanitarian assistance across developing nations.
                </p>
              </motion.div>

              {/* Background Shapes */}
              <div className="absolute -top-20 -right-20 w-80 h-80 bg-hrpi-blue/10 rounded-full blur-3xl -z-10"></div>
              <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-hrpi-green/10 rounded-full blur-3xl -z-10"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Philosophy / Pillars Section - COLORFUL GRID */}
      <section className="py-32 bg-slate-50 relative overflow-hidden">
        {/* Decorative Watermark */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 opacity-[0.03] pointer-events-none">
          <h2 className="text-[20rem] font-display uppercase leading-none select-none">PERCEPTION</h2>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-24">
            <h2 className="text-sm font-black uppercase tracking-[0.4em] text-hrpi-green mb-6">Our Foundation</h2>
            <h3 className="text-5xl md:text-6xl font-display uppercase text-slate-900 mb-8 leading-tight">
              The Four Pillars of <span className="text-hrpi-blue underline decoration-slate-900 underline-offset-8 decoration-8">Progress</span>
            </h3>
            <p className="text-xl text-slate-600 leading-relaxed font-medium">
              HRPI works through a structured framework where every organ supports the basic principles of a civilized society.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                title: 'Human Rights', 
                icon: <Globe className="w-10 h-10" />, 
                color: 'bg-hrpi-blue', 
                textColor: 'text-hrpi-blue',
                desc: 'Universal protection of individual dignity guaranteed by the framework of global justice.' 
              },
              { 
                title: 'Rule of Law', 
                icon: <Scale className="w-10 h-10" />, 
                color: 'bg-hrpi-green', 
                textColor: 'text-hrpi-green',
                desc: 'Strengthening judicial structures to ensure accountability and fairness within democratic systems.' 
              },
              { 
                title: 'Environment', 
                icon: <Leaf className="w-10 h-10" />, 
                color: 'bg-emerald-500', 
                textColor: 'text-emerald-500',
                desc: 'Protecting our natural resources to sustain healthy minds and promote long-term global peace.' 
              },
              { 
                title: 'Democracy', 
                icon: <Users className="w-10 h-10" />, 
                color: 'bg-slate-900', 
                textColor: 'text-slate-900',
                desc: 'The essential vehicle for collective progress, ensuring every voice contributes to our shared future.' 
              },
            ].map((pillar, i) => (
              <motion.div 
                key={i} 
                whileHover={{ y: -15 }}
                className="bg-white p-12 rounded-[3rem] border border-slate-100 shadow-xl shadow-slate-200/50 flex flex-col items-center text-center group transition-all"
              >
                <div className={`${pillar.color} w-20 h-20 rounded-[2rem] flex items-center justify-center text-white mb-8 group-hover:scale-110 group-hover:rotate-6 transition-transform shadow-lg shadow-${pillar.color}/20`}>
                  {pillar.icon}
                </div>
                <h4 className={`text-2xl font-display uppercase tracking-tight mb-4 ${pillar.textColor}`}>{pillar.title}</h4>
                <p className="text-slate-500 leading-relaxed font-medium">
                  {pillar.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action - ULTRA COLORFUL */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            whileHover={{ scale: 0.99 }}
            className="bg-gradient-to-br from-hrpi-blue via-hrpi-blue to-hrpi-green rounded-[4rem] p-12 lg:p-24 text-white relative overflow-hidden shadow-2xl shadow-hrpi-blue/20"
          >
            {/* Visual Textures */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/10 rounded-full -mr-96 -mt-96 blur-3xl opacity-50"></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-black/10 rounded-full -ml-96 -mb-96 blur-3xl opacity-50"></div>
            
            <div className="relative z-10 grid lg:grid-cols-2 gap-20 items-center">
              <div>
                <span className="inline-block px-4 py-1.5 bg-white/20 backdrop-blur-md rounded-full text-xs font-black uppercase tracking-widest mb-10">Join the Movement</span>
                <h2 className="text-5xl lg:text-7xl font-display uppercase leading-tight mb-8">
                  Your Voice <span className="text-black/30">is our</span> Structural Strength
                </h2>
                <p className="text-white/80 text-xl mb-12 leading-relaxed max-w-xl font-medium">
                  Whether you want to report a violation, join our legal team, or support our environmental organ, there is a place for you at HRPI.
                </p>
                <div className="flex flex-col sm:flex-row gap-6">
                  <motion.a 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="#news" 
                    className="bg-white text-hrpi-blue px-10 py-5 rounded-2xl font-black text-lg transition-all shadow-xl flex items-center justify-center gap-3 uppercase tracking-tighter"
                  >
                    <Newspaper className="w-6 h-6" /> Our News
                  </motion.a>
                  <motion.a 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="#organs" 
                    className="bg-black/20 hover:bg-black/30 text-white border-2 border-white/20 px-10 py-5 rounded-2xl font-black text-lg transition-all flex items-center justify-center gap-3 uppercase tracking-tighter backdrop-blur-sm"
                  >
                    Explore Organs
                  </motion.a>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-6 relative">
                 <div className="space-y-6 pt-12">
                   <div className="bg-white/10 backdrop-blur-md p-8 rounded-[2.5rem] border border-white/10">
                     <p className="text-4xl font-display">250+</p>
                     <p className="text-xs font-black uppercase tracking-widest mt-2">Projects</p>
                   </div>
                   <div className="aspect-square bg-white rounded-[2.5rem] overflow-hidden shadow-2xl rotate-3">
                     <img src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=400&auto=format&fit=crop" className="w-full h-full object-cover" alt="NGO work" />
                   </div>
                 </div>
                 <div className="space-y-6">
                    <div className="aspect-square bg-slate-900 rounded-[2.5rem] overflow-hidden shadow-2xl -rotate-3 border-4 border-white/20">
                      <img src="https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?q=80&w=400&auto=format&fit=crop" className="w-full h-full object-cover" alt="Justice" />
                    </div>
                    <div className="bg-white text-hrpi-green p-8 rounded-[2.5rem] shadow-2xl">
                       <MessageSquare className="w-10 h-10 mb-4" />
                       <p className="text-sm font-bold uppercase tracking-tight">Active Support 24/7</p>
                    </div>
                 </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final Email Banner - Matching the Image */}
      <section className="py-12 bg-slate-100 border-y border-slate-200">
         <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center text-white">
                <Anchor className="w-6 h-6" />
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Direct Contact</p>
                <p className="text-lg font-black text-slate-900 tracking-tight">humanrightsprotection.int@gmail.com</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full border-2 border-hrpi-blue/30 flex items-center justify-center text-hrpi-blue">★</div>
              <div className="w-10 h-10 rounded-full border-2 border-hrpi-green/30 flex items-center justify-center text-hrpi-green">★</div>
            </div>
         </div>
      </section>
    </div>
  );
};

export default Home;
