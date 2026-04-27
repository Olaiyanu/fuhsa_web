import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Clock,
  X,
  User, 
  Lock, 
  ArrowRight, 
  CheckCircle2, 
  Key, 
  Phone, 
  Mail, 
  ChevronRight,
  LayoutDashboard,
  BookOpen,
  CreditCard,
  FileText,
  Bell,
  LogOut,
  Settings,
  UserCircle,
  Calendar
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/src/lib/utils';

type PortalView = 'login' | 'activation' | 'dashboard';
type DashboardTab = 'Dashboard' | 'Profile' | 'My Courses' | 'Payments' | 'Results' | 'Notifications' | 'Settings';

interface PortalProps {
  view: PortalView;
  setView: (view: PortalView) => void;
  activeTab: DashboardTab;
  setActiveTab: (tab: DashboardTab) => void;
}

export default function Portal({ view, setView, activeTab, setActiveTab }: PortalProps) {
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setView('dashboard');
    }, 1500);
  };

  const nextStep = () => {
    setStep(prev => Math.min(prev + 1, 3));
  };

  const navItems = [
    { icon: LayoutDashboard, name: "Dashboard" as DashboardTab },
    { icon: UserCircle, name: "Profile" as DashboardTab },
    { icon: BookOpen, name: "My Courses" as DashboardTab },
    { icon: CreditCard, name: "Payments" as DashboardTab },
    { icon: FileText, name: "Results" as DashboardTab },
    { icon: Bell, name: "Notifications" as DashboardTab },
  ];

  const renderDashboardContent = () => {
    switch (activeTab) {
      case 'Dashboard':
        return (
          <div className="space-y-12">
            {/* Banner */}
            <div className="bg-brand-gold rounded-3xl p-8 md:p-12 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 blur-3xl -mr-32 -mt-32" />
              <div className="relative z-10 max-w-lg">
                <h4 className="text-2xl font-serif text-brand-navy font-black mb-4">Registration for 2025/2026 Session is now OPEN</h4>
                <p className="text-brand-navy/60 font-medium leading-relaxed">Ensure you complete your course registration and health clearance by August 21, 2025.</p>
                <button className="mt-8 bg-brand-navy text-brand-gold px-8 py-3 rounded-xl font-bold flex items-center gap-2 hover:scale-105 transition-transform group">
                  Start Registration <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
              <div className="relative z-10 hidden lg:block">
                <Calendar size={120} className="text-brand-navy/10 -rotate-12" />
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { label: "CGPA", val: "4.82", detail: "First Class", color: "text-brand-navy" },
                { label: "Courses", val: "08", detail: "0 Pending", color: "text-brand-gold" },
                { label: "Attendance", val: "94%", detail: "+2% increase", color: "text-green-600" },
                { label: "Hostel", val: "L-12", detail: "Wing B, Rm 4", color: "text-blue-600" },
              ].map(stat => (
                <div key={stat.label} className="bg-slate-50 border border-slate-100 p-8 rounded-3xl group hover:bg-brand-navy transition-all duration-500">
                  <div className="text-xs font-black uppercase tracking-wider text-brand-navy/40 group-hover:text-white/40 mb-2">{stat.label}</div>
                  <div className={cn("text-4xl font-black mb-1 group-hover:text-brand-gold transition-colors", stat.color)}>{stat.val}</div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-brand-navy/30 group-hover:text-white/30">{stat.detail}</div>
                </div>
              ))}
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-3xl border border-slate-100 p-8">
              <h3 className="text-xl font-bold text-brand-navy mb-6">Recent Activities</h3>
              <div className="space-y-4">
                {[
                  { title: "Course Registration", date: "2 hours ago", status: "Completed", icon: CheckCircle2, color: "text-green-600" },
                  { title: "Hostel Fee Payment", date: "Yesterday", status: "Processing", icon: Clock, color: "text-brand-gold" },
                  { title: "New Result Published", date: "2 days ago", status: "View Now", icon: FileText, color: "text-brand-navy" },
                ].map((act, i) => (
                  <div key={i} className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-brand-gold/20 transition-all cursor-pointer">
                    <div className="flex items-center gap-4">
                       <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-brand-navy shadow-sm">
                          <act.icon size={18} />
                       </div>
                       <div>
                         <h4 className="font-bold text-sm text-brand-navy">{act.title}</h4>
                         <p className="text-xs text-brand-navy/40">{act.date}</p>
                       </div>
                    </div>
                    <span className={cn("text-xs font-black uppercase tracking-widest", act.color)}>{act.status}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      case 'Profile':
        return (
          <div className="space-y-8">
            <h3 className="text-2xl font-serif text-brand-navy">My Student Profile</h3>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
               <div className="lg:col-span-1 space-y-6">
                  <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 text-center">
                     <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400" alt="Avatar" className="w-32 h-32 rounded-3xl border-4 border-white object-cover shadow-xl mx-auto mb-6" referrerPolicy="no-referrer" />
                     <h4 className="text-xl font-bold text-brand-navy">Umar Abubakar</h4>
                     <p className="text-sm text-brand-gold font-bold">L100 Medicine & Surgery</p>
                     <button className="mt-6 w-full text-xs font-black uppercase tracking-widest text-brand-navy/40 hover:text-brand-navy transition-colors">Change Photo</button>
                  </div>
               </div>
               <div className="lg:col-span-2 bg-white p-8 rounded-3xl border border-slate-100 space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                     {[
                       { label: "Matric Number", val: "FUHSA/2025/MBS/0042" },
                       { label: "Phone", val: "+234 801 234 5678" },
                       { label: "Email", val: "u.abubakar@fuhsa.edu.ng" },
                       { label: "State of Origin", val: "Bauchi State" },
                       { label: "Genotype", val: "AA" },
                       { label: "Blood Group", val: "O+" }
                     ].map(field => (
                       <div key={field.label}>
                          <label className="text-[10px] font-black uppercase tracking-widest text-brand-navy/30">{field.label}</label>
                          <p className="text-sm font-bold text-brand-navy mt-1">{field.val}</p>
                       </div>
                     ))}
                  </div>
                  <button className="bg-brand-navy text-white px-8 py-3 rounded-xl font-bold hover:scale-105 transition-transform shadow-lg">Edit Profile</button>
               </div>
            </div>
          </div>
        );
      case 'My Courses':
        return (
          <div className="space-y-8">
            <div className="flex justify-between items-center">
               <h3 className="text-2xl font-serif text-brand-navy">My Courses</h3>
               <button className="bg-brand-gold text-brand-navy px-6 py-2 rounded-xl font-bold text-sm shadow-lg shadow-brand-gold/10">Add Course</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               {[
                 { code: "MBBS 101", name: "Introduction to Anatomy I", credit: "3 Units", status: "Active" },
                 { code: "MBBS 103", name: "Medical Biochemistry I", credit: "4 Units", status: "Active" },
                 { code: "GST 101", name: "Use of English", credit: "2 Units", status: "Completed" },
                 { code: "PHY 112", name: "Medical Physics", credit: "3 Units", status: "Active" }
               ].map(course => (
                 <div key={course.code} className="bg-white border border-slate-100 p-6 rounded-3xl shadow-sm hover:shadow-xl hover:shadow-brand-navy/5 transition-all flex justify-between items-center group">
                    <div>
                       <span className="text-[10px] font-black text-brand-gold uppercase tracking-widest">{course.code}</span>
                       <h4 className="font-bold text-brand-navy group-hover:text-brand-gold transition-colors">{course.name}</h4>
                       <p className="text-xs text-brand-navy/40 mt-1">{course.credit}</p>
                    </div>
                    <span className={cn("text-[10px] font-black uppercase tracking-wider px-2 py-1 rounded bg-slate-50", course.status === 'Active' ? 'text-blue-600' : 'text-green-600')}>{course.status}</span>
                 </div>
               ))}
            </div>
          </div>
        );
      case 'Payments':
        return (
          <div className="space-y-8">
            <h3 className="text-2xl font-serif text-brand-navy">Payment History</h3>
            <div className="bg-white border border-slate-100 rounded-3xl overflow-hidden shadow-sm">
               <div className="overflow-x-auto">
                  <table className="w-full">
                     <thead className="bg-slate-50 border-b border-slate-100">
                        <tr>
                           <th className="text-[10px] font-black uppercase text-brand-navy/40 text-left p-6">S/N</th>
                           <th className="text-[10px] font-black uppercase text-brand-navy/40 text-left p-6">Transaction ID</th>
                           <th className="text-[10px] font-black uppercase text-brand-navy/40 text-left p-6">Purpose</th>
                           <th className="text-[10px] font-black uppercase text-brand-navy/40 text-left p-6">Amount</th>
                           <th className="text-[10px] font-black uppercase text-brand-navy/40 text-left p-6">Date</th>
                           <th className="text-[10px] font-black uppercase text-brand-navy/40 text-left p-6">Status</th>
                        </tr>
                     </thead>
                     <tbody className="divide-y divide-slate-100">
                        {[
                          { sn: 1, tid: "TRX-94285", purp: "School Fees", amt: "₦142,500", date: "15/04/2026", status: "Paid" },
                          { sn: 2, tid: "TRX-42810", purp: "Hostel Fee", amt: "₦35,000", date: "10/04/2026", status: "Paid" },
                          { sn: 3, tid: "TRX-10294", purp: "Registration", amt: "₦5,000", date: "05/04/2026", status: "Paid" }
                        ].map(row => (
                          <tr key={row.tid} className="hover:bg-slate-50 transition-colors">
                             <td className="p-6 text-sm font-bold text-brand-navy/40">{row.sn}</td>
                             <td className="p-6 text-sm font-bold text-brand-navy">{row.tid}</td>
                             <td className="p-6 text-sm font-medium text-brand-navy/70">{row.purp}</td>
                             <td className="p-6 text-sm font-black text-brand-navy">{row.amt}</td>
                             <td className="p-6 text-sm text-brand-navy/40">{row.date}</td>
                             <td className="p-6"><span className="text-[10px] font-black uppercase text-green-600 bg-green-50 px-3 py-1 rounded-full">Paid</span></td>
                          </tr>
                        ))}
                     </tbody>
                  </table>
               </div>
            </div>
          </div>
        );
      case 'Results':
        return (
          <div className="space-y-8">
            <h3 className="text-2xl font-serif text-brand-navy">Academic Performance</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm flex items-center justify-between">
                  <div>
                    <p className="text-[10px] font-black uppercase text-brand-navy/30">Current CGPA</p>
                    <h4 className="text-4xl font-black text-brand-navy">4.82</h4>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] font-black uppercase text-brand-gold">Class of degree</p>
                    <h4 className="font-bold text-brand-navy">First Class</h4>
                  </div>
               </div>
               <div className="bg-brand-navy p-8 rounded-3xl shadow-xl flex items-center justify-between text-white">
                  <div>
                    <p className="text-[10px] font-black uppercase text-white/30">Total Units</p>
                    <h4 className="text-4xl font-black text-brand-gold">24</h4>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] font-black uppercase text-white/30">Pass Rate</p>
                    <h4 className="font-bold text-white">100%</h4>
                  </div>
               </div>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-slate-100 text-center py-20">
               <FileText size={48} className="mx-auto text-slate-100 mb-6" />
               <p className="text-brand-navy/40 font-medium">Session Results (2024/2025) are not yet finalized.</p>
               <button className="mt-6 text-sm font-bold text-brand-gold hover:underline underline-offset-4">Check Previous Session</button>
            </div>
          </div>
        );
      case 'Notifications':
        return (
          <div className="space-y-8">
             <div className="flex justify-between items-center">
                <h3 className="text-2xl font-serif text-brand-navy">Notifications</h3>
                <button className="text-xs font-bold text-brand-gold hover:underline">Mark all as read</button>
             </div>
             <div className="space-y-4">
                {[
                  { title: "Exam Timetable Published", msg: "The 2025 Rainy Semester exam timetable is now available for download.", date: "Feb 10, 2026", unread: true },
                  { title: "Fee Payment Deadline", msg: "Final deadline for all session fees is Feb 28, 2026. Please comply.", date: "Feb 05, 2026", unread: false },
                  { title: "Hostel Maintenance", msg: "Routine maintenance in Wing B will commence tomorrow at 10 AM.", date: "Jan 12, 2026", unread: false },
                ].map((notif, i) => (
                  <div key={i} className={cn(
                    "p-6 rounded-3xl border transition-all flex items-start gap-6 cursor-pointer",
                    notif.unread ? "bg-white border-brand-gold/20 shadow-md" : "bg-slate-50 border-slate-100 opacity-70"
                  )}>
                     <div className={cn("w-3 h-3 rounded-full mt-2 shrink-0", notif.unread ? "bg-brand-gold animate-pulse" : "bg-slate-200")} />
                     <div className="flex-1">
                        <div className="flex justify-between items-start mb-2">
                           <h4 className="font-bold text-brand-navy">{notif.title}</h4>
                           <span className="text-[10px] font-bold text-brand-navy/30">{notif.date}</span>
                        </div>
                        <p className="text-sm text-brand-navy/60 leading-relaxed">{notif.msg}</p>
                     </div>
                  </div>
                ))}
             </div>
          </div>
        );
      case 'Settings':
        return (
          <div className="space-y-8">
            <h3 className="text-2xl font-serif text-brand-navy">Portal Settings</h3>
            <div className="space-y-6">
               <div className="bg-white p-8 rounded-3xl border border-slate-100 space-y-8">
                  <div>
                     <h4 className="font-bold text-brand-navy mb-6">Security</h4>
                     <div className="space-y-4">
                        <button className="w-full flex items-center justify-between p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-brand-gold/20 transition-all font-bold text-sm text-brand-navy">
                           Change Password <ChevronRight size={18} />
                        </button>
                        <button className="w-full flex items-center justify-between p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-brand-gold/20 transition-all font-bold text-sm text-brand-navy">
                           Enable Two-Factor Authentication <div className="w-10 h-5 bg-slate-200 rounded-full" />
                        </button>
                     </div>
                  </div>
                  <div>
                     <h4 className="font-bold text-brand-navy mb-6">Preferences</h4>
                     <div className="space-y-4">
                        <button className="w-full flex items-center justify-between p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-brand-gold/20 transition-all font-bold text-sm text-brand-navy">
                           Email Notifications <div className="w-10 h-5 bg-brand-gold rounded-full flex items-center justify-end px-0.5"><div className="w-4 h-4 bg-white rounded-full shadow-sm" /></div>
                        </button>
                        <button className="w-full flex items-center justify-between p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-brand-gold/20 transition-all font-bold text-sm text-brand-navy">
                           Language <span className="text-xs text-brand-gold">English (Global)</span>
                        </button>
                     </div>
                  </div>
               </div>
               <div className="bg-red-50 p-8 rounded-3xl border border-red-100">
                  <h4 className="font-bold text-red-600 mb-2">Deactivate Account</h4>
                  <p className="text-sm text-red-600/60 mb-6">Once you deactivate your portal account, you will lose access to all your results and documents.</p>
                  <button className="px-6 py-2 bg-red-600 text-white rounded-xl text-sm font-bold">Request Deactivation</button>
               </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 relative pt-24 pb-12 overflow-hidden">
      {/* Background Decors */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-gold/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-navy/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <AnimatePresence mode="wait">
          {view === 'login' && (
            <motion.div
              key="login"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="max-w-md mx-auto"
            >
              <div className="bg-white p-10 md:p-12 rounded-[3rem] shadow-2xl shadow-brand-navy/5 border border-slate-100 mt-12">
                <div className="text-center mb-10">
                  <div className="w-20 h-20 bg-brand-gold rounded-[2rem] flex items-center justify-center p-4 mx-auto mb-6 shadow-xl shadow-brand-gold/20">
                    <span className="font-black text-brand-navy text-2xl">FU</span>
                  </div>
                  <h1 className="text-3xl font-serif text-brand-navy">Welcome Back</h1>
                  <p className="text-brand-navy/50 text-sm mt-2">Access your student portal workspace</p>
                </div>

                <form onSubmit={handleLogin} className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-brand-navy/50 ml-2">Matric Number or Email</label>
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-5 flex items-center text-brand-navy/30 group-focus-within:text-brand-gold transition-colors">
                        <User size={20} />
                      </div>
                      <input 
                        type="text" 
                        required
                        placeholder="FUHSA/2025/001"
                        className="w-full bg-slate-50 border-2 border-transparent focus:border-brand-gold focus:bg-white rounded-2xl py-4 pl-14 pr-6 focus:outline-none focus:ring-4 focus:ring-brand-gold/10 transition-all font-medium"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-brand-navy/50 ml-2 font-mono">Password</label>
                    <div className="relative group">
                      <div className="absolute inset-y-0 left-5 flex items-center text-brand-navy/30 group-focus-within:text-brand-gold transition-colors">
                        <Lock size={20} />
                      </div>
                      <input 
                        type="password" 
                        required
                        placeholder="••••••••"
                        className="w-full bg-slate-50 border-2 border-transparent focus:border-brand-gold focus:bg-white rounded-2xl py-4 pl-14 pr-6 focus:outline-none focus:ring-4 focus:ring-brand-gold/10 transition-all font-medium"
                      />
                    </div>
                    <div className="text-right">
                       <button type="button" className="text-xs font-bold text-brand-gold hover:underline">Forgot Password?</button>
                    </div>
                  </div>

                  <button 
                    disabled={isLoading}
                    className="w-full bg-brand-navy text-white py-5 rounded-2xl font-black text-lg hover:bg-brand-navy/90 transition-all shadow-xl active:scale-95 disabled:opacity-50 disabled:active:scale-100 flex items-center justify-center gap-2"
                  >
                    {isLoading ? (
                      <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>Sign In to Portal <ArrowRight size={20} className="text-brand-gold" /></>
                    )}
                  </button>
                </form>

                <div className="mt-12 pt-8 border-t border-slate-50 text-center">
                  <p className="text-brand-navy/50 text-sm font-medium">
                    New student? {' '}
                    <button 
                       onClick={() => setView('activation')}
                       className="text-brand-gold font-bold hover:underline"
                    >
                      Activate your account
                    </button>
                  </p>
                </div>
              </div>
            </motion.div>
          )}

          {view === 'activation' && (
            <motion.div
              key="activation"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="max-w-xl mx-auto"
            >
              <div className="bg-white p-10 md:p-12 rounded-[3.5rem] shadow-2xl shadow-brand-navy/5 border border-slate-100 mt-12">
                 <div className="flex justify-between items-center mb-12">
                    <div>
                       <h2 className="text-3xl font-serif text-brand-navy">Account Activation</h2>
                       <p className="text-brand-navy/50 text-sm mt-1">Complete your registration in 3 simple steps</p>
                    </div>
                    <button onClick={() => setView('login')} className="text-brand-navy/40 hover:text-brand-gold transition-colors font-bold text-sm">Cancel</button>
                 </div>

                 {/* Step Indicator */}
                 <div className="flex gap-4 mb-12">
                    {[1, 2, 3].map(s => (
                       <div key={s} className="flex-1">
                          <div className={cn(
                             "h-1.5 rounded-full transition-all duration-500",
                             s <= step ? "bg-brand-gold" : "bg-slate-100"
                          )} />
                       </div>
                    ))}
                 </div>

                 {/* Step Content */}
                 <AnimatePresence mode="wait">
                    {step === 1 && (
                      <motion.div 
                        key="step1"
                        initial={{ opacity: 0, y: 10 }} 
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="space-y-6"
                      >
                         <h3 className="text-xl font-bold text-brand-navy">Step 1: Verification</h3>
                         <div className="space-y-2">
                           <label className="text-[10px] font-black tracking-widest uppercase text-brand-navy/40 ml-2">JAMB Reg / Matric Number</label>
                           <input type="text" placeholder="e.g. 202510293412" className="w-full bg-slate-50 rounded-2xl py-4 px-6 focus:outline-none focus:ring-4 focus:ring-brand-gold/10 font-bold" />
                         </div>
                         <div className="space-y-2">
                           <label className="text-[10px] font-black tracking-widest uppercase text-brand-navy/40 ml-2">Personal Email Address</label>
                           <input type="email" placeholder="student@example.com" className="w-full bg-slate-50 rounded-2xl py-4 px-6 focus:outline-none focus:ring-4 focus:ring-brand-gold/10 font-bold" />
                         </div>
                         <button onClick={nextStep} className="w-full bg-brand-navy text-white text-lg font-black py-5 rounded-2xl shadow-xl shadow-brand-navy/10 flex items-center justify-center gap-3">
                            Send Activation Code <Mail size={20} />
                         </button>
                      </motion.div>
                    )}

                    {step === 2 && (
                      <motion.div 
                        key="step2"
                        initial={{ opacity: 0, y: 10 }} 
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="space-y-8 text-center"
                      >
                         <div className="w-20 h-20 bg-brand-gold/10 text-brand-gold rounded-3xl flex items-center justify-center mx-auto mb-6">
                            <Phone size={36} />
                         </div>
                         <h3 className="text-2xl font-serif text-brand-navy">Verify Your Identity</h3>
                         <p className="text-brand-navy/50">Enter the 6-digit OTP sent to your email</p>
                         
                         <div className="flex justify-center gap-3">
                            {[1,2,3,4,5,6].map(i => (
                               <input key={i} type="text" maxLength={1} className="w-12 h-16 bg-slate-50 rounded-xl border-2 border-transparent focus:border-brand-gold focus:bg-white text-center text-2xl font-black focus:outline-none shadow-sm" />
                            ))}
                         </div>
                         
                         <div className="pt-4">
                            <p className="text-sm font-medium text-brand-navy/40">Didn't receive code? <button className="text-brand-gold font-bold">Resend in 0:58</button></p>
                         </div>
                         
                         <button onClick={nextStep} className="w-full bg-brand-navy text-white text-lg font-black py-5 rounded-2xl shadow-xl flex items-center justify-center gap-3">
                            Verify & Continue <CheckCircle2 size={22} className="text-brand-gold" />
                         </button>
                      </motion.div>
                    )}

                    {step === 3 && (
                      <motion.div 
                        key="step3"
                        initial={{ opacity: 0, y: 10 }} 
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="space-y-8"
                      >
                         <h3 className="text-xl font-bold text-brand-navy">Step 3: Secure Your Account</h3>
                         <div className="space-y-4">
                            <div className="space-y-2">
                               <label className="text-[10px] font-black tracking-widest uppercase text-brand-navy/40 ml-2">Create New Password</label>
                               <div className="relative">
                                  <Key className="absolute left-6 top-5 text-brand-navy/20" size={18} />
                                  <input type="password" placeholder="Min 8 characters" className="w-full bg-slate-50 rounded-2xl py-4 pl-14 pr-6 focus:outline-none focus:ring-4 focus:ring-brand-gold/10 font-bold" />
                               </div>
                            </div>
                            <div className="space-y-2">
                               <label className="text-[10px] font-black tracking-widest uppercase text-brand-navy/40 ml-2">Confirm New Password</label>
                               <div className="relative">
                                  <Key className="absolute left-6 top-5 text-brand-navy/20" size={18} />
                                  <input type="password" placeholder="Repeat password" className="w-full bg-slate-50 rounded-2xl py-4 pl-14 pr-6 focus:outline-none focus:ring-4 focus:ring-brand-gold/10 font-bold" />
                               </div>
                            </div>
                         </div>
                         
                         <button onClick={() => { setView('login'); setStep(1); }} className="w-full bg-brand-gold text-brand-navy text-lg font-black py-5 rounded-2xl shadow-xl shadow-brand-gold/10 flex items-center justify-center gap-3">
                            Complete Setup <ArrowRight size={22} />
                         </button>
                      </motion.div>
                    )}
                 </AnimatePresence>
              </div>
            </motion.div>
          )}

          {view === 'dashboard' && (
            <motion.div
              key="dashboard"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mt-4 md:mt-12 flex flex-col md:flex-row gap-0 md:gap-8 bg-white min-h-[85vh] rounded-3xl md:rounded-[3.5rem] shadow-2xl border border-slate-100 overflow-hidden"
            >
              {/* Mobile Dashboard Nav Bar */}
              <div className="md:hidden flex items-center justify-between p-6 bg-brand-navy text-white sticky top-0 z-30">
                 <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-brand-gold rounded-lg flex items-center justify-center p-1.5">
                       <span className="font-bold text-brand-navy text-[10px]">FU</span>
                    </div>
                    <span className="font-bold text-sm">{activeTab}</span>
                 </div>
                 <button 
                  onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                  className="p-2 bg-white/10 rounded-lg"
                 >
                    <LayoutDashboard size={20} className={isSidebarOpen ? 'text-brand-gold' : 'text-white'} />
                 </button>
              </div>

              {/* Sidebar (Desktop & Mobile Overlay) */}
              <AnimatePresence>
                {(isSidebarOpen || window.innerWidth >= 768) && (
                  <motion.aside 
                    initial={window.innerWidth < 768 ? { x: -300 } : { x: 0 }}
                    animate={{ x: 0 }}
                    exit={window.innerWidth < 768 ? { x: -300 } : {}}
                    className={cn(
                      "w-full md:w-72 bg-brand-navy text-white p-10 flex flex-col z-40 transition-all",
                      "fixed md:relative inset-y-0 left-0 h-full md:h-auto"
                    )}
                  >
                    <div className="flex items-center justify-between mb-16">
                      <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-brand-gold rounded-xl flex items-center justify-center p-2">
                            <span className="font-bold text-brand-navy text-xs">FU</span>
                          </div>
                          <span className="font-bold text-lg">My Portal</span>
                      </div>
                      <button onClick={() => setIsSidebarOpen(false)} className="md:hidden p-2 text-white/50"><X size={20} /></button>
                    </div>

                    <nav className="space-y-2 mb-auto">
                        {navItems.map((item) => (
                          <button 
                            key={item.name} 
                            onClick={() => {
                              setActiveTab(item.name);
                              setIsSidebarOpen(false);
                            }}
                            className={cn(
                              "w-full flex items-center gap-4 py-4 px-6 rounded-2xl text-sm font-semibold transition-all group",
                              activeTab === item.name ? "bg-white/10 text-brand-gold" : "text-white/50 hover:text-white hover:bg-white/5"
                            )}
                          >
                            <item.icon size={20} className={cn(activeTab === item.name ? "text-brand-gold" : "group-hover:text-brand-gold transition-colors")} />
                            {item.name}
                          </button>
                        ))}
                    </nav>

                    <div className="pt-8 border-t border-white/10 space-y-4">
                        <button 
                          onClick={() => {
                            setActiveTab('Settings');
                            setIsSidebarOpen(false);
                          }}
                          className={cn(
                            "w-full flex items-center gap-4 py-3 px-6 rounded-2xl text-sm font-semibold transition-all",
                            activeTab === 'Settings' ? "bg-white/10 text-brand-gold" : "text-white/50 hover:text-white"
                          )}
                        >
                          <Settings size={20} /> Settings
                        </button>
                        <button onClick={() => setView('login')} className="w-full flex items-center gap-4 py-4 px-6 bg-red-500/10 text-red-400 rounded-2xl hover:bg-red-500/20 transition-all text-sm font-bold">
                          <LogOut size={20} /> Logout
                        </button>
                    </div>
                  </motion.aside>
                )}
              </AnimatePresence>

              {/* Sidebar Backing for Mobile Overlay */}
              <AnimatePresence>
                {isSidebarOpen && window.innerWidth < 768 && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setIsSidebarOpen(false)}
                    className="fixed inset-0 bg-brand-navy/60 backdrop-blur-sm z-30 md:hidden"
                  />
                )}
              </AnimatePresence>

              {/* Main Content */}
              <main className="flex-1 p-6 md:p-16 space-y-12 overflow-y-auto">
                 {/* Top Navigation Row (Profile info) */}
                 <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                    <div>
                       <h2 className="text-2xl md:text-3xl font-serif text-brand-navy italic">
                          {activeTab === 'Dashboard' ? (
                            <>Welcome, <span className="text-brand-gold">Umar Abubakar</span></>
                          ) : activeTab}
                       </h2>
                       <p className="text-brand-navy/40 font-medium text-xs md:text-sm">
                          {activeTab === 'Dashboard' ? 'L100 Medicine & Surgery • FUHSA/2025/MBS/0042' : `Managing your student ${activeTab.toLowerCase()}`}
                       </p>
                    </div>
                    <div className="flex items-center gap-4 self-end md:self-auto">
                        <button 
                          onClick={() => setActiveTab('Notifications')}
                          className="w-10 h-10 md:w-12 md:h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-brand-navy border border-slate-100 relative"
                        >
                           <Bell size={20} />
                           <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white" />
                        </button>
                        <button onClick={() => setActiveTab('Profile')} className="flex items-center gap-3">
                           <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200" alt="Avatar" className="w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl border-2 border-slate-50 object-cover shadow-lg" referrerPolicy="no-referrer" />
                           <div className="hidden sm:block text-left">
                              <p className="text-xs font-black text-brand-navy">U. Abubakar</p>
                              <p className="text-[10px] font-bold text-brand-gold uppercase tracking-widest">Active</p>
                           </div>
                        </button>
                    </div>
                 </div>

                 {/* Active Area Rendering */}
                 <motion.div
                   key={activeTab}
                   initial={{ opacity: 0, y: 10 }}
                   animate={{ opacity: 1, y: 0 }}
                   transition={{ duration: 0.3 }}
                 >
                   {renderDashboardContent()}
                 </motion.div>
              </main>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
