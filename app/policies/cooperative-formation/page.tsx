"use client"

import { Users2, FileText, Scale, Users, AlertTriangle, Settings } from "lucide-react"
import { PolicyPage } from "@/components/layouts/policy-page"

export default function CooperativeFormationGuidelines() {
  const sections = [
    {
      title: "Service Overview",
      icon: Users2,
      content: `This Cooperative Formation Guidelines outlines the terms and conditions under which Agence Achraf Services assists with cooperative establishment in Morocco.

Our Premium Services:
• Eligibility assessment
• Structure planning
• Documentation preparation
• Registration process
• Member coordination
• Legal compliance
• Banking setup
• Operational guidance

We provide comprehensive support for establishing your cooperative.`
    },
    {
      title: "Documentation Requirements",
      icon: FileText,
      content: `Required Documentation:

Primary Documents:
• Member identification
• Founding documents
• Meeting minutes
• Statutes draft
• Capital proof
• Address verification

Supporting Documents:
• Business plan
• Member agreements
• Financial projections
• Activity licenses
• Property documents
• Member qualifications

All documents must be authenticated and legally certified.`
    },
    {
      title: "Legal Framework",
      icon: Scale,
      content: `Legal Compliance:

Regulatory Standards:
• Cooperative laws
• Member rights
• Governance rules
• Financial regulations

Formation Requirements:
• Minimum members
• Capital structure
• Management setup
• Voting procedures

We ensure compliance with cooperative laws.`
    },
    {
      title: "Client Responsibilities",
      icon: Users,
      content: `Your Obligations:

Member Requirements:
• Active participation
• Capital contribution
• Documentation provision
• Meeting attendance

Compliance Requirements:
• Regular reporting
• Record keeping
• Democratic governance
• Financial transparency

Member cooperation is essential.`
    },
    {
      title: "Important Notices",
      icon: AlertTriangle,
      content: `Key Information:

Processing Details:
• Formation timeline
• Registration stages
• Member obligations
• Statutory requirements

Critical Points:
• Decision making
• Profit sharing
• Member liability
• Exit procedures

Understanding these aspects is crucial.`
    },
    {
      title: "Contact Information",
      icon: Settings,
      content: `For Cooperative Formation Inquiries:

Contact Details:
Email: Contact@achrafservices.ma
Phone: 05 32 32 33 58
Mobile: 06 64 69 05 55
Address: الحي الإداري قرب مقهى منهاتن الناظور

Office Hours:
Monday - Friday: 9:00 AM - 5:00 PM
Saturday - Sunday: Closed

We're here to guide your cooperative formation.`
    }
  ]

  return (
    <PolicyPage
      title="Cooperative Formation Guidelines"
      subtitle="Terms and conditions for cooperative establishment services"
      icon={Users2}
      category="Business Formation Services"
      sections={sections}
    />
  )
} 