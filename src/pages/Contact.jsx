import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-24 pb-12">
        <h1 className="text-center text-3xl font-bold mt-12">Contact Page</h1>
        <p className="text-center mt-4">This is a placeholder for the Contact page.</p>
      </div>
      <Footer />
    </div>
  )
}

