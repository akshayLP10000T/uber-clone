import { validationResult } from "express-validator";
import { User } from "../models/user.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const registerUser = async (req, res) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
      });
    }

    const { firstName, lastName, email, password } = req.body;

    let user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({
        message: "E-mail already taken",
      });
    }

    const hashedPassword = await bcrypt.hash(password.toString(), 10);
    user = User.create({
      fullName: {
        firstName,
        lastName,
      },
      email,
      password: hashedPassword,
    });

    const token = jwt.sign({ _id: user._id }, process.env.SECRET_KEY);

    return res.status(201).json({
      token,
      message: "Account created successfully, login to continue",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Some error occur while creating you account",
    });
  }
};

export const loginUser = async (req, res) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
      });
    }

    const { email, password } = req.body;

    let user = await User.findOne({ email });

    if(!user){
      return res.status(401).json({
        message: "Invalid email or password",
      });
    }

    const isPassMatch = await bcrypt.compare(
      password.toString(),
      user?.password.toString()
    );

    if (!isPassMatch) {
      return res.status(401).json({
        message: "Invalid email or password",
      });
    }

    user = await User.findOne({ email }).select("-password");

    const token = jwt.sign({ _id: user._id }, process.env.SECRET_KEY);

    return res.status(200).json({
      message: `Welcome back ${
        user?.fullName?.firstName + " " + user?.fullName?.lastName
      }`,
      user,
      token,
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      message: "Some error occure while logging to your account",
    });
  }
};
