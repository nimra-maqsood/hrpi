
import React from 'react';
import { motion } from 'motion/react';
import { Shield, Scale, Leaf, Users, CheckCircle2, ChevronRight, Plus } from 'lucide-react';

const Organs: React.FC = () => {
  const organs = [
    {
      id: "human-rights",
      title: "Human Rights",
      icon: <Shield className="w-10 h-10" />,
      color: "bg-hrpi-blue",
      lightColor: "bg-hrpi-blue/10",
      textColor: "text-hrpi-blue",
      description: "Dedicated to the promotion, protection, restoration, and advancement of human dignity as declared by the UNO.",
      tasks: ["Legal help to oppressed", "Awareness campaigns", "Victim assistance", "Consolidation of rights"]
    },
    {
      id: "rule-of-law",
      title: "Rule of Law",
      icon: <Scale className="w-10 h-10" />,
      color: "bg-hrpi-green",
      lightColor: "bg-hrpi-green/10",
      textColor: "text-hrpi-green",
      description: "Strengthening the judicial framework to ensure accountability and the proper application of law in society.",
      tasks: ["Legal aid", "Judicial monitoring", "Rule of law education", "Institutional reform"]
    },
    {
      id: "environment",
      title: "Environment",
      icon: <Leaf className="w-10 h-10" />,
      color: "bg-emerald-600",
      lightColor: "bg-emerald-50",
      textColor: "text-emerald-600",
      description: "Protecting our environment because a clean environment produces a healthy mind in a healthy body, which leads to sustainable peace.",
      tasks: ["Pollution control advocacy", "Eco-awareness seminars", "Clean environment projects", "Sustainability research"]
    },
    {
      id: "democracy",
      title: "Democracy",
      icon: <Users className="w-10 h-10" />,
      color: "bg-slate-900",
      lightColor: "bg-slate-100",
      textColor: "text-slate-900",
      description: "Promoting democratic behaviors and empowering the masses to strengthen the pillars of a civilized society.",
      tasks: ["Democratic education", "Empowerment workshops", "Public opinion forums", "Governance monitoring"]
    }
  ];

  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="bg-slate-950 py-32 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-hrpi-green/20 rounded-full blur-3xl -mr-48 -mt-48"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-md rounded-full text-xs font-black uppercase tracking-[0.4em] mb-10">Structural Framework</span>
          <h1 className="text-6xl md:text-8xl font-display uppercase mb-6 tracking-tighter">Our <span className="text-hrpi-green">Chapters</span></h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-xl font-medium leading-relaxed italic">
            Working independently, headed by dedicated Presidents to achieve a collective mission.
          </p>
        </div>
      </div>

      <section className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {organs.map((organ, idx) => (
              <motion.div 
                key={organ.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-[3rem] overflow-hidden shadow-2xl shadow-slate-200/50 flex flex-col md:flex-row group border border-slate-100"
              >
                <div className={`${organ.color} md:w-2/5 p-12 flex flex-col items-center justify-center text-white text-center group-hover:scale-105 transition-transform duration-500`}>
                  <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-[1.5rem] flex items-center justify-center mb-8 border border-white/20">
                    {organ.icon}
                  </div>
                  <h2 className="text-3xl font-display uppercase tracking-tight">{organ.title}</h2>
                </div>
                <div className="md:w-3/5 p-12">
                  <p className="text-lg text-slate-600 mb-10 leading-relaxed font-medium">
                    {organ.description}
                  </p>
                  <div className="space-y-4">
                    <h3 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-6">Strategic Focus</h3>
                    <ul className="grid grid-cols-1 gap-4">
                      {organ.tasks.map((task, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-slate-900 font-bold">
                          <CheckCircle2 className={`w-5 h-5 ${organ.textColor}`} />
                          {task}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Collaboration Model */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            whileHover={{ scale: 0.99 }}
            className="bg-hrpi-blue/5 rounded-[4rem] p-12 lg:p-24 border border-hrpi-blue/10 relative overflow-hidden"
          >
             <div className="absolute top-0 right-0 w-64 h-64 bg-hrpi-blue/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
             <div className="relative z-10 text-center">
                <h2 className="text-4xl md:text-5xl font-display uppercase text-slate-950 mb-10">The Collaboration <span className="text-hrpi-blue">Model</span></h2>
                <p className="text-xl text-slate-600 leading-relaxed mb-16 max-w-4xl mx-auto font-medium">
                  HRPI works together with members of Civil Society and relevant quarters. Each chapter operates independently under its President, ensuring specialized focus while maintaining the common vision of total human right protection.
                </p>
                <div className="flex flex-wrap justify-center items-center gap-6 lg:gap-12">
                  {['HUMAN RIGHTS', 'RULE OF LAW', 'ENVIRONMENT', 'DEMOCRACY'].map((label, i) => (
                    <React.Fragment key={i}>
                      <div className="px-10 py-6 bg-white rounded-3xl shadow-xl shadow-hrpi-blue/5 border border-hrpi-blue/10 text-hrpi-blue font-black uppercase tracking-widest text-lg">
                        {label}
                      </div>
                      {i < 3 && <Plus className="w-8 h-8 text-slate-300" />}
                    </React.Fragment>
                  ))}
                </div>
             </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Organs;
