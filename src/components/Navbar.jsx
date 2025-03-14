"use client"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { Menu, X, ChevronDown } from "lucide-react"
import Button from "./ui/Button"
import { motion, AnimatePresence } from "framer-motion"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleDropdown = (name) => {
    if (activeDropdown === name) {
      setActiveDropdown(null)
    } else {
      setActiveDropdown(name)
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-white/95 backdrop-blur-sm shadow-md py-3" : "bg-transparent py-6"
      }`}
    >
      <div className="container flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className={`text-2xl font-bold transition-colors duration-300 ${scrolled ? "text-black" : "text-white"}`}
          >
            CHARITY<span className="text-orange-500">ORG</span>
          </motion.span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          <Link
            to="/"
            className={`font-medium transition-colors duration-300 hover:text-orange-500 ${
              scrolled ? "text-gray-800" : "text-white"
            }`}
          >
            Home
          </Link>

          <div className="relative group">
            <button
              className={`font-medium transition-colors duration-300 hover:text-orange-500 flex items-center ${
                scrolled ? "text-gray-800" : "text-white"
              }`}
              onClick={() => toggleDropdown("about")}
              onMouseEnter={() => setActiveDropdown("about")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              About Us <ChevronDown className="h-4 w-4 ml-1" />
            </button>
            <AnimatePresence>
              {(activeDropdown === "about" || activeDropdown === null) && (
                <motion.div
                  className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg overflow-hidden z-20 hidden group-hover:block"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  onMouseEnter={() => setActiveDropdown("about")}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    to="/about/mission"
                    className="block px-4 py-2 text-gray-800 hover:bg-orange-50 hover:text-orange-500"
                  >
                    Our Mission
                  </Link>
                  <Link
                    to="/about/team"
                    className="block px-4 py-2 text-gray-800 hover:bg-orange-50 hover:text-orange-500"
                  >
                    Our Team
                  </Link>
                  <Link
                    to="/about/history"
                    className="block px-4 py-2 text-gray-800 hover:bg-orange-50 hover:text-orange-500"
                  >
                    Our History
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="relative group">
            <button
              className={`font-medium transition-colors duration-300 hover:text-orange-500 flex items-center ${
                scrolled ? "text-gray-800" : "text-white"
              }`}
              onClick={() => toggleDropdown("programs")}
              onMouseEnter={() => setActiveDropdown("programs")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              Programs <ChevronDown className="h-4 w-4 ml-1" />
            </button>
            <AnimatePresence>
              {(activeDropdown === "programs" || activeDropdown === null) && (
                <motion.div
                  className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg overflow-hidden z-20 hidden group-hover:block"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  onMouseEnter={() => setActiveDropdown("programs")}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    to="/programs/education"
                    className="block px-4 py-2 text-gray-800 hover:bg-orange-50 hover:text-orange-500"
                  >
                    Education
                  </Link>
                  <Link
                    to="/programs/media-arts"
                    className="block px-4 py-2 text-gray-800 hover:bg-orange-50 hover:text-orange-500"
                  >
                    Media Arts
                  </Link>
                  <Link
                    to="/programs/medical"
                    className="block px-4 py-2 text-gray-800 hover:bg-orange-50 hover:text-orange-500"
                  >
                    Medical Help
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link
            to="/case-studies"
            className={`font-medium transition-colors duration-300 hover:text-orange-500 ${
              scrolled ? "text-gray-800" : "text-white"
            }`}
          >
            Case Studies
          </Link>

          <Link
            to="/events"
            className={`font-medium transition-colors duration-300 hover:text-orange-500 ${
              scrolled ? "text-gray-800" : "text-white"
            }`}
          >
            Events
          </Link>

          <Link
            to="/blog"
            className={`font-medium transition-colors duration-300 hover:text-orange-500 ${
              scrolled ? "text-gray-800" : "text-white"
            }`}
          >
            Blog
          </Link>

          <Link
            to="/contact"
            className={`font-medium transition-colors duration-300 hover:text-orange-500 ${
              scrolled ? "text-gray-800" : "text-white"
            }`}
          >
            Contact
          </Link>
        </nav>

        <div className="hidden lg:flex items-center space-x-4">
          <Button className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-6">Donate Now</Button>
          <Button
            variant="outline"
            className={`transition-colors duration-300 rounded-full ${
              scrolled
                ? "border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white"
                : "border-white text-white hover:bg-white/10"
            }`}
          >
            Volunteer
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          {isOpen ? (
            <X className={scrolled ? "text-black" : "text-white"} />
          ) : (
            <Menu className={scrolled ? "text-black" : "text-white"} />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-md py-4 px-4"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="flex flex-col space-y-4">
              <Link
                to="/"
                className="font-medium text-gray-800 hover:text-orange-500 py-2 border-b border-gray-100"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>

              <div>
                <button
                  className="flex items-center justify-between w-full font-medium text-gray-800 hover:text-orange-500 py-2"
                  onClick={() => toggleDropdown("mobileAbout")}
                >
                  <span>About Us</span>
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${activeDropdown === "mobileAbout" ? "rotate-180" : ""}`}
                  />
                </button>
                <AnimatePresence>
                  {activeDropdown === "mobileAbout" && (
                    <motion.div
                      className="pl-4 space-y-2 mt-2"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Link
                        to="/about/mission"
                        className="block text-gray-600 hover:text-orange-500 py-1"
                        onClick={() => setIsOpen(false)}
                      >
                        Our Mission
                      </Link>
                      <Link
                        to="/about/team"
                        className="block text-gray-600 hover:text-orange-500 py-1"
                        onClick={() => setIsOpen(false)}
                      >
                        Our Team
                      </Link>
                      <Link
                        to="/about/history"
                        className="block text-gray-600 hover:text-orange-500 py-1"
                        onClick={() => setIsOpen(false)}
                      >
                        Our History
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="border-b border-gray-100">
                <button
                  className="flex items-center justify-between w-full font-medium text-gray-800 hover:text-orange-500 py-2"
                  onClick={() => toggleDropdown("mobilePrograms")}
                >
                  <span>Programs</span>
                  <ChevronDown
                    className={`h-4 w-4 transition-transform ${activeDropdown === "mobilePrograms" ? "rotate-180" : ""}`}
                  />
                </button>
                <AnimatePresence>
                  {activeDropdown === "mobilePrograms" && (
                    <motion.div
                      className="pl-4 space-y-2 mt-2"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Link
                        to="/programs/education"
                        className="block text-gray-600 hover:text-orange-500 py-1"
                        onClick={() => setIsOpen(false)}
                      >
                        Education
                      </Link>
                      <Link
                        to="/programs/media-arts"
                        className="block text-gray-600 hover:text-orange-500 py-1"
                        onClick={() => setIsOpen(false)}
                      >
                        Media Arts
                      </Link>
                      <Link
                        to="/programs/medical"
                        className="block text-gray-600 hover:text-orange-500 py-1"
                        onClick={() => setIsOpen(false)}
                      >
                        Medical Help
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                to="/case-studies"
                className="font-medium text-gray-800 hover:text-orange-500 py-2 border-b border-gray-100"
                onClick={() => setIsOpen(false)}
              >
                Case Studies
              </Link>
              <Link
                to="/events"
                className="font-medium text-gray-800 hover:text-orange-500 py-2 border-b border-gray-100"
                onClick={() => setIsOpen(false)}
              >
                Events
              </Link>
              <Link
                to="/blog"
                className="font-medium text-gray-800 hover:text-orange-500 py-2 border-b border-gray-100"
                onClick={() => setIsOpen(false)}
              >
                Blog
              </Link>
              <Link
                to="/contact"
                className="font-medium text-gray-800 hover:text-orange-500 py-2 border-b border-gray-100"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <div className="flex flex-col space-y-3 pt-4">
                <Button className="bg-orange-500 hover:bg-orange-600 text-white w-full">Donate Now</Button>
                <Button
                  variant="outline"
                  className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white w-full"
                >
                  Volunteer
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

