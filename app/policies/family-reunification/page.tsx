"use client"

import { Heart, FileText, Scale, Users, AlertTriangle, Settings } from "lucide-react"
import { PolicyPage } from "@/components/layouts/policy-page"

export default function FamilyReunificationPolicy() {
  const sections = [
    {
      title: "Service Overview",
      icon: Heart,
      content: `This Family Reunification Policy outlines the terms and conditions under which Agence Achraf Services assists with family reunification procedures in Morocco.

Our Premium Services:
• Eligibility assessment
• Application strategy
• Document preparation
• Relationship verification
• Application submission
• Status monitoring
• Family member support
• Integration guidance

We provide comprehensive support for reuniting families in Morocco.`
    },
    {
      title: "Documentation Requirements",
      icon: FileText,
      content: `Required Documentation:

Primary Documents:
• Valid passports
• Marriage certificates
• Birth certificates
• Family records
• Proof of relationship
• Residency permits

Supporting Documents:
• Financial statements
• Housing documentation
• Employment contracts
• Health insurance
• Police clearances
• Integration evidence

All documents must be authenticated and translated.`
    },
    {
      title: "Legal Framework",
      icon: Scale,
      content: `Legal Compliance:

Regulatory Standards:
• Family law requirements
• Immigration regulations
• Residency conditions
• Integration criteria

Process Requirements:
• Legal relationships
• Financial thresholds
• Housing standards
• Integration measures

We ensure compliance with family reunification laws.`
    },
    {
      title: "Client Guidelines",
      icon: Users,
      content: `Client Requirements:

Sponsor Requirements:
• Legal residence status
• Sufficient income
• Adequate housing
• Integration commitment

Family Requirements:
• Valid documentation
• Health checks
• Integration efforts
• Timely responses

Your cooperation ensures successful reunification.`
    },
    {
      title: "Important Notices",
      icon: AlertTriangle,
      content: `Key Information:

Processing Details:
• Processing times vary
• Age restrictions apply
• Income requirements strict
• Housing standards enforced

Critical Points:
• No guarantee of approval
• Relationship verification
• Integration requirements
• Maintenance obligations

Understanding these factors is crucial.`
    },
    {
      title: "Contact Information",
      icon: Settings,
      content: `For Family Reunification Inquiries:

Contact Details:
Email: Contact@achrafservices.ma
Phone: 05 32 32 33 58
Mobile: 06 64 69 05 55
Address: الحي الإداري قرب مقهى منهاتن الناظور

Office Hours:
Monday - Friday: 9:00 AM - 5:00 PM
Saturday - Sunday: Closed

We're here to help reunite your family.`
    }
  ]

  return (
    <PolicyPage
      title="Family Reunification Policy"
      subtitle="Guidelines for family reunification procedures and requirements"
      icon={Heart}
      category="Immigration Services"
      sections={sections}
    />
  )
} 