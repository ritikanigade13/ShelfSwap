const express = require("express");
const cors = require("cors");
const connectDb = require("./dbConfig");
const authRoutes = require("./routes/authRoutes");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3001;

connectDb();

// CORS configuration
app.use(
  cors({
    origin: "http://localhost:3000", 
    methods: ["GET", "POST", "PATCH", "HEAD"], 
    allowedHeaders: ["Content-Type", "Authorization"], 
  })
);

app.use(express.json());

app.use("/api/auth", authRoutes);


app.listen(PORT, () => {
  console.log(`Server is running at port: ${PORT}`);
});
