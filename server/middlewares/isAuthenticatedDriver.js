import { BlackListTokens } from "../models/blackListToken.js";
import { Driver } from "../models/driver.js";
import jwt from "jsonwebtoken";

const isAuthenticatedDriver = async (req, res, next) => {
  const token = req.cookies.token || req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "User not found" });
  }

  const isBlackListed = await BlackListTokens.findOne({ token });

  if (isBlackListed) {
    return res.status(401).json({
      message: "Unauthorized",
    });
  }

  try {
    const decode = jwt.verify(token, process.env.SECRET_KEY);
    const user = await Driver.findById(decode._id).select("-password");

    req.user = user;

    return next();
  } catch (error) {
    return res.status(401).json({ message: "Unauthorized" });
  }
};

export default isAuthenticatedDriver;
