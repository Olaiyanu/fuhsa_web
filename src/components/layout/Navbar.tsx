import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronRight, User, LogOut } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/src/lib/utils';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Academics', path: '/academics' },
  { name: 'Admission', path: '/admission' },
  { name: 'Research', path: '/research' },
];

const dashboardLinks = [
  { name: 'Dashboard', tab: 'Dashboard' },
  { name: 'Profile', tab: 'Profile' },
  { name: 'Courses', tab: 'My Courses' },
  { name: 'Payments', tab: 'Payments' },
  { name: 'Results', tab: 'Results' },
];

interface NavbarProps {
  isDashboard?: boolean;
  activeTab?: string;
  onTabChange?: (tab: any) => void;
  onLogout?: () => void;
}

export default function Navbar({ isDashboard, activeTab, onTabChange, onLogout }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 md:px-8 py-4',
        (isScrolled || isDashboard) ? 'bg-white/80 backdrop-blur-md shadow-sm border-b border-white/20' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-brand-gold rounded-xl flex items-center justify-center p-1.5 shadow-lg group-hover:rotate-12 transition-transform">
             {/* Simple Logo Placeholder */}
             <div className="w-full h-full border-2 border-brand-navy rounded-sm flex items-center justify-center font-bold text-brand-navy text-xs">
               FU
             </div>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-lg leading-tight tracking-tight text-brand-navy">FUHSA</span>
            <span className="text-[10px] uppercase font-semibold text-brand-gold tracking-widest leading-none">AZARE</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {!isDashboard ? (
            <>
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    'text-sm font-bold tracking-tight transition-all relative py-1',
                    location.pathname === link.path 
                      ? 'text-brand-gold' 
                      : isScrolled 
                        ? 'text-brand-navy hover:text-brand-gold' 
                        : 'text-brand-navy hover:text-brand-gold drop-shadow-sm'
                  )}
                >
                  {link.name}
                  {location.pathname === link.path && (
                    <motion.div
                      layoutId="nav-underline"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-gold rounded-full"
                    />
                  )}
                </Link>
              ))}
              <Link
                to="/portal"
                className="bg-brand-navy text-white px-5 py-2.5 rounded-full text-sm font-semibold flex items-center gap-2 hover:bg-brand-navy/90 transition-all shadow-md active:scale-95"
              >
                <User size={16} />
                Portal
              </Link>
            </>
          ) : (
            <>
              {dashboardLinks.map((link) => (
                <button
                  key={link.tab}
                  onClick={() => onTabChange?.(link.tab)}
                  className={cn(
                    'text-sm font-black tracking-tight transition-all relative py-1',
                    activeTab === link.tab ? 'text-brand-gold' : 'text-brand-navy hover:text-brand-gold'
                  )}
                >
                  {link.name}
                  {activeTab === link.tab && (
                    <motion.div
                      layoutId="nav-underline-dash"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-gold rounded-full"
                    />
                  )}
                </button>
              ))}
              <button
                onClick={onLogout}
                className="text-sm font-bold text-red-500 hover:text-red-600 transition-colors"
              >
                Logout
              </button>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-brand-navy"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-brand-navy/40 backdrop-blur-sm z-[51]"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[80%] max-w-sm bg-white z-[52] shadow-2xl p-8 flex flex-col"
            >
              <div className="flex items-center justify-between mb-12">
                 <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-brand-gold rounded-xl flex items-center justify-center p-1.5">
                       <span className="font-bold text-brand-navy text-xs">FU</span>
                    </div>
                    <span className="font-bold text-brand-navy">FUHSA</span>
                 </div>
                 <button onClick={() => setIsOpen(false)} className="p-2 text-brand-navy"><X /></button>
              </div>

              <div className="flex flex-col gap-6">
                {!isDashboard ? (
                  <>
                    {navLinks.map((link) => (
                      <Link
                        key={link.path}
                        to={link.path}
                        onClick={() => setIsOpen(false)}
                        className={cn(
                          'text-xl font-semibold flex items-center justify-between group',
                          location.pathname === link.path ? 'text-brand-gold' : 'text-brand-navy/70'
                        )}
                      >
                        {link.name}
                        <ChevronRight className="opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Link>
                    ))}
                    <div className="pt-6 border-t mt-auto">
                        <Link
                            to="/portal"
                            onClick={() => setIsOpen(false)}
                            className="w-full bg-brand-navy text-white p-4 rounded-2xl font-bold flex items-center justify-center gap-2"
                        >
                            <User size={20} />
                            Student Portal
                        </Link>
                    </div>
                  </>
                ) : (
                  <>
                    {dashboardLinks.map((link) => (
                      <button
                        key={link.tab}
                        onClick={() => {
                          onTabChange?.(link.tab);
                          setIsOpen(false);
                        }}
                        className={cn(
                          'text-xl font-semibold flex items-center justify-between group',
                          activeTab === link.tab ? 'text-brand-gold' : 'text-brand-navy/70'
                        )}
                      >
                        {link.name}
                        <ChevronRight className="opacity-0 group-hover:opacity-100 transition-opacity" />
                      </button>
                    ))}
                    <div className="pt-6 border-t mt-auto">
                      <button
                        onClick={() => {
                          onLogout?.();
                          setIsOpen(false);
                        }}
                        className="w-full bg-red-500 text-white p-4 rounded-2xl font-bold flex items-center justify-center gap-2"
                      >
                        <LogOut size={20} />
                        Logout
                      </button>
                    </div>
                  </>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
