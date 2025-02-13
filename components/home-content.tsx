"use client"

import dynamic from 'next/dynamic'
import { Suspense, useState, useEffect, useCallback } from 'react'
import { useInView } from 'react-intersection-observer'
import type { FC } from 'react'

const LoadingPlaceholder: FC<{ height: string }> = ({ height }) => (
  <div className={`${height} bg-black animate-pulse rounded-lg`}>
    <div className="h-full w-full bg-gradient-to-r from-black via-gray-900 to-black animate-shimmer" />
  </div>
)
LoadingPlaceholder.displayName = 'LoadingPlaceholder'

// Priority loading for above-the-fold content
const Hero = dynamic(() => import('@/components/sections/hero').then(mod => mod.Hero), {
  loading: () => <LoadingPlaceholder height="min-h-[85vh]" />,
  ssr: true // Enable SSR for hero section
})

// Progressive loading for critical sections with chunking
const Services = dynamic(() => 
  import('@/components/sections/services')
    .then(mod => mod.Services)
    .catch(() => {
      function ServicesFallback() {
        return <div>Failed to load Services</div>
      }
      return ServicesFallback
    }), 
  {
    loading: () => <LoadingPlaceholder height="min-h-[100vh]" />,
    ssr: false
  }
)

const WorkingProcess = dynamic(() => 
  import('@/components/sections/working-process')
    .then(mod => mod.WorkingProcess)
    .catch(() => {
      function WorkingProcessFallback() {
        return <div>Failed to load Working Process</div>
      }
      return WorkingProcessFallback
    }), 
  {
    loading: () => <LoadingPlaceholder height="min-h-[60vh]" />,
    ssr: false
  }
)

const AboutCompany = dynamic(() => 
  import('@/components/sections/about-company')
    .then(mod => mod.AboutCompany)
    .catch(() => {
      function AboutFallback() {
        return <div>Failed to load About</div>
      }
      return AboutFallback
    }),
  {
    loading: () => <LoadingPlaceholder height="min-h-[60vh]" />,
    ssr: false
  }
)

// Deferred loading for non-critical sections with error handling
const ChooseYourDestination = dynamic(() => 
  import('@/components/sections/choose-your-destination')
    .then(mod => mod.ChooseYourDestination)
    .catch(() => {
      function DestinationsFallback() {
        return <div>Failed to load Destinations</div>
      }
      return DestinationsFallback
    }),
  {
    loading: () => <LoadingPlaceholder height="min-h-[100vh]" />,
    ssr: false
  }
)

const Testimonials = dynamic(() => 
  import('@/components/sections/testimonials')
    .then(mod => mod.Testimonials)
    .catch(() => {
      function TestimonialsFallback() {
        return <div>Failed to load Testimonials</div>
      }
      return TestimonialsFallback
    }),
  {
    loading: () => <LoadingPlaceholder height="min-h-[80vh]" />,
    ssr: false
  }
)

const ContactForm = dynamic(() => 
  import('@/components/sections/contact-form')
    .then(mod => mod.ContactForm)
    .catch(() => {
      function ContactFormFallback() {
        return <div>Failed to load Contact Form</div>
      }
      return ContactFormFallback
    }),
  {
    loading: () => <LoadingPlaceholder height="min-h-[60vh]" />,
    ssr: false
  }
)

export function HomeContent() {
  const [mounted, setMounted] = useState(false)
  const { ref: servicesRef, inView: servicesInView } = useInView({ 
    triggerOnce: true, 
    threshold: 0.1,
    rootMargin: '100px' // Start loading 100px before section comes into view
  })
  const { ref: laterSectionsRef, inView: laterSectionsInView } = useInView({ 
    triggerOnce: true, 
    threshold: 0.1,
    rootMargin: '200px' // Start loading 200px before section comes into view
  })

  // Memoized preload function
  const preloadCriticalSections = useCallback(async () => {
    try {
      await Promise.all([
        import('@/components/sections/services'),
        import('@/components/sections/about-company')
      ])
      return { success: true }
    } catch (error) {
      console.error('Failed to preload critical sections:', error)
      return { success: false }
    }
  }, [])

  useEffect(() => {
    setMounted(true)
    
    // Preload critical sections after hero with retry logic
    if (mounted) {
      let retryCount = 0
      const maxRetries = 3
      
      const attemptPreload = async () => {
        const { success } = await preloadCriticalSections()
        if (!success && retryCount < maxRetries) {
          retryCount++
          setTimeout(attemptPreload, 1000 * retryCount) // Exponential backoff
        }
      }
      
      attemptPreload()
    }
  }, [mounted, preloadCriticalSections])

  return (
    <div className="flex flex-col">
      {/* Above the fold - Immediate load */}
      <Hero />
      
      {/* Critical sections - Load when approaching viewport */}
      <div ref={servicesRef}>
        {mounted && servicesInView && (
          <>
            <Suspense fallback={<LoadingPlaceholder height="min-h-[100vh]" />}>
              <Services />
            </Suspense>
            <Suspense fallback={<LoadingPlaceholder height="min-h-[60vh]" />}>
              <WorkingProcess />
            </Suspense>
            <Suspense fallback={<LoadingPlaceholder height="min-h-[60vh]" />}>
              <AboutCompany />
            </Suspense>
          </>
        )}
      </div>

      {/* Deferred sections - Progressive loading */}
      <div ref={laterSectionsRef}>
        {mounted && laterSectionsInView && (
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