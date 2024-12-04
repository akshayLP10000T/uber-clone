import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const Start = () => {
  return (
    <div className="flex flex-col w-full h-screen relative">
      <div className='flex-1 bg-[url("./background.jpg")] w-full bg-no-repeat bg-center bg-cover relative'>
        <h1 className="text-white uppercase absolute top-9 left-9 font-extrabold text-3xl">
          BOOKRIDE
        </h1>
      </div>
      <div className="bg-white py-3 px-5 flex flex-col">
        <h2 className="font-extrabold md:text-5xl sm:text-4xl text-2xl text-center">
          Get Started With Us...
        </h2>
        <Link
          className="text-white font-bold text-lg bg-black  text-center mt-5 py-3 rounded-md hover:bg-[#282828] transition-colors duration-200 flex items-center justify-center gap-2"
          to={"/users/login"}
        >
          Continue <FaArrowRight className="mt-1" />
        </Link>
      </div>
    </div>
  );
};

export default Start;
