import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { 
  ArrowRight, 
  Stethoscope, 
  Dna, 
  Microscope, 
  HeartPulse, 
  BookOpen, 
  Users, 
  Award, 
  Calendar,
  Clock,
  MapPin,
  ChevronRight,
  Target,
  Eye
} from 'lucide-react';
import { Link } from 'react-router-dom';
import ScrollReveal from '@/src/components/ScrollReveal';
import StatsCounter from '@/src/components/StatsCounter';
import { cn } from '@/src/lib/utils';
import { programs } from '../constants/programs';

const typewriterWords = [
  "Excellence in Health Education",
  "Innovation in Medical Research",
  "Global Standards in Healthcare Training"
];

export default function Home() {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  useEffect(() => {
    const word = typewriterWords[wordIndex];
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseTime = 2000;

    const timer = setTimeout(() => {
      if (!isDeleting && displayText === word) {
        setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % typewriterWords.length);
      } else {
        const nextChar = isDeleting 
          ? word.substring(0, displayText.length - 1)
          : word.substring(0, displayText.length + 1);
        setDisplayText(nextChar);
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, wordIndex]);

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-[100vh] flex items-center justify-center pt-24 overflow-hidden bg-brand-navy">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1576091160550-217359f42f8c?auto=format&fit=crop&q=80&w=2000" 
            alt="Medical Research" 
            className="w-full h-full object-cover opacity-20 scale-105 animate-pulse-slow"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-navy via-brand-navy/60 to-brand-navy" />
        </div>

        {/* Floating Medical Icons Background */}
        <div className="absolute inset-0 z-0 opacity-10">
           <motion.div animate={{ y: [-20, 20, -20], x: [-10, 10, -10] }} transition={{ duration: 15, repeat: Infinity }} className="absolute top-[20%] left-[10%] text-brand-gold"><Dna size={80} /></motion.div>
           <motion.div animate={{ y: [20, -20, 20], x: [10, -10, 10] }} transition={{ duration: 12, repeat: Infinity }} className="absolute top-[60%] left-[15%] text-white"><Stethoscope size={60} /></motion.div>
           <motion.div animate={{ y: [-30, 30, -30] }} transition={{ duration: 18, repeat: Infinity }} className="absolute top-[30%] right-[15%] text-brand-gold"><Microscope size={100} /></motion.div>
           <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 8, repeat: Infinity }} className="absolute bottom-[20%] right-[20%] text-white"><HeartPulse size={70} /></motion.div>
        </div>

        <motion.div 
          style={{ opacity: heroOpacity, scale: heroScale }}
          className="relative z-10 text-center px-4 max-w-5xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-dark text-brand-gold text-xs font-bold tracking-widest uppercase mb-8"
          >
            <MapPin size={12} />
            Azare, Bauchi State
          </motion.div>

          <motion.h1 
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.2 }}
             className="text-3xl sm:text-4xl md:text-7xl font-serif text-white leading-[1.1] mb-6 text-balance"
          >
            Empowering the Next Generation of <span className="text-brand-gold italic">Health Leaders</span>
          </motion.h1>

          <div className="min-h-[4.5rem] md:min-h-[4rem] flex justify-center items-center mb-8 md:mb-12">
            <p className="text-lg sm:text-xl md:text-3xl text-white/70 font-light tracking-wide max-w-2xl mx-auto">
              {displayText}
              <span className="w-[2px] h-6 md:h-8 bg-brand-gold ml-1 inline-block animate-pulse align-middle" />
            </p>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link 
              to="/admission" 
              className="group bg-brand-gold text-brand-navy px-8 py-4 rounded-2xl font-bold flex items-center gap-2 hover:bg-white transition-all shadow-xl shadow-brand-gold/10 hover:shadow-brand-gold/20 active:scale-95 min-w-[200px] justify-center"
            >
              Apply Now
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/academics" 
              className="group glass-dark text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-2 hover:bg-white/10 transition-all active:scale-95 min-w-[200px] justify-center"
            >
              Explore Programs
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Scroll</span>
          <div className="w-1 h-12 rounded-full bg-white/10 relative overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-1/2 bg-brand-gold rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="section-padding overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <ScrollReveal direction="right" className="space-y-8">
            <div className="inline-block px-3 py-1 bg-brand-gold/10 text-brand-gold text-[10px] font-black uppercase tracking-widest rounded-md">
                Established 2021
            </div>
            <h2 className="text-4xl md:text-5xl font-serif text-brand-navy leading-tight">
              A Legacy of Specialized <br/> <span className="text-brand-gold">Health Excellence</span>
            </h2>
            <p className="text-brand-navy/70 text-lg leading-relaxed">
              The Federal University of Health Sciences, Azare (FUHSA) stands as a beacon of specialized medical training in Africa. Located in the historic town of Azare, our institution bridges the gap in specialized healthcare workforce through rigorous clinical and research standards.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-all group">
                <div className="w-12 h-12 bg-brand-navy rounded-2xl flex items-center justify-center text-brand-gold mb-4 group-hover:scale-110 transition-transform">
                  <Target size={24} />
                </div>
                <h4 className="font-bold text-brand-navy mb-2">Our Mission</h4>
                <p className="text-sm text-brand-navy/60 leading-relaxed">To produce highly skilled health professionals who are globally competitive and morally upright.</p>
              </div>
              <div className="p-6 bg-brand-navy rounded-3xl shadow-xl group">
                <div className="w-12 h-12 bg-brand-gold rounded-2xl flex items-center justify-center text-brand-navy mb-4 group-hover:scale-110 transition-transform">
                  <Eye size={24} />
                </div>
                <h4 className="font-bold text-white mb-2">Our Vision</h4>
                <p className="text-sm text-white/60 leading-relaxed">To be a leading center of excellence in health sciences education, research, and innovation globally.</p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="left" className="relative">
            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl relative z-10 ring-8 ring-white">
              <img 
                src="https://images.unsplash.com/photo-1516533075015-a3838414c3ca?auto=format&fit=crop&q=80&w=1000" 
                alt="FUHSA Campus" 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                 <div className="glass-dark p-6 rounded-2xl">
                    <p className="text-white font-medium italic text-lg leading-snug">"Shaping the future of healthcare through academic rigor and clinical precision."</p>
                    <p className="text-brand-gold text-xs font-bold uppercase tracking-widest mt-4">— Vice Chancellor</p>
                 </div>
              </div>
            </div>
            {/* Decors */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-gold/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-slate-200 rounded-full blur-3xl" />
          </ScrollReveal>
        </div>

        {/* Stats Grid */}
        <div className="mt-32 grid grid-cols-2 md:grid-cols-4 gap-12 border-y border-slate-100 py-16">
          <StatsCounter value={98} suffix="%" title="Graduate Success" />
          <StatsCounter value={50} suffix="+" title="Research Papers" />
          <StatsCounter value={5} title="Academic Depts" />
          <StatsCounter value={1000} suffix="+" title="Active Students" />
        </div>
      </section>

      {/* Departments Section */}
      <section className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <ScrollReveal className="text-center mb-16 mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif text-brand-navy mb-4">Academic Programs</h2>
            <p className="text-brand-navy/50 max-w-2xl mx-auto">Discover our world-class clinical and health science programs designed for the global medical landscape.</p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {programs.slice(0, 4).map((dept, index) => (
              <ScrollReveal delay={index * 0.1} key={dept.id} className="group cursor-pointer">
                <Link to={`/academics/${dept.id}`} className="block h-full">
                  <div className="h-full bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-brand-navy/5 transition-all relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-brand-gold/5 rounded-bl-[4rem] group-hover:bg-brand-gold/10 transition-colors" />
                    <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-brand-navy mb-8 group-hover:bg-brand-gold group-hover:text-white transition-all duration-500 group-hover:rotate-6">
                      <dept.icon size={28} />
                    </div>
                    <div className="inline-block px-2 py-0.5 bg-brand-navy/5 text-brand-navy text-[10px] font-bold rounded mb-4">{dept.degrees}</div>
                    <h3 className="text-xl font-bold text-brand-navy mb-3">{dept.name}</h3>
                    <p className="text-brand-navy/60 text-sm leading-relaxed mb-6 line-clamp-2">{dept.desc}</p>
                    <span className="flex items-center gap-2 text-brand-gold font-bold text-sm group-hover:gap-3 transition-all">
                      Learn More <ChevronRight size={16} />
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>

          <div className="mt-16 text-center">
             <Link 
              to="/academics" 
              className="inline-flex items-center gap-3 group px-8 py-4 bg-brand-navy text-white rounded-2xl font-bold hover:bg-brand-gold hover:text-brand-navy transition-all shadow-xl shadow-brand-navy/5"
             >
               View All Departments <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
             </Link>
          </div>
        </div>
      </section>

      {/* Research Section */}
      <section className="section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <ScrollReveal direction="right" className="order-2 lg:order-1">
             <div className="grid grid-cols-1 gap-6 relative">
                {/* Visual connectors */}
                <div className="absolute left-[39px] top-10 bottom-10 w-0.5 bg-brand-navy/5 z-0" />
                
                {[
                  { id: "01", title: "Tropical Medicine", desc: "Leading research into infectious diseases unique to tropical climates.", stat: "12 Ongoing Projects" },
                  { id: "02", title: "Public Health Surveillance", desc: "Innovative tracking and epidemiological studies for the region.", stat: "Real-time Data" },
                  { id: "03", title: "Health Technology", desc: "Bridging healthcare and technology for low-resource settings.", stat: "Patented Tech" }
                ].map((item, i) => (
                  <div key={item.id} className="flex gap-8 group relative z-10">
                    <div className="w-20 h-20 bg-white border-2 border-slate-100 rounded-3xl flex items-center justify-center text-3xl font-black text-brand-navy shadow-sm group-hover:border-brand-gold group-hover:text-brand-gold transition-all">
                      {item.id}
                    </div>
                    <div className="flex-1 py-2">
                       <h4 className="text-xl font-bold text-brand-navy">{item.title}</h4>
                       <p className="text-brand-navy/60 text-sm mt-1">{item.desc}</p>
                       <div className="mt-3 inline-flex items-center gap-2 text-[10px] font-black text-brand-gold uppercase tracking-wider">
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse" />
                          {item.stat}
                       </div>
                    </div>
                  </div>
                ))}
             </div>
          </ScrollReveal>

          <ScrollReveal direction="left" className="order-1 lg:order-2 space-y-8">
            <div className="inline-block px-3 py-1 bg-brand-navy text-brand-gold text-[10px] font-black uppercase tracking-widest rounded-md">
                Research & Innovation
            </div>
            <h2 className="text-4xl md:text-5xl font-serif text-brand-navy leading-tight">
              Advancing Global <br/> <span className="text-brand-gold italic">Health Innovation</span>
            </h2>
            <p className="text-brand-navy/70 text-lg leading-relaxed">
              At FUHSA, research isn't just an academic requirement—it's our primary engine for societal impact. We focus on indigenous solutions to global health challenges.
            </p>
            <button className="bg-brand-navy text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-2 hover:bg-brand-navy/90 transition-all shadow-xl active:scale-95">
              View Research Center
              <Microscope size={20} className="text-brand-gold" />
            </button>
          </ScrollReveal>
        </div>
      </section>

      {/* News & Events Section */}
      <section className="bg-brand-navy py-24 text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
            <ScrollReveal direction="right">
               <h2 className="text-4xl md:text-5xl font-serif text-white">Latest from <span className="text-brand-gold">FUHSA</span></h2>
               <p className="text-white/50 mt-4 max-w-lg">Stay updated with the latest news, breakthrough research, and upcoming academic events.</p>
            </ScrollReveal>
            <ScrollReveal direction="left">
               <div className="flex gap-4">
                  <button className="p-3 border border-white/10 rounded-2xl hover:bg-white/10 transition-colors"><ChevronRight className="rotate-180" /></button>
                  <button className="p-3 bg-brand-gold text-brand-navy rounded-2xl shadow-xl shadow-brand-gold/10"><ChevronRight /></button>
               </div>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                type: 'News', 
                title: "Herbal Research Breakthrough in Azare", 
                date: "Nov 12, 2025", 
                read: "5 min read", 
                image: "https://images.unsplash.com/photo-1579152276508-4100529d690a?auto=format&fit=crop&q=80&w=600" 
              },
              { 
                type: 'Event', 
                title: "Annual Global Health Symposium", 
                date: "Dec 05, 2025", 
                location: "Main Auditorium", 
                image: "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&q=80&w=600" 
              },
              { 
                type: 'News', 
                title: "Orientation Week 2025/2026 Batch", 
                date: "Oct 28, 2025", 
                read: "3 min read", 
                image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=600" 
              }
            ].map((item, index) => (
              <ScrollReveal delay={index * 0.1} key={item.title} className="group">
                <div className="bg-white/5 border border-white/10 rounded-[2.5rem] overflow-hidden hover:bg-white/10 transition-all">
                  <div className="aspect-[16/10] overflow-hidden relative">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
                    <div className="absolute top-4 left-4 bg-brand-gold text-brand-navy text-[10px] font-black uppercase py-1 px-3 rounded-lg shadow-lg">
                      {item.type}
                    </div>
                  </div>
                  <div className="p-8">
                     <div className="flex items-center gap-4 text-white/40 text-[10px] font-bold uppercase tracking-widest mb-4">
                        <span className="flex items-center gap-1.5"><Calendar size={12} className="text-brand-gold" /> {item.date}</span>
                        {item.read && <span className="flex items-center gap-1.5"><Clock size={12} className="text-brand-gold" /> {item.read}</span>}
                        {item.location && <span className="flex items-center gap-1.5"><MapPin size={12} className="text-brand-gold" /> {item.location}</span>}
                     </div>
                     <h3 className="text-xl font-bold group-hover:text-brand-gold transition-colors line-clamp-2 leading-snug mb-6">{item.title}</h3>
                     <button className="w-12 h-12 rounded-2xl border border-white/20 flex items-center justify-center group-hover:bg-brand-gold group-hover:text-brand-navy transition-all">
                        <ArrowRight size={20} />
                     </button>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Decorative mask */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-brand-navy to-transparent pointer-events-none" />
      </section>

      {/* CTA Section */}
      <section className="section-padding">
         <ScrollReveal>
            <div className="bg-brand-gold rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden shadow-2xl shadow-brand-gold/20">
               <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-3xl -mr-32 -mt-32" />
               <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/5 blur-3xl -ml-32 -mb-32" />
               
               <div className="relative z-10 max-w-3xl mx-auto">
                  <h2 className="text-4xl md:text-6xl font-serif text-brand-navy mb-8">Begin Your Medical Journey With Us</h2>
                  <p className="text-brand-navy/70 text-lg mb-12 font-medium">Join a community of dedicated researchers and clinicians shaping the future of health sciences.</p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                     <Link to="/admission" className="bg-brand-navy text-white px-10 py-5 rounded-2xl font-bold text-lg hover:scale-105 transition-transform shadow-xl">
                        Apply for 2025/2026 Session
                     </Link>
                     <Link to="/academics" className="text-brand-navy font-black flex items-center gap-2 hover:gap-4 transition-all uppercase tracking-widest text-sm">
                        Request Prospectus <ArrowRight size={20} />
                     </Link>
                  </div>
               </div>
            </div>
         </ScrollReveal>
      </section>
    </div>
  );
}
