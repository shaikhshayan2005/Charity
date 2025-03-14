"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { motion, useMotionTemplate, useMotionValue } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Heart, Clock } from "lucide-react"

interface DonationCardProps {
  title: string
  image: string
  raised: number
  goal: number
  description: string
  category: string
  daysLeft: number
}

export default function DonationCard({
  title,
  image,
  raised,
  goal,
  description,
  category,
  daysLeft,
}: DonationCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [isLiked, setIsLiked] = useState(false)
  const progress = Math.min((raised / goal) * 100, 100)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    mouseX.set(e.clientX - rect.left)
    mouseY.set(e.clientY - rect.top)
  }

  const background = useMotionTemplate`radial-gradient(
    320px circle at ${mouseX}px ${mouseY}px,
    rgba(249, 115, 22, 0.1),
    transparent 80%
  )`

  return (
    <motion.div
      className="bg-white rounded-xl overflow-hidden shadow-lg relative group"
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{ background }}
      />

      <div className="relative h-56 overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          width={400}
          height={300}
          className="object-cover w-full h-full transition-transform duration-700 ease-in-out"
          style={{ transform: isHovered ? "scale(1.1)" : "scale(1)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

        <div className="absolute top-4 left-4">
          <span className="bg-orange-500 text-white text-xs font-medium px-3 py-1 rounded-full">{category}</span>
        </div>

        <button
          className={`absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${isLiked ? "bg-orange-500 text-white" : "bg-white/90 text-gray-600"}`}
          onClick={() => setIsLiked(!isLiked)}
        >
          <Heart className={`h-4 w-4 ${isLiked ? "fill-white" : ""}`} />
        </button>

        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
          <div className="flex items-center text-white/80 text-sm">
            <Clock className="h-3 w-3 mr-1" />
            <span>{daysLeft} days left</span>
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="mb-6">
          <div className="flex justify-between text-sm mb-2">
            <span className="font-medium">
              Raised: <span className="text-orange-500">${raised.toLocaleString()}</span>
            </span>
            <span className="font-medium">Goal: ${goal.toLocaleString()}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
            <motion.div
              className="bg-gradient-to-r from-orange-400 to-orange-600 h-2.5 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 1, delay: 0.2 }}
            ></motion.div>
          </div>
          <div className="text-right text-xs text-gray-500 mt-1">{progress.toFixed(0)}% Complete</div>
        </div>

        <p className="text-gray-600 mb-6 line-clamp-3">{description}</p>

        <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white rounded-lg py-6 group">
          Donate Now
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
            className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </Button>
      </div>
    </motion.div>
  )
}

