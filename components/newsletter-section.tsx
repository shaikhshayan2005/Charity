"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Mail, CheckCircle } from "lucide-react"

export default function NewsletterSection() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      // Here you would typically send the email to your API
      setIsSubmitted(true)
      setTimeout(() => {
        setIsSubmitted(false)
        setEmail("")
      }, 3000)
    }
  }

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-orange-500 rounded-full"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-orange-500 rounded-full"></div>
      </div>

      <div className="container px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Subscribe to Our <span className="text-orange-500">Newsletter</span>
            </h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto mb-6"></div>
            <p className="text-white/80 text-lg mb-8">
              Stay updated with our latest news, events, and impact stories. Join our community of supporters making a
              difference.
            </p>

            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative flex-1">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-white/10 border border-white/20 text-white text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full pl-10 p-4"
                    placeholder="Your email address"
                    required
                  />
                </div>
                <Button type="submit" className="bg-orange-500 hover:bg-orange-600 text-white py-4 px-6 rounded-lg">
                  {isSubmitted ? (
                    <span className="flex items-center">
                      <CheckCircle className="mr-2 h-5 w-5" />
                      Subscribed!
                    </span>
                  ) : (
                    "Subscribe"
                  )}
                </Button>
              </div>
              <p className="text-white/60 text-xs mt-4">We respect your privacy. Unsubscribe at any time.</p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

