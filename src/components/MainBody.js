import React from "react";
import Navbar from "./Navbar";
import FrontCard from "./FrontCard";
import SwiperSlideCustom from "./SwiperSlideCustom";
import CertificateSlide from "./CertificateSlide";
import Review from "./Review";

const MainBody = () => {
  return (
    <div className="relative">
      <div className="relative flex flex-col gap-[60px] pb-[30px] bg-gradient-to-r from-[#D2BEFF] via-[#A0F1FF] to-[#FFFB8A]">
        <Navbar />
        <FrontCard />
      </div>
      <div>
        <SwiperSlideCustom />
      </div>

      <div className="flex flex-col gap-[49px] px-[120px] items-between">
        <CertificateSlide />
        <Review />
      </div>
    </div>
  );
};

export default MainBody;
