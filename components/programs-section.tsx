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

export default function ProgramsSection() {
  return (
    <motion.section
      className="py-16 bg-gray-50"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={staggerContainer}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div variants={fadeIn}>
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tbr3.PNG-dMzsPl9X4n7xwmHQ2VwgpycXX32fdJ.png"
              alt="More Than Just Programs"
              width={600}
              height={400}
              className="w-full"
            />
          </motion.div>

          <motion.div variants={fadeIn}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#0077be]">Our Programs</h2>
            <p className="text-lg mb-6">
              At Burn Radio, we offer more than just standard programs. Our initiatives are designed to develop critical
              skills, foster creativity, and prepare students for the future.
            </p>

            <div className="space-y-6">
              <motion.div className="flex items-start" whileHover={{ x: 10 }}>
                <div className="bg-[#f7a41d] rounded-full p-2 mr-4 mt-1">
                  <span className="block w-4 h-4 bg-white rounded-full"></span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#0077be]">Club Competitions</h3>
                  <p>Engaging competitions within schools to develop teamwork and showcase talent.</p>
                </div>
              </motion.div>

              <motion.div className="flex items-start" whileHover={{ x: 10 }}>
                <div className="bg-[#f7a41d] rounded-full p-2 mr-4 mt-1">
                  <span className="block w-4 h-4 bg-white rounded-full"></span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#0077be]">Inter-School Competitions</h3>
                  <p>
                    Collaborative events bringing together students from different schools to compete and learn from
                    each other.
                  </p>
                </div>
              </motion.div>

              <motion.div className="flex items-start" whileHover={{ x: 10 }}>
                <div className="bg-[#f7a41d] rounded-full p-2 mr-4 mt-1">
                  <span className="block w-4 h-4 bg-white rounded-full"></span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#0077be]">International Conventions</h3>
                  <p>Global gatherings that expose students to international perspectives and opportunities.</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}
