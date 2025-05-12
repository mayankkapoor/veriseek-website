import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
// import NewsletterSignup from "@/components/shared/newsletter-signup" //Removed import
// Import the image utility
import { getImageUrl } from "@/lib/image-utils"
import ImageCarousel from "@/components/home/carousel-home"

export const metadata = {
  title: "About Veriseek Education | Our Mission and Vision",
  description:
    "Learn about Veriseek Education's mission to bridge the gap between traditional academic learning and real-world professional skills.",
}

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-primary text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Veriseek Education</h1>
            <p className="text-xl text-white/80">Empowering students with real-world skills for future success</p>
          </div>
        </div>
      </section>

      {/* Our Vision */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              {/* Replace the vision section image */}
              <Image
                src={getImageUrl("about-vision") || "/placeholder.svg"}
                alt="Student engaged in learning"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-primary">Our Vision</h2>
              <p className="text-gray-700">
                Veriseek Education was founded with a clear vision to bridge the gap between traditional academic
                learning and the practical skills needed in today's professional world. We believe that education should
                prepare students not just for exams, but for life.
              </p>
              <p className="text-gray-700">
                Our innovative programmes are designed to develop critical thinking, problem-solving,
                decision-making, startup investing skills, and communication, essential
                competencies for success in any career path. By providing students with real-world
                challenges and expert mentorship, we empower them to discover their potential and
                pursue their passions with confidence.
              </p>
              <p className="text-gray-700">
                We envision a future where every student has access to educational experiences that are engaging,
                relevant, and transformative. Through our work, we aim to inspire a new generation of leaders,
                innovators, and problem-solvers who are equipped to make a positive impact on the world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Founders */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary">Meet Our Founders</h2>
            <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
              Visionary leaders with a passion for transforming education
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex flex-col items-center text-center">
                {/* Replace the founder images */}
                <Image
                  src={getImageUrl("founder-rajat") || "/placeholder.svg"}
                  alt="Rajat Kumar"
                  width={200}
                  height={200}
                  className="rounded-full mb-4 object-cover"
                />
                <h3 className="text-xl font-bold text-primary">Rajat Kumar</h3>
                <p className="text-secondary font-medium mb-2">Co-Founder & CEO</p>
                <p className="text-gray-600 mb-4">
                  Former McKinsey consultant with an MBA from Wharton. Passionate about educational innovation and
                  entrepreneurship.
                </p>
                <div className="flex space-x-3">
                  <Link 
                  href="https://www.linkedin.com/in/rajat-kumar-004533/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-primary hover:text-secondary"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                  </svg>
                  <span className="sr-only">LinkedIn</span>
                </Link>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex flex-col items-center text-center">
                <Image
                  src={getImageUrl("founder-durba") || "/placeholder.svg"}
                  alt="Durba Ray"
                  width={200}
                  height={200}
                  className="rounded-full mb-4 object-cover"
                />
                <h3 className="text-xl font-bold text-primary">Durba Ray</h3>
                <p className="text-secondary font-medium mb-2">Co-Founder & COO</p>
                <p className="text-gray-600 mb-4">
                  Former executive at Airtel with a degree from University of Rochester. Expert in educational program
                  development.
                </p>
                <div className="flex space-x-3">
                  <Link 
                  href="https://www.linkedin.com/in/durba-ray-ab3a6012/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-primary hover:text-secondary"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                  </svg>
                  <span className="sr-only">LinkedIn</span>
                </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Educational Approach */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 order-2 lg:order-1">
              <h2 className="text-3xl font-bold text-primary">Our Educational Approach</h2>
              <p className="text-gray-700">
                At Veriseek, we believe in learning by doing. Our educational approach combines theoretical knowledge
                with practical application, allowing students to develop a deeper understanding of concepts while
                building valuable skills.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="bg-secondary p-1 rounded-full mr-3 mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">
                    <strong className="text-primary">Experiential Learning:</strong> Students learn through real-world
                    challenges and projects.
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="bg-secondary p-1 rounded-full mr-3 mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">
                    <strong className="text-primary">Expert Mentorship:</strong> Industry professionals provide guidance
                    and feedback.
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="bg-secondary p-1 rounded-full mr-3 mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">
                    <strong className="text-primary">Collaborative Environment:</strong> Students work together to solve
                    problems and share ideas.
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="bg-secondary p-1 rounded-full mr-3 mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">
                    <strong className="text-primary">Personalised Feedback:</strong> Regular assessment and guidance for
                    continuous improvement.
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="bg-secondary p-1 rounded-full mr-3 mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">
                    <strong className="text-primary">Real-World Application:</strong> Students apply their knowledge to
                    solve authentic problems.
                  </span>
                </li>
              </ul>
              <Button asChild className="bg-primary text-white hover:bg-primary/90 mt-4">
                <Link href="/sharkathon#register">Register Now</Link>
              </Button>
            </div>
            <div className="order-1 lg:order-2">
              {/* Replace the educational approach image */}
              <ImageCarousel/>
            </div>
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
    </>
  )
}