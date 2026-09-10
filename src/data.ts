import { PracticeDomain } from './types';

export const ASSETS = {
  logo: 'https://lh3.googleusercontent.com/aida/AEtjO1WRjCQPsq9HLkJOic6eIgQRPtMJAJyNfJyx5XWWFeAkNZcYXCCBxblX28Blq1k-Szg2ph750E0sECaiRLynXisGSn6gWr8JfEWQbJlhZeCp9g7_KPWuvFL_UgSMMOJl6ZRUVVXbITd9nr3f-OWgIPNBihsbwVZCdqMyS78A309ARbnPXt-fpyH08Wr2ATFprKcLnscwLo0o2_18ADymL5wisSvjsXSPHHoOf9-1jXuh_BZhqg0znWWeDw',
  portrait: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCLXUytSgVbuE9CHII_c59RpkKGdD_ZNKTxuO5pNvoebCHVsqcL69t8Hr3e8VXD-fsxqgNQsmt3iQmGVsDTTjc_MNcQad5cO-2Wn2VT6pSfXHk67gLPrOQYC6ByPhNF4kaQmuMQHHcJy3J4C5jTLuTJWYOyISghpFpOjuvPV8rSwFQ_ZsZcJJmkcq0Zc66_dWmx-sNJDWX7Lwa3jKbpxi8FIhRnpmzJH7cAVSZMtYIUd97xbSt6jZTh',
  office: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCWWCpJyFV_KigYN4UtVhi9-ceuS4dRwxvBYDbsR3pmTUS_ulyYSvtMogCYSS-l6REAFQBPh5Ts01mRNokRm7hSjU7oIn8oZBlTEZp4CGsHWJ2iX9hipq7qbqOJH1_adxLXRDXoHPd__YkSko5d51NuKKFWhr8_E6COlv1-w0kQ8P3fe1Y3ckfifIIkjgl3l6TPij-zEqwNqZExJneU7_guQu4lF3lQ-3u2RvwulXCrdpRvErNnLdaH',
  map: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDav3goiCBaCt96J0u7fDmM6AdlZ_rb0V3JYgmwGJvapI2T0ZFZvcees9gy9j25YUZrLzN_unT3Gx_KpdePvLCvx9nFau3JDOu4Hvc9_RRqxoR8pKTNL6h0Ad5IJVN1a1P0ZoTqSF8952oZZoYVtwM0fWnxrvak_yEgfqrl94pSNHW7WppaScZ-b6YXA_h-RfoeLNHkDJwNPsIlvBqr-ABedj5FsW3xyCfeyF8lWdiRUx1rxb_uSWSw'
};

export const CONTACT_INFO = {
  lawyerName: 'Maître YOYA Yves',
  title: 'Avocat au Barreau du Cameroun',
  role: 'Fondateur & Associé Gérant',
  phoneStandard: '+237 233 42 18 20',
  phoneStandardRaw: '+237233421820',
  phoneWhatsapp: '+237 677 84 92 10',
  phoneWhatsappRaw: '237677849210',
  email: 'contact@cabinet-yoyayves.cm',
  address: 'Rue des Ministères, Bonanjo',
  city: 'Douala - République du Cameroun',
  bp: 'B.P. 1542 Douala',
  yaoundeAddress: 'Quartier Bastos, Yaoundé'
};

