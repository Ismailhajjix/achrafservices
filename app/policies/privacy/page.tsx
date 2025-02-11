"use client"

import { Lock, FileText, Scale, Users, AlertTriangle, Settings } from "lucide-react"
import { PolicyPage } from "@/components/layouts/policy-page"

export default function PrivacyPolicy() {
  const sections = [
    {
      title: "Policy Overview",
      icon: Lock,
      content: `This Privacy Policy outlines how Agence Achraf Services collects, uses, and protects your personal information.

Our Privacy Commitment:
• Data protection
• Information security
• Confidentiality
• Transparency
• User control
• Legal compliance
• Data minimization
• Privacy rights

We prioritize the protection of your personal information.`
    },
    {
      title: "Information Collection",
      icon: FileText,
      content: `Data We Collect:

Personal Information:
• Full name
• Contact details
• Identity documents
• Address information
• Financial data
• Employment details

Service Data:
• Application details
• Service requests
• Communication records
• Transaction history
• Document copies
• Account information

We collect only necessary information.`
    },
    {
      title: "Legal Framework",
      icon: Scale,
      content: `Legal Compliance:

Privacy Laws:
• Data protection
• Privacy regulations
• Security standards
• User rights

Compliance Areas:
• Data handling
• Information storage
• Access control
• Data sharing

We ensure compliance with privacy laws.`
    },
    {
      title: "User Rights",
      icon: Users,
      content: `Your Privacy Rights:

Access Rights:
• View personal data
• Request corrections
• Data portability
• Delete information

Control Options:
• Consent management
• Privacy settings
• Communication preferences
• Data sharing options

We respect your privacy choices.`
    },
    {
      title: "Security Measures",
      icon: AlertTriangle,
      content: `Data Protection:

Security Controls:
• Encryption
• Access controls
• Regular audits
• Secure storage

Protection Measures:
• Data backups
• Breach prevention
• Security monitoring
• Staff training

We implement robust security measures.`
    },
    {
      title: "Contact Information",
      icon: Settings,
      content: `For Privacy Inquiries:

Contact Details:
Email: Contact@achrafservices.ma
Phone: 05 32 32 33 58
Mobile: 06 64 69 05 55
Address: الحي الإداري قرب مقهى منهاتن الناظور

Office Hours:
Monday - Friday: 9:00 AM - 5:00 PM
Saturday - Sunday: Closed

We're here to address your privacy concerns.`
    }
  ]

  return (
    <PolicyPage
      title="Privacy Policy"
      subtitle="How we protect and handle your personal information"
      icon={Lock}
      category="Data Protection"
      sections={sections}
    />
  )
} 