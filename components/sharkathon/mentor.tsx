import { getImageUrl } from "@/lib/image-utils";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const MentorsSection = () => {
  const mentors = [
    {
      name: "Mr. Rajat Kumar",
      title: "Nandan Capital, Ex McKinsey and Wharton Alum ",
      imageKey: "founder-rajat",
    },
    {
      name: "Mr. Mayank Kapoor",
      title: "CTO Car Dekho, Alum IIT Delhi & MIT",
      imageKey: "founder-mayank",
    },
    {
      name: "Mr. Shalabh Gupta",
      title: "Founder NUUK, Alum IIT Delhi & IIM Ahmedabad",
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

        {/* Grid Layout: Stacks on Mobile, 2 Columns on Larger Screens */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-20 max-w-4xl mx-auto">
          {mentors.map((mentor, index) => (
            <Card 
              key={index} 
              className="w-64 mx-auto shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <CardHeader className="p-0">
                <AspectRatio ratio={3 / 4}>
                  <img
                    src={getImageUrl(mentor.imageKey) || "/placeholder.svg"}
                    alt={mentor.name}
                    className="w-full h-full object-cover rounded-t-lg transition-transform duration-300 hover:scale-105"
                  />
                </AspectRatio>
              </CardHeader>
              <CardContent className="p-3 text-center">
                <h3 className="font-semibold text-md text-gray-800">{mentor.name}</h3>
                <p className="text-xs text-gray-600">{mentor.title}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MentorsSection;
