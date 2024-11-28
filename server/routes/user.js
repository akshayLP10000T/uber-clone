import express from "express";
import { body } from "express-validator";
import { loginUser, registerUser } from "../controllers/user.js";

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
  ],
  registerUser
);
router.post(
  "/login",
  [
    body("email").isEmail().withMessage("Invalid Email"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password should be of atleast 6 characters"),
  ],
  loginUser
);

export default router;
