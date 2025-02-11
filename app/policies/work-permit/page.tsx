"use client"

import { Briefcase, FileText, Scale, Users, AlertTriangle, Settings } from "lucide-react"
import { PolicyPage } from "@/components/layouts/policy-page"

export default function WorkPermitGuidelines() {
  const sections = [
    {
      title: "Service Overview",
      icon: Briefcase,
      content: `This Work Permit Guidelines document outlines the terms and conditions under which Agence Achraf Services assists with work permit applications in Morocco.

Our Premium Services:
• Eligibility assessment
• Application preparation
• Document verification
• Employer liaison
• Status tracking
• Permit processing
• Extension support
• Employment guidance

We provide comprehensive support for your work permit needs.`
    },
    {
      title: "Documentation Requirements",
      icon: FileText,
      content: `Required Documentation:

Primary Documents:
• Valid passport
• Employment contract
• Educational certificates
• Professional qualifications
• Health certificates
• Residence proof

Supporting Documents:
• CV/Resume
• Reference letters
• Skills certificates
• Previous permits
• Police clearance
• Bank statements

All documents must be officially verified.`
    },
    {
      title: "Legal Framework",
      icon: Scale,
      content: `Legal Compliance:

Regulatory Standards:
• Labor laws
• Immigration rules
• Employment regulations
• Permit conditions

Work Requirements:
• Contract validity
• Employer eligibility
• Position requirements
• Duration limits

We ensure compliance with employment laws.`
    },
    {
      title: "Client Guidelines",
      icon: Users,
      content: `Client Requirements:

Employee Obligations:
• Document accuracy
• Skills verification
• Regular updates
• Status maintenance

Employer Requirements:
• Position justification
• Contract compliance
• Legal obligations
• Permit conditions

Your cooperation ensures permit approval.`
    },
    {
      title: "Important Notices",
      icon: AlertTriangle,
      content: `Key Information:

Process Details:
• Processing times
• Approval factors
• Renewal deadlines
• Status changes

Critical Points:
• Work restrictions
• Permit conditions
• Change procedures
• Legal obligations

Understanding these points is crucial.`
    },
    {
      title: "Contact Information",
      icon: Settings,
      content: `For Work Permit Inquiries:

Contact Details:
Email: Contact@achrafservices.ma
Phone: 05 32 32 33 58
Mobile: 06 64 69 05 55
Address: الحي الإداري قرب مقهى منهاتن الناظور

Office Hours:
Monday - Friday: 9:00 AM - 5:00 PM
Saturday - Sunday: Closed

We're here to assist with your work permit needs.`
    }
  ]

  return (
    <PolicyPage
      title="Work Permit Guidelines"
      subtitle="Terms and conditions for work permit application services"
      icon={Briefcase}
      category="Immigration Services"
      sections={sections}
    />
  )
} 