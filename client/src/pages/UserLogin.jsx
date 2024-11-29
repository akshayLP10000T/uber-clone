import React, { useState } from "react";
import { Link } from "react-router-dom";

const UserLogin = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const valueChangeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const loginHandler = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="w-full h-screen relative flex items-center justify-center py-5 px-3">
      <h1 className="uppercase absolute top-9 left-9 font-extrabold text-3xl">
        BOOKRIDE
      </h1>
      <div className="w-full md:px-10 px-5">
        <h1 className="w-full text-center text-4xl font-bold mb-6">Sign In</h1>
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
            <button
              type="submit"
              className="bg-black text-white w-full py-2 rounded-lg hover:bg-[#262626] transition-colors duration-200"
            >
              Login
            </button>
            <p className="w-full text-end text-lg">
              Not a user?{" "}
              <Link
                replace
                to={"/users/register"}
                className="text-blue-500 hover:underline"
              >
                Register
              </Link>
            </p>
          </div>
          <Link
            to={"/drivers/login"}
            replace
            className="bg-green-100 text-black border-2 border-green-600 rounded-xl py-2 w-full hover:bg-green-200 hover:border-green-500 transition-colors duration-200 block text-center mt-3"
          >
            Are you a driver?
          </Link>
        </form>
      </div>
    </div>
  );
};

export default UserLogin;
