import { Link } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Button from "../components/ui/Button"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="container mx-auto px-4 py-32 flex flex-col items-center justify-center text-center">
        <h1 className="text-9xl font-bold text-orange-500">404</h1>
        <h2 className="text-3xl font-bold mt-6 mb-4">Page Not Found</h2>
        <p className="text-gray-600 max-w-md mb-8">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link to="/">
          <Button className="bg-orange-500 hover:bg-orange-600 text-white">Return to Homepage</Button>
        </Link>
      </div>
      <Footer />
    </div>
  )
}

