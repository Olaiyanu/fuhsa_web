import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Search, 
  Stethoscope, 
  HeartPulse, 
  Microscope, 
  Users, 
  Clock, 
  BookOpen, 
  ChevronRight,
  Filter,
  Layers,
  Activity,
  UserCheck
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/src/lib/utils';
import ScrollReveal from '@/src/components/ScrollReveal';

const programs = [
  { id: 1, name: "Medicine & Surgery", duration: "6 Years", category: "Clinical Sciences", desc: "Our flagship program designed to produce highly skilled medical doctors who are leaders in healthcare delivery and research.", icon: Stethoscope, degrees: "MBBS" },
  { id: 2, name: "Nursing Sciences", duration: "5 Years", category: "Allied Health", desc: "Comprehensive nursing education focusing on clinical competence, community nursing, and professional medical ethics.", icon: HeartPulse, degrees: "B.N.Sc" },
  { id: 3, name: "Public Health", duration: "4 Years", category: "Allied Health", desc: "Study the science of protecting and improving the health of communities through education, policy making and research.", icon: Users, degrees: "B.Sc" },
  { id: 4, name: "Medical Laboratory Science", duration: "5 Years", category: "Allied Health", desc: "Expert training in laboratory diagnostics, hematology, and biochemical research essential for modern medicine.", icon: Microscope, degrees: "B.MLS" },
  { id: 5, name: "Dentistry", duration: "6 Years", category: "Clinical Sciences", desc: "Specialized training in oral health, dental surgery, and periodontics with state-of-the-art simulation labs.", icon: Activity, degrees: "BDS" },
  { id: 6, name: "Human Anatomy", duration: "4 Years", category: "Basic Medical", desc: "Explore the structural complexities of the human body, providing a foundation for clinical and biological sciences.", icon: Layers, degrees: "B.Sc" },
];

const categories = ["All Programs", "Clinical Sciences", "Allied Health", "Basic Medical"];

