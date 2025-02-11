"use client"

import { Building2, FileText, Scale, Users, AlertTriangle, Settings } from "lucide-react"
import { PolicyPage } from "@/components/layouts/policy-page"

export default function CompanyFormationAgreement() {
  const sections = [
    {
      title: "Service Overview",
      icon: Building2,
      content: `This Company Formation Agreement outlines the terms and conditions under which Agence Achraf Services assists with business registration in Morocco.

Our Premium Services:
• Company registration
• Legal structure setup
• Documentation preparation
• License acquisition
• Tax registration
• Bank account setup
• Compliance guidance
• Business support

We provide comprehensive support for your business formation needs.`
    },
    {
      title: "Documentation Requirements",
      icon: FileText,
      content: `Required Documentation:

Primary Documents:
• Identity documents
• Business plan
• Capital proof
• Address proof
• Partner details
• Legal declarations

Supporting Documents:
• Financial statements
• Reference letters
• Lease agreements
• Professional licenses
• Partner contracts
• Bank references

All documents must be officially verified.`
    },
    {
      title: "Legal Framework",
      icon: Scale,
      content: `Legal Compliance:

Regulatory Standards:
• Company laws
• Business regulations
• Tax requirements
• License rules

Formation Requirements:
• Legal structure
• Capital requirements
• Partner obligations
• Registration process

We ensure compliance with business laws.`
    },
    {
      title: "Client Guidelines",
      icon: Users,
      content: `Client Requirements:

Business Setup:
• Structure selection
• Partner agreements
• Capital deposit
• Document submission

Compliance Requirements:
• Legal obligations
• Tax compliance
• License maintenance
• Regular reporting

Your cooperation ensures successful formation.`
    },
    {
      title: "Important Notices",
      icon: AlertTriangle,
      content: `Key Information:

Process Details:
• Formation timeline
• Legal requirements
• Cost structure
• Approval process

Critical Points:
• Capital requirements
• Partner obligations
• Legal deadlines
• Compliance needs

Understanding these factors is essential.`
    },
    {
      title: "Contact Information",
      icon: Settings,
      content: `For Company Formation Inquiries:

Contact Details:
Email: Contact@achrafservices.ma
Phone: 05 32 32 33 58
Mobile: 06 64 69 05 55
Address: الحي الإداري قرب مقهى منهاتن الناظور

Office Hours:
Monday - Friday: 9:00 AM - 5:00 PM
Saturday - Sunday: Closed

We're here to support your business formation journey.`
    }
  ]

  return (
    <PolicyPage
      title="Company Formation Agreement"
      subtitle="Terms and conditions for company registration and formation services"
      icon={Building2}
      category="Business Formation Services"
      sections={sections}
    />
  )
} 