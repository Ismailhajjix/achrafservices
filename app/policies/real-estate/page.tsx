"use client"

import { Building, FileText, Scale, Users, AlertTriangle, Settings } from "lucide-react"
import { PolicyPage } from "@/components/layouts/policy-page"

export default function RealEstateDocumentation() {
  const sections = [
    {
      title: "Service Overview",
      icon: Building,
      content: `This Real Estate Documentation Policy outlines the terms and conditions under which Agence Achraf Services assists with real estate documentation in Morocco.

Our Premium Services:
• Property verification
• Title deed processing
• Contract preparation
• Documentation review
• Legal compliance check
• Registration assistance
• Tax documentation
• Transaction support

We provide comprehensive support for your real estate documentation needs.`
    },
    {
      title: "Documentation Requirements",
      icon: FileText,
      content: `Required Documentation:

Primary Documents:
• Property title
• Identity documents
• Tax certificates
• Location plans
• Building permits
• Ownership history

Supporting Documents:
• Property assessment
• Survey reports
• Payment records
• Insurance policies
• Utility documents
• Previous contracts

All documents must be authenticated and legally verified.`
    },
    {
      title: "Legal Framework",
      icon: Scale,
      content: `Legal Compliance:

Regulatory Standards:
• Property laws
• Registration rules
• Tax regulations
• Zoning requirements

Transaction Requirements:
• Legal verification
• Title clearance
• Tax compliance
• Transfer procedures

We ensure compliance with real estate laws.`
    },
    {
      title: "Client Guidelines",
      icon: Users,
      content: `Client Requirements:

Documentation Process:
• Document submission
• Information verification
• Payment procedures
• Status updates
• Final review

Client Responsibilities:
• Accurate information
• Complete documentation
• Timely submission
• Communication
• Legal compliance

Follow guidelines for smooth processing.`
    },
    {
      title: "Important Notices",
      icon: AlertTriangle,
      content: `Key Information:

Critical Points:
• Processing times
• Document requirements
• Legal obligations
• Payment terms

Special Considerations:
• Property types
• Ownership status
• Legal restrictions
• Transaction timing

Stay informed of documentation requirements.`
    },
    {
      title: "Contact Information",
      icon: Settings,
      content: `For Real Estate Documentation Inquiries:

Contact Details:
Email: Contact@achrafservices.ma
Phone: 05 32 32 33 58
Mobile: 06 64 69 05 55
Address: الحي الإداري قرب مقهى منهاتن الناظور

Office Hours:
Monday - Friday: 9:00 AM - 5:00 PM
Saturday - Sunday: Closed

We're here to assist with your real estate documentation needs.`
    }
  ]

  return (
    <PolicyPage
      title="Real Estate Documentation Policy"
      subtitle="Guidelines for real estate documentation and transaction support"
      icon={Building}
      category="Property Services"
      sections={sections}
    />
  )
} 