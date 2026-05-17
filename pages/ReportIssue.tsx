
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, ShieldAlert, FileText, User, Mail, MessageSquare, CheckCircle2, ChevronRight, Scale } from 'lucide-react';

const ReportIssue: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6 bg-slate-50">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-2xl w-full text-center bg-white p-16 rounded-[4rem] shadow-3xl border border-slate-100"
        >
          <div className="w-24 h-24 bg-hrpi-green text-white rounded-[2rem] flex items-center justify-center mx-auto mb-10 shadow-2xl shadow-hrpi-green/30 animate-bounce">
            <CheckCircle2 className="w-12 h-12" />
          </div>
          <h2 className="text-5xl font-display uppercase leading-tight text-slate-950 mb-6 tracking-tight">Mission Received</h2>
          <p className="text-xl text-slate-600 mb-12 leading-relaxed font-medium">
            Your report has been securely transmitted to our central board. Our legal observers and field agents will evaluate the details within 48 hours.
          </p>
          <button 
            onClick={() => setSubmitted(false)}
            className="w-full bg-slate-950 text-white py-6 rounded-3xl font-black uppercase tracking-widest text-lg hover:bg-hrpi-blue transition-all shadow-xl"
          >
            Submit Another Case
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 bg-white relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-red-500/5 rounded-full -mr-96 -mt-96 blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-24 items-start">
          <div>
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-red-100 text-red-700 text-xs font-black uppercase tracking-[0.3em] rounded-full mb-10">
              <ShieldAlert className="w-4 h-4" /> Priority Response
            </span>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-display uppercase leading-[0.8] text-slate-950 mb-10 underline decoration-red-500 decoration-wavy decoration-4 underline-offset-[12px]">
              Report <span className="text-slate-400">a</span> Violation
            </h1>
            <p className="text-xl text-slate-600 mb-12 leading-relaxed font-medium max-w-xl">
              HRPI is structurally committed to providing legal support and public advocacy for victims of human rights abuses, environmental crimes, and judicial obstruction.
            </p>

            <div className="space-y-10 mb-16">
              {[
                { 
                  title: 'Confidential Review', 
                  icon: <ShieldAlert className="w-8 h-8" />, 
                  color: 'bg-red-500',
                  desc: 'All data is encrypted and reviewed personally by our non-executive board directors.' 
                },
                { 
                  title: 'Field Verification', 
                  icon: <Scale className="w-8 h-8" />, 
                  color: 'bg-hrpi-blue',
                  desc: 'Our local organs on the ground will verify details to provide a robust legal foundation.' 
                }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 group">
                  <div className={`w-16 h-16 ${item.color} text-white rounded-[1.5rem] flex items-center justify-center shrink-0 shadow-lg group-hover:rotate-6 transition-transform`}>
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-display uppercase text-slate-900 mb-2 tracking-tight">{item.title}</h3>
                    <p className="text-slate-500 font-medium text-lg leading-snug">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-10 bg-slate-900 rounded-[3rem] text-white shadow-3xl">
              <h4 className="text-sm font-black uppercase tracking-widest mb-6 text-slate-500">Emergency Protocol</h4>
              <p className="text-slate-400 text-lg mb-8 leading-relaxed font-medium">For cases involving imminent physical danger, connect immediately with our 24/7 hotline:</p>
              <div className="flex items-center gap-4 text-2xl font-display uppercase text-hrpi-blue group cursor-pointer tracking-tight">
                <Mail className="w-7 h-7 text-white" /> emergency@hrpi-intl.org
                <ChevronRight className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-all translate-x-2" />
              </div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white p-12 lg:p-16 rounded-[4rem] border-4 border-slate-950 shadow-[20px_20px_0px_0px_rgba(15,23,42,1)]"
          >
            <form onSubmit={handleSubmit} className="space-y-10">
              <div className="grid sm:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <label className="block text-xs font-black uppercase tracking-widest text-slate-400">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input 
                      required
                      type="text" 
                      placeholder="NAME"
                      className="w-full pl-16 pr-6 py-5 bg-slate-50 border-2 border-slate-100 rounded-[1.5rem] focus:ring-4 focus:ring-hrpi-blue/10 focus:border-hrpi-blue focus:outline-none transition-all font-black uppercase tracking-widest"
                    />
                  </div>
                </div>
                <div className="space-y-4">
                  <label className="block text-xs font-black uppercase tracking-widest text-slate-400">Email Identity</label>
                  <div className="relative">
                    <Mail className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input 
                      required
                      type="email" 
                      placeholder="EMAIL"
                      className="w-full pl-16 pr-6 py-5 bg-slate-50 border-2 border-slate-100 rounded-[1.5rem] focus:ring-4 focus:ring-hrpi-blue/10 focus:border-hrpi-blue focus:outline-none transition-all font-black uppercase tracking-widest"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <label className="block text-xs font-black uppercase tracking-widest text-slate-400">Classification</label>
                <select className="w-full px-8 py-5 bg-slate-50 border-2 border-slate-100 rounded-[1.5rem] focus:ring-4 focus:ring-hrpi-blue/10 focus:border-hrpi-blue focus:outline-none transition-all font-black uppercase tracking-widest appearance-none">
                  <option>Human Rights Violation</option>
                  <option>Environmental Concern</option>
                  <option>Rule of Law Obstacle</option>
                  <option>Democratic Process Issue</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="space-y-4">
                <label className="block text-xs font-black uppercase tracking-widest text-slate-400">Temporal/Spatial Data</label>
                <div className="relative">
                  <MessageSquare className="absolute left-6 top-6 w-5 h-5 text-slate-400" />
                  <textarea 
                    required
                    rows={5}
                    placeholder="DESCRIBE THE CASE IN DETAIL..."
                    className="w-full pl-16 pr-6 py-6 bg-slate-50 border-2 border-slate-100 rounded-[2rem] focus:ring-4 focus:ring-hrpi-blue/10 focus:border-hrpi-blue focus:outline-none transition-all font-medium min-h-[200px]"
                  ></textarea>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-slate-50 rounded-2xl">
                 <input type="checkbox" className="mt-1.5 w-5 h-5 accent-hrpi-green rounded-lg" required id="consent" />
                 <label htmlFor="consent" className="text-sm font-bold text-slate-600 leading-tight">
                   I certify that the information provided is true and I authorize HRPI to investigate this case under our international structural guidelines.
                 </label>
              </div>

              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-slate-950 text-white py-6 rounded-[2rem] font-black uppercase tracking-widest text-xl hover:bg-hrpi-green transition-all shadow-2xl flex items-center justify-center gap-4"
              >
                Transmit Report <Send className="w-6 h-6" />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ReportIssue;
