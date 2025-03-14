"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Volunteer",
    image: "/placeholder.svg?height=100&width=100",
    quote:
      "Working with CharityOrg has been one of the most rewarding experiences of my life. The impact they make on communities is truly inspiring and I'm proud to be part of their mission.",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Donor",
    image: "/placeholder.svg?height=100&width=100",
    quote:
      "I've supported many charities over the years, but none have shown the level of transparency and effectiveness that CharityOrg demonstrates. Every dollar truly makes a difference.",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Program Beneficiary",
    image: "/placeholder.svg?height=100&width=100",
    quote:
      "The educational program provided by CharityOrg changed my life. I now have skills and opportunities I never thought possible. Their support goes beyond just financial aid.",
  },
]

export default function TestimonialSlider() {
  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [autoplay])

  const next = () => {
    setAutoplay(false)
    setCurrent((prev) => (prev + 1) % testimonials.length)
  }

  const prev = () => {
    setAutoplay(false)
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-24 bg-gray-50">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            What People <span className="text-orange-500">Say</span>
          </h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg">Hear from our volunteers, donors, and the communities we serve.</p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="absolute -top-12 left-0 opacity-10">
            <Quote className="h-24 w-24 text-orange-500" />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl shadow-xl p-8 md:p-12"
            >
              <div className="flex flex-col md:flex-row items-center">
                <div className="mb-6 md:mb-0 md:mr-8">
                  <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-orange-100">
                    <Image
                      src={testimonials[current].image || "/placeholder.svg"}
                      alt={testimonials[current].name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <p className="text-gray-700 text-lg md:text-xl italic mb-6 leading-relaxed">
                    "{testimonials[current].quote}"
                  </p>
                  <h4 className="text-xl font-bold">{testimonials[current].name}</h4>
                  <p className="text-orange-500">{testimonials[current].role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setAutoplay(false)
                  setCurrent(index)
                }}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === current ? "bg-orange-500" : "bg-gray-300"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={prev}
            className="absolute top-1/2 -left-4 md:-left-12 transform -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-gray-700 hover:text-orange-500 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            onClick={next}
            className="absolute top-1/2 -right-4 md:-right-12 transform -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-gray-700 hover:text-orange-500 transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  )
}

