import React from 'react';
import { ASSETS, CONTACT_INFO } from '../data';
import { ScreenType } from '../types';

interface CabinetScreenProps {
  onNavigate: (screen: ScreenType) => void;
}

export const CabinetScreen: React.FC<CabinetScreenProps> = ({ onNavigate }) => {
  return (
    <div className="flex flex-col w-full max-w-2xl mx-auto">
      {/* Profile & Hero Presentation Section */}
      <section className="relative px-4 sm:px-6 pt-4 pb-6">
        <div className="relative overflow-hidden rounded-xl bg-gradient-to-b from-[#e6e8ea] to-white p-4 sm:p-6 shadow-sm border border-[#e2e8f0]/80">
          <div className="flex flex-col items-center text-center">
            {/* Prestige Badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#fedeb2]/60 text-[#78603e] rounded-full mb-4 shadow-sm">
              <span className="material-symbols-outlined text-[15px] text-[#725b38]" style={{ fontVariationSettings: "'FILL' 1" }}>
                verified
              </span>
              <span className="font-label-sm uppercase tracking-wider text-[11px] font-semibold">
                Ordre des Avocats du Cameroun
              </span>
            </div>

            {/* Official Portrait Framing */}
            <div className="relative w-44 h-44 rounded-full p-1 bg-gradient-to-tr from-[#725b38] to-[#EADBCE] shadow-md mb-4">
              <div className="w-full h-full rounded-full overflow-hidden bg-white">
                <img
                  alt="Maître YOYA Yves, Avocat au Barreau du Cameroun"
                  className="w-full h-full object-cover object-center"
                  src={ASSETS.portrait}
                />
              </div>
              {/* Insignia floating pill */}
              <div className="absolute -bottom-2 right-2 bg-[#0B1120] text-white p-2 rounded-full shadow-md flex items-center justify-center border border-white/20">
                <span className="material-symbols-outlined text-[18px]">balance</span>
              </div>
            </div>

            {/* Title and Qualifications */}
            <h1 className="font-headline-md text-[#0B1120] mb-1 text-2xl sm:text-3xl font-bold">
              Maître YOYA Yves
            </h1>
            <p className="font-label-md text-[#725b38] uppercase tracking-wider mb-3 text-xs font-semibold">
              Avocat au Barreau du Cameroun • Fondateur &amp; Associé Gérant
            </p>

            {/* Experience micro-counters */}
            <div className="grid grid-cols-3 gap-2 w-full max-w-xs mt-2 pt-3 border-t border-[#E2E8F0]/80">
              <div className="flex flex-col items-center">
                <span className="font-headline-sm text-[#0B1120] font-bold text-xl">15+</span>
                <span className="font-label-sm text-[#45464d] text-[11px]">Ans au Barreau</span>
              </div>
              <div className="flex flex-col items-center border-x border-[#E2E8F0]/80 px-2">
                <span className="font-headline-sm text-[#0B1120] font-bold text-xl">OHADA</span>
                <span className="font-label-sm text-[#45464d] text-[11px]">Expertise</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-headline-sm text-[#0B1120] font-bold text-xl">100%</span>
                <span className="font-label-sm text-[#45464d] text-[11px]">Dévouement</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Biography & Academic Background */}
      <section className="px-4 sm:px-6 pb-6">
        <div className="bg-white rounded-xl p-4 sm:p-5 shadow-sm border border-[#e2e8f0]/80">
          <div className="flex items-center gap-2 mb-3">
            <span className="material-symbols-outlined text-[#725b38] text-[22px]">history_edu</span>
            <h2 className="font-title-lg text-[#0B1120] text-lg font-bold">Biographie &amp; Parcours</h2>
          </div>
          <p className="font-body-md text-[#45464d] leading-relaxed mb-4 text-sm sm:text-base">
            Diplômé des facultés de droit de Yaoundé II Soa et spécialisé en droit international des affaires. Fort de plus de 15 années d'exercice au Barreau du Cameroun, Maître YOYA Yves s'est imposé comme une référence incontournable en matière de conseil aux investisseurs et de défense acharnée devant les cours et tribunaux camerounais.
          </p>

          {/* Editorial Highlight Callout */}
          <div className="bg-[#f2f4f6] rounded-lg p-3 flex items-start gap-2.5 border border-[#e2e8f0]/60">
            <span className="material-symbols-outlined text-[#725b38] text-[20px] shrink-0 mt-0.5">
              military_tech
            </span>
            <div className="min-w-0">
              <p className="font-title-md text-[#0B1120] leading-snug font-semibold text-sm">
                Litiges Complexes &amp; Arbitrage Régional
              </p>
              <p className="font-body-sm text-[#45464d] mt-0.5 text-xs">
                Représentation institutionnelle de premier plan en zone CEMAC et devant la CCJA.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Serment d'Avocat & Ethical Values */}
      <section className="px-4 sm:px-6 pb-6">
        {/* Prestige Solemn Oath Card */}
        <div className="relative overflow-hidden rounded-xl bg-[#0B1120] text-white p-5 sm:p-6 shadow-md mb-4">
          {/* Decorative watermarked emblem */}
          <div className="absolute -right-8 -top-8 text-white/5 pointer-events-none select-none">
            <span className="material-symbols-outlined text-[160px]">gavel</span>
          </div>

          <div className="relative z-10 flex flex-col items-center text-center">
            <span className="material-symbols-outlined text-[#fedeb2] text-[32px] mb-2">
              workspace_premium
            </span>
            <span className="font-label-sm uppercase tracking-widest text-[#fedeb2] mb-2 text-xs font-semibold">
              Serment Solennel
            </span>
            <blockquote className="font-headline-sm italic text-white mb-3 max-w-xs text-lg sm:text-xl font-medium leading-snug">
              « Dignité, Conscience, Indépendance, Probité et Humanité »
            </blockquote>
            <div className="h-0.5 w-16 bg-[#e0c298]/40 rounded mb-2" />
            <p className="font-label-sm text-[#e0e3e5]/80 uppercase tracking-wide text-[10px]">
              Formule sacrée de l'Avocat au Barreau du Cameroun
            </p>
          </div>
        </div>

        {/* Core Commitments Cards */}
        <div className="grid grid-cols-1 gap-3">
          <div className="bg-white rounded-xl p-4 shadow-sm border border-[#e2e8f0]/80 flex items-start gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#e6e8ea] flex items-center justify-center shrink-0 text-[#725b38]">
              <span className="material-symbols-outlined text-[22px]">lock</span>
            </div>
            <div className="min-w-0">
              <h3 className="font-title-md text-[#0B1120] mb-0.5 text-sm font-semibold">
                Secret Professionnel Absolu
              </h3>
              <p className="font-body-sm text-[#45464d] text-xs leading-relaxed">
                Garantie d'une confidentialité totale pour tous vos dossiers, consultations et correspondances juridiques.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-4 shadow-sm border border-[#e2e8f0]/80 flex items-start gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#e6e8ea] flex items-center justify-center shrink-0 text-[#725b38]">
              <span className="material-symbols-outlined text-[22px]">speed</span>
            </div>
            <div className="min-w-0">
              <h3 className="font-title-md text-[#0B1120] mb-0.5 text-sm font-semibold">
                Disponibilité &amp; Réactivité
              </h3>
              <p className="font-body-sm text-[#45464d] text-xs leading-relaxed">
                Accompagnement personnalisé et point d'étape régulier sur l'état d'avancement de vos procédures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* L'Équipe et les Partenaires */}
      <section className="px-4 sm:px-6 pb-6">
        <div className="bg-white rounded-xl p-4 sm:p-5 shadow-sm border border-[#e2e8f0]/80">
          <div className="flex items-center justify-between mb-4">
            <div>
              <span className="font-label-sm text-[#725b38] uppercase tracking-widest block text-[11px] font-semibold">
                Synergies &amp; Réseau
              </span>
              <h2 className="font-title-lg text-[#0B1120] text-lg font-bold">
                L'Équipe et les Partenaires
              </h2>
            </div>
            <span className="material-symbols-outlined text-[#45464d] text-[24px]">groups</span>
          </div>

          <div className="space-y-4">
            {/* Spécialistes Collaborateurs */}
            <div className="flex items-start gap-3 pb-3 border-b border-[#E2E8F0]/80">
              <div className="w-8 h-8 rounded-full bg-[#fedeb2]/50 text-[#725b38] flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[18px]">account_balance</span>
              </div>
              <div>
                <h3 className="font-title-md text-[#0B1120] text-sm font-semibold">
                  Juristes Collaborateurs Spécialisés
                </h3>
                <p className="font-body-sm text-[#45464d] mt-0.5 text-xs leading-relaxed">
                  Une équipe d'analystes pointus en droit des affaires OHADA, ingénierie fiscale, contentieux douanier et droit social appliqué.
                </p>
              </div>
            </div>

            {/* Réseau International */}
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-[#fedeb2]/50 text-[#725b38] flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[18px]">public</span>
              </div>
              <div className="min-w-0">
                <h3 className="font-title-md text-[#0B1120] text-sm font-semibold">
                  Réseau de Correspondants Agréés
                </h3>
                <p className="font-body-sm text-[#45464d] mt-0.5 mb-2.5 text-xs leading-relaxed">
                  Présence active et relais juridictionnels coordonnés pour vos opérations transfrontalières :
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {['Yaoundé', 'Paris', 'Abidjan', 'Libreville'].map((city) => (
                    <span
                      key={city}
                      className="inline-flex items-center gap-1 px-2 py-1 rounded bg-[#f2f4f6] text-[#191c1e] text-[11px] font-semibold"
                    >
                      <span className="material-symbols-outlined text-[13px] text-[#725b38]">location_on</span>
                      {city}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Localisation & Implantations */}
      <section className="px-4 sm:px-6 pb-6">
        <div className="bg-white rounded-xl p-4 sm:p-5 shadow-sm border border-[#e2e8f0]/80">
          <div className="flex items-center gap-2 mb-3">
            <span className="material-symbols-outlined text-[#725b38] text-[22px]">corporate_fare</span>
            <h2 className="font-title-lg text-[#0B1120] text-lg font-bold">Implantations du Cabinet</h2>
          </div>

          <div className="space-y-3 mb-4">
            {/* Douala */}
            <div className="p-3 rounded-lg bg-[#f2f4f6] flex items-start gap-3 border border-[#e2e8f0]/60">
              <span className="material-symbols-outlined text-[#725b38] text-[20px] shrink-0 mt-0.5">
                home_pin
              </span>
              <div>
                <span className="font-label-sm uppercase tracking-wider text-[#725b38] font-bold text-[10px]">
                  Cabinet Principal • Douala
                </span>
                <p className="font-body-md text-[#0B1120] font-semibold text-sm">
                  Quartier administratif Bonanjo
                </p>
                <p className="font-body-sm text-[#45464d] text-xs">
                  Situé face aux juridictions et cours d'appel de Douala.
                </p>
              </div>
            </div>

            {/* Yaoundé */}
            <div className="p-3 rounded-lg bg-[#f2f4f6] flex items-start gap-3 border border-[#e2e8f0]/60">
              <span className="material-symbols-outlined text-[#725b38] text-[20px] shrink-0 mt-0.5">
                pin_drop
              </span>
              <div>
                <span className="font-label-sm uppercase tracking-wider text-[#725b38] font-bold text-[10px]">
                  Antenne de Liaison • Yaoundé
                </span>
                <p className="font-body-md text-[#0B1120] font-semibold text-sm">
                  Quartier Bastos
                </p>
                <p className="font-body-sm text-[#45464d] text-xs">
                  Proximité directe des ministères et institutions centrales.
                </p>
              </div>
            </div>
          </div>

          {/* Static Map Presentation */}
          <div
            className="w-full h-44 bg-cover bg-center rounded-lg relative overflow-hidden shadow-inner"
            data-location="Bonanjo, Douala, Cameroon"
            style={{ backgroundImage: `url('${ASSETS.map}')` }}
          >
            <div className="absolute bottom-2 left-2 bg-[#0B1120]/90 text-white px-2.5 py-1 rounded text-[11px] font-semibold flex items-center gap-1 shadow-sm backdrop-blur-sm">
              <span className="material-symbols-outlined text-[14px] text-[#fedeb2]">explore</span>
              <span>Douala Bonanjo • Barreau du Cameroun</span>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky/Call-to-Action Bottom Banner */}
      <section className="px-4 sm:px-6 pb-8">
        <div className="rounded-xl bg-[#0B1120] text-white p-5 text-center shadow-lg border border-white/10">
          <h3 className="font-title-lg text-white mb-1.5 text-base sm:text-lg font-bold">
            Une affaire ou une consultation juridique ?
          </h3>
          <p className="font-body-sm text-[#e0e3e5]/85 mb-4 text-xs sm:text-sm leading-relaxed max-w-md mx-auto">
            Bénéficiez de la rigueur et de l'écoute bienveillante de Maître YOYA Yves pour préserver vos droits et structurer vos investissements.
          </p>
          <button
            onClick={() => onNavigate('contact-et-consultation')}
            className="inline-flex items-center justify-center w-full h-12 bg-[#725b38] text-white font-label-md uppercase tracking-wider rounded-lg shadow-md hover:bg-[#725b38]/90 transition-all active:scale-[0.99] gap-2 cursor-pointer font-semibold"
            id="btn-cabinet-rdv"
          >
            <span className="material-symbols-outlined text-[20px]">calendar_month</span>
            <span>Prendre rendez-vous avec Maître YOYA Yves</span>
          </button>
        </div>
      </section>
    </div>
  );
};
