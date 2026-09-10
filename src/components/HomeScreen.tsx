import React, { useEffect, useState } from 'react';
import { ASSETS, CONTACT_INFO, PRACTICE_DOMAINS } from '../data';
import { ConsultationFormData, ScreenType } from '../types';

interface HomeScreenProps {
  onNavigate: (screen: ScreenType) => void;
  onSelectDomain: (domainId: string) => void;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({ onNavigate, onSelectDomain }) => {
  const [savedAppointments, setSavedAppointments] = useState<ConsultationFormData[]>([]);

  useEffect(() => {
    try {
      const stored = localStorage.getItem('cabinet_rdv_list');
      if (stored) {
        setSavedAppointments(JSON.parse(stored));
      }
    } catch {
      // ignore
    }
  }, []);

  return (
    <div className="flex flex-col w-full max-w-2xl mx-auto">
      {/* Hero Welcome Card */}
      <section className="px-4 sm:px-6 pt-4 pb-4">
        <div className="relative overflow-hidden rounded-2xl bg-[#0B1120] text-white p-5 sm:p-7 shadow-xl border border-white/10">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#725b38]/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col items-start">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#fedeb2]/20 border border-[#fedeb2]/30 text-[#fedeb2] rounded-full text-[11px] font-semibold uppercase tracking-wider mb-3">
              <span className="material-symbols-outlined text-[15px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                verified
              </span>
              <span>Barreau du Cameroun • Douala Bonanjo</span>
            </div>

            <div className="flex items-center gap-4 mb-4">
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full p-0.5 bg-gradient-to-tr from-[#725b38] to-[#EADBCE] shrink-0 shadow-md">
                <img
                  src={ASSETS.portrait}
                  alt="Maître YOYA Yves"
                  className="w-full h-full rounded-full object-cover"
                />
                <span className="absolute bottom-0 right-0 w-5 h-5 bg-[#0B1120] rounded-full flex items-center justify-center text-[#fedeb2] border border-white/20">
                  <span className="material-symbols-outlined text-[13px]">balance</span>
                </span>
              </div>

              <div>
                <h1 className="font-headline-lg-mobile sm:font-headline-lg text-white font-bold tracking-tight">
                  Maître YOYA Yves
                </h1>
                <p className="font-label-md text-[#fedeb2] uppercase tracking-wider text-xs font-semibold mt-0.5">
                  Avocat au Barreau du Cameroun
                </p>
                <p className="text-slate-300 text-xs mt-1">
                  Conseil stratégique &amp; défense contentieuse de premier plan
                </p>
              </div>
            </div>

            <p className="font-body-md text-slate-200 text-xs sm:text-sm leading-relaxed mb-5">
              Fondé sur la rigueur déontologique, le secret professionnel et la maîtrise approfondie des Actes Uniformes OHADA, le Cabinet accompagne dirigeants, investisseurs et particuliers.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-2.5 w-full">
              <button
                onClick={() => onNavigate('contact-et-consultation')}
                className="w-full sm:flex-1 h-12 bg-[#725b38] hover:bg-[#866b44] text-white rounded-xl font-label-md uppercase tracking-wider shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer font-semibold text-xs sm:text-sm active:scale-[0.99]"
                id="btn-home-rdv"
              >
                <span className="material-symbols-outlined text-[18px]">calendar_today</span>
                <span>Prendre Consultation</span>
              </button>

              <button
                onClick={() => onNavigate('domaines-d-expertise')}
                className="w-full sm:w-auto h-12 px-5 bg-white/10 hover:bg-white/15 text-white rounded-xl font-label-md uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer font-semibold text-xs sm:text-sm"
                id="btn-home-domaines"
              >
                <span>Nos Expertises</span>
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Permanence & Direct Action Strip */}
      <section className="px-4 sm:px-6 mb-4">
        <div className="grid grid-cols-2 gap-2.5">
          <a
            href={`tel:${CONTACT_INFO.phoneStandardRaw}`}
            className="p-3 bg-white rounded-xl shadow-sm border border-[#e2e8f0] flex items-center gap-2.5 hover:bg-[#f2f4f6] transition-colors"
          >
            <div className="w-9 h-9 rounded-lg bg-[#eceef0] text-[#0B1120] flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-[20px]">call</span>
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-[10px] text-[#45464d] font-semibold uppercase tracking-wider truncate">
                Ligne Secrétariat
              </span>
              <span className="text-xs font-bold text-[#0B1120] truncate">
                {CONTACT_INFO.phoneStandard}
              </span>
            </div>
          </a>

          <a
            href={`https://wa.me/${CONTACT_INFO.phoneWhatsappRaw}`}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white rounded-xl shadow-sm border border-[#e2e8f0] flex items-center gap-2.5 hover:bg-[#f2f4f6] transition-colors"
          >
            <div className="w-9 h-9 rounded-lg bg-[#fedeb2]/50 text-[#78603e] flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-[20px]">chat</span>
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-[10px] text-[#725b38] font-semibold uppercase tracking-wider truncate">
                Urgence WhatsApp
              </span>
              <span className="text-xs font-bold text-[#0B1120] truncate">
                Permanence 24/7
              </span>
            </div>
          </a>
        </div>
      </section>

      {/* Mes Demandes de Consultation Récentes (if any exist) */}
      {savedAppointments.length > 0 && (
        <section className="px-4 sm:px-6 mb-4">
          <div className="bg-[#fedeb2]/20 border border-[#fedeb2]/60 rounded-xl p-3.5">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold text-[#78603e] uppercase tracking-wider flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[16px]">folder_shared</span>
                Votre Dossier en cours ({savedAppointments.length})
              </span>
              <span className="text-[10px] bg-[#725b38] text-white px-2 py-0.5 rounded font-bold uppercase">
                Enregistré
              </span>
            </div>
            <div className="text-xs text-[#0B1120]">
              <span className="font-semibold">{savedAppointments[0].civilite} {savedAppointments[0].nomComplet}</span>
              {' '}— Rendez-vous souhaité le <span className="font-semibold">{savedAppointments[0].dateRdv}</span> ({savedAppointments[0].mode === 'cabinet' ? 'En cabinet' : 'À distance'})
            </div>
            <p className="text-[11px] text-[#45464d] mt-1">
              Réf : <span className="font-mono font-medium">{savedAppointments[0].id}</span> • Traitement en cours par le secrétariat
            </p>
          </div>
        </section>
      )}

      {/* 4 Pillars Grid */}
      <section className="px-4 sm:px-6 mb-6">
        <div className="flex items-center justify-between mb-2.5">
          <h2 className="font-headline-sm text-[#0B1120] text-base sm:text-lg font-bold">
            Domaines Clés d'Intervention
          </h2>
          <button
            onClick={() => onNavigate('domaines-d-expertise')}
            className="text-xs text-[#725b38] font-semibold hover:underline flex items-center gap-0.5 cursor-pointer"
          >
            <span>Voir tout</span>
            <span className="material-symbols-outlined text-[14px]">chevron_right</span>
          </button>
        </div>

        <div className="grid grid-cols-2 gap-2.5">
          {PRACTICE_DOMAINS.slice(0, 4).map((domain) => (
            <div
              key={domain.id}
              onClick={() => onSelectDomain(domain.id)}
              className="bg-white p-3.5 rounded-xl border border-[#e2e8f0] shadow-2xs hover:border-[#725b38]/50 hover:shadow-sm transition-all cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="w-8 h-8 rounded-lg bg-[#eceef0] text-[#0B1120] flex items-center justify-center mb-2">
                  <span className="material-symbols-outlined text-[20px]">{domain.icon}</span>
                </div>
                <h3 className="font-title-md text-xs font-bold text-[#0B1120] line-clamp-2 leading-snug">
                  {domain.title}
                </h3>
              </div>
              <div className="mt-2 pt-2 border-t border-[#f2f4f6] flex items-center justify-between text-[11px] text-[#725b38] font-semibold">
                <span>{domain.tag}</span>
                <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Serment Solennel Quote Card */}
      <section className="px-4 sm:px-6 mb-6">
        <div className="bg-white rounded-xl p-4 sm:p-5 border border-[#e2e8f0] shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-[#fedeb2]/40 text-[#725b38] flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-[26px]">gavel</span>
          </div>
          <div>
            <span className="text-[10px] font-bold text-[#725b38] uppercase tracking-widest block">
              Serment de l'Avocat
            </span>
            <p className="font-headline-sm italic text-[#0B1120] text-sm sm:text-base font-medium mt-0.5">
              « Dignité, Conscience, Indépendance, Probité et Humanité »
            </p>
            <p className="text-[11px] text-[#45464d] mt-1">
              Barreau du Cameroun • 15+ années d'exercice
            </p>
          </div>
        </div>
      </section>

      {/* Cadre & Cabinet Preview */}
      <section className="px-4 sm:px-6 mb-6">
        <div
          onClick={() => onNavigate('le-cabinet-et-avocat')}
          className="relative rounded-xl overflow-hidden h-40 bg-[#0B1120] p-4 flex flex-col justify-end shadow-md cursor-pointer group"
        >
          <img
            src={ASSETS.office}
            alt="Cabinet Bonanjo"
            className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-102 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] via-[#0B1120]/60 to-transparent" />
          <div className="relative z-10 flex items-center justify-between">
            <div>
              <span className="text-[10px] uppercase font-bold text-[#fedeb2] tracking-wider">
                Implantation &amp; Équipe
              </span>
              <h4 className="font-headline-sm text-white text-base font-bold">
                Le Cabinet à Douala Bonanjo &amp; Yaoundé
              </h4>
            </div>
            <span className="w-8 h-8 rounded-full bg-white/20 text-white flex items-center justify-center group-hover:translate-x-1 transition-transform">
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};
