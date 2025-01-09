import express from "express";
import connectDB from "./db/connectDB.js";
import cors from "cors";
import userRoute from "./routes/user.js";
import driverRoute from "./routes/driver.js";
import cookieParser from 'cookie-parser';

const app = express();
await connectDB();

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
}));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

app.use("/users", userRoute);
app.use("/drivers", driverRoute);

export default app;
