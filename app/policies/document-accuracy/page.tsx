"use client"

import { FileCheck, FileText, Scale, Users, AlertTriangle, Settings } from "lucide-react"
import { PolicyPage } from "@/components/layouts/policy-page"

export default function DocumentAccuracy() {
  const sections = [
    {
      title: "Policy Overview",
      icon: FileCheck,
      content: `This Document Accuracy Assurance policy outlines our commitment to maintaining the highest standards of accuracy and authenticity in all document processing services.

Our Accuracy Standards:
• Document verification
• Information validation
• Quality control
• Error prevention
• Accuracy checks
• Version control
• Security measures
• Compliance assurance

We prioritize document accuracy and reliability.`
    },
    {
      title: "Verification Process",
      icon: FileText,
      content: `Document Verification:

Quality Controls:
• Source verification
• Content validation
• Format checking
• Data accuracy
• Legal compliance
• Translation accuracy

Verification Steps:
• Initial review
• Content analysis
• Cross-referencing
• Expert validation
• Final verification
• Quality assurance

We implement comprehensive verification procedures.`
    },
    {
      title: "Quality Standards",
      icon: Scale,
      content: `Quality Assurance:

Process Standards:
• Accuracy metrics
• Quality benchmarks
• Review protocols
• Error tracking
• Improvement systems
• Performance monitoring

Control Measures:
• Multiple reviews
• Expert consultation
• Technology tools
• Manual verification
• Update procedures
• Continuous monitoring

We maintain rigorous quality standards.`
    },
    {
      title: "Client Guidelines",
      icon: Users,
      content: `Client Requirements:

Document Submission:
• Original documents
• Clear copies
• Complete information
• Proper formatting
• Required signatures
• Supporting evidence

Client Responsibilities:
• Accurate information
• Timely submission
• Quality standards
• Communication
• Verification cooperation

Follow guidelines for accurate processing.`
    },
    {
      title: "Important Notices",
      icon: AlertTriangle,
      content: `Key Information:

Critical Points:
• Processing times
• Quality standards
• Verification needs
• Format requirements

Special Considerations:
• Complex documents
• Multiple languages
• Legal requirements
• Time-sensitive materials

Stay informed of accuracy requirements.`
    },
    {
      title: "Contact Information",
      icon: Settings,
      content: `For Document Accuracy Inquiries:

Contact Details:
Email: Contact@achrafservices.ma
Phone: 05 32 32 33 58
Mobile: 06 64 69 05 55
Address: الحي الإداري قرب مقهى منهاتن الناظور

Office Hours:
Monday - Friday: 9:00 AM - 5:00 PM
Saturday - Sunday: Closed

We're here to assist with your document needs.`
    }
  ]

  return (
    <PolicyPage
      title="Document Accuracy Assurance"
      subtitle="Our commitment to maintaining the highest standards of document accuracy and authenticity"
      icon={FileCheck}
      category="Document Services"
      sections={sections}
    />
  )
} 