
import React from 'react';
import { motion } from 'motion/react';
import { Target, CheckCircle2, Globe, Shield, Scale, Users, Leaf, Anchor } from 'lucide-react';
import floodReliefImg from '../src/assets/images/hrpi_flood_relief_2010_original_recreation_1779038735470.png';

const About: React.FC = () => {
  const objectives = [
    { id: 1, text: "Create awareness and respect for the Human Rights, Rules of Law, Environment and Democracy and to empower the masses for the promotion, protection, restoration, advancement and to strengthen the above as declared in the Universal Declaration of Human Rights of UNO." },
    { id: 2, text: "Create awareness regarding certain liberties of press, freedom of movement, freedom of religion, dignity of man including woman and provision of equal opportunities of progress in all social, political and economic spheres." },
    { id: 3, text: "Inform, educate and develop the awareness among the general public on all issues pertaining to HR, RoL, Democracy and Environment by holding seminars, discussions and workshops via all tools of communication." },
    { id: 4, text: "Provide practical help to the down trodden and oppressed persons and co-operate with individuals working for the same noble causes, highlighting their services in the media." },
    { id: 5, text: "Seek positive co-operation of media with transparency and public accountability to investigate the violations of Human Rights, Rule of Law, Environment and Democracy." },
    { id: 6, text: "Provide guidelines to Policy makers in order to enable them to formulate policies in the interests of the common people." },
    { id: 7, text: "Provide forums for the Public Opinion Leaders to lead the masses in the right direction through workshops, meetings, and seminars." }
  ];

  return (
    <div className="pt-32 pb-24 bg-white">
      {/* Editorial Header */}
      <div className="bg-slate-50 py-32 border-b border-slate-200 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none flex items-center justify-center">
            <h1 className="text-[30rem] font-display uppercase tracking-tighter">ABOUT</h1>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 bg-hrpi-blue text-white text-[10px] font-black uppercase tracking-[0.4em] rounded-full mb-10 shadow-lg">Our Foundation</span>
            <h1 className="text-6xl md:text-8xl font-display uppercase leading-[0.8] text-slate-950 mb-10">
              The HRPI <span className="text-hrpi-green">Identity</span>
            </h1>
            <p className="text-2xl text-slate-600 font-medium leading-relaxed italic border-l-4 border-hrpi-blue pl-8">
              Human Rights Protection International (HRPI) is a global movement striving for universal justice and civil dignity.
            </p>
          </div>
        </div>
      </div>

      {/* Mission & Vision - SPLIT LAYOUT */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-24 items-start">
            <div>
              <h2 className="text-4xl font-display uppercase text-slate-950 mb-10 tracking-tight">Perception & Foundation</h2>
              <div className="space-y-8 text-xl text-slate-600 font-medium leading-[1.6]">
                <p>
                  The concept for the formation of HRPI is based on the perception that the perpetual quest for superiority, domination of chronic economic imbalances, and bloodshed lead to tension in every region of the world.
                </p>
                <p>
                  From this widespread inhumanity, violations of the Rule of Law and environmental neglect have emerged. HRPI was established to promote, consolidate, and strengthen the fundamental pillars of a civilized society: Human Rights, Rule of Law, Environment, and Democracy.
                </p>
                <div className="p-10 bg-hrpi-green rounded-[3rem] text-white shadow-2xl shadow-hrpi-green/20 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-16 -mt-16 group-hover:scale-150 transition-transform"></div>
                  <p className="text-xl font-display uppercase leading-tight tracking-widest italic mb-2">Objective Chapters</p>
                  <p className="text-lg font-bold leading-relaxed">
                    "Each of our four objective chapters—Human Rights, Rule of Law, Environment, and Democracy—operates independently headed by dedicated Presidents."
                  </p>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6 pt-12 lg:pt-0">
               <motion.div 
                 whileHover={{ y: -20 }}
                 className="aspect-[3/4] bg-slate-100 rounded-[3rem] overflow-hidden shadow-2xl relative group"
               >
                 <img src="https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt="Solidarity" />
                 <div className="absolute inset-0 bg-hrpi-blue/20 mix-blend-overlay"></div>
               </motion.div>
               <motion.div 
                 whileHover={{ y: -20, rotate: 3 }}
                 className="aspect-[3/4] bg-slate-100 rounded-[3rem] overflow-hidden shadow-2xl relative translate-y-20 group"
               >
                 <img src="https://images.unsplash.com/photo-1543269664-76bc3997d9ea?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt="Movement" />
                 <div className="absolute inset-0 bg-hrpi-green/20 mix-blend-overlay"></div>
               </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Aims & Objectives - BENTO GRID STYLE */}
      <section className="py-32 bg-slate-950 text-white rounded-[5rem] mx-4 my-8 lg:mx-8 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '60px 60px' }}></div>
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-24 gap-12">
            <div className="max-w-2xl">
               <h2 className="text-sm font-black uppercase tracking-[0.4em] text-hrpi-green mb-6">Strategic Goals</h2>
               <h3 className="text-5xl lg:text-7xl font-display uppercase tracking-tighter leading-tight">Aims & <span className="text-hrpi-blue">Objectives</span></h3>
            </div>
            <div className="bg-white/5 border border-white/10 p-8 rounded-[2.5rem] flex items-center gap-6">
               <Target className="w-12 h-12 text-hrpi-green" />
               <p className="text-xl font-bold italic text-slate-400">Total Commitment to civil dignity.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {objectives.map((obj, i) => (
              <motion.div 
                key={obj.id}
                whileHover={{ y: -10, backgroundColor: 'rgba(255,255,255,0.05)' }}
                className="p-12 rounded-[3.5rem] border border-white/5 bg-white/2 backdrop-blur-sm transition-all"
              >
                <div className="text-hrpi-blue font-display text-4xl mb-8 opacity-40">0{obj.id}</div>
                <p className="text-xl text-slate-300 leading-relaxed font-medium">{obj.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Historical Legacy - The 2010 Flood Relief */}
      <section className="py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative aspect-square rounded-[4rem] overflow-hidden shadow-4xl border-8 border-slate-50 rotate-2 group">
                 <img 
                   src={floodReliefImg} 
                   alt="HRPI 2010 Flood Relief" 
                   className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                 <div className="absolute bottom-10 left-10 text-white">
                    <span className="px-5 py-2 bg-hrpi-green rounded-xl text-[10px] font-black uppercase tracking-widest mb-4 inline-block shadow-lg">Historical Mission</span>
                    <h3 className="text-4xl font-display uppercase tracking-tight">2010 Relief Works</h3>
                 </div>
              </div>
              {/* Decorative Stamp */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-slate-950 rounded-full flex items-center justify-center text-white border-8 border-white animate-spin-slow shadow-2xl z-20">
                 <Anchor className="w-10 h-10" />
              </div>
            </motion.div>

            <div>
              <h2 className="text-sm font-black uppercase tracking-[0.4em] text-slate-400 mb-6 font-sans">Humanitarian Response</h2>
              <h3 className="text-5xl md:text-6xl font-display uppercase text-slate-950 mb-10 leading-tight">
                Swift Action In <span className="text-hrpi-blue">Crisis</span>
              </h3>
              <div className="space-y-8 text-xl text-slate-600 font-medium leading-relaxed">
                <p>
                  During the devastating floods of 2010, HRPI established comprehensive medical camps across the hardest-hit regions. Our team worked tirelessly to provide <span className="text-slate-950 font-bold">emergency healthcare, food distribution, and sanitation support</span> to thousands of displaced families.
                </p>
                <p>
                  This operation remains a cornerstone of our organizational identity, proving our capacity to translate structural advocacy into direct <span className="text-hrpi-green italic">humanitarian rescue.</span>
                </p>
                <ul className="space-y-4 pt-4">
                  {[
                    "Mobile Medical Units",
                    "Displacement Camp Monitoring",
                    "Child Health Screenings",
                    "Emergency Provisions Supply"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-900 font-bold uppercase tracking-tight text-base">
                      <CheckCircle2 className="w-5 h-5 text-hrpi-green" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy - IMMERSIVE OVERLAY */}
      <section className="py-32 bg-white flex flex-col items-center justify-center relative overflow-hidden">
         <div className="absolute inset-0 z-0 opacity-[0.02] pointer-events-none flex items-center justify-center font-display uppercase text-[40rem] select-none">
            PHILOSOPHY
         </div>
         <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
            <h2 className="text-5xl font-display uppercase text-slate-950 mb-16 tracking-tight">The Integration Logic</h2>
            <div className="space-y-12 text-2xl text-slate-600 font-medium leading-relaxed italic">
              <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-3xl font-display uppercase">
                 <motion.div whileHover={{ scale: 1.1 }} className="px-10 py-5 bg-slate-100 rounded-3xl text-hrpi-blue">Rights</motion.div>
                 <motion.div animate={{ x: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2 }} className="text-slate-300">➜</motion.div>
                 <motion.div whileHover={{ scale: 1.1 }} className="px-10 py-5 bg-slate-100 rounded-3xl text-hrpi-green">Law</motion.div>
                 <motion.div animate={{ x: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2 }} className="text-slate-300">➜</motion.div>
                 <motion.div whileHover={{ scale: 1.1 }} className="px-10 py-5 bg-slate-100 rounded-3xl text-slate-950">Democracy</motion.div>
              </div>
              <p>
                Human Rights shall be protected, promoted and strengthen by the Rule of Law prevailing in society, and similarly, the Rule of Law shall be protected, promoted and strengthen in the system of Democracy only.
              </p>
              <div className="p-10 bg-slate-50 border-2 border-dashed border-slate-200 rounded-[3rem]">
                <p className="text-slate-950 not-italic font-black text-2xl uppercase tracking-tighter mb-4">
                  The Environment Foundation
                </p>
                <p className="text-lg text-slate-500 font-medium leading-relaxed">
                  "It is a universal recognized fact that a clean environment produces a healthy mind in a healthy body, which leads to maintaining sustainable peace in society."
                </p>
              </div>
              <p className="text-slate-950 not-italic font-black text-3xl uppercase tracking-tighter">
                HRPI provides the practical foundation for intellectual research and victim assistance.
              </p>
            </div>
         </div>
      </section>
    </div>
  );
};

export default About;
