import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { DriverDataContext } from "../context/DriverContext";
import axios from 'axios';

const DriverLogin = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const { driver, setDriver } = React.useContext(DriverDataContext);
  const [loading, setLoading] = useState(false);

  const valueChangeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const loginHandler = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);

      const res = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/drivers/login`,
        formData,
        {
          withCredentials: true,
        }
      );
  
      if (res.status === 200) {
        const data = res.data;
  
        setDriver(data.user);
        localStorage.setItem("token", data.token);
  
        setFormData({
          email: "",
          password: "",
        });
        navigate("/drivers-home", {
          replace: true,
        });
      }
      
    } catch (error) {
      console.log(error);
    }
    finally{
      setLoading(false);
    }
  };

  return (
    <div className="w-full h-screen relative flex items-center justify-center py-5 px-3">
      <h1 className="uppercase absolute top-9 left-9 font-extrabold text-3xl">
        BOOKRIDE
      </h1>
      <div className="w-full md:px-10 px-5">
        <h1 className="w-full text-center text-4xl font-bold mb-6">
          Sign In As Driver
        </h1>
        <form className="space-y-2" onSubmit={loginHandler}>
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
                Login
              </button>
            )}
            <p className="w-full text-end text-lg">
              Not a user?{" "}
              <Link
                replace
                to={"/drivers/register"}
                className="text-blue-500 hover:underline"
              >
                Register
              </Link>
            </p>
          </div>
          <Link
            to={"/users/login"}
            replace
            className="bg-yellow-100 text-black border-2 border-yellow-600 rounded-xl py-2 w-full hover:bg-yellow-200 hover:border-yellow-500 transition-colors duration-200 block text-center mt-3"
          >
            Are you a rider?
          </Link>
        </form>
      </div>
    </div>
  );
};

export default DriverLogin;
