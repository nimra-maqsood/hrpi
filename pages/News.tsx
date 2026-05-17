
import React from 'react';
import { motion } from 'motion/react';
import { Newspaper, Calendar, ArrowRight, TrendingUp } from 'lucide-react';
import floodReliefImg from '../src/assets/images/hrpi_flood_relief_2010_original_recreation_1779038735470.png';

const News: React.FC = () => {
  const newsItems = [
    {
      id: 6,
      title: "Announcing the HRPI Monthly Magazine",
      date: "Pending Launch",
      excerpt: "HPRI is going to publish a monthly or weekly magazine to create awareness amongst the people and to convey its voice to the Policy makers.",
      category: "Media",
      image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=800&auto=format&fit=crop",
      color: "border-slate-900"
    },
    {
      id: 5,
      title: "Historical Flashback: The 2010 Flood Relief Mission",
      date: "August 2010",
      excerpt: "Revisiting HRPI's monumental medical relief camp that served thousands of victims during the devastating flood crisis.",
      category: "Humanitarian",
      image: floodReliefImg,
      color: "border-slate-900"
    },
    {
      id: 1,
      title: "Global Human Rights Summit 2024",
      date: "May 15, 2024",
      excerpt: "HRPI delegation participates in the annual summit to discuss emerging challenges in digital privacy and freedom of expression.",
      category: "Events",
      image: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?q=80&w=800&auto=format&fit=crop",
      color: "border-hrpi-blue"
    },
    {
      id: 2,
      title: "New Environmental Protection Initiative Launched",
      date: "May 10, 2024",
      excerpt: "Our environmental organ launches a new campaign to protect coastal ecosystems from industrial pollution in South Asia.",
      category: "Environment",
      image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=800&auto=format&fit=crop",
      color: "border-hrpi-green"
    },
    {
      id: 3,
      title: "Advocating for Rule of Law in Transnational Disputes",
      date: "May 02, 2024",
      excerpt: "HRPI legal experts publish a whitepaper on strengthening judicial independence across developing democracies.",
      category: "Rule of Law",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=800&auto=format&fit=crop",
      color: "border-indigo-500"
    },
    {
      id: 4,
      title: "Youth Democracy Workshop Success",
      date: "April 25, 2024",
      excerpt: "Over 500 young leaders joined our workshop on democratic participation and community organizing last month.",
      category: "Democracy",
      image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=800&auto=format&fit=crop",
      color: "border-slate-800"
    }
  ];

  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-24 gap-12">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-hrpi-blue/10 text-hrpi-blue text-xs font-black uppercase tracking-[0.3em] rounded-full mb-8">
              <TrendingUp className="w-4 h-4" /> Editorial Archive
            </span>
            <h1 className="text-6xl md:text-8xl font-display uppercase leading-[0.8] text-slate-950 mb-8">
              News & <span className="text-hrpi-green">Media</span>
            </h1>
            <p className="text-xl text-slate-600 font-medium leading-relaxed">
              Dispatches from our international observers and board members on the front lines of human rights defense.
            </p>
          </div>
          
          <div className="flex gap-4">
             <div className="p-8 bg-slate-50 border border-slate-100 rounded-[2.5rem] flex flex-col items-center">
                <p className="text-4xl font-display text-hrpi-blue">12</p>
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Issues/Year</p>
             </div>
             <div className="p-8 bg-slate-900 rounded-[2.5rem] flex flex-col items-center text-white">
                <Newspaper className="w-8 h-8 mb-2" />
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">Subscribe</p>
             </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          {newsItems.map((item, idx) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group cursor-pointer"
            >
              <div className={`relative aspect-[16/10] rounded-[3rem] overflow-hidden mb-10 border-4 ${item.color} shadow-2xl transition-all group-hover:scale-[0.98]`}>
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute top-8 left-8">
                  <span className="px-5 py-2.5 bg-white/90 backdrop-blur-md text-slate-950 text-xs font-black uppercase tracking-widest rounded-xl shadow-lg">
                    {item.category}
                  </span>
                </div>
              </div>
              <div className="px-4">
                <div className="flex items-center gap-3 text-slate-400 text-xs font-black uppercase tracking-widest mb-6">
                  <Calendar className="w-4 h-4 text-hrpi-blue" /> {item.date}
                </div>
                <h2 className="text-3xl md:text-4xl font-display uppercase leading-tight text-slate-950 mb-6 group-hover:text-hrpi-blue transition-colors">
                  {item.title}
                </h2>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed font-medium line-clamp-2">
                  {item.excerpt}
                </p>
                <button className="flex items-center gap-3 text-hrpi-green font-black uppercase tracking-tighter hover:gap-5 transition-all text-sm group-hover:translate-x-2">
                  Explore Full Story <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Newsletter Redock */}
        <motion.div 
          whileHover={{ scale: 0.99 }}
          className="mt-32 bg-slate-950 rounded-[4rem] p-12 lg:p-20 text-white text-center relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-hrpi-blue/20 rounded-full -mr-48 -mt-48 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-hrpi-green/20 rounded-full -ml-48 -mb-48 blur-3xl"></div>
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-5xl font-display uppercase tracking-tight mb-8 underline decoration-hrpi-blue underline-offset-8">Join the Archive</h2>
            <p className="text-slate-400 text-xl mb-12 font-medium leading-relaxed">
              Receive the monthly HRPI digest featuring exclusive legal notes, environmental reports, and human rights alerts.
            </p>
            <form className="flex flex-col sm:flex-row gap-5" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="EMAIL ADDRESS" 
                className="flex-grow px-8 py-6 rounded-3xl bg-slate-900 border-2 border-slate-800 text-white font-black uppercase tracking-widest focus:outline-none focus:border-hrpi-blue transition-all"
              />
              <button className="bg-hrpi-green hover:bg-hrpi-green/90 text-white px-10 py-6 rounded-3xl font-black uppercase tracking-tighter text-lg transition-all shadow-2xl shadow-hrpi-green/30">
                Subscribe
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default News;
