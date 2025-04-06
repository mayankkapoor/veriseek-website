const SharkathonComparison = () => {
  return (
    <div className="p-6 bg-white text-black max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold text-primary mb-2 text-center">How Does Sharkathon Compare?</h2>
      <div> <br/></div>
      <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto "></div>
      <p className="mb-6">
        Sharkathon is not just another competition, it's a <span className="font-bold">high-impact learning experience</span> designed to equip students with <span className="font-bold">real-world business and investment skills</span>.
      </p>
      
      {/* Mobile version - card-based display */}
      <div className="md:hidden space-y-6">
        {/* Sharkathon Card */}
        <div className="border border-gray-300 rounded-lg overflow-hidden">
          <div className="bg-primary text-white font-bold px-4 py-3 text-center">Sharkathon</div>
          <div className="p-4 space-y-3">
            <div>
              <h3 className="font-bold text-sm text-blue-800">Skills Developed</h3>
              <p className="text-sm">Critical Thinking, Problem-Solving, Decision-Making, Startup Investing Skills, Communication</p>
            </div>
            <div>
              <h3 className="font-bold text-sm text-blue-800">Real-World Application</h3>
              <p className="text-sm">Prepares you for being an investor, a Consultant, or a CXO</p>
            </div>
            <div>
              <h3 className="font-bold text-sm text-blue-800">Industry Exposure</h3>
              <p className="text-sm">Direct mentorship from <span className="font-bold">investors, venture capitalists, and startup founders</span></p>
            </div>
            <div>
              <h3 className="font-bold text-sm text-blue-800">Learning Resources</h3>
              <p className="text-sm">Structured learning materials, including <span className="font-bold">case studies, financial models, real-world business scenarios, and mentorship resources</span></p>
            </div>
            <div>
              <h3 className="font-bold text-sm text-blue-800">Recognition & Value</h3>
              <p className="text-sm">Judged by industry leaders, valuable for CVs and college applications</p>
            </div>
            <div>
              <h3 className="font-bold text-sm text-blue-800">Cost & Accessibility</h3>
              <p className="text-sm">Fraction of the cost of international MUNs and Olympiads, making it more accessible</p>
            </div>
          </div>
        </div>

        {/* MUN Card */}
        <div className="border border-gray-300 rounded-lg overflow-hidden">
          <div className="bg-primary text-white font-bold px-4 py-3 text-center">MUN</div>
          <div className="p-4 space-y-3">
            <div>
              <h3 className="font-bold text-sm text-blue-800">Skills Developed</h3>
              <p className="text-sm">Public Speaking, Diplomacy, Research</p>
            </div>
            <div>
              <h3 className="font-bold text-sm text-blue-800">Real-World Application</h3>
              <p className="text-sm">Simulated international relations and debate on global issues</p>
            </div>
            <div>
              <h3 className="font-bold text-sm text-blue-800">Industry Exposure</h3>
              <p className="text-sm">Prepares you for being a debater/diplomat</p>
            </div>
            <div>
              <h3 className="font-bold text-sm text-blue-800">Learning Resources</h3>
              <p className="text-sm">Relies on self-research, delegate guides, and global issue briefs</p>
            </div>
            <div>
              <h3 className="font-bold text-sm text-blue-800">Recognition & Value</h3>
              <p className="text-sm">Recognition among debating circles</p>
            </div>
            <div>
              <h3 className="font-bold text-sm text-blue-800">Cost & Accessibility</h3>
              <p className="text-sm">Expensive for high-level MUNs (e.g., Yale MUN)</p>
            </div>
          </div>
        </div>

        {/* Olympiads Card */}
        <div className="border border-gray-300 rounded-lg overflow-hidden">
          <div className="bg-primary text-white font-bold px-4 py-3 text-center">Olympiads</div>
          <div className="p-4 space-y-3">
            <div>
              <h3 className="font-bold text-sm text-blue-800">Skills Developed</h3>
              <p className="text-sm">Subject-Specific Theoretical Knowledge (Maths, Science, etc.)</p>
            </div>
            <div>
              <h3 className="font-bold text-sm text-blue-800">Real-World Application</h3>
              <p className="text-sm">Tests conceptual knowledge but lacks real-world application</p>
            </div>
            <div>
              <h3 className="font-bold text-sm text-blue-800">Industry Exposure</h3>
              <p className="text-sm">No direct industry involvement, primarily academic evaluations</p>
            </div>
            <div>
              <h3 className="font-bold text-sm text-blue-800">Learning Resources</h3>
              <p className="text-sm">Offer subject-based problem sets that test theoretical concepts</p>
            </div>
            <div>
              <h3 className="font-bold text-sm text-blue-800">Recognition & Value</h3>
              <p className="text-sm">Prestigious for academic excellence but limited direct industry impact</p>
            </div>
            <div>
              <h3 className="font-bold text-sm text-blue-800">Cost & Accessibility</h3>
              <p className="text-sm">High costs for training, travel, and participation</p>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop version - table display */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-2 bg-primary text-white">Feature</th>
              <th className="border border-gray-300 px-4 py-2 bg-primary text-white">Sharkathon</th>
              <th className="border border-gray-300 px-4 py-2 bg-primary text-white">MUN</th>
              <th className="border border-gray-300 px-4 py-2 bg-primary text-white">Olympiads</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 px-4 py-2 font-bold">Skills Developed</td>
              <td className="border border-gray-300 px-4 py-2">Critical Thinking, Problem-Solving, Decision-Making, Startup Investing Skills, Communication</td>
              <td className="border border-gray-300 px-4 py-2">Public Speaking, Diplomacy, Research</td>
              <td className="border border-gray-300 px-4 py-2">Subject-Specific Theoretical Knowledge (Maths, Science, etc.)</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2 font-bold">Real-World Application</td>
              <td className="border border-gray-300 px-4 py-2">Prepares you for being an investor, a Consultant, or a CXO</td>
              <td className="border border-gray-300 px-4 py-2">Simulated international relations and debate on global issues</td>
              <td className="border border-gray-300 px-4 py-2">Tests conceptual knowledge but lacks real-world application</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2 font-bold">Industry Exposure</td>
              <td className="border border-gray-300 px-4 py-2">Direct mentorship from <span className="font-bold">investors, venture capitalists, and startup founders</span></td>
              <td className="border border-gray-300 px-4 py-2">Prepares you for being a debater/diplomat</td>
              <td className="border border-gray-300 px-4 py-2">No direct industry involvement, primarily academic evaluations</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2 font-bold">Learning Resources</td>
              <td className="border border-gray-300 px-4 py-2">Structured learning materials, including <span className="font-bold">case studies, financial models, real-world business scenarios, and mentorship resources</span></td>
              <td className="border border-gray-300 px-4 py-2">Relies on self-research, delegate guides, and global issue briefs</td>
              <td className="border border-gray-300 px-4 py-2">Offer subject-based problem sets that test theoretical concepts</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2 font-bold">Recognition & Value</td>
              <td className="border border-gray-300 px-4 py-2">Judged by industry leaders, valuable for CVs and college applications</td>
              <td className="border border-gray-300 px-4 py-2">Recognition among debating circles</td>
              <td className="border border-gray-300 px-4 py-2">Prestigious for academic excellence but limited direct industry impact</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2 font-bold">Cost & Accessibility</td>
              <td className="border border-gray-300 px-4 py-2">Fraction of the cost of international MUNs and Olympiads, making it more accessible</td>
              <td className="border border-gray-300 px-4 py-2">Expensive for high-level MUNs (e.g., Yale MUN)</td>
              <td className="border border-gray-300 px-4 py-2">High costs for training, travel, and participation</td>
            </tr>
          </tbody>
        </table>
      </div>
      <h2 className="mt-12 mb-6 text-2xl md:text-3xl font-extrabold text-center mx-auto max-w-4xl">
      <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-blue-500">
        Why settle for just debating theories when you can experience real business decision-making?
      </span>
      <span className="block mt-3 text-blue-700 font-bold">
        Join Sharkathon today!
      </span>
    </h2>
    </div>
  );
};

export default SharkathonComparison;