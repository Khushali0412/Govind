"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FlaskConical, TestTube, Factory, CheckCircle, PackageCheck, Truck, ShieldCheck, ClipboardCheck } from 'lucide-react';

export const ManufacturingCapabilities: React.FC = () => {
    const steps = [
    {
      number: '01',
      title: 'Material Selection',
      icon: TestTube,
      description: 'Careful sourcing and evaluation of materials used in pharmaceutical manufacturing.',
    },
    {
      number: '02',
      title: 'Formulation & Processing',
      icon: Factory,
      description: 'Controlled manufacturing processes focused on consistency and product integrity.',
    },
    {
      number: '03',
      title: 'Quality Control',
      icon: CheckCircle,
      description: 'Testing and quality checks to maintain defined product standards.',
    },
    {
      number: '04',
      title: 'Filling & Packaging',
      icon: PackageCheck,
      description: 'Careful filling, presentation and packaging of finished pharmaceutical products.',
    },
    {
      number: '05',
      title: 'Final Release',
      icon: ClipboardCheck,
      description: 'Products move through defined quality procedures before release for supply.',
    },
    {
      number: '06',
      title: 'Product Dispatch',
      icon: Truck,
      description: 'Controlled inventory management and dispatch with complete documentation.',
    }
  ];

  const leftSteps = steps.slice(0, 3);
  const rightSteps = steps.slice(3, 6);

  return (
    <section id="manufacturing" className="py-24 bg-brand-soft-bg relative overflow-hidden">
      {/* GLOWING ORBS */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-brand-blue/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-emerald/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* SECTION HEADING */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-blue text-white font-extrabold text-[10px] tracking-[0.2em] uppercase mb-6 shadow-sm">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Infrastructure</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-navy tracking-tighter mb-6 leading-[1.1]">
            Precision at Every <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-emerald">Stage</span>
          </h2>
          <p className="mt-4 text-slate-500 text-base sm:text-lg">
            A disciplined six-stage manufacturing workflow ensuring consistent pharmaceutical quality from raw material receipt to finished product dispatch.
          </p>
        </div>

        {/* PROCESS LAYOUT: LEFT STEPS - PRODUCT - RIGHT STEPS */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-12 lg:gap-8 items-center">
          
          {/* LEFT COLUMN */}
          <div className="space-y-6 lg:space-y-10 order-2 lg:order-1">
            {leftSteps.map((step, index) => (
              <motion.div 
                key={step.number}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group flex flex-col sm:flex-row lg:flex-row-reverse items-center lg:items-start gap-5 lg:text-right bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-premium hover:border-brand-blue/30 transition-all duration-300 relative"
              >
                <div className="flex-shrink-0 w-16 h-16 bg-brand-soft-bg rounded-2xl flex items-center justify-center text-brand-navy group-hover:bg-brand-blue group-hover:text-white transition-colors duration-300 shadow-inner group-hover:shadow-glow-blue">
                  <step.icon className="w-8 h-8" />
                </div>
                <div className="flex-1">
                  <div className="text-brand-golden font-black text-sm mb-1 tracking-widest">STEP {step.number}</div>
                  <h3 className="font-extrabold text-brand-navy text-lg mb-2 group-hover:text-brand-blue transition-colors">{step.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CENTER PRODUCT GRAPHIC */}
          <div className="relative flex justify-center items-center py-10 lg:py-0 order-1 lg:order-2 w-full lg:w-[320px] xl:w-[400px]">
            
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10 p-4 mix-blend-multiply"
            >
              {/* Product Image Overlay */}
              <div className="relative w-[272px] h-auto flex flex-col items-center justify-center">
                {/* The Blank Vial Image */}
                <img 
                  src="/vial-blank.png" 
                  alt="Govind Remedies Pharmaceutical Vial" 
                  className="w-full h-auto object-contain brightness-[1.02] contrast-[1.05]"
                />
                
                {/* Overlay Logo onto the blank label */}
                <div className="absolute top-[65%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex items-center justify-center">
                  <img 
                    src="/GOVIND LOGO.svg" 
                    alt="Govind Remedies" 
                    className="w-[65%] opacity-90" 
                  />
                </div>
              </div>
            </motion.div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="space-y-6 lg:space-y-10 order-3">
            {rightSteps.map((step, index) => (
              <motion.div 
                key={step.number}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group flex flex-col sm:flex-row items-center lg:items-start gap-5 lg:text-left bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-premium hover:border-brand-blue/30 transition-all duration-300 relative"
              >
                <div className="flex-shrink-0 w-16 h-16 bg-brand-soft-bg rounded-2xl flex items-center justify-center text-brand-navy group-hover:bg-brand-blue group-hover:text-white transition-colors duration-300 shadow-inner group-hover:shadow-glow-blue">
                  <step.icon className="w-8 h-8" />
                </div>
                <div className="flex-1">
                  <div className="text-brand-golden font-black text-sm mb-1 tracking-widest">STEP {step.number}</div>
                  <h3 className="font-extrabold text-brand-navy text-lg mb-2 group-hover:text-brand-blue transition-colors">{step.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