export const PRACTICE_DOMAINS: PracticeDomain[] = [
  {
    id: 'affaires',
    title: 'Droit des Affaires & Droit OHADA',
    tag: 'Zone OHADA',
    category: 'affaires',
    icon: 'corporate_fare',
    summary: 'Accompagnement stratégique pour la sécurisation de vos opérations commerciales et corporatives en Afrique subsaharienne.',
    jurisdictionBadge: 'Juridiction Actes Uniformes',
    jurisdictionIcon: 'verified',
    items: [
      'Constitution de sociétés à Douala, Yaoundé & succursales régionales',
      'Rédaction & négociation de contrats commerciaux complexes',
      'Gouvernance d\'entreprise, restructurations & fusions-acquisitions',
      'Recouvrement de créances selon les actes uniformes OHADA'
    ]
  },
  {
    id: 'contentieux',
    title: 'Contentieux des Affaires & Arbitrage',
    tag: 'Haute Instance',
    category: 'contentieux',
    icon: 'gavel',
    summary: 'Plaidorie d\'élite et arbitrage institutionnel pour la résolution des litiges commerciaux d\'envergure.',
    jurisdictionBadge: 'CCJA & Cour Suprême',
    jurisdictionIcon: 'balance',
    items: [
      'Représentation devant les tribunaux d\'instance et de grande instance',
      'Procédures d\'appel et pourvois devant la Cour Suprême du Cameroun',
      'Contentieux communautaire devant la CCJA (Cour Commune de Justice et d\'Arbitrage)',
      'Arbitrage d\'affaires (GICAM, CCI) et médiation précontentieuse'
    ]
  },
  {
    id: 'immobilier',
    title: 'Droit Foncier & Immobilier au Cameroun',
    tag: 'Titre & Propriété',
    category: 'immobilier',
    icon: 'domain',
    summary: 'Sécurisation rigoureuse de vos actifs immobiliers et défense de vos droits réels face aux risques fonciers locaux.',
    jurisdictionBadge: 'Audit Foncier Cadastral',
    jurisdictionIcon: 'real_estate_agent',
    items: [
      'Procédures d\'immatriculation directe et obtention de Titres Fonciers',
      'Purge des hypothèques, privilèges et radiation de prénotations judiciaires',
      'Gestion des contentieux d\'expropriation pour cause d\'utilité publique',
      'Rédaction & audit de baux commerciaux, industriels et d\'habitation'
    ]
  },
  {
    id: 'penal',
    title: 'Droit Pénal des Affaires & Général',
    tag: 'Défense Pénale',
    category: 'penal-social',
    icon: 'shield',
    summary: 'Protection sans concession des dirigeants, cadres et entités morales confrontés à la justice répressive.',
    jurisdictionBadge: 'Urgence 24h/24 Procédure',
    jurisdictionIcon: 'lock_person',
    items: [
      'Défense pénale et traitement des infractions économiques et financières',
      'Escroquerie, abus de confiance, détournement et faux en écritures de commerce',
      'Assistance immédiate en garde à vue (SED, PJ, commissariats)',
      'Suivi scrupuleux de l\'instruction criminelle devant le Juge d\'Instruction'
    ]
  },
  {
    id: 'travail',
    title: 'Droit du Travail & Ressources Humaines',
    tag: 'Relations Sociales',
    category: 'penal-social',
    icon: 'badge',
    summary: 'Pilotage juridique des ressources humaines et sécurisation du dialogue social en entreprise.',
    jurisdictionBadge: 'Conformité Salariale',
    jurisdictionIcon: 'groups',
    items: [
      'Conception de contrats de travail (locaux, expatriés, cadres dirigeants)',
      'Gestion des ruptures conventionnelles, licenciements économiques et disciplinaires',
      'Contentieux prud\'homaux et conciliation auprès de l\'Inspection du Travail',
      'Audit de conformité sociale au Code du Travail camerounais'
    ]
  },
  {
    id: 'fiscalite',
    title: 'Conseil Fiscal & Investissements Internationaux',
    tag: 'Zone CEMAC',
    category: 'affaires',
    icon: 'public',
    summary: 'Ingénierie juridique transfrontalière et optimisation des projets d\'implantation en Afrique centrale.',
    jurisdictionBadge: 'Fiscalité & Change BEAC',
    jurisdictionIcon: 'account_balance_wallet',
    items: [
      'Accompagnement fiscal et réglementaire des investisseurs étrangers',
      'Application de la Loi sur les Incitations à l\'Investissement Privé au Cameroun',
      'Obtention des agréments sous-régionaux CEMAC et conformité des changes BEAC',
      'Gestion des contentieux fiscaux et demandes de rescrit préalable'
    ]
  }
];
