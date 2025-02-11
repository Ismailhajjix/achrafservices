"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import type { Route } from "next"

interface PolicyItem {
  name: string
  href: { pathname: Route }
}

interface PolicyCategory {
  title: string
  items: PolicyItem[]
}

const policyCategories: PolicyCategory[] = [
  {
    title: "Business Formation",
    items: [
      { name: "Company Formation Agreement", href: { pathname: "/policies/company-formation" as Route } },
      { name: "Cooperative Formation Guidelines", href: { pathname: "/policies/cooperative-formation" as Route } },
      { name: "Self-Entrepreneur Terms", href: { pathname: "/policies/self-entrepreneur" as Route } },
      { name: "Real Estate Documentation", href: { pathname: "/policies/real-estate" as Route } },
    ]
  },
  {
    title: "Immigration Services",
    items: [
      { name: "Visa Application Terms", href: { pathname: "/policies/visa-application" as Route } },
      { name: "Work Permit Guidelines", href: { pathname: "/policies/work-permit" as Route } },
      { name: "Residence Permit Policy", href: { pathname: "/policies/residence-permit" as Route } },
      { name: "Citizenship & Naturalization", href: { pathname: "/policies/citizenship" as Route } },
      { name: "Family Reunification", href: { pathname: "/policies/family-reunification" as Route } },
      { name: "Student Visa Assistance", href: { pathname: "/policies/student-visa" as Route } },
      { name: "Travel Document & Passport", href: { pathname: "/policies/travel-documents" as Route } },
    ]
  },
  {
    title: "Employment & Social Services",
    items: [
      { name: "Social Security Services", href: { pathname: "/policies/social-security" as Route } },
      { name: "ANAPEC Employment Support", href: { pathname: "/policies/anapec-employment" as Route } },
    ]
  }
]

export function PolicyNavigation() {
  return (
    <div className="hidden md:grid grid-cols-3 gap-6 lg:gap-8">
      {policyCategories.map((category, categoryIndex) => (
        <motion.div
          key={category.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
          className="space-y-4"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-gold/20 via-transparent to-gold/20 blur-lg opacity-50" />
            <h3 className="relative text-lg font-semibold text-white bg-gradient-to-r from-gold via-white to-gold bg-clip-text text-transparent">
              {category.title}
            </h3>
          </div>

          <div className="space-y-1">
            {category.items.map((item) => (
              <Link
                key={item.href.pathname}
                href={item.href}
                className="group flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-all duration-300"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-gold/50 group-hover:bg-gold transition-colors duration-300" />
                <span className="text-white/70 group-hover:text-gold transition-colors duration-300">
                  {item.name}
                </span>
              </Link>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  )
} 