import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="relative bg-brand-navy text-white pt-24 pb-12 overflow-hidden">
      {/* Wave Animation */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180 bg-slate-50">
        <svg className="relative block w-full h-[60px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#0D1E32"></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* About Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-brand-gold rounded-xl flex items-center justify-center p-2 shadow-xl">
                 <span className="font-bold text-brand-navy text-sm">FU</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl leading-tight">FUHSA</span>
                <span className="text-[10px] uppercase font-semibold text-brand-gold tracking-[0.2em]">Azare, Bauchi State</span>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              Federal University of Health Sciences, Azare (FUHSA) is committed to producing highly skilled health professionals who are globally competitive and socially responsible.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ y: -4, color: '#DCA83A' }}
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 transition-colors"
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6 border-b border-brand-gold/30 pb-2 inline-block">Quick Links</h4>
            <ul className="space-y-4">
              {['About FUHSA', 'Admission Requirements', 'Staff Directory', 'Student Portal', 'Academic Calendar'].map((link) => (
                <li key={link}>
                  <Link to="#" className="text-white/60 hover:text-brand-gold text-sm flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-gold opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Departments */}
          <div>
            <h4 className="font-bold text-lg mb-6 border-b border-brand-gold/30 pb-2 inline-block">Departments</h4>
            <ul className="space-y-4">
              {['Medicine & Surgery', 'Nursing Sciences', 'Public Health', 'Medical Laboratory Science', 'Dentistry'].map((dept) => (
                <li key={dept}>
                  <Link to="#" className="text-white/60 hover:text-brand-gold text-sm flex items-center gap-2 group">
                    <ExternalLink size={14} className="opacity-40 group-hover:opacity-100 transition-opacity" />
                    {dept}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-6 border-b border-brand-gold/30 pb-2 inline-block">Contact Us</h4>
            <ul className="space-y-5">
              <li className="flex items-start gap-4 text-sm text-white/60">
                <MapPin className="text-brand-gold shrink-0" size={20} />
                <span>Azare-Kano Road, Azare,<br />Bauchi State, Nigeria</span>
              </li>
              <li className="flex items-center gap-4 text-sm text-white/60">
                <Mail className="text-brand-gold shrink-0" size={20} />
                <span>info@fuhsa.edu.ng</span>
              </li>
              <li className="flex items-center gap-4 text-sm text-white/60">
                <Phone className="text-brand-gold shrink-0" size={20} />
                <span>+234 800 FUHSA HELP</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/40 text-xs">
            © {new Date().getFullYear()} Federal University of Health Sciences, Azare. All rights reserved.
          </p>
          <div className="flex gap-8 text-xs text-white/40">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>

      {/* Background elements */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-gold/5 blur-[120px] rounded-full pointer-events-none" />
    </footer>
  );
}
