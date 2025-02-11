"use client"

import Link from "next/link"
import { motion } from "framer-motion"

const policyCategories = [
  {
    title: "Business Formation",
    items: [
      { name: "Company Formation Agreement", href: "/policies/company-formation" },
      { name: "Cooperative Formation Guidelines", href: "/policies/cooperative-formation" },
      { name: "Self-Entrepreneur Terms", href: "/policies/self-entrepreneur" },
      { name: "Real Estate Documentation", href: "/policies/real-estate" },
    ]
  },
  {
    title: "Immigration Services",
    items: [
      { name: "Visa Application Terms", href: "/policies/visa-application" },
      { name: "Work Permit Guidelines", href: "/policies/work-permit" },
      { name: "Residence Permit Policy", href: "/policies/residence-permit" },
      { name: "Citizenship & Naturalization", href: "/policies/citizenship" },
      { name: "Family Reunification", href: "/policies/family-reunification" },
      { name: "Student Visa Assistance", href: "/policies/student-visa" },
      { name: "Travel Document & Passport", href: "/policies/travel-documents" },
    ]
  },
  {
    title: "Employment & Social Services",
    items: [
      { name: "Social Security Services", href: "/policies/social-security" },
      { name: "ANAPEC Employment Support", href: "/policies/anapec-employment" },
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
                key={item.href}
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