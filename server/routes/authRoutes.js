const express = require('express');
const { loginUser, createUser, logoutUser } = require('../controllers/authController');
const router = express.Router();


router.post('/resgister', createUser);
router.post('/login', loginUser);
router.post('/logout', logoutUser);

module.exports = router;