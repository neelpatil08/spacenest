const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcryptjs");
require("dotenv").config();

const app = express();

// ===== Middleware =====
app.use(cors());
app.use(express.json());

// ===== Schema =====
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const User = mongoose.model("User", userSchema);

// ===================== SIGNUP =====================
app.post("/signup", async (req, res) => {
  console.log("🔥 HIT SIGNUP API");
  console.log("SIGNUP BODY 👉", req.body);

  try {
    const { name, email, password } = req.body;

    // ✅ Validation
    if (!name || !email || !password) {
      return res.status(400).json({
        message: "All fields required ❌",
      });
    }

    // ✅ Check existing user
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        message: "User already exists ❌",
      });
    }

    // ✅ Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // ✅ Create user
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    // ✅ IMPORTANT: Send user back (fix for navbar)
    return res.status(201).json({
      message: "Signup successful ✅",
      user: {
        name: newUser.name,
        email: newUser.email,
      },
    });

  } catch (error) {
    console.log("🔥 SIGNUP ERROR 👉", error);
    return res.status(500).json({
      message: "Server error ❌",
    });
  }
});

// ===================== LOGIN =====================
app.post("/login", async (req, res) => {
  console.log("🔥 HIT LOGIN API");
  console.log("LOGIN BODY 👉", req.body);

  try {
    const { email, password } = req.body;

    // ✅ Validation
    if (!email || !password) {
      return res.status(400).json({
        message: "All fields required ❌",
      });
    }

    // ✅ Find user
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        message: "User not found ❌",
      });
    }

    // ✅ Compare password
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({
        message: "Wrong password ❌",
      });
    }

    // ✅ Send user data
    return res.status(200).json({
      message: "Login successful ✅",
      user: {
        name: user.name,
        email: user.email,
      },
    });

  } catch (error) {
    console.log("🔥 LOGIN ERROR 👉", error);
    return res.status(500).json({
      message: "Server error ❌",
    });
  }
});

// ===== Health Check Route =====
app.get("/", (req, res) => {
  res.send("API is running 🚀");
});

// ===== Start Server =====
const startServer = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB Connected ✅");

    app.listen(5000, () => {
      console.log("Server running on http://localhost:5000 🚀");
    });

  } catch (err) {
    console.log("Mongo Error ❌", err);
  }
};

startServer();