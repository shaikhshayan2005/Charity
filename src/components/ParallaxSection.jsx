"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Button from "./ui/Button"
import { ArrowRight } from "lucide-react"

export default function ParallaxSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.6, 1, 0.6])

  return (
    <section ref={ref} className="py-24 bg-white relative overflow-hidden">
      <motion.div className="absolute inset-0 bg-black/70 z-10" style={{ opacity }} />
      <motion.div
        className="absolute inset-0 bg-[url('https://placehold.co/1920x1080')] bg-cover bg-center"
        style={{ y }}
      />

      <div className="container px-4 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Our <span className="text-orange-500">Mission</span>
              </h2>
              <div className="w-20 h-1 bg-orange-500 mb-6"></div>
              <p className="text-white/90 text-lg mb-6 leading-relaxed">
                We are dedicated to creating lasting change in communities worldwide through compassion, innovation, and
                sustainable solutions. Our mission is to empower individuals and communities to overcome challenges and
                build a better future.
              </p>
              <p className="text-white/90 text-lg mb-8 leading-relaxed">
                Through our programs in education, healthcare, and community development, we strive to address the root
                causes of poverty and inequality, creating opportunities for all.
              </p>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white group">
                Learn More <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </div>

          <div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-white"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">Healthcare</h3>
                <p className="text-white/80">
                  Providing essential medical services and supplies to underserved communities.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-white"
                  >
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                    <path d="M6 12v5c3 3 9 3 12 0v-5" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">Education</h3>
                <p className="text-white/80">Creating opportunities through quality education and resources.</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-white"
                  >
                    <path d="M20 22v-9H4v9" />
                    <path d="M2 13v-3a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v3" />
                    <path d="M12 2v8" />
                    <path d="m4.93 10.93 1.41 1.41" />
                    <path d="M17.66 10.93 16.24 12.34" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">Housing</h3>
                <p className="text-white/80">Building safe and sustainable housing for families in need.</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-white"
                  >
                    <path d="M12 2v8" />
                    <path d="m4.93 10.93 1.41 1.41" />
                    <path d="M2 18h2" />
                    <path d="M20 18h2" />
                    <path d="M19.07 10.93l-1.41 1.41" />
                    <path d="M22 22H2" />
                    <path d="M16 6 8 14" />
                    <path d="M16 14 8 6" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">Clean Energy</h3>
                <p className="text-white/80">Implementing sustainable energy solutions for communities.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

