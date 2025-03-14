"use client"

import { useState, useEffect, useRef } from "react"
import { useInView } from "framer-motion"

interface AnimatedCounterProps {
  value: number
  duration?: number
  decimal?: boolean
  className?: string
}

export default function AnimatedCounter({
  value,
  duration = 2,
  decimal = false,
  className = "",
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    if (isInView && !hasAnimated) {
      let startTime: number
      let animationFrame: number

      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)

        const currentCount = progress * value

        if (decimal) {
          setCount(Number.parseFloat(currentCount.toFixed(1)))
        } else {
          setCount(Math.floor(currentCount))
        }

        if (progress < 1) {
          animationFrame = requestAnimationFrame(step)
        } else {
          setHasAnimated(true)
        }
      }

      animationFrame = requestAnimationFrame(step)

      return () => cancelAnimationFrame(animationFrame)
    }
  }, [isInView, value, duration, decimal, hasAnimated])

  return (
    <span ref={ref} className={className}>
      {count}
    </span>
  )
}

