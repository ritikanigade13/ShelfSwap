const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    const mongoUri = process.env.MONGO_URI;
    await mongoose.connect(mongoUri);
    console.log("MongoDB Connected!");
  } catch (error) {
    console.error("Error connecting to MongoDB", error.message);
  }
};
module.exports = connectDb;
