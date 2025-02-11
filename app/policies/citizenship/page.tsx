"use client"

import { Flag, FileText, Scale, Users, AlertTriangle, Settings } from "lucide-react"
import { PolicyPage } from "@/components/layouts/policy-page"

export default function CitizenshipNaturalization() {
  const sections = [
    {
      title: "Service Overview",
      icon: Flag,
      content: `This Citizenship & Naturalization Policy outlines the terms and conditions under which Agence Achraf Services assists with citizenship applications in Morocco.

Our Premium Services:
• Eligibility assessment
• Naturalization strategy
• Document preparation
• Application processing
• Status monitoring
• Integration support
• Legal representation
• Citizenship guidance

We provide comprehensive support for your path to Moroccan citizenship.`
    },
    {
      title: "Documentation Requirements",
      icon: FileText,
      content: `Required Documentation:

Primary Documents:
• Valid passport
• Birth certificate
• Marriage certificate
• Residence permits
• Criminal records
• Financial records

Supporting Documents:
• Integration evidence
• Language proficiency
• Employment history
• Tax records
• Property documents
• Character references

All documents must be authenticated and officially translated.`
    },
    {
      title: "Legal Framework",
      icon: Scale,
      content: `Legal Compliance:

Regulatory Standards:
• Citizenship laws
• Residency requirements
• Integration criteria
• Dual nationality rules

Eligibility Criteria:
• Residency duration
• Character requirements
• Language proficiency
• Cultural integration

We ensure compliance with citizenship laws.`
    },
    {
      title: "Client Guidelines",
      icon: Users,
      content: `Client Requirements:

Application Process:
• Document preparation
• Information accuracy
• Timeline adherence
• Communication protocol

Client Responsibilities:
• Complete documentation
• Accurate information
• Timely responses
• Update notifications

Your cooperation ensures smooth processing.`
    },
    {
      title: "Important Notices",
      icon: AlertTriangle,
      content: `Key Information:

Critical Points:
• Processing variations
• Requirement changes
• Security updates
• Policy modifications

Special Considerations:
• Emergency processing
• Special categories
• Restricted cases
• Priority handling

Stay informed of important updates.`
    },
    {
      title: "Contact Information",
      icon: Settings,
      content: `For Citizenship & Naturalization Inquiries:

Contact Details:
Email: Contact@achrafservices.ma
Phone: 05 32 32 33 58
Mobile: 06 64 69 05 55
Address: الحي الإداري قرب مقهى منهاتن الناظور

Office Hours:
Monday - Friday: 9:00 AM - 5:00 PM
Saturday - Sunday: Closed

We're here to assist with your citizenship journey.`
    }
  ]

  return (
    <PolicyPage
      title="Citizenship & Naturalization Policy"
      subtitle="Terms and conditions for citizenship application services in Morocco"
      icon={Flag}
      category="Immigration Services"
      sections={sections}
    />
  )
}