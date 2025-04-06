import { Card, CardContent } from "@/components/ui/card";
import { 
  FaRegFileAlt, 
  FaBook, 
  FaLaptop, 
  FaUsers, 
  FaSearch,
  FaTrophy 
} from "react-icons/fa";

export default function SharkathonTimeline() {
  // A lighter navy blue color
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
      description: "Access comprehensive learning resources covering investment principles, data analysis, and strategic evaluation to prepare for the competition."
    },
    {
      icon: <FaLaptop className="text-white text-2xl" />,
      title: "Step 3: Online Assessment",
      description: "Take a proctored multiple-choice test to evaluate your business logic, problemsolving skills, and strategic thinking."
    },
    {
      icon: <FaUsers className="text-white text-2xl" />,
      title: "Step 4: Case Study Challenge & Mentorship",
      description: "Analyse real business case studies, assess data, and present strategic recommendations, while receiving mentorship from industry professionals to refine your evaluation skills."
    },
    {
      icon: <FaSearch className="text-white text-2xl" />,
      title: "Step 5: The Final Pitch - Live Investor Panel",
      description: "Step into the role of investors and evaluate live business pitches from real entrepreneurs, engaging in high-stakes decision-making and justify your investment rationale in front of a panel of experienced VCs, startup founders, and business leaders."
    },
    {
      icon: <FaTrophy className="text-white text-2xl" />,
      title: "Step 6: Finals",
      description: "The top contenders step into the shoes of real investors, assessing business pitches, making strategic decisions, and communicating their rationale for investment in a concise and precise way."
    }
  ];

  return (
    <div className="max-w-full mx-auto py-16 px-8">
      {/* Horizontal Timeline for Desktop */}
      <div className="relative hidden md:block">
        {/* Timeline Line */}
        <div className="absolute top-12 left-0 right-0 h-2" style={{ backgroundColor: `${lighterNavyBlue}30` }}></div>
        
        <div className="flex justify-between items-start">
          {timelineSteps.map((step, index) => (
            <div key={index} className="relative flex flex-col items-center px-6" style={{ width: "16%" }}>
              {/* Step Icon */}
              <div className="p-4 rounded-full border-2 flex items-center justify-center w-20 h-20 z-10" 
                   style={{ backgroundColor: lighterNavyBlue, borderColor: lighterNavyBlue }}>
                {step.icon}
              </div>
              
              {/* Step Details */}
              <div className="mt-6 text-center">
                <h3 className="text-lg font-medium mb-2" style={{ color: lighterNavyBlue }}>{step.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Vertical Timeline for Mobile */}
      <div className="md:hidden">
        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-6 top-0 bottom-0 w-2" style={{ backgroundColor: `${lighterNavyBlue}30` }}></div>
          
          <div className="space-y-16">
            {timelineSteps.map((step, index) => (
              <div key={index} className="relative flex items-start">
                {/* Step Icon */}
                <div className="p-3 rounded-full border-2 flex items-center justify-center w-16 h-16 z-10 mr-6"
                     style={{ backgroundColor: lighterNavyBlue, borderColor: lighterNavyBlue }}>
                  {step.icon}
                </div>
                
                {/* Step Details */}
                <div className="pt-2">
                  <h3 className="text-base font-medium mb-3" style={{ color: lighterNavyBlue }}>{step.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}