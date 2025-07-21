"use client"

import Image from "next/image"
import Link from "next/link"
import {
  Play,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Briefcase,
  Users,
  Code,
  BookOpen,
  GraduationCap,
  Brain,
  Lightbulb,
  Laptop,
  Award,
  Zap,
} from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import CookieConsent from "@/components/cookie-consent"
import MemberSchools from "@/components/member-schools"
import Partners from "@/components/partners"
import WorkGallery from "@/components/work-gallery"
import VideoSection from "@/components/video-section"
import TeamSection from "@/components/team-section"
import ProgramsSection from "@/components/programs-section"
import PricingSection from "@/components/pricing-section"
import Navbar from "@/components/navbar"
import MovingTextButton from "@/components/moving-text-button"

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

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-[#0077be] text-white overflow-hidden">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">The Burn Radio</h1>
              <p className="text-xl mb-8">
                A multimedia technology and broadcasting company empowering young creatives with critical minds
              </p>

              <div className="mb-6">
                <MovingTextButton
                  text="Join Us Now for the Week of Prayer - Monday to Thursday, 13:00 - 14:00 EAT"
                  className="w-full md:w-auto bg-[#f7a41d] hover:bg-[#e5940a] text-black font-bold py-4 px-6 rounded-md text-lg"
                />
              </div>

              <div className="flex flex-wrap gap-4 mb-8">
                <Link href="https://streema.com/radios/The_Burn_Radio" target="_blank">
                  <Button className="bg-[#f7a41d] hover:bg-[#e5940a] text-black font-bold" size="lg">
                    <Play className="mr-2 h-5 w-5" /> Listen Live
                  </Button>
                </Link>
                <Button className="bg-[#b71c1c] hover:bg-[#9a1717] text-white font-bold" size="lg">
                  Join as a Member School
                </Button>
              </div>

              <div className="flex space-x-4">
                <Link href="https://play.google.com/store/apps/details?id=com.skyapps.liferadio&pli=1" target="_blank">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/playsore-removebg-preview-rsfFtWjR4ON9Az19tGqQ1VpnK56xIP.png"
                    alt="Get it on Google Play"
                    width={150}
                    height={50}
                    className="h-12 w-auto"
                  />
                </Link>
                <Link href="https://apps.apple.com/us/app/the-burn-radio/id1635030188" target="_blank">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/app_store-removebg-preview-u7tybdxLrGWnyzAtz1GSHrbdH9K67i.png"
                    alt="Download on the App Store"
                    width={150}
                    height={50}
                    className="h-12 w-auto"
                  />
                </Link>
              </div>
            </motion.div>
            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tbr%20png%20%281%29-F3shpz8TwJ8HWxh2bCxkWYCC2Ase8H.png"
                alt="The Burn Radio Logo"
                width={400}
                height={300}
                className="object-contain"
              />
            </motion.div>
          </div>
        </div>

        {/* Wave effect */}
        <div className="absolute bottom-0 left-0 right-0 w-full">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full">
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
            ></path>
          </svg>
        </div>
      </section>

      {/* About Section */}
      <motion.section
        className="py-16 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#0077be]">About Burn Radio</h2>
          <div className="max-w-4xl mx-auto">
            <motion.p className="text-lg mb-6" variants={fadeIn}>
              Burn Radio Ltd is a multimedia technology and broadcasting company registered under the laws of the
              Republic of Uganda. It was founded in April 17th 2012 and gained its legal status on the 11th of November
              2020. Its headquarters are at Plot 653 Shrine Drive Nalya Estates, Kampala.
            </motion.p>
            <motion.p className="text-lg mb-6" variants={fadeIn}>
              Our focus work activities are broadcasting, digital skill training and academic assistance in Robotics and
              Coding, mass media skills and public speaking including internet radio set up and consultancy.
            </motion.p>
            <motion.p className="text-lg" variants={fadeIn}>
              Our philosophy is to create solutions to the world's biggest problem which is sin in the modern societies
              through empowering young creatives with critical minds to communicate the Gospel of our Lord and savior
              Jesus Christ using advanced technologies in futuristic ecosystems.
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Mission and Vision */}
      <motion.section
        className="py-16 bg-[#b5d334]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        <div className="container mx-auto px-4">
          <motion.h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#0077be]" variants={fadeIn}>
            Our Mission & Vision
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="bg-white p-8 rounded-lg shadow-lg"
              variants={fadeIn}
              whileHover={{
                y: -10,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
            >
              <h3 className="text-2xl font-bold mb-4 text-[#0077be]">Vision</h3>
              <p className="text-lg">To liberate captives in all generations</p>
            </motion.div>
            <motion.div
              className="bg-white p-8 rounded-lg shadow-lg"
              variants={fadeIn}
              whileHover={{
                y: -10,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
            >
              <h3 className="text-2xl font-bold mb-4 text-[#0077be]">Mission</h3>
              <p className="text-lg">To reveal hidden treasures and riches in secret places</p>
            </motion.div>
            <motion.div
              className="bg-white p-8 rounded-lg shadow-lg"
              variants={fadeIn}
              whileHover={{
                y: -10,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
            >
              <h3 className="text-2xl font-bold mb-4 text-[#0077be]">Values</h3>
              <p className="text-lg">To Love righteousness and hate all forms of lawlessness</p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Team Section */}
      <TeamSection />

      {/* Programs Section */}
      <ProgramsSection />

      {/* Member Schools Section */}
      <MemberSchools />

      {/* Partners Section */}
      <Partners />

      {/* Pricing Section */}
      <PricingSection />

      {/* Our Work in Pictures */}
      <WorkGallery />

      {/* 21st Century Skills */}
      <motion.section
        className="py-16 bg-[#b5d334]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        <div className="container mx-auto px-4">
          <motion.h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#0077be]" variants={fadeIn}>
            21st Century Required Skills - the 4Cs
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div
              className="bg-[#e53935] text-white p-6 rounded-lg shadow-lg"
              variants={fadeIn}
              whileHover={{
                y: -10,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
            >
              <h3 className="text-2xl font-bold mb-4">Collaboration</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Leadership and Initiative</li>
                <li>Co-Operation</li>
                <li>Flexibility</li>
                <li>Responsibility and Productivity</li>
                <li>Collaboration (Digitally)</li>
                <li>Responsiveness</li>
              </ul>
            </motion.div>
            <motion.div
              className="bg-[#7cb342] text-white p-6 rounded-lg shadow-lg"
              variants={fadeIn}
              whileHover={{
                y: -10,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
            >
              <h3 className="text-2xl font-bold mb-4">Creativity</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Idea Generation and Refinement</li>
                <li>Openness, Courage to Explore</li>
                <li>Work Creatively with Others</li>
                <li>Create Production and Innovation</li>
              </ul>
            </motion.div>
            <motion.div
              className="bg-[#1e88e5] text-white p-6 rounded-lg shadow-lg"
              variants={fadeIn}
              whileHover={{
                y: -10,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
            >
              <h3 className="text-2xl font-bold mb-4">Critical Thinking</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Information and Discovery</li>
                <li>Interpretation and Analysis</li>
                <li>Reasoning</li>
                <li>Constructing Arguments</li>
                <li>Problem Solving</li>
                <li>System Thinking</li>
              </ul>
            </motion.div>
            <motion.div
              className="bg-[#fdd835] text-black p-6 rounded-lg shadow-lg"
              variants={fadeIn}
              whileHover={{
                y: -10,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
            >
              <h3 className="text-2xl font-bold mb-4">Communication</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Effective Listening</li>
                <li>Delivering Oral Presentations</li>
                <li>Communication (Digital)</li>
                <li>Engage in Conversations</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Challenges Section */}
      <motion.section
        className="py-16 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        <div className="container mx-auto px-4">
          <motion.h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#0077be]" variants={fadeIn}>
            Challenges We Address
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div variants={fadeIn}>
              <h3 className="text-2xl font-bold mb-6 bg-black text-white py-2 px-4 rounded-full inline-block">
                Challenges for Children
              </h3>

              <div className="mb-8">
                <h4 className="text-xl font-bold mb-4">Career Challenges</h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <motion.div className="text-center" whileHover={{ y: -5, scale: 1.05 }}>
                    <div className="bg-gray-100 rounded-full p-4 mx-auto w-24 h-24 flex items-center justify-center mb-2">
                      <Briefcase className="w-12 h-12 text-[#ff4081]" />
                    </div>
                    <p className="font-bold text-[#ff4081]">LIMITED JOBS</p>
                  </motion.div>
                  <motion.div className="text-center" whileHover={{ y: -5, scale: 1.05 }}>
                    <div className="bg-gray-100 rounded-full p-4 mx-auto w-24 h-24 flex items-center justify-center mb-2">
                      <GraduationCap className="w-12 h-12 text-[#ff4081]" />
                    </div>
                    <p className="font-bold text-[#ff4081]">CAREER IGNORANCE</p>
                  </motion.div>
                  <motion.div className="text-center" whileHover={{ y: -5, scale: 1.05 }}>
                    <div className="bg-gray-100 rounded-full p-4 mx-auto w-24 h-24 flex items-center justify-center mb-2">
                      <Code className="w-12 h-12 text-[#ff4081]" />
                    </div>
                    <p className="font-bold text-[#ff4081]">SKILLS GAP</p>
                  </motion.div>
                </div>
              </div>

              <div>
                <h4 className="text-xl font-bold mb-4">Learning Challenges</h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <motion.div className="text-center" whileHover={{ y: -5, scale: 1.05 }}>
                    <div className="bg-gray-100 rounded-full p-4 mx-auto w-24 h-24 flex items-center justify-center mb-2">
                      <Award className="w-12 h-12 text-[#0077be]" />
                    </div>
                    <p className="font-bold text-[#0077be]">CRUMBLING ETHICS</p>
                  </motion.div>
                  <motion.div className="text-center" whileHover={{ y: -5, scale: 1.05 }}>
                    <div className="bg-gray-100 rounded-full p-4 mx-auto w-24 h-24 flex items-center justify-center mb-2">
                      <Users className="w-12 h-12 text-[#0077be]" />
                    </div>
                    <p className="font-bold text-[#0077be]">LIMITED COLLABORATION</p>
                  </motion.div>
                  <motion.div className="text-center" whileHover={{ y: -5, scale: 1.05 }}>
                    <div className="bg-gray-100 rounded-full p-4 mx-auto w-24 h-24 flex items-center justify-center mb-2">
                      <Lightbulb className="w-12 h-12 text-[#0077be]" />
                    </div>
                    <p className="font-bold text-[#0077be]">LIMITED CREATIVITY</p>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeIn}>
              <h3 className="text-2xl font-bold mb-6 bg-black text-white py-2 px-4 rounded-full inline-block">
                Challenges for Schools
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <motion.div className="text-center" whileHover={{ y: -5, scale: 1.05 }}>
                  <div className="bg-gray-100 rounded-full p-4 mx-auto w-24 h-24 flex items-center justify-center mb-2">
                    <Brain className="w-12 h-12 text-[#0077be]" />
                  </div>
                  <p className="font-bold text-[#0077be]">STAFF SKILLS GAP</p>
                </motion.div>
                <motion.div className="text-center" whileHover={{ y: -5, scale: 1.05 }}>
                  <div className="bg-gray-100 rounded-full p-4 mx-auto w-24 h-24 flex items-center justify-center mb-2">
                    <Laptop className="w-12 h-12 text-[#0077be]" />
                  </div>
                  <p className="font-bold text-[#0077be]">EQUIPMENT KNOWLEDGE</p>
                </motion.div>
                <motion.div className="text-center" whileHover={{ y: -5, scale: 1.05 }}>
                  <div className="bg-gray-100 rounded-full p-4 mx-auto w-24 h-24 flex items-center justify-center mb-2">
                    <Zap className="w-12 h-12 text-[#0077be]" />
                  </div>
                  <p className="font-bold text-[#0077be]">21ST CENTURY SKILLS AWARENESS</p>
                </motion.div>
                <motion.div className="text-center" whileHover={{ y: -5, scale: 1.05 }}>
                  <div className="bg-gray-100 rounded-full p-4 mx-auto w-24 h-24 flex items-center justify-center mb-2">
                    <BookOpen className="w-12 h-12 text-[#0077be]" />
                  </div>
                  <p className="font-bold text-[#0077be]">CONTENT KNOWLEDGE</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Video Section */}
      <VideoSection />

      {/* Call to Action */}
      <motion.section
        className="py-16 bg-[#0077be] text-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn}
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join The Burn Radio Family</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Become a member school and empower your students with 21st century skills through our innovative programs
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button className="bg-[#f7a41d] hover:bg-[#e5940a] text-black font-bold" size="lg">
              Join as a Member School
            </Button>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tbr%20png%20%281%29-F3shpz8TwJ8HWxh2bCxkWYCC2Ase8H.png"
                alt="Burn Radio Logo"
                width={150}
                height={100}
                className="mb-4"
              />
              <p>Plot 653 Shrine Drive Nalya Estates, Kampala, Uganda</p>
              <p className="mt-2">The Burn Radio Hub - Nalya (Soon to be at Metroplex Nalya)</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="hover:text-[#f7a41d]">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-[#f7a41d]">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/member-schools" className="hover:text-[#f7a41d]">
                    Member Schools
                  </Link>
                </li>
                <li>
                  <Link href="/partners" className="hover:text-[#f7a41d]">
                    Our Partners
                  </Link>
                </li>
                <li>
                  <Link href="/gallery" className="hover:text-[#f7a41d]">
                    Gallery
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/privacy-policy" className="hover:text-[#f7a41d]">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-[#f7a41d]">
                    Terms & Conditions
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
              <div className="flex space-x-4 mb-4">
                <motion.div whileHover={{ y: -3, scale: 1.2 }}>
                  <Link href="https://www.facebook.com/theburnradio3/" target="_blank" className="hover:text-[#f7a41d]">
                    <Facebook />
                  </Link>
                </motion.div>
                <motion.div whileHover={{ y: -3, scale: 1.2 }}>
                  <Link
                    href="https://twitter.com/theburnradio3?lang=bn"
                    target="_blank"
                    className="hover:text-[#f7a41d]"
                  >
                    <Twitter />
                  </Link>
                </motion.div>
                <motion.div whileHover={{ y: -3, scale: 1.2 }}>
                  <Link
                    href="https://www.instagram.com/theburnradio3/?hl=en"
                    target="_blank"
                    className="hover:text-[#f7a41d]"
                  >
                    <Instagram />
                  </Link>
                </motion.div>
                <motion.div whileHover={{ y: -3, scale: 1.2 }}>
                  <Link
                    href="https://www.youtube.com/channel/UCwu2X-qJUx44geV_3KHWBFA"
                    target="_blank"
                    className="hover:text-[#f7a41d]"
                  >
                    <Youtube />
                  </Link>
                </motion.div>
              </div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="https://streema.com/radios/The_Burn_Radio" target="_blank">
                  <Button className="bg-[#f7a41d] hover:bg-[#e5940a] text-black font-bold">
                    <Play className="mr-2 h-4 w-4" /> Listen Live
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p>&copy; {new Date().getFullYear()} Burn Radio Ltd. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Cookie Consent */}
      <CookieConsent />
    </main>
  )
}
