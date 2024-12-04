import express from "express";
import { body } from "express-validator";
import {
  getDriverProfile,
  loginDriver,
  logOutDriver,
  registerDriver,
} from "../controllers/driver.js";
import isAuthenticatedDriver from "../middlewares/isAuthenticatedDriver.js";

const router = express.Router();

router.post(
  "/register",
  [
    body("email").isEmail().withMessage("Invalid Email"),
    body("firstName")
      .isLength({ min: 3 })
      .withMessage("First name should be of atleast 3 character"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password should be of atleast 6 characters"),
    body("vehicleColor")
      .isLength({ min: 3 })
      .withMessage("Color must be at least 3 characters"),
    body("vehiclePlate").isLength({ min: 3 }).withMessage("Invalid Plate Number"),
    body("vehicleCapacity").isLength({ min: 1 }).withMessage("Invalid Capacity"),
    body("vehicleType")
      .isIn(["car", "motorcycle", "auto"])
      .withMessage("Invalid vehicle"),
  ],
  registerDriver
);
router.post(
  "/login",
  [
    body("email").isEmail().withMessage("Invalid Email"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password should be of atleast 6 characters"),
  ],
  loginDriver
);
router.get("/profile", isAuthenticatedDriver, getDriverProfile);
router.get("/logout", logOutDriver);

export default router;
