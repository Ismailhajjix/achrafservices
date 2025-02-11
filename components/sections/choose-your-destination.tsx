"use client"

import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { ChevronDown, Clock, Euro, GraduationCap, Briefcase, Home, Shield, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/forms/button"
import { useState, useEffect } from "react"
import { Card, CardHeader, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

interface CountryStats {
  processingTime: string
  successRate: string
  yearlyVisas: string
}

interface Country {
  name: string
  flag: string
  description: string
  isPopular?: boolean
  stats: CountryStats
}

interface ImmigrationPath {
  title: string
  description: string
  requirements: string[]
  processingTime: string
  cost: string
}

interface CountryDetails {
  name: string
  flag: string
  overview: string
  benefits: string[]
  immigrationPaths: ImmigrationPath[]
  keyRequirements: string[]
  laborMarket: {
    inDemandSectors: string[]
    averageSalary: string
    unemploymentRate: string
  }
  livingCosts: {
    rent: string
    utilities: string
    food: string
    transport: string
  }
  education: {
    universities: number
    internationalStudents: string
    averageTuition: string
  }
}

// Update the countries array to limit description lengths
const countries = [
  {
    name: "Germany",
    flag: "/flags/germany.png",
    description: "Europe's powerhouse economy with world-class education system. Your gateway to endless opportunities.",
    isPopular: true
  },
  {
    name: "France",
    flag: "/flags/france.png",
    description: "Blend of timeless culture and modern innovation. Experience the art of living in Europe.",
    isPopular: true
  },
  {
    name: "Spain",
    flag: "/flags/spain.png",
    description: "Sun-soaked paradise with vibrant Mediterranean lifestyle. Where tech meets perfect work-life balance.",
    isPopular: true
  },
  {
    name: "Netherlands",
    flag: "/flags/netherlands.png",
    description: "Leading digital innovation hub with English-friendly cities. Where progress meets heritage.",
    isPopular: true
  },
  {
    name: "Italy",
    flag: "/flags/italy.png",
    description: "Rich heritage meets contemporary opportunities. Experience la dolce vita in Europe's heart.",
    isPopular: true
  },
  {
    name: "Sweden",
    flag: "/flags/sweden.png",
    description: "Pioneer in sustainability with exceptional quality of life. Where innovation meets social welfare.",
    isPopular: true
  },
  {
    name: "Canada",
    flag: "/flags/canada.png",
    description: "Multicultural haven with world-class opportunities. Where nature meets economic prosperity.",
    isPopular: true
  },
  {
    name: "UK",
    flag: "/flags/uk.png",
    description: "Global hub of educational and business excellence. Where tradition empowers future innovation.",
    isPopular: true
  },
  {
    name: "Belgium",
    flag: "/flags/belgium.png",
    description: "A multicultural hub at the heart of Europe, offering excellent quality of life, strong social security, and opportunities in international organizations.",
    isPopular: true
  },
  {
    name: "Portugal",
    flag: "/flags/Portugal.png",
    description: "A welcoming country with a growing tech scene, offering digital nomad opportunities, golden visa program, and exceptional quality of life.",
    isPopular: true
  },
  {
    name: "Switzerland",
    flag: "/flags/switzerland.png",
    description: "A global leader in banking, innovation, and quality of life, offering high salaries, excellent healthcare, and breathtaking natural beauty.",
    isPopular: true
  },
  {
    name: "Austria",
    flag: "/flags/austria.png",
    description: "A country combining rich cultural heritage with modern innovation, offering high living standards, excellent social security, and diverse opportunities.",
    isPopular: true
  },
  {
    name: "Greece",
    flag: "/flags/Greece.png",
    description: "A Mediterranean paradise offering digital nomad opportunities, rich cultural heritage, and an emerging tech ecosystem with affordable living costs.",
    isPopular: true
  },
  {
    name: "Norway",
    flag: "/flags/norway.png",
    description: "A Scandinavian nation offering exceptional quality of life, strong social welfare, and abundant opportunities in technology and natural resources.",
    isPopular: true
  },
  {
    name: "Denmark",
    flag: "/flags/denmark.png",
    description: "A Scandinavian leader in innovation and sustainability, offering high living standards, excellent work-life balance, and strong social security.",
    isPopular: true
  },
  {
    name: "Finland",
    flag: "/flags/finland.png",
    description: "The world's happiest country offering exceptional quality of life, cutting-edge technology sector, and world-class education system.",
    isPopular: true
  },
  {
    name: "Ireland",
    flag: "/flags/ireland.png",
    description: "A thriving tech hub with strong economic growth, offering excellent education and a welcoming English-speaking environment.",
    isPopular: false
  },
  {
    name: "Luxembourg",
    flag: "/flags/luxembourg.png",
    description: "A global financial center offering high living standards, multilingual environment, and strategic location in the heart of Europe.",
    isPopular: false
  },
  {
    name: "Malta",
    flag: "/flags/malta.png",
    description: "A Mediterranean island nation offering excellent climate, English-speaking environment, and growing opportunities in gaming and tech sectors.",
    isPopular: false
  },
  {
    name: "Cyprus",
    flag: "/flags/cyprus.png",
    description: "A Mediterranean business hub offering excellent climate, strategic location, and attractive tax regime for international professionals.",
    isPopular: false
  },
  {
    name: "Poland",
    flag: "/flags/poland.png",
    description: "A rapidly growing economy in Central Europe offering strong IT sector, affordable living costs, and rich cultural heritage.",
    isPopular: false
  },
  {
    name: "Czech Republic",
    flag: "/flags/czech-republic.png",
    description: "A central European gem offering high quality of life, strong economy, and beautiful historic surroundings with modern opportunities.",
    isPopular: false
  },
  {
    name: "Hungary",
    flag: "/flags/hungary.png",
    description: "A Central European nation offering rich cultural heritage, growing tech scene, and affordable high quality of life.",
    isPopular: false
  },
  {
    name: "Romania",
    flag: "/flags/romania.png",
    description: "An emerging tech hub with fast internet speeds, growing IT sector, and competitive advantages for digital businesses.",
    isPopular: false
  },
  {
    name: "Bulgaria",
    flag: "/flags/bulgaria.png",
    description: "An emerging digital hub offering affordable living costs, growing tech sector, and beautiful Black Sea coastline.",
    isPopular: false
  },
  {
    name: "Croatia",
    flag: "/flags/Croatia.png",
    description: "Adriatic pearl with thriving tourism sector. Digital nomad haven with Mediterranean charm.",
    isPopular: false
  },
  {
    name: "Estonia",
    flag: "/flags/estonia.png",
    description: "Digital society pioneer with e-Residency program. Leading startup ecosystem in Northern Europe.",
    isPopular: false
  },
  {
    name: "Latvia",
    flag: "/flags/latvia.png",
    description: "Baltic tech hub with rich cultural heritage. Fast-growing fintech and IT sectors.",
    isPopular: false
  },
  {
    name: "Lithuania",
    flag: "/flags/lithuania.png",
    description: "Fintech powerhouse with startup-friendly environment. Rapidly growing IT and innovation hub.",
    isPopular: false
  },
  {
    name: "Slovenia",
    flag: "/flags/slovenia.png",
    description: "A green technology leader combining Alpine beauty with Mediterranean charm, offering high living standards and innovation opportunities.",
    isPopular: false
  },
  {
    name: "Slovakia",
    flag: "/flags/slovakia.png",
    description: "Central European automotive hub. Strong manufacturing sector with growing IT industry.",
    isPopular: false
  },
  {
    name: "Iceland",
    flag: "/flags/Iceland.png",
    description: "Nordic paradise with renewable energy leadership. Innovation hub with exceptional quality of life.",
    isPopular: false
  }
]

const countryDetails: Record<string, CountryDetails> = {
  "Germany": {
    name: "Germany",
    flag: "/flags/germany.png",
    overview: "Europe's largest economy offering excellent work-life balance, high living standards, and world-class education.",
    benefits: [
      "Strong social security system",
      "Free public education including universities",
      "Excellent healthcare system",
      "High employment rate",
      "Rich cultural heritage"
    ],
    immigrationPaths: [
      {
        title: "Job Seeker Visa",
        description: "6-month visa to search for employment in Germany",
        requirements: [
          "Bachelor's degree or higher",
          "Proof of funds (€5,682 for 6 months)",
          "Basic German language skills (A1)",
          "Health insurance coverage"
        ],
        processingTime: "2-4 months",
        cost: "€75"
      },
      {
        title: "Blue Card EU",
        description: "Work permit for highly qualified professionals",
        requirements: [
          "University degree",
          "Employment contract with €56,400/year minimum salary",
          "Health insurance"
        ],
        processingTime: "1-3 months",
        cost: "€110"
      },
      {
        title: "Student Visa",
        description: "For university studies in Germany",
        requirements: [
          "University admission",
          "Proof of funds (€10,332/year)",
          "Health insurance",
          "Basic German (A1) or English (B2)"
        ],
        processingTime: "3-6 weeks",
        cost: "€75"
      }
    ],
    keyRequirements: [
      "Valid passport",
      "No criminal record",
      "Health insurance coverage",
      "Proof of financial stability",
      "German language skills (varies by visa type)"
    ],
    laborMarket: {
      inDemandSectors: [
        "IT & Software Development",
        "Engineering",
        "Healthcare",
        "Skilled Trades",
        "Research & Development"
      ],
      averageSalary: "€56,985/year",
      unemploymentRate: "3.2%"
    },
    livingCosts: {
      rent: "€800-1,500/month",
      utilities: "€200-300/month",
      food: "€300-400/month",
      transport: "€70-100/month"
    },
    education: {
      universities: 400,
      internationalStudents: "411,000+",
      averageTuition: "€0-3,000/year"
    }
  },
  "France": {
    name: "France",
    flag: "/flags/france.png",
    overview: "A global cultural hub offering exceptional quality of life, world-renowned education, and diverse career opportunities in the heart of Europe.",
    benefits: [
      "Universal healthcare system",
      "Rich cultural heritage",
      "High-quality education",
      "Strong work-life balance",
      "Central European location"
    ],
    immigrationPaths: [
      {
        title: "Talent Passport",
        description: "Multi-year residence permit for skilled professionals",
        requirements: [
          "Master's degree or higher",
          "Job contract related to your field",
          "Minimum salary threshold",
          "Health insurance"
        ],
        processingTime: "2-3 months",
        cost: "€225"
      },
      {
        title: "Student Visa",
        description: "Long-stay visa for higher education in France",
        requirements: [
          "University acceptance letter",
          "Proof of funds (€615/month)",
          "Health insurance",
          "Basic French language skills"
        ],
        processingTime: "2-4 weeks",
        cost: "€99"
      },
      {
        title: "Work Permit Visa",
        description: "For those with employment contracts in France",
        requirements: [
          "Valid job offer",
          "Employer sponsorship",
          "Relevant qualifications",
          "Health insurance"
        ],
        processingTime: "6-8 weeks",
        cost: "€180"
      }
    ],
    keyRequirements: [
      "Valid passport",
      "No criminal record",
      "Health insurance",
      "Proof of accommodation",
      "Financial self-sufficiency"
    ],
    laborMarket: {
      inDemandSectors: [
        "Technology",
        "Tourism & Hospitality",
        "Healthcare",
        "Finance",
        "Engineering"
      ],
      averageSalary: "€39,300/year",
      unemploymentRate: "7.1%"
    },
    livingCosts: {
      rent: "€700-1,400/month",
      utilities: "€150-250/month",
      food: "€300-400/month",
      transport: "€65-75/month"
    },
    education: {
      universities: 250,
      internationalStudents: "370,000+",
      averageTuition: "€170-650/year"
    }
  },
  "Spain": {
    name: "Spain",
    flag: "/flags/spain.png",
    overview: "A vibrant Mediterranean country offering an exceptional quality of life, growing tech scene, and rich cultural experiences.",
    benefits: [
      "High quality of life",
      "Affordable living costs",
      "Universal healthcare",
      "Rich cultural heritage",
      "Mediterranean lifestyle"
    ],
    immigrationPaths: [
      {
        title: "Digital Nomad Visa",
        description: "For remote workers and digital professionals",
        requirements: [
          "Proof of remote work",
          "Minimum income €2,000/month",
          "Health insurance",
          "Clean criminal record"
        ],
        processingTime: "1-2 months",
        cost: "€140"
      },
      {
        title: "Non-Lucrative Visa",
        description: "For those with sufficient passive income",
        requirements: [
          "Proof of funds (€27,115/year)",
          "Health insurance",
          "No intention to work in Spain",
          "Clean criminal record"
        ],
        processingTime: "2-3 months",
        cost: "€160"
      },
      {
        title: "Student Visa",
        description: "For studies in Spanish institutions",
        requirements: [
          "Acceptance letter",
          "Proof of funds",
          "Health insurance",
          "Basic Spanish skills"
        ],
        processingTime: "1-2 months",
        cost: "€120"
      }
    ],
    keyRequirements: [
      "Valid passport",
      "Clean criminal record",
      "Health insurance",
      "Proof of financial means",
      "Purpose of stay documentation"
    ],
    laborMarket: {
      inDemandSectors: [
        "Technology",
        "Tourism",
        "Healthcare",
        "Teaching",
        "Engineering"
      ],
      averageSalary: "€32,000/year",
      unemploymentRate: "12.7%"
    },
    livingCosts: {
      rent: "€600-1,200/month",
      utilities: "€120-180/month",
      food: "€250-350/month",
      transport: "€40-60/month"
    },
    education: {
      universities: 76,
      internationalStudents: "125,000+",
      averageTuition: "€750-2,500/year"
    }
  },
  "Netherlands": {
    name: "Netherlands",
    flag: "/flags/netherlands.png",
    overview: "A highly innovative country with excellent quality of life, strong digital infrastructure, and an English-friendly environment.",
    benefits: [
      "English widely spoken",
      "Excellent work-life balance",
      "High-quality healthcare",
      "Strong digital infrastructure",
      "Bike-friendly cities"
    ],
    immigrationPaths: [
      {
        title: "Highly Skilled Migrant",
        description: "For qualified professionals with job offers",
        requirements: [
          "Employment contract",
          "Minimum salary requirement",
          "Relevant qualifications",
          "Company sponsorship"
        ],
        processingTime: "2-4 weeks",
        cost: "€320"
      },
      {
        title: "Orientation Year",
        description: "For recent graduates from top universities",
        requirements: [
          "Master's/PhD from top 200 university",
          "Graduated within last 3 years",
          "Proof of funds",
          "Health insurance"
        ],
        processingTime: "2-3 weeks",
        cost: "€192"
      },
      {
        title: "Startup Visa",
        description: "For innovative entrepreneurs",
        requirements: [
          "Partnership with Dutch facilitator",
          "Innovative business plan",
          "Sufficient resources",
          "Health insurance"
        ],
        processingTime: "4-6 weeks",
        cost: "€350"
      }
    ],
    keyRequirements: [
      "Valid passport",
      "Clean criminal record",
      "Health insurance",
      "Proof of sufficient income",
      "Housing registration"
    ],
    laborMarket: {
      inDemandSectors: [
        "IT & Technology",
        "Engineering",
        "Healthcare",
        "Finance",
        "Creative Industries"
      ],
      averageSalary: "€44,000/year",
      unemploymentRate: "3.5%"
    },
    livingCosts: {
      rent: "€900-1,800/month",
      utilities: "€150-250/month",
      food: "€300-400/month",
      transport: "€80-100/month"
    },
    education: {
      universities: 85,
      internationalStudents: "115,000+",
      averageTuition: "€8,000-20,000/year"
    }
  },
  "Italy": {
    name: "Italy",
    flag: "/flags/italy.png",
    overview: "A country rich in culture, history, and innovation, offering unique opportunities in fashion, design, and technology sectors.",
    benefits: [
      "Rich cultural heritage",
      "Mediterranean lifestyle",
      "Excellent healthcare",
      "World-class cuisine",
      "Strong fashion & design industry"
    ],
    immigrationPaths: [
      {
        title: "EU Blue Card",
        description: "For highly qualified professionals",
        requirements: [
          "University degree",
          "Employment contract",
          "Minimum salary requirement",
          "Health insurance"
        ],
        processingTime: "2-3 months",
        cost: "€250"
      },
      {
        title: "Self-Employment Visa",
        description: "For entrepreneurs and freelancers",
        requirements: [
          "Business plan",
          "Sufficient funds",
          "Relevant qualifications",
          "Health insurance"
        ],
        processingTime: "3-4 months",
        cost: "€200"
      },
      {
        title: "Study Visa",
        description: "For higher education in Italy",
        requirements: [
          "University acceptance",
          "Proof of accommodation",
          "Financial means",
          "Health insurance"
        ],
        processingTime: "1-2 months",
        cost: "€150"
      }
    ],
    keyRequirements: [
      "Valid passport",
      "Clean criminal record",
      "Health insurance",
      "Proof of accommodation",
      "Financial stability"
    ],
    laborMarket: {
      inDemandSectors: [
        "Fashion & Design",
        "Tourism",
        "Manufacturing",
        "Technology",
        "Agriculture"
      ],
      averageSalary: "€35,000/year",
      unemploymentRate: "8.1%"
    },
    livingCosts: {
      rent: "€600-1,300/month",
      utilities: "€150-200/month",
      food: "€280-380/month",
      transport: "€50-70/month"
    },
    education: {
      universities: 97,
      internationalStudents: "107,000+",
      averageTuition: "€900-4,000/year"
    }
  },
  "Sweden": {
    name: "Sweden",
    flag: "/flags/sweden.png",
    overview: "A leader in innovation and sustainability, offering high living standards, excellent work-life balance, and free education.",
    benefits: [
      "High quality of life",
      "Strong social welfare",
      "Free education",
      "Innovation-friendly",
      "Environmental leadership"
    ],
    immigrationPaths: [
      {
        title: "Work Permit",
        description: "For professionals with job offers",
        requirements: [
          "Job offer",
          "Competitive salary",
          "Union approval",
          "Health insurance"
        ],
        processingTime: "2-4 months",
        cost: "SEK 2,000"
      },
      {
        title: "Student Residence",
        description: "For international students",
        requirements: [
          "University acceptance",
          "Proof of funds (SEK 8,568/month)",
          "Health insurance",
          "Application fee payment"
        ],
        processingTime: "2-3 months",
        cost: "SEK 1,500"
      },
      {
        title: "Self-Employed",
        description: "For business owners and entrepreneurs",
        requirements: [
          "Business plan",
          "Customer base",
          "Sufficient funds",
          "Relevant experience"
        ],
        processingTime: "3-6 months",
        cost: "SEK 2,000"
      }
    ],
    keyRequirements: [
      "Valid passport",
      "Clean criminal record",
      "Health insurance",
      "Financial stability",
      "Purpose of stay documentation"
    ],
    laborMarket: {
      inDemandSectors: [
        "IT & Technology",
        "Engineering",
        "Healthcare",
        "Education",
        "Green Technology"
      ],
      averageSalary: "SEK 44,000/month",
      unemploymentRate: "7.5%"
    },
    livingCosts: {
      rent: "SEK 8,000-15,000/month",
      utilities: "SEK 1,000-1,500/month",
      food: "SEK 3,000-4,000/month",
      transport: "SEK 900/month"
    },
    education: {
      universities: 39,
      internationalStudents: "35,000+",
      averageTuition: "Free for EU/EEA"
    }
  },
  "Canada": {
    name: "Canada",
    flag: "/flags/canada.png",
    overview: "A welcoming multicultural society offering high quality of life, excellent education, and strong economic opportunities.",
    benefits: [
      "Universal healthcare",
      "High quality of life",
      "Multicultural society",
      "Strong economy",
      "Beautiful nature"
    ],
    immigrationPaths: [
      {
        title: "Express Entry",
        description: "Fast-track immigration for skilled workers",
        requirements: [
          "Education credentials",
          "Language proficiency",
          "Work experience",
          "Proof of funds"
        ],
        processingTime: "6 months",
        cost: "CAD 1,325"
      },
      {
        title: "Study Permit",
        description: "For international students",
        requirements: [
          "Acceptance letter",
          "Proof of funds",
          "Clean criminal record",
          "Medical exam"
        ],
        processingTime: "8-12 weeks",
        cost: "CAD 150"
      },
      {
        title: "Start-up Visa",
        description: "For entrepreneurs with innovative business ideas",
        requirements: [
          "Support from designated organization",
          "Sufficient funds",
          "Language proficiency",
          "Business plan"
        ],
        processingTime: "12-16 months",
        cost: "CAD 2,075"
      }
    ],
    keyRequirements: [
      "Valid passport",
      "Clean criminal record",
      "Medical exam",
      "Biometrics",
      "Language proficiency"
    ],
    laborMarket: {
      inDemandSectors: [
        "Healthcare",
        "Technology",
        "Engineering",
        "Finance",
        "Skilled Trades"
      ],
      averageSalary: "CAD 65,000/year",
      unemploymentRate: "5.1%"
    },
    livingCosts: {
      rent: "CAD 1,200-2,500/month",
      utilities: "CAD 150-250/month",
      food: "CAD 400-600/month",
      transport: "CAD 100-150/month"
    },
    education: {
      universities: 96,
      internationalStudents: "640,000+",
      averageTuition: "CAD 20,000-30,000/year"
    }
  },
  "UK": {
    name: "UK",
    flag: "/flags/uk.png",
    overview: "A global leader in education and innovation, offering diverse opportunities in finance, technology, and creative industries.",
    benefits: [
      "World-class education",
      "Strong job market",
      "Rich cultural heritage",
      "Innovation hub",
      "Multicultural society"
    ],
    immigrationPaths: [
      {
        title: "Skilled Worker Visa",
        description: "For professionals with job offers",
        requirements: [
          "Job offer from licensed sponsor",
          "Skill level RQF3 or above",
          "English language proficiency",
          "Minimum salary threshold"
        ],
        processingTime: "3 weeks",
        cost: "£625-1,423"
      },
      {
        title: "Student Visa",
        description: "For international students",
        requirements: [
          "University acceptance",
          "Proof of funds",
          "English language proficiency",
          "Health surcharge payment"
        ],
        processingTime: "3 weeks",
        cost: "£348"
      },
      {
        title: "High Potential Individual",
        description: "For recent graduates of top global universities",
        requirements: [
          "Degree from eligible university",
          "Graduation within last 5 years",
          "English language proficiency",
          "Maintenance funds"
        ],
        processingTime: "3 weeks",
        cost: "£715"
      }
    ],
    keyRequirements: [
      "Valid passport",
      "Clean criminal record",
      "English proficiency",
      "Financial requirements",
      "Health surcharge payment"
    ],
    laborMarket: {
      inDemandSectors: [
        "Technology",
        "Healthcare",
        "Finance",
        "Engineering",
        "Education"
      ],
      averageSalary: "£35,000/year",
      unemploymentRate: "3.8%"
    },
    livingCosts: {
      rent: "£800-2,000/month",
      utilities: "£150-200/month",
      food: "£200-300/month",
      transport: "£150-200/month"
    },
    education: {
      universities: 130,
      internationalStudents: "605,000+",
      averageTuition: "£10,000-38,000/year"
    }
  },
  "Estonia": {
    name: "Estonia",
    flag: "/flags/estonia.png",
    overview: "A digital pioneer offering e-Residency and a thriving startup ecosystem, Estonia combines technological innovation with medieval charm.",
    benefits: [
      "Digital society and e-governance",
      "E-Residency program",
      "Strong startup ecosystem",
      "High-quality digital infrastructure",
      "English widely used in business"
    ],
    immigrationPaths: [
      {
        title: "Startup Visa",
        description: "For innovative startup founders and entrepreneurs",
        requirements: [
          "Innovative business plan",
          "Minimum investment of €1,500",
          "Support from startup committee",
          "Health insurance"
        ],
        processingTime: "1-2 months",
        cost: "€100"
      },
      {
        title: "Digital Nomad Visa",
        description: "For remote workers and digital professionals",
        requirements: [
          "Remote work capability",
          "Minimum monthly income €3,504",
          "Employment contract or business",
          "Health insurance"
        ],
        processingTime: "2-4 weeks",
        cost: "€80"
      },
      {
        title: "Long-term Study Visa",
        description: "For international students",
        requirements: [
          "University acceptance",
          "Proof of funds (€4,500/year)",
          "Health insurance",
          "Accommodation arrangement"
        ],
        processingTime: "2-3 weeks",
        cost: "€100"
      }
    ],
    keyRequirements: [
      "Valid passport",
      "Clean criminal record",
      "Health insurance",
      "Proof of income/funds",
      "Purpose of stay documentation"
    ],
    laborMarket: {
      inDemandSectors: [
        "IT & Software Development",
        "Cybersecurity",
        "E-commerce",
        "Fintech",
        "Digital Marketing"
      ],
      averageSalary: "€1,800/month",
      unemploymentRate: "5.7%"
    },
    livingCosts: {
      rent: "€400-800/month",
      utilities: "€100-150/month",
      food: "€250-350/month",
      transport: "€30-50/month"
    },
    education: {
      universities: 20,
      internationalStudents: "12,000+",
      averageTuition: "€1,660-7,500/year"
    }
  },
  "Latvia": {
    name: "Latvia",
    flag: "/flags/latvia.png",
    overview: "A Baltic gem offering strong IT infrastructure, growing fintech sector, and rich cultural heritage with affordable living costs.",
    benefits: [
      "Fast-growing IT sector",
      "Strong fintech ecosystem",
      "Rich cultural heritage",
      "Affordable living costs",
      "EU member benefits"
    ],
    immigrationPaths: [
      {
        title: "Startup Visa Latvia",
        description: "For innovative startup founders",
        requirements: [
          "Innovative business idea",
          "Business plan",
          "Minimum investment proof",
          "Health insurance"
        ],
        processingTime: "1-2 months",
        cost: "€100"
      },
      {
        title: "EU Blue Card",
        description: "For highly qualified professionals",
        requirements: [
          "Higher education",
          "Employment contract",
          "Minimum salary requirement",
          "Health insurance"
        ],
        processingTime: "2-3 months",
        cost: "€150"
      },
      {
        title: "Student Residence Permit",
        description: "For international students",
        requirements: [
          "University acceptance",
          "Proof of funds",
          "Health insurance",
          "Accommodation proof"
        ],
        processingTime: "30-45 days",
        cost: "€100"
      }
    ],
    keyRequirements: [
      "Valid passport",
      "Clean criminal record",
      "Health insurance",
      "Financial means proof",
      "Purpose of stay documentation"
    ],
    laborMarket: {
      inDemandSectors: [
        "Information Technology",
        "Financial Services",
        "Manufacturing",
        "Logistics",
        "Tourism"
      ],
      averageSalary: "€1,500/month",
      unemploymentRate: "6.5%"
    },
    livingCosts: {
      rent: "€350-700/month",
      utilities: "€100-150/month",
      food: "€250-350/month",
      transport: "€30-50/month"
    },
    education: {
      universities: 30,
      internationalStudents: "8,000+",
      averageTuition: "€2,000-7,000/year"
    }
  },
  "Croatia": {
    name: "Croatia",
    flag: "/flags/Croatia.png",
    overview: "A Mediterranean paradise offering digital nomad opportunities, thriving tourism sector, and exceptional quality of life.",
    benefits: [
      "Digital nomad friendly",
      "Beautiful coastline",
      "High quality of life",
      "Growing IT sector",
      "Rich cultural heritage"
    ],
    immigrationPaths: [
      {
        title: "Digital Nomad Visa",
        description: "For remote workers and digital professionals",
        requirements: [
          "Proof of remote work",
          "Minimum monthly income €2,300",
          "Health insurance",
          "Clean criminal record"
        ],
        processingTime: "2-4 weeks",
        cost: "€100"
      },
      {
        title: "Work Permit",
        description: "For professionals with job offers",
        requirements: [
          "Employment contract",
          "Proof of qualifications",
          "Health insurance",
          "Accommodation proof"
        ],
        processingTime: "1-2 months",
        cost: "€150"
      },
      {
        title: "Student Residence",
        description: "For international students",
        requirements: [
          "University acceptance",
          "Proof of funds",
          "Health insurance",
          "Accommodation arrangement"
        ],
        processingTime: "3-4 weeks",
        cost: "€100"
      }
    ],
    keyRequirements: [
      "Valid passport",
      "Clean criminal record",
      "Health insurance",
      "Proof of funds",
      "Purpose of stay documentation"
    ],
    laborMarket: {
      inDemandSectors: [
        "Tourism & Hospitality",
        "IT & Digital",
        "Maritime Industry",
        "Agriculture",
        "Manufacturing"
      ],
      averageSalary: "€1,200/month",
      unemploymentRate: "7.2%"
    },
    livingCosts: {
      rent: "€400-800/month",
      utilities: "€100-150/month",
      food: "€250-350/month",
      transport: "€40-60/month"
    },
    education: {
      universities: 40,
      internationalStudents: "7,000+",
      averageTuition: "€3,000-10,000/year"
    }
  },
  "Lithuania": {
    name: "Lithuania",
    flag: "/flags/lithuania.png",
    overview: "A fintech hub with a rapidly growing startup ecosystem, offering excellent infrastructure and high quality of life.",
    benefits: [
      "Leading fintech hub",
      "Strong startup ecosystem",
      "High-speed internet",
      "Modern infrastructure",
      "Quality education"
    ],
    immigrationPaths: [
      {
        title: "Startup Visa",
        description: "For innovative startup founders",
        requirements: [
          "Innovative business plan",
          "Minimum capital requirement",
          "Business viability proof",
          "Health insurance"
        ],
        processingTime: "1-2 months",
        cost: "€100"
      },
      {
        title: "Blue Card",
        description: "For highly qualified professionals",
        requirements: [
          "Higher education",
          "Employment contract",
          "Minimum salary threshold",
          "Health insurance"
        ],
        processingTime: "2-3 months",
        cost: "€120"
      },
      {
        title: "Study Visa",
        description: "For international students",
        requirements: [
          "University acceptance",
          "Proof of funds",
          "Health insurance",
          "Accommodation proof"
        ],
        processingTime: "30 days",
        cost: "€100"
      }
    ],
    keyRequirements: [
      "Valid passport",
      "Clean criminal record",
      "Health insurance",
      "Financial stability proof",
      "Purpose of stay documentation"
    ],
    laborMarket: {
      inDemandSectors: [
        "Fintech",
        "IT & Software",
        "Biotechnology",
        "Manufacturing",
        "Logistics"
      ],
      averageSalary: "€1,600/month",
      unemploymentRate: "6.3%"
    },
    livingCosts: {
      rent: "€400-800/month",
      utilities: "€100-150/month",
      food: "€250-350/month",
      transport: "€30-50/month"
    },
    education: {
      universities: 20,
      internationalStudents: "9,000+",
      averageTuition: "€2,500-8,000/year"
    }
  },
  "Slovenia": {
    name: "Slovenia",
    flag: "/flags/slovenia.png",
    overview: "A green technology leader combining Alpine beauty with Mediterranean charm, offering high living standards and innovation opportunities.",
    benefits: [
      "High living standards",
      "Green technology leader",
      "Strong innovation sector",
      "Natural beauty",
      "Central European location"
    ],
    immigrationPaths: [
      {
        title: "EU Blue Card",
        description: "For highly qualified professionals",
        requirements: [
          "University degree",
          "Employment contract",
          "Minimum salary requirement",
          "Health insurance"
        ],
        processingTime: "1-2 months",
        cost: "€100"
      },
      {
        title: "Business Visa",
        description: "For entrepreneurs and business owners",
        requirements: [
          "Business plan",
          "Investment proof",
          "Company registration",
          "Health insurance"
        ],
        processingTime: "2-3 months",
        cost: "€150"
      },
      {
        title: "Study Permit",
        description: "For international students",
        requirements: [
          "University acceptance",
          "Proof of funds",
          "Health insurance",
          "Accommodation proof"
        ],
        processingTime: "30-45 days",
        cost: "€100"
      }
    ],
    keyRequirements: [
      "Valid passport",
      "Clean criminal record",
      "Health insurance",
      "Financial means proof",
      "Purpose of stay documentation"
    ],
    laborMarket: {
      inDemandSectors: [
        "Green Technology",
        "IT & Software",
        "Manufacturing",
        "Tourism",
        "Research & Development"
      ],
      averageSalary: "€2,000/month",
      unemploymentRate: "4.7%"
    },
    livingCosts: {
      rent: "€400-800/month",
      utilities: "€120-180/month",
      food: "€250-350/month",
      transport: "€30-50/month"
    },
    education: {
      universities: 25,
      internationalStudents: "5,000+",
      averageTuition: "€2,000-6,000/year"
    }
  },
  "Slovakia": {
    name: "Slovakia",
    flag: "/flags/slovakia.png",
    overview: "An automotive industry leader with a growing IT sector, offering affordable living costs and strategic central European location.",
    benefits: [
      "Strong manufacturing sector",
      "Growing IT industry",
      "Affordable living",
      "Strategic location",
      "Rich cultural heritage"
    ],
    immigrationPaths: [
      {
        title: "EU Blue Card",
        description: "For highly qualified professionals",
        requirements: [
          "University degree",
          "Employment contract",
          "Minimum salary requirement",
          "Health insurance"
        ],
        processingTime: "1-2 months",
        cost: "€100"
      },
      {
        title: "Business License",
        description: "For entrepreneurs and self-employed",
        requirements: [
          "Business plan",
          "Financial resources",
          "Trade license",
          "Health insurance"
        ],
        processingTime: "2-3 months",
        cost: "€150"
      },
      {
        title: "Student Visa",
        description: "For international students",
        requirements: [
          "University acceptance",
          "Proof of funds",
          "Health insurance",
          "Accommodation proof"
        ],
        processingTime: "30-45 days",
        cost: "€100"
      }
    ],
    keyRequirements: [
      "Valid passport",
      "Clean criminal record",
      "Health insurance",
      "Financial stability proof",
      "Purpose of stay documentation"
    ],
    laborMarket: {
      inDemandSectors: [
        "Automotive Industry",
        "Manufacturing",
        "IT & Software",
        "Electronics",
        "Logistics"
      ],
      averageSalary: "€1,300/month",
      unemploymentRate: "6.1%"
    },
    livingCosts: {
      rent: "€350-700/month",
      utilities: "€100-150/month",
      food: "€200-300/month",
      transport: "€30-50/month"
    },
    education: {
      universities: 35,
      internationalStudents: "12,000+",
      averageTuition: "€2,000-5,000/year"
    }
  },
  "Iceland": {
    name: "Iceland",
    flag: "/flags/Iceland.png",
    overview: "A Nordic paradise leading in renewable energy and innovation, offering exceptional quality of life and stunning natural beauty.",
    benefits: [
      "Renewable energy leader",
      "High quality of life",
      "Strong social security",
      "Natural wonders",
      "Innovation-friendly environment"
    ],
    immigrationPaths: [
      {
        title: "Work Permit",
        description: "For qualified professionals",
        requirements: [
          "Job contract",
          "Relevant qualifications",
          "Employer sponsorship",
          "Health insurance"
        ],
        processingTime: "2-3 months",
        cost: "ISK 15,000"
      },
      {
        title: "Student Residence",
        description: "For international students",
        requirements: [
          "University acceptance",
          "Proof of funds",
          "Health insurance",
          "Housing arrangement"
        ],
        processingTime: "1-2 months",
        cost: "ISK 12,000"
      },
      {
        title: "Startup Entrepreneur",
        description: "For innovative business founders",
        requirements: [
          "Business plan",
          "Sufficient capital",
          "Innovation focus",
          "Health insurance"
        ],
        processingTime: "2-4 months",
        cost: "ISK 20,000"
      }
    ],
    keyRequirements: [
      "Valid passport",
      "Clean criminal record",
      "Health insurance",
      "Financial stability proof",
      "Purpose of stay documentation"
    ],
    laborMarket: {
      inDemandSectors: [
        "Renewable Energy",
        "Tourism",
        "Technology",
        "Research",
        "Marine Industries"
      ],
      averageSalary: "ISK 700,000/month",
      unemploymentRate: "4.2%"
    },
    livingCosts: {
      rent: "ISK 150,000-300,000/month",
      utilities: "ISK 20,000-30,000/month",
      food: "ISK 80,000-120,000/month",
      transport: "ISK 15,000-25,000/month"
    },
    education: {
      universities: 7,
      internationalStudents: "2,500+",
      averageTuition: "ISK 150,000-750,000/year"
    }
  },
  "Ireland": {
    name: "Ireland",
    flag: "/flags/ireland.png",
    overview: "A thriving tech hub with strong economic growth, offering excellent education and a welcoming English-speaking environment.",
    benefits: [
      "English-speaking country",
      "Strong tech sector",
      "High quality education",
      "Rich cultural heritage",
      "EU member benefits"
    ],
    immigrationPaths: [
      {
        title: "Critical Skills Permit",
        description: "Fast-track work permit for in-demand skills",
        requirements: [
          "Job offer in eligible occupation",
          "Minimum salary €32,000/year",
          "Relevant qualifications",
          "Health insurance"
        ],
        processingTime: "6-8 weeks",
        cost: "€1,000"
      },
      {
        title: "Student Visa",
        description: "For international students",
        requirements: [
          "University acceptance",
          "Proof of funds (€7,000/year)",
          "Health insurance",
          "English proficiency"
        ],
        processingTime: "4-6 weeks",
        cost: "€300"
      },
      {
        title: "Startup Entrepreneur",
        description: "For innovative business founders",
        requirements: [
          "€50,000 funding secured",
          "Business plan",
          "Innovation focus",
          "Health insurance"
        ],
        processingTime: "8-10 weeks",
        cost: "€350"
      }
    ],
    keyRequirements: [
      "Valid passport",
      "Clean criminal record",
      "Health insurance",
      "Proof of funds",
      "Purpose of stay documentation"
    ],
    laborMarket: {
      inDemandSectors: [
        "Information Technology",
        "Pharmaceuticals",
        "Financial Services",
        "Healthcare",
        "Engineering"
      ],
      averageSalary: "€45,000/year",
      unemploymentRate: "4.8%"
    },
    livingCosts: {
      rent: "€1,200-2,000/month",
      utilities: "€150-200/month",
      food: "€300-400/month",
      transport: "€100-150/month"
    },
    education: {
      universities: 34,
      internationalStudents: "32,000+",
      averageTuition: "€9,000-25,000/year"
    }
  },
  "Luxembourg": {
    name: "Luxembourg",
    flag: "/flags/luxembourg.png",
    overview: "A global financial center offering high living standards, multilingual environment, and strategic location in the heart of Europe.",
    benefits: [
      "Highest GDP per capita",
      "Multilingual society",
      "Strategic location",
      "Strong financial sector",
      "High quality of life"
    ],
    immigrationPaths: [
      {
        title: "EU Blue Card",
        description: "For highly qualified professionals",
        requirements: [
          "Higher education qualification",
          "Employment contract",
          "Minimum salary €78,336/year",
          "Health insurance"
        ],
        processingTime: "3 months",
        cost: "€80"
      },
      {
        title: "Investor Visa",
        description: "For significant investments in Luxembourg",
        requirements: [
          "Investment plan",
          "Minimum €500,000 investment",
          "Business experience",
          "Clean criminal record"
        ],
        processingTime: "6-8 months",
        cost: "€200"
      },
      {
        title: "Student Permit",
        description: "For higher education",
        requirements: [
          "University acceptance",
          "Proof of funds",
          "Health insurance",
          "Accommodation proof"
        ],
        processingTime: "2-3 months",
        cost: "€50"
      }
    ],
    keyRequirements: [
      "Valid passport",
      "Clean criminal record",
      "Health insurance",
      "Financial stability",
      "Language skills"
    ],
    laborMarket: {
      inDemandSectors: [
        "Financial Services",
        "IT & Technology",
        "Legal Services",
        "Consulting",
        "EU Institutions"
      ],
      averageSalary: "€65,000/year",
      unemploymentRate: "5.2%"
    },
    livingCosts: {
      rent: "€1,500-2,500/month",
      utilities: "€200-300/month",
      food: "€400-500/month",
      transport: "€50/month"
    },
    education: {
      universities: 3,
      internationalStudents: "6,000+",
      averageTuition: "€400-800/year"
    }
  },
  "Malta": {
    name: "Malta",
    flag: "/flags/malta.png",
    overview: "A Mediterranean island nation offering excellent climate, English-speaking environment, and growing opportunities in gaming and tech sectors.",
    benefits: [
      "English co-official language",
      "Mediterranean lifestyle",
      "Growing tech hub",
      "Tax advantages",
      "EU member benefits"
    ],
    immigrationPaths: [
      {
        title: "Key Employee Initiative",
        description: "Fast-track permit for specialized roles",
        requirements: [
          "Minimum salary €30,000/year",
          "Relevant qualifications",
          "Company endorsement",
          "Health insurance"
        ],
        processingTime: "5 days",
        cost: "€300"
      },
      {
        title: "Digital Nomad Visa",
        description: "For remote workers",
        requirements: [
          "Minimum income €2,700/month",
          "Remote work proof",
          "Health insurance",
          "Accommodation proof"
        ],
        processingTime: "2-3 weeks",
        cost: "€300"
      },
      {
        title: "Student Visa",
        description: "For higher education",
        requirements: [
          "Course acceptance",
          "Proof of funds",
          "Health insurance",
          "Accommodation"
        ],
        processingTime: "2-4 weeks",
        cost: "€100"
      }
    ],
    keyRequirements: [
      "Valid passport",
      "Clean criminal record",
      "Health insurance",
      "Financial means",
      "Purpose of stay documentation"
    ],
    laborMarket: {
      inDemandSectors: [
        "iGaming",
        "Financial Services",
        "IT & Software",
        "Tourism",
        "Maritime"
      ],
      averageSalary: "€28,000/year",
      unemploymentRate: "3.2%"
    },
    livingCosts: {
      rent: "€800-1,200/month",
      utilities: "€100-150/month",
      food: "€300-400/month",
      transport: "€50/month"
    },
    education: {
      universities: 1,
      internationalStudents: "12,000+",
      averageTuition: "€8,500-10,800/year"
    }
  },
  "Cyprus": {
    name: "Cyprus",
    flag: "/flags/cyprus.png",
    overview: "A Mediterranean business hub offering excellent climate, strategic location, and attractive tax regime for international professionals.",
    benefits: [
      "Strategic location",
      "Tax advantages",
      "Year-round sunshine",
      "Growing business hub",
      "High quality of life"
    ],
    immigrationPaths: [
      {
        title: "Employment Permit",
        description: "For skilled professionals",
        requirements: [
          "Job contract",
          "Minimum salary requirements",
          "Qualifications",
          "Health insurance"
        ],
        processingTime: "1-2 months",
        cost: "€200"
      },
      {
        title: "Digital Nomad Visa",
        description: "For remote workers",
        requirements: [
          "Minimum income €3,500/month",
          "Remote work proof",
          "Health insurance",
          "Clean criminal record"
        ],
        processingTime: "3-4 weeks",
        cost: "€150"
      },
      {
        title: "Student Visa",
        description: "For higher education",
        requirements: [
          "University acceptance",
          "Proof of funds",
          "Health insurance",
          "Accommodation proof"
        ],
        processingTime: "4-6 weeks",
        cost: "€100"
      }
    ],
    keyRequirements: [
      "Valid passport",
      "Clean criminal record",
      "Health insurance",
      "Financial stability",
      "Purpose of stay documentation"
    ],
    laborMarket: {
      inDemandSectors: [
        "Financial Services",
        "Tourism",
        "Real Estate",
        "Technology",
        "Shipping"
      ],
      averageSalary: "€25,000/year",
      unemploymentRate: "6.4%"
    },
    livingCosts: {
      rent: "€600-1,000/month",
      utilities: "€120-180/month",
      food: "€300-400/month",
      transport: "€40/month"
    },
    education: {
      universities: 8,
      internationalStudents: "17,000+",
      averageTuition: "€6,500-8,500/year"
    }
  },
  "Poland": {
    name: "Poland",
    flag: "/flags/poland.png",
    overview: "A rapidly growing economy in Central Europe offering strong IT sector, affordable living costs, and rich cultural heritage.",
    benefits: [
      "Strong economic growth",
      "Affordable living",
      "Rich history",
      "Growing IT hub",
      "Central location"
    ],
    immigrationPaths: [
      {
        title: "Work Permit",
        description: "For skilled professionals",
        requirements: [
          "Job contract",
          "Employer sponsorship",
          "Qualifications proof",
          "Health insurance"
        ],
        processingTime: "1-2 months",
        cost: "PLN 440"
      },
      {
        title: "Business Visa",
        description: "For entrepreneurs",
        requirements: [
          "Business plan",
          "Proof of funds",
          "Market analysis",
          "Health insurance"
        ],
        processingTime: "2-3 months",
        cost: "PLN 340"
      },
      {
        title: "Student Visa",
        description: "For higher education",
        requirements: [
          "University acceptance",
          "Proof of funds",
          "Health insurance",
          "Accommodation proof"
        ],
        processingTime: "2-4 weeks",
        cost: "PLN 300"
      }
    ],
    keyRequirements: [
      "Valid passport",
      "Clean criminal record",
      "Health insurance",
      "Financial means",
      "Purpose of stay documentation"
    ],
    laborMarket: {
      inDemandSectors: [
        "IT & Software",
        "Manufacturing",
        "Finance",
        "Logistics",
        "Construction"
      ],
      averageSalary: "PLN 5,900/month",
      unemploymentRate: "5.4%"
    },
    livingCosts: {
      rent: "PLN 2,000-3,500/month",
      utilities: "PLN 600-800/month",
      food: "PLN 1,000-1,500/month",
      transport: "PLN 100-150/month"
    },
    education: {
      universities: 400,
      internationalStudents: "78,000+",
      averageTuition: "PLN 2,000-14,000/year"
    }
  },
  "Czech Republic": {
    name: "Czech Republic",
    flag: "/flags/czech-republic.png",
    overview: "A central European gem offering high quality of life, strong economy, and beautiful historic surroundings with modern opportunities.",
    benefits: [
      "High living standards",
      "Strong economy",
      "Rich culture",
      "Central location",
      "Affordable living"
    ],
    immigrationPaths: [
      {
        title: "Employee Card",
        description: "Combined work and residence permit",
        requirements: [
          "Job contract",
          "Qualification proof",
          "Health insurance",
          "Clean criminal record"
        ],
        processingTime: "2-3 months",
        cost: "CZK 5,000"
      },
      {
        title: "Business Visa",
        description: "For entrepreneurs",
        requirements: [
          "Business plan",
          "Financial resources",
          "Health insurance",
          "Local address"
        ],
        processingTime: "3-4 months",
        cost: "CZK 1,000"
      },
      {
        title: "Student Visa",
        description: "For higher education",
        requirements: [
          "University acceptance",
          "Proof of funds",
          "Health insurance",
          "Accommodation"
        ],
        processingTime: "2 months",
        cost: "CZK 2,500"
      }
    ],
    keyRequirements: [
      "Valid passport",
      "Clean criminal record",
      "Health insurance",
      "Financial stability",
      "Purpose of stay documentation"
    ],
    laborMarket: {
      inDemandSectors: [
        "IT & Software",
        "Manufacturing",
        "Engineering",
        "Automotive",
        "Services"
      ],
      averageSalary: "CZK 38,000/month",
      unemploymentRate: "3.5%"
    },
    livingCosts: {
      rent: "CZK 15,000-25,000/month",
      utilities: "CZK 3,000-5,000/month",
      food: "CZK 6,000-8,000/month",
      transport: "CZK 550-1,000/month"
    },
    education: {
      universities: 70,
      internationalStudents: "45,000+",
      averageTuition: "CZK 0-350,000/year"
    }
  },
  "Hungary": {
    name: "Hungary",
    flag: "/flags/hungary.png",
    overview: "A Central European nation offering rich cultural heritage, growing tech scene, and affordable high quality of life.",
    benefits: [
      "Low living costs",
      "Rich culture",
      "Growing tech scene",
      "Central location",
      "Thermal spa culture"
    ],
    immigrationPaths: [
      {
        title: "Work Permit",
        description: "For skilled professionals",
        requirements: [
          "Job contract",
          "Qualification proof",
          "Health insurance",
          "Housing proof"
        ],
        processingTime: "1-2 months",
        cost: "HUF 60,000"
      },
      {
        title: "White Card",
        description: "For digital nomads",
        requirements: [
          "Remote work proof",
          "Minimum income",
          "Health insurance",
          "Clean criminal record"
        ],
        processingTime: "30 days",
        cost: "HUF 30,000"
      },
      {
        title: "Student Visa",
        description: "For higher education",
        requirements: [
          "University acceptance",
          "Proof of funds",
          "Health insurance",
          "Accommodation"
        ],
        processingTime: "3-4 weeks",
        cost: "HUF 18,000"
      }
    ],
    keyRequirements: [
      "Valid passport",
      "Clean criminal record",
      "Health insurance",
      "Financial means",
      "Purpose of stay documentation"
    ],
    laborMarket: {
      inDemandSectors: [
        "IT & Technology",
        "Automotive",
        "Manufacturing",
        "Healthcare",
        "Tourism"
      ],
      averageSalary: "HUF 400,000/month",
      unemploymentRate: "3.9%"
    },
    livingCosts: {
      rent: "HUF 150,000-250,000/month",
      utilities: "HUF 35,000-50,000/month",
      food: "HUF 80,000-120,000/month",
      transport: "HUF 9,500/month"
    },
    education: {
      universities: 65,
      internationalStudents: "35,000+",
      averageTuition: "HUF 600,000-3,000,000/year"
    }
  },
  "Romania": {
    name: "Romania",
    flag: "/flags/romania.png",
    overview: "An emerging tech hub with fast internet speeds, growing IT sector, and competitive advantages for digital businesses.",
    benefits: [
      "Fast-growing IT sector",
      "Affordable living",
      "Fast internet",
      "Rich culture",
      "EU member benefits"
    ],
    immigrationPaths: [
      {
        title: "EU Blue Card",
        description: "For highly qualified professionals",
        requirements: [
          "Higher education",
          "Employment contract",
          "Minimum salary requirement",
          "Health insurance"
        ],
        processingTime: "2-3 months",
        cost: "RON 450"
      },
      {
        title: "Digital Nomad Visa",
        description: "For remote workers",
        requirements: [
          "Remote work proof",
          "Minimum income €3,300/month",
          "Health insurance",
          "Clean criminal record"
        ],
        processingTime: "30 days",
        cost: "RON 500"
      },
      {
        title: "Study Visa",
        description: "For international students",
        requirements: [
          "University acceptance",
          "Proof of funds",
          "Health insurance",
          "Accommodation proof"
        ],
        processingTime: "30-45 days",
        cost: "RON 300"
      }
    ],
    keyRequirements: [
      "Valid passport",
      "Clean criminal record",
      "Health insurance",
      "Financial stability",
      "Purpose of stay documentation"
    ],
    laborMarket: {
      inDemandSectors: [
        "IT & Software",
        "Engineering",
        "BPO",
        "Manufacturing",
        "Finance"
      ],
      averageSalary: "RON 5,000/month",
      unemploymentRate: "5.5%"
    },
    livingCosts: {
      rent: "RON 1,500-3,000/month",
      utilities: "RON 500-700/month",
      food: "RON 1,000-1,500/month",
      transport: "RON 80-150/month"
    },
    education: {
      universities: 90,
      internationalStudents: "25,000+",
      averageTuition: "RON 2,000-9,000/year"
    }
  },
  "Bulgaria": {
    name: "Bulgaria",
    flag: "/flags/bulgaria.png",
    overview: "An emerging digital hub offering affordable living costs, growing tech sector, and beautiful Black Sea coastline.",
    benefits: [
      "Low living costs",
      "Growing tech sector",
      "EU membership",
      "Black Sea coast",
      "Rich history"
    ],
    immigrationPaths: [
      {
        title: "EU Blue Card",
        description: "For highly qualified professionals",
        requirements: [
          "Higher education",
          "Employment contract",
          "Minimum salary requirement",
          "Health insurance"
        ],
        processingTime: "1-2 months",
        cost: "BGN 100"
      },
      {
        title: "Startup Visa",
        description: "For innovative entrepreneurs",
        requirements: [
          "Business plan",
          "Minimum investment",
          "Innovation focus",
          "Job creation potential"
        ],
        processingTime: "2-3 months",
        cost: "BGN 200"
      },
      {
        title: "Student Visa",
        description: "For higher education",
        requirements: [
          "University acceptance",
          "Proof of funds",
          "Health insurance",
          "Accommodation proof"
        ],
        processingTime: "30 days",
        cost: "BGN 150"
      }
    ],
    keyRequirements: [
      "Valid passport",
      "Clean criminal record",
      "Health insurance",
      "Financial means",
      "Purpose of stay documentation"
    ],
    laborMarket: {
      inDemandSectors: [
        "IT & Software",
        "Outsourcing",
        "Manufacturing",
        "Tourism",
        "Agriculture"
      ],
      averageSalary: "BGN 1,500/month",
      unemploymentRate: "4.8%"
    },
    livingCosts: {
      rent: "BGN 700-1,200/month",
      utilities: "BGN 150-250/month",
      food: "BGN 500-700/month",
      transport: "BGN 50-100/month"
    },
    education: {
      universities: 51,
      internationalStudents: "15,000+",
      averageTuition: "BGN 2,000-8,000/year"
    }
  },
  "Belgium": {
    name: "Belgium",
    flag: "/flags/belgium.png",
    overview: "A multicultural hub at the heart of Europe, offering excellent quality of life, strong social security, and opportunities in international organizations.",
    benefits: [
      "Central EU location",
      "Strong social security",
      "Multilingual environment",
      "International organizations",
      "Rich cultural heritage"
    ],
    immigrationPaths: [
      {
        title: "EU Blue Card",
        description: "For highly qualified professionals",
        requirements: [
          "Higher education qualification",
          "Employment contract",
          "Minimum salary €52,978/year",
          "Health insurance"
        ],
        processingTime: "4-12 weeks",
        cost: "€350"
      },
      {
        title: "Professional Card",
        description: "For self-employed professionals",
        requirements: [
          "Business plan",
          "Proof of financial means",
          "Professional qualifications",
          "Market research"
        ],
        processingTime: "6 months",
        cost: "€140"
      },
      {
        title: "Student Visa",
        description: "For higher education in Belgium",
        requirements: [
          "University acceptance",
          "Proof of funds (€679/month)",
          "Health insurance",
          "Language proficiency"
        ],
        processingTime: "4-8 weeks",
        cost: "€200"
      }
    ],
    keyRequirements: [
      "Valid passport",
      "Clean criminal record",
      "Health insurance",
      "Proof of accommodation",
      "Financial stability"
    ],
    laborMarket: {
      inDemandSectors: [
        "IT & Technology",
        "Engineering",
        "Healthcare",
        "Finance",
        "EU Institutions"
      ],
      averageSalary: "€48,000/year",
      unemploymentRate: "5.7%"
    },
    livingCosts: {
      rent: "€800-1,500/month",
      utilities: "€150-250/month",
      food: "€300-400/month",
      transport: "€50-70/month"
    },
    education: {
      universities: 65,
      internationalStudents: "55,000+",
      averageTuition: "€835-4,175/year"
    }
  },
  "Portugal": {
    name: "Portugal",
    flag: "/flags/Portugal.png",
    overview: "A welcoming country with a growing tech scene, offering digital nomad opportunities, golden visa program, and exceptional quality of life.",
    benefits: [
      "Digital nomad friendly",
      "Golden visa program",
      "Affordable living costs",
      "Beautiful climate",
      "Rich culture"
    ],
    immigrationPaths: [
      {
        title: "D7 Visa",
        description: "For passive income holders and remote workers",
        requirements: [
          "Proof of passive income",
          "Health insurance",
          "Clean criminal record",
          "Proof of accommodation"
        ],
        processingTime: "2-3 months",
        cost: "€90"
      },
      {
        title: "Digital Nomad Visa",
        description: "For remote workers and digital professionals",
        requirements: [
          "Proof of remote work",
          "Minimum income €2,800/month",
          "Health insurance",
          "Accommodation proof"
        ],
        processingTime: "2-4 weeks",
        cost: "€75"
      },
      {
        title: "Golden Visa",
        description: "For investors and entrepreneurs",
        requirements: [
          "Minimum investment €250,000-€500,000",
          "Clean criminal record",
          "Health insurance",
          "Proof of investment"
        ],
        processingTime: "6-8 months",
        cost: "€533"
      }
    ],
    keyRequirements: [
      "Valid passport",
      "Clean criminal record",
      "Health insurance",
      "Proof of income",
      "NIF (tax number)"
    ],
    laborMarket: {
      inDemandSectors: [
        "Technology",
        "Tourism",
        "Healthcare",
        "Engineering",
        "Digital Services"
      ],
      averageSalary: "€18,000/year",
      unemploymentRate: "6.1%"
    },
    livingCosts: {
      rent: "€600-1,200/month",
      utilities: "€100-150/month",
      food: "€250-350/month",
      transport: "€40-50/month"
    },
    education: {
      universities: 40,
      internationalStudents: "65,000+",
      averageTuition: "€950-7,000/year"
    }
  },
  "Switzerland": {
    name: "Switzerland",
    flag: "/flags/switzerland.png",
    overview: "A global leader in banking, innovation, and quality of life, offering high salaries, excellent healthcare, and breathtaking natural beauty.",
    benefits: [
      "Highest salaries in Europe",
      "Political stability",
      "Excellence in education",
      "High quality healthcare",
      "Natural beauty"
    ],
    immigrationPaths: [
      {
        title: "Work Permit B",
        description: "For qualified professionals with job offers",
        requirements: [
          "Job contract",
          "University degree",
          "Employer sponsorship",
          "Priority to EU/EFTA"
        ],
        processingTime: "8-12 weeks",
        cost: "CHF 95-240"
      },
      {
        title: "Student Visa",
        description: "For higher education in Switzerland",
        requirements: [
          "University acceptance",
          "Proof of funds (CHF 21,000/year)",
          "Health insurance",
          "Language skills"
        ],
        processingTime: "8-12 weeks",
        cost: "CHF 80"
      },
      {
        title: "Entrepreneur Visa",
        description: "For business owners and investors",
        requirements: [
          "Business plan",
          "Sufficient capital",
          "Job creation potential",
          "Economic benefit proof"
        ],
        processingTime: "3-6 months",
        cost: "CHF 1,000"
      }
    ],
    keyRequirements: [
      "Valid passport",
      "Clean criminal record",
      "Health insurance",
      "Financial stability",
      "Language skills"
    ],
    laborMarket: {
      inDemandSectors: [
        "Banking & Finance",
        "Pharmaceuticals",
        "IT & Technology",
        "Engineering",
        "Research"
      ],
      averageSalary: "CHF 85,000/year",
      unemploymentRate: "2.2%"
    },
    livingCosts: {
      rent: "CHF 1,500-3,000/month",
      utilities: "CHF 200-300/month",
      food: "CHF 400-600/month",
      transport: "CHF 70-100/month"
    },
    education: {
      universities: 12,
      internationalStudents: "38,000+",
      averageTuition: "CHF 1,000-3,500/year"
    }
  },
  "Austria": {
    name: "Austria",
    flag: "/flags/austria.png",
    overview: "A country combining rich cultural heritage with modern innovation, offering high living standards, excellent social security, and diverse opportunities.",
    benefits: [
      "High quality of life",
      "Strong social system",
      "Central location",
      "Cultural richness",
      "Natural beauty"
    ],
    immigrationPaths: [
      {
        title: "Red-White-Red Card",
        description: "For qualified workers in shortage occupations",
        requirements: [
          "Qualification proof",
          "Job offer",
          "German language skills",
          "Minimum salary requirement"
        ],
        processingTime: "8 weeks",
        cost: "€160"
      },
      {
        title: "EU Blue Card",
        description: "For highly qualified professionals",
        requirements: [
          "University degree",
          "Employment contract",
          "Minimum salary €66,593/year",
          "Health insurance"
        ],
        processingTime: "8-10 weeks",
        cost: "€160"
      },
      {
        title: "Student Visa",
        description: "For higher education",
        requirements: [
          "University acceptance",
          "Proof of funds (€11,000/year)",
          "Health insurance",
          "German language skills"
        ],
        processingTime: "4-8 weeks",
        cost: "€150"
      }
    ],
    keyRequirements: [
      "Valid passport",
      "Clean criminal record",
      "Health insurance",
      "Financial means",
      "German language skills"
    ],
    laborMarket: {
      inDemandSectors: [
        "IT & Technology",
        "Engineering",
        "Tourism",
        "Healthcare",
        "Research"
      ],
      averageSalary: "€49,000/year",
      unemploymentRate: "4.8%"
    },
    livingCosts: {
      rent: "€700-1,400/month",
      utilities: "€150-250/month",
      food: "€300-400/month",
      transport: "€50-60/month"
    },
    education: {
      universities: 70,
      internationalStudents: "102,000+",
      averageTuition: "€726-1,500/year"
    }
  },
  "Greece": {
    name: "Greece",
    flag: "/flags/Greece.png",
    overview: "A Mediterranean paradise offering digital nomad opportunities, rich cultural heritage, and an emerging tech ecosystem with affordable living costs.",
    benefits: [
      "Digital nomad friendly",
      "Rich cultural heritage",
      "Mediterranean lifestyle",
      "Affordable living",
      "Growing tech scene"
    ],
    immigrationPaths: [
      {
        title: "Digital Nomad Visa",
        description: "For remote workers and digital professionals",
        requirements: [
          "Proof of remote work",
          "Minimum income €3,500/month",
          "Health insurance",
          "Clean criminal record"
        ],
        processingTime: "1-2 months",
        cost: "€75"
      },
      {
        title: "Golden Visa",
        description: "For property investors",
        requirements: [
          "Property investment €250,000+",
          "Clean criminal record",
          "Health insurance",
          "Proof of funds"
        ],
        processingTime: "2-3 months",
        cost: "€2,000"
      },
      {
        title: "Student Visa",
        description: "For higher education",
        requirements: [
          "University acceptance",
          "Proof of funds",
          "Health insurance",
          "Accommodation proof"
        ],
        processingTime: "1-2 months",
        cost: "€100"
      }
    ],
    keyRequirements: [
      "Valid passport",
      "Clean criminal record",
      "Health insurance",
      "Financial means",
      "Purpose of stay"
    ],
    laborMarket: {
      inDemandSectors: [
        "Tourism",
        "Technology",
        "Shipping",
        "Agriculture",
        "Energy"
      ],
      averageSalary: "€18,000/year",
      unemploymentRate: "11.1%"
    },
    livingCosts: {
      rent: "€400-800/month",
      utilities: "€100-180/month",
      food: "€250-350/month",
      transport: "€30-50/month"
    },
    education: {
      universities: 24,
      internationalStudents: "35,000+",
      averageTuition: "€1,500-5,000/year"
    }
  },
  "Norway": {
    name: "Norway",
    flag: "/flags/norway.png",
    overview: "A Scandinavian nation offering exceptional quality of life, strong social welfare, and abundant opportunities in technology and natural resources.",
    benefits: [
      "High living standards",
      "Strong social welfare",
      "Work-life balance",
      "Natural beauty",
      "Economic stability"
    ],
    immigrationPaths: [
      {
        title: "Skilled Worker Visa",
        description: "For professionals with job offers",
        requirements: [
          "Job offer",
          "Relevant education/experience",
          "Minimum salary requirement",
          "Housing arrangement"
        ],
        processingTime: "4-8 weeks",
        cost: "NOK 6,300"
      },
      {
        title: "Study Permit",
        description: "For international students",
        requirements: [
          "University acceptance",
          "Proof of funds (NOK 128,887/year)",
          "Health insurance",
          "Housing arrangement"
        ],
        processingTime: "4-6 weeks",
        cost: "NOK 5,300"
      },
      {
        title: "Self-employed Visa",
        description: "For entrepreneurs",
        requirements: [
          "Business plan",
          "Sufficient funds",
          "Market analysis",
          "Relevant experience"
        ],
        processingTime: "3-4 months",
        cost: "NOK 6,300"
      }
    ],
    keyRequirements: [
      "Valid passport",
      "Clean criminal record",
      "Health insurance",
      "Financial stability",
      "Purpose documentation"
    ],
    laborMarket: {
      inDemandSectors: [
        "IT & Technology",
        "Energy",
        "Healthcare",
        "Engineering",
        "Maritime"
      ],
      averageSalary: "NOK 612,000/year",
      unemploymentRate: "3.2%"
    },
    livingCosts: {
      rent: "NOK 8,000-15,000/month",
      utilities: "NOK 1,000-1,500/month",
      food: "NOK 3,500-4,500/month",
      transport: "NOK 800/month"
    },
    education: {
      universities: 38,
      internationalStudents: "24,000+",
      averageTuition: "Free for most"
    }
  },
  "Denmark": {
    name: "Denmark",
    flag: "/flags/denmark.png",
    overview: "A Scandinavian leader in innovation and sustainability, offering high living standards, excellent work-life balance, and strong social security.",
    benefits: [
      "High quality of life",
      "Work-life balance",
      "Innovation leader",
      "Strong social security",
      "Clean environment"
    ],
    immigrationPaths: [
      {
        title: "Fast Track Scheme",
        description: "For highly qualified professionals",
        requirements: [
          "Job contract",
          "Minimum salary DKK 445,000/year",
          "Certified company",
          "Relevant qualifications"
        ],
        processingTime: "2-4 weeks",
        cost: "DKK 4,295"
      },
      {
        title: "Start-up Denmark",
        description: "For innovative entrepreneurs",
        requirements: [
          "Approved business plan",
          "Sufficient funds",
          "Innovation focus",
          "Job creation potential"
        ],
        processingTime: "6-8 weeks",
        cost: "DKK 1,900"
      },
      {
        title: "Study Permit",
        description: "For higher education",
        requirements: [
          "University acceptance",
          "Proof of funds (DKK 6,243/month)",
          "Health insurance",
          "Language skills"
        ],
        processingTime: "2-3 months",
        cost: "DKK 2,000"
      }
    ],
    keyRequirements: [
      "Valid passport",
      "Clean criminal record",
      "Health insurance",
      "Financial means",
      "Purpose documentation"
    ],
    laborMarket: {
      inDemandSectors: [
        "IT & Technology",
        "Green Energy",
        "Life Sciences",
        "Engineering",
        "Research"
      ],
      averageSalary: "DKK 544,000/year",
      unemploymentRate: "4.8%"
    },
    livingCosts: {
      rent: "DKK 7,000-12,000/month",
      utilities: "DKK 1,000-1,500/month",
      food: "DKK 2,500-3,500/month",
      transport: "DKK 400/month"
    },
    education: {
      universities: 31,
      internationalStudents: "34,000+",
      averageTuition: "Free for EU/EEA"
    }
  },
  "Finland": {
    name: "Finland",
    flag: "/flags/finland.png",
    overview: "The world's happiest country offering exceptional quality of life, cutting-edge technology sector, and world-class education system.",
    benefits: [
      "World's happiest country",
      "Excellence in education",
      "Work-life balance",
      "Innovation leader",
      "Clean nature"
    ],
    immigrationPaths: [
      {
        title: "Specialist Permit",
        description: "For highly skilled professionals",
        requirements: [
          "Job contract",
          "Higher education degree",
          "Minimum salary €3,000/month",
          "Health insurance"
        ],
        processingTime: "2-3 weeks",
        cost: "€410"
      },
      {
        title: "Startup Entrepreneur",
        description: "For innovative business founders",
        requirements: [
          "Business Finland approval",
          "Sufficient funds",
          "Business plan",
          "Innovation focus"
        ],
        processingTime: "2-3 months",
        cost: "€350"
      },
      {
        title: "Student Residence",
        description: "For higher education",
        requirements: [
          "University acceptance",
          "Proof of funds (€6,720/year)",
          "Health insurance",
          "Study plan"
        ],
        processingTime: "2-3 months",
        cost: "€350"
      }
    ],
    keyRequirements: [
      "Valid passport",
      "Clean criminal record",
      "Health insurance",
      "Financial means",
      "Purpose documentation"
    ],
    laborMarket: {
      inDemandSectors: [
        "IT & Technology",
        "Gaming Industry",
        "Cleantech",
        "Healthcare",
        "Engineering"
      ],
      averageSalary: "€45,000/year",
      unemploymentRate: "6.8%"
    },
    livingCosts: {
      rent: "€800-1,400/month",
      utilities: "€150-250/month",
      food: "€300-400/month",
      transport: "€60/month"
    },
    education: {
      universities: 35,
      internationalStudents: "23,000+",
      averageTuition: "Free for EU/EEA"
    }
  }
}

export function ChooseYourDestination() {
  const [mounted, setMounted] = useState(false)
  const [hoveredCountry, setHoveredCountry] = useState<string | null>(null)
  const [activeFilter, setActiveFilter] = useState<string>("all")
  const [currentPage, setCurrentPage] = useState(0)

  // Filter countries based on filter
  const filteredCountries = countries.filter(country => {
    const matchesFilter = activeFilter === "all" || 
                         (activeFilter === "popular" && country.isPopular) ||
                         (activeFilter === "other" && !country.isPopular)
    return matchesFilter
  })

  // Calculate pagination
  const countriesPerPage = 8
  const totalPages = Math.ceil(filteredCountries.length / countriesPerPage)
  const paginatedCountries = filteredCountries.slice(
    currentPage * countriesPerPage,
    (currentPage + 1) * countriesPerPage
  )

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages)
  }

  const previousPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages)
  }

  const goToPage = (pageIndex: number) => {
    setCurrentPage(pageIndex)
  }

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    // Reset to first page when filter changes
    setCurrentPage(0)
  }, [activeFilter])

  // Loading state with skeleton UI
  if (!mounted) {
    return (
      <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,184,0,0.08),transparent_70%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />
        <div className="container mx-auto px-4 relative">
          <div className="animate-pulse space-y-8">
            <div className="flex flex-col items-center space-y-4">
              <div className="h-4 w-32 bg-gold/20 rounded" />
              <div className="h-8 w-64 bg-gold/20 rounded" />
              <div className="h-4 w-48 bg-gold/20 rounded" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="h-48 bg-gold/10 rounded-xl" />
              ))}
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <>
      <section className="relative py-8 sm:py-12 md:py-16 lg:py-24 overflow-hidden">
        {/* Enhanced Background Effects */}
        <div className="absolute inset-0">
          <motion.div 
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,184,0,0.15),transparent_70%)]"
          />
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black"
          />
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
            className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,184,0,0.05)_1px,transparent_1px),linear-gradient(-45deg,rgba(255,184,0,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"
          />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 relative">
          {/* Enhanced Section Header with better mobile spacing */}
          <div className="text-center mb-8 sm:mb-12 lg:mb-16 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="relative inline-block"
            >
              <span className="relative inline-flex flex-col items-center">
                <motion.span
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="absolute -top-6 sm:-top-8 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent w-full"
                />
                <span className="inline-block text-gold font-medium text-xs sm:text-sm tracking-[0.2em] uppercase mb-3 sm:mb-4 relative px-4 sm:px-8 py-1.5 sm:py-2">
                  <span className="relative z-10">SUPPORTED EUROPEAN DESTINATIONS</span>
                  <motion.span
                    className="absolute inset-0 bg-gold/5 rounded-lg"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                  />
                </span>
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 lg:mb-10 tracking-tight px-4 sm:px-0">
                <span className="text-white">Discover Your </span>
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-gold via-amber-500 to-gold bg-clip-text text-transparent">
                    European Gateway
                  </span>
                </span>
              </h1>
            </motion.div>

            {/* Filter Controls */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="max-w-2xl mx-auto px-4 sm:px-6 mt-8 sm:mt-6"
            >
              <div className="flex flex-col gap-4">
                <div className="flex gap-2 justify-center">
                  {["all", "popular", "other"].map((filter) => (
                    <motion.button
                      key={filter}
                      onClick={() => setActiveFilter(filter)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all duration-300 relative overflow-hidden flex-1 sm:flex-none
                        ${activeFilter === filter
                          ? "bg-gradient-to-r from-gold to-amber-500 text-black shadow-lg"
                          : "bg-white/5 text-white hover:bg-white/10"
                        }`}
                    >
                      <span className="relative z-10">
                        {filter.charAt(0).toUpperCase() + filter.slice(1)}
                      </span>
                    </motion.button>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Enhanced Countries Grid with better mobile spacing */}
          <div className="flex flex-col justify-center">
            <div className="w-full max-w-7xl mx-auto">
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
              >
                {paginatedCountries.map((country) => (
                  <div key={country.name} className="group relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-gold/5 to-white/5 rounded-xl blur-xl" />
                    <div className="relative h-[160px] bg-black/80 backdrop-blur-xl rounded-xl p-5 border border-white/10 hover:border-gold/20 transition-all duration-500 flex flex-col">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2.5">
                          <div className="relative w-6 h-6">
                            <Image
                              src={country.flag}
                              alt={`${country.name} flag`}
                              fill
                              className="object-cover rounded-sm"
                            />
                          </div>
                          <h3 className="text-white font-medium">{country.name}</h3>
                        </div>
                        {country.isPopular && (
                          <Badge className="bg-gold/20 text-gold border-gold/20 text-[10px]">
                            POPULAR
                          </Badge>
                        )}
                      </div>
                      
                      <p className="text-white/70 text-sm line-clamp-2">
                        {country.description}
                      </p>
                    </div>
                  </div>
                ))}
              </motion.div>

              {/* Enhanced Pagination Controls for mobile */}
              {totalPages > 1 && (
                <div className="mt-8 sm:mt-12 flex flex-col items-center gap-4 sm:gap-6">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={previousPage}
                      className="p-1.5 sm:p-2 rounded-full bg-white/5 hover:bg-white/10 border border-gold/20 hover:border-gold/40 transition-all duration-300"
                    >
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gold transform rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </motion.button>

                    <div className="flex items-center gap-1.5 sm:gap-2">
                      {Array.from({ length: totalPages }).map((_, index) => (
                        <motion.button
                          key={index}
                          whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => goToPage(index)}
                          className={`w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full transition-all duration-300 ${
                            currentPage === index
                              ? "bg-gold w-3 sm:w-4"
                              : "bg-white/20 hover:bg-white/40"
                          }`}
                        />
                      ))}
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={nextPage}
                      className="p-1.5 sm:p-2 rounded-full bg-white/5 hover:bg-white/10 border border-gold/20 hover:border-gold/40 transition-all duration-300"
                    >
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </motion.button>
                  </div>

                  <div className="text-gold/60 text-xs sm:text-sm">
                    Page {currentPage + 1} of {totalPages}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}