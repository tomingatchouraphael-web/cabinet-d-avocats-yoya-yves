import React from 'react';
import { ASSETS, CONTACT_INFO } from '../data';
import { ScreenType } from '../types';

interface FooterProps {
  onNavigate: (screen: ScreenType) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#0B1120] text-white border-t border-[#e2e8f0]/10 mt-auto pt-10 pb-6">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 flex flex-col gap-6">
        {/* Brand & Mission */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
          <div className="flex items-center gap-3">
            <img
              src={ASSETS.logo}
              alt="Logo Cabinet"
              className="h-10 w-auto object-contain bg-white/5 rounded p-1"
            />
            <div className="flex flex-col">
              <span className="font-headline-sm text-base font-bold text-white tracking-wide">
                Cabinet Maître YOYA Yves
              </span>
              <span className="font-label-sm text-[11px] text-[#fedeb2] uppercase tracking-wider font-semibold">
                Avocat au Barreau du Cameroun
              </span>
            </div>
          </div>

          <button
            onClick={() => onNavigate('contact-et-consultation')}
            className="px-4 py-2 bg-[#725b38] hover:bg-[#866b44] text-white text-xs font-semibold uppercase tracking-wider rounded-lg transition-colors cursor-pointer"
          >
            Prendre Consultation
          </button>
        </div>

        {/* Navigation & Coordinates */}
        <div className="grid grid-cols-2 gap-4 text-xs">
          <div className="flex flex-col gap-2">
            <span className="text-[11px] uppercase tracking-wider text-[#fedeb2] font-semibold">
              Navigation
            </span>
            <button
              onClick={() => onNavigate('accueil')}
              className="text-left text-slate-300 hover:text-white transition-colors cursor-pointer"
            >
              Accueil &amp; Actualités
            </button>
            <button
              onClick={() => onNavigate('domaines-d-expertise')}
              className="text-left text-slate-300 hover:text-white transition-colors cursor-pointer"
            >
              Domaines d'Expertise OHADA
            </button>
            <button
              onClick={() => onNavigate('le-cabinet-et-avocat')}
              className="text-left text-slate-300 hover:text-white transition-colors cursor-pointer"
            >
              Le Cabinet &amp; Serment Solennel
            </button>
            <button
              onClick={() => onNavigate('contact-et-consultation')}
              className="text-left text-slate-300 hover:text-white transition-colors cursor-pointer"
            >
              Consultation &amp; Secrétariat
            </button>
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-[11px] uppercase tracking-wider text-[#fedeb2] font-semibold">
              Siège Bonanjo
            </span>
            <p className="text-slate-300 leading-relaxed">
              Rue des Ministères, Bonanjo<br />
              Douala • République du Cameroun<br />
              <span className="text-slate-400">B.P. 1542 Douala</span>
            </p>
            <div className="mt-1 flex flex-col gap-1 text-[11px]">
              <span className="text-slate-300 font-medium">Standard : {CONTACT_INFO.phoneStandard}</span>
              <span className="text-slate-300 font-medium">WhatsApp : {CONTACT_INFO.phoneWhatsapp}</span>
            </div>
          </div>
        </div>

        {/* Deontology Badge */}
        <div className="p-3 rounded-lg bg-white/5 border border-white/10 flex items-center justify-between flex-wrap gap-2 text-xs">
          <div className="flex items-center gap-2 text-[#fedeb2]">
            <span className="material-symbols-outlined text-[18px]">lock</span>
            <span className="font-semibold text-[11px] uppercase tracking-wider">
              Secret Professionnel &amp; Déontologie de l'Ordre
            </span>
          </div>
          <span className="text-slate-400 text-[11px]">
            Barreau du Cameroun
          </span>
        </div>

        {/* Copyright & Conception Credits */}
        <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left text-xs text-slate-400">
          <div>
            <p>© {currentYear} Cabinet Maître YOYA Yves. Tous droits réservés.</p>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1 bg-white/5 rounded-full border border-white/10 text-white font-medium">
            <span className="text-slate-400">Concepteur :</span>
            <span className="text-[#fedeb2] font-semibold">Raphaël TOMI NGATCHOU</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
