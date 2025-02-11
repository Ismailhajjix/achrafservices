"use client"

import { useState, useEffect } from 'react'
import { motion } from "framer-motion"
import { Calendar } from "@/components/ui/calendar"
import { cn } from "@/lib/utils"
import { CalendarIcon, Clock, Shield, MessageSquare } from "lucide-react"
import { format } from "date-fns"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"

const SERVICES = [
  // Business Services
  {
    category: "Business Services",
    items: [
      {
        name: 'Company Formation',
        description: 'Full company registration process, documentation handling, tax & administrative registrations.',
      },
      {
        name: 'Cooperative Formation',
        description: 'Expert cooperative setup services including name approval, registration, and member management.',
      },
      {
        name: 'Association Formation',
        description: 'Complete association services including contract preparation and registration.',
      },
      {
        name: 'Self-Entrepreneur',
        description: 'Self-employed business support including account creation and social security registration.',
      },
      {
        name: 'Real Estate Registry',
        description: 'Property documentation services including ownership certification and design plans.',
      },
      {
        name: 'Apostille Services',
        description: 'Document authentication support and legalization services.',
      },
      {
        name: 'Social Security',
        description: 'Social security assistance including registration and documentation support.',
      },
      {
        name: 'ANAPEC Services',
        description: 'Employment registration support and job search assistance.',
      },
      {
        name: 'Commercial Licensing',
        description: 'Business license processing and application tracking.',
      }
    ]
  },
  // Immigration Services
  {
    category: "Immigration Services",
    items: [
      {
        name: 'Visa Applications',
        description: 'Comprehensive visa application support and processing assistance.',
      },
      {
        name: 'Work Permits',
        description: 'Complete work permit application and processing services.',
      },
      {
        name: 'Residence Permits',
        description: 'Residence permit application and renewal assistance.',
      },
      {
        name: 'Citizenship Services',
        description: 'Citizenship application support and documentation assistance.',
      },
      {
        name: 'Family Reunification',
        description: 'Family visa and reunification application services.',
      },
      {
        name: 'Student Visas',
        description: 'Student visa assistance including university admission support.',
      },
      {
        name: 'Business & Investor Visas',
        description: 'Investment visa services including business plan preparation.',
      },
      {
        name: 'Asylum & Refugee Services',
        description: 'Asylum application support including legal representation.',
      },
      {
        name: 'Legal Consultation',
        description: 'Immigration legal support including case evaluation and appeal assistance.',
      }
    ]
  }
]

const TIME_SLOTS = [
  "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
  "14:00", "14:30", "15:00", "15:30", "16:00", "16:30"
]

// Extract form interfaces
interface FormData {
  fullName: string
  email: string
  phone: string
  notes: string
}

// Extract service interfaces
interface ServiceItem {
  name: string
  description: string
}

interface ServiceCategory {
  category: string
  items: ServiceItem[]
}

