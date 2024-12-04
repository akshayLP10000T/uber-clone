import React, { useEffect } from "react";
import { useNavigate, Route } from "react-router-dom";

const UserProtectedWrapper = ({ children }) => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(()=>{
      if (!token) navigate("/users/login");
  }, [])

  return <div>{children}</div>;
};

export default UserProtectedWrapper;
