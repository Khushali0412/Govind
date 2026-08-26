"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, ChevronDown, ShieldCheck } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Do you offer contract manufacturing (CMO) services?",
      answer: "Yes, we specialize in third-party and contract manufacturing for a wide range of pharmaceutical formulations, including liquid injectables, dry syrups, and beta-lactam products. We work closely with our partners to ensure all specifications and regulatory requirements are met."
    },
    {
      question: "What quality certifications does your manufacturing facility hold?",
      answer: "Govind Remedies operates strictly under WHO-GMP guidelines. Our facilities are regularly audited and maintain rigorous compliance with international quality standards to ensure the safety, efficacy, and consistency of every batch."
    },
    {
      question: "What is your typical lead time for bulk orders?",
      answer: "Lead times depend on the specific product formulation and order volume. Typically, standard catalog products have a lead time of 4 to 6 weeks, while new contract manufacturing orders may require 8 to 10 weeks for initial setup and validation."
    },
    {
      question: "Can you assist with product formulation and R&D?",
      answer: "Absolutely. We have a dedicated Research & Development division that assists clients with custom formulations, stability studies, and process optimization to bring new, effective pharmaceutical products to market."
    },
    {
      question: "Do you export your pharmaceutical products globally?",
      answer: "Yes, we have a robust global supply chain and currently export our high-quality pharmaceutical formulations to various international markets, ensuring full compliance with the destination country's regulatory authorities."
    }
  ];

  return (
    <section className="pt-0 pb-24 bg-white relative overflow-hidden">
      
      {/* BACKGROUND DECORATIONS */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-blue/5 rounded-full blur-[100px] pointer-events-none translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-emerald/5 rounded-full blur-[100px] pointer-events-none -translate-x-1/3 translate-y-1/3" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* SECTION HEADER */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-blue text-white font-extrabold text-[10px] tracking-[0.2em] uppercase mb-6 shadow-sm">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Frequently Asked Questions</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-navy tracking-tight mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-500 text-base sm:text-lg max-w-2xl mx-auto">
              Find answers to common questions about our manufacturing capabilities, quality standards, and business operations.
            </p>
          </motion.div>
        </div>

        {/* ACCORDION */}
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen ? 'border-brand-blue/20 shadow-md' : 'border-slate-100 shadow-sm hover:border-brand-blue/10'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left focus:outline-none"
                >
                  <span className={`text-base font-bold transition-colors pr-8 ${isOpen ? 'text-brand-blue' : 'text-brand-navy'}`}>
                    {faq.question}
                  </span>
                  <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                    isOpen ? 'bg-brand-blue text-white rotate-180' : 'bg-slate-50 text-slate-400'
                  }`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>
                
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-0">
                        <div className="w-full h-[1px] bg-slate-50 mb-4" />
                        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
