import React from 'react';

const ProgramFlow = () => {
  // Data for the timeline points
  const flowData = [
    { title: 'Registration Deadline', date: '20th June 2025' },
    { title: 'Access to Learning Resources', date: '20th June 2025' },
    { title: 'Intra-School Test (Online)', date: '20th June 2025' },
    { title: 'Inter-School Case Study Round (Online)', date: '20th June 2025' },
    { title: 'National Finals (Delhi NCR/Online)', date: '20th June 2025' },
  ];

  // --- SVG Path Data (Much Wider Spacing) ---
  // Adjusted X coordinates for much wider spacing, viewBox width is now 1900
  const svgPathD = "M 50 50 Q 270 0, 490 50 T 930 50 Q 1150 0, 1370 50 T 1810 50";
  // Circle positions (center points - Much Wider Spacing)
  const circlePositions = [
    { cx: "50", cy: "50" },
    { cx: "490", cy: "50" }, // 50 + 440
    { cx: "930", cy: "50" }, // 490 + 440
    { cx: "1370", cy: "50" },// 930 + 440
    { cx: "1810", cy: "50" },// 1370 + 440
  ];
  //----------------------

  // --- Vertical Line Calculation (Much Longer Lines) ---
  const lineLengthUp = 75;    // Increased significantly
  const lineLengthDown = 75;  // Increased significantly
  const circleRadius = 15;    // Increased circle size further

  return (
    // Greatly increased padding
    <div className="bg-gradient-to-b from-indigo-900 to-blue-950 p-12 md:p-24 rounded-lg text-gray-200 font-sans overflow-hidden shadow-xl">
      {/* Greatly increased title size and margin */}
      <h2 className="text-center text-white mb-20 md:mb-28 text-4xl md:text-5xl font-bold">
        Program Flow
      </h2>
      {/* Greatly increased min-height for more vertical space */}
      <div className="relative w-full min-h-[400px] flex justify-center items-center">
        <svg
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-7xl h-[180px] z-10 overflow-visible" // Increased max-w, increased h
          viewBox="0 0 1900 100" // Increased viewBox width significantly
          preserveAspectRatio="xMidYMid meet"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Main Wavy Dashed Path - Thicker stroke */}
          <path
            d={svgPathD}
            className="stroke-yellow-400 stroke-[5] [stroke-dasharray:10_5] fill-none" // Increased stroke width
          />

          {/* Vertical Dashed Lines & Circles */}
          {circlePositions.slice(0, flowData.length).map((pos, index) => {
            const isAbove = index % 2 === 0;
            const cy = parseFloat(pos.cy);

            const lineY1 = isAbove ? cy - circleRadius / 2 : cy + circleRadius / 2;
            const lineY2 = isAbove ? cy - lineLengthUp : cy + lineLengthDown; // Using much larger lengths

            return (
              <React.Fragment key={index}>
                {/* Vertical Dashed Line - Slightly thicker */}
                <line
                  x1={pos.cx}
                  y1={lineY1}
                  x2={pos.cx}
                  y2={lineY2} // End much further away
                  className="stroke-yellow-400 stroke-[2] [stroke-dasharray:4_3]" // Increased stroke width
                />
                {/* Circle */}
                <circle
                   cx={pos.cx}
                   cy={pos.cy}
                   r={circleRadius} // Use variable for increased radius
                   className="fill-yellow-400"
                 />
              </React.Fragment>
            );
          })}
        </svg>

        {/* Text Items Container - Increased max-width */}
        <div className="relative z-20 flex justify-around items-center w-[90%] max-w-7xl">
          {flowData.map((item, index) => (
            // Greatly increased min-width for text blocks
            <div key={index} className="flex-1 text-center relative min-w-[200px] md:min-w-[280px] px-2 md:px-3">
              {/* Text Content Block - Positioned much further using increased translate */}
              <div
                className={`inline-block relative p-3 transition-transform duration-300 ease-in-out
                  ${ index % 2 === 0
                      ? '-translate-y-28 md:-translate-y-32' // Even index -> UP Much More
                      : 'translate-y-24 md:translate-y-28'  // Odd index -> DOWN Much More
                  }`
                }
              >
                {/* Greatly increased font sizes */}
                <span className="block font-bold text-base md:text-lg mb-1.5 text-white">
                  {item.title}
                </span>
                <span className="block text-sm md:text-base text-gray-400">
                  {item.date}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProgramFlow;