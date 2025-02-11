"use client"

import { CheckCircle, FileText, Scale, Users, AlertTriangle, Settings } from "lucide-react"
import { PolicyPage } from "@/components/layouts/policy-page"

export default function ComplianceStandards() {
  const sections = [
    {
      title: "Standards Overview",
      icon: CheckCircle,
      content: `This Compliance Standards document outlines the regulatory framework and compliance requirements that Agence Achraf Services adheres to in all operations.

Our Compliance Areas:
• Legal requirements
• Regulatory standards
• Industry practices
• Data protection
• Service quality
• Documentation
• Professional ethics
• Risk management

We maintain the highest standards of compliance.`
    },
    {
      title: "Regulatory Framework",
      icon: FileText,
      content: `Compliance Requirements:

Legal Standards:
• Moroccan business law
• Immigration regulations
• Financial compliance
• Data protection laws
• Service regulations
• Professional licensing

Industry Standards:
• Quality assurance
• Service delivery
• Documentation
• Client protection
• Ethics guidelines
• Professional conduct

All operations adhere to applicable laws.`
    },
    {
      title: "Implementation",
      icon: Scale,
      content: `Compliance Implementation:

Operational Standards:
• Staff training
• Process monitoring
• Quality control
• Risk assessment
• Regular audits
• Update procedures

Control Measures:
• Documentation review
• Performance tracking
• Incident reporting
• Corrective actions
• Preventive measures
• Continuous improvement

We ensure consistent compliance adherence.`
    },
    {
      title: "Stakeholder Obligations",
      icon: Users,
      content: `Mutual Responsibilities:

Company Obligations:
• Standard maintenance
• Regular updates
• Staff training
• Client protection
• Data security
• Service quality

Client Requirements:
• Information accuracy
• Document authenticity
• Regulatory compliance
• Timely cooperation

Mutual commitment ensures compliance success.`
    },
    {
      title: "Important Notices",
      icon: AlertTriangle,
      content: `Key Information:

Compliance Details:
• Regular updates
• Standard changes
• Legal amendments
• Industry updates

Critical Points:
• Mandatory requirements
• Non-compliance risks
• Reporting obligations
• Update procedures

Understanding these aspects is essential.`
    },
    {
      title: "Contact Information",
      icon: Settings,
      content: `For Compliance Inquiries:

Contact Details:
Email: Contact@achrafservices.ma
Phone: 05 32 32 33 58
Mobile: 06 64 69 05 55
Address: الحي الإداري قرب مقهى منهاتن الناظور

Office Hours:
Monday - Friday: 9:00 AM - 5:00 PM
Saturday - Sunday: Closed

We're here to address your compliance concerns.`
    }
  ]

  return (
    <PolicyPage
      title="Compliance Standards"
      subtitle="Our commitment to regulatory compliance and professional standards"
      icon={CheckCircle}
      category="General Policies"
      sections={sections}
    />
  )
} 