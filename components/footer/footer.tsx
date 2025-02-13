"use client"

import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, ArrowRight } from "lucide-react"
import type { Route } from "next"

interface Policy {
  title: string
  href: { pathname: Route }
}

export function Footer() {
  const businessPolicies: Policy[] = [
    { title: "Company Formation", href: { pathname: "/policies/company-formation" as Route } },
    { title: "Cooperative Formation", href: { pathname: "/policies/cooperative-formation" as Route } },
    { title: "Self Entrepreneur", href: { pathname: "/policies/self-entrepreneur" as Route } },
    { title: "Real Estate", href: { pathname: "/policies/real-estate" as Route } },
    { title: "Apostille", href: { pathname: "/policies/apostille" as Route } },
    { title: "Social Security", href: { pathname: "/policies/social-security" as Route } },
    { title: "ANAPEC Employment", href: { pathname: "/policies/anapec-employment" as Route } },
  ]

  const immigrationPolicies: Policy[] = [
    { title: "Visa Application", href: { pathname: "/policies/visa-application" as Route } },
    { title: "Work Permit", href: { pathname: "/policies/work-permit" as Route } },
    { title: "Residence Permit", href: { pathname: "/policies/residence-permit" as Route } },
    { title: "Citizenship", href: { pathname: "/policies/citizenship" as Route } },
    { title: "Family Reunification", href: { pathname: "/policies/family-reunification" as Route } },
    { title: "Student Visa", href: { pathname: "/policies/student-visa" as Route } },
    { title: "Travel Documents", href: { pathname: "/policies/travel-documents" as Route } },
  ]

  const generalPolicies: Policy[] = [
    { title: "Privacy Policy", href: { pathname: "/policies/privacy" as Route } },
    { title: "Terms of Service", href: { pathname: "/policies/terms" as Route } },
    { title: "Refund Policy", href: { pathname: "/policies/refund" as Route } },
    { title: "Compliance", href: { pathname: "/policies/compliance" as Route } },
    { title: "Accessibility", href: { pathname: "/policies/accessibility" as Route } },
    { title: "Document Accuracy", href: { pathname: "/policies/document-accuracy" as Route } },
    { title: "Contact", href: { pathname: "/policies/contact" as Route } },
  ]

  return (
    <footer className="relative bg-black border-t border-gold/10">
      <div className="container mx-auto px-4 pt-16 pb-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-12">
          {/* Company Info & Contact */}
          <div className="space-y-4 lg:col-span-3">
            {/* Logo */}
            <div className="relative h-[80px] w-[240px]">
              <Image
                src="/images/footer-logo.png"
                alt="Agence Achraf Services"
                fill
                className="object-contain"
                priority
              />
            </div>
            {/* Description */}
            <p className="text-gray-400 text-sm leading-relaxed">
              Your trusted partner for business and immigration services in Morocco. We provide comprehensive solutions with expertise and dedication.
            </p>
            {/* Contact Info */}
            <div className="space-y-2">
              <Link
                href="tel:+212664690555"
                className="flex items-center gap-2 text-gray-400 hover:text-gold transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span>+212 664 690 555</span>
              </Link>
              <Link
                href="mailto:info@achrafservices.ma"
                className="flex items-center gap-2 text-gray-400 hover:text-gold transition-colors"
              >
                <Mail className="h-4 w-4" />
                <span>info@achrafservices.ma</span>
              </Link>
            </div>
          </div>

          {/* Business Policies */}
          <div className="lg:col-span-3">
            <h3 className="text-white font-semibold mb-4">Business Policies</h3>
            <ul className="space-y-2">
              {businessPolicies.map((policy) => (
                <li key={policy.title}>
                  <Link
                    href={policy.href}
                    className="text-gray-400 hover:text-gold transition-colors text-sm flex items-center gap-1"
                  >
                    <ArrowRight className="h-3 w-3" />
                    {policy.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Immigration Policies */}
          <div className="lg:col-span-3">
            <h3 className="text-white font-semibold mb-4">Immigration Policies</h3>
            <ul className="space-y-2">
              {immigrationPolicies.map((policy) => (
                <li key={policy.title}>
                  <Link
                    href={policy.href}
                    className="text-gray-400 hover:text-gold transition-colors text-sm flex items-center gap-1"
                  >
                    <ArrowRight className="h-3 w-3" />
                    {policy.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* General Policies */}
          <div className="lg:col-span-3">
            <h3 className="text-white font-semibold mb-4">General Policies</h3>
            <ul className="space-y-2">
              {generalPolicies.map((policy) => (
                <li key={policy.title}>
                  <Link
                    href={policy.href}
                    className="text-gray-400 hover:text-gold transition-colors text-sm flex items-center gap-1"
                  >
                    <ArrowRight className="h-3 w-3" />
                    {policy.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gold/10 pt-6">
          <p className="text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} Agence Achraf Services. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
} 