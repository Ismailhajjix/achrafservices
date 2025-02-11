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
  path: { pathname: string }
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
      path: { pathname: "/services/immigration/visa" },
      icon: Globe,
      description: "Comprehensive visa application assistance"
    },
    { 
      name: "Residence Permits",
      path: { pathname: "/services/immigration/residence-permits" },
      icon: Home,
      description: "Expert guidance for residence permit applications"
    },
    { 
      name: "Work Permits",
      path: { pathname: "/services/immigration/work-permits" },
      icon: Briefcase,
      description: "Professional work permit application support"
    },
    { 
      name: "Citizenship Services",
      path: { pathname: "/services/immigration/citizenship" },
      icon: GraduationCap,
      description: "Complete citizenship application assistance"
    },
    { 
      name: "Immigration Consulting",
      path: { pathname: "/services/immigration/consulting" },
      icon: MessageSquare,
      description: "Expert immigration consulting services"
    },
    { 
      name: "Family Immigration",
      path: { pathname: "/services/immigration/family" },
      icon: Heart,
      description: "Family reunification and immigration support"
    },
    { 
      name: "Refugee & Asylum Services",
      path: { pathname: "/services/immigration/refugee-asylum" },
      icon: Shield,
      description: "Compassionate refugee and asylum assistance"
    },
    { 
      name: "Document Authentication",
      path: { pathname: "/services/immigration/document-authentication" },
      icon: FileText,
      description: "Professional document authentication services"
    }
  ],
  business: [
    { 
      name: "Cooperative Services",
      path: { pathname: "/services/business/cooperative" },
      icon: Users,
      description: "Start and manage cooperatives with expert guidance"
    },
    { 
      name: "Association Services",
      path: { pathname: "/services/business/association" },
      icon: Building2,
      description: "Professional support for association formation and management"
    },
    { 
      name: "Self-Employed Services",
      path: { pathname: "/services/business/self-employed" },
      icon: Briefcase,
      description: "Complete guidance for self-employed professionals"
    },
    { 
      name: "Real Estate Services",
      path: { pathname: "/services/business/real-estate" },
      icon: Home,
      description: "Expert assistance with real estate transactions"
    },
    { 
      name: "Apostille Services",
      path: { pathname: "/services/business/apostille" },
      icon: FileCheck,
      description: "Document authentication and legalization services"
    },
    { 
      name: "Social Security Services",
      path: { pathname: "/services/business/social-security" },
      icon: Shield,
      description: "Navigate social security requirements with ease"
    },
    { 
      name: "ANAPEC Services",
      path: { pathname: "/services/business/anapec" },
      icon: Landmark,
      description: "Professional support with ANAPEC procedures"
    },
    { 
      name: "Trade License Services",
      path: { pathname: "/services/business/trade-license" },
      icon: BadgeCheck,
      description: "Streamlined trade license application process"
    }
  ]
} 