"use client"

import Image from 'next/image'
import Link from "next/link"
import { Phone, Mail } from "lucide-react"
import type { Route } from "next"

const businessPolicies = [
  { label: "Company Formation", href: "/policies/company-formation" },
  { label: "Cooperative Formation", href: "/policies/cooperative-formation" },
  { label: "Self Entrepreneur", href: "/policies/self-entrepreneur" },
  { label: "Real Estate", href: "/policies/real-estate" },
  { label: "Apostille", href: "/policies/apostille" },
  { label: "Social Security", href: "/policies/social-security" },
  { label: "ANAPEC Employment", href: "/policies/anapec-employment" },
]

const immigrationPolicies = [
  { label: "Visa Application", href: "/policies/visa-application" },
  { label: "Work Permit", href: "/policies/work-permit" },
  { label: "Residence Permit", href: "/policies/residence-permit" },
  { label: "Citizenship", href: "/policies/citizenship" },
  { label: "Family Reunification", href: "/policies/family-reunification" },
  { label: "Student Visa", href: "/policies/student-visa" },
  { label: "Travel Documents", href: "/policies/travel-documents" },
]

const generalPolicies = [
  { label: "Privacy Policy", href: "/policies/privacy" },
  { label: "Terms of Service", href: "/policies/terms" },
  { label: "Refund Policy", href: "/policies/refund" },
  { label: "Compliance", href: "/policies/compliance" },
  { label: "Accessibility", href: "/policies/accessibility" },
  { label: "Document Accuracy", href: "/policies/document-accuracy" },
  { label: "Contact", href: "/contact" },
]

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <Link href="/">
              <Image 
                src="/images/footer-logo.png"
                alt="Agence Achraf Services"
                width={180}
                height={45}
                className="h-[45px] w-auto"
                quality={100}
              />
            </Link>
            
            <p className="text-white/70 text-sm leading-relaxed">
              Your trusted partner for business and immigration services in Morocco. We provide comprehensive solutions with expertise and dedication.
            </p>

            <div className="space-y-3">
              <a 
                href="tel:+212664690555"
                className="flex items-center gap-2 text-white/70 hover:text-gold transition-colors duration-300"
              >
                <Phone className="w-4 h-4" />
                <span>+212 664 690 555</span>
              </a>
              <a 
                href="mailto:info@achrafservices.ma"
                className="flex items-center gap-2 text-white/70 hover:text-gold transition-colors duration-300"
              >
                <Mail className="w-4 h-4" />
                <span>info@achrafservices.ma</span>
              </a>
            </div>
          </div>

          {/* Business Policies */}
          <div>
            <h3 className="text-white font-semibold mb-6">Business Policies</h3>
            <ul className="space-y-3">
              {businessPolicies.map((policy) => (
                <li key={policy.label}>
                  <Link 
                    href={policy.href as Route}
                    className="text-white/70 hover:text-gold transition-colors duration-300 flex items-center gap-2"
                  >
                    <span className="text-gold">→</span>
                    {policy.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Immigration Policies */}
          <div>
            <h3 className="text-white font-semibold mb-6">Immigration Policies</h3>
            <ul className="space-y-3">
              {immigrationPolicies.map((policy) => (
                <li key={policy.label}>
                  <Link 
                    href={policy.href as Route}
                    className="text-white/70 hover:text-gold transition-colors duration-300 flex items-center gap-2"
                  >
                    <span className="text-gold">→</span>
                    {policy.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* General Policies */}
          <div>
            <h3 className="text-white font-semibold mb-6">General Policies</h3>
            <ul className="space-y-3">
              {generalPolicies.map((policy) => (
                <li key={policy.label}>
                  <Link 
                    href={policy.href as Route}
                    className="text-white/70 hover:text-gold transition-colors duration-300 flex items-center gap-2"
                  >
                    <span className="text-gold">→</span>
                    {policy.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-6 border-t border-white/10">
          <div className="text-center text-sm text-white/50">
            ©2024 Agence Achraf Services • Built by{" "}
            <a 
              href="https://nadevo.ma/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gold transition-colors hover:text-gold/80"
            >
              @nadevogroupe
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
} 