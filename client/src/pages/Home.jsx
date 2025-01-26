import React, { useRef, useState, useEffect } from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import { gsap } from "gsap";
import LocationSearchPanel from "../components/LocationSearchPanel";
import { FaUser } from "react-icons/fa";
import { FaRupeeSign } from "react-icons/fa";
import ConfirmRide from "../components/ConfirmRide";
import LocatingDriver from "../components/LocatingDriver.jsx";
import WaitingForDriver from "../components/WaitingForDriver.jsx";
import Riding from "./Riding.jsx";

const Home = () => {
  const [fullScreen, setFullScreen] = useState(false);
  const [formData, setFormData] = useState({
    pickUp: "",
    destination: "",
  });
  const panel = useRef(null);
  const [vehiclePanel, setVehiclePanel] = useState(false);
  const [confirmRidePanel, setConfirmRidePanel] = useState(false);
  const [locatingDriver, setLocatingDriver] = useState(false);
  const [waitingForDriver, setWaitingForDriver] = useState(false);
  const [ridingPanel, setRidingPanel] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    setFullScreen(true);
  };

  useEffect(() => {
    if (fullScreen) {
      gsap.to(panel.current, {
        height: "100%",
        duration: 0.5,
        ease: "power2.out",
        opacity: 1,
        display: "block",
      });
    } else {
      gsap.to(panel.current, {
        height: "0",
        duration: 0.5,
        ease: "power2.out",
        opacity: 0,
      });
    }
  }, [fullScreen]);

  return (
    <div className="relative max-h-screen overflow-hidden">
      <div>
        {/* Temporary image */}
        <img
          className="h-screen w-screen object-center object-cover"
          src="https://www.addictivetips.com/app/uploads/2017/11/google-maps-search-this-area.jpg"
          alt=""
        />
      </div>
      <div className="absolute bottom-0 left-0 w-screen flex flex-col justify-end h-screen">
        <div className="bg-white px-5 py-2">
          <div className="flex items-center justify-between">
            <h2 className="md:text-4xl text-2xl font-bold">Find Your Trip</h2>

            {fullScreen ? (
              <FaArrowDown
                className="cursor-pointer"
                size={24}
                onClick={() => {
                  setFullScreen(!fullScreen);
                  console.log(fullScreen);
                }}
              />
            ) : (
              <FaArrowUp
                className="cursor-pointer"
                size={24}
                onClick={() => {
                  setFullScreen(!fullScreen);
                }}
              />
            )}
          </div>
          <form className="space-y-2 mt-5" onSubmit={(e) => submitHandler(e)}>
            <div>
              <input
                type="text"
                placeholder="Enter your pick up"
                className="bg-gray-200 w-full rounded-md px-10 py-3"
                value={formData.pickUp}
                onChange={(e) =>
                  setFormData({ ...formData, pickUp: e.target.value })
                }
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Enter you destination"
                className="bg-gray-200 w-full rounded-md px-10 py-3"
                value={formData.destination}
                onChange={(e) =>
                  setFormData({ ...formData, destination: e.target.value })
                }
              />
            </div>
            <div>
              <button className="bg-black text-white px-10 py-3 rounded-md text-lg duration-200 transition-colors hover:bg-gray-900">
                Find
              </button>
            </div>
          </form>
        </div>
        <div
          ref={panel}
          className={`bg-white ${
            fullScreen ? "flex-1 px-5 py-2" : "hidden"
          } pt-10`}
        >
          <LocationSearchPanel
            setVehiclePanel={setVehiclePanel}
            setFullScreen={setFullScreen}
          />
        </div>
      </div>
      <div
        className={`absolute ${
          vehiclePanel ? "" : "translate-y-[200%]"
        } border-t-2 border-gray-600 transition-all duration-500 bottom-0 left-0 w-screen flex flex-col justify-end h-fit`}
      >
        <div className="bg-white px-5 py-2">
          <div className="flex items-center justify-between">
            <h2 className="md:text-4xl text-2xl font-bold">Choose a vehicle</h2>
            <FaArrowDown
              className="cursor-pointer"
              onClick={() => setVehiclePanel(false)}
              size={22}
            />
          </div>
          <div
            onClick={() => {
              setVehiclePanel(false);
              setConfirmRidePanel(true);
            }}
            className="flex items-center justify-between border-2 border-gray-400 rounded-md hover:bg-gray-100 cursor-pointer transition-color duration-200 md:px-5 px-1 mt-5 py-2"
          >
            <div>
              <img
                className="md:w-28 w-16 scale-125"
                src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png"
                alt=""
              />
            </div>
            <div>
              <div className="flex justify-center flex-col">
                <div className="flex gap-2">
                  <h3 className="md:text-2xl text-lg font-extrabold">Car</h3>
                  <div className="flex items-center">
                    <FaUser />
                    <p>4</p>
                  </div>
                </div>
                <h4 className="font-bold md:text-xl text-sm">2 min away</h4>
                <p className="text-gray-600 md:text-xl text-sm">
                  Affordable, compact rides
                </p>
              </div>
            </div>
            <div className="flex items-center gap-1 md:text-xl text-xs font-extrabold">
              <FaRupeeSign />
              <p>193.12</p>
            </div>
          </div>
          <div
            onClick={() => {
              setVehiclePanel(false);
              setConfirmRidePanel(true);
            }}
            className="flex items-center justify-between border-2 border-gray-400 rounded-md hover:bg-gray-100 cursor-pointer transition-color duration-200 md:px-5 px-1 mt-5 py-2"
          >
            <div>
              <img
                className="md:w-28 w-16"
                src="https://th.bing.com/th/id/OIP.d8J8LRVmUFEe4d-KAZTL6QHaEN?rs=1&pid=ImgDetMain"
                alt=""
              />
            </div>
            <div>
              <div className="flex justify-center flex-col">
                <div className="flex gap-2">
                  <h3 className="md:text-2xl text-lg font-extrabold">Moto</h3>
                  <div className="flex items-center">
                    <FaUser />
                    <p>1</p>
                  </div>
                </div>
                <h4 className="font-bold md:text-xl text-sm">5 min away</h4>
                <p className="text-gray-600 md:text-xl text-sm">
                  Affordable, compact rides
                </p>
              </div>
            </div>
            <div className="flex items-center gap-1 md:text-xl text-xs font-extrabold">
              <FaRupeeSign />
              <p>193.12</p>
            </div>
          </div>
          <div
            onClick={() => {
              setVehiclePanel(false);
              setConfirmRidePanel(true);
            }}
            className="flex items-center justify-between border-2 border-gray-400 rounded-md hover:bg-gray-100 cursor-pointer transition-color duration-200 md:px-5 px-1 mt-5 py-2"
          >
            <div>
              <img
                className="md:w-28 w-16"
                src="https://th.bing.com/th/id/OIP.gERohywpalGF3NjolmHt5wHaE7?rs=1&pid=ImgDetMain"
                alt=""
              />
            </div>
            <div>
              <div className="flex justify-center flex-col">
                <div className="flex gap-2">
                  <h3 className="md:text-2xl text-lg font-extrabold">Auto</h3>
                  <div className="flex items-center">
                    <FaUser />
                    <p>3</p>
                  </div>
                </div>
                <h4 className="font-bold md:text-xl text-sm">3 min away</h4>
                <p className="text-gray-600 md:text-xl text-sm">
                  Affordable, compact rides
                </p>
              </div>
            </div>
            <div className="flex items-center gap-1 md:text-xl text-xs font-extrabold">
              <FaRupeeSign />
              <p>193.12</p>
            </div>
          </div>
        </div>
      </div>
      {confirmRidePanel && (
        <div className="absolute bottom-0 left-0 w-screen flex flex-col justify-end">
          <ConfirmRide setConfirmRidePanel={setConfirmRidePanel} setLocatingDriver={setLocatingDriver} />
        </div>
      )}
      {locatingDriver && (
        <div className="absolute bottom-0 left-0 w-screen flex flex-col justify-end">
          <LocatingDriver />
        </div>
      )}
      {waitingForDriver && (
        <div className="absolute bottom-0 left-0 flex flex-col justify-end w-full">
          <WaitingForDriver />
        </div>
      )}
      {ridingPanel && (
        <div className="absolute bottom-0 left-0 flex flex-col justify-end w-full">
          <Riding />
        </div>
      )}
    </div>
  );
};

export default Home;
