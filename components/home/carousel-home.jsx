"use client"
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import Image from "next/image";
import { getImageUrl } from "@/lib/image-utils";
import Autoplay from "embla-carousel-autoplay"

const images = [
  { src:  "/home1.png" ,alt: "Students evaluating business ideas at Sharkathon" },
  { src: "/pic2.jpeg", alt: "Teams pitching their startup ideas" },
  { src: "/pic3.jpeg", alt: "Industry mentors guiding participants" },
];

const ImageCarousel = () => {
  return (
    <div className="w-full max-w-3xl mx-auto">
      <Carousel plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]} className="relative w-full">
        <CarouselContent className="flex">
          {images.map((image, index) => (
            <CarouselItem key={index} className="flex justify-center">
              <Image
                src={image.src}
                alt={image.alt}
                width={600}
                height={400}
                className="rounded-lg shadow-xl object-cover"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        
      </Carousel>
    </div>
  );
};

export default ImageCarousel;
