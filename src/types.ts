export type ScreenType = 'accueil' | 'domaines-d-expertise' | 'le-cabinet-et-avocat' | 'contact-et-consultation';

export type ClientType = 'particulier' | 'entreprise';

export type UrgenceLevel = 'normal' | 'urgent' | 'astreinte';

export type ConsultationMode = 'cabinet' | 'distance';

export interface ConsultationFormData {
  mode: ConsultationMode;
  clientType: ClientType;
  civilite: string;
  nomComplet: string;
  raisonSociale?: string;
  telephone: string;
  email: string;
  domaineJuridique: string;
  urgence: UrgenceLevel;
  dateRdv: string;
  creneauRdv: string;
  description: string;
  deontologie: boolean;
  createdAt?: string;
  id?: string;
}

export interface PracticeDomain {
  id: string;
  title: string;
  tag: string;
  category: 'affaires' | 'contentieux' | 'immobilier' | 'penal-social';
  icon: string;
  summary: string;
  jurisdictionBadge: string;
  jurisdictionIcon: string;
  items: string[];
}
