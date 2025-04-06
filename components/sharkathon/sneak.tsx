import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const SneakPeekSection = () => {
  return (
    <section className="py-16 bg-gray-50 text-center" id="sneak-peek">
      <div className="container px-4 max-w-3xl mx-auto">
        <Card className="shadow-md border rounded-xl bg-white p-6 sm:p-8">
          <CardContent className="text-center">
            <h2 className="text-3xl font-bold text-primary">
              Want a Sneak Peek into Sharkathon?
            </h2>
            <p className="text-gray-600 mt-3 text-lg">
              Curious about the challenges ahead? Get a glimpse of the kind of real-world 
              business problems you’ll tackle in India’s premier investment and strategy programme.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default SneakPeekSection;
