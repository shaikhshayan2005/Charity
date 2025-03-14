"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Calendar, User, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const blogPosts = [
  {
    id: 1,
    title: "The Impact of Clean Water on Community Health",
    excerpt: "Access to clean water is transforming communities and improving health outcomes in rural areas.",
    image: "/placeholder.svg?height=300&width=500",
    date: "June 15, 2025",
    author: "Dr. Emily Chen",
    category: "Health",
  },
  {
    id: 2,
    title: "Education Initiatives Making a Difference",
    excerpt: "Our education programs are creating opportunities for children in underserved communities.",
    image: "/placeholder.svg?height=300&width=500",
    date: "May 28, 2025",
    author: "Michael Johnson",
    category: "Education",
  },
  {
    id: 3,
    title: "Volunteer Stories: Making an Impact",
    excerpt: "Meet the dedicated volunteers who are the backbone of our organization and their inspiring stories.",
    image: "/placeholder.svg?height=300&width=500",
    date: "May 10, 2025",
    author: "Sarah Williams",
    category: "Stories",
  },
]

export default function BlogPreview() {
  return (
    <section className="py-24 bg-white">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Latest <span className="text-orange-500">News</span>
          </h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg">Stay updated with our latest news, impact stories, and events.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg overflow-hidden group hover:-translate-y-2 transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  width={500}
                  height={300}
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-orange-500 text-white text-xs font-medium px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-gray-500 text-sm mb-3">
                  <div className="flex items-center mr-4">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-1" />
                    <span>{post.author}</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-orange-500 transition-colors">
                  <Link href={`/blog/${post.id}`}>{post.title}</Link>
                </h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <Link href={`/blog/${post.id}`} className="inline-flex items-center text-orange-500 font-medium group">
                  Read More <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white">
            View All Posts <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}

