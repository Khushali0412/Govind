"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, ShieldCheck } from 'lucide-react';

export const CTASection: React.FC = () => {
  return (
    <section className="py-24 bg-brand-navy relative overflow-hidden flex items-center justify-center">
      
      {/* BACKGROUND GRAPHICS (Intersecting Arcs matching reference) */}
      {/* Left Arcs */}
      <div className="absolute -left-[200px] -bottom-[200px] w-[500px] h-[500px] border-[1.5px] border-brand-blue/30 rounded-full pointer-events-none" />
      <div className="absolute -left-[100px] -bottom-[300px] w-[500px] h-[500px] border-[1.5px] border-brand-blue/30 rounded-full pointer-events-none" />
      
      {/* Right Arcs */}
      <div className="absolute -right-[150px] -top-[150px] w-[400px] h-[400px] border-[1.5px] border-brand-blue/30 rounded-full pointer-events-none" />
      <div className="absolute -right-[50px] -top-[250px] w-[400px] h-[400px] border-[1.5px] border-brand-blue/30 rounded-full pointer-events-none" />
      

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          {/* PRE-HEADING */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-blue text-white font-extrabold text-[10px] tracking-[0.2em] uppercase mb-6 shadow-sm">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Let's Build Better Healthcare Together</span>
          </div>

          {/* MAIN HEADING */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tighter mb-6 leading-[1.1]">
            Looking for a Reliable Pharmaceutical Manufacturing <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-emerald">Partner?</span>
          </h2>

          {/* SUB-HEADING */}
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed pt-2">
            Connect with Govind Remedies to discuss your product requirements, manufacturing opportunities and potential partnership.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-brand-blue hover:bg-brand-blue-dark text-white font-bold text-base transition-all duration-300 shadow-lg shadow-brand-blue/25 hover:shadow-xl hover:shadow-brand-blue/30 hover:-translate-y-1"
            >
              <span>Start a Conversation</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
