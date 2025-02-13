import { 
  Building2, 
  FileCheck, 
  Home, 
  Briefcase, 
  Shield,
  type LucideIcon 
} from "lucide-react"
import type { Route } from "next"

export interface Service {
  title: string
  href: Route
  icon: LucideIcon
  description: string
  details: string[]
}

// Business Services
export const businessServices: Service[] = [
  { 
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
    title: "Work Permits",
    href: "/appointment" as Route,
    icon: Briefcase,
    description: "Complete work permit services",
    details: [
      "Application processing",
      "Document preparation",
      "Employer coordination",
      "Status tracking",
      "Renewal assistance"
    ]
  },
  {
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
    title: "Citizenship Services",
    href: "/appointment" as Route,
    icon: Shield,
    description: "Citizenship application support",
    details: [
      "Eligibility assessment",
      "Document preparation",
      "Application processing",
      "Interview preparation",
      "Status tracking"
    ]
  },
  {
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
    title: "Business & Investor Visas",
    href: "/appointment" as Route,
    icon: Briefcase,
    description: "Investment visa services",
    details: [
      "Business plan preparation",
      "Investment guidance",
      "Document handling",
      "Application processing",
      "Status tracking"
    ]
  },
  {
    title: "Asylum & Refugee Services",
    href: "/appointment" as Route,
    icon: Shield,
    description: "Asylum application support",
    details: [
      "Case evaluation",
      "Legal representation",
      "Document preparation",
      "Status tracking",
      "Support services"
    ]
  },
  {
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