import React from 'react';
import { ASSETS, CONTACT_INFO } from '../data';
import { ScreenType } from '../types';

interface HeaderProps {
  currentScreen: ScreenType;
  onNavigate: (screen: ScreenType) => void;
  onOpenMenu: () => void;
}

export const Header: React.FC<HeaderProps> = ({ currentScreen, onNavigate, onOpenMenu }) => {
  return (
    <header className="fixed top-0 w-full z-50 bg-[#f7f9fb]/95 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] pt-safe border-b border-[#e2e8f0]/60">
      <div className="max-w-4xl mx-auto h-20 px-4 sm:px-6 flex items-center justify-between gap-2">
        {/* Brand identity */}
        <button
          onClick={() => onNavigate('accueil')}
          className="flex items-center gap-2.5 min-w-0 text-left cursor-pointer group transition-opacity hover:opacity-95"
          id="btn-header-brand"
        >
          <img
            alt="Logo Cabinet Avocat YOYA Yves"
            className="h-9 w-auto object-contain shrink-0 transition-transform group-hover:scale-102"
            src={ASSETS.logo}
          />
          <div className="flex flex-col min-w-0">
            <div className="flex items-center gap-1.5">
              <span className="font-title-md text-[#0B1120] tracking-tight font-semibold truncate">
                Me YOYA Yves
              </span>
              <span className="hidden xs:inline-block px-1.5 py-0.5 bg-[#fedeb2]/40 text-[#78603e] font-label-sm uppercase rounded font-semibold text-[10px]">
                Barreau
              </span>
            </div>
            <span className="font-label-sm text-[#725b38] uppercase tracking-widest truncate text-[11px]">
              {CONTACT_INFO.title}
            </span>
          </div>
        </button>

        {/* Action items */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={() => onNavigate('contact-et-consultation')}
            className={`hidden sm:inline-flex items-center justify-center h-10 px-4 font-label-md uppercase tracking-wider rounded-lg transition-all shadow-[0_4px_12px_rgba(11,17,32,0.15)] cursor-pointer ${
              currentScreen === 'contact-et-consultation'
                ? 'bg-[#725b38] text-white'
                : 'bg-[#0B1120] text-white hover:bg-[#131b2e]'
            }`}
            id="btn-header-rdv"
          >
            Prendre RDV
          </button>

          <button
            onClick={onOpenMenu}
            aria-label="Menu principal"
            className="w-10 h-10 flex items-center justify-center text-[#0B1120] rounded-lg hover:bg-[#e6e8ea]/60 active:scale-95 transition-colors cursor-pointer"
            id="btn-header-menu"
          >
            <span className="material-symbols-outlined text-[24px]">menu</span>
          </button>

          <button
            onClick={() => onNavigate('le-cabinet-et-avocat')}
            title="Voir le profil de Maître YOYA Yves"
            className="p-0.5 rounded-full ring-1 ring-[#725b38]/40 hover:ring-[#725b38] transition-all cursor-pointer shrink-0 ml-0.5"
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
