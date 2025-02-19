export interface CountryTranslation {
  name: string
  description: string
  processingTime: string
}

export interface CountriesTranslations {
  [key: string]: {
    en: CountryTranslation
    fr: CountryTranslation
    ar: CountryTranslation
  }
}

export const countriesTranslations: CountriesTranslations = {
  spain: {
    en: {
      name: "Spain",
      description: "A vibrant country offering golden visa opportunities through real estate investment and business ventures.",
      processingTime: "3-4 months"
    },
    fr: {
      name: "Espagne",
      description: "Un pays dynamique offrant des opportunités de visa doré à travers l'investissement immobilier et les projets d'entreprise.",
      processingTime: "3-4 mois"
    },
    ar: {
      name: "إسبانيا",
      description: "بلد نابض بالحياة يقدم فرص التأشيرة الذهبية من خلال الاستثمار العقاري ومشاريع الأعمال.",
      processingTime: "3-4 أشهر"
    }
  },
  portugal: {
    en: {
      name: "Portugal",
      description: "Attractive residency options through investment in property, business, or cultural projects.",
      processingTime: "4-6 months"
    },
    fr: {
      name: "Portugal",
      description: "Options de résidence attrayantes à travers l'investissement dans l'immobilier, les entreprises ou les projets culturels.",
      processingTime: "4-6 mois"
    },
    ar: {
      name: "البرتغال",
      description: "خيارات إقامة جذابة من خلال الاستثمار في العقارات والأعمال والمشاريع الثقافية.",
      processingTime: "4-6 أشهر"
    }
  },
  france: {
    en: {
      name: "France",
      description: "A leading destination for business and immigration with robust economy and excellent quality of life.",
      processingTime: "10-15 days"
    },
    fr: {
      name: "France",
      description: "Une destination de premier choix pour les affaires et l'immigration avec une économie robuste et une excellente qualité de vie.",
      processingTime: "10-15 jours"
    },
    ar: {
      name: "فرنسا",
      description: "وجهة رائدة للأعمال والهجرة مع اقتصاد قوي وجودة حياة ممتازة.",
      processingTime: "10-15 يوم"
    }
  },
  belgium: {
    en: {
      name: "Belgium",
      description: "Strategic location in Europe with favorable business climate and immigration policies.",
      processingTime: "15-20 days"
    },
    fr: {
      name: "Belgique",
      description: "Emplacement stratégique en Europe avec un climat d'affaires favorable et des politiques d'immigration avantageuses.",
      processingTime: "15-20 jours"
    },
    ar: {
      name: "بلجيكا",
      description: "موقع استراتيجي في أوروبا مع مناخ أعمال مواتٍ وسياسات هجرة مناسبة.",
      processingTime: "15-20 يوم"
    }
  },
  netherlands: {
    en: {
      name: "Netherlands",
      description: "Innovation-driven economy with excellent infrastructure and startup opportunities.",
      processingTime: "15-20 days"
    },
    fr: {
      name: "Pays-Bas",
      description: "Économie axée sur l'innovation avec une excellente infrastructure et des opportunités pour les startups.",
      processingTime: "15-20 jours"
    },
    ar: {
      name: "هولندا",
      description: "اقتصاد مدفوع بالابتكار مع بنية تحتية ممتازة وفرص للشركات الناشئة.",
      processingTime: "15-20 يوم"
    }
  },
  germany: {
    en: {
      name: "Germany",
      description: "Europe's largest economy offering excellent business and career opportunities.",
      processingTime: "10-15 days"
    },
    fr: {
      name: "Allemagne",
      description: "La plus grande économie d'Europe offrant d'excellentes opportunités professionnelles et commerciales.",
      processingTime: "10-15 jours"
    },
    ar: {
      name: "ألمانيا",
      description: "أكبر اقتصاد في أوروبا يقدم فرصاً ممتازة للأعمال والمهن.",
      processingTime: "10-15 يوم"
    }
  },
  romania: {
    en: {
      name: "Romania",
      description: "Emerging market with growing business opportunities and affordable living costs.",
      processingTime: "15-20 days"
    },
    fr: {
      name: "Roumanie",
      description: "Marché émergent avec des opportunités d'affaires croissantes et un coût de vie abordable.",
      processingTime: "15-20 jours"
    },
    ar: {
      name: "رومانيا",
      description: "سوق ناشئة مع فرص أعمال متنامية وتكاليف معيشة معقولة.",
      processingTime: "15-20 يوم"
    }
  },
  italy: {
    en: {
      name: "Italy",
      description: "Rich cultural heritage combined with modern business opportunities and lifestyle.",
      processingTime: "15-20 days"
    },
    fr: {
      name: "Italie",
      description: "Riche patrimoine culturel combiné à des opportunités d'affaires modernes et un style de vie unique.",
      processingTime: "15-20 jours"
    },
    ar: {
      name: "إيطاليا",
      description: "تراث ثقافي غني مع فرص أعمال وأسلوب حياة عصري.",
      processingTime: "15-20 يوم"
    }
  }
} 