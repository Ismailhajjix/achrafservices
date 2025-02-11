"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { Text } from "@/components/ui/text"
import { Heading } from "@/components/ui/heading"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { achievements, services, teamMembers } from "@/lib/about-data"
import type { Achievement, Service, TeamMember } from "@/lib/about-data"
import type { Route } from "next"

export default function AboutPage() {
  return (
    <Section className="bg-black min-h-screen">
      {/* Hero Section */}
      <Section className="relative min-h-[60vh] flex items-center justify-center">
        <Image 
            src="/images/about/ferryscanner-nador.jpg" 
            alt="Nador Ferry Scanner" 
          fill
          className="object-cover object-center scale-105 brightness-[0.3]"
          priority
        />
        
        <Container className="relative z-30">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
            <Badge variant="premium" className="mb-6">
                    DISCOVER OUR STORY
            </Badge>
            </motion.div>

          <Heading 
            level={1} 
              className="text-center mb-8"
            >
            About <span className="text-gold">Us</span>
          </Heading>
          
          <Text variant="lead" className="text-center max-w-3xl mx-auto">
            Your trusted partner for business and immigration services in Morocco. 
            We provide professional solutions tailored to your needs with a commitment to excellence.
          </Text>
        </Container>
      </Section>

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
            {achievements.map((achievement: Achievement, index: number) => (
              <Card key={index} variant="achievement">
                <Text className="text-6xl font-bold text-gold">{achievement.number}</Text>
                <Text>{achievement.label}</Text>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Services Section */}
      <Section className="py-24">
        <Container>
          <Badge variant="premium" className="mb-8">
            OUR SERVICES
          </Badge>
          
          <Heading level={2} className="text-center mb-8">
            Comprehensive <span className="text-gold">Solutions</span>
          </Heading>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service: Service, index: number) => (
              <Card key={index} variant="service">
                <service.icon className="w-8 h-8 text-gold mb-4" />
                <Heading level={3}>{service.title}</Heading>
                <Text>{service.description}</Text>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Team Section */}
      <Section className="py-24">
        <Container>
          <Badge variant="premium" className="mb-8">
            OUR TEAM
          </Badge>
          
          <Heading level={2} className="text-center mb-8">
            Meet Our <span className="text-gold">Expert Team</span>
          </Heading>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member: TeamMember, index: number) => (
              <Card key={index} variant="team">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={300}
                  height={300}
                  className="object-cover aspect-square"
                />
                <Heading level={3}>{member.name}</Heading>
                <Text className="text-gold">{member.role}</Text>
                <Text>{member.expertise}</Text>
                <div className="flex gap-3">
                  {member.socialLinks.map((link, i) => (
                    <Link key={i} href={link.url as Route} target="_blank" rel="noopener noreferrer">
                      <link.icon className="w-4 h-4" />
                    </Link>
                  ))}
              </div>
              </Card>
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
    </Section>
  )
} 