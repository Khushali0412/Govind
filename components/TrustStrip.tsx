"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Activity, Globe, Award, CheckCircle, Target, Eye } from 'lucide-react';

export const TrustStrip: React.FC = () => {
  const stats = [
    { icon: Activity, value: '500+', label: 'Active Formulations' },
    { icon: Globe, value: '50+', label: 'Countries Served' },
    { icon: Award, value: '25+', label: 'Years of Excellence' },
    { icon: CheckCircle, value: '100%', label: 'Quality Assured' },
  ];

  return (
    <section id="trust-strip" className="relative z-20 -mt-12 sm:-mt-16 mb-20 sm:mb-28 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-[2rem] shadow-premium border border-slate-100 p-8 lg:p-12 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* LEFT SIDE: TEXT & STATISTICS */}
          <div className="space-y-10">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-blue text-white font-extrabold text-[10px] tracking-[0.2em] uppercase mb-6 shadow-sm">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Manufacturing You Can Trust</span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-extrabold text-brand-navy leading-tight">
                Built Around Quality. <span className="text-brand-blue">Driven by Precision.</span>
              </h2>
              <p className="text-slate-500 text-lg leading-relaxed max-w-md">
                From formulation development to finished pharmaceutical products, Govind Remedies focuses on consistency, quality and operational precision at every stage of manufacturing.
              </p>
            </div>

            {/* STATISTICS GRID */}
            <div className="grid grid-cols-2 gap-6 pt-4">
              {stats.map((stat, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-full bg-brand-soft-bg text-brand-blue flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-brand-navy leading-none mb-1">{stat.value}</h3>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{stat.label}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE: MISSION & VISION */}
          <div className="flex flex-col gap-6">
            
            {/* MISSION BOX */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-brand-soft-bg rounded-3xl p-8 lg:p-10 border border-brand-blue/10 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue/5 rounded-bl-full transition-transform duration-500 group-hover:scale-110" />
              <div className="relative z-10">
                <h3 className="text-2xl font-extrabold text-brand-navy mb-3 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-brand-blue text-white flex items-center justify-center">
                    <Target className="w-4 h-4" />
                  </span>
                  Our Mission
                </h3>
                <p className="text-slate-600 leading-relaxed text-lg">
                  To deliver high-quality, reliable, and accessible pharmaceutical formulations globally, enhancing patient care through unwavering manufacturing excellence.
                </p>
              </div>
            </motion.div>

            {/* VISION BOX */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-brand-navy rounded-3xl p-8 lg:p-10 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full transition-transform duration-500 group-hover:scale-110" />
              <div className="relative z-10">
                <h3 className="text-2xl font-extrabold text-white mb-3 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-brand-emerald text-white flex items-center justify-center">
                    <Eye className="w-4 h-4" />
                  </span>
                  Our Vision
                </h3>
                <p className="text-slate-300 leading-relaxed text-lg">
                  To be a globally recognized leader in pharmaceutical contract manufacturing, known for uncompromising precision, continuous innovation, and deep-rooted trust.
                </p>
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
};
