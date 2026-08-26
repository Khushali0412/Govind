"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react';

interface NavbarProps {
  onOpenEnquire?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenEnquire }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

interface NavItem {
  name: string;
  href: string;
  hasDropdown?: boolean;
  dropdownItems?: { name: string; href: string; hasSubmenu?: boolean }[];
}

  const navItems: NavItem[] = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Products', href: '/products' },
    { name: 'Contact Us', href: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-md py-3'
          : 'bg-white py-4 lg:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-3 group focus:outline-none">
            <div className="relative py-1 px-2 rounded-lg transition-transform duration-300 group-hover:scale-105">
              <img
                src="/GOVIND LOGO.svg"
                alt="GOVIND REMEDIES PVT. LTD."
                className="h-10 sm:h-12 w-auto object-contain transition-opacity duration-300"
              />
            </div>
          </Link>

          {/* DESKTOP NAV LINKS */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 relative">
            {navItems.map((item) => (
              <div 
                key={item.name} 
                className="relative group"
                onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={`flex items-center gap-1.5 text-[15px] font-medium transition-colors py-2 ${
                    item.name === 'Home' ? 'text-brand-blue' : 'text-slate-700 hover:text-brand-blue'
                  }`}
                >
                  {item.name}
                  {item.hasDropdown && (
                    <ChevronDown className="w-4 h-4 opacity-70" />
                  )}
                </Link>

                {/* DROPDOWN MENU */}
                {item.hasDropdown && item.dropdownItems && (
                  <div 
                    className={`absolute top-full left-0 mt-2 w-64 bg-brand-blue rounded-xl shadow-[0_10px_40px_-10px_rgba(0,185,242,0.4)] py-3 transform transition-all duration-300 origin-top ${
                      activeDropdown === item.name ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'
                    }`}
                  >
                    {item.dropdownItems.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        className="flex items-center justify-between px-6 py-2.5 text-[14px] font-medium text-white hover:bg-white/10 transition-colors"
                      >
                        <span>{subItem.name}</span>
                        {subItem.hasSubmenu && (
                          <ChevronRight className="w-4 h-4 opacity-80" />
                        )}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA & MOBILE TOGGLE */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenEnquire}
              className="hidden sm:inline-flex items-center justify-center px-7 py-3 rounded-full text-[15px] font-semibold transition-all duration-300 bg-brand-blue text-white hover:bg-brand-blue-dark shadow-[0_4px_14px_0_rgba(0,185,242,0.39)] hover:shadow-[0_6px_20px_rgba(0,185,242,0.23)] hover:-translate-y-0.5"
            >
              Book Appointment
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-800 hover:bg-slate-100 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU SLIDE-IN DRAWER */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[70px] z-40 bg-white/95 backdrop-blur-xl animate-in slide-in-from-top duration-300 border-t border-slate-100">
          <div className="px-6 py-6 space-y-2 max-h-[calc(100vh-70px)] overflow-y-auto">
            {navItems.map((item) => (
              <div key={item.name} className="flex flex-col">
                <Link
                  href={item.href}
                  onClick={() => !item.hasDropdown && setMobileMenuOpen(false)}
                  className="flex items-center justify-between py-3 text-lg font-medium text-slate-800 border-b border-slate-100 hover:text-brand-blue transition-colors"
                >
                  <span>{item.name}</span>
                  {item.hasDropdown ? (
                    <ChevronDown className="w-5 h-5 text-slate-400" />
                  ) : (
                    <ChevronRight className="w-5 h-5 text-slate-400 opacity-0" />
                  )}
                </Link>
                
                {/* Mobile Dropdown Items (simplified, just showing them inline if needed, but for now just basic) */}
                {item.hasDropdown && item.dropdownItems && (
                  <div className="pl-4 py-2 space-y-2">
                    {item.dropdownItems.map(subItem => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block py-2 text-slate-600 hover:text-brand-blue transition-colors"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            
            <div className="pt-6 pb-20">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onOpenEnquire) onOpenEnquire();
                }}
                className="w-full py-3.5 px-6 rounded-full bg-brand-blue text-white font-bold text-base shadow-lg shadow-brand-blue/30 flex items-center justify-center gap-2"
              >
                <span>Book Appointment</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

