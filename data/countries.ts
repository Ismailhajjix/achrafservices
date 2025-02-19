export interface Country {
  key: string
  name: string
  flag: string
  description: string
  processingTime: string
  isPopular?: boolean
}

export const countriesData: Country[] = [
  {
    key: "spain",
    name: "Spain",
    flag: "https://flagcdn.com/w80/es.png",
    description: "A vibrant country offering golden visa opportunities through real estate investment and business ventures.",
    processingTime: "3-4 months",
    isPopular: true
  },
  {
    key: "portugal",
    name: "Portugal",
    flag: "https://flagcdn.com/w80/pt.png",
    description: "Attractive residency options through investment in property, business, or cultural projects.",
    processingTime: "4-6 months",
    isPopular: true
  },
  {
    key: "france",
    name: "France",
    flag: "https://flagcdn.com/w80/fr.png",
    description: "A leading destination for business and immigration with robust economy and excellent quality of life.",
    processingTime: "10-15 days",
    isPopular: true
  },
  {
    key: "belgium",
    name: "Belgium",
    flag: "https://flagcdn.com/w80/be.png",
    description: "Strategic location in Europe with favorable business climate and immigration policies.",
    processingTime: "15-20 days",
    isPopular: true
  },
  {
    key: "netherlands",
    name: "Netherlands",
    flag: "https://flagcdn.com/w80/nl.png",
    description: "Innovation-driven economy with excellent infrastructure and startup opportunities.",
    processingTime: "15-20 days",
    isPopular: true
  },
  {
    key: "germany",
    name: "Germany",
    flag: "https://flagcdn.com/w80/de.png",
    description: "Europe's largest economy offering excellent business and career opportunities.",
    processingTime: "10-15 days",
    isPopular: true
  },
  {
    key: "romania",
    name: "Romania",
    flag: "https://flagcdn.com/w80/ro.png",
    description: "Emerging market with growing business opportunities and affordable living costs.",
    processingTime: "15-20 days",
    isPopular: false
  },
  {
    key: "italy",
    name: "Italy",
    flag: "https://flagcdn.com/w80/it.png",
    description: "Rich cultural heritage combined with modern business opportunities and lifestyle.",
    processingTime: "15-20 days",
    isPopular: true
  }
] 