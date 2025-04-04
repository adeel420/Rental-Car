const express = require("express");
const User = require("../model/user");
const { sendVerificationCode, welcomeCode } = require("../middleware/email");
const { generateToken, jwtAuthMiddleware } = require("../middleware/jwt");
const bcrypt = require("bcrypt");

const router = express.Router();

router.post("/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check for valid email format
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: "Invalid email format" });
    }

    const existEmail = await User.findOne({ email });
    if (existEmail) {
      return res.status(400).json({ error: "Email already exists" });
    }

    const verificationCode = Math.floor(
      100000 + Math.random() * 900000
    ).toString();

    const user = new User({ name, email, password, verificationCode });
    const response = await user.save();

    sendVerificationCode(email, verificationCode);
    const token = generateToken(response);

    res.status(200).json({ response, token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    if (!user.isVerified) {
      return res.status(401).json({ error: "Please verify your email first" });
    }

    const token = generateToken(user);
    res.status(200).json({ message: "Login successful", token, user });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.post("/verify-email", async (req, res) => {
  try {
    const { code } = req.body;
    const user = await User.findOne({ verificationCode: code });

    if (!user) {
      return res
        .status(404)
        .json({ error: "Invalid or expired verification code" });
    }

    user.isVerified = true;
    user.verificationCode = undefined;
    const response = await user.save();

    await welcomeCode(user.email, user.name);
    res.status(200).json({ message: "Email verified", response });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
