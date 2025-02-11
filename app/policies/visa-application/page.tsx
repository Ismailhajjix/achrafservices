"use client"

import { Plane, FileText, Scale, Users, AlertTriangle, Settings } from "lucide-react"
import { PolicyPage } from "@/components/layouts/policy-page"

export default function VisaApplicationTerms() {
  const sections = [
    {
      title: "Service Overview",
      icon: Plane,
      content: `This Visa Application Terms document outlines the conditions under which Agence Achraf Services assists with visa applications for Morocco.

Our Premium Services:
• Visa eligibility check
• Application preparation
• Document verification
• Embassy coordination
• Status tracking
• Interview preparation
• Travel planning
• Visa guidance

We provide comprehensive support for your visa application needs.`
    },
    {
      title: "Documentation Requirements",
      icon: FileText,
      content: `Required Documentation:

Primary Documents:
• Valid passport
• Application forms
• Photos (specific size)
• Travel itinerary
• Hotel bookings
• Financial proof

Supporting Documents:
• Bank statements
• Employment proof
• Invitation letters
• Property documents
• Travel insurance
• Previous visas

All documents must be officially verified.`
    },
    {
      title: "Legal Framework",
      icon: Scale,
      content: `Legal Compliance:

Regulatory Standards:
• Visa regulations
• Entry requirements
• Stay duration rules
• Travel restrictions

Application Requirements:
• Document authenticity
• Financial criteria
• Purpose validation
• Stay conditions

We ensure compliance with visa regulations.`
    },
    {
      title: "Client Guidelines",
      icon: Users,
      content: `Client Requirements:

Application Process:
• Document preparation
• Form completion
• Fee payment
• Interview attendance

Compliance Requirements:
• Information accuracy
• Timeline adherence
• Travel plans
• Stay limitations

Your cooperation ensures visa processing.`
    },
    {
      title: "Important Notices",
      icon: AlertTriangle,
      content: `Key Information:

Process Details:
• Processing times
• Embassy schedules
• Decision factors
• Appeal options

Critical Points:
• Visa conditions
• Entry restrictions
• Stay limitations
• Travel requirements

Understanding these points is crucial.`
    },
    {
      title: "Contact Information",
      icon: Settings,
      content: `For Visa Application Inquiries:

Contact Details:
Email: Contact@achrafservices.ma
Phone: 05 32 32 33 58
Mobile: 06 64 69 05 55
Address: الحي الإداري قرب مقهى منهاتن الناظور

Office Hours:
Monday - Friday: 9:00 AM - 5:00 PM
Saturday - Sunday: Closed

We're here to assist with your visa application needs.`
    }
  ]

  return (
    <PolicyPage
      title="Visa Application Terms"
      subtitle="Guidelines for our visa application assistance services"
      icon={Plane}
      category="Immigration Services"
      sections={sections}
    />
  )
} 