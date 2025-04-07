import { FaRegFileAlt, FaBook, FaLaptop, FaUsers, FaSearch } from "react-icons/fa";

export default function SharkathonTimeline() {
  const lighterNavyBlue = "#0a2a5e";

  const timelineSteps = [
    {
      icon: <FaRegFileAlt className="text-white text-2xl" />,
      title: "Step 1: Register & Secure Your Spot",
      description: "Submit your application with essential details to secure your spot."
    },
    {
      icon: <FaBook className="text-white text-2xl" />,
      title: "Step 2: Access Study Resources & Prepare",
      description: "Use our curated materials to prepare for the upcoming competition."
    },
    {
      icon: <FaLaptop className="text-white text-2xl" />,
      title: "Step 3: Online Assessment",
      description: "Test your logic, problem-solving, and strategic thinking online."
    },
    {
      icon: <FaUsers className="text-white text-2xl" />,
      title: "Step 4: Case Study Challenge & Mentorship",
      description: "Solve real-world business cases and get expert guidance throughout."
    },
    {
      icon: <FaSearch className="text-white text-2xl" />,
      title: "Step 5: The Final Pitch - Live Investor Panel",
      description: "Act as investors, evaluate pitches, and present your decisions live."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto py-20 px-6">
      {/* Desktop Timeline */}
      <div className="hidden md:block relative">
        {/* Line */}
        <div className="absolute top-12 left-0 right-0 h-1 bg-opacity-20" style={{ backgroundColor: lighterNavyBlue }}></div>

        <div className="flex justify-between items-start">
          {timelineSteps.map((step, index) => (
            <div key={index} className="relative flex flex-col items-center text-left px-4 w-1/5">
              {/* Icon */}
              <div
                className="p-4 rounded-full border-4 shadow-lg transition-transform hover:scale-105"
                style={{ backgroundColor: lighterNavyBlue, borderColor: lighterNavyBlue }}
              >
                {step.icon}
              </div>

              {/* Title */}
              <h3 className="mt-6 text-lg font-bold text-[#0a2a5e] leading-snug">
                {step.title}
              </h3>

              {/* Description */}
              <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Timeline */}
      <div className="md:hidden">
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-1.5 bg-[#0a2a5e30]"></div>

          <div className="space-y-14">
            {timelineSteps.map((step, index) => (
              <div key={index} className="relative flex items-start">
                {/* Icon */}
                <div
                  className="p-3 rounded-full border-4 shadow-lg mr-6"
                  style={{ backgroundColor: lighterNavyBlue, borderColor: lighterNavyBlue }}
                >
                  {step.icon}
                </div>

                {/* Details */}
                <div className="pt-1">
                  <h3 className="text-base font-bold text-[#0a2a5e] leading-snug">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600 leading-relaxed pr-2">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
