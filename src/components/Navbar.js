import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-between items-center px-[120px] py-[40px] border-box">
        <div className="leading-[27px] font-[700] text-[30px]">
          Raqami Universe
        </div>
        <div className="">
          <ul className="flex gap-x-[19px]">
            <li>About</li>
            <li>Portfolio</li>
            <li>Blog</li>
            <li>Career</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="">
          <button className="p-[10px] w-[120px] rounded-[24px] border-[1px] border-[#030307]">
            Hire us
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
