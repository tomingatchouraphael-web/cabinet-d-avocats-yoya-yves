import React from 'react';
import { ASSETS, CONTACT_INFO } from '../data';
import { ScreenType } from '../types';

interface CabinetScreenProps {
  onNavigate: (screen: ScreenType) => void;
}

export const CabinetScreen: React.FC<CabinetScreenProps> = ({ onNavigate }) => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      {/* Top Section Headline */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#A37B3E]/10 border border-[#A37B3E]/25 text-[#8C6527] font-label-sm rounded-full uppercase tracking-widest text-xs font-semibold">
            <span className="material-symbols-outlined text-[15px]" style={{ fontVariationSettings: "'FILL' 1" }}>
              verified
            </span>
            Ordre des Avocats du Cameroun
          </span>
          <span className="text-[#64748B] font-label-sm text-xs">• Prestation de Serment &amp; Éthique</span>
        </div>
        <h1 className="font-headline-lg text-[#0F172A] tracking-tight text-2xl sm:text-3xl lg:text-4xl font-bold">
          Le Cabinet &amp; Maître YOYA Yves
        </h1>
        <p className="font-body-md text-[#475569] max-w-3xl leading-relaxed text-sm sm:text-base">
          Une pratique juridique d'excellence conjuguant rigueur déontologique, défense tenace des justiciables et accompagnement stratégique des investisseurs en Afrique centrale.
        </p>
      </div>

      {/* 2-Column Responsive Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column (5 cols): Portrait, Oath, Values */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          {/* Profile Hero Card */}
          <div className="bg-white border border-[#E2E8F0] rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col items-center text-center">
            {/* Portrait Framing */}
            <div className="relative w-44 h-44 sm:w-48 sm:h-48 rounded-full p-1.5 bg-gradient-to-tr from-[#A37B3E] via-[#D4AF37] to-[#A37B3E] shadow-md mb-5">
              <div className="w-full h-full rounded-full overflow-hidden bg-[#F1F3F5]">
                <img
                  alt="Maître YOYA Yves, Avocat au Barreau du Cameroun"
                  className="w-full h-full object-cover object-center"
                  src={ASSETS.portrait}
                />
              </div>
              <div className="absolute -bottom-2 right-4 bg-white text-[#A37B3E] p-2.5 rounded-full shadow-md border border-[#E2E8F0] flex items-center justify-center">
                <span className="material-symbols-outlined text-[20px]">balance</span>
              </div>
            </div>

            <h2 className="font-headline-md text-[#0F172A] text-2xl sm:text-3xl font-bold mb-1">
              Maître YOYA Yves
            </h2>
            <p className="font-label-md text-[#8C6527] uppercase tracking-wider text-xs font-semibold mb-4">
              Avocat au Barreau du Cameroun • Fondateur &amp; Associé Gérant
            </p>

            {/* Experience micro-counters */}
            <div className="grid grid-cols-3 gap-2 w-full pt-4 border-t border-[#E2E8F0]">
              <div className="flex flex-col items-center">
                <span className="font-headline-sm text-[#0F172A] font-bold text-xl">15+</span>
                <span className="font-label-sm text-[#64748B] text-[11px]">Ans au Barreau</span>
              </div>
              <div className="flex flex-col items-center border-x border-[#E2E8F0] px-2">
                <span className="font-headline-sm text-[#A37B3E] font-bold text-xl">OHADA</span>
                <span className="font-label-sm text-[#64748B] text-[11px]">Expertise</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-headline-sm text-[#0F172A] font-bold text-xl">100%</span>
                <span className="font-label-sm text-[#64748B] text-[11px]">Dévouement</span>
              </div>
            </div>
          </div>

          {/* Serment Solennel Card */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-[#1E293B] to-[#0F172A] border border-[#333A48] text-white p-6 shadow-md">
            {/* Watermark gavel */}
            <div className="absolute -right-8 -top-8 text-white/5 pointer-events-none select-none">
              <span className="material-symbols-outlined text-[180px]">gavel</span>
            </div>

            <div className="relative z-10 flex flex-col items-center text-center">
              <span className="material-symbols-outlined text-[#D4AF37] text-[34px] mb-2">
                workspace_premium
              </span>
              <span className="font-label-sm uppercase tracking-widest text-[#D4AF37] mb-2 text-xs font-bold">
                Serment Professionnel Solennel
              </span>
              <blockquote className="font-headline-sm italic text-white mb-3 text-lg sm:text-xl font-medium leading-relaxed">
                « Dignité, Conscience, Indépendance, Probité et Humanité »
              </blockquote>
              <div className="h-0.5 w-16 bg-[#D4AF37]/50 rounded mb-2.5" />
              <p className="font-label-sm text-[#94A3B8] uppercase tracking-wide text-[10px]">
                Formule sacrée de l'Avocat au Barreau du Cameroun
              </p>
            </div>
          </div>

          {/* Core Commitments */}
          <div className="flex flex-col gap-3">
            <div className="bg-white border border-[#E2E8F0] rounded-2xl p-4 shadow-sm flex items-start gap-3.5">
              <div className="w-11 h-11 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] flex items-center justify-center shrink-0 text-[#A37B3E]">
                <span className="material-symbols-outlined text-[22px]">lock</span>
              </div>
              <div>
                <h3 className="font-title-md text-[#0F172A] text-sm font-bold mb-0.5">
                  Secret Professionnel Absolu
                </h3>
                <p className="font-body-sm text-[#64748B] text-xs leading-relaxed">
                  Garantie d'une confidentialité totale pour tous vos dossiers, consultations et correspondances juridiques.
                </p>
              </div>
            </div>

            <div className="bg-white border border-[#E2E8F0] rounded-2xl p-4 shadow-sm flex items-start gap-3.5">
              <div className="w-11 h-11 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] flex items-center justify-center shrink-0 text-[#A37B3E]">
                <span className="material-symbols-outlined text-[22px]">speed</span>
              </div>
              <div>
                <h3 className="font-title-md text-[#0F172A] text-sm font-bold mb-0.5">
                  Disponibilité &amp; Réactivité
                </h3>
                <p className="font-body-sm text-[#64748B] text-xs leading-relaxed">
                  Accompagnement personnalisé et point d'étape régulier sur l'état d'avancement de vos procédures.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column (7 cols): Biography, Team & Correspondents, Locations, CTA */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          {/* Biography & Academic Background */}
          <div className="bg-white border border-[#E2E8F0] rounded-2xl p-6 sm:p-7 shadow-sm">
            <div className="flex items-center gap-2.5 mb-4">
              <span className="material-symbols-outlined text-[#A37B3E] text-[24px]">history_edu</span>
              <h2 className="font-title-lg text-[#0F172A] text-xl font-bold">
                Biographie &amp; Parcours d'Excellence
              </h2>
            </div>
            <p className="font-body-md text-[#475569] leading-relaxed mb-4 text-sm sm:text-base">
              Diplômé des facultés de droit de Yaoundé II Soa et spécialisé en droit international des affaires. Fort de plus de 15 années d'exercice au Barreau du Cameroun, Maître YOYA Yves s'est imposé comme une référence incontournable en matière de conseil aux investisseurs, de structuration d'opérations corporatives et de défense acharnée devant les cours et tribunaux camerounais.
            </p>

            <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl p-4 flex items-start gap-3">
              <span className="material-symbols-outlined text-[#A37B3E] text-[22px] shrink-0 mt-0.5">
                military_tech
              </span>
              <div>
                <p className="font-title-md text-[#0F172A] font-semibold text-sm">
                  Litiges Complexes &amp; Arbitrage Régional
                </p>
                <p className="font-body-sm text-[#64748B] mt-1 text-xs leading-relaxed">
                  Représentation institutionnelle de premier plan en zone CEMAC et devant la Cour Commune de Justice et d'Arbitrage (CCJA).
                </p>
              </div>
            </div>
          </div>

          {/* L'Équipe et les Partenaires */}
          <div className="bg-white border border-[#E2E8F0] rounded-2xl p-6 sm:p-7 shadow-sm">
            <div className="flex items-center justify-between mb-5">
              <div>
                <span className="font-label-sm text-[#8C6527] uppercase tracking-widest block text-xs font-bold">
                  Synergies &amp; Réseau
                </span>
                <h2 className="font-title-lg text-[#0F172A] text-xl font-bold">
                  L'Équipe et les Partenaires Internationaux
                </h2>
              </div>
              <span className="material-symbols-outlined text-[#64748B] text-[28px]">groups</span>
            </div>

            <div className="space-y-4">
              {/* Spécialistes Collaborateurs */}
              <div className="flex items-start gap-3 pb-4 border-b border-[#E2E8F0]">
                <div className="w-10 h-10 rounded-xl bg-[#F8FAFC] text-[#A37B3E] flex items-center justify-center shrink-0 border border-[#E2E8F0]">
                  <span className="material-symbols-outlined text-[20px]">account_balance</span>
                </div>
                <div>
                  <h3 className="font-title-md text-[#0F172A] text-sm font-bold">
                    Juristes Collaborateurs Spécialisés
                  </h3>
                  <p className="font-body-sm text-[#64748B] mt-1 text-xs leading-relaxed">
                    Une équipe d'analystes pointus en droit des affaires OHADA, ingénierie fiscale, contentieux douanier et droit social appliqué.
                  </p>
                </div>
              </div>

              {/* Réseau International */}
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#F8FAFC] text-[#A37B3E] flex items-center justify-center shrink-0 border border-[#E2E8F0]">
                  <span className="material-symbols-outlined text-[20px]">public</span>
                </div>
                <div className="min-w-0">
                  <h3 className="font-title-md text-[#0F172A] text-sm font-bold">
                    Réseau de Correspondants Agréés
                  </h3>
                  <p className="font-body-sm text-[#64748B] mt-1 mb-3 text-xs leading-relaxed">
                    Présence active et relais juridictionnels coordonnés pour vos opérations transfrontalières :
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['Yaoundé', 'Paris', 'Abidjan', 'Libreville'].map((city) => (
                      <span
                        key={city}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#F8FAFC] border border-[#CBD5E1] text-[#0F172A] text-xs font-semibold"
                      >
                        <span className="material-symbols-outlined text-[14px] text-[#A37B3E]">location_on</span>
                        {city}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Implantations du Cabinet */}
          <div className="bg-white border border-[#E2E8F0] rounded-2xl p-6 sm:p-7 shadow-sm">
            <div className="flex items-center gap-2.5 mb-4">
              <span className="material-symbols-outlined text-[#A37B3E] text-[24px]">corporate_fare</span>
              <h2 className="font-title-lg text-[#0F172A] text-xl font-bold">Implantations du Cabinet</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
              {/* Douala */}
              <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] flex items-start gap-3">
                <span className="material-symbols-outlined text-[#A37B3E] text-[22px] shrink-0 mt-0.5">
                  home_pin
                </span>
                <div>
                  <span className="font-label-sm uppercase tracking-wider text-[#8C6527] font-bold text-[10px]">
                    Cabinet Principal • Douala
                  </span>
                  <p className="font-body-md text-[#0F172A] font-semibold text-sm">
                    Quartier administratif Bonanjo
                  </p>
                  <p className="font-body-sm text-[#64748B] text-xs mt-0.5">
                    Face aux juridictions et cours d'appel de Douala.
                  </p>
                </div>
              </div>

              {/* Yaoundé */}
              <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] flex items-start gap-3">
                <span className="material-symbols-outlined text-[#A37B3E] text-[22px] shrink-0 mt-0.5">
                  pin_drop
                </span>
                <div>
                  <span className="font-label-sm uppercase tracking-wider text-[#8C6527] font-bold text-[10px]">
                    Antenne de Liaison • Yaoundé
                  </span>
                  <p className="font-body-md text-[#0F172A] font-semibold text-sm">
                    Quartier Bastos
                  </p>
                  <p className="font-body-sm text-[#64748B] text-xs mt-0.5">
                    Proximité directe des ministères et institutions centrales.
                  </p>
                </div>
              </div>
            </div>

            {/* Static Map Presentation */}
            <div
              className="w-full h-48 bg-cover bg-center rounded-xl relative overflow-hidden shadow-inner border border-[#E2E8F0]"
              style={{ backgroundImage: `url('${ASSETS.map}')` }}
            >
              <div className="absolute inset-0 bg-[#0F172A]/20" />
              <div className="absolute bottom-3 left-3 bg-white/95 text-[#0F172A] px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 shadow-md border border-[#E2E8F0]">
                <span className="material-symbols-outlined text-[15px] text-[#A37B3E]">explore</span>
                <span>Douala Bonanjo • Barreau du Cameroun</span>
              </div>
            </div>
          </div>

          {/* Sticky/Call-to-Action Bottom Banner */}
          <div className="rounded-2xl bg-white border border-[#A37B3E]/40 text-[#0F172A] p-6 text-center shadow-sm">
            <h3 className="font-title-lg text-[#0F172A] mb-2 text-lg sm:text-xl font-bold">
              Une affaire ou une consultation juridique à nous confier ?
            </h3>
            <p className="font-body-sm text-[#64748B] mb-5 text-xs sm:text-sm leading-relaxed max-w-lg mx-auto">
              Bénéficiez de la rigueur et de l'écoute bienveillante de Maître YOYA Yves pour préserver vos droits et structurer vos investissements en toute sérénité.
            </p>
            <button
              onClick={() => onNavigate('contact-et-consultation')}
              className="inline-flex items-center justify-center w-full sm:w-auto px-8 h-12 bg-[#A37B3E] hover:bg-[#8C6527] text-white font-label-md uppercase tracking-wider rounded-xl shadow-md transition-all active:scale-[0.99] gap-2 cursor-pointer font-bold text-xs sm:text-sm"
              id="btn-cabinet-rdv"
            >
              <span className="material-symbols-outlined text-[20px]">calendar_month</span>
              <span>Prendre rendez-vous avec Maître YOYA Yves</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
