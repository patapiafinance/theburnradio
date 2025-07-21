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

export default function WorkGallery() {
  const images = [
    {
      src: "/placeholder.svg?height=300&width=400",
      alt: "Students in radio training",
      caption: "Radio training session",
    },
    { src: "/placeholder.svg?height=300&width=400", alt: "Coding workshop", caption: "Coding workshop for students" },
    {
      src: "/placeholder.svg?height=300&width=400",
      alt: "Public speaking event",
      caption: "Public speaking competition",
    },
    { src: "/placeholder.svg?height=300&width=400", alt: "Robotics class", caption: "Robotics class in session" },
    {
      src: "/placeholder.svg?height=300&width=400",
      alt: "Media production",
      caption: "Students learning media production",
    },
    { src: "/placeholder.svg?height=300&width=400", alt: "Broadcasting session", caption: "Live broadcasting session" },
  ]

  return (
    <motion.section
      className="py-16 bg-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={staggerContainer}
    >
      <div className="container mx-auto px-4">
        <motion.h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#0077be]" variants={fadeIn}>
          Our Work in Pictures
        </motion.h2>
        <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" variants={staggerContainer}>
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow"
              variants={fadeIn}
              whileHover={{ scale: 1.03 }}
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                width={400}
                height={300}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <p className="text-white font-medium">{image.caption}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}
