import type { Metadata } from "next"
import Link from "next/link"
import { Mail, MapPin, Phone } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact Us | Veriseek Education",
  description:
    "Get in touch with Veriseek Education for inquiries about our programs, Sharkathon competition, or partnership opportunities.",
}

export default function ContactPage() {
  return (
    <div className="container mx-auto px-6 py-12 md:py-16 lg:py-24">
      {/* Header */}
      <div className="mb-16 text-center">
        <h1 className="text-3xl font-bold tracking-tight text-[#011C41] sm:text-4xl md:text-5xl">
          Contact Us
        </h1>
        <p className="mt-4 text-lg text-gray-600 md:text-xl max-w-2xl mx-auto">
          Have questions about our programmes or the Sharkathon competition? We're here to help.
        </p>
      </div>

      <div className="grid gap-12 lg:grid-cols-2 lg:gap-24">
        {/* Contact Information */}
        <div className="space-y-10">
          {/* Get in Touch Box */}
          <div className="rounded-xl bg-white p-8 shadow-lg">
            <h2 className="mb-6 text-2xl font-bold text-[#011C41]">Get in Touch</h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Mail className="h-6 w-6 text-[#FAD133] mt-1" />
                <div>
                  <p className="font-medium text-gray-900">Email</p>
                  <Link
                    href="mailto:team@veriseekeducation.com"
                    className="text-[#011C41] hover:text-[#FAD133] hover:underline"
                  >
                    team@veriseekeducation.com
                  </Link>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Phone className="h-6 w-6 text-[#FAD133] mt-1" />
                <div>
                  <p className="font-medium text-gray-900">Phone</p>
                  <Link
                    href="tel:+919953371191"
                    className="text-[#011C41] hover:text-[#FAD133] hover:underline"
                  >
                    +91 9953371191
                  </Link>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <MapPin className="h-6 w-6 text-[#FAD133] mt-1" />
                <div>
                  <p className="font-medium text-gray-900">Office Address</p>
                  <address className="not-italic text-gray-700">
                    AltF MPD Tower, 2nd Floor<br />
                    Golf Course Road, Sector 43<br />
                    Gurugram, Haryana 122002
                  </address>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media Box */}
          <div className="rounded-xl bg-white p-8 shadow-lg">
            <h2 className="mb-4 text-2xl font-bold text-[#011C41]">Connect With Us</h2>
            <p className="mb-4 text-gray-600">
              Follow us on social media to stay updated with our latest programs, events, and Sharkathon news.
            </p>
            <p className="text-sm text-gray-500 italic">Social media links coming soon</p>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-20">
        <div className="rounded-xl overflow-hidden shadow-lg h-96 w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.2034142780366!2d77.09073937537779!3d28.4574333975809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d18e0fd4bb287%3A0x7edf0a3ab4642c2c!2sGolf%20Course%20Rd%2C%20Sector%2043%2C%20Gurugram%2C%20Haryana%20122002!5e0!3m2!1sen!2sin!4v1709829847945!5m2!1sen!2sin"
          className="w-full h-full border-0"
          allowFullScreen
          loading="lazy"
          title="Veriseek Education Office Location"
        ></iframe>
      </div>
      </div>
      </div>
    </div>
  )
}
