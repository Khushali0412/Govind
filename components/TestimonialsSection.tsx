"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, Star, ArrowLeft, ArrowRight, ShieldCheck } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
    const testimonials = [
    {
      id: 1,
      name: "Reliable",
      role: "Manufacturing",
      text: "Focused on dependable manufacturing and supply.",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=150&q=80",
    },
    {
      id: 2,
      name: "Quality Driven",
      role: "Standards",
      text: "Committed to maintaining high standards throughout our processes.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=150&q=80",
    },
    {
      id: 3,
      name: "Responsive",
      role: "Partnership",
      text: "Working closely with partners to understand and address their requirements.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80",
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Responsive cards to show: 1 on mobile, 3 on desktop. For simplicity in state we advance by 1.
  // In a real carousel you'd use a swiper library, but this creates a simple sliding window of 3.
  const cardsToShow = 3;
  const maxIndex = testimonials.length - cardsToShow;

  const nextSlide = () => {
    if (currentIndex < maxIndex) setCurrentIndex(prev => prev + 1);
  };

  const prevSlide = () => {
    if (currentIndex > 0) setCurrentIndex(prev => prev - 1);
  };

  const visibleTestimonials = testimonials.slice(currentIndex, currentIndex + cardsToShow);

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* ANIMATED ABSTRACT SHAPES BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Top left blue shape */}
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, -50, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-5%] left-[-5%] w-[400px] sm:w-[500px] h-[400px] sm:h-[500px] bg-brand-blue/20 rounded-full blur-[80px]"
        />
        {/* Middle right emerald shape */}
        <motion.div
          animate={{
            x: [0, -50, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-[30%] right-[-5%] w-[500px] sm:w-[600px] h-[500px] sm:h-[600px] bg-brand-emerald/15 rounded-full blur-[90px]"
        />
        {/* Center golden shape */}
        <motion.div
          animate={{
            y: [0, 30, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 5 }}
          className="absolute top-[20%] left-[30%] w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] bg-brand-golden/15 rounded-full blur-[80px]"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* SECTION HEADING */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center justify-center w-full mb-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-blue text-white font-extrabold text-[10px] tracking-[0.2em] uppercase mb-6 shadow-sm">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Testimonials</span>
              </div>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-navy tracking-tighter mb-6 leading-[1.1]">
              Partnerships Built on Reliability and <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-emerald">Quality</span>
            </h2>
            <p className="text-slate-500 text-base sm:text-lg">
              We believe strong pharmaceutical partnerships are built through transparency, consistency and a shared commitment to delivering quality healthcare products.
            </p>
          </motion.div>
        </div>

        {/* TESTIMONIAL CARDS (SLIDING WINDOW) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 min-h-[320px]">
          <AnimatePresence mode="popLayout">
            {visibleTestimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                layout
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="bg-white border border-slate-100 rounded-[2.5rem] p-8 sm:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col h-full"
              >
                {/* STARS */}
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-brand-blue text-brand-blue" />
                  ))}
                </div>

                {/* TEXT */}
                <p className="text-slate-500 leading-relaxed font-medium mb-8 flex-grow">
                  {testimonial.text}
                </p>

                {/* DIVIDER */}
                <hr className="border-slate-100 mb-6" />

                {/* PROFILE */}
                <div className="flex items-center gap-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover shadow-sm border border-slate-100"
                  />
                  <div>
                    <h4 className="text-brand-navy font-bold text-base">
                      {testimonial.name}
                    </h4>
                    <p className="text-slate-400 text-sm">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* NAVIGATION CONTROLS */}
        <div className="flex items-center justify-center gap-4">
          <button 
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className={`w-12 h-12 rounded-full flex items-center justify-center transition-all shadow-md ${
              currentIndex === 0 
                ? 'bg-slate-100 text-slate-400 cursor-not-allowed opacity-50' 
                : 'bg-brand-blue hover:bg-brand-blue-dark text-white'
            }`}
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <button 
            onClick={nextSlide}
            disabled={currentIndex >= maxIndex}
            className={`w-12 h-12 rounded-full flex items-center justify-center transition-all shadow-md ${
              currentIndex >= maxIndex 
                ? 'bg-slate-100 text-slate-400 cursor-not-allowed opacity-50' 
                : 'bg-brand-blue hover:bg-brand-blue-dark text-white'
            }`}
          >
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
};
