import mongoose from "mongoose";
import User from "../models/users.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { iCloudinary } from "../utils/cloudinary.js";

export const updateProfilePicture = async (req, res) => {
  const imageUrl = req.body.imageUrl;
  console.log(req.body);
  const user = await User.findOneAndUpdate(
    {
      email: req.body.email,
    },
    { $set: { imageUrl: imageUrl } },
    { returnOriginal: false }
  );
  if (user) {
    return res.json({ status: "ok", user: user });
  } else {
    res.json({ status: "error", user: false, body: "Error" });
  }
};
