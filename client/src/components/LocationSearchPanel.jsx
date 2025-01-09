import React from "react";
import { FaLocationDot } from "react-icons/fa6";

const LocationSearchPanel = (props) => {
  return (
    <div className="grid grid-cols-1">
      <div
        onClick={() => {
          props.setVehiclePanel(true);
          props.setFullScreen(false);
        }}
        className="flex items-center justify-start hover:bg-gray-100 px-2 py-3 rounded-md cursor-pointer"
      >
        <div className="bg-gray-200 w-fit p-3 rounded-full mr-5">
          <FaLocationDot size={20} />
        </div>
        <div>
          <h4 className="font-extrabold text-lg">Raja Park</h4>
          <p className="text-sm text-gray-700 line-clamp-4">
            Raja Park, Shakurpur, Delhi-34 Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Iure consectetur molestiae quasi
            inventore non pariatur ullam, facilis est maiores mollitia harum
            ipsum aspernatur expedita quam obcaecati sequi earum vitae aperiam.
          </p>
        </div>
      </div>
      <div
        onClick={() => {
          props.setVehiclePanel(true);
          props.setFullScreen(false);
        }}
        className="flex items-center justify-start hover:bg-gray-100 px-2 py-3 rounded-md cursor-pointer"
      >
        <div className="bg-gray-200 w-fit p-3 rounded-full mr-5">
          <FaLocationDot size={20} />
        </div>
        <div>
          <h4 className="font-extrabold text-lg">Raja Park</h4>
          <p className="text-sm text-gray-700 line-clamp-4">
            Raja Park, Shakurpur, Delhi-34 Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Iure consectetur molestiae quasi
            inventore non pariatur ullam, facilis est maiores
          </p>
        </div>
      </div>
      <div
        onClick={() => {
          props.setVehiclePanel(true);
          props.setFullScreen(false);
        }}
        className="flex items-center justify-start hover:bg-gray-100 px-2 py-3 rounded-md cursor-pointer"
      >
        <div className="bg-gray-200 w-fit p-3 rounded-full mr-5">
          <FaLocationDot size={20} />
        </div>
        <div>
          <h4 className="font-extrabold text-lg">Raja Park</h4>
          <p className="text-sm text-gray-700 line-clamp-4">
            Raja Park, Shakurpur, Delhi-34 Lorem ipsum dolor sit amet,
            consectetur adipisicing elit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LocationSearchPanel;
