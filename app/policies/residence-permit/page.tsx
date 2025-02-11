"use client"

import { Home, FileText, Scale, Users, AlertTriangle, Settings } from "lucide-react"
import { PolicyPage } from "@/components/layouts/policy-page"

export default function ResidencePermitPolicy() {
  const sections = [
    {
      title: "Service Overview",
      icon: Home,
      content: `This Residence Permit Policy outlines the terms and conditions under which Agence Achraf Services assists with obtaining and renewing residence permits in Morocco.

Our Premium Services:
• Eligibility assessment
• Application preparation
• Document verification
• Police registration
• Biometric assistance
• Status tracking
• Renewal management
• Family inclusion support

We provide comprehensive support for your residence permit needs.`
    },
    {
      title: "Documentation Requirements",
      icon: FileText,
      content: `Required Documentation:

Essential Documents:
• Valid passport
• Entry visa (if applicable)
• Proof of residence
• Financial statements
• Health insurance
• Criminal record check

Supporting Documents:
• Employment contract
• Study enrollment
• Marriage certificate
• Birth certificates
• Bank statements
• Rental agreement

All documents must be officially translated and authenticated.`
    },
    {
      title: "Legal Framework",
      icon: Scale,
      content: `Legal Compliance:

Regulatory Standards:
• Immigration laws
• Residency regulations
• Duration limitations
• Category requirements

Compliance Areas:
• Registration deadlines
• Reporting obligations
• Status maintenance
• Renewal procedures

We ensure full compliance with residency laws.`
    },
    {
      title: "Client Guidelines",
      icon: Users,
      content: `Client Requirements:

Required Actions:
• Accurate information
• Timely document submission
• Address registration
• Status maintenance
• Regular reporting

Ongoing Requirements:
• Valid documentation
• Address updates
• Activity compliance
• Renewal timing

Your adherence ensures permit validity.`
    },
    {
      title: "Important Notices",
      icon: AlertTriangle,
      content: `Key Information:

Processing Details:
• Processing times vary
• Authority decisions final
• Additional requirements possible
• Renewal deadlines strict

Critical Points:
• Status maintenance required
• Travel restrictions apply
• Absence limitations
• Category changes

Understanding these points is essential.`
    },
    {
      title: "Contact Information",
      icon: Settings,
      content: `For Residence Permit Inquiries:

Contact Details:
Email: Contact@achrafservices.ma
Phone: 05 32 32 33 58
Mobile: 06 64 69 05 55
Address: الحي الإداري قرب مقهى منهاتن الناظور

Office Hours:
Monday - Friday: 9:00 AM - 5:00 PM
Saturday - Sunday: Closed

We're here to assist with your residence needs.`
    }
  ]

  return (
    <PolicyPage
      title="Residence Permit Policy"
      subtitle="Guidelines for obtaining and maintaining residence permits in Morocco"
      icon={Home}
      category="Immigration Services"
      sections={sections}
    />
  )
} 