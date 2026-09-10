import React from 'react';
import { ASSETS, CONTACT_INFO } from '../data';
import { ScreenType } from '../types';

interface HeaderProps {
  currentScreen: ScreenType;
  onNavigate: (screen: ScreenType) => void;
  onOpenMenu: () => void;
}

interface NavMenuItem {
  id: ScreenType;
  label: string;
}

const NAV_LINKS: NavMenuItem[] = [
  { id: 'accueil', label: 'Accueil' },
  { id: 'domaines-d-expertise', label: 'Domaines d\'Expertise' },
  { id: 'le-cabinet-et-avocat', label: 'Le Cabinet & Avocat' },
  { id: 'contact-et-consultation', label: 'Consultation & Contact' },
];

export const Header: React.FC<HeaderProps> = ({ currentScreen, onNavigate, onOpenMenu }) => {
  return (
    <header className="fixed top-0 w-full z-50 bg-[#070A12]/95 backdrop-blur-xl shadow-[0_4px_24px_rgba(0,0,0,0.5)] pt-safe border-b border-[#1E293B]">
      <div className="max-w-7xl mx-auto h-20 px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        {/* Brand identity */}
        <button
          onClick={() => onNavigate('accueil')}
          className="flex items-center gap-3 min-w-0 text-left cursor-pointer group transition-opacity hover:opacity-95"
          id="btn-header-brand"
        >
          <div className="relative p-1 rounded-lg bg-white/5 border border-white/10 shrink-0">
            <img
              alt="Logo Cabinet Avocat YOYA Yves"
              className="h-9 w-auto object-contain shrink-0 transition-transform group-hover:scale-105"
              src={ASSETS.logo}
            />
          </div>
          <div className="flex flex-col min-w-0">
            <div className="flex items-center gap-1.5">
              <span className="font-headline-sm text-base sm:text-lg text-[#F8FAFC] tracking-tight font-bold truncate">
                Me YOYA Yves
              </span>
              <span className="hidden xs:inline-block px-1.5 py-0.5 bg-[#C5A880]/15 border border-[#C5A880]/30 text-[#C5A880] font-label-sm uppercase rounded font-semibold text-[10px]">
                Barreau
              </span>
            </div>
            <span className="font-label-sm text-[#94A3B8] uppercase tracking-widest truncate text-[10px] sm:text-[11px]">
              {CONTACT_INFO.title}
            </span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-white/5 p-1 rounded-xl border border-white/10">
          {NAV_LINKS.map((link) => {
            const isActive = currentScreen === link.id;
            return (
              <button
                key={link.id}
                onClick={() => onNavigate(link.id)}
                className={`px-3.5 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#C5A880] text-[#070A12] shadow-sm font-bold'
                    : 'text-[#94A3B8] hover:text-[#F8FAFC] hover:bg-white/5'
                }`}
                id={`desktop-nav-${link.id}`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Action items */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Quick phone link on large screens */}
          <a
            href={`tel:${CONTACT_INFO.phoneStandardRaw}`}
            className="hidden xl:flex items-center gap-2 text-xs font-semibold text-[#94A3B8] hover:text-[#C5A880] transition-colors bg-white/5 px-3 py-2 rounded-lg border border-white/10"
            title="Ligne secrétariat"
          >
            <span className="material-symbols-outlined text-[16px] text-[#C5A880]">phone</span>
            <span>{CONTACT_INFO.phoneStandard}</span>
          </a>

          {/* CTA Prendre RDV */}
          <button
            onClick={() => onNavigate('contact-et-consultation')}
            className={`inline-flex items-center justify-center h-10 px-4 sm:px-5 font-label-md uppercase tracking-wider rounded-lg transition-all shadow-[0_4px_16px_rgba(197,168,128,0.2)] cursor-pointer text-xs font-bold ${
              currentScreen === 'contact-et-consultation'
                ? 'bg-white text-[#070A12]'
                : 'bg-[#C5A880] text-[#070A12] hover:bg-[#D4AF37]'
            }`}
            id="btn-header-rdv"
          >
            <span className="material-symbols-outlined text-[16px] mr-1.5 hidden sm:inline">
              event_available
            </span>
            Prendre RDV
          </button>

          {/* Mobile/Tablet Menu Button */}
          <button
            onClick={onOpenMenu}
            aria-label="Menu principal"
            className="lg:hidden w-10 h-10 flex items-center justify-center text-[#F8FAFC] rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-colors cursor-pointer"
            id="btn-header-menu"
          >
            <span className="material-symbols-outlined text-[24px]">menu</span>
          </button>

          {/* Lawyer avatar profile thumbnail */}
          <button
            onClick={() => onNavigate('le-cabinet-et-avocat')}
            title="Voir le profil de Maître YOYA Yves"
            className="p-0.5 rounded-full ring-2 ring-[#C5A880]/50 hover:ring-[#C5A880] transition-all cursor-pointer shrink-0"
            id="btn-header-avatar"
          >
            <img
              alt="Portrait officiel de Maître YOYA Yves"
              className="w-8 h-8 rounded-full object-cover shrink-0"
              src={ASSETS.portrait}
            />
          </button>
        </div>
      </div>
    </header>
  );
};
