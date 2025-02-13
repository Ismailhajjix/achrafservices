'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import type { Route } from 'next'

interface ServiceCardProps {
  service: {
    title: string
    href: Route
    icon: React.ComponentType
    description: string
    details: string[]
  }
  index: number
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, index }) => {
  const Icon = service.icon

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="group relative rounded-lg border border-border p-6 hover:border-gold/30"
      aria-labelledby={`service-title-${index}`}
    >
      <div className="flex items-center gap-4">
        <div className="text-gold">
          <Icon />
        </div>
        <h3 id={`service-title-${index}`} className="text-xl font-semibold">
          {service.title}
        </h3>
      </div>

      <p className="mt-4 text-muted-foreground">{service.description}</p>

      <ul className="mt-4 space-y-2">
        {service.details.map((detail, i) => (
          <li key={i} className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            <span className="text-sm">{detail}</span>
          </li>
        ))}
      </ul>

      <Link
        href={service.href}
        className={cn(
          "mt-6 inline-flex items-center rounded-md bg-gold px-4 py-2",
          "text-sm font-medium text-white hover:bg-gold/90"
        )}
      >
        Schedule Consultation
      </Link>
    </motion.article>
  )
} 