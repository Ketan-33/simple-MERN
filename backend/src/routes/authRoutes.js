// authRoutes.js
const express = require('express');
const router = express.Router();
const User = require('../models/user');
const { authenticateUser } = require('../middleware/authMiddleware'); // Import the authenticateUser middleware

// User login endpoint
router.post('/api/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if user with provided email exists
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Check if password is correct
    if (user.password !== password) {
      return res.status(401).json({ message: "Invalid password" });
    }

    // Authentication successful
    res.status(200).json({ message: "Login successful", user });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Example of using the authenticateUser middleware for a protected route
router.get('/api/protected-route', authenticateUser, (req, res) => {
  res.json({ message: 'You have accessed a protected route' });
});

module.exports = router;
