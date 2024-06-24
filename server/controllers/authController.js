require("dotenv").config();
const User = require("../models/UserModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


let tokenBlacklist = [];

const createUser = async (req, res) => {
  const { name, email, password, confirmPassword, gender } = req.body;
  try {
    if (!name || !email || !password || !confirmPassword || !gender) {
      return res.status(405).send("Field Missing.");
    }

    if (password !== confirmPassword) {
      return res.status(400).send("Passwords do not match.");
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(401).send("User already exists.");
    }

    const newUser = new User({
      name,
      email,
      password,
      gender,
    });

    const savedUser = await newUser.save();
    res.status(201).send("User created successfully");
  } catch (error) {
    console.error("Error creating user", error.message);
    res.status(500).send("Server error");
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      return res.status(401).send("Field Missing");
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).send("Invalid credentials.");
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).send("Invalid credentials.");
    }

    const payload = {
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    };

    const token = jwt.sign(payload, process.env.JWT_TOKEN, { expiresIn: "1h" });

    res.status(200).json({ token , user:payload.user});
  } catch (error) {
    console.error("Error logging in", error.message);
    res.status(500).send("Server error");
  }
};

const logoutUser = (req, res) => {
  const authHeader = req.header("Authorization");
  if (!authHeader) {
    return res.status(400).send("Token missing");
  }

  const token = authHeader.replace("Bearer ", "");
  if (!token) {
    return res.status(400).send("Token missing");
  }

  tokenBlacklist.push(token);
  res.status(200).send("User logged out successfully");
};

const isTokenBlacklisted = (token) => {
  return tokenBlacklist.includes(token);
};

module.exports = { createUser, loginUser, logoutUser, isTokenBlacklisted };
