"use client";
import React from 'react';
import { Factory, ShieldCheck, Cpu, HeartPulse, Plus } from 'lucide-react';
import { motion } from 'framer-motion';

export const ServiceHighlights: React.FC = () => {
  const highlights = [
    {
      icon: Factory,
      title: 'Pharmaceutical Formulations',
      desc: 'Development and manufacturing of a diverse range of pharmaceutical formulations.',
    },
    {
      icon: ShieldCheck,
      title: 'Injectable Products',
      desc: 'A growing portfolio of injectable pharmaceutical products across multiple therapeutic applications.',
    },
    {
      icon: Cpu,
      title: 'Prefilled Syringes',
      desc: 'Specialized product presentations designed for convenience, consistency and controlled administration.',
    },
    {
      icon: HeartPulse,
      title: 'Liquid & Parenteral Products',
      desc: 'Manufacturing solutions for selected liquid pharmaceutical and parenteral formulations.',
    },
  ];

  return (
    <section className="pt-0 pb-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-blue text-white font-extrabold text-[10px] tracking-[0.2em] uppercase mb-6 shadow-sm">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>What We Do</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight">
            Our Core Capabilities
          </h2>
        </div>

        {/* CONTAINER */}
        <div className="bg-slate-100 rounded-[2rem] shadow-premium relative mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 lg:divide-x divide-slate-200/80">
            {highlights.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="relative px-6 pb-12 pt-16 flex flex-col items-center text-center group"
              >
                {/* CUTOUT MASK FOR TOP BORDER */}
                <div className="absolute top-[-1px] left-1/2 -translate-x-1/2 w-[110px] h-[55px] bg-white rounded-b-[55px] z-0 pointer-events-none">
                  {/* Left curve SVG */}
                  <svg width="20" height="20" viewBox="0 0 20 20" className="absolute top-0 -left-[19.5px] text-white fill-current">
                    <path d="M20,0 L20,20 A20,20 0 0,0 0,0 Z" />
                  </svg>
                  {/* Right curve SVG */}
                  <svg width="20" height="20" viewBox="0 0 20 20" className="absolute top-0 -right-[19.5px] text-white fill-current">
                    <path d="M0,0 L0,20 A20,20 0 0,1 20,0 Z" />
                  </svg>
                </div>

                {/* THE ICON */}
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 z-10">
                  <div className="w-[80px] h-[80px] bg-brand-navy rounded-full flex items-center justify-center text-white group-hover:bg-brand-blue group-hover:text-white group-hover:shadow-[0_10px_30px_rgba(0,185,242,0.3)] transition-all duration-300 shadow-md">
                    <item.icon className="w-8 h-8 transition-colors duration-300" />
                  </div>
                </div>

                {/* REST OF CONTENT */}
                <h3 className="text-[17px] font-extrabold text-brand-navy mb-4 leading-snug h-12 flex items-center justify-center relative z-10 group-hover:text-brand-blue transition-colors duration-300">
                  {item.title}
                </h3>
                
                <p className="text-[14px] text-slate-500 flex-grow leading-relaxed px-2 relative z-10">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
