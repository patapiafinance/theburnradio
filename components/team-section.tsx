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
      staggerChildren: 0.2,
    },
  },
}

export default function TeamSection() {
  const team = [
    {
      name: "Mike Presson",
      role: "Team Lead",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Ps%20Mike.jpg-cJVmIrKWWHiXEZBKQHJPuG3YJEXYSt.jpeg",
      bio: "Leading the Burn Radio team with vision and expertise.",
      number: 1,
    },
    {
      name: "Mrs Andrea Presson",
      role: "Director / Head of Public Speaking",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/andre.jpg-bzpa0k1ZrihdTBJYl5xpkGehWDfNYv.jpeg",
      bio: "Leading our public speaking initiatives and program development.",
      number: 2,
    },
    {
      name: "Valentine Masicha",
      role: "Head of Technology and AI Automation Lead",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/val.jpg-L9cL7KyEBfofyDYnbs6ycAkuTF4zWa.jpeg",
      bio: "Managing technology infrastructure and leading AI automation initiatives.",
      number: 3,
    },
    {
      name: "Tumusuute Nanazibwa",
      role: "Program Director / Wake up Burner Radio Host",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Tumu.jpg-48g2BWWugSR8viNYc1pBuFT2f8OsP3.jpeg",
      bio: "Directing our radio programs and hosting the Wake up Burner show.",
      number: 4,
    },
    {
      name: "David Namara",
      role: "Radio Host / Head of Tech East Africa",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/David.jpg-Q5NNwizn73QaM26ofnPmc6ALzkvEUq.jpeg",
      bio: "Hosting the Burn Drive Show and leading tech initiatives in East Africa.",
      number: 5,
    },
    {
      name: "Alvin Michale Mulumba",
      role: "Recruitments Lead",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Alvin_michael-removebg-preview%20%281%29-tYdBVCfeMeIoMpvtcsvsGrZTpWTz1n.png",
      bio: "Managing talent acquisition and school partnerships.",
      number: 6,
    },
    {
      name: "Gerald Odur",
      role: "Technology Lead",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/gerald-removebg-preview-Uc72iBxsQZ8Mjy0X1JbXnMfS0JvVia-Bn0AU8NM12d0HuVzt7I5NRJpFfZaFu.png",
      bio: "Overseeing all technical aspects of our broadcasting and digital platforms.",
      number: 7,
    },
    {
      name: "Adrene Atuhaire",
      role: "Youth Coordinator / Radio Host",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/andrean.jpg-wJe5z0vasqiCBv57III8ZxVzhpxapu-7kNKqTuxtBPH5DWPZfuSqdiWcPs4sI.jpeg",
      bio: "Coordinating youth programs and hosting radio shows.",
      number: 8,
    },
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
        <motion.div className="flex items-center mb-12" variants={fadeIn}>
          <div className="h-1 w-12 bg-[#b5d334] mr-4"></div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0077be]">The Team</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center"
              variants={fadeIn}
              whileHover={{ y: -10 }}
            >
              <div className="mb-4 relative">
                <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-[#b5d334]">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={200}
                    height={200}
                    className="object-cover w-full h-full object-top"
                  />
                </div>
                <motion.div
                  className="absolute -bottom-2 left-0 right-0 mx-auto w-12 h-12 bg-[#f7a41d] rounded-full flex items-center justify-center"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.2, duration: 0.3, type: "spring" }}
                >
                  <span className="text-black font-bold">{member.number}</span>
                </motion.div>
              </div>
              <h3 className="text-xl font-bold text-[#0077be]">{member.name}</h3>
              <p className="text-[#b5d334] font-semibold mb-2">{member.role}</p>
              <p className="text-gray-600">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
