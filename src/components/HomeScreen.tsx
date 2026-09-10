import React from 'react';
import { ASSETS, CONTACT_INFO, PRACTICE_DOMAINS } from '../data';
import { ScreenType } from '../types';

interface HomeScreenProps {
  onNavigate: (screen: ScreenType) => void;
  onSelectDomain: (domainId: string) => void;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({ onNavigate, onSelectDomain }) => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-12">
      {/* Hero Section: Majestic 2-column layout on desktop */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0F172A] via-[#111A2E] to-[#070A12] border border-[#1E293B] p-6 sm:p-10 lg:p-12 shadow-2xl">
        {/* Subtle background glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#C5A880]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Text / Info (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start gap-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C5A880]/15 border border-[#C5A880]/30 text-[#C5A880] text-xs font-semibold uppercase tracking-wider">
              <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                verified
              </span>
              <span>Barreau du Cameroun • Siège Douala Bonanjo</span>
            </div>

            <h1 className="font-headline-lg text-[#F8FAFC] tracking-tight text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
              Défense Rigoureuse &amp; Conseil Stratégique en Afrique Centrale
            </h1>

            <p className="font-body-lg text-[#94A3B8] leading-relaxed max-w-2xl text-sm sm:text-base">
              Cabinet d'avocat fondé par <strong className="text-[#F8FAFC]">Maître YOYA Yves</strong>. Nous accompagnons les investisseurs, chefs d'entreprise et particuliers dans la sécurisation de leurs patrimoines, la négociation de contrats OHADA et la défense acharnée de leurs droits devant les tribunaux.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2 w-full sm:w-auto">
              <button
                onClick={() => onNavigate('contact-et-consultation')}
                className="w-full sm:w-auto px-7 py-3.5 bg-[#C5A880] hover:bg-[#D4AF37] text-[#070A12] font-label-md uppercase tracking-wider rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 font-bold cursor-pointer text-xs sm:text-sm active:scale-95"
                id="hero-btn-rdv"
              >
                <span className="material-symbols-outlined text-[18px]">calendar_month</span>
                <span>Prendre Consultation</span>
              </button>

              <button
                onClick={() => onNavigate('domaines-d-expertise')}
                className="w-full sm:w-auto px-6 py-3.5 bg-white/5 hover:bg-white/10 text-[#F8FAFC] border border-white/15 font-label-md uppercase tracking-wider rounded-xl transition-colors flex items-center justify-center gap-2 font-semibold cursor-pointer text-xs sm:text-sm"
                id="hero-btn-domaines"
              >
                <span>Domaines d'Expertise</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </button>
            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[#1E293B] w-full mt-2">
              <div>
                <span className="block font-headline-sm text-xl sm:text-2xl font-bold text-[#F8FAFC]">15+</span>
                <span className="font-label-sm text-[#94A3B8] text-[11px] uppercase tracking-wider">Ans au Barreau</span>
              </div>
              <div className="border-x border-[#1E293B] px-3">
                <span className="block font-headline-sm text-xl sm:text-2xl font-bold text-[#C5A880]">OHADA</span>
                <span className="font-label-sm text-[#94A3B8] text-[11px] uppercase tracking-wider">Zone CEMAC</span>
              </div>
              <div>
                <span className="block font-headline-sm text-xl sm:text-2xl font-bold text-[#F8FAFC]">100%</span>
                <span className="font-label-sm text-[#94A3B8] text-[11px] uppercase tracking-wider">Secret Garanti</span>
              </div>
            </div>
          </div>

          {/* Right Portrait & Lawyer Spotlight (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-sm sm:max-w-md rounded-2xl p-2 bg-gradient-to-tr from-[#1E293B] via-[#C5A880]/40 to-[#1E293B] shadow-2xl">
              <div className="relative rounded-xl overflow-hidden bg-[#0B1120] aspect-[4/5]">
                <img
                  src={ASSETS.portrait}
                  alt="Maître YOYA Yves, Avocat au Barreau du Cameroun"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070A12] via-transparent to-transparent opacity-80" />

                {/* Floating Lawyer Badge */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#0F172A]/90 backdrop-blur-md border border-[#C5A880]/30 text-white shadow-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-headline-sm text-base font-bold text-[#F8FAFC]">
                        Maître YOYA Yves
                      </p>
                      <p className="text-[11px] text-[#C5A880] uppercase tracking-wider font-semibold">
                        Avocat au Barreau du Cameroun
                      </p>
                    </div>
                    <div className="w-9 h-9 rounded-lg bg-[#C5A880] text-[#070A12] flex items-center justify-center font-bold">
                      <span className="material-symbols-outlined text-[20px]">balance</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Areas / Domaines d'Intervention : 4 columns on desktop */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2 h-2 rounded-full bg-[#C5A880]" />
              <span className="font-label-sm text-[#C5A880] uppercase tracking-widest text-xs font-semibold">
                Pôles d'Excellence
              </span>
            </div>
            <h2 className="font-headline-lg text-[#F8FAFC] text-2xl sm:text-3xl font-bold tracking-tight">
              Domaines d'Intervention Juridique
            </h2>
          </div>

          <button
            onClick={() => onNavigate('domaines-d-expertise')}
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#C5A880] hover:text-[#D4AF37] transition-colors cursor-pointer"
          >
            <span>Voir tous les 6 domaines</span>
            <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
          </button>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {PRACTICE_DOMAINS.slice(0, 4).map((domain) => (
            <div
              key={domain.id}
              className="bg-[#0F172A] border border-[#1E293B] rounded-2xl p-5 shadow-xl flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:border-[#C5A880]/50 group"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#131E33] border border-[#243252] flex items-center justify-center text-[#C5A880] mb-4 group-hover:scale-105 transition-transform">
                  <span className="material-symbols-outlined text-[24px]">{domain.icon}</span>
                </div>
                <h3 className="font-headline-sm text-[#F8FAFC] text-base font-bold mb-2 leading-snug">
                  {domain.title}
                </h3>
                <p className="font-body-sm text-[#94A3B8] text-xs leading-relaxed mb-4 line-clamp-3">
                  {domain.summary}
                </p>
              </div>

              <button
                onClick={() => onSelectDomain(domain.id)}
                className="w-full py-2.5 px-3 bg-[#131E33] hover:bg-[#C5A880] hover:text-[#070A12] border border-[#243252] text-[#F8FAFC] rounded-xl text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>Consulter</span>
                <span className="material-symbols-outlined text-[16px]">chevron_right</span>
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Two-Column Editorial: Serment Solennel & Cadre de Travail */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Solemn Oath & Values (6 cols) */}
        <div className="lg:col-span-6 bg-[#0F172A] border border-[#1E293B] rounded-2xl p-6 sm:p-8 shadow-xl flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="material-symbols-outlined text-[#C5A880] text-[24px]">gavel</span>
              <span className="font-label-sm uppercase tracking-widest text-[#C5A880] text-xs font-bold">
                Engagement Déontologique
              </span>
            </div>
            <h3 className="font-headline-sm text-[#F8FAFC] text-xl font-bold mb-3">
              Le Serment Solennel de l'Avocat
            </h3>
            <blockquote className="font-headline-sm italic text-white/90 text-base sm:text-lg mb-4 border-l-2 border-[#C5A880] pl-4 py-1">
              « Je jure comme Avocat d'exercer mes fonctions avec dignité, conscience, indépendance, probité et humanité. »
            </blockquote>
            <p className="font-body-sm text-[#94A3B8] text-xs leading-relaxed">
              Ce serment n'est pas une simple tradition : il est la boussole de notre cabinet. Chaque client bénéficie du secret professionnel absolu et d'une loyauté indéfectible dans la défense de ses intérêts.
            </p>
          </div>

          <div className="pt-5 border-t border-[#1E293B] flex items-center justify-between flex-wrap gap-2">
            <span className="text-xs text-[#C5A880] font-semibold uppercase tracking-wider">
              Ordre des Avocats du Cameroun
            </span>
            <button
              onClick={() => onNavigate('le-cabinet-et-avocat')}
              className="text-xs text-white font-bold hover:text-[#C5A880] flex items-center gap-1 cursor-pointer"
            >
              Découvrir le Cabinet <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </button>
          </div>
        </div>

        {/* Office & Direct Contact Card (6 cols) */}
        <div className="lg:col-span-6 bg-[#0F172A] border border-[#1E293B] rounded-2xl overflow-hidden shadow-xl flex flex-col">
          <div className="relative h-48 sm:h-52 bg-[#0B1120]">
            <img
              src={ASSETS.office}
              alt="Cabinet d'Avocat Maître YOYA Yves à Bonanjo"
              className="w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <span className="px-2.5 py-1 bg-[#C5A880] text-[#070A12] text-[10px] uppercase font-bold rounded tracking-wider">
                Siège Douala Bonanjo
              </span>
              <p className="font-headline-sm text-white text-lg font-bold mt-1">
                Rue des Ministères, Douala
              </p>
            </div>
          </div>

          <div className="p-6 flex-1 flex flex-col justify-between gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href={`tel:${CONTACT_INFO.phoneStandardRaw}`}
                className="p-3 bg-[#131E33] rounded-xl border border-[#243252] flex items-center gap-3 hover:border-[#C5A880]/50 transition-colors"
              >
                <span className="material-symbols-outlined text-[#C5A880] text-[20px]">phone</span>
                <div className="flex flex-col">
                  <span className="text-[10px] text-[#94A3B8] uppercase tracking-wider">Standard</span>
                  <span className="text-xs font-bold text-[#F8FAFC]">{CONTACT_INFO.phoneStandard}</span>
                </div>
              </a>

              <a
                href={`https://wa.me/${CONTACT_INFO.phoneWhatsappRaw}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-[#131E33] rounded-xl border border-[#243252] flex items-center gap-3 hover:border-[#C5A880]/50 transition-colors"
              >
                <span className="material-symbols-outlined text-emerald-400 text-[20px]">chat</span>
                <div className="flex flex-col">
                  <span className="text-[10px] text-[#94A3B8] uppercase tracking-wider">WhatsApp</span>
                  <span className="text-xs font-bold text-[#F8FAFC]">{CONTACT_INFO.phoneWhatsapp}</span>
                </div>
              </a>
            </div>

            <button
              onClick={() => onNavigate('contact-et-consultation')}
              className="w-full py-3 bg-[#C5A880] hover:bg-[#D4AF37] text-[#070A12] rounded-xl font-bold uppercase tracking-wider text-xs transition-colors cursor-pointer"
            >
              Prendre rendez-vous au cabinet
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
