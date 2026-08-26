"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useSearchParams } from 'next/navigation';
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageSquare, ShieldCheck } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const searchParams = useSearchParams();
  const initialProductQuery = searchParams.get('product') || '';

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: initialProductQuery ? `Enquiry regarding product: ${initialProductQuery}` : '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Name is required';
    if (!formData.email.trim()) {
      errs.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Valid email is required';
    }
    if (!formData.message.trim()) errs.message = 'Message is required';
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* MAIN CARD CONTAINER */}
        <div className="bg-white rounded-[2.5rem] shadow-xl p-6 sm:p-8 md:p-12 border border-slate-100 flex flex-col lg:flex-row gap-12 lg:gap-16 items-stretch">
          
          {/* LEFT: CONTENT & CONTACT INFO */}
          <div className="flex-1 flex flex-col justify-center">
            
            {/* PILL */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-blue text-white font-extrabold text-[10px] tracking-[0.2em] uppercase mb-6 shadow-sm self-start">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Get In Touch</span>
              </div>
            </motion.div>

            {/* HEADING */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-navy tracking-tight leading-tight mb-6"
            >
              Connect With<br />Govind Remedies
            </motion.h2>

            {/* PARAGRAPH */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-slate-500 text-lg leading-relaxed mb-12 max-w-lg"
            >
              Our business team is available for formulation inquiries, contract manufacturing discussions, and product supply requests. Reach out to start a conversation about your needs and how we can help you grow.
            </motion.p>

            {/* CONTACT DETAILS (GRID) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8 mt-auto"
            >
              {/* PHONE */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-navy flex items-center justify-center shrink-0 shadow-lg">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div className="text-brand-navy font-bold text-sm">
                  +91 (0) 123 456 7890
                </div>
              </div>

              {/* LOCATION */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-navy flex items-center justify-center shrink-0 shadow-lg">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div className="text-brand-navy font-bold text-sm">
                  Manufacturing Campus, India
                </div>
              </div>

              {/* EMAIL */}
              <div className="flex items-center gap-4 sm:col-span-2">
                <div className="w-12 h-12 rounded-full bg-brand-navy flex items-center justify-center shrink-0 shadow-lg">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div className="text-brand-navy font-bold text-sm">
                  info@govindremedies.com
                </div>
              </div>
            </motion.div>

          </div>

          {/* RIGHT: FORM BLOCK */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex-1 bg-brand-navy rounded-[2rem] p-8 sm:p-10 flex flex-col justify-center shadow-2xl relative overflow-hidden"
          >
            {/* Subtle background decoration inside the form box */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-[80px] pointer-events-none translate-x-1/3 -translate-y-1/3" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-emerald/20 rounded-full blur-[80px] pointer-events-none -translate-x-1/3 translate-y-1/3" />

            <div className="relative z-10 w-full">
              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-white/20 text-white flex items-center justify-center mx-auto backdrop-blur-sm">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-white">Enquiry Sent Successfully</h3>
                  <p className="text-white/80 text-sm max-w-sm mx-auto leading-relaxed">
                    Thank you for connecting with Govind Remedies. Our corporate team will get back to you shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', company: '', email: '', phone: '', message: '' });
                    }}
                    className="mt-4 px-6 py-2.5 rounded-full bg-white text-brand-navy font-bold text-sm hover:bg-slate-50 transition-colors shadow-lg"
                  >
                    Send Another Enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  
                  {/* NAME */}
                  <div>
                    <label className="block text-xs font-bold text-white/90 mb-2 pl-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full px-5 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:bg-white/20 focus:border-white/40 transition-all text-sm backdrop-blur-sm"
                    />
                    {errors.name && <p className="text-xs text-red-200 mt-1 pl-1">{errors.name}</p>}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* EMAIL */}
                    <div>
                      <label className="block text-xs font-bold text-white/90 mb-2 pl-1">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@company.com"
                        className="w-full px-5 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:bg-white/20 focus:border-white/40 transition-all text-sm backdrop-blur-sm"
                      />
                      {errors.email && <p className="text-xs text-red-200 mt-1 pl-1">{errors.email}</p>}
                    </div>

                    {/* PHONE */}
                    <div>
                      <label className="block text-xs font-bold text-white/90 mb-2 pl-1">
                        Your Phone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className="w-full px-5 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:bg-white/20 focus:border-white/40 transition-all text-sm backdrop-blur-sm"
                      />
                    </div>
                  </div>

                  {/* INQUIRY TYPE / SERVICES (Optional match for image layout) */}
                  <div>
                    <label className="block text-xs font-bold text-white/90 mb-2 pl-1">
                      Enquiry Type
                    </label>
                    <select
                      name="company" // repurposing company field for this drop down to match image style
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-5 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white focus:outline-none focus:bg-white/20 focus:border-white/40 transition-all text-sm backdrop-blur-sm appearance-none cursor-pointer"
                      style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`, backgroundPosition: 'right 1rem center', backgroundRepeat: 'no-repeat' }}
                    >
                      <option value="" className="text-slate-800">Select an enquiry type</option>
                      <option value="Contract Manufacturing" className="text-slate-800">Contract Manufacturing</option>
                      <option value="Product Supply" className="text-slate-800">Product Supply / Bulk Orders</option>
                      <option value="Formulation R&D" className="text-slate-800">Formulation & R&D</option>
                      <option value="Other" className="text-slate-800">Other Business Inquiry</option>
                    </select>
                  </div>

                  {/* MESSAGE */}
                  <div>
                    <label className="block text-xs font-bold text-white/90 mb-2 pl-1">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="How can we help you?"
                      className="w-full px-5 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:bg-white/20 focus:border-white/40 transition-all text-sm backdrop-blur-sm resize-none"
                    />
                    {errors.message && <p className="text-xs text-red-200 mt-1 pl-1">{errors.message}</p>}
                  </div>

                  {/* SUBMIT BUTTON */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-brand-blue hover:bg-brand-blue-dark text-white font-bold text-base transition-all duration-300 shadow-lg shadow-brand-blue/25 hover:shadow-xl hover:shadow-brand-blue/30 hover:-translate-y-1"
                    >
                      <span>Submit</span>
                    </button>
                  </div>

                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
