import mongoose from "mongoose";
import User from "../models/users.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
export const createUser = async (req, res) => {
  console.log("initiated");
  const password = await bcrypt.hash(req.body.password, 10);
  const user = new User({
    fullname: req.body.fullname,
    email: req.body.email,
    password: password,
  });
  try {
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(409).json({
      error: error.message,
    });
  }
};
export const fetchUser = async (req, res) => {
  // const password = await bcrypt.hash(req.body.password, 10);
  console.log(req.body);
  const user = await User.findOne({
    email: req.body.email,
    // password: req.body.password,
  });
  if (user) {
    console.log(user);
    console.log(req.body.password);
    const passwordIsValid = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (passwordIsValid) {
      const token = jwt.sign(
        {
          fullname: user.fullname,
          password: passwordIsValid,
          email: user.email,
          imageUrl: user.imageUrl,
        },
        "secretadgjl13579"
      );
      console.log(token);

      return res.json({ status: "ok", user: token });
    }
  } else {
    res.json({ status: "error", user: false, body: "password incorrect" });
  }
};
