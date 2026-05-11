import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { programs } from '../constants/programs';
import { 
  ChevronLeft, 
  Clock, 
  GraduationCap, 
  MapPin, 
  CheckCircle, 
  BookOpen, 
  ArrowRight,
  Stethoscope
} from 'lucide-react';
import { cn } from '@/src/lib/utils';

export default function ProgramDetail() {
  const { programId } = useParams<{ programId: string }>();
  const navigate = useNavigate();
  const program = programs.find(p => p.id === programId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [programId]);

  if (!program) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-center">
          <h1 className="text-4xl font-serif text-brand-navy mb-4">Program Not Found</h1>
          <Link to="/academics" className="text-brand-gold font-bold hover:underline">Back to Academics</Link>
        </div>
      </div>
    );
  }

  const Icon = program.icon;

  return (
    <div className="pt-24 min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="bg-brand-navy py-12 md:py-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-brand-navy" />
          <div className="absolute top-0 right-0 w-[50%] h-full bg-brand-gold/5 blur-[120px] -mr-32 -mt-32 rounded-full" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-8"
          >
            <Link 
              to="/academics" 
              className="inline-flex items-center gap-2 text-brand-gold font-bold text-xs uppercase tracking-widest hover:gap-3 transition-all"
            >
              <ChevronLeft size={16} /> Back to Programs
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <span className="bg-brand-gold/20 text-brand-gold px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-6 inline-block">
                {program.category}
              </span>
              <h1 className="text-4xl md:text-6xl font-serif mb-6 leading-tight">
                Department of <br />
                <span className="text-brand-gold italic">{program.name}</span>
              </h1>
              <p className="text-white/70 text-lg leading-relaxed max-w-xl mb-10">
                {program.desc}
              </p>

              <div className="flex flex-wrap gap-8">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-brand-gold">
                    <Clock size={24} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase text-white/30 tracking-wider">Duration</p>
                    <p className="font-bold">{program.duration}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-brand-gold">
                    <GraduationCap size={24} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase text-white/30 tracking-wider">Degree</p>
                    <p className="font-bold">{program.degrees}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="hidden lg:flex justify-center"
            >
               <div className="w-80 h-80 bg-brand-gold flex items-center justify-center rounded-[3rem] shadow-2xl relative group overflow-hidden">
                  <div className="absolute inset-0 bg-brand-navy scale-0 group-hover:scale-100 transition-transform duration-700 rounded-full" />
                  <Icon size={160} className="text-brand-navy group-hover:text-brand-gold transition-colors duration-700 relative z-10" />
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            
            {/* Left: Detailed Info */}
            <div className="lg:col-span-2 space-y-16">
              <div>
                <h2 className="text-3xl font-serif text-brand-navy mb-8">Program Overview</h2>
                <p className="text-slate-600 text-lg leading-relaxed mb-12">
                  {program.fullDesc}
                </p>
                
                <h3 className="text-xl font-bold text-brand-navy mb-8 border-l-4 border-brand-gold pl-6">Curriculum Structure</h3>
                <div className="space-y-4">
                  {program.curriculum?.map((item, index) => (
                    <div key={index} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                      <h4 className="text-brand-gold font-black text-xs uppercase tracking-widest mb-2">{item.year}</h4>
                      <p className="text-brand-navy font-bold">{item.focus}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-serif text-brand-navy mb-8">Admission Requirements</h2>
                <div className="bg-white p-10 rounded-3xl border border-slate-100 shadow-sm">
                  <ul className="space-y-6">
                    {program.requirements?.map((req, i) => (
                      <li key={i} className="flex items-start gap-4">
                        <CheckCircle className="text-brand-gold shrink-0 mt-1" size={20} />
                        <span className="text-brand-navy/70 leading-relaxed">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-brand-gold/10 p-12 rounded-[3rem] flex flex-col md:flex-row items-center justify-between gap-8 border border-brand-gold/20">
                <div>
                   <h3 className="text-2xl font-serif text-brand-navy mb-2">Ready to apply?</h3>
                   <p className="text-brand-navy/60 font-medium">Join our next session of {program.name} students.</p>
                </div>
                <Link 
                  to="/admission" 
                  className="bg-brand-navy text-white px-10 py-4 rounded-2xl font-bold flex items-center gap-3 hover:scale-105 transition-transform shadow-xl"
                >
                  Start Application <ArrowRight size={20} />
                </Link>
              </div>
            </div>

            {/* Right: Sidebar Meta */}
            <div className="lg:col-span-1">
              <div className="sticky top-32 space-y-8">
                <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm">
                   <h4 className="font-bold text-brand-navy mb-6 text-xl">Quick Links</h4>
                   <nav className="space-y-4">
                      {[
                        { name: "Academic Calendar", icon: BookOpen },
                        { name: "Tuition & Fees", icon: Stethoscope },
                        { name: "Department Faculty", icon: GraduationCap },
                        { name: "Clinical Centers", icon: MapPin },
                      ].map(link => (
                        <button key={link.name} className="w-full flex items-center justify-between p-4 rounded-2xl hover:bg-slate-50 transition-colors text-left group">
                          <div className="flex items-center gap-3">
                            <link.icon className="text-brand-gold" size={18} />
                            <span className="text-sm font-bold text-brand-navy/70 group-hover:text-brand-navy">{link.name}</span>
                          </div>
                          <ChevronLeft className="rotate-180 opacity-20 group-hover:opacity-100 transition-opacity" size={16} />
                        </button>
                      ))}
                   </nav>
                </div>

                <div className="bg-brand-navy text-white p-8 rounded-[2.5rem] relative overflow-hidden">
                   <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/10 blur-3xl rounded-full -mr-16 -mt-16" />
                   <h4 className="font-bold mb-4 relative z-10">Need Assistance?</h4>
                   <p className="text-white/60 text-sm mb-6 relative z-10">Our admissions counselors are available to help you choose the right path.</p>
                   <button className="w-full bg-brand-gold text-brand-navy p-4 rounded-xl font-bold text-sm hover:scale-105 transition-transform">
                      Contact Registrar
                   </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
