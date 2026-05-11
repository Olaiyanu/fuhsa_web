/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'motion/react';

// Layout & Components
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import LoadingScreen from './components/LoadingScreen';

// Pages
import Home from './pages/Home';
import Admissions from './pages/Admissions';
import Academics from './pages/Academics';
import Portal from './pages/Portal';
import ProgramDetail from './pages/ProgramDetail';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

type PortalView = 'login' | 'activation' | 'dashboard';
type DashboardTab = 'Dashboard' | 'Profile' | 'My Courses' | 'Payments' | 'Results' | 'Notifications' | 'Settings';

function MainApp() {
  const [loading, setLoading] = useState(true);
  const [portalView, setPortalView] = useState<PortalView>('login');
  const [activeTab, setActiveTab] = useState<DashboardTab>('Dashboard');
  const location = useLocation();

  useEffect(() => {
    // Simulate initial load
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const isDashboard = location.pathname === '/portal' && portalView === 'dashboard';

  return (
    <>
      <AnimatePresence>
        {loading && <LoadingScreen key="loader" />}
      </AnimatePresence>

      <div className="flex flex-col min-h-screen">
        <ScrollToTop />
        <Navbar 
          isDashboard={isDashboard} 
          activeTab={activeTab} 
          onTabChange={setActiveTab}
          onLogout={() => {
            setPortalView('login');
            setActiveTab('Dashboard');
          }}
        />
        
        <main className="flex-grow">
          <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/admission" element={<Admissions />} />
              <Route path="/academics" element={<Academics />} />
              <Route path="/academics/:programId" element={<ProgramDetail />} />
              <Route path="/research" element={<Home />} /> {/* For now, research is part of home */}
              <Route path="/portal" element={
                <Portal 
                  view={portalView} 
                  setView={setPortalView} 
                  activeTab={activeTab} 
                  setActiveTab={setActiveTab} 
                />
              } />
              {/* Fallback */}
              <Route path="*" element={<Home />} />
          </Routes>
        </main>

        {!isDashboard && <Footer />}
      </div>
    </>
  );
}

export default function App() {
  return (
    <Router>
      <MainApp />
    </Router>
  );
}
