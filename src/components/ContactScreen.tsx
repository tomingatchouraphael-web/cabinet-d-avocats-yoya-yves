import React, { useState, useEffect } from 'react';
import { ASSETS, CONTACT_INFO } from '../data';
import { ClientType, ConsultationFormData, ConsultationMode, UrgenceLevel } from '../types';

interface ContactScreenProps {
  initialDomain?: string;
  onNavigateHome: () => void;
}

export const ContactScreen: React.FC<ContactScreenProps> = ({ initialDomain }) => {
  const [mode, setMode] = useState<ConsultationMode>('cabinet');
  const [clientType, setClientType] = useState<ClientType>('particulier');
  const [civilite, setCivilite] = useState('M.');
  const [nomComplet, setNomComplet] = useState('');
  const [raisonSociale, setRaisonSociale] = useState('');
  const [telephone, setTelephone] = useState('');
  const [email, setEmail] = useState('');
  const [domaineJuridique, setDomaineJuridique] = useState(initialDomain || '');
  const [urgence, setUrgence] = useState<UrgenceLevel>('normal');
  const [dateRdv, setDateRdv] = useState('');
  const [creneauRdv, setCreneauRdv] = useState('aprem_1');
  const [description, setDescription] = useState('');
  const [deontologie, setDeontologie] = useState(false);

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState<ConsultationFormData | null>(null);

  // Set default date to tomorrow if not set
  useEffect(() => {
    if (!dateRdv) {
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      const yyyy = tomorrow.getFullYear();
      const mm = String(tomorrow.getMonth() + 1).padStart(2, '0');
      const dd = String(tomorrow.getDate()).padStart(2, '0');
      setDateRdv(`${yyyy}-${mm}-${dd}`);
    }
  }, [dateRdv]);

  useEffect(() => {
    if (initialDomain) {
      setDomaineJuridique(initialDomain);
    }
  }, [initialDomain]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!deontologie) {
      alert("Veuillez accepter l'attestation déontologique de confidentialité.");
      return;
    }

    const payload: ConsultationFormData = {
      mode,
      clientType,
      civilite,
      nomComplet,
      raisonSociale: clientType === 'entreprise' ? raisonSociale : undefined,
      telephone,
      email,
      domaineJuridique,
      urgence,
      dateRdv,
      creneauRdv,
      description,
      deontologie,
      createdAt: new Date().toISOString(),
      id: `DOSSIER-${Math.floor(100000 + Math.random() * 900000)}`
    };

    // Save in localStorage for persistence
    try {
      const existing = JSON.parse(localStorage.getItem('cabinet_rdv_list') || '[]');
      existing.unshift(payload);
      localStorage.setItem('cabinet_rdv_list', JSON.stringify(existing));
    } catch {
      // ignore
    }

    setSubmittedData(payload);
    setIsSubmitted(true);
  };

  const handleCloseModal = () => {
    setIsSubmitted(false);
    setNomComplet('');
    setRaisonSociale('');
    setTelephone('');
    setEmail('');
    setDescription('');
    setDeontologie(false);
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      {/* Top Banner Introduction */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#C5A880]/15 border border-[#C5A880]/30 text-[#C5A880] font-label-sm rounded-full uppercase tracking-widest text-xs font-semibold">
            <span className="material-symbols-outlined text-[15px]" style={{ fontVariationSettings: "'FILL' 1" }}>
              verified
            </span>
            Secrétariat Juridique Officiel
          </span>
          <span className="text-[#94A3B8] font-label-sm text-xs">• Bonanjo, Douala (Cameroun)</span>
        </div>

        <h1 className="font-headline-lg text-[#F8FAFC] tracking-tight mb-2 text-2xl sm:text-3xl lg:text-4xl font-bold">
          Consultation Juridique &amp; Prise de Rendez-vous
        </h1>
        <p className="font-body-md text-[#94A3B8] max-w-3xl leading-relaxed text-sm sm:text-base">
          Fixez un rendez-vous au cabinet principal de Douala Bonanjo, planifiez une consultation confidentielle à distance par visioconférence sécurisée, ou contactez immédiatement le secrétariat de Maître YOYA Yves.
        </p>
      </div>

      {/* Main Grid: Responsive 2-column layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Form (7 cols) */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          {/* Modality Selector */}
          <div className="p-1.5 bg-[#0F172A] border border-[#1E293B] rounded-xl flex gap-1.5 shadow-lg">
            <button
              onClick={() => setMode('cabinet')}
              className={`flex-1 py-3 px-3 rounded-lg font-title-md text-xs sm:text-sm text-center transition-all flex items-center justify-center gap-2 cursor-pointer font-semibold ${
                mode === 'cabinet'
                  ? 'bg-[#C5A880] text-[#070A12] shadow-md'
                  : 'text-[#94A3B8] hover:text-[#F8FAFC] hover:bg-white/5'
              }`}
              id="btn-cabinet"
              type="button"
            >
              <span className="material-symbols-outlined text-[18px]">domain</span>
              <span>En Cabinet (Douala Bonanjo)</span>
            </button>
            <button
              onClick={() => setMode('distance')}
              className={`flex-1 py-3 px-3 rounded-lg font-title-md text-xs sm:text-sm text-center transition-all flex items-center justify-center gap-2 cursor-pointer font-semibold ${
                mode === 'distance'
                  ? 'bg-[#C5A880] text-[#070A12] shadow-md'
                  : 'text-[#94A3B8] hover:text-[#F8FAFC] hover:bg-white/5'
              }`}
              id="btn-distance"
              type="button"
            >
              <span className="material-symbols-outlined text-[18px]">videocam</span>
              <span>À Distance (Visio / Tél)</span>
            </button>
          </div>

          {/* Form Card */}
          <form
            onSubmit={handleSubmit}
            className="bg-[#0F172A] border border-[#1E293B] rounded-2xl p-5 sm:p-7 shadow-xl flex flex-col gap-5"
            id="legal-consultation-form"
          >
            {/* Qualité du demandeur */}
            <div>
              <label className="block font-label-md uppercase tracking-wider text-[#C5A880] mb-2 text-xs font-semibold">
                Qualité du demandeur
              </label>
              <div className="grid grid-cols-2 gap-3">
                <label
                  className={`flex items-center gap-3 p-3.5 rounded-xl cursor-pointer transition-all border ${
                    clientType === 'particulier'
                      ? 'bg-[#C5A880]/15 text-[#F8FAFC] border-[#C5A880]'
                      : 'bg-[#131E33] text-[#94A3B8] border-[#1E293B] hover:bg-[#1A2640]'
                  }`}
                >
                  <input
                    type="radio"
                    name="client_type"
                    value="particulier"
                    checked={clientType === 'particulier'}
                    onChange={() => setClientType('particulier')}
                    className="accent-[#C5A880] h-4 w-4"
                  />
                  <div className="flex flex-col">
                    <span className="font-title-md text-sm font-semibold text-[#F8FAFC]">Particulier</span>
                    <span className="text-[11px] text-[#94A3B8]">Défense individuelle, patrimoine, litige</span>
                  </div>
                </label>

                <label
                  className={`flex items-center gap-3 p-3.5 rounded-xl cursor-pointer transition-all border ${
                    clientType === 'entreprise'
                      ? 'bg-[#C5A880]/15 text-[#F8FAFC] border-[#C5A880]'
                      : 'bg-[#131E33] text-[#94A3B8] border-[#1E293B] hover:bg-[#1A2640]'
                  }`}
                >
                  <input
                    type="radio"
                    name="client_type"
                    value="entreprise"
                    checked={clientType === 'entreprise'}
                    onChange={() => setClientType('entreprise')}
                    className="accent-[#C5A880] h-4 w-4"
                  />
                  <div className="flex flex-col">
                    <span className="font-title-md text-sm font-semibold text-[#F8FAFC]">Entreprise / Société</span>
                    <span className="text-[11px] text-[#94A3B8]">Sociétés OHADA, investissements, contrats</span>
                  </div>
                </label>
              </div>
            </div>

            {/* Civilité, Nom et Prénom */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="sm:col-span-1">
                <label className="block font-label-md uppercase tracking-wider text-[#94A3B8] mb-1.5 text-xs font-semibold" htmlFor="civilite">
                  Civilité
                </label>
                <select
                  id="civilite"
                  name="civilite"
                  value={civilite}
                  onChange={(e) => setCivilite(e.target.value)}
                  className="w-full h-12 px-3 bg-[#131E33] text-[#F8FAFC] rounded-xl font-body-md text-sm border border-[#243252] focus:border-[#C5A880] focus:outline-none"
                >
                  <option value="Me" className="bg-[#0F172A]">Me</option>
                  <option value="M." className="bg-[#0F172A]">M.</option>
                  <option value="Mme" className="bg-[#0F172A]">Mme</option>
                  <option value="Dr" className="bg-[#0F172A]">Dr</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="block font-label-md uppercase tracking-wider text-[#94A3B8] mb-1.5 text-xs font-semibold" htmlFor="nom_complet">
                  Nom et Prénom *
                </label>
                <input
                  id="nom_complet"
                  name="nom_complet"
                  type="text"
                  required
                  value={nomComplet}
                  onChange={(e) => setNomComplet(e.target.value)}
                  placeholder="Ex: Jean Paul Ndongo"
                  className="w-full h-12 px-4 bg-[#131E33] text-[#F8FAFC] rounded-xl font-body-md text-sm placeholder:text-[#94A3B8]/40 border border-[#243252] focus:border-[#C5A880] focus:outline-none"
                />
              </div>
            </div>

            {/* Raison Sociale si entreprise */}
            {clientType === 'entreprise' && (
              <div id="company-field" className="animate-in fade-in duration-200">
                <label className="block font-label-md uppercase tracking-wider text-[#94A3B8] mb-1.5 text-xs font-semibold" htmlFor="raison_sociale">
                  Raison Sociale / Entité Corporative *
                </label>
                <input
                  id="raison_sociale"
                  name="raison_sociale"
                  type="text"
                  required={clientType === 'entreprise'}
                  value={raisonSociale}
                  onChange={(e) => setRaisonSociale(e.target.value)}
                  placeholder="Ex: Cameroun Agro Services SA"
                  className="w-full h-12 px-4 bg-[#131E33] text-[#F8FAFC] rounded-xl font-body-md text-sm placeholder:text-[#94A3B8]/40 border border-[#243252] focus:border-[#C5A880] focus:outline-none"
                />
              </div>
            )}

            {/* Coordonnées Tél & Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block font-label-md uppercase tracking-wider text-[#94A3B8] mb-1.5 text-xs font-semibold" htmlFor="telephone">
                  Numéro de Téléphone *
                </label>
                <div className="flex items-center h-12 bg-[#131E33] rounded-xl border border-[#243252] focus-within:border-[#C5A880]">
                  <div className="flex items-center gap-1.5 pl-3 pr-2 text-[#F8FAFC] font-title-md text-xs sm:text-sm shrink-0 border-r border-[#243252]">
                    <span className="text-base">🇨🇲</span>
                    <span className="text-[#C5A880] font-semibold">+237</span>
                  </div>
                  <input
                    id="telephone"
                    name="telephone"
                    type="tel"
                    required
                    value={telephone}
                    onChange={(e) => setTelephone(e.target.value)}
                    placeholder="6XX XX XX XX"
                    className="w-full h-full bg-transparent px-3 font-body-md text-sm text-[#F8FAFC] placeholder:text-[#94A3B8]/40 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block font-label-md uppercase tracking-wider text-[#94A3B8] mb-1.5 text-xs font-semibold" htmlFor="email">
                  Adresse E-mail Professionnelle *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="contact@domaine.cm"
                  className="w-full h-12 px-4 bg-[#131E33] text-[#F8FAFC] rounded-xl font-body-md text-sm placeholder:text-[#94A3B8]/40 border border-[#243252] focus:border-[#C5A880] focus:outline-none"
                />
              </div>
            </div>

            {/* Domaine Juridique Concerné */}
            <div>
              <label className="block font-label-md uppercase tracking-wider text-[#94A3B8] mb-1.5 text-xs font-semibold" htmlFor="domaine_juridique">
                Domaine Juridique Concerné *
              </label>
              <div className="relative">
                <select
                  id="domaine_juridique"
                  name="domaine_juridique"
                  required
                  value={domaineJuridique}
                  onChange={(e) => setDomaineJuridique(e.target.value)}
                  className="w-full h-12 pl-4 pr-10 bg-[#131E33] text-[#F8FAFC] rounded-xl font-body-md text-sm appearance-none border border-[#243252] focus:border-[#C5A880] focus:outline-none cursor-pointer"
                >
                  <option value="" disabled className="bg-[#0F172A]">Sélectionnez un domaine d'intervention</option>
                  <option value="affaires" className="bg-[#0F172A]">Droit des Affaires &amp; Sociétés (OHADA)</option>
                  <option value="foncier" className="bg-[#0F172A]">Litige Foncier &amp; Titre Immobilier</option>
                  <option value="travail" className="bg-[#0F172A]">Droit du Travail &amp; Relations Sociales</option>
                  <option value="contentieux" className="bg-[#0F172A]">Contentieux Civil, Commercial ou Pénal</option>
                  <option value="fiscalite" className="bg-[#0F172A]">Fiscalité des Entreprises &amp; Douanes</option>
                  <option value="contrats" className="bg-[#0F172A]">Rédaction de Contrats &amp; Protocoles</option>
                  <option value="autre" className="bg-[#0F172A]">Autre consultation générale</option>
                </select>
                <span className="material-symbols-outlined pointer-events-none absolute right-3 top-3 text-[#94A3B8] text-[20px]">
                  expand_more
                </span>
              </div>
            </div>

            {/* Degré d'Urgence */}
            <div>
              <label className="block font-label-md uppercase tracking-wider text-[#94A3B8] mb-1.5 text-xs font-semibold">
                Degré d'urgence procédurale
              </label>
              <div className="grid grid-cols-3 gap-2.5">
                <button
                  type="button"
                  onClick={() => setUrgence('normal')}
                  className={`flex flex-col items-center justify-center p-3 rounded-xl cursor-pointer transition-all border ${
                    urgence === 'normal'
                      ? 'bg-[#C5A880] text-[#070A12] border-[#C5A880] font-bold shadow-md'
                      : 'bg-[#131E33] text-[#94A3B8] border-[#243252] hover:bg-[#1A2640]'
                  }`}
                >
                  <span className="material-symbols-outlined text-[20px] mb-1">calendar_today</span>
                  <span className="font-label-sm text-[11px]">Normal</span>
                </button>

                <button
                  type="button"
                  onClick={() => setUrgence('urgent')}
                  className={`flex flex-col items-center justify-center p-3 rounded-xl cursor-pointer transition-all border ${
                    urgence === 'urgent'
                      ? 'bg-[#D4AF37] text-[#070A12] border-[#D4AF37] font-bold shadow-md'
                      : 'bg-[#131E33] text-[#94A3B8] border-[#243252] hover:bg-[#1A2640]'
                  }`}
                >
                  <span className={`material-symbols-outlined text-[20px] mb-1 ${urgence === 'urgent' ? 'text-[#070A12]' : 'text-[#D4AF37]'}`}>
                    alarm
                  </span>
                  <span className="font-label-sm text-[11px]">&lt; 48 Heures</span>
                </button>

                <button
                  type="button"
                  onClick={() => setUrgence('astreinte')}
                  className={`flex flex-col items-center justify-center p-3 rounded-xl cursor-pointer transition-all border ${
                    urgence === 'astreinte'
                      ? 'bg-[#EF4444] text-white border-[#EF4444] font-bold shadow-md'
                      : 'bg-[#131E33] text-[#94A3B8] border-[#243252] hover:bg-[#1A2640]'
                  }`}
                >
                  <span className={`material-symbols-outlined text-[20px] mb-1 ${urgence === 'astreinte' ? 'text-white' : 'text-[#EF4444]'}`}>
                    notification_important
                  </span>
                  <span className="font-label-sm text-[11px]">GAV / Astreinte</span>
                </button>
              </div>
            </div>

            {/* Date & Créneau Souhaité */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block font-label-md uppercase tracking-wider text-[#94A3B8] mb-1.5 text-xs font-semibold" htmlFor="date_rdv">
                  Date souhaitée
                </label>
                <input
                  id="date_rdv"
                  name="date_rdv"
                  type="date"
                  required
                  value={dateRdv}
                  onChange={(e) => setDateRdv(e.target.value)}
                  className="w-full h-12 px-3 bg-[#131E33] text-[#F8FAFC] rounded-xl font-body-sm text-xs border border-[#243252] focus:border-[#C5A880] focus:outline-none"
                />
              </div>
              <div>
                <label className="block font-label-md uppercase tracking-wider text-[#94A3B8] mb-1.5 text-xs font-semibold" htmlFor="creneau_rdv">
                  Créneau horaire
                </label>
                <select
                  id="creneau_rdv"
                  name="creneau_rdv"
                  value={creneauRdv}
                  onChange={(e) => setCreneauRdv(e.target.value)}
                  className="w-full h-12 px-3 bg-[#131E33] text-[#F8FAFC] rounded-xl font-body-sm text-xs border border-[#243252] focus:border-[#C5A880] focus:outline-none cursor-pointer"
                >
                  <option value="matin_1" className="bg-[#0F172A]">09h00 - 11h00</option>
                  <option value="matin_2" className="bg-[#0F172A]">11h00 - 13h00</option>
                  <option value="aprem_1" className="bg-[#0F172A]">14h00 - 16h00</option>
                  <option value="aprem_2" className="bg-[#0F172A]">16h00 - 18h00</option>
                </select>
              </div>
            </div>

            {/* Brève description du dossier */}
            <div>
              <label className="block font-label-md uppercase tracking-wider text-[#94A3B8] mb-1.5 text-xs font-semibold" htmlFor="description">
                Exposé sommaire des faits &amp; Pièces clés *
              </label>
              <textarea
                id="description"
                name="description"
                required
                rows={4}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Décrivez en quelques lignes l'objet de votre démarche, les parties prenantes et l'échéance juridique éventuelle..."
                className="w-full p-4 bg-[#131E33] text-[#F8FAFC] rounded-xl font-body-md text-sm placeholder:text-[#94A3B8]/40 border border-[#243252] focus:border-[#C5A880] focus:outline-none resize-none leading-relaxed"
              />
            </div>

            {/* Engagement Déontologique */}
            <div className="p-4 bg-[#131E33] border border-[#243252] rounded-xl flex items-start gap-3">
              <input
                type="checkbox"
                id="deontologie"
                name="deontologie"
                required
                checked={deontologie}
                onChange={(e) => setDeontologie(e.target.checked)}
                className="accent-[#C5A880] h-5 w-5 mt-0.5 rounded cursor-pointer shrink-0"
              />
              <label htmlFor="deontologie" className="font-body-sm text-xs text-[#E2E8F0] cursor-pointer select-none leading-relaxed">
                J'atteste du caractère strictement confidentiel de ma démarche conformément aux règles déontologiques de l'Ordre des Avocats du Cameroun.
              </label>
            </div>

            {/* Bouton d'action principal */}
            <button
              type="submit"
              className="w-full h-14 bg-gradient-to-r from-[#C5A880] via-[#D4AF37] to-[#C5A880] text-[#070A12] rounded-xl font-label-md uppercase tracking-widest shadow-[0_8px_24px_rgba(197,168,128,0.25)] hover:shadow-[0_12px_28px_rgba(197,168,128,0.35)] transition-all flex items-center justify-center gap-2.5 group relative overflow-hidden cursor-pointer active:scale-[0.99] font-bold text-sm"
              id="btn-submit-consultation"
            >
              <span className="material-symbols-outlined text-[20px]">gavel</span>
              <span>Confirmer la demande de consultation</span>
              <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </button>

            <p className="text-center font-label-sm text-[#94A3B8] text-xs">
              Le secrétariat vous contacte sous 24 heures ouvrées pour confirmation définitive du créneau.
            </p>
          </form>
        </div>

        {/* Right Column: Information, Office Card, Contacts & Coordinates (5 cols) */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          {/* Statut de Disponibilité & Serment */}
          <div className="p-4 bg-[#0F172A] border border-[#1E293B] rounded-2xl shadow-lg flex items-center justify-between flex-wrap gap-3">
            <div className="flex items-center gap-3">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C5A880] opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#C5A880]" />
              </span>
              <div className="flex flex-col">
                <span className="font-title-md text-[#F8FAFC] text-xs uppercase tracking-wider font-bold">
                  Permanence du Cabinet
                </span>
                <span className="font-body-sm text-[#94A3B8] text-xs">
                  Dossiers traités sous 24h ouvrées
                </span>
              </div>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1 bg-[#C5A880]/15 rounded-lg text-[#C5A880] border border-[#C5A880]/30">
              <span className="material-symbols-outlined text-[16px]">lock</span>
              <span className="font-label-sm uppercase tracking-wider text-[10px] font-bold">
                Secret Absolu
              </span>
            </div>
          </div>

          {/* L'Environnement de Consultation Photo Card */}
          <div className="relative rounded-2xl overflow-hidden shadow-xl h-56 bg-[#0B1120] border border-[#1E293B] flex items-end p-5 group">
            <img
              alt="Intérieur élégant et solennel du cabinet d'avocats de Maître YOYA Yves à Douala Bonanjo"
              className="absolute inset-0 w-full h-full object-cover opacity-45 group-hover:scale-105 transition-transform duration-700"
              src={ASSETS.office}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#070A12] via-[#070A12]/60 to-transparent" />
            <div className="relative z-10 flex flex-col">
              <span className="font-label-sm uppercase tracking-widest mb-1 text-[11px] font-bold text-[#C5A880]">
                L'Environnement de Consultation
              </span>
              <h3 className="font-headline-sm text-white text-lg sm:text-xl font-bold leading-snug">
                Un cadre discret propice aux échanges stratégiques
              </h3>
            </div>
          </div>

          {/* Coordonnées Directes */}
          <div className="bg-[#0F172A] border border-[#1E293B] rounded-2xl p-5 shadow-xl flex flex-col gap-3">
            <h3 className="font-headline-sm text-[#F8FAFC] text-base font-bold flex items-center justify-between">
              <span>Lignes Directes du Cabinet</span>
              <span className="text-xs font-normal text-[#C5A880] uppercase tracking-wider">Secrétariat</span>
            </h3>

            {/* Standard Phone */}
            <a
              href={`tel:${CONTACT_INFO.phoneStandardRaw}`}
              className="p-3.5 bg-[#131E33] rounded-xl border border-[#243252] flex items-center justify-between group hover:border-[#C5A880]/60 transition-colors"
              id="link-call-standard"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-[#C5A880] group-hover:bg-[#C5A880] group-hover:text-[#070A12] transition-colors">
                  <span className="material-symbols-outlined text-[20px]">phone</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-label-sm uppercase tracking-wider text-[#94A3B8] text-[10px] font-semibold">
                    Ligne Standard
                  </span>
                  <span className="font-title-md text-[#F8FAFC] font-bold text-sm">
                    {CONTACT_INFO.phoneStandard}
                  </span>
                </div>
              </div>
              <span className="material-symbols-outlined text-[#94A3B8] text-[20px] group-hover:text-[#C5A880] group-hover:translate-x-1 transition-all">
                chevron_right
              </span>
            </a>

            {/* WhatsApp Urgence */}
            <a
              href={`https://wa.me/${CONTACT_INFO.phoneWhatsappRaw}?text=${encodeURIComponent(
                "Bonjour Maître YOYA Yves, je vous contacte concernant une demande de consultation juridique urgente."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 bg-[#131E33] rounded-xl border border-[#243252] flex items-center justify-between group hover:border-[#C5A880]/60 transition-colors"
              id="link-whatsapp-urgence"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-[20px]">chat</span>
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-2">
                    <span className="font-label-sm uppercase tracking-wider text-[#C5A880] text-[10px] font-semibold">
                      Permanence 24/7
                    </span>
                    <span className="px-1.5 py-0.2 bg-[#EF4444]/20 text-[#EF4444] rounded text-[9px] uppercase tracking-wider font-bold">
                      Urgent
                    </span>
                  </div>
                  <span className="font-title-md text-[#F8FAFC] font-bold text-sm">
                    {CONTACT_INFO.phoneWhatsapp} (WhatsApp)
                  </span>
                </div>
              </div>
              <span className="material-symbols-outlined text-[#94A3B8] text-[20px] group-hover:text-[#C5A880] group-hover:translate-x-1 transition-all">
                chevron_right
              </span>
            </a>
          </div>

          {/* Localisation & Map */}
          <div className="bg-[#0F172A] border border-[#1E293B] rounded-2xl p-5 shadow-xl flex flex-col gap-3">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#131E33] flex items-center justify-center text-[#C5A880] shrink-0 border border-[#243252]">
                <span className="material-symbols-outlined text-[22px]">location_on</span>
              </div>
              <div className="flex flex-col min-w-0">
                <span className="font-label-sm uppercase tracking-wider text-[#C5A880] text-[10px] font-bold">
                  Siège du Cabinet Principal
                </span>
                <span className="font-title-md text-[#F8FAFC] font-bold text-sm">
                  {CONTACT_INFO.address}
                </span>
                <span className="font-body-sm text-[#94A3B8] text-xs">
                  {CONTACT_INFO.city} ({CONTACT_INFO.bp})
                </span>
              </div>
            </div>

            {/* Map image preview */}
            <div
              className="w-full h-40 rounded-xl bg-cover bg-center overflow-hidden relative shadow-inner border border-[#243252]"
              style={{ backgroundImage: `url('${ASSETS.map}')` }}
            >
              <div className="absolute inset-0 bg-[#070A12]/30 pointer-events-none" />
              <div className="absolute bottom-2 left-2 px-3 py-1.5 bg-[#070A12]/90 backdrop-blur rounded-lg text-xs text-white shadow-md flex items-center gap-1.5 border border-white/10">
                <span className="material-symbols-outlined text-[14px] text-[#C5A880]">pin_drop</span>
                <span className="font-medium">Douala Bonanjo • Quartier Juridique</span>
              </div>
            </div>

            {/* Horaires d'Ouverture */}
            <div className="p-3 bg-[#131E33] rounded-xl flex items-center gap-3 border border-[#243252] text-xs text-[#94A3B8]">
              <span className="material-symbols-outlined text-[#C5A880] text-[20px] shrink-0">schedule</span>
              <div>
                <span className="text-[#F8FAFC] font-semibold">Horaires d'Accueil : </span>
                <span>Lun - Ven : 8h00 - 18h00 • Samedi sur RDV express</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Confirmation Modal Dialog */}
      {isSubmitted && (
        <div className="fixed inset-0 z-50 bg-[#070A12]/80 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="bg-[#0F172A] border border-[#C5A880]/50 rounded-2xl max-w-md w-full p-6 sm:p-8 shadow-2xl flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-[#C5A880]/20 text-[#C5A880] flex items-center justify-center mb-4 border border-[#C5A880]/40">
              <span className="material-symbols-outlined text-[36px]">task_alt</span>
            </div>

            <span className="font-label-sm text-[#C5A880] uppercase tracking-widest mb-1 text-xs font-bold">
              Demande Enregistrée au Secrétariat
            </span>
            <h3 className="font-headline-sm text-[#F8FAFC] text-2xl font-bold mb-3">
              Dossier Transmis avec Succès
            </h3>

            {submittedData && (
              <div className="w-full bg-[#131E33] border border-[#243252] rounded-xl p-4 text-left mb-5 text-xs space-y-2">
                <div className="flex justify-between border-b border-[#243252] pb-1.5">
                  <span className="text-[#94A3B8]">Référence Unique :</span>
                  <span className="font-mono font-bold text-[#C5A880]">{submittedData.id}</span>
                </div>
                <div className="flex justify-between border-b border-[#243252] pb-1.5">
                  <span className="text-[#94A3B8]">Demandeur :</span>
                  <span className="font-semibold text-[#F8FAFC]">{submittedData.civilite} {submittedData.nomComplet}</span>
                </div>
                <div className="flex justify-between border-b border-[#243252] pb-1.5">
                  <span className="text-[#94A3B8]">Modalité :</span>
                  <span className="font-semibold text-[#C5A880]">
                    {submittedData.mode === 'cabinet' ? 'En Cabinet (Douala Bonanjo)' : 'À distance (Visio / Tél)'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#94A3B8]">Date souhaitée :</span>
                  <span className="font-semibold text-[#F8FAFC]">{submittedData.dateRdv}</span>
                </div>
              </div>
            )}

            <p className="font-body-sm text-[#94A3B8] text-xs leading-relaxed mb-6">
              Votre requête a été enregistrée en toute confidentialité au secrétariat de Maître YOYA Yves. Un accusé de réception vous sera transmis et notre permanence vous rappellera sous 24h ouvrées.
            </p>

            <button
              onClick={handleCloseModal}
              className="w-full h-12 bg-[#C5A880] text-[#070A12] rounded-xl font-label-md uppercase tracking-wider hover:bg-[#D4AF37] transition-colors cursor-pointer font-bold text-xs"
              id="close-dialog"
              type="button"
            >
              Fermer et retourner au site
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
