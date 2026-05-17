
import React from 'react';
import { motion } from 'motion/react';
import { Heart, Scale, Globe, Leaf, Users, ArrowRight, ExternalLink } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: "Legal Aid for Detainees",
      organ: "Rule of Law",
      icon: <Scale className="w-6 h-6" />,
      color: "bg-hrpi-blue",
      desc: "Providing pro-bono legal defense for individuals detained without trial or facing judicial discrimination.",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 2,
      title: "Clean River Initiative",
      organ: "Environment",
      icon: <Leaf className="w-6 h-6" />,
      color: "bg-hrpi-green",
      desc: "Working with industrial zones to implement filtration systems and protecting community water resources.",
      image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 3,
      title: "Democratic Education Program",
      organ: "Democracy",
      icon: <Users className="w-6 h-6" />,
      color: "bg-slate-900",
      desc: "Workshops across local districts to educate the youth on their constitutional rights and voting power.",
      image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=800&auto=format&fit=crop"
    },
    {
      id: 4,
      title: "Transnational Victim Network",
      organ: "Human Rights",
      icon: <Globe className="w-6 h-6" />,
      color: "bg-indigo-600",
      desc: "A digital structure connecting victims of human rights violations with international observers and lawyers.",
      image: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?q=80&w=800&auto=format&fit=crop"
    }
  ];

  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-32 gap-12">
          <div className="max-w-3xl">
             <span className="inline-flex items-center gap-2 px-4 py-2 bg-hrpi-green text-white text-[10px] font-black uppercase tracking-[0.4em] rounded-full mb-10 shadow-lg">Action on the Ground</span>
             <h1 className="text-6xl md:text-8xl font-display uppercase leading-[0.8] text-slate-950 mb-10">
                Active <span className="text-hrpi-blue">Missions</span>
             </h1>
             <p className="text-2xl text-slate-600 font-medium leading-relaxed italic">
                From local advocacy to international legal structures, our projects provide tangible results for humanity and justice.
             </p>
          </div>
          <div className="relative group">
              <div className="absolute -inset-4 bg-hrpi-blue/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-1000"></div>
              <div className="relative z-10 w-44 h-44 bg-slate-950 rounded-full flex flex-col items-center justify-center text-white border-8 border-white shadow-2xl">
                 <Heart className="w-10 h-10 mb-2 fill-hrpi-green text-hrpi-green" />
                 <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">Global Impact</p>
              </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-20">
          {projects.map((project, idx) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group"
            >
              <div className="relative aspect-square md:aspect-video rounded-[4rem] overflow-hidden mb-12 shadow-3xl group-hover:shadow-hrpi-blue/20 transition-all">
                 <img 
                   src={project.image} 
                   alt={project.title} 
                   className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000" 
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-40 transition-opacity"></div>
                 <div className="absolute bottom-12 left-12 right-12 text-white">
                    <span className={`inline-flex items-center gap-2 px-5 py-2.5 ${project.color} text-white text-[10px] font-black uppercase tracking-widest rounded-xl mb-6 shadow-xl`}>
                       {project.icon} {project.organ}
                    </span>
                    <h2 className="text-4xl lg:text-5xl font-display uppercase leading-tight tracking-tight">{project.title}</h2>
                 </div>
              </div>
              <div className="px-8">
                 <p className="text-xl text-slate-600 font-medium leading-relaxed mb-10 max-w-xl">
                   {project.desc}
                 </p>
                 <div className="flex items-center gap-6">
                    <a href="#" className="bg-slate-950 text-white px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-xs flex items-center gap-3 hover:bg-hrpi-blue transition-all shadow-xl">
                       View Case Study <ExternalLink className="w-4 h-4" />
                    </a>
                    <div className="flex -space-x-4">
                       {[1, 2, 3].map(i => (
                         <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden shadow-md">
                           <img src={`https://i.pravatar.cc/100?u=project_lead_${project.id}_${i}`} alt="Agent" />
                         </div>
                       ))}
                       <div className="w-10 h-10 rounded-full border-2 border-white bg-hrpi-green flex items-center justify-center text-[8px] font-black text-white">
                          LEAD
                       </div>
                    </div>
                 </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Help Humanity Section */}
        <section className="mt-40 mb-20">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="lg:w-1/2">
              <span className="inline-block px-4 py-1.5 bg-hrpi-blue text-white text-[10px] font-black uppercase tracking-[0.4em] rounded-full mb-10 shadow-lg">Humanitarian Aid</span>
              <h2 className="text-5xl lg:text-7xl font-display uppercase text-slate-950 mb-10 leading-tight">Help <span className="text-hrpi-blue underline decoration-slate-200 decoration-8 underline-offset-8">Humanity</span></h2>
              <p className="text-xl text-slate-600 font-medium leading-relaxed mb-12">
                HRPI is a non-political, non-governmental, and non-profitable organization working to redress the problems of people in critical areas. 
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                 {[
                   "Treatment facilities & medicines",
                   "Food items for needy families",
                   "Student educational guidance",
                   "Educational expense support",
                   "Skill learning for youth",
                   "Free legal assistance",
                   "Shelter for the needy",
                   "Support for innocent prisoners"
                 ].map((service, i) => (
                   <div key={i} className="flex items-center gap-3 p-5 bg-slate-50 rounded-2xl border border-slate-100 group hover:bg-hrpi-green hover:text-white transition-all">
                      <Heart className="w-5 h-5 group-hover:fill-current" />
                      <span className="font-bold uppercase tracking-tighter text-sm">{service}</span>
                   </div>
                 ))}
              </div>
            </div>
            <div className="lg:w-1/2 relative">
               <div className="absolute inset-0 bg-hrpi-green/10 rounded-[4rem] -rotate-3 scale-105"></div>
               <div className="relative bg-white p-4 rounded-[4rem] shadow-3xl">
                  <img src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=800&auto=format&fit=crop" className="rounded-[3.5rem] w-full grayscale group-hover:grayscale-0 transition-all duration-700" alt="Help Humanity" />
                  <div className="absolute -bottom-8 -right-8 bg-slate-950 text-white p-10 rounded-[3rem] shadow-4xl max-w-[280px]">
                     <p className="text-xs font-black uppercase tracking-widest text-hrpi-green mb-4">Direct Contact</p>
                     <p className="text-xl font-display uppercase tracking-tight mb-4">Redressal of Problems</p>
                     <p className="text-slate-400 text-sm italic font-medium leading-relaxed">
                        "If you want to help people yourself, we'll help you make direct contact with the deserving people."
                     </p>
                  </div>
               </div>
            </div>
          </div>
        </section>

        {/* Donation/Support Section */}
        <section className="py-24 bg-slate-950 text-white rounded-[5rem] overflow-hidden relative border border-white/5">
           <div className="max-w-4xl mx-auto px-8 text-center relative z-10">
              <Heart className="w-16 h-16 text-hrpi-green mx-auto mb-10 animate-pulse" />
              <h2 className="text-4xl md:text-6xl font-display uppercase mb-10 tracking-tight">Your Contribution <span className="text-hrpi-blue">Matters</span></h2>
              <p className="text-xl text-slate-400 leading-relaxed mb-16 font-medium">
                To continue this noble cause, we need your contribution. You can help us with money and in kind as well. 
              </p>
              <div className="inline-flex flex-col sm:flex-row gap-6">
                 <button className="bg-hrpi-green text-white px-12 py-6 rounded-2xl font-black uppercase tracking-widest text-lg shadow-2xl shadow-hrpi-green/30">
                    Donate via Check/PO
                 </button>
                 <button className="bg-hrpi-blue text-white px-12 py-6 rounded-2xl font-black uppercase tracking-widest text-lg shadow-2xl shadow-hrpi-blue/30">
                    Online Donation
                 </button>
              </div>
              <p className="mt-12 text-slate-500 font-bold uppercase tracking-widest text-xs">
                Account Details Available at HRPI Office
              </p>
           </div>
        </section>

        {/* Global Network Section */}
        <section className="mt-40 bg-slate-50 rounded-[5rem] p-16 lg:p-32 text-center relative overflow-hidden border border-slate-100">
           <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none text-slate-950 font-display text-[20rem] flex items-center justify-center -translate-y-20">NETWORK</div>
           <div className="relative z-10 max-w-4xl mx-auto">
              <h2 className="text-sm font-black uppercase tracking-[0.4em] text-hrpi-blue mb-10">Beyond Borders</h2>
              <h3 className="text-5xl lg:text-7xl font-display uppercase text-slate-950 mb-12 tracking-tighter leading-tight">Join our <span className="text-hrpi-green underline decoration-slate-950 underline-offset-8 decoration-4">Observer</span> Network</h3>
              <p className="text-2xl text-slate-600 font-medium mb-16 leading-relaxed italic">
                 "We are currently expanding our observer network across 45 nations. Your localized expertise is critical for our global structural growth."
              </p>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-hrpi-blue text-white px-12 py-6 rounded-[2rem] font-black uppercase tracking-widest text-xl shadow-2xl shadow-hrpi-blue/30 inline-flex items-center gap-4"
              >
                Apply to Observe <ArrowRight className="w-7 h-7" />
              </motion.button>
           </div>
        </section>
      </div>
    </div>
  );
};

export default Projects;
