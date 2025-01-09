import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  fullName: {
    firstName: {
      type: String,
      required: true,
      minlength: [3, "First name should be atleast 3 characters"],
    },
    lastName: {
      type: String,
    },
  },
  email: {
    type: String,
    required: true,
    minlength: [5, "Invalid email"],
  },
  password: {
    type: String,
    required: true,
  },
  socketId: {
    type: String,
  },
});

export const User = mongoose.model("User", userSchema);
