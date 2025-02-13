"use client"

import { motion, useInView, useAnimation } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { Text } from "@/components/ui/text"
import { Heading } from "@/components/ui/heading"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { achievements, teamMembers } from "@/lib/about-data"
import type { Achievement, TeamMember } from "@/lib/about-data"
import type { Route } from "next"
import dynamic from "next/dynamic"
import { Suspense, lazy, useEffect, useRef, useState } from "react"
import { LoadingPage } from "@/components/ui/feedback/loading"

// Dynamically import heavy components
const MissionVision = dynamic(
  () => import("@/components/sections/mission-vision").then(mod => mod.MissionVision),
  { loading: () => <LoadingPage /> }
)

interface CounterProps {
  from?: number
  to: number
  duration?: number
  className?: string
  suffix?: string
}

// Lazy load the Counter component since it's below the fold
const Counter = lazy(() => Promise.resolve().then(() => {
  function CounterComponent({ from = 0, to, duration = 2, className = "", suffix = "" }: CounterProps) {
    const [count, setCount] = useState(from)
    const nodeRef = useRef(null)
    const isInView = useInView(nodeRef, { once: true, margin: "-100px" })
    const controls = useAnimation()

    useEffect(() => {
      if (isInView) {
        let startTime: number | null = null
        let animationFrame: number | null = null

        const animate = (timestamp: number) => {
          if (!startTime) startTime = timestamp
          const progress = (timestamp - startTime) / (duration * 1000)

          if (progress < 1) {
            setCount(Math.floor(from + (to - from) * progress))
            animationFrame = requestAnimationFrame(animate)
          } else {
            setCount(to)
          }
        }

        animationFrame = requestAnimationFrame(animate)

        return () => {
          if (animationFrame) {
            cancelAnimationFrame(animationFrame)
          }
        }
      }
    }, [from, to, duration, isInView])

    return (
      <motion.span
        ref={nodeRef}
        className={className}
        initial={{ opacity: 0, y: 20 }}
        animate={controls}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {count}
        {suffix || (to.toString().includes('+') ? '+' : '')}
      </motion.span>
    )
  }
  return { default: CounterComponent }
}))

