import { 
  Users, 
  Building2, 
  Briefcase, 
  Home, 
  FileCheck, 
  Shield, 
  Landmark, 
  BadgeCheck,
  Globe,
  GraduationCap,
  MessageSquare,
  Heart,
  FileText
} from "lucide-react"

interface Service {
  name: string
  path: string
  icon: any // Using any for Lucide icons type
  description: string
}

interface Services {
  business: Service[]
  immigration: Service[]
}

export const services: Services = {
  immigration: [
    { 
      name: "Visa Services", 
      path: "/services/immigration/visa",
      icon: Globe,
      description: "Comprehensive visa application assistance"
    },
    { 
      name: "Residence Permits",
      path: "/services/immigration/residence-permits",
      icon: Home,
      description: "Expert guidance for residence permit applications"
    },
    { 
      name: "Work Permits",
      path: "/services/immigration/work-permits",
      icon: Briefcase,
      description: "Professional work permit application support"
    },
    { 
      name: "Citizenship Services",
      path: "/services/immigration/citizenship",
      icon: GraduationCap,
      description: "Complete citizenship application assistance"
    },
    { 
      name: "Immigration Consulting",
      path: "/services/immigration/consulting",
      icon: MessageSquare,
      description: "Expert immigration consulting services"
    },
    { 
      name: "Family Immigration",
      path: "/services/immigration/family",
      icon: Heart,
      description: "Family reunification and immigration support"
    },
    { 
      name: "Refugee & Asylum Services",
      path: "/services/immigration/refugee-asylum",
      icon: Shield,
      description: "Compassionate refugee and asylum assistance"
    },
    { 
      name: "Document Authentication",
      path: "/services/immigration/document-authentication",
      icon: FileText,
      description: "Professional document authentication services"
    }
  ],
  business: [
    { 
      name: "Cooperative Services",
      path: "/services/business/cooperative",
      icon: Users,
      description: "Start and manage cooperatives with expert guidance"
    },
    { 
      name: "Association Services",
      path: "/services/business/association",
      icon: Building2,
      description: "Professional support for association formation and management"
    },
    { 
      name: "Self-Employed Services",
      path: "/services/business/self-employed",
      icon: Briefcase,
      description: "Complete guidance for self-employed professionals"
    },
    { 
      name: "Real Estate Services",
      path: "/services/business/real-estate",
      icon: Home,
      description: "Expert assistance with real estate transactions"
    },
    { 
      name: "Apostille Services",
      path: "/services/business/apostille",
      icon: FileCheck,
      description: "Document authentication and legalization services"
    },
    { 
      name: "Social Security Services",
      path: "/services/business/social-security",
      icon: Shield,
      description: "Navigate social security requirements with ease"
    },
    { 
      name: "ANAPEC Services",
      path: "/services/business/anapec",
      icon: Landmark,
      description: "Professional support with ANAPEC procedures"
    },
    { 
      name: "Trade License Services",
      path: "/services/business/trade-license",
      icon: BadgeCheck,
      description: "Streamlined trade license application process"
    }
  ]
} 