"use client"

import React, { createContext, useContext, useState } from 'react'
import type { ReactNode } from 'react'

export type Language = 'en' | 'ar' | 'fr'
export type Direction = 'ltr' | 'rtl'

interface LanguageContextType {
  language: Language
  dir: Direction
  setLanguage: (lang: Language) => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

interface LanguageProviderProps {
  children: ReactNode
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguage] = useState<Language>('en')

  const getDirection = (lang: Language): Direction => {
    return lang === 'ar' ? 'rtl' : 'ltr'
  }

  const value = {
    language,
    dir: getDirection(language),
    setLanguage: (lang: Language) => {
      setLanguage(lang)
      document.documentElement.dir = getDirection(lang)
      document.documentElement.lang = lang
    }
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
} 