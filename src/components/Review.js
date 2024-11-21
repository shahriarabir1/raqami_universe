import React from "react";
import ReviewCard from "./ReviewCard";
import cardData from "../api/CardData.json";
const Review = () => {
  return (
    <div className="flex gap-[40px]">
      {cardData.map((item, index) => (
        <ReviewCard data={item} key={index} />
      ))}
    </div>
  );
};

export default Review;
