"use client"

import { Briefcase, FileText, Scale, Users, AlertTriangle, Settings } from "lucide-react"
import { PolicyPage } from "@/components/layouts/policy-page"

export default function SelfEntrepreneurTerms() {
  const sections = [
    {
      title: "Service Overview",
      icon: Briefcase,
      content: `This Self-Entrepreneur Terms document outlines the conditions under which Agence Achraf Services assists with self-employment registration in Morocco.

Our Premium Services:
• Eligibility assessment
• Status registration
• Documentation support
• Tax registration
• License acquisition
• Banking assistance
• Compliance guidance
• Business planning

We provide comprehensive support for your self-employment journey.`
    },
    {
      title: "Documentation Requirements",
      icon: FileText,
      content: `Required Documentation:

Primary Documents:
• Identity documents
• Residence proof
• Activity declaration
• Tax documents
• Professional certificates
• Bank details

Supporting Documents:
• Business plan
• Financial projections
• Previous experience
• Skills certificates
• Property documents
• Reference letters

All documents must be officially verified.`
    },
    {
      title: "Legal Framework",
      icon: Scale,
      content: `Legal Compliance:

Regulatory Standards:
• Self-employment laws
• Tax regulations
• Business rules
• License requirements

Registration Requirements:
• Activity eligibility
• Income limits
• Tax obligations
• Reporting duties

We ensure compliance with self-employment laws.`
    },
    {
      title: "Client Guidelines",
      icon: Users,
      content: `Client Requirements:

Registration Process:
• Status selection
• Activity declaration
• Document submission
• Fee payment

Compliance Requirements:
• Record keeping
• Tax reporting
• Status updates
• Income tracking

Your cooperation ensures successful registration.`
    },
    {
      title: "Important Notices",
      icon: AlertTriangle,
      content: `Key Information:

Process Details:
• Registration time
• Status validity
• Income thresholds
• Renewal terms

Critical Points:
• Activity limits
• Tax deadlines
• Status changes
• Legal obligations

Understanding these points is crucial.`
    },
    {
      title: "Contact Information",
      icon: Settings,
      content: `For Self-Employment Inquiries:

Contact Details:
Email: Contact@achrafservices.ma
Phone: 05 32 32 33 58
Mobile: 06 64 69 05 55
Address: الحي الإداري قرب مقهى منهاتن الناظور

Office Hours:
Monday - Friday: 9:00 AM - 5:00 PM
Saturday - Sunday: Closed

We're here to support your self-employment journey.`
    }
  ]

  return (
    <PolicyPage
      title="Self-Entrepreneur Terms"
      subtitle="Terms and conditions for self-employment registration services"
      icon={Briefcase}
      category="Business Formation Services"
      sections={sections}
    />
  )
} 