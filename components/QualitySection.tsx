"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sliders, ShieldCheck, CheckCircle2, ClipboardCheck, Sparkles } from 'lucide-react';

export const QualitySection: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

      const principles = [
    {
      id: 'process',
      icon: Sliders,
      title: 'Controlled manufacturing processes',
      overlayText: 'Standard Operating Procedure Enforced',
      image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=1200&q=80',
      color: 'text-brand-blue',
      bgHover: 'hover:bg-brand-blue/5',
      borderActive: 'border-brand-blue',
    },
    {
      id: 'consistency',
      icon: CheckCircle2,
      title: 'Consistent formulation standards',
      overlayText: 'Precision Batch Uniformity',
      image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=1200&q=80',
      color: 'text-brand-emerald',
      bgHover: 'hover:bg-brand-emerald/5',
      borderActive: 'border-brand-emerald',
    },
    {
      id: 'assurance',
      icon: ShieldCheck,
      title: 'Quality-focused production',
      overlayText: 'Analytical Quality Assurance',
      image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1200&q=80',
      color: 'text-brand-golden',
      bgHover: 'hover:bg-brand-golden/5',
      borderActive: 'border-brand-golden',
    },
    {
      id: 'control',
      icon: ClipboardCheck,
      title: 'Careful filling and packaging',
      overlayText: 'Secure Secondary Packaging',
      image: 'https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?auto=format&fit=crop&w=1200&q=80',
      color: 'text-brand-navy',
      bgHover: 'hover:bg-slate-100',
      borderActive: 'border-brand-navy',
    },
    {
      id: 'product',
      icon: Sparkles,
      title: 'Product-focused manufacturing approach',
      overlayText: 'Patient-Centric Formulations',
      image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=1200&q=80',
      color: 'text-brand-blue',
      bgHover: 'hover:bg-brand-blue/5',
      borderActive: 'border-brand-blue',
    }
  ];

  const activeItem = principles[activeTab];

  return (
    <section id="quality" className="py-24 bg-brand-soft-bg relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* SECTION HEADING */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 lg:mb-0 space-y-6 max-w-2xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-blue text-white font-extrabold text-[10px] tracking-[0.2em] uppercase shadow-sm">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Inside Our Manufacturing</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-navy tracking-tighter mb-6 leading-[1.1]">
              Engineered Into Every <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-emerald">Drop</span>
            </h2>
            <p className="text-slate-500 text-lg font-medium leading-relaxed">
              Our quality philosophy transcends compliance. It is an intrinsic discipline rooted in advanced process control and uncompromising validation.
            </p>
          </motion.div>
        </div>

        {/* INTERACTIVE SHOWCASE LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-white p-6 sm:p-8 rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100">
          
          {/* LEFT: INTERACTIVE TABS */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {principles.map((item, index) => {
              const isActive = activeTab === index;
              const IconComp = item.icon;
              
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(index)}
                  className={`text-left p-6 rounded-2xl transition-all duration-300 border-l-4 ${
                    isActive 
                      ? `bg-slate-50 ${item.borderActive} shadow-sm scale-[1.02]` 
                      : `border-transparent hover:bg-slate-50/50 ${item.bgHover}`
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-xl shrink-0 transition-colors ${
                      isActive ? 'bg-white shadow-sm border border-slate-200' : 'bg-transparent'
                    } ${isActive ? item.color : 'text-slate-400'}`}>
                      <IconComp className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className={`text-xl font-bold mb-2 transition-colors ${
                        isActive ? 'text-brand-navy' : 'text-slate-500'
                      }`}>
                        {item.title}
                      </h3>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* RIGHT: DYNAMIC IMAGE SHOWCASE */}
          <div className="lg:col-span-7 relative h-[400px] sm:h-[500px] rounded-[2rem] overflow-hidden bg-slate-900 shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="absolute inset-0"
              >
                <img
                  src={activeItem.image}
                  alt={activeItem.title}
                  className="w-full h-full object-cover opacity-80"
                />
                
                {/* Tech Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/20 to-transparent mix-blend-multiply" />
                
                {/* Floating Badge */}
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl flex items-center gap-5 transform translate-y-0">
                    <div className={`w-12 h-12 rounded-full bg-white flex items-center justify-center shrink-0 ${activeItem.color}`}>
                      <activeItem.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-white text-base font-bold capitalize">{activeItem.overlayText}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
};
