import React from "react";
import {
  Carousel,
  CarouselPrevious,
  CarouselNext,
  CarouselContent,
  CarouselItem,
} from "../ui/carousel";
import { ReviewCard } from "./ReviewCard";
import { reviewType } from "./types";

interface ReviewCarouselProps {
  reviews: reviewType[];
}

export const ReviewCarousel = ({ reviews }: ReviewCarouselProps) => {
  return (
    <Carousel className="mt-12 lg:mt-20 mx-4 lg:mx-24">
      <div className="uppercase text-3xl lg:text-5xl font-bold">OUR HAPPY CUSTOMERS</div>
      <CarouselPrevious className="top-8 border-0 left-[90%] lg:left-[94%] bg-transparent hover:bg-transparent" />
      <CarouselNext className="top-8 border-0 left-[97%] bg-transparent hover:bg-transparent" />
      <CarouselContent className="pt-6 lg:pt-10">
        {reviews.map((review) => (
          <CarouselItem key={review.id} className="md:basis-1/2 lg:basis-1/3">
            <ReviewCard review={review} />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};
