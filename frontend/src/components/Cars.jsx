import React from "react";
import { CiHeart } from "react-icons/ci";
import { assets } from "../assets/Assets";
import { BsFuelPumpFill } from "react-icons/bs";
import { RiSteering2Fill } from "react-icons/ri";
import { FaUsers } from "react-icons/fa";

const Cars = () => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="text-[#90A3BF]">Popular Car</h1>
        <h1 className="text-[#3563E9] font-semibold cursor-pointer">
          View All
        </h1>
      </div>

      {/* Popular Cars */}
      <div className="">
        <div className="bg-white w-full max-w-[300px] p-2 ">
          <div className="flex justify-between items-center ">
            <h1 className="text-2xl font-bold ">Corolla</h1>
            <h1 className="text-2xl font-bold cursor-pointer ">
              <CiHeart />
            </h1>
          </div>
          <p className="text-[#90A3BF] text-md ">Toyota</p>
          <img src={assets.mainImg} className="mt-4 h-[150px] w-[300px] " />
          <div className="flex items-center justify-around mt-2">
            <h3 className="flex text-[#90A3BF] items-center gap-1 ">
              <BsFuelPumpFill /> <span>80L</span>
            </h3>
            <h3 className="flex text-[#90A3BF] items-center gap-1 ">
              <RiSteering2Fill /> <span>Manual</span>
            </h3>
            <h3 className="flex text-[#90A3BF] items-center gap-1 ">
              <FaUsers /> <span>4 People</span>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cars;
