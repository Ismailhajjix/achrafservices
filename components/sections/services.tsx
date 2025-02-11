"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import type { Route } from "next"

interface Service {
  name: string
  description: string
  href: { pathname: Route }
  icon: string
}

const services: Service[] = [
  {
    name: "Business Formation",
    description: "Expert guidance in establishing your business entity in Morocco, including company registration, documentation, and legal compliance.",
    href: { pathname: "/services/business-formation" as Route },
    icon: "/icons/business.svg"
  },
  {
    name: "Immigration Services",
    description: "Comprehensive support for visa applications, residence permits, and citizenship processes for individuals and families.",
    href: { pathname: "/services/immigration" as Route },
    icon: "/icons/immigration.svg"
  },
  {
    name: "Document Services",
    description: "Professional assistance with document translation, legalization, and authentication for official use in Morocco.",
    href: { pathname: "/services/documents" as Route },
    icon: "/icons/document.svg"
  },
  {
    name: "Legal Consultation",
    description: "Expert legal advice on Moroccan business law, immigration regulations, and compliance requirements.",
    href: { pathname: "/services/legal" as Route },
    icon: "/icons/legal.svg"
  },
  {
    name: "Real Estate Services",
    description: "Guidance in property acquisition, registration, and related legal documentation in Morocco.",
    href: { pathname: "/services/real-estate" as Route },
    icon: "/icons/real-estate.svg"
  },
  {
    name: "Employment Services",
    description: "Support with work permits, employment contracts, and social security registration for businesses and individuals.",
    href: { pathname: "/services/employment" as Route },
    icon: "/icons/employment.svg"
  }
] 