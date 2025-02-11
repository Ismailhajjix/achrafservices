"use client"

import { Shield, Briefcase, FileText, Scale, Users, AlertTriangle, Settings } from "lucide-react"
import { PolicyPage } from "@/components/layouts/policy-page"

export default function AnapecEmploymentSupport() {
  const sections = [
    {
      title: "Service Overview",
      icon: Briefcase,
      content: `This ANAPEC Employment Support Policy outlines the terms and conditions under which Agence Achraf Services assists with employment services through ANAPEC in Morocco.

Our Premium Services:
• Job search assistance
• CV preparation
• Interview coaching
• Skills assessment
• ANAPEC registration
• Employer matching
• Career guidance
• Training referrals

We provide comprehensive support for your employment journey.`
    },
    {
      title: "Documentation Requirements",
      icon: FileText,
      content: `Required Documentation:

Primary Documents:
• Identity documents
• Educational certificates
• Professional qualifications
• Work experience proof
• Skills certifications
• Residence permit

Supporting Documents:
• Reference letters
• Training certificates
• Language proficiency
• Portfolio samples
• Previous contracts
• Professional licenses

All documents must be officially verified.`
    },
    {
      title: "Legal Framework",
      icon: Scale,
      content: `Legal Compliance:

Regulatory Standards:
• Labor laws
• Employment regulations
• ANAPEC guidelines
• Work permit rules

Employment Requirements:
• Contract standards
• Working conditions
• Salary regulations
• Benefits compliance

We ensure adherence to employment laws.`
    },
    {
      title: "Client Responsibilities",
      icon: Users,
      content: `Your Obligations:

Job Seeker Requirements:
• Active participation
• Regular updates
• Interview attendance
• Training completion

Compliance Requirements:
• Document accuracy
• Profile maintenance
• Status reporting
• Feedback provision

Your engagement enhances success rates.`
    },
    {
      title: "Important Notices",
      icon: AlertTriangle,
      content: `Key Information:

Process Details:
• Registration timing
• Job search duration
• Interview schedules
• Response deadlines

Critical Points:
• Market conditions
• Skill requirements
• Position availability
• Selection criteria

Understanding these factors is essential.`
    },
    {
      title: "Contact Information",
      icon: Settings,
      content: `For Employment Support Inquiries:

Contact Details:
Email: Contact@achrafservices.ma
Phone: 05 32 32 33 58
Mobile: 06 64 69 05 55
Address: الحي الإداري قرب مقهى منهاتن الناظور

Office Hours:
Monday - Friday: 9:00 AM - 5:00 PM
Saturday - Sunday: Closed

We're here to support your career goals.`
    }
  ]

  return (
    <PolicyPage
      title="ANAPEC Employment Support"
      subtitle="Terms and conditions for employment assistance services through ANAPEC"
      icon={Shield}
      category="Employment & Social Services"
      sections={sections}
    />
  )
} 