import mongoose from "mongoose";

const blackListToken = new mongoose.Schema({
  token: {
    type: String,
    required: true,
    unique: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: 86400,
  },
});

export const BlackListTokens = mongoose.model("BlackListToken", blackListToken);
