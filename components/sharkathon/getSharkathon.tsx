"use client";

import React from 'react';
import { FileText, GraduationCap, Users, BriefcaseBusiness } from 'lucide-react';
import Link from 'next/link';
import { Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function SharkathonBenefits() {
  const benefits = [
    {
      id: 1,
      icon: <FileText className="text-secondary flex-shrink-0" size={24} />,
      title: "Certification & Letter of Recommendation",
      description: "Earn a prestigious certificate and LOR that proves your investor mindset."
    },
    {
      id: 2,
      icon: <GraduationCap className="text-secondary flex-shrink-0" size={24} />,
      title: "College & Career Readiness",
      description: "Boost your profile with real business experience that stands out on applications."
    },
    {
      id: 3,
      icon: <Users className="text-secondary flex-shrink-0" size={24} />,
      title: "Mentorship & Internship Opportunities",
      description: "Get guided by top investors and unlock exclusive industry internships"
    },
    {
      id: 4,
      icon: <BriefcaseBusiness className="text-secondary flex-shrink-0" size={24} />,
      title: "Real-World Business Simulation",
      description: "Take part in high-stakes challenges that mirror actual startup investment rounds."
    }
  ];
  const ActionButtons = () => (
    <div className="flex flex-row flex-wrap sm:flex-nowrap gap-3 md:gap-4 items-center justify-center pt-8">
      <Button
        asChild
        size="lg"
        className="w-full sm:w-auto bg-yellow-400 text-blue-900 hover:bg-yellow-300 font-extrabold shadow-lg border-2 border-yellow-400 hover:scale-105 transition-transform text-sm md:text-base py-2 px-3 md:px-4"
      >
        <Link href="/register" className="flex items-center justify-center gap-1 md:gap-2">
          <Zap className="w-3 h-3 md:w-4 md:h-4" />
          <span>SIGN UP NOW</span>
        </Link>
      </Button>

     
    </div>
  );


  return (
    <div className="w-full mx-auto px-4 sm:px-6 py-12 bg-primary">
      <h1 className="text-3xl font-bold mb-10 text-center text-white">
        What do you get from <img
          src="/logo.png"
          alt="Sharkathon"
          className="h-8 pb-1 sm:8 pb-1 inline-block align-text-bottom mx-1"
        />?
      </h1>

      <div className="flex flex-wrap lg:flex-nowrap -mx-4">
        {/* Left Column: Benefits List */}
        <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
          <div className="space-y-3">
            {benefits.map((benefit) => (
              <div
                key={benefit.id}
                className="border border-secondary/20 rounded-lg overflow-hidden bg-primary-dark hover:border-secondary/50 transition-all"
              >
                <div className="flex items-center p-4">
                  <div className="mr-3">{benefit.icon}</div>
                  <h3 className="font-bold text-secondary text-base sm:text-lg">{benefit.title}</h3>
                </div>
                <p className="text-white px-4 pb-4 pl-14 text-sm sm:text-base">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Image */}
        <div className="w-full lg:w-1/2 px-4">
          <div className="rounded-lg overflow-hidden h-full max-h-[500px] lg:max-h-full">
            <img
              src="/benefits.jpg"
              alt="Students participating in a Sharkathon-like event"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
      <ActionButtons/>
    </div>
  );
}
