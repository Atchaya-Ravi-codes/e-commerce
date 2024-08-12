import React from "react";
import { Card, CardContent } from "../ui/card";
import { Rating } from "../ProductCard/Rating";
import Image from "next/image";
import { reviewType } from "./types";

interface ReviewCardProps {
  review: reviewType;
}

export const ReviewCard = ({ review }: ReviewCardProps) => {
  return (
    <Card className="rounded-[20px]">
      <CardContent className="p-6 lg:p-8 justify-start">
        <Rating rating={review.rating} displayNumber={false} />
        <div className="flex gap-x-[6px] pt-4">
          <span className="text-base lg:text-xl font-bold">{review.name}</span>
          {review.verified && (
            <Image
              alt="verified-icon"
              src="/images/verified.svg"
              width={24}
              height={24}
            />
          )}
        </div>
        <div className="text-sm lg:text-base pt-3 text-[#00000099]">&ldquo;{review.comment}&ldquo;</div>
      </CardContent>
    </Card>
  );
};
