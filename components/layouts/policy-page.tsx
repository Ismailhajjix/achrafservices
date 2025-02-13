"use client"

import { motion } from "framer-motion"
import type { LucideIcon } from "lucide-react"

interface Section {
  title: string
  icon: LucideIcon
  content: string
}

interface PolicyPageProps {
  title: string
  subtitle: string
  icon: LucideIcon
  sections: Section[]
  lastUpdated?: string
  category?: string
}

export function PolicyPage({
  title,
  subtitle,
  icon: Icon,
  sections,
  lastUpdated = "February 9, 2024",
  category
}: PolicyPageProps) {
  return (
    <main className="max-w-3xl mx-auto space-y-8">
      <section className="space-y-6">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/20"
        >
          <Icon className="w-5 h-5 text-gold" />
          <span className="text-sm font-semibold text-white">Official Policy Document</span>
        </motion.header>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="space-y-4"
        >
          {category && (
            <header className="flex items-center gap-2 text-white">
              <Icon className="w-5 h-5" />
              <span className="text-base font-medium">{category}</span>
            </header>
          )}

          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight bg-gradient-to-r from-white via-gold to-white bg-clip-text text-transparent">
            {title}
          </h1>

          <p className="text-lg text-white max-w-3xl">
            {subtitle}
          </p>

          {lastUpdated && (
            <time className="flex items-center gap-2 text-white mt-2">
              <Icon className="w-5 h-5" />
              <span className="text-base">Last updated: {lastUpdated}</span>
            </time>
          )}
        </motion.div>
      </section>

      <section className="space-y-6">
        {sections.map((section, index) => {
          const SectionIcon = section.icon
          return (
            <motion.article
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-xl bg-white/5 border border-gold/20 backdrop-blur-sm"
            >
              <header className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-gold/10">
                  <SectionIcon className="w-6 h-6 text-gold" />
                </div>
                <h2 className="text-2xl font-semibold bg-gradient-to-r from-white via-gold to-white bg-clip-text text-transparent">
                  {section.title}
                </h2>
              </header>
              <div className="space-y-4">
                {section.content.split('\n').map((paragraph, i) => (
                  <p key={i} className="text-white leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </motion.article>
          )}
        )}
      </section>
    </main>
  )
} 