
import React from 'react';
import { motion } from 'motion/react';
import { Mail, Globe2, Shield, Scale, Leaf, Users, ChevronRight } from 'lucide-react';

const Team: React.FC = () => {
  const leadership = [
    { 
      name: "Ahmed Ali", 
      role: "President", 
      organ: "Human Rights Chapter", 
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop",
      color: "border-hrpi-blue"
    },
    { 
      name: "Sarah Khan", 
      role: "President", 
      organ: "Rule of Law Chapter", 
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop",
      color: "border-hrpi-green"
    },
    { 
      name: "Dr. Robert Smith", 
      role: "President", 
      organ: "Environment Chapter", 
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop",
      color: "border-emerald-500"
    },
    { 
      name: "Maria Garcia", 
      role: "President", 
      organ: "Democracy Chapter", 
      image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?q=80&w=400&auto=format&fit=crop",
      color: "border-slate-900"
    }
  ];

  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-32 gap-12">
          <div className="max-w-3xl">
             <span className="inline-flex items-center gap-2 px-4 py-2 bg-slate-950 text-white text-[10px] font-black uppercase tracking-[0.4em] rounded-full mb-10 shadow-lg">The Council</span>
             <h1 className="text-6xl md:text-8xl font-display uppercase leading-[0.8] text-slate-950 mb-10">
                Chapter <span className="text-hrpi-blue">Leaders</span>
             </h1>
             <p className="text-2xl text-slate-600 font-medium leading-relaxed italic">
                Our structural strength comes from independent leadership across four vital organs of civil society.
             </p>
          </div>
          <div className="flex gap-4">
             <div className="w-20 h-20 bg-slate-100 rounded-3xl flex items-center justify-center text-slate-400">
                <Users className="w-8 h-8" />
             </div>
             <div className="w-20 h-20 bg-hrpi-blue rounded-3xl flex items-center justify-center text-white shadow-xl shadow-hrpi-blue/20">
                <Shield className="w-8 h-8" />
             </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {leadership.map((member, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group"
            >
              <div className="relative aspect-[3/4] rounded-[3.5rem] overflow-hidden mb-10 border-4 border-slate-50 shadow-2xl transition-all group-hover:scale-[0.98] group-hover:shadow-slate-300">
                 <img 
                   src={member.image} 
                   alt={member.name} 
                   className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
                 />
                 <div className={`absolute bottom-0 left-0 right-0 p-10 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent text-white`}>
                    <p className="text-[10px] font-black uppercase tracking-widest text-hrpi-green mb-2">{member.role}</p>
                    <h3 className="text-3xl font-display uppercase tracking-tight leading-none mb-1">{member.name}</h3>
                 </div>
              </div>
              <div className="px-6">
                <div className="flex items-center gap-3 mb-6 pb-6 border-b border-slate-100">
                  <div className={`w-3 h-3 rounded-full ${member.color.replace('border-', 'bg-')}`}></div>
                  <span className="text-xs font-black uppercase tracking-widest text-slate-400">{member.organ}</span>
                </div>
                <div className="flex gap-4">
                  <motion.a whileHover={{ y: -3 }} href="#" className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400 hover:text-hrpi-blue hover:bg-white hover:shadow-xl transition-all">
                     <Mail className="w-5 h-5" />
                  </motion.a>
                  <motion.a whileHover={{ y: -3 }} href="#" className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400 hover:text-hrpi-green hover:bg-white hover:shadow-xl transition-all">
                     <Globe2 className="w-5 h-5" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Board of Advisors Banner */}
        <section className="mt-40 bg-slate-950 rounded-[4rem] p-12 lg:p-24 text-white relative overflow-hidden">
           <div className="absolute top-0 right-0 w-full h-full opacity-[0.05] pointer-events-none flex items-center justify-center font-display text-[25rem] -translate-y-20">ADVISORS</div>
           
           <div className="relative z-10 grid lg:grid-cols-2 gap-20 items-center">
              <div>
                 <span className="inline-block px-4 py-1.5 bg-hrpi-blue text-white text-[10px] font-black uppercase tracking-[0.4em] rounded-full mb-10 shadow-lg">Executive Supervision</span>
                 <h2 className="text-5xl lg:text-7xl font-display uppercase leading-tight mb-8">
                    Senior <span className="text-slate-500">Board of</span> Advisors
                 </h2>
                 <p className="text-slate-400 text-xl font-medium leading-relaxed italic mb-12">
                    "Our advisory board includes former judges, international humanitarian experts, and environmental scientists who provide the intellectual compass for HRPI."
                 </p>
                 <motion.button 
                   whileHover={{ scale: 1.05 }}
                   className="flex items-center gap-4 bg-white text-slate-950 px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-lg shadow-2xl transition-all"
                 >
                    Contact the Board <ChevronRight className="w-6 h-6" />
                 </motion.button>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                 {[
                   "Legal Sovereignty Unit",
                   "Humanitarian Ops",
                   "Bio-Security Cell",
                   "Democratic Reform Lab"
                 ].map((unit, i) => (
                   <div key={i} className="p-8 bg-white/5 border border-white/10 rounded-[2.5rem] backdrop-blur-md">
                      <p className="text-[10px] font-black uppercase tracking-[0.2em] text-hrpi-green mb-4">Division {i+1}</p>
                      <h4 className="text-xl font-display uppercase tracking-tight text-white">{unit}</h4>
                   </div>
                 ))}
              </div>
           </div>
        </section>
      </div>
    </div>
  );
};

export default Team;
