import { Route, Routes } from "react-router-dom";
import Start from "./pages/Start";
import UserLogin from "./pages/UserLogin";
import UserRegister from "./pages/UserRegister";
import DriverLogin from "./pages/DriverLogin";
import DriverRegister from "./pages/DriverRegister";
import Home from "./pages/Home";
import UserProtectedWrapper from "./protectedRoutes/UserProtectedWrapper";
import UserLogout from "./pages/UserLogout";
import DriverLogout from "./pages/DriverLogout";
import DriversHome from "./pages/DriversHome";
import DriversProtectedWrapper from "./protectedRoutes/DriverProtectedWrapper";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/users/register" element={<UserRegister />} />
        <Route path="/users/login" element={<UserLogin />} />
        <Route path="/drivers/register" element={<DriverRegister />} />
        <Route path="/drivers/login" element={<DriverLogin />} />
        <Route
          path="/drivers-home"
          element={
            <DriversProtectedWrapper>
              <DriversHome />
            </DriversProtectedWrapper>
          }
        />
        <Route
          path="users/logout"
          element={
            <DriversProtectedWrapper>
              <UserLogout />
            </DriversProtectedWrapper>
          }
        />
        <Route
          path="drivers/logout"
          element={
            <UserProtectedWrapper>
              <DriverLogout />
            </UserProtectedWrapper>
          }
        />
        <Route
          path="/home"
          element={
            <UserProtectedWrapper>
              <Home />
            </UserProtectedWrapper>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
