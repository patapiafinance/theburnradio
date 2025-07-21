"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Check if user has already accepted cookies
    const hasAccepted = localStorage.getItem("cookiesAccepted")
    if (!hasAccepted) {
      // Add a small delay before showing the cookie consent
      const timer = setTimeout(() => {
        setIsVisible(true)
      }, 2000)

      return () => clearTimeout(timer)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookiesAccepted", "true")
    setIsVisible(false)
  }

  const declineCookies = () => {
    localStorage.setItem("cookiesDeclined", "true")
    setIsVisible(false)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 z-50"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0 pr-4">
              <p className="text-sm">
                We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our
                traffic. By clicking "Accept All", you consent to our use of cookies.
              </p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" className="text-white border-white hover:bg-gray-800" onClick={declineCookies}>
                Decline
              </Button>
              <Button className="bg-[#f7a41d] hover:bg-[#e5940a] text-black" onClick={acceptCookies}>
                Accept All
              </Button>
              <button className="ml-2 text-white" onClick={() => setIsVisible(false)}>
                <X size={24} />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