export default function Academics() {
  const [activeFilter, setActiveFilter] = useState("All Programs");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPrograms = programs.filter(p => {
    const matchesFilter = activeFilter === "All Programs" || p.category === activeFilter;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="pt-24 min-h-screen bg-slate-50">
      {/* Search & Intro */}
      <section className="bg-brand-navy py-32 text-white relative overflow-hidden">
        {/* Picture Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1576091160550-217359f42f8c?auto=format&fit=crop&q=80&w=2070" 
            alt="Academic Medical Background" 
            className="w-full h-full object-cover scale-110 opacity-50 animate-pulse-slow"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/80 to-transparent" />
          <div className="absolute inset-0 bg-brand-navy/20" />
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
           <ScrollReveal>
             <div className="max-w-3xl">
               <h4 className="text-brand-gold uppercase tracking-[0.4em] font-black text-[10px] mb-4">Academic Excellence</h4>
               <h1 className="text-5xl md:text-7xl font-serif leading-tight mb-8">Discover Your <span className="text-brand-gold italic">Scientific Path</span></h1>
               <p className="text-white/60 text-lg max-w-2xl leading-relaxed mb-12 text-balance">
                 Explore our range of specialized healthcare programs designed to equip you for a global impact in medical science and clinical research.
               </p>
               
               {/* Search Bar */}
               <div className="relative max-w-2xl group">
                  <div className="absolute inset-y-0 left-6 flex items-center text-brand-gold">
                     <Search size={22} className="group-focus-within:scale-110 transition-transform" />
                  </div>
                  <input 
                     type="text" 
                     placeholder="Search programs (e.g., Nursing, MBBS)..."
                     value={searchQuery}
                     onChange={(e) => setSearchQuery(e.target.value)}
                     className="w-full bg-white/10 backdrop-blur-md border-2 border-white/20 rounded-[2rem] py-6 pl-16 pr-8 text-lg font-medium focus:bg-white focus:text-brand-navy focus:outline-none focus:ring-4 focus:ring-brand-gold/20 transition-all placeholder:text-white/30"
                  />
               </div>
             </div>
           </ScrollReveal>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-12 border-b border-slate-200 sticky top-[72px] z-40 bg-slate-50/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-wrap items-center justify-center gap-4">
           {categories.map((cat) => (
             <button
               key={cat}
               onClick={() => setActiveFilter(cat)}
               className={cn(
                 "px-6 py-2.5 rounded-full text-sm font-bold transition-all flex items-center gap-2",
                 activeFilter === cat 
                   ? "bg-brand-navy text-white shadow-xl shadow-brand-navy/20" 
                   : "bg-white text-brand-navy/60 hover:bg-slate-100 border border-slate-200"
               )}
             >
               {activeFilter === cat && <Filter size={14} className="text-brand-gold" />}
               {cat}
             </button>
           ))}
        </div>
      </section>

      {/* Grid Section */}
      <section className="section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           <AnimatePresence mode="popLayout">
             {filteredPrograms.length > 0 ? (
               filteredPrograms.map((program, index) => (
                 <motion.div
                   layout
                   key={program.id}
                   initial={{ opacity: 0, scale: 0.9 }}
                   animate={{ opacity: 1, scale: 1 }}
                   exit={{ opacity: 0, scale: 0.9 }}
                   transition={{ duration: 0.3 }}
                   className="group bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-brand-navy/5 transition-all relative flex flex-col"
                 >
                    <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-brand-navy mb-8 group-hover:bg-brand-gold group-hover:text-white transition-all duration-500 group-hover:rotate-6">
                       <program.icon size={28} />
                    </div>
                    
                    <div className="flex-1">
                       <div className="flex items-center gap-2 mb-4">
                          <span className="bg-brand-navy/5 text-brand-navy text-[10px] font-black px-2 py-0.5 rounded uppercase tracking-wider">{program.degrees}</span>
                          <span className="text-[10px] text-brand-navy/40 font-bold uppercase tracking-widest">{program.category}</span>
                       </div>
                       
                       <h3 className="text-2xl font-bold text-brand-navy mb-4 group-hover:text-brand-gold transition-colors leading-tight">{program.name}</h3>
                       <p className="text-brand-navy/60 text-sm leading-relaxed mb-10 line-clamp-3">
                         {program.desc}
                       </p>
                    </div>

                    <div className="pt-8 border-t border-slate-50 flex items-center justify-between">
                       <div className="flex items-center gap-2 text-brand-navy/40">
                          <Clock size={16} className="text-brand-gold" />
                          <span className="text-xs font-bold">{program.duration}</span>
                       </div>
                       <button className="bg-brand-navy/5 p-3 rounded-xl text-brand-navy group-hover:bg-brand-gold group-hover:text-white transition-all active:scale-90">
                          <ChevronRight size={20} />
                       </button>
                    </div>
                    
                    <div className="absolute bottom-10 right-20 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                       <Link to="#" className="text-[10px] font-black uppercase text-brand-gold flex items-center gap-1">
                          View Curriculum <BookOpen size={10} />
                       </Link>
                    </div>
                 </motion.div>
               ))
             ) : (
               <div className="col-span-full py-32 text-center">
                  <div className="w-24 h-24 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-8 text-brand-navy/20">
                     <Search size={48} />
                  </div>
                  <h3 className="text-2xl font-bold text-brand-navy mb-2">No Programs Found</h3>
                  <p className="text-brand-navy/50">Try searching for something else or changing the filter.</p>
               </div>
             )}
           </AnimatePresence>
        </div>
      </section>

      {/* Stats Quick View */}
      <section className="bg-brand-gold py-16">
         <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-8 text-brand-navy">
            <div className="max-w-xl text-center md:text-left">
               <h3 className="text-3xl font-serif font-bold mb-4">Expert Faculty Ready For You</h3>
               <p className="font-medium opacity-70">Our faculty consists of world-renowned researchers and clinical practitioners with decades of global experience.</p>
            </div>
            <div className="flex gap-12">
               <div className="text-center">
                  <div className="text-4xl font-black">98%</div>
                  <div className="text-xs font-black uppercase tracking-widest opacity-60">Satisfaction</div>
               </div>
               <div className="text-center">
                  <div className="text-4xl font-black">150+</div>
                  <div className="text-xs font-black uppercase tracking-widest opacity-60">Faculty</div>
               </div>
               <div className="text-center">
                  <div className="text-4xl font-black">12</div>
                  <div className="text-xs font-black uppercase tracking-widest opacity-60">Partners</div>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
}
