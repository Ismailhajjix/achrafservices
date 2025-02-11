"use client"

import { useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"
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
      { name: "Visa Application", href: { pathname: "/policies/visa-application" as Route } },
      { name: "Work Permit", href: { pathname: "/policies/work-permit" as Route } },
      { name: "Residence Permit", href: { pathname: "/policies/residence-permit" as Route } },
      { name: "Citizenship", href: { pathname: "/policies/citizenship" as Route } },
      { name: "Family Reunification", href: { pathname: "/policies/family-reunification" as Route } },
      { name: "Student Visa", href: { pathname: "/policies/student-visa" as Route } },
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

export function PolicyAccordion() {
  const [openCategory, setOpenCategory] = useState<string | null>(null)

  return (
    <div className="md:hidden space-y-3">
      {policyCategories.map((category) => (
        <div key={category.title} className="group">
          <button
            onClick={() => setOpenCategory(openCategory === category.title ? null : category.title)}
            className="w-full flex items-center justify-between p-4 bg-gradient-to-r from-black/80 via-black/70 to-black/80 backdrop-blur-xl rounded-xl border border-white/10 hover:border-gold/20 transition-all duration-300"
          >
            <span className="text-sm font-medium text-white group-hover:text-gold transition-colors">
              {category.title}
            </span>
            <ChevronDown 
              className={`w-4 h-4 text-gold transition-transform duration-300 ${
                openCategory === category.title ? 'rotate-180' : ''
              }`}
            />
          </button>
          
          <AnimatePresence>
            {openCategory === category.title && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="py-2 px-2">
                  {category.items.map((item) => (
                    <Link
                      key={item.href.pathname}
                      href={item.href}
                      className="flex items-center gap-2 p-3 rounded-lg hover:bg-white/5 text-white/70 hover:text-gold text-sm transition-all duration-300"
                    >
                      <div className="w-1 h-1 rounded-full bg-gold/50" />
                      {item.name}
                    </Link>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  )
} 