import React from 'react';
import { ASSETS, CONTACT_INFO } from '../data';
import { ScreenType } from '../types';

interface FooterProps {
  onNavigate: (screen: ScreenType) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-white text-[#0F172A] border-t border-[#E2E8F0] mt-auto pt-14 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-10">
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-10 border-b border-[#E2E8F0]">
          {/* Col 1: Brand & Oath */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="p-1 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] shrink-0 shadow-xs">
                <img
                  src={ASSETS.logo}
                  alt="Logo Cabinet"
                  className="h-10 w-auto object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-headline-sm text-base font-bold text-[#0F172A] tracking-wide">
                  Cabinet Me YOYA Yves
                </span>
                <span className="font-label-sm text-[11px] text-[#8C6527] uppercase tracking-wider font-semibold">
                  Avocat au Barreau du Cameroun
                </span>
              </div>
            </div>

            <p className="text-xs text-[#475569] leading-relaxed">
              Défense, conseil stratégique et contentieux au Cameroun et dans l'ensemble de l'espace juridique OHADA.
            </p>

            <div className="pt-2">
              <button
                onClick={() => onNavigate('contact-et-consultation')}
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#A37B3E] hover:bg-[#8C6527] text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-colors cursor-pointer shadow-sm"
              >
                <span>Prendre Consultation</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </button>
            </div>
          </div>

          {/* Col 2: Navigation rapide */}
          <div className="flex flex-col gap-3 text-xs">
            <span className="text-xs uppercase tracking-widest text-[#8C6527] font-bold">
              Navigation
            </span>
            <button
              onClick={() => onNavigate('accueil')}
              className="text-left text-[#64748B] hover:text-[#0F172A] transition-colors cursor-pointer flex items-center gap-1.5"
            >
              <span className="material-symbols-outlined text-[14px] text-[#A37B3E]">chevron_right</span>
              Accueil &amp; Présentation
            </button>
            <button
              onClick={() => onNavigate('domaines-d-expertise')}
              className="text-left text-[#64748B] hover:text-[#0F172A] transition-colors cursor-pointer flex items-center gap-1.5"
            >
              <span className="material-symbols-outlined text-[14px] text-[#A37B3E]">chevron_right</span>
              Domaines d'Expertise OHADA
            </button>
            <button
              onClick={() => onNavigate('le-cabinet-et-avocat')}
              className="text-left text-[#64748B] hover:text-[#0F172A] transition-colors cursor-pointer flex items-center gap-1.5"
            >
              <span className="material-symbols-outlined text-[14px] text-[#A37B3E]">chevron_right</span>
              Le Cabinet &amp; Serment Solennel
            </button>
            <button
              onClick={() => onNavigate('contact-et-consultation')}
              className="text-left text-[#64748B] hover:text-[#0F172A] transition-colors cursor-pointer flex items-center gap-1.5"
            >
              <span className="material-symbols-outlined text-[14px] text-[#A37B3E]">chevron_right</span>
              Consultation &amp; Secrétariat
            </button>
          </div>

          {/* Col 3: Siège & Coordonnées */}
          <div className="flex flex-col gap-3 text-xs">
            <span className="text-xs uppercase tracking-widest text-[#8C6527] font-bold">
              Siège Principal • Bonanjo
            </span>
            <p className="text-[#475569] leading-relaxed">
              {CONTACT_INFO.address}<br />
              {CONTACT_INFO.city} • République du Cameroun<br />
              <span className="text-[#64748B]">{CONTACT_INFO.bp}</span>
            </p>
            <div className="mt-1 flex flex-col gap-1.5">
              <a
                href={`tel:${CONTACT_INFO.phoneStandardRaw}`}
                className="text-[#0F172A] hover:text-[#A37B3E] transition-colors flex items-center gap-2 font-medium"
              >
                <span className="material-symbols-outlined text-[16px] text-[#A37B3E]">phone</span>
                <span>Standard : {CONTACT_INFO.phoneStandard}</span>
              </a>
              <a
                href={`https://wa.me/${CONTACT_INFO.phoneWhatsappRaw}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0F172A] hover:text-emerald-600 transition-colors flex items-center gap-2 font-medium"
              >
                <span className="material-symbols-outlined text-[16px] text-emerald-600">chat</span>
                <span>WhatsApp : {CONTACT_INFO.phoneWhatsapp}</span>
              </a>
            </div>
          </div>

          {/* Col 4: Horaires & Déontologie */}
          <div className="flex flex-col gap-3 text-xs">
            <span className="text-xs uppercase tracking-widest text-[#8C6527] font-bold">
              Accueil &amp; Déontologie
            </span>
            <p className="text-[#475569] leading-relaxed">
              <strong className="text-[#0F172A]">Lundi - Vendredi :</strong> 8h00 - 18h00<br />
              <strong className="text-[#0F172A]">Samedi :</strong> Sur rendez-vous express<br />
              <span className="text-emerald-600 font-medium">Astreintes pénales &amp; GAV 24/7</span>
            </p>
            <div className="p-3 rounded-xl bg-[#F8FAFC] border border-[#CBD5E1] flex items-center gap-2 text-xs">
              <span className="material-symbols-outlined text-[18px] text-[#A37B3E]">lock</span>
              <span className="text-[11px] text-[#475569] font-medium">
                Secret professionnel garanti par la loi camerounaise
              </span>
            </div>
          </div>
        </div>

        {/* Copyright & Conception Credits Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-xs text-[#64748B]">
          <p>© {currentYear} Cabinet Maître YOYA Yves. Tous droits réservés.</p>
          <div className="flex items-center gap-2 px-4 py-1.5 bg-[#F8FAFC] rounded-full border border-[#CBD5E1] text-[#0F172A] font-medium">
            <span className="text-[#64748B]">Concepteur du site :</span>
            <span className="text-[#8C6527] font-bold tracking-wide">Raphaël TOMI NGATCHOU</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
