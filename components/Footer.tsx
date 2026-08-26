"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowUp, Phone, Mail, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#07132a] via-[#020b1f] to-[#01050f] text-white pt-20 pb-8 relative overflow-hidden">
      
      {/* TOP ACCENT BAR */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-blue via-brand-emerald to-brand-golden" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* TOP SECTION: 3 COLUMNS */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16">
          
          {/* COL 1: LOGO & DESCRIPTION */}
          <div className="space-y-6 md:col-span-5 lg:col-span-4">
            <Link href="/" className="inline-block focus:outline-none">
              <img
                src="/GOVIND LOGO.svg"
                alt="GOVIND REMEDIES PVT. LTD."
                className="h-10 w-auto object-contain bg-white/90 p-2 rounded-lg"
              />
            </Link>
            <p className="text-slate-300 text-sm leading-relaxed pr-4">
              Advancing Healthcare Through Precision Manufacturing. Dedicated supplier of reliable pharmaceutical solutions in Pre-Filled Syringes (PFS) and specialty liquid formulations globally.
            </p>
            {/* SOCIAL ICONS */}
            <div className="flex gap-3">
              {/* Facebook */}
              <a href="#" className="w-9 h-9 rounded bg-white/10 hover:bg-brand-blue flex items-center justify-center transition-colors text-white">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              {/* Twitter/X */}
              <a href="#" className="w-9 h-9 rounded bg-white/10 hover:bg-brand-blue flex items-center justify-center transition-colors text-white">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              {/* Instagram */}
              <a href="#" className="w-9 h-9 rounded bg-white/10 hover:bg-brand-blue flex items-center justify-center transition-colors text-white">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              {/* LinkedIn */}
              <a href="#" className="w-9 h-9 rounded bg-white/10 hover:bg-brand-blue flex items-center justify-center transition-colors text-white">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
            </div>
          </div>

          {/* COL 2: NAVIGATION */}
          <div className="md:col-span-3 lg:col-span-4 lg:pl-12">
            <h4 className="text-base font-bold text-white mb-6 relative inline-block">
              Navigation
              <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-brand-blue" />
            </h4>
            <ul className="space-y-3 text-sm text-slate-300">
              {['Home', 'About Us', 'Manufacturing', 'Product Portfolio', 'Quality Assurance', 'Contact Us'].map((item) => (
                <li key={item}>
                  <Link href="#" className="hover:text-brand-blue transition-colors block">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COL 3: FORMULATION SPECTRUM */}
          <div className="md:col-span-4 lg:col-span-4 lg:pl-12">
            <h4 className="text-base font-bold text-white mb-6 relative inline-block">
              Formulation Spectrum
              <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-brand-blue" />
            </h4>
            <ul className="space-y-3 text-sm text-slate-300">
              <li><Link href="#" className="hover:text-brand-blue transition-colors block">Low Molecular Weight Heparins</Link></li>
              <li><Link href="#" className="hover:text-brand-blue transition-colors block">Pre-Filled Syringes (PFS)</Link></li>
              <li><Link href="#" className="hover:text-brand-blue transition-colors block">Parenteral Vitamins & Minerals</Link></li>
              <li><Link href="#" className="hover:text-brand-blue transition-colors block">Emergency Cardiovascular Formulations</Link></li>
              <li><Link href="#" className="hover:text-brand-blue transition-colors block">Contrast Media Solutions</Link></li>
            </ul>
          </div>

        </div>

        {/* MIDDLE SECTION: CONTACT INFO BOX */}
        <div className="mb-8 border border-white/10 rounded-xl bg-white/5 backdrop-blur-sm divide-y lg:divide-y-0 lg:divide-x divide-white/10 flex flex-col lg:flex-row">
          
          {/* Box 1: Phone */}
          <div className="flex-1 p-6 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-brand-blue flex items-center justify-center shrink-0">
              <Phone className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="text-xs text-slate-400 uppercase tracking-wider mb-1">Direct Contact Desk</div>
              <div className="text-lg font-bold text-white">+91 (0) 123 456 7890</div>
            </div>
          </div>

          {/* Box 2: Email */}
          <div className="flex-1 p-6 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-transparent border border-brand-blue text-brand-blue flex items-center justify-center shrink-0">
              <Mail className="w-5 h-5" />
            </div>
            <div className="text-sm font-medium text-white break-all">
              info@govindremedies.com
            </div>
          </div>

          {/* Box 3: Location */}
          <div className="flex-1 p-6 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-transparent border border-brand-blue text-brand-blue flex items-center justify-center shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div className="text-sm font-medium text-white">
              Pharmaceutical Manufacturing Campus, India
            </div>
          </div>
        </div>

        {/* BOTTOM SECTION: COPYRIGHT & LINKS */}
        <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-slate-400">
          <div>
            © 2026, <span className="text-brand-blue font-bold">GOVIND REMEDIES</span>, ALL RIGHTS RESERVED
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-6">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms & Condition</Link>
            <button
              onClick={scrollToTop}
              className="ml-4 w-10 h-10 rounded-full bg-white text-[#020b1f] hover:bg-brand-blue hover:text-white transition-colors flex items-center justify-center shadow-lg"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
