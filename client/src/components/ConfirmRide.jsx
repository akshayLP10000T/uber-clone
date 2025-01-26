import React from "react";
import { FaLocationArrow, FaRupeeSign } from "react-icons/fa";

const ConfirmRide = (props) => {
  return (
    <div className="bg-white flex flex-col justify-center items-center py-5 px-10">
      <h1 className="text-3xl font-bold">Confirm Ride</h1>
      <img
        className="md:w-80 w-52 scale-125"
        src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png"
        alt=""
      />
      <div className="h-[1px] mt-5 bg-zinc-100 w-full"></div>
      <div className="mt-5 w-full flex flex-col gap-5">
        <div className="flex gap-5 items-center">
          <FaLocationArrow size={30} />
          <div>
            <h2 className="text-lg font-bold">Raja Park</h2>
            <p>hfdsjfhbdsjf bedishfg sdjg s sdgba, Delhi-34</p>
          </div>
        </div>
        <div className="flex gap-5 items-center">
          <FaLocationArrow size={30} />
          <div>
            <h2 className="text-lg font-bold">Raja Park</h2>
            <p>hfdsjfhbdsjf bedishfg sdjg s sdgba, Delhi-34</p>
          </div>
        </div>
        <div className="flex gap-5 items-center">
          <FaRupeeSign size={30} />
          <p>Cash, Cash</p>
        </div>
      </div>
      <button
        className="bg-green-600 w-full py-5 px-5 mt-5 text-lg text-white font-semibold rounded-xl hover:bg-green-700 duration-200 transition-colors"
        onClick={() => {
          props.setConfirmRidePanel(false);
          props.setLocatingDriver(true);
        }}
      >
        Confirm
      </button>
    </div>
  );
};

export default ConfirmRide;
