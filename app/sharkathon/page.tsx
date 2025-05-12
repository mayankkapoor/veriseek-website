import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Trophy, Users } from "lucide-react"
import SharkathonTimeline from "@/components/sharkathon/timeline"
import RegistrationForm from "@/components/sharkathon/registration-form"
import SharkathonFAQ from "@/components/sharkathon/faq"
import SharkathonComparison from "@/components/sharkathon/comaprisonTable"
import PricingCards from "@/components/sharkathon/pricing"

import React from "react"

// Import the image utility
import { getImageUrl } from "@/lib/image-utils"
import MentorsSection from "@/components/sharkathon/mentor"
import SimulationProcess from "@/components/sharkathon/simulation"
import SneakPeekSection from "@/components/sharkathon/sneak"
import ImageCarousel from "@/components/sharkathon/carousel.jsx"
import SharkathonBenefits from "@/components/sharkathon/getSharkathon"
import HeroSection from "@/components/sharkathon/heroSection"
import ProgramFlowImage from "@/components/sharkathon/dates"
import ProgramTimeline from "@/components/sharkathon/timeline_v2"
import ProfileCards from "@/components/sharkathon/mentor2"


export const metadata = {
  title: "Sharkathon | Veriseek Education's Premier Investment Competition",
  description:
    "Sharkathon is India's First inter school competition testing for Problem Solving, critical thinking, finance, Decision Making and communication skills.",
}

export default function SharkathonPage() {
  return (
    <React.Fragment>
      {/* Hero Section */}
      <HeroSection />

      <SimulationProcess />
      <section className="py-16 bg-primary" id="process">
        <div className="container">
            <ProgramTimeline/>
            
        </div>
      </section>
      <ProfileCards/>
      <section className="py-10 px-0 bg-primary" id="process">
        <div className="container">
          

        <SharkathonBenefits />

          
        </div>
      </section>
      
      

     

        <PricingCards />

        <section className="py-10 px-0 bg-primary" id="process">
        <div className="container">
          

        <SneakPeekSection />

          
        </div>
      </section>
      
      
          



      

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-primary">Frequently Asked Questions</h2>
            <p className="text-gray-600 mt-2 max-w-2xl mx-auto">Find answers to common questions about Sharkathon</p>
          </div>

          <div className="max-w-3xl mx-auto">
            <SharkathonFAQ />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-bold">Ready to Think Like an Investor?</h2>
            <p className="text-white/80">
              Join Sharkathon today and embark on an exciting journey of critical thinking, analysis, and investment
              evaluation.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-secondary text-primary hover:bg-secondary/90 font-bold shadow-lg border-2 border-secondary transition-all hover:scale-105"
            >
              <Link href="#register">Register Now</Link>
            </Button>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}
