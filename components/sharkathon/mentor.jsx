"use client";

import { getImageUrl } from "@/lib/image-utils";

const MentorsSection = () => {
  const mentors = [
    {
      name: "Mr. Rajat Kumar",
      title: "Nandan Capital, Ex McKinsey and Wharton Alum ",
      company: "nandan",
      imageKey: "founder-rajat",
    },
    {
      name: "Mr. Mayank Kapoor",
      title: "CTO Car Dekho, Alum IIT Delhi & MIT",
      company: "cardekho",
      imageKey: "founder-mayank",
    },
    {
      name: "Mr. Shalabh Gupta",
      title: "Founder NUUK, Alum IIT Delhi & IIM Ahmedabad",
      company: "nuuk",
      imageKey: "founder-shalabh",
    },
  ];

  return (
    <section className="py-16 bg-gray-50" id="mentors">
      <div className="container px-4">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-primary mb-2">Leaders and Mentors Associated</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto"></div>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto text-l">
            Learn from top industry leaders who have made a significant impact.
          </p>
        </div>

        {/* Using Flexbox. items-stretch makes direct children the same height */}
        <div className="flex flex-col md:flex-row justify-center items-center md:items-stretch gap-8 max-w-5xl mx-auto">
          {mentors.map((mentor, index) => (
            <div
              key={index}
              // Make the card itself a flex container (column)
              className="w-64 bg-white shadow-md hover:shadow-lg transition-shadow duration-300 rounded-lg overflow-hidden flex flex-col"
            >
              {/* Person Image - Remains the same */}
              <div className="relative" style={{ paddingBottom: "133.33%" }}>
                <img
                  src={getImageUrl(mentor.imageKey) || "/placeholder.svg"}
                  alt={mentor.name}
                  className="absolute top-0 left-0 w-full h-full object-cover rounded-t-lg transition-transform duration-300 hover:scale-105"
                />
              </div>

              {/* Person Info - Make this section grow and arrange content */}
              <div className="p-3 text-center flex flex-col flex-grow justify-between">
                {/* Group Name and Title together */}
                <div>
                  <h3 className="font-semibold text-md text-gray-800">{mentor.name}</h3>
                  <p className="text-xs text-gray-600">{mentor.title}</p>
                </div>

                {/* Company Logo - Keep existing centering, justify-between pushes this down */}
                <div className="h-16 flex items-center justify-center mt-4">
                  <img
                    src={getImageUrl(mentor.company) || "/placeholder.svg"}
                    alt={`${mentor.company} logo`}
                    className="h-20 w-32 object-contain" // Adjusted height/width slightly for better fit
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MentorsSection;