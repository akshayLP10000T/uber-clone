import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const DriverLogout = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    const logoutHandler = async () => {
      await axios
        .get(`${import.meta.env.VITE_BASE_URL}/drivers/logout`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          withCredentials: true,
        })
        .then((res) => {
          if (res.status === 200) {
            localStorage.removeItem("token");
            navigate("/drivers/login");
          }
        });
    };
    logoutHandler();
  }, []);

  return <div></div>;
};

export default DriverLogout;