export default function AppointmentPage() {
  const [selectedService, setSelectedService] = useState<string>("")
  const [date, setDate] = useState<Date | undefined>()
  const [time, setTime] = useState<string>("")
  const [isClient, setIsClient] = useState<boolean>(false)
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    notes: ""
  })

  useEffect(() => {
    setIsClient(true)
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    if (!date || !time || !selectedService) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      })
      return
    }

    try {
      // TODO: Implement your form submission logic here
      console.log('Appointment Details:', {
        service: selectedService,
        date: format(date, 'PP'),
        time,
        ...formData
      })

      toast({
        title: "Appointment Scheduled",
        description: "We will contact you shortly to confirm your appointment.",
      })

      // Reset form
      setSelectedService("")
      setDate(undefined)
      setTime("")
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        notes: ""
      })
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive"
      })
    }
  }

  const selectedServiceData = SERVICES
    .flatMap(category => category.items)
    .find(service => service.name === selectedService)

  // Return a simpler loading state during SSR
  if (!isClient) {
    return (
      <div className="relative min-h-screen">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />
        <div className="relative container mx-auto px-6 py-12">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="h-8 w-48 bg-white/5 rounded animate-pulse" />
            <div className="h-12 w-96 bg-white/5 rounded animate-pulse" />
            <div className="h-6 w-80 bg-white/5 rounded animate-pulse" />
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="relative min-h-screen">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.12),transparent_70%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.08),transparent_70%)]" />
      
      {/* Content */}
      <div className="relative container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Header Section */}
          <div className="space-y-6">
            {/* Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/20"
            >
              <CalendarIcon className="w-5 h-5 text-gold" />
              <span className="text-sm font-semibold text-white">Schedule Appointment</span>
            </motion.div>
            
            {/* Title Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="space-y-4"
            >
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight bg-gradient-to-r from-white via-gold to-white bg-clip-text text-transparent">
                Book Your Consultation
              </h1>

              <p className="text-lg text-white/70 max-w-2xl">
                Schedule a personalized consultation with our expert team. We'll guide you through every step of your journey.
              </p>

              {/* Availability Notice */}
              <div className="flex items-center gap-2 text-white/70">
                <Clock className="w-5 h-5" />
                <span className="text-base">Available Monday - Friday, 9:00 AM - 5:00 PM</span>
              </div>
            </motion.div>
          </div>

          {/* Form Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="p-6 sm:p-8 rounded-xl bg-white/5 border border-gold/20 backdrop-blur-sm"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 rounded-lg bg-gold/10">
                <Shield className="w-6 h-6 text-gold" />
              </div>
              <h2 className="text-2xl font-semibold bg-gradient-to-r from-white via-gold to-white bg-clip-text text-transparent">
                Appointment Details
              </h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Service Selection */}
              <div className="space-y-4">
                <label htmlFor="service" className="block text-gold text-sm font-medium">
                  Select Service
                </label>
                <select
                  id="service"
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="w-full bg-black/50 text-white border border-gold/20 rounded-lg p-4 focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none hover:border-gold/40 transition-all duration-300"
                  required
                >
                  <option value="">-- Select a Service --</option>
                  {SERVICES.map((category) => (
                    <optgroup key={category.category} label={category.category}>
                      {category.items.map((service) => (
                        <option key={service.name} value={service.name}>
                          {service.name}
                        </option>
                      ))}
                    </optgroup>
                  ))}
                </select>
                {selectedServiceData && (
                  <div className="p-4 bg-gold/5 border border-gold/10 rounded-lg">
                    <p className="text-zinc-400">{selectedServiceData.description}</p>
                  </div>
                )}
              </div>

              {/* Date & Time Selection */}
              <div className="grid sm:grid-cols-2 gap-6">
                {/* Date Picker */}
                <div>
                  <label className="block text-gold text-sm font-medium mb-3">
                    Preferred Date
                  </label>
                  <div className="bg-black/50 rounded-lg p-4 border border-gold/20 hover:border-gold/40 transition-all duration-300">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      className="bg-transparent"
                      disabled={(date) => date < new Date()}
                    />
                  </div>
                </div>

                {/* Time Slots */}
                <div>
                  <label className="block text-gold text-sm font-medium mb-3">
                    Available Times
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {TIME_SLOTS.map((slot) => (
                      <button
                        key={slot}
                        type="button"
                        onClick={() => setTime(slot)}
                        className={cn(
                          "p-4 rounded-lg border text-base font-medium transition-all duration-300",
                          time === slot
                            ? "bg-gradient-to-r from-gold/20 via-gold/20 to-gold/20 border-gold text-gold shadow-lg shadow-gold/10"
                            : "bg-black/50 border-gold/20 text-white hover:border-gold/40 hover:bg-gold/5"
                        )}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Personal Information */}
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <label htmlFor="fullName" className="block text-gold text-sm font-medium">
                    Full Name
                  </label>
                  <Input
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    className="bg-black/50 border-gold/20 text-white placeholder:text-white/40 focus:border-gold/50 focus:ring-gold/20"
                    required
                  />
                </div>

                <div className="space-y-4">
                  <label htmlFor="email" className="block text-gold text-sm font-medium">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email"
                    className="bg-black/50 border-gold/20 text-white placeholder:text-white/40 focus:border-gold/50 focus:ring-gold/20"
                    required
                  />
                </div>

                <div className="space-y-4">
                  <label htmlFor="phone" className="block text-gold text-sm font-medium">
                    Phone
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Enter your phone number"
                    className="bg-black/50 border-gold/20 text-white placeholder:text-white/40 focus:border-gold/50 focus:ring-gold/20"
                    required
                  />
                </div>

                <div className="space-y-4 sm:col-span-2">
                  <label htmlFor="notes" className="block text-gold text-sm font-medium">
                    Additional Notes
                  </label>
                  <Textarea
                    id="notes"
                    name="notes"
                    value={formData.notes}
                    onChange={handleInputChange}
                    placeholder="Any specific requirements or questions?"
                    className="bg-black/50 border-gold/20 text-white placeholder:text-white/40 focus:border-gold/50 focus:ring-gold/20 min-h-[100px]"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full relative group"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-gold via-gold to-gold rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-500" />
                <div className="relative px-8 py-4 bg-gradient-to-r from-gold via-amber-500 to-gold rounded-lg">
                  <span className="relative text-black font-semibold text-lg">
                    Schedule Appointment
                  </span>
                </div>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  ) 
} 