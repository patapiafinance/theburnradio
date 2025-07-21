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

export default function MemberSchools() {
  const schools = [
    { name: "Asifiwe International Academy", logo: "/placeholder.svg?height=100&width=100" },
    { name: "Greenhill Academy", logo: "/placeholder.svg?height=100&width=100" },
    { name: "Galaxy International School", logo: "/placeholder.svg?height=100&width=100" },
    { name: "Brentwood Primary School", logo: "/placeholder.svg?height=100&width=100" },
    { name: "Seroma Christian High School", logo: "/placeholder.svg?height=100&width=100" },
    { name: "Shree Sahajanand School Uganda", logo: "/placeholder.svg?height=100&width=100" },
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
          Our Member Schools
        </motion.h2>
        <motion.div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6" variants={staggerContainer}>
          {schools.map((school, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow"
              variants={fadeIn}
              whileHover={{
                y: -10,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
            >
              <Image
                src={school.logo || "/placeholder.svg"}
                alt={school.name}
                width={100}
                height={100}
                className="mx-auto mb-4"
              />
              <h3 className="font-bold text-[#0077be]">{school.name}</h3>
            </motion.div>
          ))}
        </motion.div>
        <motion.div className="text-center mt-12" variants={fadeIn}>
          <p className="text-lg mb-6">Current Locations of Operation</p>
          <div className="inline-block text-left">
            <ul className="list-disc pl-5 space-y-2">
              <li>Asifiwe International Academy</li>
              <li>Greenhill Academy</li>
              <li>Galaxy International School</li>
              <li>Brentwood Primary School</li>
              <li>Seroma Christian High School</li>
              <li>Shree Sahajanand School Uganda</li>
              <li>The Burn Radio Hub - Nalya (Soon to be at Metroplex Nalya)</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}
