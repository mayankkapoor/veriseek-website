"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

// Import the image utility
import { getImageUrl } from "@/lib/image-utils"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Sharkathon", href: "/sharkathon" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-white shadow-md py-2" : "bg-primary py-4",
      )}
    >
      <div className="container flex items-center justify-between">
        <Link href="/" className="flex items-center">
          {/* Replace the logo image */}
          <Image
            src={getImageUrl("logo") || "/placeholder.svg"}
            alt="Veriseek Education Logo"
            width={150}
            height={60}
            className="h-12 w-auto"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "text-sm font-semibold transition-colors hover:text-secondary",
                isScrolled ? "text-primary" : "text-white [text-shadow:0_1px_2px_rgba(0,0,0,0.5)]",
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link href="/sharkathon#register" className="w-full">
            <Button className="bg-secondary text-primary hover:bg-secondary/90 font-bold shadow-md border-2 border-secondary">
              Register Now
            </Button>
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className={cn("md:hidden", isScrolled ? "text-primary" : "text-white")}
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md py-4">
          <nav className="container flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-primary text-sm font-medium transition-colors hover:text-secondary"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link href="/sharkathon#register" className="w-full">
              <Button className="bg-secondary text-primary hover:bg-secondary/90 w-full">Register Now</Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header

