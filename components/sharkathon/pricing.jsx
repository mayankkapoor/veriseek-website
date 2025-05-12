import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const WavyUnderline = ({ gradientId = "blueYellowGradient", className }) => (
  <svg
    viewBox="0 0 100 6"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={cn("h-[6px] mt-1 block", className)}
    preserveAspectRatio="none"
  >
    <defs>
      <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" style={{ stopColor: '#3B82F6', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#FACC15', stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    <path
      d="M0 3 Q 12.5 6, 25 3 T 50 3 T 75 3 T 100 3"
      stroke={`url(#${gradientId})`}
      strokeWidth="1.5"
      fill="transparent"
    />
  </svg>
);

export function PricingCards() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-20">
      {/* Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-primary">
          Pricing
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto mt-3 rounded-full" />
      </div>

      {/* Cards */}
      <div className="flex flex-col md:flex-row gap-10 items-stretch">
        {/* Card 1 - Pricing Info */}
        <Card
          className={cn(
            "w-full md:w-1/2 bg-primary text-white rounded-2xl shadow-xl",
            "transition-all duration-300 hover:shadow-2xl hover:scale-[1.01]"
          )}
        >
          <CardHeader className="pb-4 pt-8 px-6">
            <div className="text-xl font-semibold tracking-wide uppercase text-white/90">
              + Cost and Logistics
            </div>
          </CardHeader>
          <CardContent className="space-y-10 py-4 px-6">
            <div>
              <p className="text-white text-base mb-1">Price (Individual):</p>
              <div className="relative inline-block">
                <div className="text-3xl font-bold text-white">INR 3,500/-</div>
                <WavyUnderline className="w-96%" />
              </div>
            </div>

            {/* You can uncomment and use this if needed */}
            {/* <div>
              <p className="text-white text-base mb-1">Group Pricing:</p>
              <div className="text-xl font-semibold">INR X,XXX/-</div>
            </div> */}
          </CardContent>
        </Card>

        {/* Card 2 - Format & Facilities */}
        <Card
          className={cn(
            "w-full md:w-1/2 bg-secondary text-white rounded-2xl shadow-2xl",
            "transition-all duration-300 hover:shadow-3xl hover:scale-[1.01]",
            "md:-mt-6 md:-ml-4 z-10"
          )}
        >
          <CardContent className="space-y-6 py-12 px-8">
            <p className="text-base font-medium leading-relaxed text-black">
              + <strong>Hybrid Format:</strong> Students attend the first two rounds online. The final round can be attended online or offline (optional).
            </p>
            <p className="text-base font-medium leading-relaxed text-black">
              + <strong>Inclusions:</strong> Learning resources, competition access, and hospitality provisions are all included.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

export default PricingCards;
