"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Phone, ShieldCheck } from 'lucide-react';

interface HeroProps {
  onExploreProducts?: () => void;
  onDiscoverCapabilities?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreProducts, onDiscoverCapabilities }) => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-32 pb-24 overflow-hidden bg-brand-soft-bg text-slate-800">

      {/* IMAGE BACKGROUND */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: `url('/banner-one-shape-bg.jpg')` }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* LEFT CONTENT COLUMN */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="space-y-6 lg:pr-10 relative z-20"
          >

            {/* MAIN TITLE */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-blue text-white font-extrabold text-[10px] tracking-[0.2em] uppercase mb-6 shadow-sm">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Trusted Healthcare Manufacturing</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-brand-navy leading-[1.15]">
              Advancing Healthcare Through <span className="text-brand-blue">Quality</span>
            </h1>

            {/* DESCRIPTION */}
            <p className="text-slate-600 text-base sm:text-lg max-w-lg leading-relaxed">
              Govind Remedies is committed to delivering reliable pharmaceutical formulations through disciplined manufacturing, stringent quality standards and a patient-focused approach.
            </p>

            {/* CTA & CONTACT INFO */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-4">
              <Link
                href="/products"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-brand-blue hover:bg-brand-blue-dark text-white font-bold text-base transition-all duration-300 shadow-lg shadow-brand-blue/25 hover:shadow-xl hover:shadow-brand-blue/30 hover:-translate-y-1"
              >
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                  <ArrowRight className="w-4 h-4" />
                </div>
                Explore Our Products
              </Link>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-brand-blue text-white rounded-full flex items-center justify-center shadow-glow-blue">
                  <Phone className="w-5 h-5 fill-current" />
                </div>
                <div className="flex flex-col">
                  <span className="text-brand-navy font-bold text-lg">Partner With Us</span>
                </div>
              </div>
            </div>

          </motion.div>

          {/* RIGHT VISUAL COLUMN */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="relative h-[450px] sm:h-[500px] lg:h-[650px] flex items-center justify-center z-10"
          >
            {/* MAIN GRAPHIC / IMAGE */}
            <div className="relative z-10 w-full h-[90%] lg:h-[85%] rounded-[2.5rem] overflow-hidden border-[6px] border-white shadow-[0_20px_50px_rgba(18,38,58,0.1)]">
              <img
                src="https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=800&q=80"
                alt="Pharmaceutical Researcher in Lab"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-brand-blue/5 mix-blend-overlay"></div>
            </div>

            {/* TOP LEFT/RIGHT FLOATING BADGE (Matches 'PATIENT RECOVERS') */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute top-10 lg:top-16 -right-6 lg:-right-12 bg-white rounded-xl shadow-xl p-4 border border-brand-blue-light z-30 flex flex-col gap-2"
            >
              <span className="text-[11px] font-bold text-brand-navy uppercase tracking-wide">Quality-Driven Manufacturing</span>
              <div className="flex items-center">
                <div className="flex -space-x-3">
                  <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=100&h=100&fit=crop" className="w-8 h-8 rounded-full border-2 border-white object-cover" alt="Scientist" />
                  <img src="https://images.unsplash.com/photo-1579165466949-3180a3d056d5?w=100&h=100&fit=crop" className="w-8 h-8 rounded-full border-2 border-white object-cover" alt="Scientist" />
                  <img src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=100&h=100&fit=crop" className="w-8 h-8 rounded-full border-2 border-white object-cover" alt="Scientist" />
                </div>
                <div className="w-8 h-8 rounded-full bg-brand-blue text-white text-[10px] font-bold flex items-center justify-center border-2 border-white -ml-3 z-10">
                  50+
                </div>
              </div>
            </motion.div>

            {/* BOTTOM LEFT ROTATED FLOATING BADGE (Matches 'FIND THE BEST DOCTORS') */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="hidden md:flex absolute bottom-12 lg:bottom-24 -left-8 lg:-left-16 bg-white rounded-full shadow-[0_10px_30px_rgba(0,185,242,0.15)] p-2.5 pr-6 items-center gap-3 transform -rotate-12 z-30 border border-brand-blue-light"
            >
              <div className="bg-brand-navy text-white p-2.5 rounded-full flex-shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="flex flex-col whitespace-nowrap">
                <span className="text-[11px] font-extrabold text-brand-navy uppercase leading-tight tracking-wide">Pharmaceutical<br />Formulations</span>
                <span className="text-[9px] text-slate-500 leading-tight">Reliable Supply & Support</span>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>



    </section>
  );
};
