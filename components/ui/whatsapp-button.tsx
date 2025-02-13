"use client"

import dynamic from 'next/dynamic'

const WhatsAppButtonWrapper = dynamic(
  () => import('./whatsapp-button-wrapper').then(mod => mod.WhatsAppButtonWrapper),
  { loading: () => null }
)

export function WhatsAppButton() {
  return <WhatsAppButtonWrapper />
} 