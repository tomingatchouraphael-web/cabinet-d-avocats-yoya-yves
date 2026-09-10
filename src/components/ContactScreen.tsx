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
    // Reset fields
    setNomComplet('');
    setRaisonSociale('');
    setTelephone('');
    setEmail('');
    setDescription('');
    setDeontologie(false);
  };

  return (
    <div className="flex flex-col w-full max-w-2xl mx-auto">
      {/* En-tête éditorial & Solennel */}
      <section className="px-4 sm:px-6 pt-4 pb-6">
        <div className="flex items-center gap-1.5 mb-1.5 flex-wrap">
          <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-[#fedeb2]/50 text-[#78603e] font-label-sm rounded uppercase tracking-widest text-[11px] font-semibold">
            <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>
              verified
            </span>
            Secrétariat Général
          </span>
          <span className="text-[#45464d] font-label-sm text-[11px]">• Bonanjo, Douala</span>
        </div>

        <h1 className="font-headline-lg-mobile text-[#0B1120] tracking-tight mb-2 text-2xl sm:text-3xl">
          Consultation Juridique &amp; Contact
        </h1>
        <p className="font-body-md text-[#45464d] leading-relaxed">
          Fixez un rendez-vous au cabinet à Douala, à distance par visioconférence sécurisée ou contactez directement notre secrétariat juridique.
        </p>

        {/* Statut de Disponibilité & Serment */}
        <div className="mt-4 p-3 bg-white rounded-xl shadow-[0_4px_20px_rgba(11,17,32,0.05)] border border-[#e2e8f0]/80 flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#725b38] opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#725b38]" />
            </span>
            <div className="flex flex-col">
              <span className="font-title-md text-[#0B1120] text-xs uppercase tracking-wider font-semibold">
                Permanence du Cabinet
              </span>
              <span className="font-body-sm text-[#45464d] text-[11px]">
                Dossiers traités sous 24h ouvrées
              </span>
            </div>
          </div>
          <div className="flex items-center gap-1 text-[#725b38]">
            <span className="material-symbols-outlined text-[18px]">lock</span>
            <span className="font-label-sm uppercase tracking-wider text-[11px] font-semibold">
              Secret Professionnel
            </span>
          </div>
        </div>
      </section>

      {/* Sélecteur de Modalité de Consultation */}
      <section className="px-4 sm:px-6 mb-4">
        <div className="p-1 bg-[#eceef0] rounded-xl flex gap-1">
          <button
            onClick={() => setMode('cabinet')}
            className={`flex-1 py-2.5 px-2 rounded-lg font-title-md text-xs sm:text-sm text-center transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
              mode === 'cabinet'
                ? 'bg-[#0B1120] text-white shadow-sm'
                : 'text-[#45464d] hover:text-[#0B1120]'
            }`}
            id="btn-cabinet"
            type="button"
          >
            <span className="material-symbols-outlined text-[18px]">domain</span>
            <span>En Cabinet (Douala Bonanjo)</span>
          </button>
          <button
            onClick={() => setMode('distance')}
            className={`flex-1 py-2.5 px-2 rounded-lg font-title-md text-xs sm:text-sm text-center transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
              mode === 'distance'
                ? 'bg-[#0B1120] text-white shadow-sm'
                : 'text-[#45464d] hover:text-[#0B1120]'
            }`}
            id="btn-distance"
            type="button"
          >
            <span className="material-symbols-outlined text-[18px]">videocam</span>
            <span>À Distance (Visio / Tél)</span>
          </button>
        </div>
      </section>

      {/* Formulaire de Consultation Interactif */}
      <section className="px-4 sm:px-6 mb-8">
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-xl p-4 sm:p-5 shadow-[0_10px_30px_-5px_rgba(11,17,32,0.06)] border border-[#e2e8f0]/80 flex flex-col gap-4"
          id="legal-consultation-form"
        >
          {/* Type de Clientèle */}
          <div>
            <label className="block font-label-md uppercase tracking-wider text-[#0B1120] mb-1.5 text-xs font-semibold">
              Qualité du demandeur
            </label>
            <div className="grid grid-cols-2 gap-2">
              <label
                className={`flex items-center gap-2 p-2.5 rounded-lg cursor-pointer transition-colors border ${
                  clientType === 'particulier'
                    ? 'bg-[#fedeb2]/30 text-[#78603e] border-[#725b38]/40'
                    : 'bg-[#f2f4f6] text-[#191c1e] border-transparent hover:bg-[#eceef0]'
                }`}
              >
                <input
                  type="radio"
                  name="client_type"
                  value="particulier"
                  checked={clientType === 'particulier'}
                  onChange={() => setClientType('particulier')}
                  className="accent-[#725b38] h-4 w-4"
                />
                <span className="font-title-md text-xs sm:text-sm font-semibold">Particulier</span>
              </label>

              <label
                className={`flex items-center gap-2 p-2.5 rounded-lg cursor-pointer transition-colors border ${
                  clientType === 'entreprise'
                    ? 'bg-[#fedeb2]/30 text-[#78603e] border-[#725b38]/40'
                    : 'bg-[#f2f4f6] text-[#191c1e] border-transparent hover:bg-[#eceef0]'
                }`}
              >
                <input
                  type="radio"
                  name="client_type"
                  value="entreprise"
                  checked={clientType === 'entreprise'}
                  onChange={() => setClientType('entreprise')}
                  className="accent-[#725b38] h-4 w-4"
                />
                <span className="font-title-md text-xs sm:text-sm font-semibold">Entreprise / Société</span>
              </label>
            </div>
          </div>

          {/* Civilité, Nom et Prénom */}
          <div className="grid grid-cols-3 gap-2">
            <div className="col-span-1">
              <label className="block font-label-md uppercase tracking-wider text-[#0B1120] mb-1.5 text-xs font-semibold" htmlFor="civilite">
                Civilité
              </label>
              <select
                id="civilite"
                name="civilite"
                value={civilite}
                onChange={(e) => setCivilite(e.target.value)}
                className="w-full h-11 px-2 bg-[#f2f4f6] text-[#191c1e] rounded-lg font-body-md text-sm border border-transparent focus:border-[#725b38]/40 focus:bg-white focus:outline-none"
              >
                <option value="Me">Me</option>
                <option value="M.">M.</option>
                <option value="Mme">Mme</option>
                <option value="Dr">Dr</option>
              </select>
            </div>
            <div className="col-span-2">
              <label className="block font-label-md uppercase tracking-wider text-[#0B1120] mb-1.5 text-xs font-semibold" htmlFor="nom_complet">
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
                className="w-full h-11 px-3 bg-[#f2f4f6] text-[#191c1e] rounded-lg font-body-md text-sm placeholder:text-[#45464d]/50 border border-transparent focus:border-[#725b38]/40 focus:bg-white focus:outline-none"
              />
            </div>
          </div>

          {/* Nom de la structure (conditionnel si entreprise) */}
          {clientType === 'entreprise' && (
            <div id="company-field" className="transition-all">
              <label className="block font-label-md uppercase tracking-wider text-[#0B1120] mb-1.5 text-xs font-semibold" htmlFor="raison_sociale">
                Raison Sociale / Entité *
              </label>
              <input
                id="raison_sociale"
                name="raison_sociale"
                type="text"
                required={clientType === 'entreprise'}
                value={raisonSociale}
                onChange={(e) => setRaisonSociale(e.target.value)}
                placeholder="Ex: Cameroun Agro Services SA"
                className="w-full h-11 px-3 bg-[#f2f4f6] text-[#191c1e] rounded-lg font-body-md text-sm placeholder:text-[#45464d]/50 border border-transparent focus:border-[#725b38]/40 focus:bg-white focus:outline-none"
              />
            </div>
          )}

          {/* Coordonnées Tél & Email */}
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex-1">
              <label className="block font-label-md uppercase tracking-wider text-[#0B1120] mb-1.5 text-xs font-semibold" htmlFor="telephone">
                Numéro de Téléphone *
              </label>
              <div className="flex items-center h-11 bg-[#f2f4f6] rounded-lg border border-transparent focus-within:border-[#725b38]/40 focus-within:bg-white">
                <div className="flex items-center gap-1 pl-3 pr-1 text-[#191c1e] font-title-md text-xs sm:text-sm shrink-0">
                  <span className="text-base">🇨🇲</span>
                  <span className="text-[#45464d]">+237</span>
                </div>
                <input
                  id="telephone"
                  name="telephone"
                  type="tel"
                  required
                  value={telephone}
                  onChange={(e) => setTelephone(e.target.value)}
                  placeholder="6XX XX XX XX"
                  className="w-full h-full bg-transparent px-2 font-body-md text-sm text-[#191c1e] placeholder:text-[#45464d]/50 focus:outline-none"
                />
              </div>
            </div>

            <div className="flex-1">
              <label className="block font-label-md uppercase tracking-wider text-[#0B1120] mb-1.5 text-xs font-semibold" htmlFor="email">
                Adresse E-mail *
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="contact@domaine.cm"
                className="w-full h-11 px-3 bg-[#f2f4f6] text-[#191c1e] rounded-lg font-body-md text-sm placeholder:text-[#45464d]/50 border border-transparent focus:border-[#725b38]/40 focus:bg-white focus:outline-none"
              />
            </div>
          </div>

          {/* Domaine Juridique Concerné */}
          <div>
            <label className="block font-label-md uppercase tracking-wider text-[#0B1120] mb-1.5 text-xs font-semibold" htmlFor="domaine_juridique">
              Domaine Juridique Concerné *
            </label>
            <div className="relative">
              <select
                id="domaine_juridique"
                name="domaine_juridique"
                required
                value={domaineJuridique}
                onChange={(e) => setDomaineJuridique(e.target.value)}
                className="w-full h-11 pl-3 pr-10 bg-[#f2f4f6] text-[#191c1e] rounded-lg font-body-md text-sm appearance-none border border-transparent focus:border-[#725b38]/40 focus:bg-white focus:outline-none"
              >
                <option value="" disabled>Sélectionnez un domaine d'intervention</option>
                <option value="affaires">Droit des Affaires &amp; Sociétés (OHADA)</option>
                <option value="foncier">Litige Foncier &amp; Immobilier</option>
                <option value="travail">Droit du Travail &amp; Relations Sociales</option>
                <option value="contentieux">Contentieux Civil, Commercial ou Pénal</option>
                <option value="fiscalite">Fiscalité des Entreprises &amp; Douanes</option>
                <option value="contrats">Rédaction de Contrats &amp; Protocoles</option>
                <option value="autre">Autre consultation générale</option>
              </select>
              <span className="material-symbols-outlined pointer-events-none absolute right-3 top-2.5 text-[#45464d] text-[20px]">
                expand_more
              </span>
            </div>
          </div>

          {/* Degré d'Urgence */}
          <div>
            <label className="block font-label-md uppercase tracking-wider text-[#0B1120] mb-1.5 text-xs font-semibold">
              Degré d'urgence
            </label>
            <div className="grid grid-cols-3 gap-2">
              <button
                type="button"
                onClick={() => setUrgence('normal')}
                className={`flex flex-col items-center justify-center p-2 rounded-lg cursor-pointer transition-all border ${
                  urgence === 'normal'
                    ? 'bg-[#131b2e] text-white border-[#131b2e]'
                    : 'bg-[#f2f4f6] text-[#191c1e] border-transparent hover:bg-[#eceef0]'
                }`}
              >
                <span className="material-symbols-outlined text-[20px] mb-1">calendar_today</span>
                <span className="font-label-sm text-[11px]">Normal</span>
              </button>

              <button
                type="button"
                onClick={() => setUrgence('urgent')}
                className={`flex flex-col items-center justify-center p-2 rounded-lg cursor-pointer transition-all border ${
                  urgence === 'urgent'
                    ? 'bg-[#131b2e] text-white border-[#131b2e]'
                    : 'bg-[#f2f4f6] text-[#191c1e] border-transparent hover:bg-[#eceef0]'
                }`}
              >
                <span className="material-symbols-outlined text-[20px] mb-1 text-[#B8860B]">alarm</span>
                <span className="font-label-sm text-[11px]">&lt; 48 Heures</span>
              </button>

              <button
                type="button"
                onClick={() => setUrgence('astreinte')}
                className={`flex flex-col items-center justify-center p-2 rounded-lg cursor-pointer transition-all border ${
                  urgence === 'astreinte'
                    ? 'bg-[#131b2e] text-white border-[#131b2e]'
                    : 'bg-[#f2f4f6] text-[#191c1e] border-transparent hover:bg-[#eceef0]'
                }`}
              >
                <span className="material-symbols-outlined text-[20px] mb-1 text-[#ba1a1a]">notification_important</span>
                <span className="font-label-sm text-[11px]">Procédure / GAV</span>
              </button>
            </div>
          </div>

          {/* Date & Créneau Souhaité */}
          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="block font-label-md uppercase tracking-wider text-[#0B1120] mb-1.5 text-xs font-semibold" htmlFor="date_rdv">
                Date souhaitée
              </label>
              <input
                id="date_rdv"
                name="date_rdv"
                type="date"
                required
                value={dateRdv}
                onChange={(e) => setDateRdv(e.target.value)}
                className="w-full h-11 px-2.5 bg-[#f2f4f6] text-[#191c1e] rounded-lg font-body-sm text-xs border border-transparent focus:border-[#725b38]/40 focus:bg-white focus:outline-none"
              />
            </div>
            <div>
              <label className="block font-label-md uppercase tracking-wider text-[#0B1120] mb-1.5 text-xs font-semibold" htmlFor="creneau_rdv">
                Créneau horaire
              </label>
              <select
                id="creneau_rdv"
                name="creneau_rdv"
                value={creneauRdv}
                onChange={(e) => setCreneauRdv(e.target.value)}
                className="w-full h-11 px-2 bg-[#f2f4f6] text-[#191c1e] rounded-lg font-body-sm text-xs border border-transparent focus:border-[#725b38]/40 focus:bg-white focus:outline-none"
              >
                <option value="matin_1">09h00 - 11h00</option>
                <option value="matin_2">11h00 - 13h00</option>
                <option value="aprem_1">14h00 - 16h00</option>
                <option value="aprem_2">16h00 - 18h00</option>
              </select>
            </div>
          </div>

          {/* Brève description du dossier */}
          <div>
            <label className="block font-label-md uppercase tracking-wider text-[#0B1120] mb-1.5 text-xs font-semibold" htmlFor="description">
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
              className="w-full p-3 bg-[#f2f4f6] text-[#191c1e] rounded-lg font-body-md text-sm placeholder:text-[#45464d]/50 border border-transparent focus:border-[#725b38]/40 focus:bg-white focus:outline-none resize-none"
            />
          </div>

          {/* Engagement Déontologique & Consentement */}
          <div className="p-3 bg-[#f2f4f6] rounded-lg flex items-start gap-2.5">
            <input
              type="checkbox"
              id="deontologie"
              name="deontologie"
              required
              checked={deontologie}
              onChange={(e) => setDeontologie(e.target.checked)}
              className="accent-[#725b38] h-4 w-4 mt-0.5 rounded cursor-pointer shrink-0"
            />
            <label htmlFor="deontologie" className="font-body-sm text-xs text-[#191c1e] cursor-pointer select-none leading-relaxed">
              J'atteste du caractère confidentiel de ma démarche conformément aux règles déontologiques de l'Ordre des Avocats du Cameroun.
            </label>
          </div>

          {/* Bouton d'action principal */}
          <button
            type="submit"
            className="w-full h-14 bg-gradient-to-r from-[#0B1120] via-[#131b2e] to-[#0B1120] text-white rounded-lg font-label-md uppercase tracking-widest shadow-[0_8px_20px_rgba(11,17,32,0.25)] hover:shadow-[0_12px_28px_rgba(11,17,32,0.35)] transition-all flex items-center justify-center gap-2 group relative overflow-hidden cursor-pointer active:scale-[0.99]"
            id="btn-submit-consultation"
          >
            <span className="absolute inset-0 bg-[#725b38]/15 opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="material-symbols-outlined text-[20px] text-[#fedeb2]">gavel</span>
            <span className="relative z-10 font-semibold text-xs sm:text-sm">Confirmer la demande de consultation</span>
            <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
              arrow_forward
            </span>
          </button>

          {/* Mention informative */}
          <p className="text-center font-label-sm text-[#45464d] text-[11px]">
            Le secrétariat vous contacte sous 24 heures ouvrées pour confirmation définitive du rendez-vous.
          </p>
        </form>
      </section>

      {/* L'Étude & Cadre de Réception (Atmosphère Visuelle) */}
      <section className="px-4 sm:px-6 mb-8">
        <div className="relative rounded-xl overflow-hidden shadow-md h-48 bg-[#0B1120] flex items-end p-4 sm:p-5">
          <img
            alt="Intérieur élégant et solennel du cabinet d'avocats de Maître YOYA Yves à Douala Bonanjo"
            className="absolute inset-0 w-full h-full object-cover opacity-35 mix-blend-luminosity"
            src={ASSETS.office}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] via-[#0B1120]/60 to-transparent" />
          <div className="relative z-10 flex flex-col">
            <span className="font-label-sm text-[#725b38] uppercase tracking-widest mb-0.5 text-[11px] font-semibold text-[#fedeb2]">
              L'Environnement de Consultation
            </span>
            <h2 className="font-headline-sm text-white text-lg sm:text-xl">
              Un cadre discret propice aux échanges stratégiques
            </h2>
          </div>
        </div>
      </section>

      {/* Coordonnées Directes & Permanence */}
      <section className="px-4 sm:px-6 mb-8 flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <h2 className="font-headline-sm text-[#0B1120] text-lg font-bold">Coordonnées &amp; Permanence</h2>
          <span className="font-label-sm text-[#725b38] uppercase tracking-wider text-[11px] font-semibold">
            Secrétariat
          </span>
        </div>

        {/* Carte Standard Téléphonique */}
        <a
          href={`tel:${CONTACT_INFO.phoneStandardRaw}`}
          className="p-4 bg-white rounded-xl shadow-sm border border-[#e2e8f0]/80 flex items-center justify-between group hover:bg-[#f2f4f6] transition-colors"
          id="link-call-standard"
        >
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-lg bg-[#eceef0] flex items-center justify-center text-[#0B1120] group-hover:bg-[#0B1120] group-hover:text-white transition-colors">
              <span className="material-symbols-outlined text-[22px]">phone</span>
            </div>
            <div className="flex flex-col">
              <span className="font-label-sm uppercase tracking-wider text-[#45464d] text-[10px] font-semibold">
                Ligne Standard Secrétariat
              </span>
              <span className="font-title-md text-[#0B1120] font-semibold">
                {CONTACT_INFO.phoneStandard}
              </span>
            </div>
          </div>
          <span className="material-symbols-outlined text-[#45464d] text-[20px] group-hover:text-[#725b38] group-hover:translate-x-0.5 transition-all">
            chevron_right
          </span>
        </a>

        {/* Carte Urgence / WhatsApp */}
        <a
          href={`https://wa.me/${CONTACT_INFO.phoneWhatsappRaw}?text=${encodeURIComponent(
            "Bonjour Maître YOYA Yves, je vous contacte concernant une demande de consultation juridique urgente."
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 bg-white rounded-xl shadow-sm border border-[#e2e8f0]/80 flex items-center justify-between group hover:bg-[#f2f4f6] transition-colors"
          id="link-whatsapp-urgence"
        >
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-lg bg-[#fedeb2]/40 flex items-center justify-center text-[#78603e] group-hover:bg-[#725b38] group-hover:text-white transition-colors">
              <span className="material-symbols-outlined text-[22px]">chat</span>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-label-sm uppercase tracking-wider text-[#725b38] text-[10px] font-semibold">
                  Permanence &amp; Astreinte
                </span>
                <span className="px-1.5 py-0.5 bg-[#ba1a1a]/10 text-[#ba1a1a] rounded font-label-sm text-[9px] uppercase tracking-wider font-bold">
                  Urgent
                </span>
              </div>
              <span className="font-title-md text-[#0B1120] font-semibold">
                {CONTACT_INFO.phoneWhatsapp} (WhatsApp)
              </span>
            </div>
          </div>
          <span className="material-symbols-outlined text-[#45464d] text-[20px] group-hover:text-[#725b38] group-hover:translate-x-0.5 transition-all">
            chevron_right
          </span>
        </a>

        {/* Carte Adresse & Localisation */}
        <div className="p-4 bg-white rounded-xl shadow-sm border border-[#e2e8f0]/80 flex flex-col gap-3">
          <div className="flex items-start gap-3">
            <div className="w-11 h-11 rounded-lg bg-[#eceef0] flex items-center justify-center text-[#0B1120] shrink-0">
              <span className="material-symbols-outlined text-[22px]">location_on</span>
            </div>
            <div className="flex flex-col min-w-0">
              <span className="font-label-sm uppercase tracking-wider text-[#45464d] text-[10px] font-semibold">
                Siège du Cabinet
              </span>
              <span className="font-title-md text-[#0B1120] font-semibold">
                {CONTACT_INFO.address}
              </span>
              <span className="font-body-sm text-[#45464d] text-xs">
                {CONTACT_INFO.city} ({CONTACT_INFO.bp})
              </span>
            </div>
          </div>

          {/* Map Embed Container */}
          <div
            className="w-full h-36 rounded-lg bg-cover bg-center overflow-hidden relative shadow-inner"
            data-location="Bonanjo, Douala, Cameroon"
            style={{ backgroundImage: `url('${ASSETS.map}')` }}
          >
            <div className="absolute inset-0 bg-[#0B1120]/20 pointer-events-none" />
            <div className="absolute bottom-2 left-2 px-2.5 py-1 bg-[#f7f9fb]/95 backdrop-blur rounded font-label-sm text-xs text-[#0B1120] shadow-sm flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px] text-[#725b38]">pin_drop</span>
              <span className="font-medium">Quartier Administratif de Bonanjo</span>
            </div>
          </div>
        </div>

        {/* Horaires d'Ouverture */}
        <div className="p-4 bg-[#f2f4f6] rounded-xl flex items-center gap-3 border border-[#e2e8f0]/60">
          <div className="w-10 h-10 rounded-lg bg-[#e0e3e5] flex items-center justify-center text-[#0B1120] shrink-0">
            <span className="material-symbols-outlined text-[20px]">schedule</span>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="font-title-md text-xs sm:text-sm text-[#0B1120] font-semibold">
                Horaires d'Accueil
              </span>
              <span className="font-label-sm text-[#725b38] text-xs font-semibold">
                Lun - Ven : 8h00 - 18h00
              </span>
            </div>
            <span className="font-body-sm text-[#45464d] text-[11px]">
              Samedi sur rendez-vous express • Dimanche &amp; Fériés astreinte pénale uniquement
            </span>
          </div>
        </div>
      </section>

      {/* Modal de confirmation / Toast de soumission */}
      {isSubmitted && (
        <div className="fixed inset-0 z-50 bg-[#0B1120]/60 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl max-w-sm w-full p-6 shadow-2xl flex flex-col items-center text-center border border-[#e2e8f0]">
            <div className="w-14 h-14 rounded-full bg-[#fedeb2]/50 text-[#725b38] flex items-center justify-center mb-3">
              <span className="material-symbols-outlined text-[32px]">task_alt</span>
            </div>

            <span className="font-label-sm text-[#725b38] uppercase tracking-widest mb-1 text-xs font-semibold">
              Dossier Enregistré
            </span>
            <h3 className="font-headline-sm text-[#0B1120] text-xl font-bold mb-2">
              Demande Transmise
            </h3>

            {submittedData && (
              <div className="w-full bg-[#f2f4f6] rounded-lg p-3 text-left mb-4 text-xs space-y-1">
                <div className="flex justify-between">
                  <span className="text-[#45464d]">Référence :</span>
                  <span className="font-semibold text-[#0B1120]">{submittedData.id}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#45464d]">Demandeur :</span>
                  <span className="font-medium text-[#0B1120]">{submittedData.civilite} {submittedData.nomComplet}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#45464d]">Modalité :</span>
                  <span className="font-medium text-[#725b38]">
                    {submittedData.mode === 'cabinet' ? 'En Cabinet (Douala)' : 'À distance (Visio / Tél)'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#45464d]">Date prévue :</span>
                  <span className="font-medium text-[#0B1120]">{submittedData.dateRdv}</span>
                </div>
              </div>
            )}

            <p className="font-body-sm text-[#45464d] text-xs leading-relaxed mb-5">
              Votre requête a été transmise en toute confidentialité au secrétariat de Maître YOYA Yves. Un accusé de réception vous est adressé par SMS et email.
            </p>

            <button
              onClick={handleCloseModal}
              className="w-full h-11 bg-[#0B1120] text-white rounded-lg font-label-md uppercase tracking-wider hover:bg-[#131b2e] transition-colors cursor-pointer font-semibold"
              id="close-dialog"
              type="button"
            >
              Fermer
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
