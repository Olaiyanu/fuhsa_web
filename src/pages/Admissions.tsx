import React from 'react';
import { motion } from 'motion/react';
import { 
  CheckCircle2, 
  ArrowRight, 
  UserPlus, 
  CreditCard, 
  UserCheck, 
  Calendar, 
  AlertCircle,
  ClipboardCheck,
  FileText,
  Users
} from 'lucide-react';
import { Link } from 'react-router-dom';
import ScrollReveal from '@/src/components/ScrollReveal';

export default function Admissions() {
  const steps = [
    { 
      title: "Verify JAMB Status", 
      desc: "Ensure you selected FUHSA as first choice and meet the minimum score (220+).",
      icon: CheckCircle2 
    },
    { 
      title: "Activate Portal Account", 
      desc: "Use your JAMB number to create your student profile on our secure portal.",
      icon: UserPlus 
    },
    { 
      title: "Pay Screening Fee", 
      desc: "Generate RRR and pay ₦2,000 screening fee through any commercial bank.",
      icon: CreditCard 
    },
    { 
      title: "Submit Documents", 
      desc: "Upload O'Level results and other required certificates for online screening.",
      icon: FileText 
    },
    { 
      title: "Await Admission List", 
      desc: "Monitor your portal for admission status and further physical clearance.",
      icon: UserCheck 
    }
  ];

  return (
    <div className="pt-24 min-h-screen bg-slate-50">
      {/* Header */}
      <section className="bg-brand-navy py-32 text-white relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1516533075015-a3838414c3ca?auto=format&fit=crop&q=80&w=2000" 
            alt="Medical Education" 
            className="w-full h-full object-cover opacity-20 scale-105 animate-pulse-slow"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-navy via-brand-navy/80 to-transparent" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <ScrollReveal>
             <h4 className="text-brand-gold uppercase tracking-[0.4em] font-black text-[10px] mb-4">Admissions 2025/2026</h4>
             <h1 className="text-5xl md:text-7xl font-serif leading-tight">Begin Your <br/> <span className="text-brand-gold italic">Medical Journey</span></h1>
             <p className="text-white/60 text-lg max-w-xl mt-8 leading-relaxed">
               Step into a world-class environment where your passion for health sciences is nurtured into professional excellence.
             </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Options Section */}
      <section className="section-padding -mt-20 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           <ScrollReveal direction="right">
              <div className="bg-white p-12 rounded-[3rem] shadow-2xl shadow-brand-navy/5 border border-slate-100 group hover:border-brand-gold/30 transition-all">
                <div className="w-16 h-16 bg-brand-navy rounded-3xl flex items-center justify-center text-brand-gold mb-8 group-hover:scale-110 transition-transform">
                   <Users size={32} />
                </div>
                <h3 className="text-3xl font-serif text-brand-navy mb-4">UTME Candidates</h3>
                <p className="text-brand-navy/60 mb-8 leading-relaxed">For 100 level admission. Requires 220+ JAMB score in English, Physics, Chemistry, and Biology.</p>
                <div className="space-y-4 mb-10">
                   {[
                     "Minimum age of 16 years",
                     "5 O'Level credits including English & Math",
                     "Sitting for current year UTME"
                   ].map(item => (
                     <div key={item} className="flex items-center gap-3 text-sm font-medium text-brand-navy/70">
                       <CheckCircle2 size={16} className="text-brand-gold" />
                       {item}
                     </div>
                   ))}
                </div>
                <button className="w-full bg-brand-gold text-brand-navy py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-brand-navy hover:text-white transition-all shadow-lg active:scale-95">
                  Check Eligibility <ArrowRight size={20} />
                </button>
              </div>
           </ScrollReveal>

           <ScrollReveal direction="left" delay={0.3}>
              <div className="bg-brand-navy p-12 rounded-[3rem] shadow-2xl shadow-brand-navy/20 text-white group hover:ring-8 hover:ring-brand-gold/10 transition-all">
                <div className="w-16 h-16 bg-brand-gold rounded-3xl flex items-center justify-center text-brand-navy mb-8 group-hover:scale-110 transition-transform">
                   <UserPlus size={32} />
                </div>
                <h3 className="text-3xl font-serif text-white mb-4">Direct Entry</h3>
                <p className="text-white/60 mb-8 leading-relaxed">For 200 level admission. Requires HND, Bachelor's degree or advanced level (A-Level) results.</p>
                <div className="space-y-4 mb-10">
                   {[
                     "Minimum of Upper Credit for HND",
                     "Relevant health-related degree",
                     "A-Level passes in Sci/Bio/Chem"
                   ].map(item => (
                     <div key={item} className="flex items-center gap-3 text-sm font-medium text-white/70">
                       <CheckCircle2 size={16} className="text-brand-gold" />
                       {item}
                     </div>
                   ))}
                </div>
                <button className="w-full bg-white text-brand-navy py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-brand-gold transition-all shadow-lg active:scale-95">
                  Apply for DE <ArrowRight size={20} />
                </button>
              </div>
           </ScrollReveal>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-padding bg-white rounded-t-[5rem] shadow-sm mt-12">
        <ScrollReveal className="text-center mb-20 max-w-2xl mx-auto">
           <h2 className="text-4xl font-serif text-brand-navy mb-4">Application Workflow</h2>
           <p className="text-brand-navy/50">Our streamlined 5-step process helps you transition from an applicant to a FUHSA student seamlessly.</p>
        </ScrollReveal>

        <div className="relative">
           {/* Connecting Line */}
           <div className="hidden md:block absolute top-[50px] left-0 right-0 h-0.5 bg-slate-100 z-0 mx-24" />
           
           <div className="grid grid-cols-1 md:grid-cols-5 gap-12 relative z-10">
              {steps.map((step, i) => (
                <ScrollReveal delay={i * 0.15} key={step.title} className="text-center group">
                   <div className="w-20 h-20 bg-slate-50 border-2 border-white rounded-3xl flex items-center justify-center text-brand-navy mx-auto mb-6 shadow-sm group-hover:bg-brand-gold group-hover:text-white group-hover:scale-110 transition-all duration-500 ring-8 ring-slate-50">
                      <step.icon size={28} />
                   </div>
                   <h4 className="font-bold text-brand-navy mb-2">{step.title}</h4>
                   <p className="text-xs text-brand-navy/60 leading-relaxed">{step.desc}</p>
                </ScrollReveal>
              ))}
           </div>
        </div>
      </section>

      {/* Deadlines Section */}
      <section className="section-padding">
         <div className="bg-brand-navy p-12 md:p-20 rounded-[3rem] text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/10 blur-3xl" />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
               <div>
                  <h3 className="text-4xl font-serif mb-8 text-brand-gold">Important Deadlines</h3>
                  <div className="space-y-6">
                     {[
                       { label: "Portal Opens", date: "August 7, 2025", type: "Open" },
                       { label: "Registration Closes", date: "August 21, 2025", type: "Final" },
                       { label: "Physical Clearance", date: "September 10, 2025", type: "Process" }
                     ].map(date => (
                       <div key={date.label} className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                          <div className="flex items-center gap-4">
                             <div className="w-10 h-10 rounded-xl bg-brand-gold/10 flex items-center justify-center text-brand-gold">
                                <Calendar size={20} />
                             </div>
                             <span className="font-bold">{date.label}</span>
                          </div>
                          <div className="text-right">
                             <div className="text-sm font-medium text-white/50">{date.date}</div>
                             <div className="text-[10px] font-black uppercase text-brand-gold tracking-widest">{date.type}</div>
                          </div>
                       </div>
                     ))}
                  </div>
                  <div className="mt-12 p-6 rounded-3xl bg-brand-gold/20 flex gap-4 border border-brand-gold/30">
                     <AlertCircle className="text-brand-gold shrink-0" size={24} />
                     <p className="text-sm text-brand-gold leading-relaxed">
                        Notice: Late registration attracted a penalty of ₦5,000. Ensure all payments are made via the official university portal.
                     </p>
                  </div>
               </div>

               <div className="space-y-8 text-center lg:text-left">
                  <h3 className="text-4xl font-serif mb-8">Ready to start?</h3>
                  <p className="text-white/60 text-lg leading-relaxed mb-12">
                     Create your profile now to begin your application. Our admission team is ready to assist you throughout the process.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
                     <Link to="/portal" className="bg-brand-gold text-brand-navy px-10 py-5 rounded-2xl font-black text-lg hover:scale-105 transition-transform flex items-center justify-center gap-3">
                        Create Profile Now
                        <UserPlus size={24} />
                     </Link>
                     <button className="px-10 py-5 border border-white/20 rounded-2xl font-bold hover:bg-white/10 transition-colors flex items-center justify-center gap-3">
                        Contact Admissions
                        <ClipboardCheck size={24} />
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
}
