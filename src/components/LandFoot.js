import Image from "next/image";
import React from "react";

const LandFoot = () => {
  const rating = 4.9;
  const totalStars = 5;
  return (
    <div className="flex flex-row justify-between items-center px-[120px]">
      <div className="flex flex-row gap-[52px]">
        <div className="flex flex-col gap-[14px]">
          <Image src="/image1.png" alt="Clutch" height={24} width={78} />
          <div className="flex gap-[8px] items-center">
            <div>4.9</div>
            <div className="flex gap-[4px]">
              {Array.from({ length: totalStars }, (v, i) => (
                <svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M7.5 1L9.5085 5.27865L14 5.96898L10.75 9.29758L11.517 14L7.5 11.7787L3.483 14L4.25 9.29758L1 5.96898L5.4915 5.27865L7.5 1Z"
                    fill="#E1C700"
                  />
                </svg>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[14px]">
          <Image src="/image2.png" alt="Google" height={24} width={78} />
          <div className="flex gap-[8px] items-center">
            <div>4.9</div>
            <div className="flex gap-[4px]">
              {Array.from({ length: totalStars }, (v, i) => (
                <svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M7.5 1L9.5085 5.27865L14 5.96898L10.75 9.29758L11.517 14L7.5 11.7787L3.483 14L4.25 9.29758L1 5.96898L5.4915 5.27865L7.5 1Z"
                    fill="#E1C700"
                  />
                </svg>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="ml-[-150px]">
        Starts from <span className="text-[#75F]">$150</span> only
      </div>
      <div>
        <Image src="/certified.png" alt="Certified" height={118} width={118} />
      </div>
    </div>
  );
};

export default LandFoot;
