"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export default function Partners() {
  const partners = [
    {
      name: "Extreme Adventure Park",
      logo: "https://blobs.vusercontent.net/blob/extreme-adventure-park-logo-7aWhiHe0jGcJDYpU35Moxge5ndnmUV.svg",
    },
    {
      name: "MTN",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/New-mtn-logo.jpg-ZboSlkxAGrvMUaz0msPBzE7qqPSFQV.jpeg",
    },
    {
      name: "Nakaseka Development Foundation",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/NDF.jpg-Z7jCSconpKGWrwyz9IAL1sDbQNqLOz.jpeg",
    },
    {
      name: "BAR Aviation",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bar%20aviation-O6ud3LWn50bzQU9xpQtDfiaNw2MazA.png",
    },
  ]

  return (
    <motion.section
      className="py-16 bg-gray-50"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={staggerContainer}
    >
      <div className="container mx-auto px-4">
        <motion.h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#0077be]" variants={fadeIn}>
          Our Partners
        </motion.h2>
        <motion.div className="grid grid-cols-2 md:grid-cols-3 gap-8" variants={staggerContainer}>
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md flex items-center justify-center hover:shadow-lg transition-shadow h-40"
              variants={fadeIn}
              whileHover={{
                y: -5,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
            >
              <Image
                src={partner.logo || "/placeholder.svg"}
                alt={partner.name}
                width={200}
                height={100}
                className="object-contain max-h-28"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}
