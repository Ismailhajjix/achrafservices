"use client"

import { useState } from 'react'
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Input } from "@/components/ui/forms/input"
import { Textarea } from "@/components/ui/forms/textarea"
import { toast } from "@/components/ui/use-toast"
import Image from "next/image"
import { useLanguage } from "@/contexts/language-context"
import { appointmentTranslations } from "@/translations/appointment"

interface AppointmentFormData {
  fullName: string
  email: string
  phone: string
  service: string
  message: string
  preferredDate: string
  preferredTime: string
}

export default function AppointmentPage() {
  const { language } = useLanguage()
  const t = appointmentTranslations[language as keyof typeof appointmentTranslations]
  const isRTL = language === 'ar'

  const [formData, setFormData] = useState<AppointmentFormData>({
    fullName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
    preferredDate: "",
    preferredTime: ""
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    try {
      // Validate form
      if (!formData.fullName || !formData.email || !formData.service || !formData.preferredDate || !formData.preferredTime) {
        toast({
          title: "Required Fields Missing",
          description: "Please fill in all required fields.",
          variant: "destructive"
        })
        return
      }

      // Show loading toast
      toast({
        title: "Sending...",
        description: "Please wait while we process your appointment request."
      })

      // Here you would typically send the form data to your backend
      // await scheduleAppointment(formData)

      // Success toast
      toast({
        title: t.form.success,
        variant: "default"
      })

      // Reset form
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        service: "",
        message: "",
        preferredDate: "",
        preferredTime: ""
      })
    } catch (error) {
      toast({
        title: "Error",
        description: t.form.error,
        variant: "destructive"
      })
    }
  }

  return (
    <div className="relative min-h-screen" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,184,0,0.15),transparent_70%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />
        <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,184,0,0.05)_1px,transparent_1px),linear-gradient(-45deg,rgba(255,184,0,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>
      
      {/* Hero Section */}
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

        <div className="relative container mx-auto px-6 py-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-6"
          >
            <div className="bg-[#FFB800]/10 backdrop-blur-sm border border-[#FFB800]/20 rounded-full px-4 py-1">
              <span className="text-[#FFB800] font-medium tracking-wide uppercase text-sm">
                {t.label}
              </span>
            </div>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={cn(
              "text-4xl md:text-5xl lg:text-6xl font-bold mb-6",
              language === 'ar' && "font-arabic"
            )}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-gold to-white">
              {t.heading}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/70 text-lg max-w-3xl mx-auto mb-8"
          >
            {t.description}
          </motion.p>
        </div>
      </div>

      {/* Appointment Form */}
      <div className="relative container mx-auto px-6 py-16">
        <div className="max-w-2xl mx-auto">
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className={cn(
              "bg-black/40 backdrop-blur-xl rounded-xl p-8",
              "border border-white/10 hover:border-[#FFB800]/20",
              "transition-all duration-500 space-y-6",
              isRTL && "text-right"
            )}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-white/80">{t.form.fullName.label} *</label>
                <Input
                  placeholder={t.form.fullName.placeholder}
                  value={formData.fullName}
                  onChange={(e) => setFormData(prev => ({ ...prev, fullName: e.target.value }))}
                  className={cn(
                    "bg-white/5 border-white/10 text-white",
                    isRTL && "text-right"
                  )}
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-white/80">{t.form.email.label} *</label>
                <Input
                  type="email"
                  placeholder={t.form.email.placeholder}
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  className={cn(
                    "bg-white/5 border-white/10 text-white",
                    isRTL && "text-right"
                  )}
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-white/80">{t.form.phone.label}</label>
                <Input
                  placeholder={t.form.phone.placeholder}
                  value={formData.phone}
                  onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                  className={cn(
                    "bg-white/5 border-white/10 text-white",
                    isRTL && "text-right"
                  )}
                />
              </div>

              <div className="space-y-2">
                <label className="text-white/80">{t.form.service.label} *</label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData(prev => ({ ...prev, service: e.target.value }))}
                  className={cn(
                    "w-full px-3 py-2 bg-black/80 border border-white/10 rounded-md text-white",
                    "[&>option]:bg-black [&>option]:text-white",
                    "hover:border-gold/20 focus:border-gold/20 focus:ring-1 focus:ring-gold/20",
                    "transition-colors",
                    isRTL && "text-right"
                  )}
                  required
                >
                  <option value="" className="bg-black text-white">{t.form.service.placeholder}</option>
                  {Object.entries(t.form.service.options).map(([key, value]) => (
                    <option key={key} value={key} className="bg-black text-white">
                      {value}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-white/80">{t.form.preferredDate.label} *</label>
                <Input
                  type="date"
                  placeholder={t.form.preferredDate.placeholder}
                  value={formData.preferredDate}
                  onChange={(e) => setFormData(prev => ({ ...prev, preferredDate: e.target.value }))}
                  className={cn(
                    "bg-white/5 border-white/10 text-white",
                    isRTL && "text-right"
                  )}
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-white/80">{t.form.preferredTime.label} *</label>
                <Input
                  type="time"
                  placeholder={t.form.preferredTime.placeholder}
                  value={formData.preferredTime}
                  onChange={(e) => setFormData(prev => ({ ...prev, preferredTime: e.target.value }))}
                  className={cn(
                    "bg-white/5 border-white/10 text-white",
                    isRTL && "text-right"
                  )}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-white/80">{t.form.message.label}</label>
              <Textarea
                placeholder={t.form.message.placeholder}
                value={formData.message}
                onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                className={cn(
                  "bg-white/5 border-white/10 text-white min-h-[150px]",
                  isRTL && "text-right"
                )}
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-[#FFB800] via-amber-500 to-[#FFB800] text-black font-medium hover:shadow-lg hover:shadow-[#FFB800]/20 transition-all"
            >
              {t.form.submit}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </div>
  )
} 