"use client"

import { useState, useEffect } from 'react'
import { motion } from "framer-motion"
import { Calendar } from "@/components/ui/calendar"
import { cn } from "@/lib/utils"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"
import Image from "next/image"

// Types for form data
interface PersonalInfo {
  fullName: string
  email: string
  phone: string
  nationality: string
  currentResidence: string
  preferredLanguage: string
  occupation: string
}

interface ServiceDetails {
  serviceType: string
  specificService: string
  urgencyLevel: string
  preferredContactMethod: string
}

interface DocumentInfo {
  hasPassport: boolean
  passportExpiry?: string
  hasResidencePermit: boolean
  permitExpiry?: string
  additionalDocuments: string[]
}

interface AppointmentPreference {
  date: Date | undefined
  time: string
  notes: string
  agreeToTerms: boolean
}

interface FormData {
  step: number
  personalInfo: PersonalInfo
  serviceDetails: ServiceDetails
  documentInfo: DocumentInfo
  appointmentPreference: AppointmentPreference
}

// Constants
const SERVICES = [
  // Business Services
  {
    category: "Business Services",
    items: [
      {
        name: 'Company Formation',
        description: 'Full company registration process, documentation handling, tax & administrative registrations.',
        requiredDocs: [
          'Valid ID/Passport',
          'Proof of Address',
          'Business Plan',
          'Initial Capital Proof'
        ]
      },
      {
        name: 'Cooperative Formation',
        description: 'Expert cooperative setup services including name approval, registration, and member management.',
        requiredDocs: [
          'Members IDs',
          'Meeting Minutes',
          'Cooperative Charter',
          'Member Contributions Proof'
        ]
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
        requiredDocs: [
          'Valid Passport',
          'Photos',
          'Bank Statements',
          'Employment Contract'
        ]
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

const LANGUAGES = [
  "English",
  "Arabic",
  "French",
  "Spanish"
]

const URGENCY_LEVELS = [
  "Standard",
  "Priority",
  "Urgent"
]

const CONTACT_METHODS = [
  "Email",
  "Phone",
  "WhatsApp",
  "In-Person"
]

export default function AppointmentPage() {
  const [formData, setFormData] = useState<FormData>({
    step: 1,
    personalInfo: {
      fullName: "",
      email: "",
      phone: "",
      nationality: "",
      currentResidence: "",
      preferredLanguage: "",
      occupation: ""
    },
    serviceDetails: {
      serviceType: "",
      specificService: "",
      urgencyLevel: "",
      preferredContactMethod: ""
    },
    documentInfo: {
      hasPassport: false,
      hasResidencePermit: false,
      additionalDocuments: []
    },
    appointmentPreference: {
      date: undefined,
      time: "",
      notes: "",
      agreeToTerms: false
    }
  })
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const handleNext = () => {
    if (validateCurrentStep()) {
      setFormData(prev => ({ ...prev, step: prev.step + 1 }))
    }
  }

  const handlePrevious = () => {
    setFormData(prev => ({ ...prev, step: prev.step - 1 }))
  }

  const validateCurrentStep = () => {
    switch (formData.step) {
      case 1:
        if (!formData.personalInfo.fullName || !formData.personalInfo.email || !formData.personalInfo.phone) {
          toast({
            title: "Required Fields Missing",
            description: "Please fill in all required personal information.",
            variant: "destructive"
          })
          return false
        }
        break
      case 2:
        if (!formData.serviceDetails.serviceType || !formData.serviceDetails.specificService) {
          toast({
            title: "Service Selection Required",
            description: "Please select your desired service.",
            variant: "destructive"
          })
          return false
        }
        break
      case 3:
        // Document validation can be flexible
        break
      case 4:
        if (!formData.appointmentPreference.date || !formData.appointmentPreference.time) {
          toast({
            title: "Appointment Time Required",
            description: "Please select your preferred date and time.",
            variant: "destructive"
          })
          return false
        }
        if (!formData.appointmentPreference.agreeToTerms) {
          toast({
            title: "Terms Agreement Required",
            description: "Please agree to the terms and conditions.",
            variant: "destructive"
          })
          return false
        }
        break
    }
    return true
  }

  const validateAllSteps = () => {
    // Validate personal info
    if (!formData.personalInfo.fullName || !formData.personalInfo.email || !formData.personalInfo.phone) {
      return false
    }
    // Validate service details
    if (!formData.serviceDetails.serviceType || !formData.serviceDetails.specificService) {
      return false
    }
    // Validate appointment preferences
    if (!formData.appointmentPreference.date || !formData.appointmentPreference.agreeToTerms) {
      return false
    }
    return true
  }

  const handleSubmit = async () => {
    try {
      // Validate all steps before submission
      if (!validateAllSteps()) {
        toast({
          title: "Validation Error",
          description: "Please complete all required fields before submitting.",
          variant: "destructive"
        })
        return
      }

      // Show loading toast
      toast({
        title: "Submitting...",
        description: "Please wait while we process your appointment request."
      })

      // Success toast
      toast({
        title: "Success!",
        description: "Your appointment request has been submitted successfully.",
        variant: "default"
      })
    } catch (error) {
      toast({
        title: "Error",
        description: "An error occurred while submitting your request. Please try again.",
        variant: "destructive"
      })
    }
  }

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

  const renderStepContent = () => {
    switch (formData.step) {
      case 1:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white">Personal Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-white/80">Full Name *</label>
                <Input
                  placeholder="Enter your full name"
                  value={formData.personalInfo.fullName}
                  onChange={(e) => setFormData(prev => ({
                    ...prev,
                    personalInfo: { ...prev.personalInfo, fullName: e.target.value }
                  }))}
                  className="bg-white/5 border-white/10 text-white"
                />
              </div>
              <div className="space-y-2">
                <label className="text-white/80">Email *</label>
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={formData.personalInfo.email}
                  onChange={(e) => setFormData(prev => ({
                    ...prev,
                    personalInfo: { ...prev.personalInfo, email: e.target.value }
                  }))}
                  className="bg-white/5 border-white/10 text-white"
                />
              </div>
              <div className="space-y-2">
                <label className="text-white/80">Phone Number *</label>
                <Input
                  placeholder="Enter your phone number"
                  value={formData.personalInfo.phone}
                  onChange={(e) => setFormData(prev => ({
                    ...prev,
                    personalInfo: { ...prev.personalInfo, phone: e.target.value }
                  }))}
                  className="bg-white/5 border-white/10 text-white"
                />
              </div>
              <div className="space-y-2">
                <label className="text-white/80">Nationality</label>
                <Input
                  placeholder="Enter your nationality"
                  value={formData.personalInfo.nationality}
                  onChange={(e) => setFormData(prev => ({
                    ...prev,
                    personalInfo: { ...prev.personalInfo, nationality: e.target.value }
                  }))}
                  className="bg-white/5 border-white/10 text-white"
                />
              </div>
              <div className="space-y-2">
                <label className="text-white/80">Current Residence</label>
                <Input
                  placeholder="Enter your current residence"
                  value={formData.personalInfo.currentResidence}
                  onChange={(e) => setFormData(prev => ({
                    ...prev,
                    personalInfo: { ...prev.personalInfo, currentResidence: e.target.value }
                  }))}
                  className="bg-white/5 border-white/10 text-white"
                />
              </div>
              <div className="space-y-2">
                <label className="text-white/80">Preferred Language</label>
                <select
                  value={formData.personalInfo.preferredLanguage}
                  onChange={(e) => setFormData(prev => ({
                    ...prev,
                    personalInfo: { ...prev.personalInfo, preferredLanguage: e.target.value }
                  }))}
                  className="w-full px-3 py-2 bg-black/80 border border-white/10 rounded-md text-white [&>option]:bg-black [&>option]:text-white hover:border-gold/20 focus:border-gold/20 focus:ring-1 focus:ring-gold/20 transition-colors"
                >
                  <option value="" className="bg-black text-white">Select language</option>
                  {LANGUAGES.map(lang => (
                    <option key={lang} value={lang} className="bg-black text-white">{lang}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        )
      
      case 2:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white">Service Selection</h2>
            <div className="grid grid-cols-1 gap-6">
              <div className="space-y-2">
                <label className="text-white/80">Service Category *</label>
                <select
                  value={formData.serviceDetails.serviceType}
                  onChange={(e) => setFormData(prev => ({
                    ...prev,
                    serviceDetails: { ...prev.serviceDetails, serviceType: e.target.value }
                  }))}
                  className="w-full px-3 py-2 bg-black/80 border border-white/10 rounded-md text-white [&>option]:bg-black [&>option]:text-white hover:border-gold/20 focus:border-gold/20 focus:ring-1 focus:ring-gold/20 transition-colors"
                >
                  <option value="" className="bg-black text-white">Select category</option>
                  {SERVICES.map(category => (
                    <option key={category.category} value={category.category} className="bg-black text-white">
                      {category.category}
                    </option>
                  ))}
                </select>
              </div>
              
              {formData.serviceDetails.serviceType && (
                <div className="space-y-2">
                  <label className="text-white/80">Specific Service *</label>
                  <select
                    value={formData.serviceDetails.specificService}
                    onChange={(e) => setFormData(prev => ({
                      ...prev,
                      serviceDetails: { ...prev.serviceDetails, specificService: e.target.value }
                    }))}
                    className="w-full px-3 py-2 bg-black/80 border border-white/10 rounded-md text-white [&>option]:bg-black [&>option]:text-white hover:border-gold/20 focus:border-gold/20 focus:ring-1 focus:ring-gold/20 transition-colors"
                  >
                    <option value="" className="bg-black text-white">Select service</option>
                    {SERVICES
                      .find(cat => cat.category === formData.serviceDetails.serviceType)
                      ?.items.map(service => (
                        <option key={service.name} value={service.name} className="bg-black text-white">
                          {service.name}
                        </option>
                      ))}
                  </select>
                </div>
              )}
              
              <div className="space-y-2">
                <label className="text-white/80">Urgency Level</label>
                <select
                  value={formData.serviceDetails.urgencyLevel}
                  onChange={(e) => setFormData(prev => ({
                    ...prev,
                    serviceDetails: { ...prev.serviceDetails, urgencyLevel: e.target.value }
                  }))}
                  className="w-full px-3 py-2 bg-black/80 border border-white/10 rounded-md text-white [&>option]:bg-black [&>option]:text-white hover:border-gold/20 focus:border-gold/20 focus:ring-1 focus:ring-gold/20 transition-colors"
                >
                  <option value="" className="bg-black text-white">Select urgency</option>
                  {URGENCY_LEVELS.map(level => (
                    <option key={level} value={level} className="bg-black text-white">{level}</option>
                  ))}
                </select>
              </div>
              
              <div className="space-y-2">
                <label className="text-white/80">Preferred Contact Method</label>
                <select
                  value={formData.serviceDetails.preferredContactMethod}
                  onChange={(e) => setFormData(prev => ({
                    ...prev,
                    serviceDetails: { ...prev.serviceDetails, preferredContactMethod: e.target.value }
                  }))}
                  className="w-full px-3 py-2 bg-black/80 border border-white/10 rounded-md text-white [&>option]:bg-black [&>option]:text-white hover:border-gold/20 focus:border-gold/20 focus:ring-1 focus:ring-gold/20 transition-colors"
                >
                  <option value="" className="bg-black text-white">Select contact method</option>
                  {CONTACT_METHODS.map(method => (
                    <option key={method} value={method} className="bg-black text-white">{method}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        )
      
      case 3:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white">Document Information</h2>
            <div className="space-y-6">
              <div className="space-y-4">
                <label className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    checked={formData.documentInfo.hasPassport}
                    onChange={(e) => setFormData(prev => ({
                      ...prev,
                      documentInfo: { ...prev.documentInfo, hasPassport: e.target.checked }
                    }))}
                    className="form-checkbox text-gold"
                  />
                  <span className="text-white">I have a valid passport</span>
                </label>
                
                {formData.documentInfo.hasPassport && (
                  <div className="ml-8 space-y-2">
                    <label className="text-white/80">Passport Expiry Date</label>
                    <Input
                      type="date"
                      value={formData.documentInfo.passportExpiry}
                      onChange={(e) => setFormData(prev => ({
                        ...prev,
                        documentInfo: { ...prev.documentInfo, passportExpiry: e.target.value }
                      }))}
                      className="bg-white/5 border-white/10 text-white"
                    />
                  </div>
                )}
              </div>
              
              <div className="space-y-4">
                <label className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    checked={formData.documentInfo.hasResidencePermit}
                    onChange={(e) => setFormData(prev => ({
                      ...prev,
                      documentInfo: { ...prev.documentInfo, hasResidencePermit: e.target.checked }
                    }))}
                    className="form-checkbox text-gold"
                  />
                  <span className="text-white">I have a residence permit</span>
                </label>
                
                {formData.documentInfo.hasResidencePermit && (
                  <div className="ml-8 space-y-2">
                    <label className="text-white/80">Permit Expiry Date</label>
                    <Input
                      type="date"
                      value={formData.documentInfo.permitExpiry}
                      onChange={(e) => setFormData(prev => ({
                        ...prev,
                        documentInfo: { ...prev.documentInfo, permitExpiry: e.target.value }
                      }))}
                      className="bg-white/5 border-white/10 text-white"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        )
      
      case 4:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white">Appointment Preferences</h2>
            <div className="space-y-6">
              <div className="space-y-2">
                <label className="text-white/80">Preferred Date *</label>
                <Calendar
                  mode="single"
                  selected={formData.appointmentPreference.date}
                  onSelect={(date) => setFormData(prev => ({
                    ...prev,
                    appointmentPreference: { ...prev.appointmentPreference, date }
                  }))}
                  className="bg-white/5 border-white/10 text-white rounded-lg p-3"
                  disabled={(date) => 
                    date < new Date() || // Past dates
                    date.getDay() === 0 || // Sunday
                    date.getDay() === 6    // Saturday
                  }
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-white/80">Preferred Time *</label>
                <select
                  value={formData.appointmentPreference.time}
                  onChange={(e) => setFormData(prev => ({
                    ...prev,
                    appointmentPreference: { ...prev.appointmentPreference, time: e.target.value }
                  }))}
                  className="w-full px-3 py-2 bg-black/80 border border-white/10 rounded-md text-white [&>option]:bg-black [&>option]:text-white hover:border-gold/20 focus:border-gold/20 focus:ring-1 focus:ring-gold/20 transition-colors"
                >
                  <option value="" className="bg-black text-white">Select time</option>
                  {TIME_SLOTS.map(slot => (
                    <option key={slot} value={slot} className="bg-black text-white">{slot}</option>
                  ))}
                </select>
              </div>
              
              <div className="space-y-2">
                <label className="text-white/80">Additional Notes</label>
                <Textarea
                  placeholder="Any additional information you'd like to share..."
                  value={formData.appointmentPreference.notes}
                  onChange={(e) => setFormData(prev => ({
                    ...prev,
                    appointmentPreference: { ...prev.appointmentPreference, notes: e.target.value }
                  }))}
                  className="bg-white/5 border-white/10 text-white min-h-[100px]"
                />
              </div>
              
              <div className="space-y-4">
                <label className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    checked={formData.appointmentPreference.agreeToTerms}
                    onChange={(e) => setFormData(prev => ({
                      ...prev,
                      appointmentPreference: { ...prev.appointmentPreference, agreeToTerms: e.target.checked }
                    }))}
                    className="form-checkbox text-gold"
                  />
                  <span className="text-white">I agree to the terms and conditions *</span>
                </label>
              </div>
            </div>
          </div>
        )
      
      default:
        return null
    }
  }

  return (
    <div className="relative min-h-screen">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,184,0,0.15),transparent_70%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />
        <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,184,0,0.05)_1px,transparent_1px),linear-gradient(-45deg,rgba(255,184,0,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>
      
      {/* Premium Hero Section */}
      <div className="relative">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/appointment/book.jpg"
            alt="Book Appointment"
            fill
            className="object-cover brightness-[0.3]"
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black" />
        </div>

        <div className="container relative mx-auto px-4 pt-24 pb-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-6"
          >
            <div className="bg-[#FFB800]/10 backdrop-blur-sm border border-[#FFB800]/20 rounded-full px-4 py-1">
              <span className="text-[#FFB800] font-medium tracking-wide uppercase text-sm">
                SCHEDULE A CONSULTATION
              </span>
            </div>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            <span className="text-white">Book Your </span>
            <span className="text-[#FFB800]">Premium Consultation</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/70 text-lg max-w-3xl mx-auto mb-8"
          >
            Your journey to success begins with a personalized consultation. Our expert team is ready to guide you through every step of the process, ensuring a seamless experience tailored to your specific needs in Morocco.
          </motion.p>
        </div>
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-6 pb-12">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Progress Steps */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-between items-center mb-8 relative"
          >
            {/* Progress Line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 -translate-y-1/2">
              <div className="h-full bg-white/10" />
              <motion.div
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#FFB800] via-amber-500 to-[#FFB800]"
                initial={{ width: "0%" }}
                animate={{ width: `${((formData.step - 1) / 3) * 100}%` }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              />
            </div>

            {/* Steps */}
            {[1, 2, 3, 4].map((step) => (
              <motion.div
                key={step}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ 
                  scale: formData.step >= step ? 1 : 0.9,
                  opacity: 1 
                }}
                transition={{ duration: 0.5, delay: step * 0.1 }}
                className="relative z-10"
              >
                <motion.div
                  className={cn(
                    "w-12 h-12 rounded-full flex items-center justify-center relative",
                    "transition-all duration-500",
                    formData.step === step
                      ? "bg-gradient-to-r from-[#FFB800] via-amber-500 to-[#FFB800] shadow-lg shadow-[#FFB800]/20"
                      : formData.step > step
                        ? "bg-[#FFB800] shadow-md"
                        : "bg-white/10"
                  )}
                  whileHover={formData.step >= step ? { scale: 1.05 } : {}}
                  whileTap={formData.step >= step ? { scale: 0.95 } : {}}
                >
                  {formData.step > step ? (
                    <motion.svg
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="w-6 h-6 text-black"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <motion.path
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </motion.svg>
                  ) : (
                    <span className={cn(
                      "text-lg font-semibold",
                      formData.step === step ? "text-black" : "text-white/50"
                    )}>
                      {step}
                    </span>
                  )}

                  {/* Step Label */}
                  <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap">
                    <span className={cn(
                      "text-xs font-medium",
                      formData.step >= step ? "text-[#FFB800]" : "text-white/50"
                    )}>
                      {step === 1 && "Personal Info"}
                      {step === 2 && "Services"}
                      {step === 3 && "Documents"}
                      {step === 4 && "Schedule"}
                    </span>
                  </div>

                  {/* Animated Ring */}
                  {formData.step === step && (
                    <motion.div
                      className="absolute inset-0 rounded-full border-2 border-[#FFB800]"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: [0.2, 0.5, 0.2], scale: [1, 1.1, 1] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  )}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* Form Content */}
          <div className="bg-black/40 backdrop-blur-xl rounded-xl p-6 border border-white/10 hover:border-[#FFB800]/20 transition-all duration-500">
            {renderStepContent()}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between pt-6">
            {formData.step > 1 && (
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handlePrevious}
                className="px-6 py-2.5 rounded-lg bg-black/50 backdrop-blur-sm border border-[#FFB800]/30 text-white hover:bg-black/70 hover:border-[#FFB800]/50 transition-all"
              >
                Previous
              </motion.button>
            )}
            
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={formData.step === 4 ? handleSubmit : handleNext}
              className="px-6 py-2.5 rounded-lg bg-gradient-to-r from-[#FFB800] via-amber-500 to-[#FFB800] text-black font-medium hover:shadow-lg hover:shadow-[#FFB800]/20 transition-all ml-auto"
            >
              {formData.step === 4 ? 'Submit' : 'Next'}
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  )
} 