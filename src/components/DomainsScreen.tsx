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
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      {/* Editorial Header */}
      <section className="mb-6 flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#A37B3E]" />
          <span className="font-label-sm text-[#8C6527] uppercase tracking-widest text-xs font-semibold">
            Compétences Juridiques &amp; Plaidorie
          </span>
        </div>
        <h1 className="font-headline-lg text-[#0F172A] tracking-tight text-2xl sm:text-3xl lg:text-4xl font-bold">
          Nos Domaines d'Intervention &amp; Pôles d'Excellence
        </h1>
        <p className="font-body-md text-[#475569] max-w-3xl leading-relaxed text-sm sm:text-base">
          Une expertise pointue et pluridisciplinaire au service des entreprises, investisseurs régionaux et particuliers au Cameroun et dans l'ensemble de l'espace OHADA.
        </p>
      </section>

      {/* Filter Tabs & Search Bar */}
      <section className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto py-1 no-scrollbar" id="filter-tabs">
          {FILTER_TABS.map((tab) => {
            const isActive = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`filter-btn shrink-0 px-4 py-2.5 rounded-xl font-label-md tracking-wider uppercase transition-all duration-200 cursor-pointer text-xs font-semibold ${
                  isActive
                    ? 'bg-[#A37B3E] text-white shadow-xs font-bold'
                    : 'bg-white text-[#64748B] hover:bg-[#F8FAFC] border border-[#CBD5E1]'
                }`}
                data-filter={tab.id}
                id={`filter-${tab.id}`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Search Bar */}
        <div className="relative w-full md:w-80">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Rechercher une compétence, OHADA, foncier..."
            className="w-full h-11 pl-10 pr-4 bg-white rounded-xl text-xs font-body-md text-[#0F172A] border border-[#CBD5E1] focus:border-[#A37B3E] focus:outline-none placeholder:text-[#94A3B8] shadow-xs"
          />
          <span className="material-symbols-outlined absolute left-3 top-2.5 text-[18px] text-[#64748B]">
            search
          </span>
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-3 text-[#64748B] hover:text-[#0F172A] cursor-pointer"
            >
              <span className="material-symbols-outlined text-[16px]">close</span>
            </button>
          )}
        </div>
      </section>

      {/* Multi-Column Responsive Grid (1 col on mobile, 2 on tablet, 3 on desktop) */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12" id="domains-grid">
        {filteredDomains.length === 0 ? (
          <div className="col-span-full bg-white border border-[#E2E8F0] rounded-2xl p-12 text-center shadow-sm">
            <span className="material-symbols-outlined text-5xl text-[#94A3B8] mb-3">
              manage_search
            </span>
            <p className="font-title-md text-base text-[#0F172A]">Aucun domaine ne correspond à votre recherche.</p>
            <button
              onClick={() => {
                setActiveFilter('all');
                setSearchQuery('');
              }}
              className="mt-4 px-5 py-2.5 bg-[#A37B3E] text-white rounded-xl text-xs font-bold uppercase tracking-wider cursor-pointer hover:bg-[#8C6527] shadow-xs"
            >
              Réinitialiser les filtres
            </button>
          </div>
        ) : (
          filteredDomains.map((domain) => (
            <article
              key={domain.id}
              className="domain-card bg-white rounded-2xl p-6 border border-[#E2E8F0] shadow-sm flex flex-col justify-between gap-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#A37B3E]/60 hover:shadow-md"
              data-category={domain.category}
            >
              <div className="flex flex-col gap-3">
                <div className="flex items-start justify-between gap-3">
                  <div className="w-12 h-12 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] flex items-center justify-center text-[#A37B3E] shrink-0">
                    <span className="material-symbols-outlined text-[26px]">
                      {domain.icon}
                    </span>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-[#A37B3E]/10 text-[#8C6527] border border-[#A37B3E]/25 font-label-sm uppercase tracking-wider text-[10px] font-bold">
                    {domain.tag}
                  </span>
                </div>

                <div>
                  <h2 className="font-headline-sm text-[#0F172A] text-lg font-bold leading-snug">
                    {domain.title}
                  </h2>
                  <p className="font-body-sm text-[#64748B] text-xs leading-relaxed mt-2">
                    {domain.summary}
                  </p>
                </div>

                <ul className="flex flex-col gap-2 pt-2 border-t border-[#E2E8F0]">
                  {domain.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-[#334155] font-body-sm text-xs leading-snug">
                      <span
                        className="material-symbols-outlined text-[#A37B3E] text-[16px] shrink-0 mt-0.5"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        check_circle
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 flex items-center justify-between border-t border-[#E2E8F0] flex-wrap gap-2">
                <span className="font-label-sm text-[#8C6527] uppercase tracking-wider flex items-center gap-1.5 text-[11px] font-semibold">
                  <span className="material-symbols-outlined text-[16px]">
                    {domain.jurisdictionIcon}
                  </span>
                  {domain.jurisdictionBadge}
                </span>

                <button
                  onClick={() => onSelectDomainForConsultation(domain.id)}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#F8FAFC] text-[#0F172A] border border-[#E2E8F0] font-label-md uppercase tracking-wider hover:bg-[#A37B3E] hover:text-white hover:border-[#A37B3E] transition-colors cursor-pointer text-xs font-bold"
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

      {/* Institutional CTA Full Width */}
      <section className="mb-8">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#1E293B] via-[#0F172A] to-[#1E293B] text-white p-6 sm:p-10 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 border border-[#E2E8F0]">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-2">
              <span className="material-symbols-outlined text-[#D4AF37] text-[24px]">support_agent</span>
              <span className="font-label-sm uppercase tracking-widest text-[#D4AF37] text-xs font-bold">
                Réactivité Institutionnelle
              </span>
            </div>
            <h3 className="font-headline-sm text-white text-xl sm:text-2xl font-bold mb-2">
              Votre situation requiert une approche sur-mesure ?
            </h3>
            <p className="font-body-md text-[#94A3B8] text-xs sm:text-sm leading-relaxed">
              Nos avocats étudient vos pièces contractuelles ou votre litige sous <span className="text-white font-semibold">24h ouvrées</span> avec la plus stricte discrétion professionnelle.
            </p>
          </div>

          <button
            onClick={() => onNavigate('contact-et-consultation')}
            className="shrink-0 px-6 py-3.5 bg-[#A37B3E] hover:bg-[#8C6527] text-white font-label-md uppercase tracking-wider rounded-xl shadow-md transition-all cursor-pointer font-bold text-xs sm:text-sm"
            id="btn-domain-cta"
          >
            Planifier une Consultation Confidentielle
          </button>
        </div>
      </section>
    </div>
  );
};
