import Image from "next/image";
import React from "react";

interface RatingProps {
  rating: number;
  maxRating?: number;
}

export const Rating = ({ rating, maxRating = 5 }: RatingProps) => {
  const filledStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  return (
    <div className="flex items-center space-x-1 pt-1">
      {Array.from({ length: filledStars }).map((_, index) => (
        <Image alt="full-star" key={index} src="/images/full-star.svg" width={18} height={18}/>
      ))}
      {hasHalfStar && <Image alt="half-star" src="/images/half-star.svg" width={18} height={18}/>}
      <span className="text-xs lg:text-sm text-[#00000099] ml-3">
        {rating.toFixed(1)}/{maxRating}
      </span>
    </div>
  );
};;

