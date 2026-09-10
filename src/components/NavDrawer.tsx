import React from 'react';
import { ASSETS, CONTACT_INFO } from '../data';
import { ScreenType } from '../types';

interface NavDrawerProps {
  isOpen: boolean;
  currentScreen: ScreenType;
  onClose: () => void;
  onNavigate: (screen: ScreenType) => void;
}

export const NavDrawer: React.FC<NavDrawerProps> = ({
  isOpen,
  currentScreen,
  onClose,
  onNavigate
}) => {
  if (!isOpen) return null;

  const handleSelect = (screen: ScreenType) => {
    onNavigate(screen);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-[#0B1120]/60 backdrop-blur-sm transition-opacity"
        aria-hidden="true"
      />

      {/* Drawer panel */}
      <div className="relative w-full max-w-xs bg-white h-full shadow-2xl z-10 flex flex-col justify-between overflow-y-auto pt-safe pb-safe">
        <div>
          {/* Header */}
          <div className="p-4 border-b border-[#e2e8f0] flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <img
                src={ASSETS.logo}
                alt="Logo Cabinet"
                className="h-8 w-auto object-contain"
              />
              <div className="flex flex-col">
                <span className="font-title-md text-sm font-bold text-[#0B1120]">Me YOYA Yves</span>
                <span className="font-label-sm text-[10px] text-[#725b38] uppercase tracking-wider">
                  Barreau du Cameroun
                </span>
              </div>
            </div>
            <button
              onClick={onClose}
              className="w-9 h-9 rounded-lg hover:bg-[#eceef0] flex items-center justify-center text-[#0B1120] cursor-pointer"
              aria-label="Fermer le menu"
            >
              <span className="material-symbols-outlined text-[20px]">close</span>
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="p-3 space-y-1">
            {[
              { id: 'accueil', label: 'Accueil', icon: 'gavel', desc: 'Présentation & Actualités' },
              { id: 'domaines-d-expertise', label: 'Domaines d\'Expertise', icon: 'account_balance', desc: 'OHADA, Foncier, Contentieux...' },
              { id: 'le-cabinet-et-avocat', label: 'Le Cabinet & l\'Avocat', icon: 'shield_person', desc: 'Biographie & Serment Solennel' },
              { id: 'contact-et-consultation', label: 'Prendre RDV / Contact', icon: 'event_available', desc: 'Bonanjo & Téléconsultation' }
            ].map((item) => {
              const active = currentScreen === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleSelect(item.id as ScreenType)}
                  className={`w-full text-left p-3 rounded-xl flex items-start gap-3 transition-colors cursor-pointer ${
                    active
                      ? 'bg-[#fedeb2]/40 text-[#725b38] font-semibold'
                      : 'hover:bg-[#f2f4f6] text-[#191c1e]'
                  }`}
                >
                  <span
                    className={`material-symbols-outlined text-[22px] mt-0.5 ${
                      active ? 'text-[#725b38]' : 'text-[#45464d]'
                    }`}
                  >
                    {item.icon}
                  </span>
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold">{item.label}</span>
                    <span className="text-[11px] text-[#45464d]">{item.desc}</span>
                  </div>
                </button>
              );
            })}
          </nav>

          {/* Quick Direct Contacts */}
          <div className="p-4 mx-3 my-2 bg-[#f2f4f6] rounded-xl flex flex-col gap-2">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#45464d]">
              Lignes Directes
            </span>
            <a
              href={`tel:${CONTACT_INFO.phoneStandardRaw}`}
              className="flex items-center gap-2 text-xs font-semibold text-[#0B1120] hover:text-[#725b38]"
            >
              <span className="material-symbols-outlined text-[16px] text-[#725b38]">phone</span>
              <span>{CONTACT_INFO.phoneStandard}</span>
            </a>
            <a
              href={`https://wa.me/${CONTACT_INFO.phoneWhatsappRaw}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs font-semibold text-[#0B1120] hover:text-[#725b38]"
            >
              <span className="material-symbols-outlined text-[16px] text-green-700">chat</span>
              <span>{CONTACT_INFO.phoneWhatsapp} (WhatsApp)</span>
            </a>
          </div>
        </div>

        {/* Footer info */}
        <div className="p-4 border-t border-[#e2e8f0] text-center space-y-2">
          <p className="text-[11px] text-[#45464d]">
            Cabinet Maître YOYA Yves<br />
            Bonanjo, Douala • République du Cameroun
          </p>
          <div>
            <span className="inline-block px-2 py-0.5 bg-[#eceef0] rounded text-[10px] text-[#45464d] uppercase tracking-wider font-semibold">
              Secret Professionnel Garanti
            </span>
          </div>
          <div className="pt-2 border-t border-[#e2e8f0]/80 text-[10px] text-[#45464d] space-y-1">
            <p>© {new Date().getFullYear()} Cabinet Me YOYA Yves</p>
            <p className="font-medium text-[#0B1120]">
              Concepteur : <span className="text-[#725b38] font-semibold">Raphaël TOMI NGATCHOU</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
