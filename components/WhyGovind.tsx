"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Factory, Layers, HeartPulse, ArrowRight } from 'lucide-react';

export const WhyGovind: React.FC = () => {
  const cards = [
    {
      id: 'quality',
      title: 'Quality Commitment',
      description: 'A quality-focused approach across manufacturing and product handling.',
      icon: ShieldCheck,
      color: 'bg-brand-blue',
    },
    {
      id: 'manufacturing',
      title: 'Product Expertise',
      description: 'Experience across a diverse portfolio of pharmaceutical formulations and presentations.',
      icon: Factory,
      color: 'bg-brand-blue',
    },
    {
      id: 'portfolio',
      title: 'Manufacturing Discipline',
      description: 'Structured processes designed to support consistency and dependable production.',
      icon: Layers,
      color: 'bg-brand-blue',
    },
    {
      id: 'healthcare',
      title: 'Healthcare Driven',
      description: 'Dedicated to expanding access to high-quality essential medical solutions with global commercial reliability.',
      icon: HeartPulse,
      color: 'bg-brand-blue',
    },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* SECTION HEADING */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-blue text-white font-extrabold text-[10px] tracking-[0.2em] uppercase mb-6 shadow-sm">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Why Govind Remedies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-navy tracking-tight">
            A Manufacturing Partner Focused on What Matters
          </h2>
          <p className="mt-4 text-slate-500 text-base sm:text-lg">
            Built on pharmaceutical precision, transparent process discipline, and a strong commitment to healthcare partners.
          </p>
        </div>

        {/* CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card, index) => {
            const IconComp = card.icon;
            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-brand-soft-bg rounded-3xl p-8 pt-10 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-premium transition-all duration-300"
              >
                {/* CORNER BORDERS (L-Shapes) */}
                <div className="absolute top-0 right-0 w-16 h-16 border-t-[4px] border-r-[4px] border-brand-navy rounded-tr-3xl opacity-60 transition-opacity duration-300 group-hover:opacity-100 group-hover:border-brand-blue" />
                <div className="absolute bottom-0 left-0 w-16 h-16 border-b-[4px] border-l-[4px] border-brand-navy rounded-bl-3xl opacity-60 transition-opacity duration-300 group-hover:opacity-100 group-hover:border-brand-blue" />
                
                <div className="relative z-10 flex flex-col h-full">
                  {/* ICON */}
                  <div className={`w-14 h-14 rounded-2xl ${card.color} text-white flex items-center justify-center mb-6 shadow-md transition-transform duration-300 group-hover:-translate-y-1`}>
                    <IconComp className="w-7 h-7" />
                  </div>

                  {/* CONTENT */}
                  <h3 className="text-xl font-extrabold text-brand-navy mb-3">
                    {card.title}
                  </h3>
                  
                  <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-grow">
                    {card.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
