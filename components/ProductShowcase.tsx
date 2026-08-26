"use client";
import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, RotateCcw, Box, ShieldCheck, ChevronLeft, ChevronRight } from 'lucide-react';
import { PRODUCTS_DATA } from '../lib/data/products';
import type { ProductItem } from '../lib/data/products';
import { ProductCard } from './ProductCard';

export const ProductShowcase: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedLetter, setSelectedLetter] = useState<string>('All');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

    const categories = [
    'All',
    'Anticoagulant',
    'Vitamins & Minerals',
    'Electrolytes & Infusions',
    'Emergency & Cardiac',
    'Analgesic & NSAID',
    'Contrast Media',
    'Specialty & Peptides',
    'Anesthetic & Others',
  ];

  const alphabet = ['All', ...Array.from('ABCDEFGHIJKLMNOPQRSTUVWXYZ')];

  const filteredProducts = useMemo(() => {
    return PRODUCTS_DATA.filter((product) => {
      const matchesSearch =
        searchQuery === '' ||
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.strengthsSummary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;

      const matchesLetter =
        selectedLetter === 'All' || product.name.toUpperCase().startsWith(selectedLetter);

      return matchesSearch && matchesCategory && matchesLetter;
    });
    }, [searchQuery, selectedCategory, selectedLetter]);

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const currentProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

    React.useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedCategory, selectedLetter]);

  const handleReset = () => {
    setSearchQuery('');
    setSelectedCategory('All');
    setSelectedLetter('All');
  };

  return (
    <section id="products" className="py-24 bg-white relative overflow-hidden">
      {/* MODERN BACKGROUND GLOWS */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-brand-blue/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-emerald/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-blue text-white font-extrabold text-[10px] tracking-[0.2em] uppercase mb-6 shadow-sm">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Our Product Portfolio</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-brand-navy tracking-tighter mb-6 leading-[1.1]">
              Explore Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-emerald">Formulations</span>
            </h2>
            <p className="text-slate-500 text-lg sm:text-xl font-medium leading-relaxed max-w-2xl mx-auto">
              A diverse portfolio of pharmaceutical formulations designed around essential healthcare needs, precision-manufactured in advanced facilities.
            </p>
          </motion.div>
        </div>

        {/* SEARCH & FILTER CONTROLS BAR (GLASS EFFECT) */}
        <div className="bg-white/80 backdrop-blur-xl rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white p-6 sm:p-8 mb-12 space-y-8">
          
          {/* SEARCH BAR & CATEGORY SELECTOR */}
          <div className="flex flex-col lg:flex-row gap-4">
            
            {/* INPUT */}
            <div className="flex-1 relative group">
              <Search className="w-5 h-5 absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-brand-blue transition-colors" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search formulations by name, category, or molecule..."
                className="w-full pl-14 pr-12 py-4 rounded-2xl bg-slate-50/50 border border-slate-200 focus:outline-none focus:border-brand-blue focus:bg-white focus:ring-4 focus:ring-brand-blue/10 text-brand-navy font-bold placeholder-slate-400 transition-all text-base"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[10px] font-black text-slate-400 hover:text-slate-700 uppercase tracking-widest px-2 py-1 bg-slate-200/50 hover:bg-slate-200 rounded-lg transition-colors"
                >
                  Clear
                </button>
              )}
            </div>

            {/* RESET BUTTON */}
            <button
              onClick={handleReset}
              className="lg:w-auto w-full px-8 py-4 rounded-2xl border-2 border-slate-100 hover:border-slate-200 hover:bg-slate-50 text-slate-600 font-extrabold text-sm flex items-center justify-center gap-2 transition-all active:scale-95"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Reset</span>
            </button>
          </div>

          {/* CATEGORY CHIPS */}
          <div>
            <div className="flex items-center gap-2 mb-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">
              <Filter className="w-3.5 h-3.5" />
              <span>Categories</span>
            </div>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {categories.map((cat) => {
                const isSelected = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all duration-300 ${
                      isSelected
                        ? 'bg-brand-navy text-white shadow-lg shadow-brand-navy/20 scale-105'
                        : 'bg-white border border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-50'
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>

        </div>

        {/* RESULTS COUNT & STATUS */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 px-2 gap-4">
          <div className="text-sm font-bold text-slate-500 tracking-wide">
            Showing <span className="text-brand-navy text-lg mx-1">{filteredProducts.length}</span> of{' '}
            <span className="text-brand-navy text-lg ml-1">{PRODUCTS_DATA.length}</span> Formulations
          </div>
          {(selectedCategory !== 'All' || selectedLetter !== 'All' || searchQuery !== '') && (
            <button
              onClick={handleReset}
              className="text-xs text-brand-blue font-extrabold uppercase tracking-widest hover:text-brand-blue-dark"
            >
              View Entire Catalog &rarr;
            </button>
          )}
        </div>

        {/* PRODUCT CARDS GRID */}
        {filteredProducts.length > 0 ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
            <AnimatePresence mode="popLayout">
              {currentProducts.map((product) => (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: -20 }}
                  transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                >
                  <ProductCard product={product} />
                </motion.div>
              ))}
                        </AnimatePresence>
          </div>

          {totalPages > 1 && (
            <div className="flex justify-center mt-16 relative z-10">
              <div className="inline-flex items-center p-1.5 bg-slate-50/80 backdrop-blur-md border border-slate-200/60 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
                
                {/* Previous Button */}
                <button
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className="w-10 h-10 rounded-full flex items-center justify-center text-slate-400 hover:text-brand-navy hover:bg-slate-50 disabled:opacity-30 disabled:pointer-events-none transition-all duration-300 mr-2"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                {/* Page Numbers */}
                <div className="flex items-center gap-1 relative">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
                    const isActive = currentPage === page;
                    return (
                      <button
                        key={page}
                        onClick={() => setCurrentPage(page)}
                        className={`relative w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-colors duration-300 z-10 ${
                          isActive ? 'text-white' : 'text-slate-500 hover:text-brand-navy hover:bg-slate-50'
                        }`}
                      >
                        {isActive && (
                          <motion.div
                            layoutId="activePage"
                            className="absolute inset-0 bg-brand-navy rounded-full shadow-lg shadow-brand-navy/30 -z-10"
                            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                          />
                        )}
                        {page}
                      </button>
                    );
                  })}
                </div>

                {/* Next Button */}
                <button
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className="w-10 h-10 rounded-full flex items-center justify-center text-slate-400 hover:text-brand-navy hover:bg-slate-50 disabled:opacity-30 disabled:pointer-events-none transition-all duration-300 ml-2"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
                
              </div>
            </div>
          )}
          </>
        ) : (
          /* MODERN EMPTY STATE */
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-[2rem] border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-16 text-center max-w-2xl mx-auto space-y-6"
          >
            <div className="w-24 h-24 rounded-full bg-slate-50 border border-slate-100 text-slate-300 flex items-center justify-center mx-auto mb-8 shadow-inner">
              <Search className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-black text-brand-navy tracking-tight">No Formulations Found</h3>
            <p className="text-base text-slate-500 font-medium">
              We couldn't find any products matching your current filters. Try searching for a different molecule or adjust the category.
            </p>
            <button
              onClick={handleReset}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-brand-blue hover:bg-brand-blue-dark text-white font-bold text-base transition-all duration-300 shadow-lg shadow-brand-blue/25 hover:shadow-xl hover:shadow-brand-blue/30 hover:-translate-y-1"
            >
              Reset All Filters
            </button>
          </motion.div>
        )}

      </div>
    </section>
  );
};
