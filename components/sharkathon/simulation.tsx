import React from 'react';
import { FaChartLine, FaBriefcase, FaHandshake } from 'react-icons/fa';

const SimulationProcess = () => {
  // Design constants
  const navyBlue = "#0a2a5e";
  
  const steps = [
    {
      icon: <FaChartLine size={60} />,
      title: "The Entry Round",
      description: "Solve a short decision-making challenge designed to test how you think, not what you know."
    },
    {
      icon: <FaBriefcase size={60} />,
      title: "Business Case Round",
      description: "Look at a company's numbers and story, then submit your recommendation on what they should do next.",
      centerText: true // Flag to center text
    },
    {
      icon: <FaHandshake size={60} />,
      title: "Finals",
      description: "Break down real startup pitches, question the founders to finally decide will you invest or not. Then pitch your verdict to actual investors, or probably Sharks"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Title with animated underline */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-2">Simulation Process</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto"></div>
          <p className="text-gray-700 mt-4 text-xl">
            Become the next big <span className="font-bold text-blue-700">Shark</span>
          </p>
        </div>
  
        {/* Feature Cards - With hover effects and improved design */}
        <div className="flex flex-col md:flex-row justify-center items-stretch gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="rounded-xl shadow-lg flex-1 flex flex-col transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl overflow-hidden"
              style={{ backgroundColor: navyBlue }}
            >
              {/* Card Content */}
              <div className={`p-8 text-center flex-1 flex flex-col`}>
                <h3 className="font-bold text-xl text-secondary mb-4">
                  {step.title}
                </h3>
                <p className="text-blue-100 leading-relaxed justify-center  ">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Expert Panel Section */}
        {/* Expert Panel Section */}
<div className="bg-secondary rounded-xl shadow-lg mt-12 max-w-4xl mx-auto transform transition-all duration-300 hover:shadow-xl">
  <div className="p-6 border-l-4 flex items-center gap-4" style={{ borderColor: navyBlue }}>
    {/* Shark Image */}
    <img 
      src="/shark.png" 
      alt="Shark Icon" 
      className="w-20 h-20 object-contain"
    />

    {/* Text */}
    <div>
      <h4 className="text-xl font-bold mb-3" style={{ color: navyBlue }}>
        Expert Judging Panel
      </h4>
      <p className="text-black leading-relaxed">
        Evaluation by eminent venture capital, debt firms, and leading CXOs from startups, probably even <span className='font-bold'>Sharks</span>, 
        ensuring high-level scrutiny and real-world relevance.
      </p>
    </div>
  </div>
</div>

      </div>
    </section>
  );
};

export default SimulationProcess;
