import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { DriverDataContext } from "../context/DriverContext";
import axios from "axios";

const DriverRegister = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    vehicleColor: "",
    vehiclePlate: "",
    vehicleCapacity: "",
    vehicleType: "",
  });
  const navigate = useNavigate();
  const { driver, setDriver } = React.useContext(DriverDataContext);
  const [loading, setLoading] = useState(false);

  const valueChangeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const registerHandler = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/drivers/register`,
        formData,
        {
          withCredentials: true,
        }
      );

      if (res.status === 201) {
        const data = res.data;

        setDriver(data.user);
        localStorage.setItem("token", data.token);
        setFormData({
          email: "",
          password: "",
          firstName: "",
          lastName: "",
          vehicleColor: "",
          vehiclePlate: "",
          vehicleCapacity: "",
          vehicleType: "",
        });
        navigate("/drivers-home", {
          replace: true,
        });
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
    setLoading(false);
  };

  return (
    <div className="w-full h-screen relative flex items-center justify-center py-5 px-3">
      <h1 className="uppercase absolute top-9 left-9 font-extrabold text-3xl">
        BOOKRIDE
      </h1>
      <div className="w-full md:px-10 px-5">
        <h1 className="w-full text-center text-4xl font-bold mb-6">Register</h1>
        <form className="space-y-2" onSubmit={registerHandler}>
          <div className="w-full">
            <h2 className="text-xl">Full Name</h2>
            <div className="flex gap-5">
              <input
                type="name"
                name="firstName"
                value={formData.firstName}
                onChange={valueChangeHandler}
                placeholder="First Name"
                className="bg-gray-100 px-5 py-3 focus:outline-none rounded-md w-full"
              />
              <input
                type="name"
                name="lastName"
                value={formData.lastName}
                onChange={valueChangeHandler}
                placeholder="Last Name"
                className="bg-gray-100 px-5 py-3 focus:outline-none rounded-md w-full"
              />
            </div>
          </div>
          <div className="w-full">
            <h2 className="text-xl">Email</h2>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={valueChangeHandler}
              placeholder="Enter your email"
              className="bg-gray-100 px-5 py-3 focus:outline-none rounded-md w-full"
            />
          </div>
          <div className="w-full">
            <h2 className="text-xl">Password</h2>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={valueChangeHandler}
              placeholder="Enter your password"
              className="bg-gray-100 px-5 py-3 focus:outline-none rounded-md w-full"
            />
          </div>
          <div className="w-full space-y-2">
            <h2 className="text-xl">Vehicle Information</h2>
            <div className="flex gap-5">
              <input
                type="text"
                name="vehicleColor"
                value={formData.vehicleColor}
                onChange={valueChangeHandler}
                placeholder="Vehicle Color"
                className="bg-gray-100 px-5 py-3 focus:outline-none rounded-md w-full"
              />
              <input
                type="text"
                name="vehiclePlate"
                value={formData.vehiclePlate}
                onChange={valueChangeHandler}
                placeholder="Plate"
                className="bg-gray-100 px-5 py-3 focus:outline-none rounded-md w-full"
              />
            </div>
            <div className="flex gap-5">
              <input
                type="number"
                max={10}
                name="vehicleCapacity"
                value={formData.vehicleCapacity}
                onChange={valueChangeHandler}
                placeholder="Vehicle Capacity"
                className="bg-gray-100 px-5 py-3 focus:outline-none rounded-md w-full"
              />
              <select
                name="vehicleType"
                value={formData.vehicleType}
                onChange={valueChangeHandler}
                className="bg-gray-100 px-5 py-3 focus:outline-none rounded-md w-full"
              >
                <option value="" disabled>
                  Select Vehicle Type
                </option>
                <option value="car">Car</option>
                <option value="motorcycle">Motorcycle</option>
                <option value="auto">Auto</option>
              </select>
            </div>
          </div>
          <div>
            {loading ? (
              <button
                disabled
                className="bg-black text-white w-full py-2 rounded-lg hover:bg-[#262626] transition-colors duration-200"
              >
                Please Wait...
              </button>
            ) : (
              <button
                type="submit"
                className="bg-black text-white w-full py-2 rounded-lg hover:bg-[#262626] transition-colors duration-200"
              >
                Submit
              </button>
            )}
            <p className="w-full text-end text-lg">
              Already a User?{" "}
              <Link
                replace
                to={"/drivers/login"}
                className="text-blue-500 hover:underline"
              >
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DriverRegister;
