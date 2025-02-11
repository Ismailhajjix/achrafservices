"use client"

import { FileCheck, FileText, Scale, Users, AlertTriangle, Settings } from "lucide-react"
import { PolicyPage } from "@/components/layouts/policy-page"

export default function ApostillePolicy() {
  const sections = [
    {
      title: "Service Overview",
      icon: FileCheck,
      content: `This Apostille Policy outlines the terms and conditions under which Agence Achraf Services assists with document authentication and apostille services in Morocco.

Our Premium Services:
• Document verification
• Apostille processing
• Authentication services
• Embassy legalization
• Notary certification
• Translation services
• Document tracking
• International validation

We provide comprehensive support for your document authentication needs.`
    },
    {
      title: "Documentation Requirements",
      icon: FileText,
      content: `Required Documentation:

Primary Documents:
• Original documents
• Identity verification
• Document translations
• Power of attorney
• Supporting evidence
• Application forms

Document Categories:
• Academic credentials
• Legal documents
• Personal records
• Business documents
• Official certificates
• Public documents

All documents must meet authentication standards.`
    },
    {
      title: "Legal Framework",
      icon: Scale,
      content: `Legal Compliance:

Regulatory Standards:
• Hague Convention
• National regulations
• International laws
• Authentication rules

Process Requirements:
• Document eligibility
• Country requirements
• Verification steps
• Legal procedures

We ensure compliance with authentication laws.`
    },
    {
      title: "Client Guidelines",
      icon: Users,
      content: `Authentication Process:

Required Steps:
• Document preparation
• Information verification
• Application submission
• Processing timeline
• Status tracking

Client Responsibilities:
• Original documents
• Complete information
• Timely submission
• Fee payment
• Communication

Follow guidelines for efficient processing.`
    },
    {
      title: "Important Notices",
      icon: AlertTriangle,
      content: `Key Information:

Critical Points:
• Processing times
• Country requirements
• Document restrictions
• Fee structure

Special Considerations:
• Urgent processing
• Complex cases
• Multiple documents
• International requirements

Stay informed of authentication procedures.`
    },
    {
      title: "Contact Information",
      icon: Settings,
      content: `For Apostille Inquiries:

Contact Details:
Email: Contact@achrafservices.ma
Phone: 05 32 32 33 58
Mobile: 06 64 69 05 55
Address: الحي الإداري قرب مقهى منهاتن الناظور

Office Hours:
Monday - Friday: 9:00 AM - 5:00 PM
Saturday - Sunday: Closed

We're here to assist with your authentication needs.`
    }
  ]

  return (
    <PolicyPage
      title="Apostille Policy"
      subtitle="Guidelines for document authentication and apostille services"
      icon={FileCheck}
      category="Document Services"
      sections={sections}
    />
  )
}
