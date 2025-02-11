"use client"

import { FileText, Scale, Users, AlertTriangle, Settings, Scroll } from "lucide-react"
import { PolicyPage } from "@/components/layouts/policy-page"

export default function TermsOfService() {
  const sections = [
    {
      title: "Service Agreement",
      icon: Scroll,
      content: `This Terms of Service agreement outlines the conditions for using Agence Achraf Services' professional consultancy services.

Key Terms:
• Service scope
• User obligations
• Legal compliance
• Service delivery
• Payment terms
• Confidentiality
• Dispute resolution
• Liability limits

These terms govern our service relationship.`
    },
    {
      title: "Service Conditions",
      icon: FileText,
      content: `Service Requirements:

Client Obligations:
• Accurate information
• Timely documentation
• Fee payments
• Communication
• Cooperation

Service Delivery:
• Processing times
• Quality standards
• Communication channels
• Progress updates
• Service completion

We maintain high service standards.`
    },
    {
      title: "Legal Framework",
      icon: Scale,
      content: `Legal Compliance:

Regulatory Standards:
• Service regulations
• Legal requirements
• Industry standards
• Professional ethics

Compliance Areas:
• Documentation
• Verification
• Reporting
• Record keeping

We ensure legal compliance.`
    },
    {
      title: "Client Guidelines",
      icon: Users,
      content: `Client Requirements:

Service Process:
• Initial consultation
• Document submission
• Progress tracking
• Communication protocol
• Service completion

Client Responsibilities:
• Information accuracy
• Document authenticity
• Timeline adherence
• Fee payment
• Communication

Your cooperation ensures service quality.`
    },
    {
      title: "Important Notices",
      icon: AlertTriangle,
      content: `Key Information:

Critical Points:
• Service changes
• Requirement updates
• Process modifications
• Policy revisions

Special Considerations:
• Service limitations
• Processing delays
• External factors
• Force majeure

Stay informed of important updates.`
    },
    {
      title: "Contact Information",
      icon: Settings,
      content: `For Service Inquiries:

Contact Details:
Email: Contact@achrafservices.ma
Phone: 05 32 32 33 58
Mobile: 06 64 69 05 55
Address: الحي الإداري قرب مقهى منهاتن الناظور

Office Hours:
Monday - Friday: 9:00 AM - 5:00 PM
Saturday - Sunday: Closed

We're here to assist you.`
    }
  ]

  return (
    <PolicyPage
      title="Terms of Service"
      subtitle="General terms and conditions for our professional services"
      icon={Scroll}
      category="General Policies"
      sections={sections}
    />
  )
} 