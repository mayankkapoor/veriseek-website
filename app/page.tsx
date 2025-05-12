import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  GraduationCap,
  Award,
  Users,
  TrendingUp,
  ArrowRight,
} from "lucide-react";
import TestimonialCarousel from "@/components/home/testimonial-carousel";
import React from "react";

// Import the image utility
import { getImageUrl } from "@/lib/image-utils";
import ImageCarousel from "@/components/home/carousel-home";

export default function Home() {
  return (
    <React.Fragment>
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center bg-primary text-white overflow-hidden relative pt-32 pb-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-10">
              <div className="inline-block bg-secondary text-primary px-4 py-2 rounded-full text-sm font-bold tracking-wide transform hover:scale-105 transition-all">
                <div className="flex items-center gap-2">
                  <ArrowRight className="w-4 h-4" />
                  <span>NOW ACCEPTING APPLICATIONS</span>
                </div>
              </div>
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight pb-2">
                  Bridging Education and Real-World Skills
                </h1>
                <p className="text-lg md:text-xl opacity-90 max-w-lg border-l-4 border-yellow-300 pl-4">
                  India’s premier learning programme for students to develop
                  critical thinking, problem-solving, decision-making, startup
                  investing and communication skills through real-world investment
                  challenges.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 pt-2">
                <Button
                  asChild
                  size="lg"
                  className="bg-yellow-400 text-blue-900 hover:bg-yellow-300 font-extrabold shadow-lg border-2 border-yellow-400 hover:scale-105 transition-transform"
                >
                  <Link href="/sharkathon">Learn About Sharkathon</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-2 border-yellow-400 text-black hover:text-blue-900 hover:bg-yellow-400 font-bold shadow-lg hover:scale-105 transition-transform"
                >
                  <Link href="/about">About Us</Link>
                </Button>
              </div>
            </div>

            {/* Hero Image Section */}
            <div className="relative mt-8 lg:mt-0">
              <div className="absolute -inset-4 bg-gradient-to-r from-yellow-400 to-blue-500 rounded-2xl opacity-15 blur-3xl"></div>
              <div className="relative overflow-hidden rounded-xl border-2 border-yellow-400/30 shadow-lg">
                <ImageCarousel />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-xl border-2 border-yellow-400 z-20">
                <div className="flex items-center gap-3">
                  <div className="bg-yellow-400 p-2 rounded-full">
                    <Award className="h-5 w-5 text-blue-900" />
                  </div>
                  <div>
                    <p className="text-blue-900 font-bold">Recognition & Awards</p>
                    <p className="text-xs text-gray-700 font-medium">for Top Performers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h2 className="text-3xl font-bold text-primary">Our Mission</h2>
            <p className="text-lg text-gray-700">
              At Veriseek Education, we believe in empowering students with the
              skills they need to succeed in the real world. Our innovative
              programmes bridge the gap between traditional academic learning
              and practical professional skills, preparing the next generation
              of leaders, entrepreneurs, and changemakers.
            </p>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary">Why Choose Veriseek</h2>
            <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
              Our programs offer unique advantages that prepare students for
              success in school and beyond
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg hover:shadow-xl transition-transform hover:scale-105">
              <CardContent className="p-6 space-y-4">
                <div className="bg-primary/10 p-3 rounded-full w-fit">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-primary">Real-World Skills</h3>
                <p className="text-gray-600">
                  Develop critical thinking, problem-solving, decision making,
                  startup investing skills, and communication skills applicable
                  in businesses.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-transform hover:scale-105">
              <CardContent className="p-6 space-y-4">
                <div className="bg-primary/10 p-3 rounded-full w-fit">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-primary">Industry Recognition</h3>
                <p className="text-gray-600">
                  Gain exposure to industry professionals including Venture
                  Capital and Debt firms, as well as leading CXOs from startups
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-transform hover:scale-105">
              <CardContent className="p-6 space-y-4">
                <div className="bg-primary/10 p-3 rounded-full w-fit">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-primary">Expert Mentorship</h3>
                <p className="text-gray-600">
                  Learn from experienced professionals and educators who provide
                  guidance throughout your journey.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-transform hover:scale-105">
              <CardContent className="p-6 space-y-4">
                <div className="bg-primary/10 p-3 rounded-full w-fit">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-primary">College Preparation</h3>
                <p className="text-gray-600">
                  Build a competitive portfolio that stands out in college
                  applications and scholarship opportunities.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-transform hover:scale-105 bg-secondary">
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-primary">Ready to Get Started?</h3>
                <p className="text-primary/80">
                  Join thousands of students who have transformed their
                  educational journey with Veriseek.
                </p>
                <Button
                  asChild
                  className="bg-primary text-white hover:bg-primary/90 mt-2 font-bold shadow-lg border border-primary/20 transition-transform hover:scale-105"
                >
                  <Link href="/sharkathon" className="flex items-center">
                    Register Now <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary">Student Success Stories</h2>
            <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
              Hear from students who have participated in our programs and
              competitions
            </p>
          </div>
          <TestimonialCarousel />
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-bold">Ready to Think Like an Investor?</h2>
            <p className="text-white/80">
              Join Sharkathon today and embark on an exciting journey of
              critical thinking, analysis, and investment evaluation.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-yellow-400 text-blue-900 hover:bg-yellow-300 font-extrabold shadow-lg border-2 border-yellow-400 hover:scale-105 transition-transform"
            >
              <Link href="/sharkathon#register">Register Now</Link>
            </Button>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}