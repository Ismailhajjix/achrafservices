"use client"

import { HeartPulse, FileText, Scale, Users, AlertTriangle, Settings } from "lucide-react"
import { PolicyPage } from "@/components/layouts/policy-page"

export default function SocialSecurityServices() {
  const sections = [
    {
      title: "Service Overview",
      icon: HeartPulse,
      content: `This Social Security Services Policy outlines the terms and conditions under which Agence Achraf Services assists with social security matters in Morocco.

Our Premium Services:
• Registration assistance
• Benefits assessment
• Claims processing
• Status verification
• Document preparation
• Compliance guidance
• Updates management
• Benefits tracking

We provide comprehensive support for your social security needs.`
    },
    {
      title: "Documentation Requirements",
      icon: FileText,
      content: `Required Documentation:

Primary Documents:
• Identity documents
• Employment contracts
• Salary statements
• Medical records
• Family documents
• Residence proof

Supporting Documents:
• Previous coverage
• Contribution history
• Medical certificates
• Employer declarations
• Dependent details
• Bank information

All documents must be officially verified.`
    },
    {
      title: "Legal Framework",
      icon: Scale,
      content: `Legal Compliance:

Regulatory Standards:
• Social security laws
• Employment regulations
• Healthcare provisions
• Benefits eligibility

Coverage Requirements:
• Contribution periods
• Benefit conditions
• Coverage scope
• Claims procedures

We ensure compliance with social security laws.`
    },
    {
      title: "Client Guidelines",
      icon: Users,
      content: `Client Requirements:

Application Process:
• Initial registration
• Document submission
• Benefits selection
• Status monitoring
• Updates reporting

Client Responsibilities:
• Accurate information
• Timely documentation
• Regular updates
• Communication
• Compliance maintenance

Follow guidelines for efficient processing.`
    },
    {
      title: "Important Notices",
      icon: AlertTriangle,
      content: `Key Information:

Critical Points:
• Processing times
• Coverage periods
• Benefit limitations
• Update requirements

Special Considerations:
• Dependent coverage
• International benefits
• Special categories
• Emergency services

Stay informed of coverage requirements.`
    },
    {
      title: "Contact Information",
      icon: Settings,
      content: `For Social Security Inquiries:

Contact Details:
Email: Contact@achrafservices.ma
Phone: 05 32 32 33 58
Mobile: 06 64 69 05 55
Address: الحي الإداري قرب مقهى منهاتن الناظور

Office Hours:
Monday - Friday: 9:00 AM - 5:00 PM
Saturday - Sunday: Closed

We're here to assist with your social security needs.`
    }
  ]

  return (
    <PolicyPage
      title="Social Security Services Policy"
      subtitle="Guidelines for social security registration and benefits management"
      icon={HeartPulse}
      category="Social Services"
      sections={sections}
    />
  )
} 