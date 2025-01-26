import React from "react";
import { FaStar } from "react-icons/fa";

const WaitingForDriver = () => {
  return (
    <div className="bg-white flex flex-col justify-center items-center py-5 px-10 w-full">
      <div className="flex items-center justify-between w-full">
        <h1 className="text-3xl font-bold">Looking for a driver</h1>
        <div className="flex flex-col items-center bg-black text-white px-5 py-2 rounded-md text-lg tracking-tight">
          <p>1</p>
          <p>min</p>
        </div>
      </div>
      <div className="flex items-center justify-between w-full">
        <img
          className="md:w-80 w-52"
          src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png"
          alt=""
        />
        <div className="text-end text-lg">
          <p className="uppercase text-bold">SANTH</p>
          <p className="text-3xl font-extrabold">KA15AK00-0</p>
          <p className="text-gray-600">White Suzuki S-Presso LXI</p>
          <p className="flex justify-end items-center gap-1 text-gray-600">
            <FaStar /> 4.9
          </p>
        </div>
      </div>
    </div>
  );
};

export default WaitingForDriver;
