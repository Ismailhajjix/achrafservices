"use client"

import { Wallet, FileText, Scale, Users, AlertTriangle, Settings } from "lucide-react"
import { PolicyPage } from "@/components/layouts/policy-page"

export default function RefundPolicy() {
  const sections = [
    {
      title: "Policy Overview",
      icon: Wallet,
      content: `This Refund Policy outlines the terms and conditions for service fee refunds at Agence Achraf Services.

Refund Principles:
• Service eligibility
• Refund conditions
• Processing timeline
• Payment methods
• Documentation
• Exceptions
• Dispute resolution
• Service credits

We maintain fair and transparent refund practices.`
    },
    {
      title: "Refund Conditions",
      icon: FileText,
      content: `Eligible Circumstances:

Valid Reasons:
• Service cancellation
• Processing errors
• Duplicate charges
• Service unavailability
• Quality issues

Exclusions:
• Completed services
• Third-party fees
• Government charges
• Processing fees
• Late cancellations

Each case is evaluated individually.`
    },
    {
      title: "Legal Framework",
      icon: Scale,
      content: `Legal Compliance:

Regulatory Standards:
• Consumer protection
• Financial regulations
• Service agreements
• Payment laws

Processing Requirements:
• Verification process
• Documentation needs
• Timeline compliance
• Legal obligations

We ensure compliant refund processing.`
    },
    {
      title: "Client Guidelines",
      icon: Users,
      content: `Refund Process:

Request Steps:
• Initial notification
• Form submission
• Documentation
• Review process
• Decision communication

Required Information:
• Service details
• Payment proof
• Reason for refund
• Account information
• Contact details

Follow guidelines for smooth processing.`
    },
    {
      title: "Important Notices",
      icon: AlertTriangle,
      content: `Key Information:

Critical Points:
• Processing time
• Documentation needs
• Eligibility criteria
• Payment methods

Special Considerations:
• International transfers
• Currency conversion
• Bank requirements
• Processing fees

Stay informed of refund procedures.`
    },
    {
      title: "Contact Information",
      icon: Settings,
      content: `For Refund Inquiries:

Contact Details:
Email: Contact@achrafservices.ma
Phone: 05 32 32 33 58
Mobile: 06 64 69 05 55
Address: الحي الإداري قرب مقهى منهاتن الناظور

Office Hours:
Monday - Friday: 9:00 AM - 5:00 PM
Saturday - Sunday: Closed

We're here to assist with refund requests.`
    }
  ]

  return (
    <PolicyPage
      title="Refund Policy"
      subtitle="Terms and conditions for service fee refunds"
      icon={Wallet}
      category="General Policies"
      sections={sections}
    />
  )
} 