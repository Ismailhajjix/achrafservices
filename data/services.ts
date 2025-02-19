import { 
  Building2, 
  FileCheck, 
  Home, 
  Briefcase, 
  Shield,
  type LucideIcon 
} from "lucide-react"
import type { Route } from "next"

type ServiceKey = 
  | "companyFormation"
  | "cooperativeFormation"
  | "associationFormation"
  | "selfEntrepreneur"
  | "realEstateRegistry"
  | "apostilleServices"
  | "socialSecurity"
  | "anapecServices"
  | "commercialLicensing"
  | "visaApplications"
  | "residencePermits"
  | "familyReunification"
  | "studentVisas"
  | "legalConsultation"

export interface Service {
  title: string
  href: Route
  icon: LucideIcon
  description: string
  details: string[]
  key: ServiceKey
}

// Business Services
export const businessServices: Service[] = [
  { 
    key: "companyFormation",
    title: "Company Formation",
    href: "/appointment" as Route,
    icon: Building2,
    description: "Professional company setup services",
    details: [
      "Full company registration process",
      "Documentation handling",
      "Tax & administrative registrations",
      "Bank account setup assistance",
      "Company stamp requests"
    ]
  },
  {
    key: "cooperativeFormation",
    title: "Cooperative Formation",
    href: "/appointment" as Route,
    icon: Building2,
    description: "Expert cooperative setup services",
    details: [
      "Name approval process",
      "Registration handling",
      "Member management",
      "Documentation support",
      "Legal compliance"
    ]
  },
  {
    key: "associationFormation",
    title: "Association Formation",
    href: "/appointment" as Route,
    icon: Building2,
    description: "Complete association services",
    details: [
      "Contract preparation",
      "Registration process",
      "Documentation handling",
      "Member management",
      "Legal compliance"
    ]
  },
  {
    key: "selfEntrepreneur",
    title: "Self-Entrepreneur",
    href: "/appointment" as Route,
    icon: Briefcase,
    description: "Self-employed business support",
    details: [
      "Account creation",
      "Social security registration",
      "Tax registration",
      "Documentation support",
      "Business planning"
    ]
  },
  {
    key: "realEstateRegistry",
    title: "Real Estate Registry",
    href: "/appointment" as Route,
    icon: Building2,
    description: "Property documentation services",
    details: [
      "Ownership certification",
      "Design plans",
      "Property registration",
      "Documentation handling",
      "Legal verification"
    ]
  },
  {
    key: "apostilleServices",
    title: "Apostille Services",
    href: "/appointment" as Route,
    icon: Shield,
    description: "Document authentication support",
    details: [
      "Document legalization",
      "Authentication services",
      "Official certification",
      "International validation",
      "Express processing"
    ]
  },
  {
    key: "socialSecurity",
    title: "Social Security",
    href: "/appointment" as Route,
    icon: Shield,
    description: "Social security assistance",
    details: [
      "Registration support",
      "Documentation handling",
      "Benefits consultation",
      "Status verification",
      "Claims assistance"
    ]
  },
  {
    key: "anapecServices",
    title: "ANAPEC Services",
    href: "/appointment" as Route,
    icon: Briefcase,
    description: "Employment support services",
    details: [
      "Registration assistance",
      "Job search support",
      "Documentation handling",
      "Profile creation",
      "Interview preparation"
    ]
  },
  {
    key: "commercialLicensing",
    title: "Commercial Licensing",
    href: "/appointment" as Route,
    icon: Briefcase,
    description: "Business license processing",
    details: [
      "License application",
      "Documentation support",
      "Application tracking",
      "Renewal assistance",
      "Compliance verification"
    ]
  }
]

// Immigration Services
export const immigrationServices: Service[] = [
  { 
    key: "visaApplications",
    title: "Visa Applications",
    href: "/appointment" as Route,
    icon: FileCheck,
    description: "Comprehensive visa support",
    details: [
      "Application assistance",
      "Document preparation",
      "Process guidance",
      "Status tracking",
      "Interview preparation"
    ]
  },
  {
    key: "residencePermits",
    title: "Residence Permits",
    href: "/appointment" as Route,
    icon: Home,
    description: "Residence permit assistance",
    details: [
      "Application support",
      "Document preparation",
      "Status tracking",
      "Renewal assistance",
      "Family inclusion"
    ]
  },
  {
    key: "familyReunification",
    title: "Family Reunification",
    href: "/appointment" as Route,
    icon: Home,
    description: "Family visa services",
    details: [
      "Application assistance",
      "Document preparation",
      "Process guidance",
      "Status tracking",
      "Family support"
    ]
  },
  {
    key: "studentVisas",
    title: "Student Visas",
    href: "/appointment" as Route,
    icon: FileCheck,
    description: "Student visa assistance",
    details: [
      "University admission support",
      "Document preparation",
      "Application processing",
      "Status tracking",
      "Student guidance"
    ]
  },
  {
    key: "legalConsultation",
    title: "Legal Consultation",
    href: "/appointment" as Route,
    icon: Shield,
    description: "Immigration legal support",
    details: [
      "Case evaluation",
      "Legal advice",
      "Appeal assistance",
      "Document review",
      "Process guidance"
    ]
  }
]

// Export a combined services object for easy access
export const services = {
  business: businessServices,
  immigration: immigrationServices
} 