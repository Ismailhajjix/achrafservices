/** @jsxImportSource react */
"use client"

import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"
import Link from "next/link"
import { Users, Building2, FileCheck, Shield, Landmark, BadgeCheck, MessageSquare, HomeIcon, Briefcase, Globe } from "lucide-react"
import { useInView } from "react-intersection-observer"
import { useRef, useState, useEffect } from "react"
import { VIPServicesClient } from "./vip-services-client"

export interface Service {
  title: string
  href: string
  icon: any
  description: string
  details: string[]
}

// Business Services
const businessServices: Service[] = [
  { 
    title: "Company Formation",
    href: "/appointment",
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
    href: "/appointment",
    icon: Users,
    description: "Expert cooperative setup services",
    details: [
      "Name approval and registration",
      "General assembly founding contract",
      "Articles of association drafting",
      "Member subscription management",
      "Local cooperative registration",
      "Bank account setup support"
    ]
  },
  { 
    title: "Association Formation",
    href: "/appointment",
    icon: Building2,
    description: "Complete association services",
    details: [
      "General assembly contract preparation",
      "Articles of association drafting",
      "Member list preparation",
      "Assembly minutes drafting",
      "Tax administration registration",
      "Bank account setup"
    ]
  },
  { 
    title: "Self-Entrepreneur",
    href: "/appointment",
    icon: Briefcase,
    description: "Self-employed business support",
    details: [
      "Account creation and setup",
      "Social security card preparation",
      "Turnover declaration assistance",
      "Professional guidance",
      "Ongoing support"
    ]
  },
  { 
    title: "Real Estate Registry",
    href: "/appointment",
    icon: HomeIcon,
    description: "Property documentation services",
    details: [
      "Property ownership certification",
      "Real estate design plans",
      "Land area calculations",
      "Information services",
      "Documentation support"
    ]
  },
  { 
    title: "Apostille Services",
    href: "/appointment",
    icon: FileCheck,
    description: "Document authentication support",
    details: [
      "Document authentication",
      "Court document verification",
      "Administrative document processing",
      "Professional consultation",
      "Legalization services"
    ]
  },
  { 
    title: "Social Security",
    href: "/appointment",
    icon: Shield,
    description: "Social security assistance",
    details: [
      "Professional consultation",
      "File preparation services",
      "Registration assistance",
      "Documentation support",
      "Ongoing guidance"
    ]
  },
  { 
    title: "ANAPEC Services",
    href: "/appointment",
    icon: Landmark,
    description: "Employment registration support",
    details: [
      "ANAPEC registration",
      "CV preparation",
      "Employment file preparation",
      "Job search assistance",
      "Professional guidance"
    ]
  },
  { 
    title: "Commercial Licensing",
    href: "/appointment",
    icon: BadgeCheck,
    description: "Business license processing",
    details: [
      "Electronic application submission",
      "Platform fee processing",
      "Application tracking",
      "License acquisition",
      "Documentation support"
    ]
  }
]

// Immigration Services
const immigrationServices: Service[] = [
  { 
    title: "Visa Applications",
    href: "/appointment",
    icon: FileCheck,
    description: "Visa processing assistance",
    details: [
      "Document requirement guidance",
      "Application process assistance",
      "Appointment scheduling",
      "Form filling support",
      "Application tracking"
    ]
  },
  { 
    title: "Work Permits",
    href: "/appointment",
    icon: Briefcase,
    description: "Work permit processing",
    details: [
      "Permit application processing",
      "Labor authority liaison",
      "Permit renewals",
      "Documentation support",
      "Status monitoring"
    ]
  },
  { 
    title: "Residence Permits",
    href: "/appointment",
    icon: Shield,
    description: "Residence permit support",
    details: [
      "Application preparation",
      "Document verification",
      "Authority coordination",
      "Status tracking",
      "Renewal support"
    ]
  },
  { 
    title: "Citizenship Services",
    href: "/appointment",
    icon: Globe,
    description: "Citizenship application aid",
    details: [
      "Eligibility consultation",
      "Document preparation",
      "Legal procedure assistance",
      "Application submission",
      "Process monitoring"
    ]
  },
  { 
    title: "Family Reunification",
    href: "/appointment",
    icon: Users,
    description: "Family visa assistance",
    details: [
      "Application preparation",
      "Document processing",
      "Visa coordination",
      "Family member support",
      "Status tracking"
    ]
  },
  { 
    title: "Student Visas",
    href: "/appointment",
    icon: BadgeCheck,
    description: "Student visa assistance",
    details: [
      "Visa application guidance",
      "University admission support",
      "Document preparation",
      "Permit extensions",
      "Student support"
    ]
  },
  { 
    title: "Business & Investor",
    href: "/appointment",
    icon: Building2,
    description: "Investment visa services",
    details: [
      "Visa application assistance",
      "Financial documentation",
      "Business plan preparation",
      "Legal compliance support",
      "Status monitoring"
    ]
  },
  { 
    title: "Asylum & Refugee",
    href: "/appointment",
    icon: Shield,
    description: "Asylum application support",
    details: [
      "Application guidance",
      "Legal representation",
      "Document preparation",
      "Status tracking",
      "Humanitarian coordination"
    ]
  },
  { 
    title: "Legal Consultation",
    href: "/appointment",
    icon: MessageSquare,
    description: "Immigration legal support",
    details: [
      "Case evaluation",
      "Legal guidance",
      "Appeal assistance",
      "Document review",
      "Professional advice"
    ]
  }
]

export function VIPServices() {
  const translations = {
    title: "Our VIP Services",
    subtitle: "Comprehensive solutions for your business and immigration needs",
    businessTab: "Business Services",
    immigrationTab: "Immigration Services",
    bookAppointment: "Book Appointment"
  }

  return (
    <VIPServicesClient
      businessServices={businessServices}
      immigrationServices={immigrationServices}
      translations={translations}
    />
  )
}

// Add these styles to your global CSS
const styles = `
@keyframes shimmer {
  0% { background-position: 0% 50%; }
  100% { background-position: -200% 50%; }
}

@keyframes border-flow {
  0%, 100% { 
    border-image-source: linear-gradient(45deg, rgba(255,215,0,0.5), rgba(253,185,49,0.8), rgba(255,215,0,0.5));
  }
  50% {
    border-image-source: linear-gradient(45deg, rgba(255,215,0,0.8), rgba(253,185,49,0.5), rgba(255,215,0,0.8));
  }
}

.animate-border-flow {
  animation: border-flow 4s ease infinite;
}
` 