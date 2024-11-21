import Image from "next/image";
import React from "react";

const ReviewCard = ({ data }) => {
  return (
    <div
      className="flex flex-col h-fixed w-[100%] rounded-[16px] text-center justify-center items-center gap-[19px]"
      style={{ backgroundColor: data.color }}
    >
      <div>
        <Image src={data.image} alt="Card Logo" height={56} width={96} />
      </div>
      <div>
        <div className="leading-[27px]">{data.rating}</div>
        <div className="leading-[27px]">{data.text}</div>
      </div>
      
    </div>
  );
};

export default ReviewCard;
