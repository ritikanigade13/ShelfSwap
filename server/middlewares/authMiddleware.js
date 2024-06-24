const jwt = require("jsonwebtoken");
const { isTokenBlacklisted } = require("../controllers/authController");

const authMiddleware = (req, res, next) => {
  const authHeader = req.header("Authorization");
  if (!authHeader) {
    return res.status(401).send("Access denied. No token provided.");
  }

  const token = authHeader.replace("Bearer ", "");
  if (!token) {
    return res.status(401).send("Access denied. No token provided.");
  }

  if (isTokenBlacklisted(token)) {
    return res.status(401).send("Token is blacklisted.");
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_TOKEN);
    req.user = decoded.user;
    next();
  } catch (ex) {
    res.status(400).send("Invalid token.");
  }
};

module.exports = authMiddleware;
