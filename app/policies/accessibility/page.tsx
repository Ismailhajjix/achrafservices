"use client"

import { Accessibility, FileText, Scale, Users, AlertTriangle, Settings } from "lucide-react"
import { PolicyPage } from "@/components/layouts/policy-page"

export default function AccessibilityPolicy() {
  const sections = [
    {
      title: "Policy Overview",
      icon: Accessibility,
      content: `This Accessibility Policy outlines Agence Achraf Services' commitment to providing accessible services to all clients, regardless of their abilities or circumstances.

Our Accessibility Commitment:
• Equal access to services
• Inclusive communication
• Physical accessibility
• Digital accessibility
• Alternative formats
• Assistive services
• Staff training
• Continuous improvement

We strive to make our services accessible to everyone.`
    },
    {
      title: "Service Standards",
      icon: FileText,
      content: `Accessibility Standards:

Physical Access:
• Office accessibility
• Meeting spaces
• Service counters
• Waiting areas
• Emergency access
• Parking facilities

Digital Access:
• Website accessibility
• Document formats
• Communication tools
• Online services
• Mobile access
• Technical support

We maintain comprehensive accessibility standards.`
    },
    {
      title: "Implementation",
      icon: Scale,
      content: `Accessibility Implementation:

Service Delivery:
• Staff training
• Communication methods
• Alternative formats
• Assistive technology
• Language support
• Cultural sensitivity

Support Measures:
• Personal assistance
• Document adaptation
• Service flexibility
• Time accommodation
• Location options
• Remote services

We ensure effective accessibility implementation.`
    },
    {
      title: "Client Guidelines",
      icon: Users,
      content: `Client Support:

Available Assistance:
• Service modifications
• Communication aids
• Physical support
• Digital assistance
• Language services
• Special arrangements

Request Process:
• Advance notification
• Specific needs
• Required support
• Time requirements
• Location preferences

We're committed to meeting your accessibility needs.`
    },
    {
      title: "Important Notices",
      icon: AlertTriangle,
      content: `Key Information:

Service Details:
• Advance notice needed
• Available modifications
• Support limitations
• Service alternatives

Special Considerations:
• Emergency access
• After-hours support
• Remote services
• Mobile assistance

Stay informed of accessibility options.`
    },
    {
      title: "Contact Information",
      icon: Settings,
      content: `For Accessibility Inquiries:

Contact Details:
Email: Contact@achrafservices.ma
Phone: 05 32 32 33 58
Mobile: 06 64 69 05 55
Address: الحي الإداري قرب مقهى منهاتن الناظور

Office Hours:
Monday - Friday: 9:00 AM - 5:00 PM
Saturday - Sunday: Closed

We're here to assist with your accessibility needs.`
    }
  ]

  return (
    <PolicyPage
      title="Accessibility Policy"
      subtitle="Our commitment to providing accessible services to all clients"
      icon={Accessibility}
      category="General Policies"
      sections={sections}
    />
  )
} 