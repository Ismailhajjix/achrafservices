"use client"

import React, { createContext, useContext, useState, useEffect } from 'react'

type Language = 'en' | 'fr' | 'ar'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en')

  useEffect(() => {
    // Get language from localStorage or browser preference
    const savedLanguage = localStorage.getItem('language') as Language
    const browserLanguage = navigator.language.split('-')[0] as Language
    
    if (savedLanguage && ['en', 'fr', 'ar'].includes(savedLanguage)) {
      setLanguage(savedLanguage)
    } else if (['en', 'fr', 'ar'].includes(browserLanguage)) {
      setLanguage(browserLanguage)
      localStorage.setItem('language', browserLanguage)
    }
  }, [])

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem('language', lang)
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage }}>
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