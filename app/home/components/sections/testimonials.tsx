"use client"

import { motion } from "framer-motion"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"
import { useLanguage } from "@/contexts/language-context"
import { cn } from "@/lib/utils"

// Testimonial type with translations
type TestimonialContent = {
  name: string
  role: string
  company: string
  content: string
}

type Testimonial = {
  en: TestimonialContent
  fr: TestimonialContent
  ar: TestimonialContent
  rating: number
}

// All testimonials data with translations
const testimonials: Testimonial[] = [
  {
    en: {
      name: "Tarik El Moussaoui",
      role: "Finance Director",
      company: "Investment Dynamics",
      content: "Their expertise in navigating business regulations and providing strategic insights is remarkable."
    },
    fr: {
      name: "Tarik El Moussaoui",
      role: "Directeur Financier",
      company: "Investment Dynamics",
      content: "Leur expertise en matière de réglementation des entreprises et leurs conseils stratégiques sont remarquables."
    },
    ar: {
      name: "طارق الموساوي",
      role: "المدير المالي",
      company: "إنفستمنت دايناميكس",
      content: "خبرتهم في التعامل مع اللوائح التجارية وتقديم الرؤى الاستراتيجية رائعة."
    },
    rating: 5
  },
  {
    en: {
      name: "Saida El Filali",
      role: "Operations Manager",
      company: "Tech Innovations Hub",
      content: "Professional team with excellent service delivery. Made our business setup process efficient and smooth."
    },
    fr: {
      name: "Saida El Filali",
      role: "Responsable des Opérations",
      company: "Tech Innovations Hub",
      content: "Équipe professionnelle avec une excellente prestation de services. A rendu notre processus de création d'entreprise efficace et fluide."
    },
    ar: {
      name: "سعيدة الفيلالي",
      role: "مدير العمليات",
      company: "تك إنوفيشنز هب",
      content: "فريق محترف مع تقديم خدمة ممتازة. جعل عملية إنشاء أعمالنا فعالة وسلسة."
    },
    rating: 5
  },
  {
    en: {
      name: "Khalid El Amrani",
      role: "CEO",
      company: "Digital Solutions Pro",
      content: "Their comprehensive approach to business services and attention to detail is exceptional."
    },
    fr: {
      name: "Khalid El Amrani",
      role: "PDG",
      company: "Digital Solutions Pro",
      content: "Leur approche globale des services aux entreprises et leur attention aux détails sont exceptionnelles."
    },
    ar: {
      name: "خالد العمراني",
      role: "الرئيس التنفيذي",
      company: "ديجيتال سوليوشنز برو",
      content: "نهجهم الشامل في خدمات الأعمال واهتمامهم بالتفاصيل استثنائي."
    },
    rating: 5
  },
  {
    en: {
      name: "Adam El Fassi",
      role: "Innovation Manager",
      company: "Digital Transformation Co",
      content: "Their strategic vision and implementation capabilities transformed our business completely."
    },
    fr: {
      name: "Adam El Fassi",
      role: "Responsable de l'Innovation",
      company: "Digital Transformation Co",
      content: "Leur vision stratégique et leurs capacités de mise en œuvre ont complètement transformé notre entreprise."
    },
    ar: {
      name: "آدم الفاسي",
      role: "مدير الابتكار",
      company: "ديجيتال ترانسفورميشن كو",
      content: "رؤيتهم الاستراتيجية وقدراتهم على التنفيذ حولت أعمالنا بشكل كامل."
    },
    rating: 5
  },
  {
    en: {
      name: "Sophia El Khattabi",
      role: "Operations Director",
      company: "Global Solutions Hub",
      content: "Exceptional attention to detail and professional expertise. They made our transition seamless."
    },
    fr: {
      name: "Sophia El Khattabi",
      role: "Directrice des Opérations",
      company: "Global Solutions Hub",
      content: "Attention exceptionnelle aux détails et expertise professionnelle. Ils ont rendu notre transition transparente."
    },
    ar: {
      name: "صوفيا الخطابي",
      role: "مدير العمليات",
      company: "جلوبال سوليوشنز هب",
      content: "اهتمام استثنائي بالتفاصيل وخبرة مهنية. جعلوا انتقالنا سلساً."
    },
    rating: 5
  },
  {
    en: {
      name: "Malik El Bouazzaoui",
      role: "Strategy Director",
      company: "Tech Innovate Pro",
      content: "Their comprehensive understanding of market dynamics and regulatory framework is impressive."
    },
    fr: {
      name: "Malik El Bouazzaoui",
      role: "Directeur de la Stratégie",
      company: "Tech Innovate Pro",
      content: "Leur compréhension approfondie de la dynamique du marché et du cadre réglementaire est impressionnante."
    },
    ar: {
      name: "مالك البوعزاوي",
      role: "مدير الاستراتيجية",
      company: "تك إنوفيت برو",
      content: "فهمهم الشامل لديناميكيات السوق والإطار التنظيمي مثير للإعجاب."
    },
    rating: 5
  }
]

