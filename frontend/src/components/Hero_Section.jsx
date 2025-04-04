import React from "react";
import { assets } from "../assets/Assets";
import { FaExchangeAlt } from "react-icons/fa";

const Hero_Section = () => {
  return (
    <>
      <div className="flex justify-around gap-4">
        <div className="relative w-full h-full xl:max-w-[100%] xl:max-h-[500px]">
          <img
            src={assets.ads1}
            className=" w-full h-full xl:max-w-[100%] xl:max-h-[500px] "
          />
          <div className="flex flex-col absolute p-4 top-[0px] w-full">
            <div className="flex flex-col gap-3 xl:max-w-[60%] ">
              <h1 className="text-white text-2xl font-semibold ">
                The Best Platform for Car Rental
              </h1>
              <p className="text-white">
                Ease of doing a car rental safely and reliably. Of course at a
                low price.
              </p>
              <button className="button w-[120px] ">Rental Car</button>
            </div>
            <img
              src={assets.ads1Car}
              className="mt-5 self-center w-full h-full xl:max-w-[250px] "
            />
          </div>
        </div>

        <div className="relative w-full h-full xl:max-w-[100%] xl:max-h-[500px]">
          <img
            src={assets.ads2}
            className=" w-full h-full xl:max-w-[100%] xl:max-h-[500px] "
          />
          <div className="flex flex-col absolute p-4 top-[0px] w-full">
            <div className="flex flex-col gap-3 xl:max-w-[60%] ">
              <h1 className="text-white text-2xl font-semibold ">
                Easy way to rent a car at a low price
              </h1>
              <p className="text-white">
                Providing cheap car rental services and safe and comfortable
                facilities.
              </p>
              <button className="bg-[#5CAFFC] p-[6px] pl-[10px] pr-[10px] text-white rounded-[5px] cursor-pointer w-[120px] hover:bg-[#4d91d1] ">
                Rental Car
              </button>
            </div>
            <img
              src={assets.ads2Car}
              className="mt-5 self-center w-full h-full xl:max-w-[250px] "
            />
          </div>
        </div>
      </div>

      {/* Locations */}
      <div className="flex justify-around items-center gap-12 mt-12">
        {/* Pickup */}
        <div className="bg-white p-2">
          <div className="flex gap-2 items-center">
            <input type="radio" checked name="" id="" />
            <h1 className="font-semibold">Pick-Up</h1>
          </div>
          <div className="grid grid-cols-3">
            <div className="border-r border-r-[#90A3BF] p-3">
              <h1 className="font-semibold">Locations</h1>
              <select className="pr-2 outline-0 text-[#90A3BF] text-sm cursor-pointer ">
                <option value="" selected>
                  Select Your City
                </option>
                <option value="">Lahore</option>
                <option value="">Karachi</option>
                <option value="">Islamabad</option>
              </select>
            </div>

            <div className="border-r border-r-[#90A3BF] p-3">
              <h1 className="font-semibold">Date</h1>
              <select className="pr-2 outline-0 text-[#90A3BF] text-sm cursor-pointer ">
                <option value="" selected>
                  Select Your Date
                </option>
                <option value="2025-04-01">April 1, 2025</option>
                <option value="2025-04-02">April 2, 2025</option>
                <option value="2025-04-03">April 3, 2025</option>
                <option value="2025-04-04">April 4, 2025</option>
              </select>
            </div>

            <div className="p-3">
              <h1 className="font-semibold">Time</h1>
              <select className="pr-2 outline-0 text-[#90A3BF] text-sm cursor-pointer ">
                <option value="" selected>
                  Select Your Time
                </option>
                <option value="10:00 AM">10:00 AM</option>
                <option value="12:00 PM">12:00 PM</option>
                <option value="02:00 PM">02:00 PM</option>
                <option value="04:00 PM">04:00 PM</option>
              </select>
            </div>
          </div>
        </div>

        <button className="button h-[50px] w-[50px] flex items-center justify-center ">
          <FaExchangeAlt />
        </button>

        <div className="bg-white p-2">
          <div className="flex gap-2 items-center">
            <input type="radio" checked name="" id="" />
            <h1 className="font-semibold">Drop-Off</h1>
          </div>
          <div className="grid grid-cols-3">
            <div className="border-r border-r-[#90A3BF] p-3">
              <h1 className="font-semibold">Locations</h1>
              <select className="pr-2 outline-0 text-[#90A3BF] text-sm cursor-pointer ">
                <option value="" selected>
                  Select Your City
                </option>
                <option value="">Lahore</option>
                <option value="">Karachi</option>
                <option value="">Islamabad</option>
              </select>
            </div>

            <div className="border-r border-r-[#90A3BF] p-3">
              <h1 className="font-semibold">Date</h1>
              <select className="pr-2 outline-0 text-[#90A3BF] text-sm cursor-pointer ">
                <option value="" selected>
                  Select Your Date
                </option>
                <option value="2025-04-01">April 1, 2025</option>
                <option value="2025-04-02">April 2, 2025</option>
                <option value="2025-04-03">April 3, 2025</option>
                <option value="2025-04-04">April 4, 2025</option>
              </select>
            </div>

            <div className="p-3">
              <h1 className="font-semibold">Time</h1>
              <select className="pr-2 outline-0 text-[#90A3BF] text-sm cursor-pointer ">
                <option value="" selected>
                  Select Your Time
                </option>
                <option value="10:00 AM">10:00 AM</option>
                <option value="12:00 PM">12:00 PM</option>
                <option value="02:00 PM">02:00 PM</option>
                <option value="04:00 PM">04:00 PM</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero_Section;
