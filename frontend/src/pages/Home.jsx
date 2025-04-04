import React from "react";
import Hero_Section from "../components/Hero_Section";
import Cars from "../components/Cars";

const Home = () => {
  return (
    <div className="bg-[#F6F7F9] h-full min-h-[100vh] ">
      <div className="pt-8 xl:ml-[30px] xl:mr-[30px] ">
        <Hero_Section />
        <div className="mt-12">
          <Cars />
        </div>
      </div>
    </div>
  );
};

export default Home;
