import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import UserLogin from "./pages/UserLogin";
import UserRegister from "./pages/UserRegister";
import DriverLogin from "./pages/DriverLogin";
import DriverRegister from "./pages/DriverRegister";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users/register" element={<UserRegister />} />
        <Route path="/users/login" element={<UserLogin />} />
        <Route path="/drivers/register" element={<DriverRegister />} />
        <Route path="/drivers/login" element={<DriverLogin />} />
      </Routes>
    </div>
  );
};

export default App;
