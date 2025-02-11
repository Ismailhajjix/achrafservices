"use client"

import { MessageSquare, FileText, Scale, Users, AlertTriangle, Settings, Phone } from "lucide-react"
import { PolicyPage } from "@/components/layouts/policy-page"

export default function ContactPolicy() {
  const sections = [
    {
      title: "Contact Overview",
      icon: MessageSquare,
      content: `This Contact Policy outlines how to communicate with Agence Achraf Services and our response procedures.

Communication Channels:
• Office visits
• Phone calls
• Email correspondence
• Online messaging
• Social media
• Emergency contact
• Appointment booking
• Support requests

We ensure efficient communication channels.`
    },
    {
      title: "Communication Guidelines",
      icon: FileText,
      content: `Contact Procedures:

Primary Methods:
• In-person meetings
• Phone consultations
• Email communications
• Online support
• Document submission

Response Times:
• Emergency: 1-2 hours
• General: 24 hours
• Documents: 48 hours
• Appointments: Same day
• Inquiries: 24-48 hours

We prioritize timely responses.`
    },
    {
      title: "Legal Framework",
      icon: Scale,
      content: `Legal Compliance:

Communication Standards:
• Privacy protection
• Data security
• Record keeping
• Legal requirements

Compliance Areas:
• Information handling
• Communication records
• Data protection
• Client confidentiality

We ensure secure communications.`
    },
    {
      title: "Client Guidelines",
      icon: Users,
      content: `Contact Protocol:

Best Practices:
• Business hours
• Appointment scheduling
• Document preparation
• Information accuracy
• Follow-up procedures

Client Expectations:
• Response times
• Service availability
• Communication channels
• Emergency procedures
• Support access

Follow guidelines for efficient service.`
    },
    {
      title: "Important Notices",
      icon: AlertTriangle,
      content: `Key Information:

Critical Points:
• Office hours
• Holiday closures
• Emergency procedures
• Contact limitations

Special Considerations:
• After-hours support
• Priority cases
• Language services
• Accessibility options

Stay informed of contact procedures.`
    },
    {
      title: "Contact Information",
      icon: Phone,
      content: `Our Contact Details:

Office Information:
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
      title="Contact Policy"
      subtitle="Guidelines for communicating with our services"
      icon={MessageSquare}
      category="General Policies"
      sections={sections}
    />
  )
} 