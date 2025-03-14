import Image from "next/image";
import Link from "next/link";
import {
  ChevronRight,
  Heart,
  Users,
  DollarSign,
  BookOpen,
  Film,
  Stethoscope,
  ArrowRight,
  Calendar,
  MapPin,
} from "lucide-react";
import Navbar from "@/components/navbar";
import DonationCard from "@/components/donation-card";
import { Button } from "@/components/ui/button";
import AnimatedCounter from "@/components/animated-counter";
import TestimonialSlider from "@/components/testimonial-slider";
import NewsletterSection from "@/components/newsletter-section";
import BlogPreview from "@/components/blog-preview";
import ParallaxSection from "@/components/parallax-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section with Video Background */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0 bg-black/70 z-10"></div>
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-hands-of-people-linking-in-unity-4698-large.mp4"
            type="video/mp4"
          />
        </video>
        <div className="container relative z-20 flex flex-col items-center justify-center h-full text-center px-4">
          <span className="inline-block px-4 py-1 bg-orange-500/20 text-orange-500 rounded-full text-sm font-medium mb-6 animate-fade-in-up">
            Making a difference together
          </span>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight animate-fade-in-up animation-delay-200">
            <span className="text-orange-500">Empowering</span> Communities{" "}
            <br />
            <span className="text-white">Transforming</span>{" "}
            <span className="text-orange-500">Lives</span>
          </h1>
          <p className="text-white/90 max-w-2xl mb-10 text-lg md:text-xl leading-relaxed animate-fade-in-up animation-delay-400">
            Join our global mission to create lasting change through compassion,
            innovation, and your generous support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-600">
            <Button
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              Donate Now{" "}
              <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg rounded-full"
            >
              Our Mission
            </Button>
          </div>
        </div>
        <div className="absolute bottom-10 left-0 right-0 z-20 flex justify-center animate-bounce">
          <a
            href="#impact"
            className="text-white/80 hover:text-white transition-colors"
          >
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
              className="lucide lucide-chevron-down"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </a>
        </div>
      </section>

      {/* Impact Stats */}
      <section
        id="impact"
        className="bg-gradient-to-r from-black to-gray-900 py-20"
      >
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Our Global <span className="text-orange-500">Impact</span>
            </h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto mb-6"></div>
            <p className="text-white/80 text-lg">
              Through the generosity of our donors and the dedication of our
              volunteers, we've made a significant difference in communities
              worldwide.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl transform hover:scale-105 transition-transform duration-300">
              <div className="flex flex-col items-center">
                <AnimatedCounter
                  value={1250}
                  duration={2.5}
                  className="text-5xl font-bold text-orange-500"
                />
                <div className="w-12 h-1 bg-orange-500/50 my-4"></div>
                <p className="text-white font-medium text-lg">People Helped</p>
              </div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl transform hover:scale-105 transition-transform duration-300">
              <div className="flex flex-col items-center">
                <AnimatedCounter
                  value={48}
                  duration={2.5}
                  className="text-5xl font-bold text-orange-500"
                />
                <div className="w-12 h-1 bg-orange-500/50 my-4"></div>
                <p className="text-white font-medium text-lg">
                  Countries Reached
                </p>
              </div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl transform hover:scale-105 transition-transform duration-300">
              <div className="flex flex-col items-center">
                <AnimatedCounter
                  value={127}
                  duration={2.5}
                  className="text-5xl font-bold text-orange-500"
                />
                <div className="w-12 h-1 bg-orange-500/50 my-4"></div>
                <p className="text-white font-medium text-lg">
                  Active Projects
                </p>
              </div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl transform hover:scale-105 transition-transform duration-300">
              <div className="flex flex-col items-center">
                <span className="text-5xl font-bold text-orange-500">
                  $
                  <AnimatedCounter
                    value={2.5}
                    decimal={true}
                    duration={2.5}
                    className="inline"
                  />
                  M
                </span>
                <div className="w-12 h-1 bg-orange-500/50 my-4"></div>
                <p className="text-white font-medium text-lg">Funds Raised</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section with Parallax */}
      <ParallaxSection />

      {/* Action Cards */}
      <section className="py-24 bg-gray-50">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              How You Can <span className="text-orange-500">Help</span>
            </h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto mb-6"></div>
            <p className="text-gray-600 text-lg">
              There are many ways to contribute to our mission and make a
              meaningful impact. Choose the path that resonates with you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-xl overflow-hidden group hover:-translate-y-2 transition-transform duration-500 ease-out">
              <div className="p-8 flex flex-col h-full relative overflow-hidden">
                <div className="absolute -right-20 -top-20 w-40 h-40 bg-orange-100 rounded-full opacity-50 group-hover:scale-150 transition-transform duration-700"></div>
                <div className="bg-orange-100 p-5 rounded-full w-20 h-20 flex items-center justify-center mb-6 relative z-10">
                  <Users className="h-10 w-10 text-orange-500" />
                </div>
                <h3 className="text-2xl font-bold mb-4 relative z-10">
                  Become a Volunteer
                </h3>
                <p className="text-gray-600 mb-8 flex-grow relative z-10">
                  Join our community of dedicated volunteers making a real
                  difference in people's lives around the world. Share your
                  skills and time to support our mission.
                </p>
                <Button className="bg-orange-500 hover:bg-orange-600 text-white w-full group-hover:bg-black transition-colors duration-300 relative z-10 rounded-lg py-6">
                  Join Our Team{" "}
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-xl overflow-hidden group hover:-translate-y-2 transition-transform duration-500 ease-out">
              <div className="p-8 flex flex-col h-full relative overflow-hidden">
                <div className="absolute -right-20 -top-20 w-40 h-40 bg-orange-100 rounded-full opacity-50 group-hover:scale-150 transition-transform duration-700"></div>
                <div className="bg-orange-100 p-5 rounded-full w-20 h-20 flex items-center justify-center mb-6 relative z-10">
                  <DollarSign className="h-10 w-10 text-orange-500" />
                </div>
                <h3 className="text-2xl font-bold mb-4 relative z-10">
                  Start Fundraising
                </h3>
                <p className="text-gray-600 mb-8 flex-grow relative z-10">
                  Create your own fundraising campaign to support causes you
                  care about and mobilize your network. Every contribution makes
                  a difference.
                </p>
                <Button className="bg-orange-500 hover:bg-orange-600 text-white w-full group-hover:bg-black transition-colors duration-300 relative z-10 rounded-lg py-6">
                  Start Campaign{" "}
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl shadow-xl overflow-hidden group hover:-translate-y-2 transition-transform duration-500 ease-out">
              <div className="p-8 flex flex-col h-full relative overflow-hidden">
                <div className="absolute -right-20 -top-20 w-40 h-40 bg-white/20 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
                <div className="bg-white p-5 rounded-full w-20 h-20 flex items-center justify-center mb-6 relative z-10">
                  <Heart className="h-10 w-10 text-orange-500" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white relative z-10">
                  Make Donation
                </h3>
                <p className="text-white/90 mb-8 flex-grow relative z-10">
                  Your generous donation directly supports our programs and
                  helps us create lasting change in communities. Every dollar
                  counts towards our mission.
                </p>
                <Button className="bg-white hover:bg-gray-100 text-orange-500 font-medium w-full relative z-10 rounded-lg py-6">
                  Donate Now{" "}
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-24 bg-white">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our <span className="text-orange-500">Programs</span>
            </h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto mb-6"></div>
            <p className="text-gray-600 text-lg">
              Our programs are designed to address critical needs and create
              sustainable solutions for communities worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="group">
              <div className="relative overflow-hidden rounded-xl mb-6 shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10"></div>
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Education Program"
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-6 right-6 z-20">
                  <div className="w-16 h-16 rounded-full bg-orange-500 flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
                    <BookOpen className="h-8 w-8 text-white" />
                  </div>
                </div>
                <div className="absolute bottom-6 left-6 z-20">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Education Assistance
                  </h3>
                  <div className="w-10 h-1 bg-orange-500"></div>
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                We provide educational resources, scholarships, and
                infrastructure to ensure quality education for all, focusing on
                underserved communities and vulnerable populations.
              </p>
              <Button
                variant="link"
                className="text-orange-500 hover:text-orange-600 p-0 h-auto font-medium group"
              >
                Learn More{" "}
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            <div className="group">
              <div className="relative overflow-hidden rounded-xl mb-6 shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10"></div>
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Media Arts Program"
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-6 right-6 z-20">
                  <div className="w-16 h-16 rounded-full bg-orange-500 flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
                    <Film className="h-8 w-8 text-white" />
                  </div>
                </div>
                <div className="absolute bottom-6 left-6 z-20">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Media Arts
                  </h3>
                  <div className="w-10 h-1 bg-orange-500"></div>
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                Our media arts programs empower communities to tell their
                stories and preserve cultural heritage, providing tools,
                training, and platforms for creative expression.
              </p>
              <Button
                variant="link"
                className="text-orange-500 hover:text-orange-600 p-0 h-auto font-medium group"
              >
                Learn More{" "}
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            <div className="group">
              <div className="relative overflow-hidden rounded-xl mb-6 shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10"></div>
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Medical Help Program"
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-6 right-6 z-20">
                  <div className="w-16 h-16 rounded-full bg-orange-500 flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
                    <Stethoscope className="h-8 w-8 text-white" />
                  </div>
                </div>
                <div className="absolute bottom-6 left-6 z-20">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Medical Help
                  </h3>
                  <div className="w-10 h-1 bg-orange-500"></div>
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                We deliver essential healthcare services, medical supplies, and
                training to underserved communities, focusing on preventive care
                and sustainable health solutions.
              </p>
              <Button
                variant="link"
                className="text-orange-500 hover:text-orange-600 p-0 h-auto font-medium group"
              >
                Learn More{" "}
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-24 bg-gray-50">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Upcoming <span className="text-orange-500">Events</span>
            </h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto mb-6"></div>
            <p className="text-gray-600 text-lg">
              Join us at our upcoming events to connect with our community and
              support our mission.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden group hover:-translate-y-2 transition-all duration-300">
              <div className="flex flex-col md:flex-row">
                <div className="bg-orange-500 text-white p-6 flex flex-col items-center justify-center md:w-1/3">
                  <span className="text-4xl font-bold">15</span>
                  <span className="text-xl">June</span>
                  <span className="text-sm mt-2">2025</span>
                </div>
                <div className="p-6 md:w-2/3">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-orange-500 transition-colors">
                    Annual Charity Gala
                  </h3>
                  <div className="flex items-center text-gray-500 mb-4">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>7:00 PM - 10:00 PM</span>
                  </div>
                  <div className="flex items-center text-gray-500 mb-4">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>Grand Hotel, New York</span>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Join us for an evening of inspiration, entertainment, and
                    fundraising to support our global initiatives.
                  </p>
                  <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                    Register Now
                  </Button>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden group hover:-translate-y-2 transition-all duration-300">
              <div className="flex flex-col md:flex-row">
                <div className="bg-orange-500 text-white p-6 flex flex-col items-center justify-center md:w-1/3">
                  <span className="text-4xl font-bold">22</span>
                  <span className="text-xl">July</span>
                  <span className="text-sm mt-2">2025</span>
                </div>
                <div className="p-6 md:w-2/3">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-orange-500 transition-colors">
                    Charity Run for Education
                  </h3>
                  <div className="flex items-center text-gray-500 mb-4">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>8:00 AM - 12:00 PM</span>
                  </div>
                  <div className="flex items-center text-gray-500 mb-4">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>Central Park, New York</span>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Run or walk to raise funds for educational programs in
                    underserved communities around the world.
                  </p>
                  <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                    Register Now
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button
              variant="outline"
              className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white"
            >
              View All Events <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Donation Causes */}
      <section className="py-24 bg-white">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-orange-500">Current</span> Causes
            </h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto mb-6"></div>
            <p className="text-gray-600 text-lg">
              We believe in complete transparency. See exactly how your
              donations are making an impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <DonationCard
              title="Ukraine Relief Fund"
              image="/placeholder.svg?height=300&width=400"
              raised={125000}
              goal={200000}
              description="Providing emergency supplies, shelter, and medical aid to families affected by the ongoing crisis."
              category="Emergency"
              daysLeft={15}
            />

            <DonationCard
              title="Turkey Relief Fund"
              image="/placeholder.svg?height=300&width=400"
              raised={85000}
              goal={150000}
              description="Supporting earthquake recovery efforts with temporary housing, food, and rebuilding assistance."
              category="Disaster"
              daysLeft={30}
            />

            <DonationCard
              title="Palestine Relief Fund"
              image="/placeholder.svg?height=300&width=400"
              raised={110000}
              goal={180000}
              description="Delivering critical humanitarian aid including food, water, and medical supplies to civilians in need."
              category="Humanitarian"
              daysLeft={22}
            />
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8"
            >
              View All Causes <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialSlider />

      {/* Blog Preview */}
      <BlogPreview />

      {/* Newsletter Section */}
      <NewsletterSection />

      {/* CTA Section */}
      <section className="py-24 bg-black text-white">
        <div className="container px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-10 md:mb-0 text-center md:text-left md:w-1/2">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                Ready to Make a{" "}
                <span className="text-orange-500">Difference?</span>
              </h2>
              <p className="max-w-xl text-white/80 text-lg leading-relaxed">
                Join thousands of supporters who are creating positive change
                around the world through their generosity. Every contribution,
                no matter the size, helps us continue our mission.
              </p>
            </div>
            <div className="md:w-1/2 flex flex-col items-center">
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl w-full max-w-md">
                <h3 className="text-2xl font-bold mb-6 text-center">
                  Make a Donation
                </h3>
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <Button
                    variant="outline"
                    className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white"
                  >
                    $25
                  </Button>
                  <Button
                    variant="outline"
                    className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white"
                  >
                    $50
                  </Button>
                  <Button
                    variant="outline"
                    className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white"
                  >
                    $100
                  </Button>
                  <Button
                    variant="outline"
                    className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white"
                  >
                    $250
                  </Button>
                  <Button
                    variant="outline"
                    className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white"
                  >
                    $500
                  </Button>
                  <Button
                    variant="outline"
                    className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white"
                  >
                    Other
                  </Button>
                </div>
                <Button
                  size="lg"
                  className="bg-orange-500 hover:bg-orange-600 text-white w-full py-6 text-lg rounded-lg"
                >
                  Donate Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            <div>
              <Link href="/" className="flex items-center mb-6">
                <span className="text-2xl font-bold">
                  GR<span className="text-orange-500">EY</span>
                </span>
              </Link>
              <p className="text-gray-400 mb-6">
                We are a global charity organization dedicated to creating
                lasting change in communities through compassion and action.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-orange-500 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-facebook"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-orange-500 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-twitter"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-orange-500 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-instagram"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-orange-500 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-linkedin"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-orange-500 transition-colors flex items-center"
                  >
                    <ArrowRight className="h-4 w-4 mr-2" /> Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-orange-500 transition-colors flex items-center"
                  >
                    <ArrowRight className="h-4 w-4 mr-2" /> About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-orange-500 transition-colors flex items-center"
                  >
                    <ArrowRight className="h-4 w-4 mr-2" /> Programs
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-orange-500 transition-colors flex items-center"
                  >
                    <ArrowRight className="h-4 w-4 mr-2" /> Donate
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-orange-500 transition-colors flex items-center"
                  >
                    <ArrowRight className="h-4 w-4 mr-2" /> Events
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-orange-500 transition-colors flex items-center"
                  >
                    <ArrowRight className="h-4 w-4 mr-2" /> Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-orange-500 transition-colors flex items-center"
                  >
                    <ArrowRight className="h-4 w-4 mr-2" /> Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-6">Contact Us</h3>
              <address className="text-gray-400 not-italic space-y-3">
                <p className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-map-pin mr-3 mt-1"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span>
                    123 Charity Street
                    <br />
                    New York, NY 10001
                  </span>
                </p>
                <p className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-mail mr-3 mt-1"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  <span>info@charity.org</span>
                </p>
                <p className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-phone mr-3 mt-1"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <span>(123) 456-7890</span>
                </p>
              </address>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-6">Working Hours</h3>
              <ul className="text-gray-400 space-y-3">
                <li className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span>9:00 AM - 5:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Saturday:</span>
                  <span>10:00 AM - 2:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Sunday:</span>
                  <span>Closed</span>
                </li>
              </ul>
              <div className="mt-6 pt-6 border-t border-gray-800">
                <h4 className="font-bold mb-3">We Accept</h4>
                <div className="flex space-x-3">
                  <div className="bg-white/10 p-2 rounded">
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
                      className="lucide lucide-credit-card"
                    >
                      <rect width="20" height="14" x="2" y="5" rx="2" />
                      <line x1="2" x2="22" y1="10" y2="10" />
                    </svg>
                  </div>
                  <div className="bg-white/10 p-2 rounded">
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
                      className="lucide lucide-paypal"
                    >
                      <path d="M7.144 19.532l1.049-5.751c.11-.606.691-1.002 1.304-.948 2.155.192 6.877.1 8.818-4.002 2.554-5.397-.59-7.769-6.295-7.769H7.43a1.97 1.97 0 0 0-1.944 1.655L2.77 19.5a1.269 1.269 0 0 0 1.255 1.5h2.012c.56 0 1.043-.399 1.107-.953z" />
                      <path d="M15.885 13.281c1.865-2.949 1.85-6.948-.355-9.55" />
                      <path d="M10.761 19.521c-.56.554-.555 1.457.011 2.001.649.615 1.683.616 2.333.002a1.42 1.42 0 0 0 0-2.001 1.651 1.651 0 0 0-2.344-.002z" />
                    </svg>
                  </div>
                  <div className="bg-white/10 p-2 rounded">
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
                      className="lucide lucide-bitcoin"
                    >
                      <path d="M11.767 19.089c4.924.868 6.14-6.025 1.216-6.894m-1.216 6.894L5.86 18.047m5.908 1.042-.347 1.97m1.563-8.864c4.924.869 6.14-6.025 1.215-6.893m-1.215 6.893-3.94-.694m3.94.694-.347 1.969" />
                      <path d="M7.48 13.875 3.967 13.25m3.513.625 1.293-7.33" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>
              © {new Date().getFullYear()} Charity Organization. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
