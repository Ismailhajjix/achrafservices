"use client"

import dynamic from 'next/dynamic'
import { Suspense, useState, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import type { FC } from 'react'

const LoadingPlaceholder: FC<{ height: string }> = ({ height }) => (
  <div className={`${height} bg-black animate-pulse rounded-lg`}>
    <div className="h-full w-full bg-gradient-to-r from-black via-gray-900 to-black animate-shimmer" />
  </div>
)
LoadingPlaceholder.displayName = 'LoadingPlaceholder'

// Optimize dynamic imports with better chunking
const Hero = dynamic(() => 
  import('@/components/sections/hero').then(mod => mod.Hero), 
  { 
    loading: () => <LoadingPlaceholder height="min-h-[85vh]" />,
    ssr: true 
  }
)

// Add AboutCompany import
const AboutCompany = dynamic(() => 
  import('@/components/sections/about-company').then(mod => mod.AboutCompany), 
  { 
    loading: () => <LoadingPlaceholder height="min-h-[100vh]" />,
    ssr: false
  }
)

// Group business sections for better code splitting
const Services = dynamic(() => 
  import('@/components/sections/business-sections').then(mod => mod.Services), 
  { 
    loading: () => <LoadingPlaceholder height="min-h-[100vh]" />,
    ssr: false
  }
)

const WorkingProcess = dynamic(() => 
  import('@/components/sections/working-process').then(mod => mod.WorkingProcess), 
  { 
    loading: () => <LoadingPlaceholder height="min-h-[100vh]" />,
    ssr: false
  }
)

// Optimize remaining sections with better chunking
const ChooseYourDestination = dynamic(() => 
  import('@/components/sections/choose-your-destination').then(mod => mod.ChooseYourDestination), 
  { 
    loading: () => <LoadingPlaceholder height="min-h-[100vh]" />,
    ssr: false // Defer loading until client-side
  }
)

const Testimonials = dynamic(() => 
  import('@/components/sections/testimonials').then(mod => mod.Testimonials), 
  { 
    loading: () => <LoadingPlaceholder height="min-h-[80vh]" />,
    ssr: false // Defer loading until client-side
  }
)

const ContactForm = dynamic(() => 
  import('@/components/sections/contact-form').then(mod => mod.ContactForm), 
  { 
    loading: () => <LoadingPlaceholder height="min-h-[60vh]" />,
    ssr: false // Defer loading until client-side
  }
)

export function HomeContent() {
  const [mounted, setMounted] = useState(false)
  
  // Optimize intersection observer usage with higher thresholds
  const { ref: criticalSectionsRef, inView: criticalSectionsInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: '100px'
  })
  
  const { ref: deferredSectionsRef, inView: deferredSectionsInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: '200px'
  })

  // Use requestIdleCallback for non-critical initialization
  useEffect(() => {
    if ('requestIdleCallback' in window) {
      const idleCallback = requestIdleCallback(() => setMounted(true))
      return () => cancelIdleCallback(idleCallback)
    } else {
      const timeoutId = setTimeout(() => setMounted(true), 1000)
      return () => clearTimeout(timeoutId)
    }
  }, [])

  // Preload critical resources during idle time
  useEffect(() => {
    if (mounted && 'requestIdleCallback' in window) {
      const preloadCriticalResources = () => {
        const prefetchLink = document.createElement('link')
        prefetchLink.rel = 'prefetch'
        prefetchLink.href = '/images/hero-bg.jpg'
        document.head.appendChild(prefetchLink)
      }
      
      requestIdleCallback(preloadCriticalResources)
    }
  }, [mounted])

  return (
    <div className="flex flex-col">
      {/* Immediate load for above-the-fold content */}
      <Hero />
      
      {/* Load critical sections when approaching viewport */}
      <div ref={criticalSectionsRef}>
        {mounted && criticalSectionsInView && (
          <>
            <Suspense fallback={<LoadingPlaceholder height="min-h-[100vh]" />}>
              <Services />
            </Suspense>
            <Suspense fallback={<LoadingPlaceholder height="min-h-[100vh]" />}>
              <AboutCompany />
            </Suspense>
            <Suspense fallback={<LoadingPlaceholder height="min-h-[100vh]" />}>
              <WorkingProcess />
            </Suspense>
          </>
        )}
      </div>

      {/* Defer loading of non-critical sections */}
      <div ref={deferredSectionsRef}>
        {mounted && deferredSectionsInView && (
          <>
            <Suspense fallback={<LoadingPlaceholder height="min-h-[100vh]" />}>
              <ChooseYourDestination />
            </Suspense>
            <Suspense fallback={<LoadingPlaceholder height="min-h-[80vh]" />}>
              <Testimonials />
            </Suspense>
            <Suspense fallback={<LoadingPlaceholder height="min-h-[60vh]" />}>
              <ContactForm />
            </Suspense>
          </>
        )}
      </div>
    </div>
  )
} 