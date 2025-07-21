"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"

interface MovingTextButtonProps {
  text: string
  className?: string
}

export default function MovingTextButton({ text, className }: MovingTextButtonProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    const textElement = textRef.current

    if (!container || !textElement) return

    // Create animation
    const animate = () => {
      if (!container || !textElement) return

      const containerWidth = container.offsetWidth
      const textWidth = textElement.offsetWidth

      // Only animate if text is wider than container
      if (textWidth > containerWidth) {
        let position = containerWidth
        let direction = -1 // Start moving left

        const animation = setInterval(() => {
          position += direction
          textElement.style.transform = `translateX(${position}px)`

          // Change direction when reaching edges
          if (position <= containerWidth - textWidth) {
            direction = 1 // Move right
          } else if (position >= 0) {
            direction = -1 // Move left
          }
        }, 20)

        return () => clearInterval(animation)
      }
    }

    const animationCleanup = animate()
    return () => {
      if (animationCleanup) animationCleanup()
    }
  }, [])

  return (
    <Button className={`relative overflow-hidden ${className}`}>
      <div ref={containerRef} className="w-full overflow-hidden">
        <div ref={textRef} className="whitespace-nowrap">
          {text}
        </div>
      </div>
    </Button>
  )
}
