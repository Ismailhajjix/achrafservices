"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Karim El Mansouri",
    role: "Business Owner",
    company: "Tech Solutions Ltd",
    content: "Working with Agence Achraf Services was a game-changer for our business expansion in Morocco. Their expertise and professionalism are unmatched.",
    rating: 5
  },
  {
    name: "Amina Benali",
    role: "International Investor",
    company: "Global Ventures",
    content: "The team's dedication to excellence and attention to detail made our immigration process smooth and hassle-free.",
    rating: 5
  },
  {
    name: "Hassan El Alami",
    role: "CEO",
    company: "Innovation Hub",
    content: "Their deep understanding of Moroccan business regulations and professional approach helped us establish our presence successfully.",
    rating: 5
  },
  {
    name: "Nadia Tazi",
    role: "Startup Founder",
    company: "Digital Innovations",
    content: "Exceptional service from start to finish. They guided us through complex regulations with remarkable expertise and patience.",
    rating: 5
  },
  {
    name: "Youssef El Idrissi",
    role: "Managing Director",
    company: "MarocTech Solutions",
    content: "Outstanding support in establishing our business presence. Their knowledge of local markets is invaluable.",
    rating: 5
  },
  {
    name: "Leila Benjelloun",
    role: "Operations Manager",
    company: "Global Trade Co",
    content: "Their comprehensive approach to business services made our expansion into Morocco seamless and successful.",
    rating: 5
  },
  {
    name: "Omar El Fassi",
    role: "Financial Advisor",
    company: "Investment Partners",
    content: "Impeccable service quality and attention to detail. They exceeded our expectations in every aspect.",
    rating: 5
  },
  {
    name: "Fatima El Ouazzani",
    role: "Legal Consultant",
    company: "European Legal Group",
    content: "Their expertise in immigration services is unparalleled. They handled our case with utmost professionalism.",
    rating: 5
  },
  {
    name: "Mehdi Chraibi",
    role: "Tech Entrepreneur",
    company: "Smart Solutions",
    content: "A truly reliable partner for business establishment in Morocco. Their guidance was instrumental to our success.",
    rating: 5
  },
  {
    name: "Samira El Moutaouakil",
    role: "HR Director",
    company: "Global Staffing Solutions",
    content: "Exceptional support in handling our immigration requirements. Their team is highly professional and efficient.",
    rating: 5
  },
  {
    name: "Rachid Benjelloun",
    role: "Project Manager",
    company: "Construction Excellence",
    content: "Their comprehensive understanding of business regulations helped us navigate complex requirements effortlessly.",
    rating: 5
  },
  {
    name: "Houda El Alaoui",
    role: "Marketing Director",
    company: "Creative Solutions",
    content: "Outstanding service quality and professional guidance throughout our business setup process.",
    rating: 5
  },
  {
    name: "Amine El Amrani",
    role: "Investment Manager",
    company: "Asian Markets Fund",
    content: "Their expertise in both local and international business practices made our market entry smooth and successful.",
    rating: 5
  },
  {
    name: "Zineb El Harti",
    role: "Business Consultant",
    company: "European Business Hub",
    content: "Excellent support and guidance in establishing our presence in Morocco. Highly recommended for their expertise.",
    rating: 5
  },
  {
    name: "Hamza El Bakkali",
    role: "Operations Director",
    company: "Logistics Plus",
    content: "Their dedication to client success and deep market knowledge makes them the perfect partner for business in Morocco.",
    rating: 5
  },
  {
    name: "Mohammed El Fassi",
    role: "CEO",
    company: "Digital Morocco",
    content: "The level of service and attention to detail provided by Agence Achraf Services exceeded all our expectations. A truly remarkable experience.",
    rating: 5
  },
  {
    name: "Laila Benjelloun",
    role: "Investment Director",
    company: "Global Ventures Morocco",
    content: "Their deep understanding of local regulations and international business practices made our market entry seamless and successful.",
    rating: 5
  },
  {
    name: "Ahmed El Alaoui",
    role: "Managing Partner",
    company: "Innovation Labs",
    content: "Exceptional service quality and professional guidance throughout our business establishment process. Highly recommended.",
    rating: 5
  },
  {
    name: "Souad El Amrani",
    role: "Operations Director",
    company: "Tech Innovate",
    content: "Their expertise in handling complex business requirements is outstanding. They made the entire process smooth and efficient.",
    rating: 5
  },
  {
    name: "Younes Tazi",
    role: "Founder",
    company: "StartUp Morocco",
    content: "A reliable partner for all business needs. Their team's dedication and expertise are truly commendable.",
    rating: 5
  },
  {
    name: "Nadia El Idrissi",
    role: "Legal Director",
    company: "Corporate Solutions",
    content: "Professional, efficient, and thorough in their approach. They delivered beyond our expectations.",
    rating: 5
  },
  {
    name: "Hassan El Ouazzani",
    role: "Finance Manager",
    company: "Investment Hub",
    content: "Their comprehensive understanding of business regulations helped us navigate complex requirements with ease.",
    rating: 5
  },
  {
    name: "Amina El Bakkali",
    role: "HR Director",
    company: "Global Talent Morocco",
    content: "Outstanding support in handling our corporate requirements. Their team is highly professional and efficient.",
    rating: 5
  },
  {
    name: "Omar El Moutaouakil",
    role: "Strategy Director",
    company: "Business Excellence",
    content: "Their strategic guidance and local market insights were invaluable to our business growth.",
    rating: 5
  },
  {
    name: "Fatima Bennis",
    role: "Operations Manager",
    company: "Tech Solutions Pro",
    content: "Exceptional service delivery and professional approach. They made complex processes simple and manageable.",
    rating: 5
  },
  {
    name: "Youssef El Gharbi",
    role: "Business Development",
    company: "Market Leaders",
    content: "Their expertise in business services is unmatched. They provided valuable insights and support throughout.",
    rating: 5
  },
  {
    name: "Leila El Hassani",
    role: "Project Director",
    company: "Innovation Works",
    content: "Professional team with excellent knowledge of business regulations. Highly recommended for their services.",
    rating: 5
  },
  {
    name: "Rachid El Mansouri",
    role: "CEO",
    company: "Digital Solutions",
    content: "Outstanding service quality and attention to detail. They helped us achieve our business objectives efficiently.",
    rating: 5
  },
  {
    name: "Samira El Alami",
    role: "Managing Director",
    company: "Tech Ventures",
    content: "Their expertise and professional approach made our business setup process smooth and hassle-free.",
    rating: 5
  },
  {
    name: "Mehdi El Fassi",
    role: "Operations Head",
    company: "Global Tech Morocco",
    content: "Excellent support and guidance throughout our business journey. Their expertise is truly valuable.",
    rating: 5
  },
  {
    name: "Houda El Mansouri",
    role: "Legal Advisor",
    company: "Corporate Legal Pro",
    content: "Their understanding of legal requirements and business regulations is exceptional. Great service.",
    rating: 5
  },
  {
    name: "Kamal El Idrissi",
    role: "Finance Director",
    company: "Investment Solutions",
    content: "Professional team with excellent service delivery. They made our business establishment seamless.",
    rating: 5
  },
  {
    name: "Zineb El Ouazzani",
    role: "Strategy Manager",
    company: "Business Growth Hub",
    content: "Their strategic insights and professional guidance were crucial to our success in Morocco.",
    rating: 5
  },
  {
    name: "Amine El Bakkali",
    role: "Tech Director",
    company: "Digital Innovations",
    content: "Outstanding support and expertise in handling our business requirements. Highly recommended.",
    rating: 5
  },
  {
    name: "Sofia El Alaoui",
    role: "Operations Director",
    company: "Tech Solutions Global",
    content: "Their dedication to client success and deep market knowledge makes them the perfect partner for business in Morocco.",
    rating: 5
  },
  {
    name: "Jamal El Kabbaj",
    role: "Innovation Director",
    company: "Future Tech Morocco",
    content: "Exceptional guidance and support throughout our business journey. Their expertise made complex processes seamless.",
    rating: 5
  },
  {
    name: "Malika El Harti",
    role: "Business Strategist",
    company: "Strategic Growth Partners",
    content: "Outstanding service quality and deep understanding of business requirements. Highly professional team.",
    rating: 5
  },
  {
    name: "Tarik El Moussaoui",
    role: "Finance Director",
    company: "Investment Dynamics",
    content: "Their expertise in navigating business regulations and providing strategic insights is remarkable.",
    rating: 5
  },
  {
    name: "Saida El Filali",
    role: "Operations Manager",
    company: "Tech Innovations Hub",
    content: "Professional team with excellent service delivery. Made our business setup process efficient and smooth.",
    rating: 5
  },
  {
    name: "Khalid El Amrani",
    role: "CEO",
    company: "Digital Solutions Pro",
    content: "Their comprehensive approach to business services and attention to detail is exceptional.",
    rating: 5
  },
  {
    name: "Naima El Fassi",
    role: "Legal Director",
    company: "Corporate Excellence",
    content: "Exceptional support in handling complex business requirements. Highly recommended for their expertise.",
    rating: 5
  },
  {
    name: "Hamid El Ouazzani",
    role: "Strategy Director",
    company: "Business Growth Solutions",
    content: "Their market insights and professional guidance were crucial to our success in Morocco.",
    rating: 5
  },
  {
    name: "Loubna El Mansouri",
    role: "HR Director",
    company: "Global Talent Solutions",
    content: "Outstanding service and expertise in handling our corporate requirements. True professionals.",
    rating: 5
  },
  {
    name: "Aziz El Idrissi",
    role: "Tech Entrepreneur",
    company: "Innovation Works",
    content: "Their dedication to excellence and deep understanding of business needs is impressive.",
    rating: 5
  },
  {
    name: "Karima El Alami",
    role: "Project Director",
    company: "Development Solutions",
    content: "Excellent support throughout our business establishment process. Highly professional team.",
    rating: 5
  },
  {
    name: "Yassine El Bakkali",
    role: "Managing Director",
    company: "Tech Ventures Pro",
    content: "Their expertise in business services and regulatory compliance is outstanding.",
    rating: 5
  },
  {
    name: "Amira El Gharbi",
    role: "Operations Head",
    company: "Business Solutions Hub",
    content: "Professional guidance and excellent service quality. Made our business journey smooth.",
    rating: 5
  },
  {
    name: "Karim El Hassani",
    role: "Finance Manager",
    company: "Investment Solutions Pro",
    content: "Their understanding of business requirements and professional approach is commendable.",
    rating: 5
  },
  {
    name: "Salma El Moutaouakil",
    role: "Legal Advisor",
    company: "Corporate Services",
    content: "Exceptional support in navigating complex regulations. Highly recommended for their expertise.",
    rating: 5
  },
  {
    name: "Ismail El Bennani",
    role: "Tech Director",
    company: "Digital Futures",
    content: "Their expertise in business development and market strategy is truly exceptional. Outstanding service.",
    rating: 5
  },
  {
    name: "Safae El Kettani",
    role: "Innovation Manager",
    company: "Future Solutions",
    content: "Professional team that delivers excellence in every aspect of business services. Highly satisfied.",
    rating: 5
  },
  {
    name: "Adil El Hamidi",
    role: "Business Director",
    company: "Growth Partners",
    content: "Their understanding of local markets and international standards made our expansion seamless.",
    rating: 5
  },
  {
    name: "Meryem El Khattabi",
    role: "Strategy Lead",
    company: "Business Dynamics",
    content: "Exceptional guidance throughout our business journey. Their expertise is unmatched.",
    rating: 5
  },
  {
    name: "Zakaria El Fathi",
    role: "Operations Director",
    company: "Tech Solutions Plus",
    content: "Outstanding support in all aspects of business development. True professionals in their field.",
    rating: 5
  },
  {
    name: "Ghita El Rhazi",
    role: "Finance Head",
    company: "Investment Leaders",
    content: "Their comprehensive approach to business services and attention to detail is remarkable.",
    rating: 5
  },
  {
    name: "Badr El Kadiri",
    role: "Managing Partner",
    company: "Innovation Hub",
    content: "Professional team that consistently delivers beyond expectations. Excellent service quality.",
    rating: 5
  },
  {
    name: "Hajar El Mrini",
    role: "Legal Director",
    company: "Corporate Excellence",
    content: "Their expertise in handling complex business requirements is outstanding. Highly recommended.",
    rating: 5
  },
  {
    name: "Othmane El Guerrouj",
    role: "Tech Entrepreneur",
    company: "Digital Ventures",
    content: "Exceptional support and guidance in establishing our business presence. True experts.",
    rating: 5
  },
  {
    name: "Rim El Aoufi",
    role: "Project Manager",
    company: "Business Solutions",
    content: "Their professional approach and deep market knowledge made our journey successful.",
    rating: 5
  },
  {
    name: "Mehdi El Youssoufi",
    role: "Strategy Director",
    company: "Growth Dynamics",
    content: "Outstanding service quality and expertise in business development. Highly satisfied.",
    rating: 5
  },
  {
    name: "Yasmine El Majid",
    role: "Operations Head",
    company: "Tech Excellence",
    content: "Their dedication to client success and professional guidance is truly commendable.",
    rating: 5
  },
  {
    name: "Nabil El Hajjami",
    role: "Business Lead",
    company: "Market Solutions",
    content: "Exceptional support in navigating business regulations. Professional and efficient team.",
    rating: 5
  },
  {
    name: "Imane El Bouazzaoui",
    role: "Finance Director",
    company: "Investment Pro",
    content: "Their expertise and commitment to excellence made our business setup seamless.",
    rating: 5
  },
  {
    name: "Marouane El Harrak",
    role: "Innovation Lead",
    company: "Digital Pioneers",
    content: "Exceptional service quality and deep understanding of business needs. Highly professional team.",
    rating: 5
  },
  {
    name: "Sanaa El Mokri",
    role: "Business Development",
    company: "Growth Accelerator",
    content: "Their expertise in navigating complex business requirements is truly remarkable.",
    rating: 5
  },
  {
    name: "Reda El Fakir",
    role: "Tech Director",
    company: "Future Tech Solutions",
    content: "Outstanding support and professional guidance throughout our business journey.",
    rating: 5
  },
  {
    name: "Lamia El Meknassi",
    role: "Operations Manager",
    company: "Business Excellence",
    content: "Their comprehensive approach to business services made our expansion successful.",
    rating: 5
  },
  {
    name: "Taoufik El Amiri",
    role: "Strategy Head",
    company: "Market Leaders Pro",
    content: "Professional team with exceptional expertise in business development and compliance.",
    rating: 5
  },
  {
    name: "Asmaa El Jabri",
    role: "Legal Counsel",
    company: "Corporate Solutions",
    content: "Their knowledge of regulations and professional approach is outstanding.",
    rating: 5
  },
  {
    name: "Younes El Bahri",
    role: "Finance Manager",
    company: "Investment Dynamics",
    content: "Excellent support in all aspects of business establishment. True professionals.",
    rating: 5
  },
  {
    name: "Kenza El Madani",
    role: "Project Director",
    company: "Tech Innovators",
    content: "Their dedication to client success and market expertise is unmatched.",
    rating: 5
  },
  {
    name: "Ilias El Fassi",
    role: "Operations Director",
    company: "Business Growth Hub",
    content: "Outstanding service delivery and attention to detail. Highly recommended.",
    rating: 5
  },
  {
    name: "Dounia El Kabbaj",
    role: "HR Director",
    company: "Global Talent Pro",
    content: "Their professional guidance made our business transition smooth and efficient.",
    rating: 5
  },
  {
    name: "Saad El Ghazi",
    role: "Tech Entrepreneur",
    company: "Digital Ventures Plus",
    content: "Exceptional support in establishing our business presence. Expert team.",
    rating: 5
  },
  {
    name: "Hiba El Mansouri",
    role: "Strategy Consultant",
    company: "Business Solutions Pro",
    content: "Their market insights and professional expertise were crucial to our success.",
    rating: 5
  },
  {
    name: "Mehdi El Ouazzani",
    role: "Managing Director",
    company: "Innovation Works",
    content: "Professional team that delivers excellence in every aspect of service.",
    rating: 5
  },
  {
    name: "Soukaina El Idrissi",
    role: "Legal Director",
    company: "Corporate Excellence",
    content: "Their understanding of business requirements and regulations is exceptional.",
    rating: 5
  },
  {
    name: "Omar El Bennani",
    role: "Tech Innovator",
    company: "Digital Future",
    content: "Exceptional guidance and support in establishing our digital presence. Outstanding service.",
    rating: 5
  },
  {
    name: "Fatima El Khayari",
    role: "Business Director",
    company: "Growth Solutions",
    content: "Their expertise in business development and market strategy is remarkable.",
    rating: 5
  },
  {
    name: "Hamza El Fassi",
    role: "Operations Head",
    company: "Tech Excellence",
    content: "Professional team that consistently delivers beyond expectations. Highly recommended.",
    rating: 5
  },
  {
    name: "Nora El Alami",
    role: "Strategy Director",
    company: "Business Ventures",
    content: "Outstanding support in navigating complex business requirements. True experts.",
    rating: 5
  },
  {
    name: "Ismail El Bakkali",
    role: "Finance Director",
    company: "Investment Solutions",
    content: "Their expertise in financial planning and business strategy is exceptional.",
    rating: 5
  },
  {
    name: "Rim El Hassani",
    role: "Tech Entrepreneur",
    company: "Digital Pioneers",
    content: "Outstanding guidance in establishing our digital presence. True experts.",
    rating: 5
  },
  {
    name: "Zakaria El Moutaouakil",
    role: "Managing Director",
    company: "Business Excellence",
    content: "Their comprehensive approach to business services is truly remarkable.",
    rating: 5
  },
  {
    name: "Ghita El Amrani",
    role: "Legal Director",
    company: "Corporate Pro",
    content: "Exceptional support in handling complex legal requirements. Professional team.",
    rating: 5
  },
  {
    name: "Badr El Gharbi",
    role: "Strategy Consultant",
    company: "Growth Dynamics",
    content: "Professional team that delivers excellence in every aspect of service.",
    rating: 5
  },
  {
    name: "Hajar El Harti",
    role: "Operations Director",
    company: "Tech Solutions Plus",
    content: "Their expertise and commitment to client success is outstanding.",
    rating: 5
  },
  {
    name: "Othmane El Bennani",
    role: "Business Lead",
    company: "Market Solutions Pro",
    content: "Outstanding support and professional guidance throughout our journey.",
    rating: 5
  },
  {
    name: "Safaa El Meknassi",
    role: "Innovation Director",
    company: "Digital Future Pro",
    content: "Their expertise in digital transformation and business strategy is exceptional.",
    rating: 5
  },
  {
    name: "Hamid El Amiri",
    role: "Operations Head",
    company: "Business Excellence",
    content: "Professional team that consistently delivers outstanding results. Highly recommended.",
    rating: 5
  },
  {
    name: "Latifa El Jabri",
    role: "Strategy Director",
    company: "Growth Solutions",
    content: "Their market insights and professional approach made our expansion seamless.",
    rating: 5
  },
  {
    name: "Younes El Bahri",
    role: "Tech Director",
    company: "Innovation Hub",
    content: "Exceptional support in establishing our digital presence. Expert guidance.",
    rating: 5
  },
  {
    name: "Amal El Madani",
    role: "Legal Advisor",
    company: "Corporate Solutions",
    content: "Outstanding expertise in handling complex regulations. True professionals.",
    rating: 5
  },
  {
    name: "Said El Fassi",
    role: "Project Manager",
    company: "Tech Ventures Pro",
    content: "Their dedication to client success and attention to detail is remarkable.",
    rating: 5
  },
  {
    name: "Fatima El Kabbaj",
    role: "Business Director",
    company: "Market Leaders",
    content: "Professional guidance throughout our business journey. Excellent service.",
    rating: 5
  },
  {
    name: "Mehdi El Ghazi",
    role: "Finance Head",
    company: "Investment Plus",
    content: "Their comprehensive approach to business services is truly exceptional.",
    rating: 5
  },
  {
    name: "Nour El Mansouri",
    role: "Operations Director",
    company: "Business Growth Hub",
    content: "Outstanding support in all aspects of business development. Expert team.",
    rating: 5
  },
  {
    name: "Yassir El Ouazzani",
    role: "Tech Entrepreneur",
    company: "Digital Solutions",
    content: "Professional team with deep understanding of market requirements.",
    rating: 5
  },
  {
    name: "Imane El Idrissi",
    role: "Strategy Lead",
    company: "Growth Dynamics",
    content: "Their expertise and commitment to excellence is unmatched. Highly satisfied.",
    rating: 5
  },
  {
    name: "Karim El Alaoui",
    role: "Managing Director",
    company: "Tech Excellence",
    content: "Exceptional service quality and professional guidance throughout our journey.",
    rating: 5
  },
  {
    name: "Houda El Bakkali",
    role: "Legal Director",
    company: "Corporate Pro",
    content: "Outstanding support in navigating complex regulations. True experts.",
    rating: 5
  },
  {
    name: "Rachid El Hassani",
    role: "Business Consultant",
    company: "Market Solutions",
    content: "Their professional approach and deep market knowledge is remarkable.",
    rating: 5
  },
  {
    name: "Mariam El Fathi",
    role: "Innovation Lead",
    company: "Digital Pioneers",
    content: "Exceptional service quality and expertise in digital transformation.",
    rating: 5
  },
  {
    name: "Adil El Rhazi",
    role: "Operations Director",
    company: "Business Pro",
    content: "Their dedication to client success and professional guidance is outstanding.",
    rating: 5
  },
  {
    name: "Sanaa El Kadiri",
    role: "Legal Head",
    company: "Corporate Excellence",
    content: "Outstanding support in navigating complex legal requirements. Expert team.",
    rating: 5
  },
  {
    name: "Youssef El Mrini",
    role: "Strategy Director",
    company: "Growth Hub",
    content: "Professional team with exceptional understanding of market dynamics.",
    rating: 5
  },
  {
    name: "Kenza El Guerrouj",
    role: "Tech Director",
    company: "Innovation Plus",
    content: "Their expertise in digital solutions and business strategy is remarkable.",
    rating: 5
  },
  {
    name: "Omar El Aoufi",
    role: "Business Lead",
    company: "Market Leaders",
    content: "Exceptional guidance throughout our business establishment process.",
    rating: 5
  },
  {
    name: "Leila El Youssoufi",
    role: "Project Director",
    company: "Tech Solutions",
    content: "Outstanding service quality and attention to detail. True professionals.",
    rating: 5
  },
  {
    name: "Hassan El Majid",
    role: "Finance Director",
    company: "Investment Pro",
    content: "Their comprehensive approach to business services is exceptional.",
    rating: 5
  },
  {
    name: "Amina El Hajjami",
    role: "Operations Head",
    company: "Business Excellence",
    content: "Professional team that delivers outstanding results consistently.",
    rating: 5
  },
  {
    name: "Mehdi El Bouazzaoui",
    role: "Strategy Lead",
    company: "Growth Dynamics",
    content: "Their market insights and professional expertise made our journey successful.",
    rating: 5
  },
  {
    name: "Fatima El Harrak",
    role: "Legal Director",
    company: "Corporate Solutions",
    content: "Exceptional support in handling complex regulations. Highly recommended.",
    rating: 5
  },
  {
    name: "Karim El Mokri",
    role: "Tech Entrepreneur",
    company: "Digital Ventures",
    content: "Outstanding guidance in establishing our digital presence. Expert team.",
    rating: 5
  },
  {
    name: "Nadia El Fakir",
    role: "Business Director",
    company: "Market Solutions Pro",
    content: "Their expertise and commitment to excellence is truly remarkable.",
    rating: 5
  },
  {
    name: "Yassine El Meknassi",
    role: "Managing Director",
    company: "Tech Excellence",
    content: "Professional support and deep understanding of business needs.",
    rating: 5
  },
  {
    name: "Saida El Amiri",
    role: "Legal Advisor",
    company: "Corporate Pro",
    content: "Outstanding expertise in handling complex regulations. Highly recommended.",
    rating: 5
  },
  {
    name: "Hamza El Jabri",
    role: "Tech Director",
    company: "Digital Solutions",
    content: "Their dedication to innovation and professional service is exceptional.",
    rating: 5
  },
  {
    name: "Loubna El Bahri",
    role: "Strategy Head",
    company: "Business Growth",
    content: "Professional team with excellent market insights and guidance.",
    rating: 5
  },
  {
    name: "Tarik El Madani",
    role: "Operations Director",
    company: "Tech Ventures",
    content: "Exceptional support throughout our business transformation journey.",
    rating: 5
  },
  {
    name: "Ghizlane El Fassi",
    role: "Project Lead",
    company: "Innovation Hub",
    content: "Their expertise and commitment to excellence is outstanding.",
    rating: 5
  },
  {
    name: "Khalid El Kabbaj",
    role: "Business Director",
    company: "Market Leaders",
    content: "Outstanding service quality and professional approach. True experts.",
    rating: 5
  },
  {
    name: "Naima El Ghazi",
    role: "Finance Head",
    company: "Investment Solutions",
    content: "Their comprehensive understanding of business needs is remarkable.",
    rating: 5
  },
  {
    name: "Younes El Mansouri",
    role: "Tech Entrepreneur",
    company: "Digital Future",
    content: "Professional guidance and support in digital transformation.",
    rating: 5
  },
  {
    name: "Salma El Ouazzani",
    role: "Legal Director",
    company: "Corporate Excellence",
    content: "Exceptional expertise in handling complex requirements. Expert team.",
    rating: 5
  },
  {
    name: "Adam El Fassi",
    role: "Innovation Manager",
    company: "Digital Transformation Co",
    content: "Their strategic vision and implementation capabilities transformed our business completely. Outstanding service.",
    rating: 5
  },
  {
    name: "Sophia El Khattabi",
    role: "Operations Director",
    company: "Global Solutions Hub",
    content: "Exceptional attention to detail and professional expertise. They made our business transition seamless.",
    rating: 5
  },
  {
    name: "Malik El Bouazzaoui",
    role: "Strategy Director",
    company: "Tech Innovate Pro",
    content: "Their comprehensive understanding of market dynamics and regulatory framework is truly impressive.",
    rating: 5
  },
  {
    name: "Yasmine El Harti",
    role: "Business Development Lead",
    company: "Future Ventures",
    content: "Outstanding support throughout our expansion journey. Their expertise is unmatched in the industry.",
    rating: 5
  },
  {
    name: "Anas El Mansouri",
    role: "Tech Director",
    company: "Digital Excellence Hub",
    content: "Professional team that consistently delivers beyond expectations. Their guidance was invaluable.",
    rating: 5
  }
]

