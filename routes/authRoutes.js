const express = require("express");
const {
  requestPasswordReset,
  resetPassword,
} = require("../controllers/authController");

const router = express.Router();

// Route to request a password reset
router.post("/password-reset-request", requestPasswordReset);

// Route to reset the password
router.post("/password-reset", resetPassword);

module.exports = router;