export default function AboutPage() {
  return (
    <Section className="bg-black min-h-screen">
      {/* Hero Section with Background */}
      <div className="relative min-h-[60vh] flex items-center justify-center mb-16 lg:mb-24">
        <Image 
          src="/images/about/ferryscanner-nador.jpg" 
          alt="Nador Ferry Scanner"
          fill
          className="object-cover object-center brightness-[0.3]"
          priority
          sizes="100vw"
          quality={75}
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQtJSEkMjU1LC0yMi4xODY6OjY4MUE5OUZdVVdbY2NjOKFia2JdY11bW1v/2wBDARUXFx4aHR4eHVtTTVtbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1v/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
        />
        
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black" />
        
        <div className="container relative z-10 px-4 pt-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <Badge variant="premium" className="mb-6">DISCOVER OUR STORY</Badge>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6">
              <span className="text-white">About </span>
              <span className="bg-gradient-to-r from-gold via-amber-500 to-gold bg-clip-text text-transparent">
                Achraf Services
              </span>
            </h1>
            <p className="text-white/70 text-lg leading-relaxed">
              Your trusted partner in business and immigration services. We bring years of expertise and dedication to help you achieve your goals in Morocco.
              With a proven track record of success and a commitment to excellence, we specialize in streamlining complex administrative procedures and ensuring full compliance with local regulations.
              Our multilingual team provides personalized solutions and expert guidance to businesses and individuals seeking to establish or expand their presence in Morocco.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Rest of the Content */}
      <div className="relative z-10">
        {/* Mission and Vision Section - Lazy loaded */}
        <Suspense fallback={<LoadingPage />}>
          <MissionVision />
        </Suspense>

        {/* Achievement Numbers Section */}
        <Section className="py-24">
          <Container>
            <Badge variant="premium" className="mb-8">
              OUR ACHIEVEMENTS
            </Badge>
            
            <Heading level={2} className="text-center mb-8">
              Numbers That <span className="text-gold">Speak For Excellence</span>
            </Heading>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <Suspense fallback={<LoadingPage />}>
                {achievements.map((achievement: Achievement, index: number) => (
                  <Card key={index} variant="achievement" className="group">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-gold/5 to-white/5 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="relative">
                        <Counter
                          from={0}
                          to={parseInt(achievement.number.replace(/[+%]/g, ''))}
                          suffix={achievement.number.includes('%') ? '%' : achievement.number.includes('+') ? '+' : ''}
                          className="text-5xl xs:text-6xl font-bold bg-gradient-to-r from-gold via-amber-500 to-gold bg-clip-text text-transparent"
                        />
                        <Text className="text-white/70 group-hover:text-white/90 transition-colors duration-300 mt-2">{achievement.label}</Text>
                      </div>
                    </div>
                  </Card>
                ))}
              </Suspense>
            </div>
          </Container>
        </Section>

        {/* Team Section */}
        <Section className="py-24">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto mb-12"
            >
              <div className="inline-block">
                <div className="relative group cursor-pointer">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/20 to-transparent blur-xl group-hover:opacity-75 transition-opacity duration-500" />
                  <div className="relative bg-gradient-to-r from-gold/20 via-gold/30 to-gold/20 text-white px-4 py-2 rounded-full border border-gold/20 group-hover:border-gold/40 transition-all duration-500">
                    <span className="text-sm font-medium tracking-wider uppercase bg-gradient-to-r from-white via-gold to-white bg-clip-text text-transparent">OUR TEAM</span>
                  </div>
                </div>
              </div>
              
              <Heading level={2} className="mt-6 text-3xl lg:text-4xl font-bold">
                Meet Our <span className="bg-gradient-to-r from-gold via-amber-500 to-gold bg-clip-text text-transparent">Expert Team</span>
              </Heading>
              
              <Text className="mt-4 text-white/70 text-lg max-w-3xl mx-auto">
                Our dedicated professionals bring years of expertise in business and immigration services to help you succeed.
              </Text>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {teamMembers.map((member: TeamMember, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-gold/5 to-white/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative bg-gradient-to-br from-black/80 via-black/70 to-black/80 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-gold/20 transition-all duration-500 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-gold/5 via-transparent to-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    
                    <div className="relative z-10">
                      {/* Image Container */}
                      <div className="relative w-full aspect-square mb-6 rounded-xl overflow-hidden group-hover:scale-[1.02] transition-transform duration-500">
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 group-hover:from-black/40 transition-colors duration-500" />
                      </div>

                      {/* Content */}
                      <div className="space-y-3">
                        <h3 className="text-xl font-semibold text-white group-hover:text-gold transition-colors duration-300">
                          {member.name}
                        </h3>
                        <p className="text-gold font-medium text-sm">
                          {member.role}
                        </p>
                        <p className="text-white/70 text-sm leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                          {member.expertise}
                        </p>
                        
                        {/* Social Links */}
                        <div className="pt-4 flex items-center gap-3">
                          {member.socialLinks.map((link, i) => (
                            <Link
                              key={i}
                              href={link.url as Route}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-8 h-8 rounded-lg bg-white/5 hover:bg-gold/20 flex items-center justify-center transition-all duration-300 group/icon"
                            >
                              <link.icon className="w-4 h-4 text-white/70 group-hover/icon:text-gold transition-colors duration-300" />
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </Container>
        </Section>

        {/* Call to Action */}
        <Section className="py-24">
          <Container>
            <Card variant="cta">
              <Badge variant="premium" className="mb-8">
                Begin Your Journey
              </Badge>
              
              <Heading level={2} className="mb-8">
                Ready to Get <span className="text-gold">Started?</span>
              </Heading>
              
              <Text variant="lead" className="mb-8">
                Take the first step towards realizing your aspirations in Morocco.
              </Text>
              
              <Link 
                href={"/contact" as Route}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-gold via-amber-500 to-gold text-black font-semibold px-8 py-4 rounded-lg hover:gap-4 transition-all duration-500"
              >
                Contact Us Today
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Card>
          </Container>
        </Section>
      </div>
    </Section>
  )
} 