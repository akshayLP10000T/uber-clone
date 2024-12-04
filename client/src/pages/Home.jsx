import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Link to={"/users/logout"}>User Logout</Link>
    </div>
  );
};

export default Home;
