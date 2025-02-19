"use client"

import { useInView } from 'react-intersection-observer'
import type { FC } from 'react'
import { Hero } from "./sections/hero"
import { Services } from "./sections/services"
import { FeaturedServices } from "./sections/featured-services"
import { WhyChooseUs } from "./sections/why-choose-us"
import { WhoWeAre } from "./sections/who-we-are"
import { ChooseYourDestination } from "./sections/choose-your-destination"
import { Testimonials } from "@/app/home/components/sections/testimonials"
import { TrustIndicators } from "./sections/trust-indicators"
import { WorkingProcess } from "./sections/working-process"

const LoadingPlaceholder: FC<{ height: string }> = ({ height }) => (
  <div className={`${height} bg-black animate-pulse rounded-lg`}>
    <div className="h-full w-full bg-gradient-to-r from-black via-gray-900 to-black animate-shimmer" />
  </div>
)
LoadingPlaceholder.displayName = 'LoadingPlaceholder'

export function HomeContent() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <div ref={ref}>
      {inView ? (
        <>
          <Hero />
          <Services />
          <FeaturedServices />
          <WhyChooseUs />
          <WhoWeAre />
          <ChooseYourDestination />
          <Testimonials />
          <TrustIndicators />
          <WorkingProcess />
        </>
      ) : (
        <LoadingPlaceholder height="h-screen" />
      )}
    </div>
  )
} 