/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ScreenType } from './types';
import { Header } from './components/Header';
import { BottomNav } from './components/BottomNav';
import { HomeScreen } from './components/HomeScreen';
import { DomainsScreen } from './components/DomainsScreen';
import { CabinetScreen } from './components/CabinetScreen';
import { ContactScreen } from './components/ContactScreen';
import { NavDrawer } from './components/NavDrawer';
import { Footer } from './components/Footer';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<ScreenType>('contact-et-consultation');
  const [preselectedDomain, setPreselectedDomain] = useState<string>('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Sync with window hash if present
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '') as ScreenType;
      if (['accueil', 'domaines-d-expertise', 'le-cabinet-et-avocat', 'contact-et-consultation'].includes(hash)) {
        setCurrentScreen(hash);
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const handleNavigate = (screen: ScreenType) => {
    setCurrentScreen(screen);
    window.location.hash = screen;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectDomainForConsultation = (domainId: string) => {
    setPreselectedDomain(domainId);
    handleNavigate('contact-et-consultation');
  };

  return (
    <div className="min-h-screen bg-[#f7f9fb] text-[#191c1e] flex flex-col antialiased selection:bg-[#725b38] selection:text-white">
      {/* Fixed top app bar */}
      <Header
        currentScreen={currentScreen}
        onNavigate={handleNavigate}
        onOpenMenu={() => setIsMenuOpen(true)}
      />

      {/* Main scrollable view */}
      <main className="flex-1 w-full pt-20 pb-24 bg-[#f7f9fb] flex flex-col">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentScreen}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18, ease: 'easeInOut' }}
            className="w-full flex-1"
          >
            {currentScreen === 'accueil' && (
              <HomeScreen
                onNavigate={handleNavigate}
                onSelectDomain={handleSelectDomainForConsultation}
              />
            )}

            {currentScreen === 'domaines-d-expertise' && (
              <DomainsScreen
                onSelectDomainForConsultation={handleSelectDomainForConsultation}
                onNavigate={handleNavigate}
              />
            )}

            {currentScreen === 'le-cabinet-et-avocat' && (
              <CabinetScreen onNavigate={handleNavigate} />
            )}

            {currentScreen === 'contact-et-consultation' && (
              <ContactScreen
                initialDomain={preselectedDomain}
                onNavigateHome={() => handleNavigate('accueil')}
              />
            )}
          </motion.div>
        </AnimatePresence>

        {/* Global Footer */}
        <Footer onNavigate={handleNavigate} />
      </main>

      {/* Navigation slide-over drawer */}
      <NavDrawer
        isOpen={isMenuOpen}
        currentScreen={currentScreen}
        onClose={() => setIsMenuOpen(false)}
        onNavigate={handleNavigate}
      />

      {/* Fixed bottom navigation bar */}
      <BottomNav
        currentScreen={currentScreen}
        onNavigate={handleNavigate}
      />
    </div>
  );
}