const testimonialTranslations = {
  en: {
    badge: "CLIENT TESTIMONIALS",
    title: {
      first: "What Our",
      second: "Clients Say"
    },
    prevPage: "Previous page",
    nextPage: "Next page",
    goToPage: "Go to page"
  },
  ar: {
    badge: "آراء العملاء",
    title: {
      first: "ماذا يقولون",
      second: "عملاؤنا"
    },
    prevPage: "الصفحة السابقة",
    nextPage: "الصفحة التالية",
    goToPage: "الانتقال إلى الصفحة"
  },
  fr: {
    badge: "TÉMOIGNAGES CLIENTS",
    title: {
      first: "Ce Que Disent",
      second: "Nos Clients"
    },
    prevPage: "Page précédente",
    nextPage: "Page suivante",
    goToPage: "Aller à la page"
  }
}

function TestimonialsContent() {
  const [currentPage, setCurrentPage] = useState(1)
  const testimonialsPerPage = 3
  const totalPages = Math.ceil(testimonials.length / testimonialsPerPage)
  const paginatedTestimonials = testimonials.slice(
    (currentPage - 1) * testimonialsPerPage,
    currentPage * testimonialsPerPage
  )
  const { language } = useLanguage()
  const t = testimonialTranslations[language]

  return (
    <section id="testimonials" className="relative py-24">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />
      
      <div className="relative container mx-auto px-4">
        {/* Section Header */}
        <div className={cn(
          "text-center mb-16",
          language === 'ar' && "font-arabic"
        )}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <div className="px-4 py-1.5 rounded-full border-2 border-[#FFB800] bg-[#FFB800]/5">
              <span className={cn(
                "text-[#FFB800] text-sm font-semibold tracking-wide",
                language === 'ar' && "font-arabic"
              )}>
                {t.badge}
              </span>
            </div>
          </motion.div>

          <h2 className={cn(
            "text-4xl md:text-5xl font-bold mb-8",
            language === 'ar' && "flex flex-col items-center gap-2",
            language === 'fr' && "flex flex-col items-center gap-2",
            language === 'en' && "flex flex-col items-center gap-2"
          )}>
            <div className={cn(
              "flex items-center gap-2",
              language === 'ar' && "flex-row-reverse",
              language === 'fr' && "flex-row",
              language === 'en' && "flex-row"
            )}>
              <span className="text-white">{t.title.first}</span>
              <span className="text-[#FFB800]">{t.title.second}</span>
            </div>
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {paginatedTestimonials.map((testimonial: Testimonial, index: number) => (
            <motion.div
              key={`${testimonial[language].name}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bg-black/40 backdrop-blur-xl rounded-2xl p-8 border-2 border-[#FFB800] h-full">
                {/* Rating */}
                <div className={cn(
                  "flex gap-1 mb-6",
                  language === 'ar' && "flex-row-reverse"
                )}>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#FFB800] text-[#FFB800]" />
                  ))}
                </div>
                
                {/* Quote */}
                <blockquote className={cn(
                  "mb-8",
                  language === 'ar' && "text-right font-arabic"
                )}>
                  <p className="text-white/90 text-lg leading-relaxed">
                    "{testimonial[language].content}"
                  </p>
                </blockquote>

                {/* Author */}
                <div className={cn(
                  language === 'ar' && "text-right"
                )}>
                  <h4 className={cn(
                    "text-white font-semibold text-lg",
                    language === 'ar' && "font-arabic"
                  )}>
                    {testimonial[language].name}
                  </h4>
                  <p className="text-[#FFB800]">
                    {testimonial[language].role}
                  </p>
                  <p className="text-white/60">
                    {testimonial[language].company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-12 flex justify-center">
          <div className={cn(
            "flex items-center gap-2",
            language === 'ar' && "flex-row-reverse"
          )}>
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="p-2 rounded-full border-2 border-[#FFB800] bg-[#FFB800]/5 text-[#FFB800] disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#FFB800]/10 transition-colors duration-200"
              aria-label={t.prevPage}
            >
              <ChevronLeft className={cn(
                "w-5 h-5",
                language === 'ar' && "rotate-180"
              )} aria-hidden="true" />
            </button>

            {/* Page Numbers */}
            <div className={cn(
              "flex gap-2 mx-2",
              language === 'ar' && "flex-row-reverse"
            )}>
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i + 1}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`w-10 h-10 rounded-full border-2 transition-colors duration-200 ${
                    currentPage === i + 1
                      ? "border-[#FFB800] bg-[#FFB800] text-black font-bold"
                      : "border-[#FFB800] bg-[#FFB800]/5 text-[#FFB800] hover:bg-[#FFB800]/10"
                  }`}
                  aria-label={`${t.goToPage} ${i + 1}`}
                  aria-current={currentPage === i + 1 ? "page" : undefined}
                >
                  {i + 1}
                </button>
              ))}
            </div>

            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="p-2 rounded-full border-2 border-[#FFB800] bg-[#FFB800]/5 text-[#FFB800] disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#FFB800]/10 transition-colors duration-200"
              aria-label={t.nextPage}
            >
              <ChevronRight className={cn(
                "w-5 h-5",
                language === 'ar' && "rotate-180"
              )} aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export function Testimonials() {
  return <TestimonialsContent />
} 