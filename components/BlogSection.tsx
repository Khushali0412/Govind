"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { BookOpen, ArrowRight, ArrowUpRight, ShieldCheck } from 'lucide-react';

export const BlogSection: React.FC = () => {
  const blogs = [
    {
      id: 1,
      category: "Manufacturing",
      date: "October 12, 2025",
      author: "Govind Expert Team",
      title: "The Future of Liquid Injectables Manufacturing: Automation and Scale",
      image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=800&q=80",
      link: "#",
    },
    {
      id: 2,
      category: "Quality Control",
      date: "September 28, 2025",
      author: "QA Department",
      title: "Ensuring Global Quality Standards in Pharmaceutical Formulations",
      image: "https://images.unsplash.com/photo-1579165466741-7f35e4755660?auto=format&fit=crop&w=800&q=80",
      link: "#",
    },
    {
      id: 3,
      category: "Research & Dev",
      date: "September 15, 2025",
      author: "R&D Division",
      title: "Innovations in Non-Beta Lactam Production Facilities",
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=80",
      link: "#",
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-brand-soft-bg rounded-[2.5rem] p-6 sm:p-10 lg:p-12 border border-brand-blue/5">
        
        {/* TOP HEADER SECTION */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            {/* PILL */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-blue text-white font-extrabold text-[10px] tracking-[0.2em] uppercase mb-6 shadow-sm">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Knowledge & Updates</span>
            </div>
            {/* HEADING */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-navy tracking-tighter mb-6 leading-[1.1]">
              Read our informative insights from pharmaceutical <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-emerald">experts</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-shrink-0"
          >
            <Link 
              href="/blogs"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-brand-blue hover:bg-brand-blue-dark text-white font-bold text-base transition-all duration-300 shadow-lg shadow-brand-blue/25 hover:shadow-xl hover:shadow-brand-blue/30 hover:-translate-y-1"
            >
              <span>Explore All Insights</span>
            </Link>
          </motion.div>
        </div>

        {/* BLOG CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group flex flex-col h-full bg-white rounded-[2rem] p-6 shadow-sm hover:shadow-md transition-shadow border border-slate-100"
            >
              {/* IMAGE CONTAINER */}
              <div className="relative w-full aspect-video rounded-[1.5rem] overflow-hidden mb-5">
                <img 
                  src={blog.image} 
                  alt={blog.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* CATEGORY PILL */}
                <div className="absolute bottom-4 left-4 bg-brand-navy text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg backdrop-blur-sm">
                  {blog.category}
                </div>
              </div>

              {/* CONTENT */}
              <div className="flex flex-col flex-grow">
                {/* METADATA */}
                <div className="flex items-center gap-2 text-sm text-slate-500 font-medium mb-4">
                  <span>{blog.date}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-blue/50" />
                  <span>By {blog.author}</span>
                </div>

                {/* TITLE */}
                <h3 className="text-xl sm:text-2xl font-bold text-brand-navy leading-snug mb-6 group-hover:text-brand-blue transition-colors">
                  {blog.title}
                </h3>

                {/* READ MORE LINK */}
                <div className="mt-auto pt-4 border-t border-slate-50">
                  <Link 
                    href={blog.link}
                    className="inline-flex items-center gap-2 text-brand-blue font-bold group-hover:text-brand-blue-dark transition-colors"
                  >
                    <span>Read More</span>
                    <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        </div>
      </div>
    </section>
  );
};
