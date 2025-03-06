import { Star } from "lucide-react";
import React from "react";
import google from "../../../../public/google.webp";

const ReviewCard = ({ review }) => {
  return (
    <div className="flex flex-col w-80 gradient-border">
      <div className="flex flex-col gap-4 z-10 p-8 bg-gradient-to-tr from-transparent via-transparent to-pink-500/30">
        <p className="text-lg text-white font-thin line-clamp-[8]">
          {review?.content}
        </p>
        <div className="divider -my-2"></div>
        <div className="flex flex-row items-center gap-4">
          <div className="flex items-center justify-center size-16 rounded-full gradient-btn text-2xl font-semibold">
            {review?.author[0]}
          </div>

          <div className="flex flex-col gap-1">
            <p className="text-lg text-white line-clamp-1">{review?.author}</p>
            <div className="flex items-center text-pink-600">
              <Star />
              <Star />
              <Star />
              <Star />
              <Star />
              <img src={google.src} className="size-5 ms-2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
