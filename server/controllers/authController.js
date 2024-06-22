const User = require("../models/UserModel");
const bcrypt = require('bcrypt');

const createUser = async (req, res) => {
  const { name, email, password, confirmPassword, gender } = req.body;
  try {
    if (!name || !email || !password) {
      return res.status(405).send("Field Missing.");
    }
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      return res.status(401).send("User already exist");
    }
    const newUser = new User({
      name,
      email,
      password,
    });
    const savedUser = await newUser.save();
  } catch (error) {
    console.error("Error creating user", error.message);
    res.status(500).send("Server error");
  }
};
const loginUser = (req, res) => {};

const logoutUser = (req, res) => {};
module.exports = { createUser, loginUser, logoutUser };
