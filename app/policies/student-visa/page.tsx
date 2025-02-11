"use client"

import { GraduationCap, FileText, Scale, Users, AlertTriangle, Settings } from "lucide-react"
import { PolicyPage } from "@/components/layouts/policy-page"

export default function StudentVisaAssistance() {
  const sections = [
    {
      title: "Service Overview",
      icon: GraduationCap,
      content: `This Student Visa Assistance Policy outlines the terms and conditions under which Agence Achraf Services assists with student visa applications in Morocco.

Our Premium Services:
• Visa eligibility assessment
• Application preparation
• Document verification
• University liaison
• Status tracking
• Visa interview prep
• Extension support
• Student guidance

We provide comprehensive support for your student visa needs.`
    },
    {
      title: "Documentation Requirements",
      icon: FileText,
      content: `Required Documentation:

Primary Documents:
• Valid passport
• Admission letter
• Financial proof
• Academic records
• Health insurance
• Language proficiency

Supporting Documents:
• Study plan
• Accommodation proof
• Bank statements
• Sponsor letters
• Medical certificates
• Previous visas

All documents must be officially verified.`
    },
    {
      title: "Legal Framework",
      icon: Scale,
      content: `Legal Compliance:

Regulatory Standards:
• Student visa laws
• Education regulations
• Stay requirements
• Study conditions

Visa Requirements:
• Duration limits
• Study progress
• Financial means
• Health coverage

We ensure compliance with student visa laws.`
    },
    {
      title: "Client Guidelines",
      icon: Users,
      content: `Client Requirements:

Student Obligations:
• Document accuracy
• Study commitment
• Regular updates
• Status maintenance

Compliance Requirements:
• Course attendance
• Progress reports
• Address updates
• Visa conditions

Your compliance ensures visa validity.`
    },
    {
      title: "Important Notices",
      icon: AlertTriangle,
      content: `Key Information:

Process Details:
• Processing times
• Interview schedules
• Decision factors
• Extension rules

Critical Points:
• Study requirements
• Visa conditions
• Stay limitations
• Status changes

Understanding these points is crucial.`
    },
    {
      title: "Contact Information",
      icon: Settings,
      content: `For Student Visa Inquiries:

Contact Details:
Email: Contact@achrafservices.ma
Phone: 05 32 32 33 58
Mobile: 06 64 69 05 55
Address: الحي الإداري قرب مقهى منهاتن الناظور

Office Hours:
Monday - Friday: 9:00 AM - 5:00 PM
Saturday - Sunday: Closed

We're here to assist with your student visa needs.`
    }
  ]

  return (
    <PolicyPage
      title="Student Visa Assistance"
      subtitle="Terms and conditions for student visa application services in Morocco"
      icon={GraduationCap}
      category="Immigration Services"
      sections={sections}
    />
  )
}