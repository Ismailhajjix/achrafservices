export interface CommonTranslation {
  popular: string
  processingTime: string
}

export interface CommonTranslations {
  en: CommonTranslation
  fr: CommonTranslation
  ar: CommonTranslation
}

export const commonTranslations: CommonTranslations = {
  en: {
    popular: "Popular",
    processingTime: "Processing Time:"
  },
  fr: {
    popular: "Populaire",
    processingTime: "Délai de Traitement:"
  },
  ar: {
    popular: "شائع",
    processingTime: "وقت المعالجة:"
  }
} 