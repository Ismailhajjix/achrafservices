"use client"

import Link from "next/link"
import { Menu, X, HomeIcon, ChevronDown, Building2, Plane } from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"
import { Button } from "@/components/ui/forms/button"
import { useState } from "react"
import { services } from "@/config/services"
import type { Route } from "next"

interface MobileMenuProps {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

export function MobileMenu({ isOpen, setIsOpen }: MobileMenuProps) {
  const [businessOpen, setBusinessOpen] = useState(false)
  const [immigrationOpen, setImmigrationOpen] = useState(false)

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-x-0 top-[72px] p-4 bg-black border-b border-zinc-800 lg:hidden z-50 max-h-[calc(100vh-72px)] overflow-y-auto"
        >
          <nav className="grid gap-2">
            <Link
              href={{ pathname: "/" as Route }}
              className="flex items-center gap-2 p-2 hover:bg-zinc-900 rounded-lg text-zinc-400 hover:text-white transition-colors"
              onClick={() => setIsOpen(false)}
            >
              <HomeIcon className="w-5 h-5" />
              <span>Home</span>
            </Link>

            {/* Business Services Dropdown */}
            <div className="border-t border-zinc-800 pt-2">
              <button
                onClick={() => setBusinessOpen(!businessOpen)}
                className="flex items-center justify-between w-full p-2 hover:bg-zinc-900 rounded-lg text-zinc-400 hover:text-white transition-colors"
              >
                <div className="flex items-center gap-2">
                  <Building2 className="w-5 h-5" />
                  <span>Business Services</span>
                </div>
                <ChevronDown
                  className={`w-5 h-5 transition-transform ${
                    businessOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {businessOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="pl-4 py-2 space-y-1">
                      {services.business.map((service) => (
                        <Link
                          key={service.path.pathname}
                          href={service.path}
                          className="flex items-center gap-2 p-2 hover:bg-zinc-900 rounded-lg text-zinc-400 hover:text-white transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          <service.icon className="w-4 h-4" />
                          <span>{service.name}</span>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Immigration Services Dropdown */}
            <div className="border-t border-zinc-800 pt-2">
              <button
                onClick={() => setImmigrationOpen(!immigrationOpen)}
                className="flex items-center justify-between w-full p-2 hover:bg-zinc-900 rounded-lg text-zinc-400 hover:text-white transition-colors"
              >
                <div className="flex items-center gap-2">
                  <Plane className="w-5 h-5" />
                  <span>Immigration Services</span>
                </div>
                <ChevronDown
                  className={`w-5 h-5 transition-transform ${
                    immigrationOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {immigrationOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="pl-4 py-2 space-y-1">
                      {services.immigration.map((service) => (
                        <Link
                          key={service.path.pathname}
                          href={service.path}
                          className="flex items-center gap-2 p-2 hover:bg-zinc-900 rounded-lg text-zinc-400 hover:text-white transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          <service.icon className="w-4 h-4" />
                          <span>{service.name}</span>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="border-t border-zinc-800 pt-2">
              <Link
                href={{ pathname: "/about" as Route }}
                className="flex items-center gap-2 p-2 hover:bg-zinc-900 rounded-lg text-zinc-400 hover:text-white transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <span>About</span>
              </Link>
              <Link
                href={{ pathname: "/contact" as Route }}
                className="flex items-center gap-2 p-2 hover:bg-zinc-900 rounded-lg text-zinc-400 hover:text-white transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <span>Contact</span>
              </Link>
            </div>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  )
} 