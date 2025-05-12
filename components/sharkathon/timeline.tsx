import React from 'react';
import { FaRegFileAlt, FaBook, FaLaptop, FaUsers, FaSearch } from "react-icons/fa";

export default function SharkathonTimeline() {
  // Consistent colors across all views
  const primaryYellow = "#FAD133";
  const primaryBlue = "#001640"; // Dark navy blue background
  const textWhite = "#FFFFFF";
  const textGray = "#D1D5DB";

  const timelineSteps = [
    {
      icon: <FaRegFileAlt />,
      title: "Step 1: Register & Secure Your Spot",
      description: "Submit your application with essential details to secure your spot.",
      date: '20th June 2025'
    },
    {
      icon: <FaBook />,
      title: "Step 2: Access Study Resources & Prepare",
      description: "Use our curated materials to prepare for the upcoming competition.",
      date: '1st July 2025'
    },
    {
      icon: <FaLaptop />,
      title: "The Entry Round",
      description: "Solve a short decision-making challenge designed to test how you think, not what you know.",
      date: '13th July 2025'
    },
    {
      icon: <FaUsers />,
      title: "Business Case Round",
      description: "Look at a company's numbers and story, then submit your recommendation on what they should do next.",
      date: '25th July 2025'
    },
    {
      icon: <FaSearch />,
      title: "Finals",
      description: "Break down real startup pitches, question the founders to finally decide will you invest or not. Then pitch your verdict to actual investors, or probably Sharks",
      date: '3rd August 2025'
    }
  ];

  return (
    <div className="py-12 bg-blue-900" style={{ backgroundColor: primaryBlue }}>
      <div className="text-center mb-10 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 flex items-center justify-center flex-wrap">
          The 
          <img 
            src="/logo.png" 
            alt="Sharkathon" 
            className="h-8 md:h-12 inline-block align-text-bottom mx-2"
          /> 
          Journey
        </h2>
        {/* Made line responsive with percentage width instead of fixed width */}
        <div className="w-3/4 sm:w-2/3 md:w-1/2 lg:w-96 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto"></div>
        <p className="text-gray-300 mt-4 text-base md:text-lg max-w-2xl mx-auto mb-8 px-4">
          From registration to the final evaluation, follow the path to success
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-2">
        {/* Medium and Large Screen (Desktop) - Horizontal Timeline */}
        <div className="hidden md:block relative">
          {/* Horizontal Line */}
          <div className="absolute top-[50px] left-0 right-0 h-1" style={{ backgroundColor: primaryYellow }}></div>

          {/* Responsive grid layout that works on both medium and large screens */}
          <div className="grid grid-cols-5 gap-4 pt-[12px]">
            {timelineSteps.map((step, index) => (
              <div key={index} className="relative flex flex-col items-start text-left">
                {/* Icon */}
                <div
                  className="z-10 p-3 md:p-4 rounded-full border-4 shadow-lg"
                  style={{
                    backgroundColor: primaryYellow,
                    borderColor: primaryYellow,
                  }}
                >
                  {React.cloneElement(step.icon, { className: "text-black text-xl md:text-2xl" })}
                </div>

                {/* Title */}
                <h3 className="mt-4 text-sm md:text-base lg:text-lg font-bold text-white leading-tight">
                  {step.title}
                </h3>

                {/* Date */}
                <p className="mt-1 text-xs lg:text-sm font-semibold" style={{ color: primaryYellow }}>
                  {step.date}
                </p>

                {/* Description */}
                <p className="mt-2 text-xs lg:text-sm leading-relaxed" style={{ color: textGray }}>
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Small Screen (Mobile) - Vertical Timeline */}
        <div className="md:hidden">
          <div className="relative">
            {/* Vertical line */}
            <div 
              className="absolute left-6 top-0 bottom-0 w-1" 
              style={{ backgroundColor: primaryYellow }}
            ></div>

            <div className="space-y-12">
              {timelineSteps.map((step, index) => (
                <div key={index} className="relative flex items-start">
                  {/* Icon */}
                  <div
                    className="z-10 p-3 rounded-full border-4 shadow-lg mr-6 flex-shrink-0"
                    style={{ backgroundColor: primaryYellow, borderColor: primaryYellow }}
                  >
                    {React.cloneElement(step.icon, { className: "text-black text-xl" })}
                  </div>

                  {/* Details */}
                  <div className="pt-1">
                    <h3 className="text-base font-bold text-white leading-tight">
                      {step.title}
                    </h3>
                    <p className="mt-1 text-xs font-semibold" style={{ color: primaryYellow }}>
                      {step.date}
                    </p>
                    <p className="mt-2 text-xs leading-relaxed pr-4" style={{ color: textGray }}>
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}