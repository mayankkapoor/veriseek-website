import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Trophy, Users } from "lucide-react"
import SharkathonTimeline from "@/components/sharkathon/timeline"
import RegistrationForm from "@/components/sharkathon/registration-form"
import SharkathonFAQ from "@/components/sharkathon/faq"
import SharkathonComparison from "@/components/sharkathon/comaprisonTable"

import React from "react"

// Import the image utility
import { getImageUrl } from "@/lib/image-utils"
import MentorsSection from "@/components/sharkathon/mentor"
import SimulationProcess from "@/components/sharkathon/simulation"
import SneakPeekSection from "@/components/sharkathon/sneak"
import ImageCarousel from "@/components/sharkathon/carousel.jsx"


export const metadata = {
  title: "Sharkathon | Veriseek Education's Premier Investment Competition",
  description:
    "Sharkathon is India's First inter school competition testing for Problem Solving, critical thinking, finance, Decision Making and communication skills.",
}

export default function SharkathonPage() {
  return (
    <React.Fragment>
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-primary text-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <div className="inline-block bg-secondary text-primary px-3 py-1 rounded-full text-sm font-medium">
                Now Accepting Applications
              </div>
              
              <h1 className="text-3xl default:text-4xl font-bold leading-tight">
                Sharkathon - Think like a shark
              </h1>
              
              <p className="text-base default:text-lg opacity-90">
                India's premier learning programme for students to develop critical thinking, problem-
                solving decision-making, startup investing skills and communication through real-
                world investment challenges.
              </p>
              
              <p className="text-base default:text-lg opacity-90">
                An immersive experience where students step into the role of sharks, analysing real businesses,
                questioning entrepreneurs, and making strategic investment decisions.
              </p>

              {/* Built by box styled exactly like the image */}
              <div className="border border-olive-green/50 bg-light-cream p-3 rounded-sm inline-flex items-center">
                <span className="font-medium mr-2">Built by</span>
                <span className="font-medium mr-2">alumni from</span>
                <div className="flex items-center space-x-3">
                  <img src="/mit.png" alt="mit logo" className="h-16" />
                  <img src="/wharton.png" alt="wharton logo" className="h-16" />
                </div>
              </div>
              
              <div className="flex flex-wrap gap-3 pt-1 items-center">
              <Button 
                asChild 
                size="default"
                className="bg-secondary text-primary hover:bg-secondary/90 font-bold shadow-lg border-2 border-secondary transition-all hover:scale-105"
              >
                <Link href="#register">Register Now</Link>
              </Button>
              
              <Button 
                asChild 
                size="default"
                variant="outline" 
                className="border-secondary bg-secondary text-primary hover:bg-yellow-500 hover:text-black font-bold border-2 shadow-lg transition-all hover:scale-105 [&>a]:text-yellow-500"
              >
                <Link href="#process">Learn More</Link>
              </Button>
              <div className="w-full text-white font-medium">
              For grades 9th to 12th
            </div>
            </div>

            </div>

            <div className="relative">
              {/* Replace the hero section image */}
              <ImageCarousel />
              <div className="absolute -bottom-4 -left-4 bg-white p-3 rounded-lg shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="bg-secondary p-1.5 rounded-full">
                    <Trophy className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-primary font-bold text-sm">Recognition & Awards</p>
                    <p className="text-xs text-gray-600">for Top Performers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SimulationProcess />

      

      {/* Competition Process */}
      <section className="py-16 bg-gray-50" id="process">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-2">The Sharkathon Journey</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto"></div>
            <p className="text-gray-700 mt-4 text-lg max-w-2xl mx-auto">
              From registration to the final evaluation, follow the path to success
            </p>
          </div>

          <SharkathonTimeline />

          <section className="py-16" id="overview">
          <div className="container">
            <div  className="text-center mb-16">
              <h2 className="text-4xl font-bold text-primary mb-2">Why Join Sharkathon?</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto"></div>
              <p className="text-gray-700 mt-4 text-lg max-w-2xl mx-auto">
                Built by experts from MIT, Wharton, and IIT, Sharkathon is designed to transform students into future-ready leaders by equipping them with high-impact, real-world skills.
              </p>
            </div>

            <div className="grid grid-cols-1 default:grid-cols-2 lg:grid-cols-5 gap-8 mb-16">
              <div className="space-y-4">
                <div className="text-3xl font-bold text-primary">01.</div>
                <h3 className="text-lg font-semibold text-primary">Critical Thinking & Strategic Decision-Making</h3>
                <p className="text-gray-600">Master structured thinking, problem-solving, and real-world decision-making essential for future CEOs, entrepreneurs and industry leaders.</p>
              </div>

              <div className="space-y-4">
                <div className="text-3xl font-bold text-primary">02.</div>
                <h3 className="text-lg font-semibold text-primary">Business & Investment Skills</h3>
                <p className="text-gray-600">Learn data analysis, assess business models, and think like an investor, the same skills sharks, top executives and startup founders use to evaluate opportunities.</p>
              </div>

              <div className="space-y-4">
                <div className="text-3xl font-bold text-primary">03.</div>
                <h3 className="text-lg font-semibold text-primary">Effective Communication & Persuasion</h3>
                <p className="text-gray-600">Develop the ability to ask the right questions, challenge ideas, and articulate compelling investment rationales, crucial for success in business and beyond.</p>
              </div>

              <div className="space-y-4">
                <div className="text-3xl font-bold text-primary">04.</div>
                <h3 className="text-lg font-semibold text-primary">Future-Ready Career Advantage</h3>
                <p className="text-gray-600">Gain a competitive edge in college applications and careers by demonstrating real-world business experience, leadership, and high-stakes decision-making skills.</p>
              </div>

              <div className="space-y-4">
                <div className="text-3xl font-bold text-primary">05.</div>
                <h3 className="text-lg font-semibold text-primary">Exclusive Industry Access & Internships</h3>
                <p className="text-gray-600">Get mentored by top investors, venture capitalists, and business leaders while accessing internship opportunities that set you apart.</p>
              </div>
            </div>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
    <Card className="border-none shadow-lg">
      <CardContent className="p-6">
        <h3 className="text-2xl font-bold text-blue-900 mb-4">Eligibility & Fee</h3>
        <ul className="space-y-3 text-gray-600">
          <li>• Open to individual students from Classes 9 to 16</li>
          <li>• Fees: INR 2,500 (inclusive of taxes)</li>
          <li>• Includes learning resources, competition access, and event-day provisions</li>
          <li>• No prior commerce knowledge required, focus on logic, problem-solving, and decision-making</li>
        </ul>
      </CardContent>
    </Card>

    <Card className="border-none shadow-lg">
      <CardContent className="p-6">
        <h3 className="text-2xl font-bold text-blue-900 mb-4">Important Dates</h3>
        <ul className="space-y-3 text-gray-600">
          <li>• Registration Deadline: 20th June 2025</li>
          <li>• Access to Learning Resources: 1st July 2025</li>
          <li>• Intra-School Test (Online): 13th July 2025</li>
          <li>• Inter-School Case Study Round (Online): 25th July 2025</li>
          <li>• National Finals (Delhi NCR/Online): 3rd August 2025</li>
        </ul>
      </CardContent>
    </Card>

    <Card className="border-none shadow-lg">
      <CardContent className="p-6">
        <h3 className="text-2xl font-bold text-blue-900 mb-4">Skills You Will Gain</h3>
        <ul className="space-y-3 text-gray-600">
          <li>• Critical Thinking</li>
          <li>• Problem-Solving</li>
          <li>• Decision-Making</li>
          <li>• Startup Investing Skills</li>
          <li>• Communication</li>
        </ul>
      </CardContent>
    </Card>
  </div>
</div>
      </section>

          <MentorsSection />
          <SneakPeekSection />
        </div>
      </section>

      <SharkathonComparison />

      {/* Registration Form */}
      <section className="py-16 bg-gray-50" id="register">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-primary">Register for Sharkathon</h2>
            <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
              Take the first step toward an incredible investment evaluation journey
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
          <section id="register">
            <RegistrationForm />
          </section>

          </div>
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
