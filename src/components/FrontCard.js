import React from "react";
import LandFoot from "./LandFoot";

const FrontCard = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-[24px]">
        <div className="flex flex-col items-center">
          <div className="leading-[84px] text-[80px] font-bold">
            Your vision our
          </div>
          <div className="leading-[84px] text-[80px] font-bold">
            design,crafting digital
          </div>
          <div className="leading-[84px] text-[80px] font-bold">
            experiences together
          </div>
        </div>
        <div className="flex flex-col gap-[70px] items-center">
          <div>
            <div className="text-[18px] leading-[27px]">
              Say farewell to clunky enterprise software and embrace a new era
              of seamless user experiences. From design and
            </div>
            <div className="text-[18px] text-center leading-[27px]">
              UX to product innovation, we guide your journey from concept to
              growth
            </div>
          </div>
          <div className="flex flex-col gap-[27px] items-center">
            <div className="text-white rounded-[24px] p-[10px] bg-[#75F] flex justify-center gap-[10px] w-[160px]">
              Contact us
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
              >
                <path
                  d="M1.04405 13.7315L0.554553 13.6295L1.04405 13.7315ZM24.8025 16.2778L24.4366 15.937L24.8025 16.2778ZM20.3478 27.9908L21.7395 22.3875L16.1911 23.9839L20.3478 27.9908ZM13.1895 0.555383C11.3424 1.50559 8.50919 3.28584 5.98145 5.55502C3.46709 7.81218 1.18178 10.618 0.554553 13.6295L1.53354 13.8334C2.09424 11.1413 4.18115 8.515 6.64947 6.29916C9.10441 4.09534 11.8643 2.3617 13.647 1.44462L13.1895 0.555383ZM0.554553 13.6295C0.442471 14.1677 0.497336 14.6679 0.777258 15.0811C1.05008 15.4839 1.4835 15.7246 1.96421 15.8662C2.90928 16.1447 4.26485 16.1061 5.79296 15.9145C8.87492 15.5282 12.9982 14.4676 16.7505 13.5815C18.6367 13.1361 20.4326 12.7337 21.9793 12.474C23.5406 12.2119 24.7925 12.1057 25.6145 12.2214C26.028 12.2796 26.2612 12.385 26.3776 12.4886C26.4627 12.5643 26.521 12.6674 26.4932 12.8894C26.4615 13.142 26.317 13.5166 25.9762 14.0409C25.6403 14.5579 25.1372 15.1849 24.4366 15.937L25.1684 16.6186C25.8909 15.8429 26.4358 15.1689 26.8147 14.5858C27.1889 14.0101 27.4262 13.4855 27.4854 13.0139C27.5484 12.5119 27.4066 12.0659 27.0426 11.7418C26.71 11.4456 26.2453 11.3003 25.7538 11.2312C24.7662 11.0922 23.3808 11.2247 21.8137 11.4878C20.2321 11.7533 18.4086 12.1625 16.5206 12.6083C12.7246 13.5047 8.68093 14.5447 5.66859 14.9223C4.14956 15.1127 2.97615 15.1219 2.24684 14.907C1.89036 14.8019 1.70023 14.6606 1.60521 14.5203C1.51729 14.3905 1.46001 14.1865 1.53354 13.8334L0.554553 13.6295ZM24.4366 15.937C21.4069 19.1898 19.6122 21.6246 18.6609 23.4329L19.5459 23.8985C20.4373 22.2042 22.1636 19.8445 25.1684 16.6186L24.4366 15.937Z"
                  fill="black"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <LandFoot />
    </div>
  );
};

export default FrontCard;
