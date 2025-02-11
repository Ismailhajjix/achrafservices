"use client"

import { FileCheck, FileText, Scale, Users, AlertTriangle, Settings } from "lucide-react"
import { PolicyPage } from "@/components/layouts/policy-page"

export default function ApostillePolicy() {
  const sections = [
    {
      title: "Service Overview",
      icon: FileCheck,
      content: "This Apostille Policy outlines the terms and conditions under which Agence Achraf Services assists with document authentication and apostille services in Morocco.\n\nOur Premium Services:\n• Document verification\n• Apostille processing\n• Authentication services\n• Embassy legalization\n• Notary certification\n• Translation services\n• Document tracking\n• International validation\n\nWe provide comprehensive support for your document authentication needs."
    },
    {
      title: "Documentation Requirements",
      icon: FileText,
      content: "Required Documentation:\n\nPrimary Documents:\n• Original documents\n• Identity verification\n• Document translations\n• Power of attorney\n• Supporting evidence\n• Application forms\n\nDocument Categories:\n• Academic credentials\n• Legal documents\n• Personal records\n• Business documents\n• Official certificates\n• Public documents\n\nAll documents must meet authentication standards."
    },
    {
      title: "Legal Framework",
      icon: Scale,
      content: "Legal Compliance:\n\nRegulatory Standards:\n• Hague Convention\n• National regulations\n• International laws\n• Authentication rules\n\nProcess Requirements:\n• Document eligibility\n• Country requirements\n• Verification steps\n• Legal procedures\n\nWe ensure compliance with authentication laws."
    },
    {
      title: "Client Guidelines",
      icon: Users,
      content: "Authentication Process:\n\nRequired Steps:\n• Document preparation\n• Information verification\n• Application submission\n• Processing timeline\n• Status tracking\n\nClient Responsibilities:\n• Original documents\n• Complete information\n• Timely submission\n• Fee payment\n• Communication\n\nFollow guidelines for efficient processing."
    },
    {
      title: "Important Notices",
      icon: AlertTriangle,
      content: "Key Information:\n\nCritical Points:\n• Processing times\n• Country requirements\n• Document restrictions\n• Fee structure\n\nSpecial Considerations:\n• Urgent processing\n• Complex cases\n• Multiple documents\n• International requirements\n\nStay informed of authentication procedures."
    },
    {
      title: "Contact Information",
      icon: Settings,
      content: "For Apostille Inquiries:\n\nContact Details:\nEmail: Contact@achrafservices.ma\nPhone: 05 32 32 33 58\nMobile: 06 64 69 05 55\nAddress: Administrative District near Manhattan Cafe, Nador\n\nOffice Hours:\nMonday - Friday: 9:00 AM - 5:00 PM\nSaturday - Sunday: Closed\n\nWe're here to assist with your authentication needs."
    }
  ]

  return (
    <PolicyPage
      title="Apostille Policy"
      subtitle="Guidelines for document authentication and apostille services"
      icon={FileCheck}
      category="Document Services"
      sections={sections}
    />
  )
}
