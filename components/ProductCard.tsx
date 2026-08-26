"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowUpRight, Syringe, Sparkles, Activity } from 'lucide-react';
import type { ProductItem } from '../lib/data/products';

interface ProductCardProps {
  product: ProductItem;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  // Generate a distinct dynamic gradient overlay based on the exact category using ONLY brand theme colors
  let orbColor = 'bg-brand-blue/20'; // Default fallback
  const cat = product.category;

  if (cat.includes('Anticoagulant')) orbColor = 'bg-brand-blue/20';
  else if (cat.includes('Vitamins')) orbColor = 'bg-brand-golden/20';
  else if (cat.includes('Electrolytes')) orbColor = 'bg-brand-emerald/20';
  else if (cat.includes('Cardiac')) orbColor = 'bg-brand-navy/20';
  else if (cat.includes('Analgesic')) orbColor = 'bg-slate-400/20';
  else if (cat.includes('Contrast')) orbColor = 'bg-brand-blue/30';
  else if (cat.includes('Specialty')) orbColor = 'bg-brand-golden/30';
  else if (cat.includes('Anesthetic')) orbColor = 'bg-brand-emerald/30';

  const isSpecialty = cat.includes('Specialty') || cat.includes('Cardiac');

  return (
    <Link href={`/products/${product.id}`} className="block h-[320px]">
      <motion.div
        whileHover={{ y: -8, scale: 1.02 }}
        transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
        className="group relative bg-white rounded-3xl p-7 border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_-12px_rgba(0,185,242,0.25)] hover:border-brand-blue/40 transition-all duration-500 cursor-pointer overflow-hidden flex flex-col h-full justify-between"
      >
      {/* ABSTRACT GLOWING ORB */}
      <div className={`absolute -top-12 -right-12 w-40 h-40 ${orbColor} rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700 pointer-events-none`} />

      {/* TOP SECTION: BADGES */}
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-5">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-2xl bg-slate-50 border border-slate-100 text-slate-600 text-xs font-bold tracking-wide shadow-sm group-hover:bg-white transition-colors">
            {isSpecialty ? <Activity className="w-3.5 h-3.5 text-brand-golden" /> : <Sparkles className="w-3.5 h-3.5 text-brand-emerald" />}
            <span>{product.category}</span>
          </div>

          <div className="w-10 h-10 rounded-full bg-slate-50 group-hover:bg-brand-blue text-slate-400 group-hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm group-hover:shadow-glow-blue border border-slate-100 group-hover:border-brand-blue">
            <ArrowUpRight className="w-5 h-5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
          </div>
        </div>

        {/* TITLE AND DESCRIPTION */}
        <h3 className="text-xl font-extrabold text-brand-navy group-hover:text-brand-blue transition-colors line-clamp-1 mb-2">
          {product.name}
        </h3>
        
        <p className="text-sm text-slate-500 line-clamp-2 leading-relaxed mb-6">
          {product.description}
        </p>
      </div>

      {/* BOTTOM SECTION: SPECS */}
      <div className="relative z-10 flex flex-col gap-3">
        {/* Delivery System Tag */}
        <div className="flex items-center gap-3 p-3 rounded-2xl bg-slate-100/70 border border-slate-200/80 group-hover:bg-brand-blue/5 group-hover:border-brand-blue/30 transition-colors">
          <div className="w-8 h-8 rounded-xl bg-white shadow border border-slate-100 flex items-center justify-center text-brand-blue group-hover:scale-110 transition-transform">
            <Syringe className="w-4 h-4" />
          </div>
          <div>
            <div className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">Delivery</div>
            <div className="text-xs font-extrabold text-brand-navy">{product.pfsSizeSummary}</div>
          </div>
        </div>

        {/* Specs Row */}
        <div className="flex items-center justify-between mt-2">
          <div className="flex flex-col">
            <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Strength</span>
            <span className="text-xs font-bold text-slate-700 truncate max-w-[140px]" title={product.strengthsSummary}>
              {product.strengthsSummary}
            </span>
          </div>
          <div className="flex flex-col text-right">
            <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Material</span>
            <span className="text-xs font-extrabold text-brand-emerald">
              {product.mocSummary}
            </span>
          </div>
        </div>
      </div>
      </motion.div>
    </Link>
  );
};