export function Testimonials() {
  return (
    <div id="success-stories" className="relative py-24 overflow-hidden">
      {/* Premium Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,184,0,0.15),transparent_70%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
          className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,184,0,0.05)_1px,transparent_1px),linear-gradient(-45deg,rgba(255,184,0,0.05)_1px,transparent_1px)] bg-[size:20px_20px]" 
        />
        
        {/* Enhanced Light Effects */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gold/10 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gold/10 rounded-full blur-[120px] animate-pulse delay-1000" />
        </motion.div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          {/* Premium Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex justify-center mb-8"
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-gold/50 via-amber-500/50 to-gold/50 rounded-full blur-lg opacity-30 group-hover:opacity-50 transition duration-500" />
              <div className="relative px-8 py-3 bg-black/50 backdrop-blur-xl rounded-full border border-gold/20 group-hover:border-gold/40 transition duration-500">
                <span className="relative bg-gradient-to-r from-gold via-amber-500 to-gold bg-clip-text text-transparent text-sm font-medium tracking-wider uppercase">
                  Client Success Stories
                </span>
              </div>
            </div>
          </motion.div>

          {/* Main Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6"
          >
            <div className="bg-gradient-to-r from-white via-zinc-400 to-white bg-clip-text text-transparent mb-2">Our</div>
            <div className="relative">
              <span className="absolute -inset-2 bg-gradient-to-r from-gold/50 via-amber-500/50 to-gold/50 blur-2xl opacity-30" />
              <span className="relative bg-gradient-to-r from-gold via-amber-500 to-gold bg-clip-text text-transparent">
                Testimonials
              </span>
            </div>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg sm:text-xl text-zinc-400 max-w-3xl mx-auto font-light leading-relaxed mb-4"
          >
            Don't just take our word for it. Here's what our clients have to say about their experience working with us.
          </motion.p>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-1 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto"
          />
        </div>

        {/* Auto-scrolling Testimonials Container */}
        <div className="relative w-full">
          {/* Gradient Overlays */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10" />
          
          <div 
            className="flex gap-8 overflow-hidden"
            style={{
              maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
              WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
            }}
          >
            <div className="flex gap-8 animate-[scroll_480s_linear_infinite] hover:[animation-play-state:paused]">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="flex-none w-[400px]"
                >
                  <div className="group relative h-full">
                    <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-gold/5 to-transparent rounded-2xl blur-xl transition-all duration-500 group-hover:bg-gold/10" />
                    <div className="relative bg-[#0A0A0A] rounded-2xl p-8 border border-white/10 group-hover:border-gold/20 transition-all duration-500 h-full">
                      {/* Rating Stars */}
                      <div className="flex gap-1 mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-gold" fill="currentColor" />
                        ))}
                      </div>
                      
                      <div className="flex items-center gap-4 mb-6">
                        <div>
                          <h3 className="text-lg font-bold text-white">{testimonial.name}</h3>
                          <p className="text-gold text-sm">{testimonial.role}</p>
                          <p className="text-zinc-400 text-sm">{testimonial.company}</p>
                        </div>
                      </div>
                      <p className="text-zinc-400 italic">{testimonial.content}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}