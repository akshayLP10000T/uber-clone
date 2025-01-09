import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const DriverProtectedWrapper = ({ children }) => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) navigate("/drivers/login");
  }, [token]);

  return <div>{children}</div>;
};

export default DriverProtectedWrapper;
