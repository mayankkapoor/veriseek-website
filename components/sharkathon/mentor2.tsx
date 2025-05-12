import { useState } from 'react';
import { Linkedin } from 'lucide-react';

export default function ProfileCards() {
  // Sample data based on the image with added LinkedIn URLs
  const profiles = [
    {
      name: "Mr. Rajat Kumar",
      title: "Nandan Capital, Ex McKinsey and Wharton Alum",
      company: "",
      image: "/rajat-bg-bw.png",
      linkedin: "https://www.linkedin.com/in/rajat-kumar-004533",
      logos: [
        { src: "/wharton.png", alt: "Wharton" },
        { src: "/nandancapital.png", alt: "nandan capital" },
        { src: "/ck.png", alt: "calvin klein" }
      ]
    },
    {
      name: "Mr. Mayank Kapoor",
      title: "CTO CarDekho, Alum IIT Delhi & MIT",
      company: "",
      image: "/mayank-bg-bw.png",
      linkedin: "https://www.linkedin.com/in/mayankkapoor/",
      logos: [
        { src: "/iit.png", alt: "IIT" },
        { src: "/mit2.png", alt: "mit" },
        { src: "/cardekho.png", alt: "Cardekho" }
      ]
    },
    {
      name: "Mr. Shalabh Gupta",
      title: "Founder NUUK, Alum IIT Delhi & IIM Ahmedabad",
      company: "",
      image: "/shalabh-bg-bw.png",
      linkedin: "https://www.linkedin.com/in/shalabh-gupta/",
      logos: [
        { src: "/iima.png", alt: "Logo 1" },
        { src: "/nuuk.png", alt: "Logo 2" },
        { src: "/noise.png", alt: "noise" }
      ]
    }
  ];

  return (
    <div className="flex flex-col w-full bg-white">
      {/* Added Heading Section */}
      <div className="text-center pt-10 mb-10">
        <h2 className="text-4xl font-bold text-primary mb-2">Leaders and Mentors Associated</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto"></div>
        <p className="text-gray-600 mt-2 max-w-2xl mx-auto text-l">
          Learn from top industry leaders who have made a significant impact.
        </p>
      </div>
      
      <div className="flex justify-center items-center px-4 py-2 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl">
          {profiles.map((profile, index) => (
            <ProfileCard key={index} profile={profile} />
          ))}
        </div>
      </div>
    </div>
  );
}

// Custom filled LinkedIn icon component
function LinkedInFilled({ size = 24, color = "currentColor" }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill={color}
      stroke="none"
    >
      <path d="M20.47,2H3.53A1.45,1.45,0,0,0,2.06,3.43V20.57A1.45,1.45,0,0,0,3.53,22H20.47a1.45,1.45,0,0,0,1.47-1.43V3.43A1.45,1.45,0,0,0,20.47,2ZM8.09,18.74h-3v-9h3ZM6.59,8.48a1.56,1.56,0,1,1,0-3.12,1.57,1.57,0,1,1,0,3.12ZM18.91,18.74h-3V13.91c0-1.38-.49-2.18-1.72-2.18A1.89,1.89,0,0,0,12.42,13a2.83,2.83,0,0,0-.06.74v5h-3s0-8.18,0-9h3V11A3.29,3.29,0,0,1,15.46,9.5c2.17,0,3.45,1.43,3.45,4.59Z" />
    </svg>
  );
}

function ProfileCard({ profile }) {
  return (
    <div className="rounded-lg overflow-hidden bg-white border border-gray-800 relative h-6xl w-64 pb-2 shadow-2xl">
      {/* Yellow brush stroke effect in background */}
      <div className="absolute top-0 right-0 w-2/3 h-2/3 bg-yellow-400 opacity-70 rounded-full blur-xl transform translate-x-8 -translate-y-8 z-0"></div>
      
      {/* Dark gradient overlay */}
      <div className="absolute inset-0"></div>
      
      {/* Card content */}
      <div className="relative z-20 h-full flex flex-col">
        {/* Image section with positioned LinkedIn button */}
        <div className="flex-grow flex items-center justify-center overflow-hidden relative">
          <img 
            src={profile.image} 
            alt={profile.name} 
            className="w-full h-72 object-cover object-center"
          />
          
          {/* LinkedIn button - positioned in bottom left corner of the image with filled icon */}
          <a 
            href={profile.linkedin} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="absolute bottom-4 right-4 z-30 bg-blue-900 rounded-full p-2 shadow-md hover:bg-blue-700 transition-colors duration-300"
            aria-label={`View ${profile.name}'s LinkedIn profile`}
          >
            <LinkedInFilled size={20} color="white" />
          </a>
        </div>
        
        {/* Text content */}
        <div className="p-3 text-black">
          <h3 className="font-bold text-lg">{profile.name}</h3>
          <p className="text-m text-black">
            {profile.title}<br />
            {profile.company}
          </p>
          
          {/* Logos */}
          <div className="flex items-left max-w-10 gap-2 mt-3">
            {profile.logos.map((logo, idx) => (
              <img 
                key={idx}
                src={logo.src} 
                alt={logo.alt}
                className="h-10 object-contain"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}