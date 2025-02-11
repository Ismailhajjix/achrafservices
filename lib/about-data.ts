import { Linkedin, Twitter, Briefcase, Globe, CheckCircle2 } from "lucide-react"
import type { LucideIcon } from "lucide-react"

interface Achievement {
  number: string
  label: string
}

interface Service {
  title: string
  description: string
  icon: LucideIcon
}

interface SocialLink {
  icon: LucideIcon
  url: string
}

interface TeamMember {
  name: string
  role: string
  expertise: string
  image: string
  socialLinks: SocialLink[]
}

export const achievements: Achievement[] = [
  { number: "500+", label: "Satisfied Clients" },
  { number: "98%", label: "Success Rate" },
  { number: "10+", label: "Years Experience" },
  { number: "50+", label: "Partner Companies" },
]

export const services: Service[] = [
  {
    title: "Business Services",
    description: "Comprehensive business solutions for company formation, licensing, and strategic consulting.",
    icon: Briefcase,
  },
  {
    title: "Immigration Services",
    description: "Expert assistance with visas, residence permits, and citizenship applications.",
    icon: Globe,
  },
  {
    title: "Legal Consultation",
    description: "Professional legal advice and comprehensive documentation services.",
    icon: CheckCircle2,
  },
]

export const teamMembers: TeamMember[] = [
  {
    name: "Alexander Mitchell",
    role: "Business Strategy Director",
    expertise: "Market Expansion & Growth",
    image: "/images/team/prince-brown.jpg",
    socialLinks: [
      { icon: Linkedin, url: "https://www.linkedin.com/#" },
      { icon: Twitter, url: "https://www.twitter.com/#" },
    ],
  },
  {
    name: "Sarah Chen",
    role: "Financial Advisory Lead",
    expertise: "Corporate Finance",
    image: "/images/team/sara-albert.jpg",
    socialLinks: [
      { icon: Linkedin, url: "https://www.linkedin.com/#" },
      { icon: Twitter, url: "https://www.twitter.com/#" },
    ],
  },
  {
    name: "Marcus Rodriguez",
    role: "Technology Consultant",
    expertise: "Digital Solutions",
    image: "/images/team/mike-hardson.jpg",
    socialLinks: [
      { icon: Linkedin, url: "https://www.linkedin.com/#" },
      { icon: Twitter, url: "https://www.twitter.com/#" },
    ],
  },
  {
    name: "Elena Petrova",
    role: "Operations Director",
    expertise: "Business Excellence",
    image: "/images/team/christine-eve.jpg",
    socialLinks: [
      { icon: Linkedin, url: "https://www.linkedin.com/#" },
      { icon: Twitter, url: "https://www.twitter.com/#" },
    ],
  },
]

export type { Achievement, Service, SocialLink, TeamMember } 