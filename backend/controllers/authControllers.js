const express = require("express");
const User = require("../models/userSchema");
const getJWTToken = require("../config/generateToken");
const jwt = require("jsonwebtoken");

const signUp = async (req, res) => {
  try {
    const { name, email, password, phoneNumber } = req.body;
    if (!name || !email || !password || !phoneNumber) {
      res
        .status(404)
        .json({ success: false, error: "all fields are required" });
    }

    const isUserExists = await User.findOne({ email });

    if (isUserExists) {
      res.status(404).json({ success: false, message: "User allready exists" });
    }

    const user = await User.create({ name, email, password, phoneNumber });
    console.log("user", user);
    if (user) {
      res.status(200).json({ success: true, message: "User is created", user });
    }
  } catch (error) {
    console.log("error in signp");
    throw new Error(error);
  }
};

const signIn = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      console.log("email and password required");
      throw new Error("email and password required");
    }

    const user = await User.findOne({ email }).select("+password");
    const isPasswordMatched = await user.matchPassword(password);

    if (!isPasswordMatched) {
      throw new Error("Invalid email and password");
    }
    const token = jwt.sign({ _id: user._id }, process.env.SECRET_KEY, {
      expiresIn: "30d",
    });
    res.status(200).json({ success: true, user, token });
  } catch (error) {
    console.log("error", error);
  }
};

module.exports = { signUp, signIn };
