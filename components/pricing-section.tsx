"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

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

export default function PricingSection() {
  const packages = [
    {
      title: "Per Session",
      price: "7,500 UGX",
      priceDetail: "per child",
      features: ["Up to 2 trainers", "Minimum 12 sessions", "Up to 50 Learners"],
      popular: false,
      discount: null,
    },
    {
      title: "Monthly",
      price: "1,500,000 UGX",
      priceDetail: "only",
      features: ["Up to 50 Learners", "Up to 4 Sessions per week", "All skills included"],
      popular: false,
      discount: null,
    },
    {
      title: "Termly",
      price: "4,500,000 UGX",
      priceDetail: "only",
      features: ["Up to 50 Learners", "Up to 4 Sessions per week", "Priority support"],
      popular: true,
      discount: "5% OFF when paid upfront",
    },
    {
      title: "Custom",
      price: "Contact Us",
      priceDetail: "",
      features: ["Custom Skills Package", "Custom Schedule", "Tailored to your needs"],
      popular: false,
      discount: null,
    },
  ]

  return (
    <motion.section
      className="py-16 relative bg-cover bg-center"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 119, 190, 0.9), rgba(0, 119, 190, 0.9)), url('/placeholder.svg?height=800&width=1600')",
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={staggerContainer}
    >
      <div className="container mx-auto px-4">
        <motion.h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white" variants={fadeIn}>
          Packages
        </motion.h2>
        <motion.p className="text-center text-white text-lg mb-12 max-w-2xl mx-auto" variants={fadeIn}>
          Choose the package that best fits your school's needs. All packages include our core curriculum and
          experienced trainers.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              className={`bg-white rounded-lg shadow-lg overflow-hidden ${pkg.popular ? "ring-4 ring-[#f7a41d]" : ""}`}
              variants={fadeIn}
              whileHover={{
                y: -10,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
            >
              {pkg.popular && <div className="bg-[#f7a41d] text-black font-bold py-1 text-center">Most Popular</div>}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#0077be] mb-2">{pkg.title}</h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold">{pkg.price}</span>
                  <span className="text-gray-600"> {pkg.priceDetail}</span>
                </div>

                <ul className="space-y-3 mb-6">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {pkg.discount && (
                  <div className="bg-red-100 text-red-700 p-2 rounded-md text-sm font-semibold mb-4">
                    {pkg.discount}
                  </div>
                )}

                <Button
                  className={
                    pkg.title === "Custom"
                      ? "bg-[#0077be] hover:bg-[#005d95] w-full"
                      : "bg-[#f7a41d] hover:bg-[#e5940a] text-black w-full"
                  }
                >
                  {pkg.title === "Custom" ? "Contact Us" : "Get Started"}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p className="text-center text-white text-sm mt-8" variants={fadeIn}>
          *Learners are classified as beginners, intermediates or advanced depending on their competence
        </motion.p>
      </div>
    </motion.section>
  )
}
