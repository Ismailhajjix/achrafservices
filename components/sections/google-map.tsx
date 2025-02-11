"use client"

import { motion } from "framer-motion"

export function GoogleMap() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative"
    >
      {/* Glass Effect Card */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-gold/5 to-white/5 rounded-2xl blur-xl" />
      <div className="relative bg-gradient-to-br from-black/80 via-black/70 to-black/80 backdrop-blur-xl rounded-2xl p-4 border border-white/10 hover:border-gold/20 transition-all duration-500 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-gold/5 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Map Title */}
        <div className="mb-4">
          <h2 className="text-2xl font-semibold bg-gradient-to-r from-white via-gold to-white bg-clip-text text-transparent">
            Our Location
          </h2>
        </div>

        {/* Map Container */}
        <div className="relative rounded-xl overflow-hidden">
          <iframe
            title="Office Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3261.247189524091!2d-2.9262269!3d35.1753911!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd77a7472c1e5719%3A0x993f136ef6888a8b!2sAgence%20Achraf%20Services!5e0!3m2!1sen!2sma!4v1739120344717!5m2!1sen!2sma"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-lg"
          />
        </div>
      </div>
    </motion.div>
  )
} 