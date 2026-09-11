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
      <section className="relative overflow-hidden rounded-3xl bg-white border border-[#E2E8F0] p-6 sm:p-10 lg:p-12 shadow-xl">
        {/* Subtle background warm glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#A37B3E]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Text / Info (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start gap-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#A37B3E]/10 border border-[#A37B3E]/25 text-[#8C6527] text-xs font-semibold uppercase tracking-wider">
              <span className="material-symbols-outlined text-[16px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                verified
              </span>
              <span>Barreau du Cameroun • Siège Douala Bonanjo</span>
            </div>

            <h1 className="font-headline-lg text-[#0F172A] tracking-tight text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
              Défense Rigoureuse &amp; Conseil Stratégique en Afrique Centrale
            </h1>

            <p className="font-body-lg text-[#475569] leading-relaxed max-w-2xl text-sm sm:text-base">
              Cabinet d'avocat fondé par <strong className="text-[#0F172A]">Maître YOYA Yves</strong>. Nous accompagnons les investisseurs, chefs d'entreprise et particuliers dans la sécurisation de leurs patrimoines, la négociation de contrats OHADA et la défense acharnée de leurs droits devant les tribunaux.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2 w-full sm:w-auto">
              <button
                onClick={() => onNavigate('contact-et-consultation')}
                className="w-full sm:w-auto px-7 py-3.5 bg-[#A37B3E] hover:bg-[#8C6527] text-white font-label-md uppercase tracking-wider rounded-xl shadow-md transition-all flex items-center justify-center gap-2 font-bold cursor-pointer text-xs sm:text-sm active:scale-95"
                id="hero-btn-rdv"
              >
                <span className="material-symbols-outlined text-[18px]">calendar_month</span>
                <span>Prendre Consultation</span>
              </button>

              <button
                onClick={() => onNavigate('domaines-d-expertise')}
                className="w-full sm:w-auto px-6 py-3.5 bg-[#F8FAFC] hover:bg-[#F1F3F5] text-[#0F172A] border border-[#CBD5E1] font-label-md uppercase tracking-wider rounded-xl transition-colors flex items-center justify-center gap-2 font-semibold cursor-pointer text-xs sm:text-sm"
                id="hero-btn-domaines"
              >
                <span>Domaines d'Expertise</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </button>
            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[#E2E8F0] w-full mt-2">
              <div>
                <span className="block font-headline-sm text-xl sm:text-2xl font-bold text-[#0F172A]">15+</span>
                <span className="font-label-sm text-[#64748B] text-[11px] uppercase tracking-wider">Ans au Barreau</span>
              </div>
              <div className="border-x border-[#E2E8F0] px-3">
                <span className="block font-headline-sm text-xl sm:text-2xl font-bold text-[#A37B3E]">OHADA</span>
                <span className="font-label-sm text-[#64748B] text-[11px] uppercase tracking-wider">Zone CEMAC</span>
              </div>
              <div>
                <span className="block font-headline-sm text-xl sm:text-2xl font-bold text-[#0F172A]">100%</span>
                <span className="font-label-sm text-[#64748B] text-[11px] uppercase tracking-wider">Secret Garanti</span>
              </div>
            </div>
          </div>

          {/* Right Portrait & Lawyer Spotlight (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-sm sm:max-w-md rounded-2xl p-2 bg-gradient-to-tr from-[#E2E8F0] via-[#A37B3E]/30 to-[#CBD5E1] shadow-xl">
              <div className="relative rounded-xl overflow-hidden bg-[#F1F3F5] aspect-[4/5]">
                <img
                  src={ASSETS.portrait}
                  alt="Maître YOYA Yves, Avocat au Barreau du Cameroun"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />

                {/* Floating Lawyer Badge */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/95 backdrop-blur-md border border-[#E2E8F0] text-[#0F172A] shadow-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-headline-sm text-base font-bold text-[#0F172A]">
                        Maître YOYA Yves
                      </p>
                      <p className="text-[11px] text-[#8C6527] uppercase tracking-wider font-semibold">
                        Avocat au Barreau du Cameroun
                      </p>
                    </div>
                    <div className="w-9 h-9 rounded-lg bg-[#A37B3E] text-white flex items-center justify-center font-bold shadow-xs">
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
              <span className="w-2 h-2 rounded-full bg-[#A37B3E]" />
              <span className="font-label-sm text-[#8C6527] uppercase tracking-widest text-xs font-semibold">
                Pôles d'Excellence
              </span>
            </div>
            <h2 className="font-headline-lg text-[#0F172A] text-2xl sm:text-3xl font-bold tracking-tight">
              Domaines d'Intervention Juridique
            </h2>
          </div>

          <button
            onClick={() => onNavigate('domaines-d-expertise')}
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#8C6527] hover:text-[#A37B3E] transition-colors cursor-pointer"
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
              className="bg-white border border-[#E2E8F0] rounded-2xl p-5 shadow-sm flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:border-[#A37B3E]/60 hover:shadow-md group"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] flex items-center justify-center text-[#A37B3E] mb-4 group-hover:scale-105 group-hover:bg-[#A37B3E]/10 transition-transform">
                  <span className="material-symbols-outlined text-[24px]">{domain.icon}</span>
                </div>
                <h3 className="font-headline-sm text-[#0F172A] text-base font-bold mb-2 leading-snug">
                  {domain.title}
                </h3>
                <p className="font-body-sm text-[#64748B] text-xs leading-relaxed mb-4 line-clamp-3">
                  {domain.summary}
                </p>
              </div>

              <button
                onClick={() => onSelectDomain(domain.id)}
                className="w-full py-2.5 px-3 bg-[#F8FAFC] hover:bg-[#A37B3E] hover:text-white border border-[#E2E8F0] text-[#0F172A] rounded-xl text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
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
        <div className="lg:col-span-6 bg-white border border-[#E2E8F0] rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="material-symbols-outlined text-[#A37B3E] text-[24px]">gavel</span>
              <span className="font-label-sm uppercase tracking-widest text-[#8C6527] text-xs font-bold">
                Engagement Déontologique
              </span>
            </div>
            <h3 className="font-headline-sm text-[#0F172A] text-xl font-bold mb-3">
              Le Serment Solennel de l'Avocat
            </h3>
            <blockquote className="font-headline-sm italic text-[#1E293B] text-base sm:text-lg mb-4 border-l-2 border-[#A37B3E] pl-4 py-1">
              « Je jure comme Avocat d'exercer mes fonctions avec dignité, conscience, indépendance, probité et humanité. »
            </blockquote>
            <p className="font-body-sm text-[#64748B] text-xs leading-relaxed">
              Ce serment n'est pas une simple tradition : il est la boussole de notre cabinet. Chaque client bénéficie du secret professionnel absolu et d'une loyauté indéfectible dans la défense de ses intérêts.
            </p>
          </div>

          <div className="pt-5 border-t border-[#E2E8F0] flex items-center justify-between flex-wrap gap-2">
            <span className="text-xs text-[#8C6527] font-semibold uppercase tracking-wider">
              Ordre des Avocats du Cameroun
            </span>
            <button
              onClick={() => onNavigate('le-cabinet-et-avocat')}
              className="text-xs text-[#0F172A] font-bold hover:text-[#A37B3E] flex items-center gap-1 cursor-pointer"
            >
              Découvrir le Cabinet <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </button>
          </div>
        </div>

        {/* Office & Direct Contact Card (6 cols) */}
        <div className="lg:col-span-6 bg-white border border-[#E2E8F0] rounded-2xl overflow-hidden shadow-sm flex flex-col">
          <div className="relative h-48 sm:h-52 bg-[#0F172A]">
            <img
              src={ASSETS.office}
              alt="Cabinet d'Avocat Maître YOYA Yves à Bonanjo"
              className="w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <span className="px-2.5 py-1 bg-[#A37B3E] text-white text-[10px] uppercase font-bold rounded tracking-wider shadow-xs">
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
                className="p-3 bg-[#F8FAFC] rounded-xl border border-[#E2E8F0] flex items-center gap-3 hover:border-[#A37B3E]/60 transition-colors"
              >
                <span className="material-symbols-outlined text-[#A37B3E] text-[20px]">phone</span>
                <div className="flex flex-col">
                  <span className="text-[10px] text-[#64748B] uppercase tracking-wider">Standard</span>
                  <span className="text-xs font-bold text-[#0F172A]">{CONTACT_INFO.phoneStandard}</span>
                </div>
              </a>

              <a
                href={`https://wa.me/${CONTACT_INFO.phoneWhatsappRaw}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-[#F8FAFC] rounded-xl border border-[#E2E8F0] flex items-center gap-3 hover:border-emerald-500/60 transition-colors"
              >
                <span className="material-symbols-outlined text-emerald-600 text-[20px]">chat</span>
                <div className="flex flex-col">
                  <span className="text-[10px] text-[#64748B] uppercase tracking-wider">WhatsApp</span>
                  <span className="text-xs font-bold text-[#0F172A]">{CONTACT_INFO.phoneWhatsapp}</span>
                </div>
              </a>
            </div>

            <button
              onClick={() => onNavigate('contact-et-consultation')}
              className="w-full py-3 bg-[#A37B3E] hover:bg-[#8C6527] text-white rounded-xl font-bold uppercase tracking-wider text-xs transition-colors cursor-pointer shadow-xs"
            >
              Prendre rendez-vous au cabinet
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
