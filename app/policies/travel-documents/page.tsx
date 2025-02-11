"use client"

import { BookOpen, Clock, FileText, Scale, Users, AlertTriangle, Settings, Globe } from "lucide-react"
import { PolicyPage } from "@/components/layouts/policy-page"

export default function TravelDocuments() {
  const sections = [
    {
      title: "Service Overview",
      icon: BookOpen,
      content: `This Travel Documents Policy outlines our comprehensive services for passport and travel document processing in Morocco.

Our Premium Services:
• Passport applications
• Document authentication
• Travel permit processing
• Emergency assistance
• Status monitoring
• Express services
• Document translation
• Consular support

We ensure smooth processing of your travel documents.`
    },
    {
      title: "Documentation Requirements",
      icon: FileText,
      content: `Required Documentation:

Primary Documents:
• Valid identification
• Birth certificate
• Proof of residence
• Recent photographs
• Previous passport
• Application forms

Supporting Documents:
• Travel itinerary
• Visa requirements
• Employment proof
• Bank statements
• Character references
• Additional permits

All documents must be current and properly authenticated.`
    },
    {
      title: "Legal Framework",
      icon: Scale,
      content: `Legal Compliance:

Regulatory Standards:
• Passport regulations
• Travel document laws
• International rules
• Security protocols

Processing Requirements:
• Identity verification
• Security clearance
• Document validation
• Legal compliance

We ensure adherence to all legal requirements.`
    },
    {
      title: "Processing Timeline",
      icon: Clock,
      content: `Service Timeframes:

Standard Processing:
• Initial review: 1-2 days
• Document verification: 2-3 days
• Application processing: 5-7 days
• Final issuance: 2-3 days

Express Service:
• Expedited processing
• Priority handling
• Urgent assistance
• Quick turnaround

Timelines may vary based on complexity.`
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
      title: "International Standards",
      icon: Globe,
      content: `Global Compliance:

International Requirements:
• ICAO standards
• Security features
• Biometric compliance
• Global recognition

Quality Assurance:
• Document integrity
• Security measures
• International validity
• Standard compliance

We meet all international standards.`
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
      content: `For Travel Document Inquiries:

Contact Details:
Email: Contact@achrafservices.ma
Phone: 05 32 32 33 58
Mobile: 06 64 69 05 55
Address: الحي الإداري قرب مقهى منهاتن الناظور

Office Hours:
Monday - Friday: 9:00 AM - 5:00 PM
Saturday - Sunday: Closed

We're here to assist with your travel document needs.`
    }
  ]

  return (
    <PolicyPage
      title="Travel Documents Policy"
      subtitle="Comprehensive guidelines for travel document processing and requirements"
      icon={Globe}
      category="Immigration Services"
      sections={sections}
    />
  )
} 