import React, { useState } from 'react';
import { PRACTICE_DOMAINS } from '../data';
import { ScreenType } from '../types';

interface DomainsScreenProps {
  onSelectDomainForConsultation: (domainId: string) => void;
  onNavigate: (screen: ScreenType) => void;
}

type FilterCategory = 'all' | 'affaires' | 'contentieux' | 'immobilier' | 'penal-social';

interface FilterTab {
  id: FilterCategory;
  label: string;
}

const FILTER_TABS: FilterTab[] = [
  { id: 'all', label: 'Tous' },
  { id: 'affaires', label: 'Droit des Affaires' },
  { id: 'contentieux', label: 'Contentieux' },
  { id: 'immobilier', label: 'Immobilier & Foncier' },
  { id: 'penal-social', label: 'Pénal & Social' }
];

export const DomainsScreen: React.FC<DomainsScreenProps> = ({
  onSelectDomainForConsultation,
  onNavigate
}) => {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredDomains = PRACTICE_DOMAINS.filter((domain) => {
    const matchesFilter = activeFilter === 'all' || domain.category === activeFilter;
    const matchesSearch =
      searchQuery.trim() === '' ||
      domain.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      domain.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      domain.items.some((item) => item.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="flex flex-col w-full max-w-2xl mx-auto">
      {/* Editorial Header */}
      <section className="px-4 sm:px-6 pt-4 pb-3 flex flex-col gap-1.5">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#725b38]" />
          <span className="font-label-sm text-[#725b38] uppercase tracking-widest text-[11px] font-semibold">
            Compétences Juridiques &amp; Plaidorie
          </span>
        </div>
        <h1 className="font-headline-lg-mobile text-[#0B1120] tracking-tight text-2xl sm:text-3xl font-bold">
          Nos Domaines d'Intervention
        </h1>
        <p className="font-body-md text-[#45464d] leading-relaxed text-sm sm:text-base">
          Une expertise pointue et pluridisciplinaire au service des entreprises, investisseurs et particuliers au Cameroun et dans l'espace OHADA.
        </p>
      </section>

      {/* Filter Tabs */}
      <section className="px-4 sm:px-6 pb-3">
        <div className="flex items-center gap-2 overflow-x-auto py-1.5 no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0" id="filter-tabs">
          {FILTER_TABS.map((tab) => {
            const isActive = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`filter-btn shrink-0 px-4 py-2 rounded-lg font-label-md tracking-wider uppercase transition-all duration-200 cursor-pointer text-xs font-semibold ${
                  isActive
                    ? 'bg-[#0B1120] text-white shadow-sm'
                    : 'bg-[#eceef0] text-[#45464d] hover:bg-[#e6e8ea]'
                }`}
                data-filter={tab.id}
                id={`filter-${tab.id}`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Quick Search Bar */}
        <div className="relative mt-2">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Rechercher une compétence, un texte, une procédure..."
            className="w-full h-10 pl-9 pr-4 bg-white rounded-lg text-xs font-body-md text-[#191c1e] border border-[#e2e8f0] focus:border-[#725b38]/40 focus:outline-none placeholder:text-[#45464d]/60 shadow-2xs"
          />
          <span className="material-symbols-outlined absolute left-2.5 top-2.5 text-[18px] text-[#45464d]/70">
            search
          </span>
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-2.5 top-2.5 text-[#45464d] hover:text-[#0B1120] cursor-pointer"
            >
              <span className="material-symbols-outlined text-[16px]">close</span>
            </button>
          )}
        </div>
      </section>

      {/* Domains Grid / Cards List */}
      <section className="px-4 sm:px-6 py-2 flex flex-col gap-4" id="domains-grid">
        {filteredDomains.length === 0 ? (
          <div className="bg-white rounded-xl p-8 text-center border border-[#e2e8f0]">
            <span className="material-symbols-outlined text-4xl text-[#45464d]/40 mb-2">
              manage_search
            </span>
            <p className="font-title-md text-sm text-[#0B1120]">Aucun domaine ne correspond à votre recherche.</p>
            <button
              onClick={() => {
                setActiveFilter('all');
                setSearchQuery('');
              }}
              className="mt-3 px-4 py-2 bg-[#0B1120] text-white rounded-lg text-xs font-semibold cursor-pointer"
            >
              Réinitialiser les filtres
            </button>
          </div>
        ) : (
          filteredDomains.map((domain) => (
            <article
              key={domain.id}
              className="domain-card bg-white rounded-xl p-4 sm:p-5 shadow-[0_10px_25px_-5px_rgba(15,23,42,0.04)] border border-[#e2e8f0]/80 flex flex-col gap-3 transition-transform duration-200 hover:-translate-y-0.5"
              data-category={domain.category}
            >
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#eceef0] flex items-center justify-center text-[#0B1120] shrink-0 mt-0.5">
                    <span className="material-symbols-outlined text-[24px]">
                      {domain.icon}
                    </span>
                  </div>
                  <div>
                    <span className="px-2 py-0.5 rounded bg-[#fedeb2]/40 text-[#78603e] font-label-sm uppercase tracking-wider inline-block text-[10px] font-semibold">
                      {domain.tag}
                    </span>
                    <h2 className="font-headline-sm text-[#0B1120] mt-1 text-base sm:text-lg font-bold">
                      {domain.title}
                    </h2>
                  </div>
                </div>
              </div>

              <p className="font-body-sm text-[#45464d] text-xs sm:text-sm leading-relaxed">
                {domain.summary}
              </p>

              <ul className="flex flex-col gap-2 py-1">
                {domain.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-[#191c1e] font-body-sm text-xs leading-snug">
                    <span
                      className="material-symbols-outlined text-[#725b38] text-[18px] shrink-0 mt-0.5"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      check_circle
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-3 flex items-center justify-between border-t border-[#eceef0] flex-wrap gap-2">
                <span className="font-label-sm text-[#725b38] uppercase tracking-wider flex items-center gap-1 text-[11px] font-semibold">
                  <span className="material-symbols-outlined text-[16px]">
                    {domain.jurisdictionIcon}
                  </span>
                  {domain.jurisdictionBadge}
                </span>

                <button
                  onClick={() => onSelectDomainForConsultation(domain.id)}
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-[#eceef0] text-[#0B1120] font-label-md uppercase tracking-wider hover:bg-[#0B1120] hover:text-white transition-colors cursor-pointer text-xs font-semibold"
                  id={`btn-consulter-${domain.id}`}
                >
                  <span>Consulter</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </button>
              </div>
            </article>
          ))
        )}
      </section>

      {/* Institutional CTA card */}
      <section className="px-4 sm:px-6 py-6 mb-4">
        <div className="relative overflow-hidden rounded-xl bg-[#0B1120] text-white p-5 sm:p-6 shadow-[0_16px_32px_rgba(11,17,32,0.2)] flex flex-col gap-2 border border-white/10">
          <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-[#725b38]/15 blur-2xl pointer-events-none" />
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#fedeb2] text-[24px]">support_agent</span>
            <span className="font-label-sm uppercase tracking-widest text-[#fedeb2] text-xs font-semibold">
              Réactivité Institutionnelle
            </span>
          </div>
          <h3 className="font-headline-sm text-white leading-snug text-lg font-bold">
            Votre situation requiert une approche sur-mesure ?
          </h3>
          <p className="font-body-md text-slate-300 text-xs sm:text-sm leading-relaxed">
            Nos avocats étudient votre dossier sous <span className="text-white font-semibold">24h ouvrées</span> avec une totale discrétion professionnelle.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onNavigate('contact-et-consultation')}
              className="inline-flex items-center justify-center w-full h-12 bg-white text-[#0B1120] font-label-md uppercase tracking-wider rounded-lg shadow transition-colors hover:bg-[#fedeb2] cursor-pointer font-semibold text-xs sm:text-sm"
              id="btn-domain-cta"
            >
              Planifier une Consultation Confidentielle
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
